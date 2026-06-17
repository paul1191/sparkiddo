/**
 * SPARKIDDO — SCENARIO ENGINE
 * =====================================================================
 * Smart scenario selection for all Sparkiddo Morals games.
 *
 * FEATURES:
 *   ✅ Never repeats a scenario until ALL eligible ones are exhausted
 *   ✅ Filters by child age range
 *   ✅ Filters by culture (global + child's region)
 *   ✅ Progressive difficulty — harder scenarios unlock as XP grows
 *   ✅ Theme rotation — no two same themes back-to-back
 *   ✅ Growth dimension weighting — shows scenarios that target weak areas
 *   ✅ Reflection prompts every 3rd scenario
 *   ✅ Real-world tips after every scenario
 *   ✅ Streak-aware daily mission selection
 *   ✅ Session logging to Supabase
 *   ✅ Works offline (localStorage fallback)
 *   ✅ Pool exhaustion — auto-resets seen list and starts fresh cycle
 *
 * USAGE:
 *   const engine = new SparkiddoScenarioEngine('shareOrKeep', childProfile);
 *   const scenario = engine.getNext();
 *   engine.recordChoice(scenario.id, choiceOutcome, xpEarned);
 *
 * =====================================================================
 */
// ─────────────────────────────────────────────────────────────────
// MASTER PAYWALL SWITCH
// false = no caps (review-collection era — everyone plays unlimited)
// true  = enforce 3/game/day for free users, unlimited for Plus
// ⚠️  When flipping to true: also add trial bypass here so Spark
//     Week users keep unlimited. See SPARKIDDO_COMPLETE_CONTEXT TD-16.
// ─────────────────────────────────────────────────────────────────
const CAPS_ENABLED = false;

class SparkiddoScenarioEngine {

  /**
   * @param {string} gameKey         — key in SPARKIDDO_SCENARIOS (e.g. 'shareOrKeep')
   * @param {object} childProfile    — from Supabase child_profiles row
   * @param {object} options         — optional overrides
   */
  constructor(gameKey, childProfile, options = {}) {
    if (!window.SPARKIDDO_SCENARIOS || !window.SPARKIDDO_SCENARIOS[gameKey]) {
      throw new Error(`[ScenarioEngine] Unknown game key: "${gameKey}". Did you include scenarios.js?`);
    }

    this.gameKey     = gameKey;
    this.profile     = childProfile;
    this.options     = {
      culture: options.culture || 'IN',       // 'IN' | 'US' | 'global'
      debugMode: options.debugMode || false,
    };

    // Full pool for this game
    this.fullPool = window.SPARKIDDO_SCENARIOS[gameKey];

    // State — loaded from localStorage, updated on each pick
    this.state = this._loadState();

    // Session tracking (in-memory only, per play session)
    this.sessionScenarios = [];
    this.scenarioCount    = 0;

    this._log(`Engine initialised for "${gameKey}" | child: ${childProfile.name} | age: ${this._getAge()} | xp: ${childProfile.xp || 0}`);
  }

  // ─────────────────────────────────────────────────────────────
  // PUBLIC API
  // ─────────────────────────────────────────────────────────────

  /**
   * Get the next scenario to show.
   * Applies all filters + selection logic.
   * @returns {object} scenario object from SPARKIDDO_SCENARIOS
   */
  getNext() {
    const eligible = this._getEligiblePool();

    if (eligible.length === 0) {
      this._log('Pool exhausted — resetting seen list and starting new cycle');
      this.state.seen = [];
      this._saveState();
      return this.getNext(); // recursive, now pool is fresh
    }

    // Apply theme rotation
    const themeFiltered = eligible.filter(s => s.theme !== this.state.lastTheme);
    const pool = themeFiltered.length > 0 ? themeFiltered : eligible;

    // Apply growth dimension weighting
    const weighted = this._applyGrowthWeighting(pool);

    // Final pick
    const scenario = weighted[Math.floor(Math.random() * weighted.length)];

    // Update state
    this.state.seen.push(scenario.id);
    this.state.lastTheme = scenario.theme;
    this.state.lastScenarioId = scenario.id;
    this.scenarioCount++;
    this.sessionScenarios.push(scenario.id);

    this._saveState();
    this._log(`Selected: [${scenario.id}] "${scenario.title}" | difficulty: ${scenario.difficulty} | theme: ${scenario.theme}`);

    // Attach engine metadata to scenario (non-destructive copy)
    return {
      ...scenario,
      _meta: {
        showReflection: this.scenarioCount % 3 === 0,
        cyclePosition: this.state.seen.length,
        totalEligible: this.fullPool.length,
        difficultyLevel: this._getDifficultyLevel(),
      }
    };
  }

  /**
   * Record a child's choice after they answer.
   * Updates growth dimension tracking and logs to Supabase if available.
   *
   * @param {string} scenarioId     — the scenario id
   * @param {string} choiceOutcome  — e.g. 'generous' | 'honest' | 'self'
   * @param {number} xpEarned       — XP from the choice
   * @param {number} timeToDecide   — seconds taken (optional)
   */
  recordChoice(scenarioId, choiceOutcome, xpEarned, timeToDecide = null) {
    const scenario = this.fullPool.find(s => s.id === scenarioId);
    if (!scenario) return;

    // Update local growth tracking
    (scenario.growthDimensions || []).forEach(dim => {
      if (!this.state.dimensionCounts[dim]) this.state.dimensionCounts[dim] = 0;
      this.state.dimensionCounts[dim]++;

      // Track "positive" outcomes per dimension
      const positive = ['generous','honest','kind','fair','wise','responsible','inclusive',
        'respectful','brave','forgiving','helpful','creative kind','brave kind',
        'honest kindly','honest + wise','safe + kind','kind truth'];
      if (positive.includes(choiceOutcome)) {
        if (!this.state.dimensionPositive[dim]) this.state.dimensionPositive[dim] = 0;
        this.state.dimensionPositive[dim]++;
      }
    });

    this.state.totalChoices = (this.state.totalChoices || 0) + 1;
    this._saveState();
    this._log(`Choice recorded: ${scenarioId} → ${choiceOutcome} (+${xpEarned} XP)`);

    // Log to Supabase if available
    this._logToSupabase(scenarioId, choiceOutcome, xpEarned, timeToDecide);
    this._incrementDailyUsage();
  }

  /**
   * Get the child's weakest growth dimension (lowest positive rate).
   * Used internally for weighting, also useful for parent dashboard.
   * @returns {string|null} dimension name or null if insufficient data
   */
  getWeakestDimension() {
    const dims = window.GROWTH_DIMENSIONS || ['empathy','fairness','reasoning','self-regulation','responsibility','focus'];
    let weakest = null;
    let lowestRate = 1;

    dims.forEach(dim => {
      const total    = this.state.dimensionCounts[dim]  || 0;
      const positive = this.state.dimensionPositive[dim] || 0;
      if (total < 2) return; // Not enough data yet
      const rate = positive / total;
      if (rate < lowestRate) { lowestRate = rate; weakest = dim; }
    });

    return weakest;
  }

  /**
   * Get a summary of progress for this game/child combo.
   * @returns {object}
   */
  getProgress() {
    const eligible = this._getEligiblePool();
    return {
      gameKey:          this.gameKey,
      childName:        this.profile.name,
      seen:             this.state.seen.length,
      totalEligible:    eligible.length + this.state.seen.length,
      cycleNumber:      this.state.cycleCount || 1,
      difficultyLevel:  this._getDifficultyLevel(),
      weakestDimension: this.getWeakestDimension(),
      dimensionScores:  this._getDimensionScores(),
      lastPlayed:       this.state.lastPlayed || null,
    };
  }

  /**
   * Reset all seen scenarios for this child+game (start fresh).
   * Does NOT reset growth dimension tracking.
   */
  resetSeen() {
    this.state.seen = [];
    this.state.cycleCount = (this.state.cycleCount || 1) + 1;
    this._saveState();
    this._log('Seen list reset — new cycle started');
  }

  /**
   * Full reset including dimension tracking.
   * Use only if the child profile is being reassigned.
   */
  fullReset() {
    this.state = this._defaultState();
    this._saveState();
    this._log('Full engine reset');
  }

  // ─────────────────────────────────────────────────────────────
  // PAYWALL — FREE TIER DAILY LIMIT
  // ─────────────────────────────────────────────────────────────

  /**
   * Check if this child has hit the free daily limit for this game.
   * Call BEFORE getNext(). If returns true, show the upgrade prompt.
   *
   * Free limit : 3 scenarios per game per day
   * Plus users : unlimited — always returns false
   * Guests     : no limit — encourage signup before restricting
   *
   * @param  {boolean} isPlus  — true if parent account plan === 'plus'
   * @returns {Promise<boolean>}  true = limit reached → show paywall
   */
  async checkDailyLimit(isPlus) {
    if (!CAPS_ENABLED)                      return false; // Master switch — caps off
    if (isPlus)                             return false; // Plus = never blocked
    if (this.profile.id === 'guest')        return false; // Guest = free pass (encourage signup)

    const FREE_DAILY_LIMIT = 3;

    // ── Supabase check (primary) ──────────────────────────────
    if (window.sb) {
      try {
        const today = new Date().toISOString().split('T')[0];
        const { data } = await window.sb
          .from('daily_usage')
          .select('count')
          .eq('child_id',   this.profile.id)
          .eq('game_slug',  this.gameKey)
          .eq('usage_date', today)
          .maybeSingle();

        const count = data?.count || 0;
        this._log(`Daily usage (Supabase): ${count}/${FREE_DAILY_LIMIT} for ${this.gameKey}`);
        return count >= FREE_DAILY_LIMIT;

      } catch (err) {
        this._log('Supabase daily check failed — falling back to localStorage:', err.message);
        // Fall through to localStorage fallback
      }
    }

    // ── localStorage fallback (offline / Supabase unavailable) ──
    const stored = this._getLocalDailyUsage();
    this._log(`Daily usage (localStorage): ${stored.count}/${FREE_DAILY_LIMIT} for ${this.gameKey}`);
    return stored.count >= FREE_DAILY_LIMIT;
  }

  /**
   * Increment daily usage count after a scenario is completed.
   * Called automatically from recordChoice() — do NOT call manually.
   *
   * Uses Supabase RPC (upsert via increment_daily_usage function)
   * + localStorage fallback for offline resilience.
   */
  async _incrementDailyUsage() {
    if (this.profile.id === 'guest') return; // Never track guests

    // ── Supabase increment (primary) ──────────────────────────
    if (window.sb) {
      try {
        await window.sb.rpc('increment_daily_usage', {
          p_child_id:  this.profile.id,
          p_game_slug: this.gameKey,
        });
        this._log('Daily usage incremented in Supabase');
      } catch (err) {
        this._log('Supabase usage increment failed (non-fatal):', err.message);
      }
    }

    // ── localStorage increment (always, for offline fallback) ──
    const stored = this._getLocalDailyUsage();
    const today  = new Date().toISOString().split('T')[0];
    const count  = stored.date === today ? stored.count + 1 : 1;
    this._setLocalDailyUsage({ date: today, count });
    this._log(`Daily usage (localStorage): ${count} for ${this.gameKey}`);
  }

  // ── localStorage helpers for daily usage ────────────────────
  _localDailyKey() {
    return `sparkiddo_daily_${this.profile.id}_${this.gameKey}`;
  }

  _getLocalDailyUsage() {
    try {
      const raw   = localStorage.getItem(this._localDailyKey());
      const today = new Date().toISOString().split('T')[0];
      if (!raw) return { date: today, count: 0 };
      const parsed = JSON.parse(raw);
      // Reset count if stored date is not today
      return parsed.date === today ? parsed : { date: today, count: 0 };
    } catch {
      return { date: new Date().toISOString().split('T')[0], count: 0 };
    }
  }

  _setLocalDailyUsage(data) {
    try {
      localStorage.setItem(this._localDailyKey(), JSON.stringify(data));
    } catch {
      // Storage quota exceeded — ignore, Supabase is the source of truth
    }
  }

  // ─────────────────────────────────────────────────────────────
  // SELECTION LOGIC (PRIVATE)
  // ─────────────────────────────────────────────────────────────

  /**
   * Build the eligible pool by applying all filters:
   *   1. Exclude already-seen scenarios
   *   2. Age filter
   *   3. Culture filter
   *   4. Difficulty cap (progressive unlock)
   */
  _getEligiblePool() {
    const age   = this._getAge();
    const level = this._getDifficultyLevel();
    const culture = this.options.culture;

    return this.fullPool.filter(s => {
      // 1. Not yet seen this cycle
      if (this.state.seen.includes(s.id)) return false;

      // 2. Age range
      if (age < s.ageRange[0] || age > s.ageRange[1]) return false;

      // 3. Culture — show global always, show regional only if matching
      const cultures = s.culture || ['global'];
      const cultureOk = cultures.includes('global') || cultures.includes(culture);
      if (!cultureOk) return false;

      // 4. Difficulty cap
      if (s.difficulty > level) return false;

      return true;
    });
  }

  /**
   * Progressive difficulty unlock:
   *   XP  0–99   → difficulty 1 only
   *   XP 100–499 → difficulty 1 + 2
   *   XP 500+    → difficulty 1 + 2 + 3 (grey zone unlocked)
   */
  _getDifficultyLevel() {
    const xp = this.profile.xp || 0;
    if (xp < 100) return 1;
    if (xp < 500) return 2;
    return 3;
  }

  /**
   * Weight the pool toward the child's weakest growth dimension.
   * If we have enough data: 60% chance to pick from weak dimension pool.
   * If weak dimension pool is empty, fall back to full pool.
   */
  _applyGrowthWeighting(pool) {
    const weakDim = this.getWeakestDimension();
    if (!weakDim) return pool; // not enough data yet — pure random

    const weakPool = pool.filter(s =>
      (s.growthDimensions || []).includes(weakDim)
    );

    if (weakPool.length === 0) return pool;

    // 60% chance to use weak dimension pool
    return Math.random() < 0.6 ? weakPool : pool;
  }

  // ─────────────────────────────────────────────────────────────
  // STATE MANAGEMENT (PRIVATE)
  // ─────────────────────────────────────────────────────────────

  _stateKey() {
    // Unique key per child + game
    return `sparkiddo_engine_${this.profile.id}_${this.gameKey}`;
  }

  _defaultState() {
    return {
      seen:             [],     // scenario ids seen this cycle
      lastTheme:        null,   // last theme shown (for rotation)
      lastScenarioId:   null,
      lastPlayed:       null,
      cycleCount:       1,      // how many full cycles completed
      totalChoices:     0,
      dimensionCounts:  {},     // { empathy: 5, fairness: 3, ... }
      dimensionPositive:{},     // positive outcomes per dimension
    };
  }

  _loadState() {
    try {
      const raw = localStorage.getItem(this._stateKey());
      if (!raw) return this._defaultState();
      const parsed = JSON.parse(raw);
      // Merge with defaults to handle new fields added in updates
      return { ...this._defaultState(), ...parsed };
    } catch (e) {
      this._log('State load failed, using defaults', e);
      return this._defaultState();
    }
  }

  _saveState() {
    try {
      this.state.lastPlayed = new Date().toISOString();
      localStorage.setItem(this._stateKey(), JSON.stringify(this.state));
    } catch (e) {
      this._log('State save failed', e);
    }
  }

  // ─────────────────────────────────────────────────────────────
  // SUPABASE LOGGING (PRIVATE)
  // ─────────────────────────────────────────────────────────────

  /**
   * Log scenario choice to Supabase game_sessions table.
   * Non-blocking — silently fails if Supabase not available.
   * Requires window.sb (Supabase client) to be initialised.
   */
  async _logToSupabase(scenarioId, choiceOutcome, xpEarned, timeToDecide) {
    if (!window.sb || !this.profile.id || this.profile.id === 'guest') return;

    try {
      await window.sb.from('game_sessions').insert({
        child_id:        this.profile.id,
        game_slug:       this.gameKey,
        game_category:   'morals',
        scenario_id:     scenarioId,
        choice_outcome:  choiceOutcome,
        xp_earned:       xpEarned,
        time_to_decide:  timeToDecide,
        played_at:       new Date().toISOString(),
      });

      // Also update child XP
      await window.sb.from('child_profiles').update({
        xp: (this.profile.xp || 0) + xpEarned,
        last_played: new Date().toISOString().split('T')[0],
      }).eq('id', this.profile.id);

      // Update local profile copy
      this.profile.xp = (this.profile.xp || 0) + xpEarned;

    } catch (err) {
      this._log('Supabase log failed (non-fatal):', err.message);
    }
  }

  // ─────────────────────────────────────────────────────────────
  // HELPERS (PRIVATE)
  // ─────────────────────────────────────────────────────────────

  /**
   * Derive child age from profile.
   * Falls back to age_range midpoint if dob not set.
   */
  _getAge() {
    if (this.profile.dob) {
      const diff = Date.now() - new Date(this.profile.dob).getTime();
      return Math.floor(diff / (1000 * 60 * 60 * 24 * 365.25));
    }
    // Use age_group field if set: '3-5' | '6-8' | '9-12'
    if (this.profile.age_group) {
      const [min, max] = this.profile.age_group.split('-').map(Number);
      return Math.floor((min + max) / 2);
    }
    // Default: middle of all age ranges
    return 8;
  }

  /**
   * Compute dimension score (0–1) for each growth dimension.
   */
  _getDimensionScores() {
    const dims = window.GROWTH_DIMENSIONS || ['empathy','fairness','reasoning','self-regulation','responsibility','focus'];
    const scores = {};
    dims.forEach(dim => {
      const total    = this.state.dimensionCounts[dim]   || 0;
      const positive = this.state.dimensionPositive[dim] || 0;
      scores[dim] = total > 0 ? Math.round((positive / total) * 100) : null;
    });
    return scores;
  }

  _log(...args) {
    if (this.options.debugMode) {
      console.log('[SparkiddoEngine]', ...args);
    }
  }
}


// ═══════════════════════════════════════════════════════════════
// DAILY MISSION ENGINE
// Picks 3 scenarios per day across different games for the
// Daily Growth Missions feature.
// ═══════════════════════════════════════════════════════════════

class SparkiddoDailyMissions {

  /**
   * @param {object} childProfile — from Supabase child_profiles
   * @param {object} options      — { culture, weekTheme }
   */
  constructor(childProfile, options = {}) {
    this.profile   = childProfile;
    this.culture   = options.culture || 'IN';
    this.weekTheme = options.weekTheme || null; // e.g. 'kindness'

    this.GAME_CATEGORIES = {
      learn:  [],                                            // future: pull from learnEngine
      morals: ['shareOrKeep','truthOrFib','emotionMatch','kindnessQuest','storyChoices'],
      arcade: [],                                            // future
    };

    this._stateKey = `sparkiddo_daily_${childProfile.id}`;
  }

  /**
   * Get today's 3 missions.
   * Format: [{ gameKey, scenario, engine }]
   * Returns cached missions if already generated today.
   */
  getMissions() {
    const today = new Date().toISOString().split('T')[0];
    const cached = this._loadDailyState();

    if (cached && cached.date === today) {
      this._log('Returning cached daily missions for', today);
      return cached.missions.map(m => ({
        ...m,
        scenario: window.SPARKIDDO_SCENARIOS[m.gameKey]?.find(s => s.id === m.scenarioId),
      })).filter(m => m.scenario); // safety filter
    }

    return this._generateMissions(today);
  }

  /**
   * Mark a mission as completed.
   * @param {string} gameKey
   * @param {string} scenarioId
   * @param {string} choiceOutcome
   * @param {number} xpEarned
   */
  completeMission(gameKey, scenarioId, choiceOutcome, xpEarned) {
    const state = this._loadDailyState() || {};
    if (!state.completed) state.completed = [];
    state.completed.push({ gameKey, scenarioId, choiceOutcome, xpEarned, completedAt: new Date().toISOString() });
    this._saveDailyState(state);
    this._log(`Mission completed: ${gameKey}/${scenarioId}`);
  }

  /**
   * Get today's completion status.
   * @returns {{ total: 3, completed: number, allDone: boolean, missions: [] }}
   */
  getStatus() {
    const state = this._loadDailyState() || {};
    const completed = state.completed || [];
    return {
      total: 3,
      completed: completed.length,
      allDone: completed.length >= 3,
      completedMissions: completed,
      missions: state.missions || [],
    };
  }

  // ─── Private ────────────────────────────────────────────────

  _generateMissions(today) {
    // Pick 3 different moral games
    const games = [...this.GAME_CATEGORIES.morals];
    const picked = [];

    // If week theme is set, ensure at least 1 mission matches
    let themeGame = null;
    if (this.weekTheme) {
      // Find a game that has scenarios for this week's theme
      themeGame = games.find(gk => {
        const pool = window.SPARKIDDO_SCENARIOS[gk] || [];
        return pool.some(s => s.theme === this.weekTheme);
      });
    }

    // Shuffle games for variety
    const shuffled = this._shuffle(games);

    // Pick 3 different games
    const selectedGames = themeGame
      ? [themeGame, ...shuffled.filter(g => g !== themeGame).slice(0, 2)]
      : shuffled.slice(0, 3);

    // For each selected game, get next scenario via its engine
    const missions = [];
    selectedGames.forEach((gameKey, i) => {
      try {
        const engine = new SparkiddoScenarioEngine(gameKey, this.profile, {
          culture: this.culture,
        });
        const scenario = engine.getNext();
        missions.push({
          gameKey,
          scenarioId: scenario.id,
          missionIndex: i + 1,
          label: this._missionLabel(i),
        });
        picked.push({ gameKey, scenarioId: scenario.id });
      } catch (e) {
        this._log('Mission generation error for', gameKey, e.message);
      }
    });

    // Save
    const state = {
      date: today,
      missions,
      completed: [],
    };
    this._saveDailyState(state);
    this._log('Generated new daily missions for', today, missions.map(m => m.gameKey));

    // Return with full scenario objects
    return missions.map(m => ({
      ...m,
      scenario: window.SPARKIDDO_SCENARIOS[m.gameKey]?.find(s => s.id === m.scenarioId),
    })).filter(m => m.scenario);
  }

  _missionLabel(index) {
    return ['🌱 Morning Mission', '☀️ Midday Mission', '🌙 Evening Mission'][index] || `Mission ${index+1}`;
  }

  _loadDailyState() {
    try {
      const raw = localStorage.getItem(this._stateKey);
      return raw ? JSON.parse(raw) : null;
    } catch { return null; }
  }

  _saveDailyState(state) {
    try {
      localStorage.setItem(this._stateKey, JSON.stringify(state));
    } catch (e) {
      this._log('Daily state save failed', e);
    }
  }

  _shuffle(arr) {
    const a = [...arr];
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  _log(...args) {
    console.log('[DailyMissions]', ...args);
  }
}


// ═══════════════════════════════════════════════════════════════
// GROWTH MAP CALCULATOR
// Aggregates dimension scores across ALL moral games for a child.
// Used by the parent dashboard radar chart.
// ═══════════════════════════════════════════════════════════════

class SparkiddoGrowthMap {

  constructor(childProfile) {
    this.profile = childProfile;
    this.games   = ['shareOrKeep','truthOrFib','emotionMatch','kindnessQuest','storyChoices'];
  }

  /**
   * Get the aggregated growth map across all games.
   * @returns {{ dimension: string, score: number|null, label: string }[] }
   */
  getMap() {
    const dims = window.GROWTH_DIMENSIONS || ['empathy','fairness','reasoning','self-regulation','responsibility','focus'];
    const totals   = {};
    const positives = {};
    const counts   = {};

    dims.forEach(d => { totals[d] = 0; positives[d] = 0; counts[d] = 0; });

    // Collect state from all game engines
    this.games.forEach(gameKey => {
      const key = `sparkiddo_engine_${this.profile.id}_${gameKey}`;
      try {
        const raw = localStorage.getItem(key);
        if (!raw) return;
        const state = JSON.parse(raw);
        dims.forEach(d => {
          totals[d]    += (state.dimensionCounts   || {})[d] || 0;
          positives[d] += (state.dimensionPositive || {})[d] || 0;
          if (((state.dimensionCounts || {})[d] || 0) > 0) counts[d]++;
        });
      } catch {}
    });

    return dims.map(dim => ({
      dimension: dim,
      label: this._dimLabel(dim),
      emoji: this._dimEmoji(dim),
      score: totals[dim] > 0
        ? Math.round((positives[dim] / totals[dim]) * 100)
        : null,
      totalAnswered: totals[dim],
      gamesPlayed:   counts[dim],
    }));
  }

  /**
   * Get the top strength and biggest growth area.
   */
  getSummary() {
    const map = this.getMap().filter(d => d.score !== null);
    if (map.length === 0) return { strength: null, growthArea: null };
    const sorted   = [...map].sort((a, b) => b.score - a.score);
    return {
      strength:   sorted[0],
      growthArea: sorted[sorted.length - 1],
    };
  }

  _dimLabel(dim) {
    return {
      empathy:         'Empathy',
      fairness:        'Fairness',
      reasoning:       'Reasoning',
      'self-regulation': 'Self-Control',
      responsibility:  'Responsibility',
      focus:           'Focus',
    }[dim] || dim;
  }

  _dimEmoji(dim) {
    return {
      empathy:         '💗',
      fairness:        '⚖️',
      reasoning:       '🧠',
      'self-regulation': '☮️',
      responsibility:  '🌱',
      focus:           '🎯',
    }[dim] || '⭐';
  }
}


// ═══════════════════════════════════════════════════════════════
// QUICK-START HELPER
// Single function to get next scenario — for simple game integrations
// that don't need the full engine instance management.
// ═══════════════════════════════════════════════════════════════

/**
 * Get the next scenario for a game + child.
 * Creates/reuses a ScenarioEngine under the hood.
 *
 * @param {string} gameKey      — e.g. 'shareOrKeep'
 * @param {object} childProfile — from Supabase
 * @param {object} options      — { culture }
 * @returns {object}            — scenario with _meta attached
 */
function sparkiddoNextScenario(gameKey, childProfile, options = {}) {
  // Cache engines on window to preserve state within a session
  if (!window._sparkiddoEngines) window._sparkiddoEngines = {};
  const cacheKey = `${childProfile.id}_${gameKey}`;

  if (!window._sparkiddoEngines[cacheKey]) {
    window._sparkiddoEngines[cacheKey] = new SparkiddoScenarioEngine(gameKey, childProfile, options);
  }

  return window._sparkiddoEngines[cacheKey].getNext();
}

/**
 * Record a choice via the cached engine.
 */
function sparkiddoRecordChoice(gameKey, childProfile, scenarioId, choiceOutcome, xpEarned, timeToDecide) {
  if (!window._sparkiddoEngines) return;
  const cacheKey = `${childProfile.id}_${gameKey}`;
  const engine = window._sparkiddoEngines[cacheKey];
  if (engine) engine.recordChoice(scenarioId, choiceOutcome, xpEarned, timeToDecide);
}


// ═══════════════════════════════════════════════════════════════
// EXPORTS
// ═══════════════════════════════════════════════════════════════

if (typeof window !== 'undefined') {
  window.SparkiddoScenarioEngine = SparkiddoScenarioEngine;
  window.SparkiddoDailyMissions  = SparkiddoDailyMissions;
  window.SparkiddoGrowthMap      = SparkiddoGrowthMap;
  window.sparkiddoNextScenario   = sparkiddoNextScenario;
  window.sparkiddoRecordChoice   = sparkiddoRecordChoice;
}

if (typeof module !== 'undefined') {
  module.exports = {
    SparkiddoScenarioEngine,
    SparkiddoDailyMissions,
    SparkiddoGrowthMap,
    sparkiddoNextScenario,
    sparkiddoRecordChoice,
  };
}
