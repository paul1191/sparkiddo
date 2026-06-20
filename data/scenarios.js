/**
 * SPARKIDDO — SCENARIO CONTENT LIBRARY
 * =====================================================================
 * Central content file for all Sparkiddo Morals games.
 * All games import from here. Never hardcode scenarios inside game files.
 *
 * SCHEMA PER SCENARIO:
 *   id            — unique string, format: {game_prefix}_{3-digit number}
 *   title         — short display name
 *   setting       — 'home' | 'school' | 'park' | 'festival' | 'online' | 'shop' | 'temple' | 'sports'
 *   characters    — array of who else is involved
 *   ageRange      — [min, max] inclusive
 *   difficulty    — 1 (clear right/wrong) | 2 (some tension) | 3 (genuine grey zone)
 *   theme         — primary growth theme (see THEMES below)
 *   growthDimensions — array of Growth Map dimensions this scenario feeds
 *   culture       — ['global'] | ['IN'] | ['IN','US'] etc. — for localisation
 *   tags          — extra searchable labels
 *   situation     — the scenario text shown to the child
 *   choices       — array of { text, outcome, xp, response, followUp? }
 *   realWorldTip  — shown after play; parent-facing conversation prompt
 *   reflectionPrompt — open-ended no-score question (shown every 3rd scenario)
 *
 * THEMES:        sharing | honesty | kindness | empathy | fairness |
 *                responsibility | courage | self-regulation | gratitude | respect
 *
 * GROWTH DIMENSIONS:
 *                empathy | fairness | reasoning | self-regulation | responsibility | focus
 *
 * TO ADD MORE SCENARIOS: just append to the relevant array. No game file changes needed.
 * =====================================================================
 */

const SPARKIDDO_SCENARIOS = {

  /* ═══════════════════════════════════════════════════════════════
     SHARE OR KEEP — 27 scenarios
     Game: shareorkeep.html
  ═══════════════════════════════════════════════════════════════ */
  shareOrKeep: [

    // ── EASY (difficulty 1) ──────────────────────────────────────

    {
      id: 'sok_001',
      title: 'The Last Slice',
      setting: 'home',
      characters: ['younger sibling'],
      ageRange: [3, 8],
      difficulty: 1,
      theme: 'sharing',
      growthDimensions: ['empathy', 'fairness'],
      culture: ['global'],
      tags: ['food', 'family', 'birthday'],
      situation: "It's your birthday and there's one last slice of cake. Your little sibling is looking at it with big eyes and a hopeful smile.",
      choices: [
        { text: 'Give it to them 🎂', outcome: 'generous', xp: 25,
          response: "You gave away your slice on YOUR birthday! That warmth you feel? That\'s what generosity does to your heart. 🌟" },
        { text: 'Split it in half 🍴', outcome: 'fair', xp: 20,
          response: "Perfect split! Everyone gets some happiness. That\'s wisdom. 🤝" },
        { text: 'Keep it — it\'s my birthday!', outcome: 'self', xp: 8,
          response: "It is your birthday! But look at their face. Sometimes sharing feels even better than having. 💭" }
      ],
      realWorldTip: 'Tonight at dinner, let someone else pick what to watch or eat first.',
      reflectionPrompt: 'Think of a time you shared something you really wanted to keep. How did it feel afterwards?'
    },

    {
      id: 'sok_002',
      title: 'The New Crayons',
      setting: 'school',
      characters: ['classmate'],
      ageRange: [3, 7],
      difficulty: 1,
      theme: 'sharing',
      growthDimensions: ['empathy', 'fairness'],
      culture: ['global'],
      tags: ['art', 'school', 'new kid'],
      situation: "You got brand new crayons today. Your classmate forgot theirs at home and can\'t colour their drawing.",
      choices: [
        { text: 'Share all my crayons 🎨', outcome: 'generous', xp: 25,
          response: "You made their whole day! A good friend shares even brand new things. 🌈" },
        { text: 'Share some, keep my favourites', outcome: 'fair', xp: 20,
          response: "Sharing some is still sharing! You found a balance. That\'s thoughtful. ✨" },
        { text: 'They\'re new — I don\'t want to share', outcome: 'self', xp: 5,
          response: "New things feel precious. But imagine being the one without crayons. What would you wish for? 💭" }
      ],
      realWorldTip: 'Tomorrow, share one thing you love with a friend — even if it\'s a little scary.',
      reflectionPrompt: 'What\'s the hardest thing you\'ve ever shared? Why was it hard?'
    },

    {
      id: 'sok_003',
      title: 'Diwali Sweets',
      setting: 'festival',
      characters: ['neighbour kids'],
      ageRange: [4, 9],
      difficulty: 1,
      theme: 'sharing',
      growthDimensions: ['empathy', 'fairness'],
      culture: ['IN'],
      tags: ['diwali', 'festival', 'sweets', 'community'],
      situation: "You got a huge box of Diwali sweets as a gift. Your neighbours\' kids are watching you through the window — their family couldn\'t afford sweets this year.",
      choices: [
        { text: 'Invite them in and share the whole box 🪔', outcome: 'generous', xp: 30,
          response: "The best part of Diwali is spreading light! You just lit up their whole night. 🪔🌟" },
        { text: 'Give them a small portion 🍬', outcome: 'fair', xp: 20,
          response: "A little sweetness goes a long way. You thought of them. That matters! 💛" },
        { text: 'Close the curtains and eat alone', outcome: 'self', xp: 5,
          response: "It\'s easier not to see. But festivals feel bigger when shared. Try once — see how it feels. 🪔" }
      ],
      realWorldTip: 'This week, share one treat or gift with someone outside your family.',
      reflectionPrompt: 'What does your family share with others during festivals?'
    },

    {
      id: 'sok_004',
      title: 'The Swings',
      setting: 'park',
      characters: ['younger child'],
      ageRange: [4, 8],
      difficulty: 1,
      theme: 'sharing',
      growthDimensions: ['empathy', 'fairness'],
      culture: ['global'],
      tags: ['playground', 'waiting', 'turns'],
      situation: "You\'ve been waiting for the swing for a long time. Just as it\'s finally your turn, a much younger child starts crying because they want a turn too.",
      choices: [
        { text: 'Let the little one go first 🛝', outcome: 'generous', xp: 25,
          response: "You waited so long and still let them go first. That\'s real kindness — not the easy kind. 🌟" },
        { text: '5 minutes for me, then their turn', outcome: 'fair', xp: 20,
          response: "Fair for everyone! You used your turn AND made sure they got one. Smart. 🤝" },
        { text: 'It\'s finally my turn — I\'m keeping it', outcome: 'self', xp: 8,
          response: "You did wait a long time. But small kids get overwhelmed easily. Maybe just a few minutes? 💭" }
      ],
      realWorldTip: 'At the next playground or game, let someone else go first — notice how they react.',
      reflectionPrompt: 'Is it ever okay NOT to share? When?'
    },

    {
      id: 'sok_005',
      title: 'Eid Ki Seviyan',
      setting: 'home',
      characters: ['friend from different background'],
      ageRange: [5, 10],
      difficulty: 1,
      theme: 'sharing',
      growthDimensions: ['empathy', 'respect'],
      culture: ['IN'],
      tags: ['eid', 'festival', 'food', 'friendship'],
      situation: "Your family made special Eid seviyan (sweet vermicelli). Your classmate who has never tried it is visiting. There\'s only enough for the family.",
      choices: [
        { text: 'Give them your portion to try 🍜', outcome: 'generous', xp: 25,
          response: "You shared your culture AND your food! That\'s a beautiful double gift. 🌙✨" },
        { text: 'Give a small taste from everyone\'s bowl', outcome: 'fair', xp: 20,
          response: "A taste is enough to create a memory. Lovely idea! 🌙" },
        { text: 'It\'s only for the family today', outcome: 'self', xp: 8,
          response: "That\'s okay. But food shared across different families creates special friendships. 💭" }
      ],
      realWorldTip: 'Share something from your culture — a food, a song, a tradition — with a friend this week.',
      reflectionPrompt: 'What\'s a special food or tradition in your family that you\'d love to share with friends?'
    },

    // ── MEDIUM (difficulty 2) ────────────────────────────────────

    {
      id: 'sok_006',
      title: 'The Only Book',
      setting: 'school',
      characters: ['two classmates'],
      ageRange: [6, 10],
      difficulty: 2,
      theme: 'fairness',
      growthDimensions: ['fairness', 'reasoning'],
      culture: ['global'],
      tags: ['school', 'resources', 'multiple people'],
      situation: "The library only has one copy of the book everyone needs for homework. You got it first. Two classmates also need it — and it\'s due tomorrow.",
      choices: [
        { text: 'Keep it — I got it first', outcome: 'self', xp: 5,
          response: "First come, first served is a rule. But two people are stuck. Could there be another way? 🤔" },
        { text: 'Share it: one hour each tonight', outcome: 'fair', xp: 25,
          response: "You turned one book into a solution for three people! That\'s creative fairness. 🌟" },
        { text: 'Let them photocopy the pages they need', outcome: 'wise', xp: 30,
          response: "Thinking outside the box! You kept the book AND helped them. That\'s next-level problem solving. 🧠" }
      ],
      realWorldTip: 'When something is limited, try to find a creative solution that works for everyone.',
      reflectionPrompt: 'When two people both want the same thing, how do you decide who gets it?'
    },

    {
      id: 'sok_007',
      title: 'The Group Project Credit',
      setting: 'school',
      characters: ['lazy teammate', 'teacher'],
      ageRange: [9, 12],
      difficulty: 2,
      theme: 'fairness',
      growthDimensions: ['fairness', 'reasoning'],
      culture: ['global'],
      tags: ['school', 'teamwork', 'credit'],
      situation: "You did most of the group project. Your teammate did almost nothing. The teacher wants everyone to present equally and get equal credit.",
      choices: [
        { text: 'Let everyone present equally — keep the peace', outcome: 'peaceful', xp: 15,
          response: "Keeping the peace is kind. But does it help your teammate learn? Something to think about. 💭" },
        { text: 'Tell the teacher what really happened', outcome: 'honest', xp: 25,
          response: "Brave and honest. This might feel uncomfortable, but it\'s fair to everyone including you. 💪" },
        { text: 'Confront your teammate privately first', outcome: 'wise', xp: 30,
          response: "Giving them a chance before going to the teacher — that\'s the mature move. Well done. 🌟" }
      ],
      realWorldTip: 'Is there something at home or school that feels unfair? Talk to a grown-up about it today.',
      reflectionPrompt: 'Is it fair to share credit with someone who didn\'t do the work?'
    },

    {
      id: 'sok_008',
      title: 'The Holi Colours',
      setting: 'festival',
      characters: ['neighbour who is sad'],
      ageRange: [5, 11],
      difficulty: 2,
      theme: 'sharing',
      growthDimensions: ['empathy', 'fairness'],
      culture: ['IN'],
      tags: ['holi', 'festival', 'kindness', 'grief'],
      situation: "It\'s Holi and you have lots of colours. Your neighbour\'s family is not celebrating this year because they recently lost someone. The neighbour\'s child is watching from their balcony.",
      choices: [
        { text: 'Ignore it and enjoy Holi with my friends', outcome: 'self', xp: 5,
          response: "It\'s hard to know what to do when someone is sad during a happy time. 💭" },
        { text: 'Wave and smile — respect their space', outcome: 'respectful', xp: 20,
          response: "A smile across the balcony says \'I see you\'. Sometimes that\'s enough. 🌸" },
        { text: 'Ask if they\'d like to join for a little while', outcome: 'generous', xp: 30,
          response: "Grief and joy can exist together. Your invitation was a gentle light. Beautiful. 🌈" }
      ],
      realWorldTip: 'This week, check on someone who might be going through a hard time.',
      reflectionPrompt: 'How do you include someone who is feeling left out?'
    },

    {
      id: 'sok_009',
      title: 'The Cricket Bat',
      setting: 'park',
      characters: ['close friend', 'new kid'],
      ageRange: [7, 12],
      difficulty: 2,
      theme: 'sharing',
      growthDimensions: ['fairness', 'empathy'],
      culture: ['IN'],
      tags: ['cricket', 'sports', 'new kid', 'friendship'],
      situation: "You brought your cricket bat to the park. Your best friend and a new kid in the neighbourhood both want to use it. You can only give it to one for now.",
      choices: [
        { text: 'Give it to my best friend — they\'re my friend', outcome: 'loyal', xp: 15,
          response: "Loyalty to friends matters! But the new kid has no one yet. What might they be feeling? 💭" },
        { text: 'Give it to the new kid first — they\'re new', outcome: 'inclusive', xp: 25,
          response: "Being new is hard. You just made it easier. Your best friend will understand. 🌟" },
        { text: 'Take turns — new kid first, then my friend', outcome: 'fair', xp: 30,
          response: "You thought about everyone AND included the new kid. That\'s the whole package. 🏏🌟" }
      ],
      realWorldTip: 'Next time you see someone new or alone, be the first to say hello.',
      reflectionPrompt: 'Should you treat a new friend the same as an old friend?'
    },

    {
      id: 'sok_010',
      title: 'The WiFi Password',
      setting: 'home',
      characters: ['visiting cousin'],
      ageRange: [8, 12],
      difficulty: 2,
      theme: 'sharing',
      growthDimensions: ['fairness', 'reasoning'],
      culture: ['global'],
      tags: ['technology', 'home', 'family'],
      situation: "Your cousin is visiting and asks for the WiFi password. You know your parents said only family should have it. Your cousin IS family, but they tend to share it with their friends.",
      choices: [
        { text: 'Give the password — they\'re family', outcome: 'trusting', xp: 15,
          response: "They are family. But your parents set that rule for a reason. 💭" },
        { text: 'Ask your parents first', outcome: 'responsible', xp: 25,
          response: "You respected the rule AND helped your cousin the right way. Smart thinking! 🌟" },
        { text: 'Say no and explain why', outcome: 'honest', xp: 20,
          response: "Honest and clear. A little awkward, but trustworthy. 🤝" }
      ],
      realWorldTip: 'When you\'re unsure about a rule, ask a grown-up before deciding.',
      reflectionPrompt: 'When should you follow a rule even if it feels a bit unfair?'
    },

    // ── GREY ZONE (difficulty 3) ─────────────────────────────────

    {
      id: 'sok_011',
      title: 'The Secret Snack',
      setting: 'school',
      characters: ['best friend', 'other classmates'],
      ageRange: [7, 12],
      difficulty: 3,
      theme: 'fairness',
      growthDimensions: ['fairness', 'empathy', 'reasoning'],
      culture: ['global'],
      tags: ['food', 'friendship', 'fairness', 'grey zone'],
      situation: "You have a special snack in your bag. If you share it openly, there won\'t be enough for everyone. If you share secretly with only your best friend, others might see and feel left out.",
      choices: [
        { text: 'Eat it alone privately — no one needs to know', outcome: 'private', xp: 15,
          response: "Sometimes private is okay. But does hiding it sit comfortably? 💭" },
        { text: 'Share secretly with just my best friend', outcome: 'exclusive', xp: 10,
          response: "Favourites are natural. But if others see... feelings get hurt. 💭" },
        { text: 'Share small pieces with everyone — even if tiny', outcome: 'inclusive', xp: 30,
          response: "A tiny piece given openly beats a secret share. Everyone felt included. 🌟" }
      ],
      realWorldTip: 'Think about a time you were left out. How did it feel? Use that feeling to guide your choices.',
      reflectionPrompt: 'Is it okay to share something with only some people and not others?'
    },

    {
      id: 'sok_012',
      title: 'The Scholarship Slot',
      setting: 'school',
      characters: ['close friend', 'stranger'],
      ageRange: [10, 12],
      difficulty: 3,
      theme: 'fairness',
      growthDimensions: ['fairness', 'reasoning'],
      culture: ['global'],
      tags: ['opportunity', 'grey zone', 'fairness'],
      situation: "There\'s one free seat for a coding camp. Your close friend wants it but they\'re already good at coding. Another kid you don\'t know has never had any opportunities like this.",
      choices: [
        { text: 'Tell my friend to apply — I\'ll support them', outcome: 'loyal', xp: 15,
          response: "Loyalty is real. But who needs this chance more? There\'s no perfect answer here. 💭" },
        { text: 'Recommend the other kid to the teacher', outcome: 'equitable', xp: 25,
          response: "Giving opportunity to those who have less of it — that\'s a big-picture kind of fairness. 🌟" },
        { text: 'Stay out of it — let them both apply and decide fairly', outcome: 'neutral', xp: 20,
          response: "Letting the system decide can feel fair. You\'re right that it\'s not only your call. 🤝" }
      ],
      realWorldTip: 'Ask a parent or teacher: what\'s the difference between fairness and equality?',
      reflectionPrompt: 'Does giving everyone the same thing always make things fair?'
    },

    {
      id: 'sok_013',
      title: 'Pocket Money Dilemma',
      setting: 'shop',
      characters: ['friend who forgot their money'],
      ageRange: [8, 12],
      difficulty: 2,
      theme: 'sharing',
      growthDimensions: ['empathy', 'fairness'],
      culture: ['global'],
      tags: ['money', 'friendship', 'shop'],
      situation: "You\'ve been saving your pocket money for a toy. At the shop, your friend realises they forgot their money. They really want a small thing that costs less than half of what you have.",
      choices: [
        { text: 'Lend it and ask for it back later', outcome: 'generous', xp: 25,
          response: "Lending shows you trust them. Just make sure they know to return it! 🤝" },
        { text: 'Give it as a gift — no strings attached', outcome: 'very generous', xp: 30,
          response: "No strings attached — that\'s pure generosity. Your savings, their smile. 🌟" },
        { text: 'Sorry — this is my saving for something', outcome: 'self', xp: 15,
          response: "You worked for this. That\'s okay too. Could you come back another day together? 💭" }
      ],
      realWorldTip: 'Think about someone who could use a little help this week. Is there something small you can do?',
      reflectionPrompt: 'Is there a difference between sharing and giving? What is it?'
    },

    {
      id: 'sok_014',
      title: 'The Trophy',
      setting: 'sports',
      characters: ['teammate'],
      ageRange: [8, 12],
      difficulty: 2,
      theme: 'fairness',
      growthDimensions: ['fairness', 'empathy'],
      culture: ['global'],
      tags: ['sports', 'competition', 'fairness', 'winning'],
      situation: "Your team won a competition but there\'s only one trophy to take home. You scored the most points. Your teammate organized the whole team but didn\'t score.",
      choices: [
        { text: 'I scored more — I should take the trophy', outcome: 'self', xp: 10,
          response: "Points matter! But who made the team run? 💭" },
        { text: 'My teammate organised everything — they should have it', outcome: 'generous', xp: 25,
          response: "You saw that winning takes more than scoring. That\'s real team spirit. 🏆" },
        { text: 'We take turns — one week each', outcome: 'fair', xp: 30,
          response: "Everyone gets to hold the win. That\'s a champion\'s answer. 🌟🏆" }
      ],
      realWorldTip: 'Thank one person this week who helped you succeed without getting credit.',
      reflectionPrompt: 'In a team, who deserves credit for winning?'
    },

    {
      id: 'sok_015',
      title: 'The Old Toys',
      setting: 'home',
      characters: ['parent', 'underprivileged child'],
      ageRange: [5, 10],
      difficulty: 1,
      theme: 'sharing',
      growthDimensions: ['empathy', 'fairness'],
      culture: ['global'],
      tags: ['donation', 'toys', 'privilege'],
      situation: "Your mum asks you to pick toys to donate. You have two you don\'t play with, but one you still like even though you barely use it.",
      choices: [
        { text: 'Donate both — someone else will love them', outcome: 'generous', xp: 25,
          response: "A toy gathering dust becomes someone\'s treasure. Beautifully done. 🎁" },
        { text: 'Donate only the ones I truly don\'t want', outcome: 'fair', xp: 15,
          response: "Honest answer. Even donating one thing you don\'t need makes a real difference. 🤝" },
        { text: 'Keep both — what if I want to play with them?', outcome: 'self', xp: 5,
          response: "It\'s hard to let go! But some kids have NO toys at all. What might that feel like? 💭" }
      ],
      realWorldTip: 'Find one thing to donate this week — something you haven\'t used in 3 months.',
      reflectionPrompt: 'What\'s the difference between NEED and WANT?'
    },

    {
      id: 'sok_016',
      title: 'Langar at the Gurudwara',
      setting: 'temple',
      characters: ['community members', 'stranger'],
      ageRange: [6, 11],
      difficulty: 1,
      theme: 'sharing',
      growthDimensions: ['empathy', 'respect'],
      culture: ['IN'],
      tags: ['gurudwara', 'langar', 'seva', 'religion', 'community'],
      situation: "At the Gurudwara langar (community meal), there\'s a big crowd. You notice a tired-looking stranger who came in late and might not get food if the line runs out.",
      choices: [
        { text: 'Give up my place in line for them', outcome: 'generous', xp: 30,
          response: "The spirit of langar is exactly this — everyone eats. You lived it. 🙏✨" },
        { text: 'Tell a volunteer so they can help', outcome: 'wise', xp: 25,
          response: "Getting help from the right person — that\'s smart service. 🌟" },
        { text: 'Stay in my spot — I\'m hungry too', outcome: 'self', xp: 8,
          response: "You\'re hungry too — that\'s real. But langar exists so nobody goes without. 💭" }
      ],
      realWorldTip: 'Help serve food at home tonight — be the last to sit down.',
      reflectionPrompt: 'What does it mean to serve others?'
    },

    {
      id: 'sok_017',
      title: 'The Video Game Save',
      setting: 'home',
      characters: ['sibling'],
      ageRange: [7, 12],
      difficulty: 2,
      theme: 'fairness',
      growthDimensions: ['fairness', 'self-regulation'],
      culture: ['global'],
      tags: ['gaming', 'sibling', 'screen time'],
      situation: "You\'re in the middle of an important level in your video game. Your sibling\'s screen time starts now and it\'s their turn on the TV. You can\'t save mid-level.",
      choices: [
        { text: 'Hand over immediately — rules are rules', outcome: 'fair', xp: 25,
          response: "Rules exist so everyone gets fairness. Respecting that — even when it hurts — matters. 🌟" },
        { text: 'Ask for 5 more minutes to finish the level', outcome: 'negotiating', xp: 20,
          response: "Asking is different from just taking. Good communication! Did they agree? 🤝" },
        { text: 'Keep playing and ignore them', outcome: 'self', xp: 5,
          response: "Oof. They were counting on their turn. How would you feel in their position? 💭" }
      ],
      realWorldTip: 'Set a timer during screen time this week and stop when it rings — even mid-game.',
      reflectionPrompt: 'Why are rules about sharing time important?'
    },

    {
      id: 'sok_018',
      title: 'The Fallen Lunch',
      setting: 'school',
      characters: ['classmate you don\'t like'],
      ageRange: [6, 11],
      difficulty: 2,
      theme: 'kindness',
      growthDimensions: ['empathy', 'fairness'],
      culture: ['global'],
      tags: ['lunch', 'conflict', 'kindness'],
      situation: "A classmate you had a fight with last week drops their lunch and it falls on the floor. They\'re trying not to cry. You have extra food in your bag.",
      choices: [
        { text: 'Offer my extra food — the fight doesn\'t matter now', outcome: 'forgiving', xp: 30,
          response: "Kindness to someone you\'re upset with — that\'s the hardest and most powerful kind. 🌟" },
        { text: 'Tell a teacher so they can get help', outcome: 'helpful', xp: 20,
          response: "Getting the right help — smart and kind. 🤝" },
        { text: 'Ignore it — we\'re in a fight', outcome: 'holding grudge', xp: 5,
          response: "Fights are real. But hunger doesn\'t care about arguments. 💭" }
      ],
      realWorldTip: 'Do one kind thing today for someone you\'ve had a disagreement with.',
      reflectionPrompt: 'Can you be kind to someone you don\'t like?'
    },

    {
      id: 'sok_019',
      title: 'The Exam Answers',
      setting: 'school',
      characters: ['best friend'],
      ageRange: [9, 12],
      difficulty: 3,
      theme: 'honesty',
      growthDimensions: ['fairness', 'reasoning'],
      culture: ['global'],
      tags: ['exam', 'cheating', 'friendship', 'grey zone'],
      situation: "Your best friend is whispering asking you to share your answers during a test. They didn\'t study and are panicking. If you help, it\'s cheating. If you don\'t, they might fail.",
      choices: [
        { text: 'Share my answers — they\'re my best friend', outcome: 'dishoest', xp: 5,
          response: "Helping a friend feels right. But cheating hurts them long-term — they won\'t learn. 💭" },
        { text: 'Whisper \'I can\'t — I\'m sorry\'', outcome: 'honest', xp: 25,
          response: "A quiet, kind no. You kept your integrity and stayed gentle. That\'s strength. 🌟" },
        { text: 'Help them study properly next time instead', outcome: 'wise', xp: 30,
          response: "Not just saying no — offering a real solution. Future-you thinking. 💡" }
      ],
      realWorldTip: 'Offer to be a study buddy for a friend before the next test.',
      reflectionPrompt: 'Can helping someone in the wrong way actually hurt them?'
    },

    {
      id: 'sok_020',
      title: 'The Raksha Bandhan Gift',
      setting: 'home',
      characters: ['sibling'],
      ageRange: [5, 11],
      difficulty: 1,
      theme: 'sharing',
      growthDimensions: ['empathy', 'fairness'],
      culture: ['IN'],
      tags: ['rakshabandhan', 'festival', 'gift', 'sibling'],
      situation: "You got a wonderful gift for Raksha Bandhan. Your sibling got a much smaller gift and looks disappointed. You know they really wanted something like yours.",
      choices: [
        { text: 'Share or swap gifts 🎁', outcome: 'generous', xp: 30,
          response: "You gave up something wonderful so they could feel equal. That\'s love. 💛" },
        { text: 'Let them use it whenever they want', outcome: 'sharing', xp: 25,
          response: "\'Mine\' became \'ours\'. That\'s the spirit of Raksha Bandhan. 🌸" },
        { text: 'Keep it — they\'ll get better gifts next time', outcome: 'self', xp: 8,
          response: "Next time feels far away when you\'re disappointed right now. 💭" }
      ],
      realWorldTip: 'This week, do something for your sibling or a close friend without being asked.',
      reflectionPrompt: 'How do you handle it when things feel unequal in your family?'
    },

    {
      id: 'sok_021',
      title: 'The Lunch Table',
      setting: 'school',
      characters: ['new student'],
      ageRange: [6, 11],
      difficulty: 1,
      theme: 'kindness',
      growthDimensions: ['empathy'],
      culture: ['global'],
      tags: ['school', 'inclusion', 'new kid', 'lunch'],
      situation: "A new student is standing with their lunch tray, looking for somewhere to sit. All the tables are full — except your table has one seat but your friends didn\'t save it for them.",
      choices: [
        { text: 'Wave them over to sit with us 👋', outcome: 'inclusive', xp: 30,
          response: "That one wave changed their whole day. Maybe their whole week. 🌟" },
        { text: 'Tell a teacher to help find them a seat', outcome: 'helpful', xp: 20,
          response: "You noticed AND took action. A kind move. 🤝" },
        { text: 'My friends might not want a stranger here', outcome: 'hesitant', xp: 8,
          response: "Friends often follow your lead. If you invite them, the others might too. 💭" }
      ],
      realWorldTip: 'Sit next to someone different tomorrow at lunch or class.',
      reflectionPrompt: 'How does it feel to be new somewhere? What would you want someone to do for you?'
    },

    {
      id: 'sok_022',
      title: 'The Shared Playlist',
      setting: 'home',
      characters: ['sibling', 'parent'],
      ageRange: [8, 12],
      difficulty: 2,
      theme: 'fairness',
      growthDimensions: ['fairness', 'self-regulation'],
      culture: ['global'],
      tags: ['music', 'family', 'compromise'],
      situation: "On a long car trip, everyone wants to choose the music. You want your playlist, your sibling wants theirs, and your parents want something peaceful. Only one can play at a time.",
      choices: [
        { text: 'Everyone gets 15 minutes each', outcome: 'fair', xp: 25,
          response: "A fair rotation — everyone gets heard. Good organising! 🎵" },
        { text: 'Let parents choose — it\'s their car', outcome: 'respectful', xp: 20,
          response: "Respect for the people in charge — that\'s a grown-up move. 🌟" },
        { text: 'My playlist — I called it first', outcome: 'self', xp: 8,
          response: "\'I called it\' works sometimes. But on a long trip everyone should enjoy it. 💭" }
      ],
      realWorldTip: 'Try listening to someone else\'s favourite music this week with an open mind.',
      reflectionPrompt: 'How do you compromise when everyone wants something different?'
    },

    {
      id: 'sok_023',
      title: 'The Corner Shop Change',
      setting: 'shop',
      characters: ['shopkeeper'],
      ageRange: [7, 12],
      difficulty: 2,
      theme: 'honesty',
      growthDimensions: ['fairness', 'reasoning'],
      culture: ['global'],
      tags: ['money', 'honesty', 'shop'],
      situation: "The shopkeeper gives you too much change by mistake — ₹20 extra. They don\'t notice. You could keep it or return it.",
      choices: [
        { text: 'Return the extra money immediately 💰', outcome: 'honest', xp: 30,
          response: "Honesty when no one\'s watching — that\'s the real test of character. You passed. 🌟" },
        { text: 'Keep it — their mistake, my luck', outcome: 'dishonest', xp: 5,
          response: "Luck feels nice. But that ₹20 comes from their earnings. Does it sit right? 💭" },
        { text: 'Hesitate, then return it', outcome: 'honest after struggle', xp: 25,
          response: "The struggle before doing the right thing makes it even more meaningful. 🌟" }
      ],
      realWorldTip: 'Tell a parent about a time you were honest when you didn\'t have to be.',
      reflectionPrompt: 'Does honesty change when no one is watching?'
    },

    {
      id: 'sok_024',
      title: 'The Group Blame',
      setting: 'school',
      characters: ['whole class', 'teacher'],
      ageRange: [8, 12],
      difficulty: 3,
      theme: 'honesty',
      growthDimensions: ['fairness', 'reasoning'],
      culture: ['global'],
      tags: ['school', 'blame', 'courage', 'grey zone'],
      situation: "Someone in your class broke a rule and the whole class is being punished because no one will say who did it. You know who it was. They\'re your friend.",
      choices: [
        { text: 'Tell the teacher who it was', outcome: 'honest', xp: 25,
          response: "Telling the truth to stop unfair punishment — that took real courage. 🌟" },
        { text: 'Tell your friend privately to come forward', outcome: 'wise', xp: 30,
          response: "Giving them the chance to be brave themselves — that\'s friendship AND wisdom. 💡" },
        { text: 'Stay quiet — I won\'t get my friend in trouble', outcome: 'loyal', xp: 10,
          response: "Loyalty is real. But 30 innocent people are being punished. How does that feel? 💭" }
      ],
      realWorldTip: 'Talk to a parent about a time they had to say something difficult but important.',
      reflectionPrompt: 'When does loyalty become unfair to others?'
    },

    {
      id: 'sok_025',
      title: 'The Online Game Items',
      setting: 'online',
      characters: ['online friend you\'ve never met in person'],
      ageRange: [9, 12],
      difficulty: 3,
      theme: 'fairness',
      growthDimensions: ['reasoning', 'fairness'],
      culture: ['global'],
      tags: ['gaming', 'online', 'trust', 'grey zone'],
      situation: "In an online game, a friend you\'ve never met asks you to share your rare in-game items temporarily. They say they\'ll give them back, but you\'ve only known them online for a week.",
      choices: [
        { text: 'Share — they seem trustworthy', outcome: 'trusting', xp: 15,
          response: "Trust is beautiful. Online trust needs more time to build though. 💭" },
        { text: 'Decline and explain why', outcome: 'wise', xp: 30,
          response: "Honest about your limits with someone you don\'t fully know yet. Smart and kind. 🌟" },
        { text: 'Ask a parent before deciding', outcome: 'responsible', xp: 25,
          response: "Online decisions with strangers — always worth checking with a grown-up. Perfect call. ✅" }
      ],
      realWorldTip: 'Talk to a parent about rules for sharing things online.',
      reflectionPrompt: 'Is online trust the same as real-life trust?'
    },

    {
      id: 'sok_026',
      title: 'The Broken Umbrella',
      setting: 'school',
      characters: ['classmate'],
      ageRange: [6, 10],
      difficulty: 1,
      theme: 'sharing',
      growthDimensions: ['empathy'],
      culture: ['global'],
      tags: ['rain', 'school', 'kindness'],
      situation: "It\'s pouring rain after school. Your classmate\'s umbrella broke and they\'re getting soaked. You have one umbrella.",
      choices: [
        { text: 'Share the umbrella — we\'ll both get a bit wet', outcome: 'generous', xp: 25,
          response: "Half dry together beats fully dry alone. That\'s friendship. 🌂✨" },
        { text: 'Offer to wait together for their parent under the shelter', outcome: 'helpful', xp: 20,
          response: "No one has to go out in the rain! Thinking about options — lovely. 🌟" },
        { text: 'Sorry, I need it for myself', outcome: 'self', xp: 8,
          response: "Getting wet isn\'t the end of the world, but imagine being the soaked one. 💭" }
      ],
      realWorldTip: 'Look for one moment today to share something you\'re using — even briefly.',
      reflectionPrompt: 'How do you feel when someone shares something they didn\'t have to?'
    },

    {
      id: 'sok_027',
      title: 'Navratri Dance Practice',
      setting: 'festival',
      characters: ['dance group', 'new friend'],
      ageRange: [6, 11],
      difficulty: 2,
      theme: 'sharing',
      growthDimensions: ['empathy', 'fairness'],
      culture: ['IN'],
      tags: ['navratri', 'garba', 'dance', 'inclusion'],
      situation: "Your Navratri garba group has been practising for weeks. A new girl asks to join for the performance. Including her means less space and spotlight for everyone.",
      choices: [
        { text: 'Welcome her in — more the merrier! 🎶', outcome: 'inclusive', xp: 30,
          response: "Garba grows bigger with more hearts in it. You opened the circle. 🌸" },
        { text: 'Let the group decide together', outcome: 'fair', xp: 20,
          response: "Involving everyone in the decision — good leadership. 🤝" },
        { text: 'We\'ve practised too long — it\'s not fair to change now', outcome: 'self', xp: 10,
          response: "The hard work is real. But Navratri is about community. Could there be a middle way? 💭" }
      ],
      realWorldTip: 'Invite someone new into an activity you enjoy this week.',
      reflectionPrompt: 'Does including more people make something better or worse?'
    },
    {
      "id": "sok_028",
      "title": "The Last Laddoo",
      "setting": "home",
      "characters": [
        "younger cousin"
      ],
      "ageRange": [
        3,
        8
      ],
      "difficulty": 1,
      "theme": "food",
      "growthDimensions": [
        "empathy",
        "fairness"
      ],
      "culture": [
        "IN"
      ],
      "tags": [
        "food",
        "festival",
        "family",
        "India"
      ],
      "situation": "There's one last laddoo on the plate after dinner. Your little cousin is eyeing it hungrily, but you love laddoos too.",
      "choices": [
        {
          "text": "Give it to your cousin 🍬",
          "outcome": "generous",
          "xp": 25,
          "response": "Your cousin's face lit up like Diwali! Giving feels even sweeter than the laddoo. 🌟"
        },
        {
          "text": "Break it in half to share 🤝",
          "outcome": "fair",
          "xp": 20,
          "response": "Half each — everyone gets a taste of sweetness. Wise sharing! 😊"
        },
        {
          "text": "Eat it yourself — you saw it first",
          "outcome": "self",
          "xp": 8,
          "response": "You enjoyed it — but did you see your cousin's face? Sharing sweets makes them twice as sweet. 💭"
        }
      ],
      "realWorldTip": "Next sweet you get, try offering the first bite to someone else.",
      "reflectionPrompt": "How does it feel when someone shares a treat with you?"
    },
    {
      "id": "sok_029",
      "title": "The Favourite Crayon",
      "setting": "home",
      "characters": [
        "little sister"
      ],
      "ageRange": [
        3,
        8
      ],
      "difficulty": 1,
      "theme": "toys",
      "growthDimensions": [
        "empathy",
        "fairness"
      ],
      "culture": [
        "US"
      ],
      "tags": [
        "toys",
        "sharing",
        "siblings",
        "art"
      ],
      "situation": "You're both colouring and there's only one blue crayon left — your favourite. Your little sister reaches for it too.",
      "choices": [
        {
          "text": "Let her use it first 🖍️",
          "outcome": "generous",
          "xp": 25,
          "response": "You let her go first! She drew a beautiful blue sky. Sharing made her so happy. 🌟"
        },
        {
          "text": "Take turns with it ⏳",
          "outcome": "fair",
          "xp": 20,
          "response": "Taking turns means you both get to colour. Smart and fair! 🤝"
        },
        {
          "text": "Grab it — it's your favourite",
          "outcome": "self",
          "xp": 8,
          "response": "You got the crayon — but she looked sad. Sometimes sharing a favourite feels good too. 💭"
        }
      ],
      "realWorldTip": "Today, offer to share something you really like with someone.",
      "reflectionPrompt": "Is it hard to share your favourite things? Why?"
    },
    {
      "id": "sok_030",
      "title": "The Only Swing",
      "setting": "park",
      "characters": [
        "waiting child"
      ],
      "ageRange": [
        3,
        8
      ],
      "difficulty": 1,
      "theme": "park",
      "growthDimensions": [
        "empathy",
        "fairness"
      ],
      "culture": [
        "global"
      ],
      "tags": [
        "park",
        "playground",
        "turns",
        "sharing"
      ],
      "situation": "You're having fun on the only free swing at the park. Another child has been waiting a while, watching you.",
      "choices": [
        {
          "text": "Hop off and let them have a turn 🌳",
          "outcome": "generous",
          "xp": 25,
          "response": "You gave up your swing! The waiting child beamed. That's real kindness. 🌟"
        },
        {
          "text": "Say \"two more minutes then it's yours\" ⏳",
          "outcome": "fair",
          "xp": 20,
          "response": "You set a fair turn. Everyone gets a go. Thoughtful! 🤝"
        },
        {
          "text": "Keep swinging — you got there first",
          "outcome": "self",
          "xp": 8,
          "response": "You're having fun — but they've waited so long. Taking turns makes the park fun for everyone. 💭"
        }
      ],
      "realWorldTip": "At the playground, watch for someone waiting and offer them a turn.",
      "reflectionPrompt": "How does it feel to wait a long time for a turn?"
    },
    {
      "id": "sok_031",
      "title": "The New Box of Colours",
      "setting": "home",
      "characters": [
        "brother"
      ],
      "ageRange": [
        3,
        8
      ],
      "difficulty": 1,
      "theme": "toys",
      "growthDimensions": [
        "empathy",
        "fairness"
      ],
      "culture": [
        "IN"
      ],
      "tags": [
        "toys",
        "India",
        "siblings",
        "art"
      ],
      "situation": "Your grandmother gave you a brand-new box of sketch pens. Your brother has none and is watching you draw.",
      "choices": [
        {
          "text": "Share the pens with him 🖊️",
          "outcome": "generous",
          "xp": 25,
          "response": "You shared your new gift! Now you both draw together. Generosity makes more fun. 🌟"
        },
        {
          "text": "Let him pick three to use 🤝",
          "outcome": "fair",
          "xp": 20,
          "response": "You shared some, kept some. A fair way to include him! 😊"
        },
        {
          "text": "Keep them — they're yours",
          "outcome": "self",
          "xp": 8,
          "response": "They are your gift. But your brother has none, and sharing could make you both happy. 💭"
        }
      ],
      "realWorldTip": "When you get something new, think about who you could share it with.",
      "reflectionPrompt": "How would you feel if you had nothing to draw with?"
    },
    {
      "id": "sok_032",
      "title": "The Snack Pack",
      "setting": "school",
      "characters": [
        "classmate with no snack"
      ],
      "ageRange": [
        3,
        8
      ],
      "difficulty": 1,
      "theme": "food",
      "growthDimensions": [
        "empathy",
        "fairness"
      ],
      "culture": [
        "US"
      ],
      "tags": [
        "food",
        "school",
        "sharing",
        "US"
      ],
      "situation": "At snack time you have a big pack of crackers. A classmate next to you forgot theirs and looks hungry.",
      "choices": [
        {
          "text": "Share some crackers with them 🍪",
          "outcome": "generous",
          "xp": 25,
          "response": "You shared without being asked! Your classmate felt so cared for. 🌟"
        },
        {
          "text": "Offer them half the pack 🤝",
          "outcome": "fair",
          "xp": 20,
          "response": "Half each — nobody stays hungry. Kind and fair! 😊"
        },
        {
          "text": "Eat them all — you might want more",
          "outcome": "self",
          "xp": 8,
          "response": "You had plenty — and they had none. Sharing food is one of the kindest things. 💭"
        }
      ],
      "realWorldTip": "If someone near you has no snack, offering to share is a small act with a big heart.",
      "reflectionPrompt": "Have you ever been hungry with nothing to eat? What would have helped?"
    },
    {
      "id": "sok_033",
      "title": "The Diya Decorations",
      "setting": "festival",
      "characters": [
        "neighbour child"
      ],
      "ageRange": [
        3,
        8
      ],
      "difficulty": 1,
      "theme": "festival",
      "growthDimensions": [
        "empathy",
        "fairness"
      ],
      "culture": [
        "IN"
      ],
      "tags": [
        "festival",
        "Diwali",
        "India",
        "sharing"
      ],
      "situation": "You have a bag of colourful diyas to decorate your doorstep for Diwali. A neighbour child has none for theirs.",
      "choices": [
        {
          "text": "Give them some diyas 🪔",
          "outcome": "generous",
          "xp": 25,
          "response": "You shared the light of Diwali! Both doorsteps now glow. That's the festival spirit. 🌟"
        },
        {
          "text": "Share half your diyas 🤝",
          "outcome": "fair",
          "xp": 20,
          "response": "Half for each home — spreading the festival joy fairly! 😊"
        },
        {
          "text": "Keep them all for your doorstep",
          "outcome": "self",
          "xp": 8,
          "response": "Your doorstep will shine — but so could theirs. Diwali is brighter when shared. 💭"
        }
      ],
      "realWorldTip": "Festivals feel best when we include neighbours who have less.",
      "reflectionPrompt": "Why do festivals feel happier when shared with others?"
    },
    {
      "id": "sok_034",
      "title": "The Bedtime Story",
      "setting": "home",
      "characters": [
        "younger sibling"
      ],
      "ageRange": [
        3,
        8
      ],
      "difficulty": 1,
      "theme": "family",
      "growthDimensions": [
        "empathy",
        "fairness"
      ],
      "culture": [
        "global"
      ],
      "tags": [
        "family",
        "books",
        "bedtime",
        "sharing"
      ],
      "situation": "It's bedtime and there's time for only one story. You want the dinosaur book, but your sibling wants the puppy one.",
      "choices": [
        {
          "text": "Let them choose tonight 📖",
          "outcome": "generous",
          "xp": 25,
          "response": "You let them pick! They snuggled in happily. You can choose tomorrow. 🌟"
        },
        {
          "text": "Suggest reading half of each 🤝",
          "outcome": "fair",
          "xp": 20,
          "response": "A bit of both! Clever way to make everyone happy. 😊"
        },
        {
          "text": "Insist on the dinosaur book",
          "outcome": "self",
          "xp": 8,
          "response": "You got your book — but your sibling looked disappointed. Taking turns choosing is fairer. 💭"
        }
      ],
      "realWorldTip": "Let someone else pick the show, song, or story sometimes.",
      "reflectionPrompt": "How does it feel when you always get to choose — and when you never do?"
    },
    {
      "id": "sok_035",
      "title": "The Cricket Bat for All",
      "setting": "park",
      "characters": [
        "friends without a bat"
      ],
      "ageRange": [
        3,
        8
      ],
      "difficulty": 1,
      "theme": "sports",
      "growthDimensions": [
        "empathy",
        "fairness"
      ],
      "culture": [
        "IN"
      ],
      "tags": [
        "sports",
        "India",
        "cricket",
        "sharing"
      ],
      "situation": "You brought your cricket bat to the park. Three friends want to play but nobody else has a bat.",
      "choices": [
        {
          "text": "Let everyone take turns batting 🏏",
          "outcome": "generous",
          "xp": 25,
          "response": "Everyone got to bat! Your bat made the whole game possible. Sharing = more fun. 🌟"
        },
        {
          "text": "Set up a fair batting order 🤝",
          "outcome": "fair",
          "xp": 20,
          "response": "A fair turn for each player. Now it's a real match! 😊"
        },
        {
          "text": "Only let your best friend use it",
          "outcome": "self",
          "xp": 8,
          "response": "You and your best friend had fun — but the others watched sadly. Sharing includes everyone. 💭"
        }
      ],
      "realWorldTip": "When you have the only ball or bat, you have the power to include everyone.",
      "reflectionPrompt": "How does it feel to be left out of a game?"
    },
    {
      "id": "sok_036",
      "title": "The Puppy Cuddle",
      "setting": "home",
      "characters": [
        "sibling"
      ],
      "ageRange": [
        3,
        8
      ],
      "difficulty": 1,
      "theme": "pets",
      "growthDimensions": [
        "empathy",
        "fairness"
      ],
      "culture": [
        "US"
      ],
      "tags": [
        "pets",
        "family",
        "sharing",
        "US"
      ],
      "situation": "Your new puppy is cuddling on your lap. Your sibling has been wanting a turn to hold the puppy too.",
      "choices": [
        {
          "text": "Let them have a cuddle turn 🐶",
          "outcome": "generous",
          "xp": 25,
          "response": "You shared the puppy! Your sibling was so happy, and the puppy loved it too. 🌟"
        },
        {
          "text": "Say \"five minutes each\" ⏳",
          "outcome": "fair",
          "xp": 20,
          "response": "Taking turns means everyone gets puppy love. Fair! 😊"
        },
        {
          "text": "Keep the puppy to yourself",
          "outcome": "self",
          "xp": 8,
          "response": "The puppy is cosy with you — but your sibling wants a turn too. Pets are for sharing. 💭"
        }
      ],
      "realWorldTip": "Pets are happiest when everyone in the family gets to care for them.",
      "reflectionPrompt": "Why is it kind to share things that everyone loves?"
    },
    {
      "id": "sok_037",
      "title": "The Tiffin Treat",
      "setting": "school",
      "characters": [
        "friend with plain lunch"
      ],
      "ageRange": [
        3,
        8
      ],
      "difficulty": 1,
      "theme": "food",
      "growthDimensions": [
        "empathy",
        "fairness"
      ],
      "culture": [
        "IN"
      ],
      "tags": [
        "food",
        "India",
        "school",
        "tiffin"
      ],
      "situation": "Your tiffin has yummy gulab jamuns today. Your friend's tiffin only has plain roti and they keep glancing at your sweets.",
      "choices": [
        {
          "text": "Offer them a gulab jamun 🍮",
          "outcome": "generous",
          "xp": 25,
          "response": "You shared your sweet treat! Your friend's smile was the best part of lunch. 🌟"
        },
        {
          "text": "Cut one in half for them 🤝",
          "outcome": "fair",
          "xp": 20,
          "response": "Half a sweet shared is double the joy. Kind thinking! 😊"
        },
        {
          "text": "Eat them all yourself",
          "outcome": "self",
          "xp": 8,
          "response": "They were tasty — but your friend wished for just one. Sharing a treat makes friendships sweeter. 💭"
        }
      ],
      "realWorldTip": "Sharing from your tiffin is a lovely way to show a friend you care.",
      "reflectionPrompt": "How do you feel when a friend shares their food with you?"
    },
    {
      "id": "sok_038",
      "title": "The Bubble Wand",
      "setting": "park",
      "characters": [
        "little kids watching"
      ],
      "ageRange": [
        3,
        8
      ],
      "difficulty": 1,
      "theme": "park",
      "growthDimensions": [
        "empathy",
        "fairness"
      ],
      "culture": [
        "global"
      ],
      "tags": [
        "park",
        "toys",
        "sharing",
        "bubbles"
      ],
      "situation": "You're blowing bubbles with your wand and some smaller kids are watching, wishing they could try.",
      "choices": [
        {
          "text": "Let them have a turn blowing bubbles 🫧",
          "outcome": "generous",
          "xp": 25,
          "response": "You shared the magic! The little kids squealed with joy. Wonderful! 🌟"
        },
        {
          "text": "Blow bubbles for them to chase 🤝",
          "outcome": "fair",
          "xp": 20,
          "response": "You found a way for everyone to join in. Creative kindness! 😊"
        },
        {
          "text": "Keep blowing on your own",
          "outcome": "self",
          "xp": 8,
          "response": "Bubbles are fun — but even more fun shared. Those kids would have loved a turn. 💭"
        }
      ],
      "realWorldTip": "Sharing something fun multiplies the joy for everyone.",
      "reflectionPrompt": "What's something fun you could share with a younger child?"
    },
    {
      "id": "sok_039",
      "title": "The Mango Slices",
      "setting": "home",
      "characters": [
        "family members"
      ],
      "ageRange": [
        3,
        8
      ],
      "difficulty": 1,
      "theme": "food",
      "growthDimensions": [
        "empathy",
        "fairness"
      ],
      "culture": [
        "IN"
      ],
      "tags": [
        "food",
        "India",
        "family",
        "summer"
      ],
      "situation": "Mummy cut a juicy mango. There are five slices and four people, so one extra slice is left. Everyone is looking at it.",
      "choices": [
        {
          "text": "Offer the extra to someone else 🥭",
          "outcome": "generous",
          "xp": 25,
          "response": "You offered the last slice to another! That's a generous heart. 🌟"
        },
        {
          "text": "Suggest cutting it into pieces to share 🤝",
          "outcome": "fair",
          "xp": 20,
          "response": "Everyone gets a little more! Fair and clever. 😊"
        },
        {
          "text": "Take the extra slice quickly",
          "outcome": "self",
          "xp": 8,
          "response": "You got the extra slice — but others wanted it too. Offering it first is kinder. 💭"
        }
      ],
      "realWorldTip": "When there's one extra, offering it to someone else is a small generous act.",
      "reflectionPrompt": "How does it feel when someone offers you the last piece?"
    },
    {
      "id": "sok_040",
      "title": "The Story Time Spot",
      "setting": "school",
      "characters": [
        "classmate"
      ],
      "ageRange": [
        3,
        8
      ],
      "difficulty": 1,
      "theme": "school",
      "growthDimensions": [
        "empathy",
        "fairness"
      ],
      "culture": [
        "US"
      ],
      "tags": [
        "school",
        "sharing",
        "US",
        "reading"
      ],
      "situation": "You got the comfy beanbag spot for story time. A classmate who usually sits there looks a little sad on the hard floor.",
      "choices": [
        {
          "text": "Offer to swap spots 🪑",
          "outcome": "generous",
          "xp": 25,
          "response": "You gave up the comfy spot! Your classmate's whole face brightened. So kind. 🌟"
        },
        {
          "text": "Suggest sharing the beanbag 🤝",
          "outcome": "fair",
          "xp": 20,
          "response": "Squeezing in together — now you both enjoy story time! 😊"
        },
        {
          "text": "Keep the comfy spot — you got it first",
          "outcome": "self",
          "xp": 8,
          "response": "You're comfy — but your classmate isn't. A small swap could make their day. 💭"
        }
      ],
      "realWorldTip": "Giving up a comfy spot for someone else is a quiet, kind act.",
      "reflectionPrompt": "Have you ever been given a better spot by someone? How did it feel?"
    },
    {
      "id": "sok_041",
      "title": "The Building Blocks",
      "setting": "home",
      "characters": [
        "younger sibling"
      ],
      "ageRange": [
        3,
        8
      ],
      "difficulty": 1,
      "theme": "toys",
      "growthDimensions": [
        "empathy",
        "fairness"
      ],
      "culture": [
        "global"
      ],
      "tags": [
        "toys",
        "sharing",
        "siblings",
        "building"
      ],
      "situation": "You're building a tall tower and you have all the blocks. Your little sibling wants to build something too but has none.",
      "choices": [
        {
          "text": "Share half the blocks with them 🧱",
          "outcome": "generous",
          "xp": 25,
          "response": "You shared your blocks! Now there are two towers and twice the fun. 🌟"
        },
        {
          "text": "Build something together 🤝",
          "outcome": "fair",
          "xp": 20,
          "response": "Building as a team — what a great idea! You both create something special. 😊"
        },
        {
          "text": "Keep all the blocks for your tower",
          "outcome": "self",
          "xp": 8,
          "response": "Your tower is tall — but your sibling has nothing to build. Sharing blocks builds happiness too. 💭"
        }
      ],
      "realWorldTip": "Building together is even more fun than building alone.",
      "reflectionPrompt": "What can you make when you and a friend share your toys?"
    },
    {
      "id": "sok_042",
      "title": "The Borrowed Pencil",
      "setting": "school",
      "characters": [
        "classmate without supplies"
      ],
      "ageRange": [
        5,
        10
      ],
      "difficulty": 1,
      "theme": "school",
      "growthDimensions": [
        "empathy",
        "fairness"
      ],
      "culture": [
        "IN"
      ],
      "tags": [
        "school",
        "India",
        "sharing",
        "supplies"
      ],
      "situation": "A classmate forgot their pencil box and can't do the classwork. You have two pencils and a spare eraser.",
      "choices": [
        {
          "text": "Lend them a pencil and eraser ✏️",
          "outcome": "generous",
          "xp": 25,
          "response": "You helped them join the lesson! A small share with a big impact. 🌟"
        },
        {
          "text": "Share one pencil between you 🤝",
          "outcome": "fair",
          "xp": 20,
          "response": "Taking turns with one pencil — you both get the work done. 😊"
        },
        {
          "text": "Keep both — you might need them",
          "outcome": "self",
          "xp": 8,
          "response": "You had a spare — and they had none. Lending it would have helped them so much. 💭"
        }
      ],
      "realWorldTip": "Lending a spare pencil to a classmate in need is everyday kindness.",
      "reflectionPrompt": "How would you feel if you couldn't do your work because you forgot something?"
    },
    {
      "id": "sok_043",
      "title": "The Soccer Ball",
      "setting": "park",
      "characters": [
        "kids wanting to play"
      ],
      "ageRange": [
        5,
        10
      ],
      "difficulty": 1,
      "theme": "sports",
      "growthDimensions": [
        "empathy",
        "fairness"
      ],
      "culture": [
        "US"
      ],
      "tags": [
        "sports",
        "US",
        "park",
        "soccer"
      ],
      "situation": "You brought the only soccer ball to the park. A group of kids asks if they can join your game.",
      "choices": [
        {
          "text": "Invite them all to play together ⚽",
          "outcome": "generous",
          "xp": 25,
          "response": "You turned a small game into a big one! Everyone's having a blast. 🌟"
        },
        {
          "text": "Make fair teams with them 🤝",
          "outcome": "fair",
          "xp": 20,
          "response": "Fair teams mean a great match for everyone. Good captain! 😊"
        },
        {
          "text": "Say it's just for you and your friends",
          "outcome": "self",
          "xp": 8,
          "response": "You kept the game small — but those kids really wanted to play. Sharing the ball shares the fun. 💭"
        }
      ],
      "realWorldTip": "Having the ball means you can include others — or leave them out. Choose to include.",
      "reflectionPrompt": "How does it feel to ask to join a game and be told no?"
    },
    {
      "id": "sok_044",
      "title": "The TV Remote",
      "setting": "home",
      "characters": [
        "siblings"
      ],
      "ageRange": [
        5,
        10
      ],
      "difficulty": 1,
      "theme": "family",
      "growthDimensions": [
        "empathy",
        "fairness"
      ],
      "culture": [
        "IN"
      ],
      "tags": [
        "family",
        "India",
        "sharing",
        "television"
      ],
      "situation": "Your favourite cartoon and your sibling's favourite show are on at the same time. You're holding the remote.",
      "choices": [
        {
          "text": "Let your sibling watch their show 📺",
          "outcome": "generous",
          "xp": 25,
          "response": "You gave up your show! Your sibling was thrilled. You can watch yours next time. 🌟"
        },
        {
          "text": "Take turns — half each show 🤝",
          "outcome": "fair",
          "xp": 20,
          "response": "A bit of both shows — fair sharing of TV time! 😊"
        },
        {
          "text": "Watch your cartoon — you have the remote",
          "outcome": "self",
          "xp": 8,
          "response": "You watched your show — but holding the remote doesn't mean only you decide. Taking turns is fairer. 💭"
        }
      ],
      "realWorldTip": "Holding the remote is a chance to be fair, not just to get your way.",
      "reflectionPrompt": "Why is taking turns important when sharing one TV?"
    },
    {
      "id": "sok_045",
      "title": "The Group Project Glue",
      "setting": "school",
      "characters": [
        "group mates"
      ],
      "ageRange": [
        5,
        10
      ],
      "difficulty": 1,
      "theme": "school",
      "growthDimensions": [
        "empathy",
        "fairness"
      ],
      "culture": [
        "global"
      ],
      "tags": [
        "school",
        "sharing",
        "teamwork",
        "craft"
      ],
      "situation": "Your group is making a poster and you're holding the only glue stick. Everyone needs it to stick their parts.",
      "choices": [
        {
          "text": "Pass the glue around so all can use it 🖌️",
          "outcome": "generous",
          "xp": 25,
          "response": "You kept the glue moving! The whole team finished their poster together. 🌟"
        },
        {
          "text": "Set an order for using the glue 🤝",
          "outcome": "fair",
          "xp": 20,
          "response": "An organised turn for each — smooth teamwork! 😊"
        },
        {
          "text": "Finish your part first, make them wait",
          "outcome": "self",
          "xp": 8,
          "response": "Your part looks good — but the team waited on you. Sharing tools keeps everyone moving. 💭"
        }
      ],
      "realWorldTip": "In group work, sharing the supplies fairly helps the whole team succeed.",
      "reflectionPrompt": "What happens to a team when one person holds all the supplies?"
    },
    {
      "id": "sok_046",
      "title": "The Holi Colours to Share",
      "setting": "festival",
      "characters": [
        "friend with no colours"
      ],
      "ageRange": [
        5,
        10
      ],
      "difficulty": 1,
      "theme": "festival",
      "growthDimensions": [
        "empathy",
        "fairness"
      ],
      "culture": [
        "IN"
      ],
      "tags": [
        "festival",
        "Holi",
        "India",
        "sharing"
      ],
      "situation": "It's Holi and you have packets of bright colours. Your friend arrived with none and is standing on the side.",
      "choices": [
        {
          "text": "Share your colours so they can join 🌈",
          "outcome": "generous",
          "xp": 25,
          "response": "You shared the colours of Holi! Now your friend is laughing and playing too. 🌟"
        },
        {
          "text": "Give them one colour to start 🤝",
          "outcome": "fair",
          "xp": 20,
          "response": "One packet to begin — enough for them to join the fun! 😊"
        },
        {
          "text": "Keep your colours — you bought them",
          "outcome": "self",
          "xp": 8,
          "response": "You have all the colours — but your friend has none. Holi is about sharing joy and colour. 💭"
        }
      ],
      "realWorldTip": "Festivals are happiest when we make sure no one is left watching from the side.",
      "reflectionPrompt": "Why does sharing make celebrations more joyful?"
    },
    {
      "id": "sok_047",
      "title": "The Last Cookie",
      "setting": "home",
      "characters": [
        "best friend visiting"
      ],
      "ageRange": [
        5,
        10
      ],
      "difficulty": 1,
      "theme": "food",
      "growthDimensions": [
        "empathy",
        "fairness"
      ],
      "culture": [
        "US"
      ],
      "tags": [
        "food",
        "US",
        "friends",
        "sharing"
      ],
      "situation": "Your friend is over to play and there's one cookie left in the jar. You both spotted it at the same time.",
      "choices": [
        {
          "text": "Offer it to your friend 🍪",
          "outcome": "generous",
          "xp": 25,
          "response": "You offered it to your guest! That's gracious and kind. Your friend felt special. 🌟"
        },
        {
          "text": "Split the cookie in two 🤝",
          "outcome": "fair",
          "xp": 20,
          "response": "Half each — a sweet fair ending. 😊"
        },
        {
          "text": "Take it — you saw it first",
          "outcome": "self",
          "xp": 8,
          "response": "You got the cookie — but your friend is your guest. Offering it would have been extra kind. 💭"
        }
      ],
      "realWorldTip": "When a friend visits, offering them the last treat is a warm way to welcome them.",
      "reflectionPrompt": "How do you treat guests when they come to your home?"
    },
    {
      "id": "sok_048",
      "title": "The Balloon Seller",
      "setting": "shop",
      "characters": [
        "younger child crying",
        "balloon seller"
      ],
      "ageRange": [
        5,
        10
      ],
      "difficulty": 1,
      "theme": "India",
      "growthDimensions": [
        "empathy",
        "fairness"
      ],
      "culture": [
        "IN"
      ],
      "tags": [
        "India",
        "shop",
        "kindness",
        "money"
      ],
      "situation": "You're about to spend your ₹20 on a balloon. A smaller child next to you is crying because they dropped their balloon and have no money left.",
      "choices": [
        {
          "text": "Buy a balloon for the crying child 🎈",
          "outcome": "generous",
          "xp": 25,
          "response": "You used your own money to dry their tears! Pure kindness. 🌟"
        },
        {
          "text": "Share your balloon by taking turns 🤝",
          "outcome": "fair",
          "xp": 20,
          "response": "You found a way to share the joy of one balloon. Thoughtful! 😊"
        },
        {
          "text": "Buy your own balloon and walk away",
          "outcome": "self",
          "xp": 8,
          "response": "You got your balloon — but the little one is still crying. A small act could have changed their day. 💭"
        }
      ],
      "realWorldTip": "Using what you have to help someone smaller is a big-hearted choice.",
      "reflectionPrompt": "Have you ever helped someone younger than you? How did it feel?"
    },
    {
      "id": "sok_049",
      "title": "The Picnic Blanket",
      "setting": "park",
      "characters": [
        "family without a spot"
      ],
      "ageRange": [
        5,
        10
      ],
      "difficulty": 1,
      "theme": "park",
      "growthDimensions": [
        "empathy",
        "fairness"
      ],
      "culture": [
        "global"
      ],
      "tags": [
        "park",
        "sharing",
        "picnic",
        "space"
      ],
      "situation": "Your family spread a big blanket at the park. Another family arrives with food but can't find any space to sit.",
      "choices": [
        {
          "text": "Invite them to share your blanket 🧺",
          "outcome": "generous",
          "xp": 25,
          "response": "You made room for others! Both families enjoyed a lovely picnic together. 🌟"
        },
        {
          "text": "Shift over to make a little space 🤝",
          "outcome": "fair",
          "xp": 20,
          "response": "You scooted over to share — now there's room for everyone. 😊"
        },
        {
          "text": "Keep your space — you set up first",
          "outcome": "self",
          "xp": 8,
          "response": "You have your spot — but there was room to share. A little space can mean a lot. 💭"
        }
      ],
      "realWorldTip": "Making room for others, even when you got there first, is generous.",
      "reflectionPrompt": "How does it feel when someone makes space for you?"
    },
    {
      "id": "sok_050",
      "title": "The Water Bottle",
      "setting": "school",
      "characters": [
        "classmate after sports"
      ],
      "ageRange": [
        5,
        10
      ],
      "difficulty": 1,
      "theme": "school",
      "growthDimensions": [
        "empathy",
        "fairness"
      ],
      "culture": [
        "IN"
      ],
      "tags": [
        "school",
        "India",
        "sharing",
        "sports"
      ],
      "situation": "After running in PE, a classmate forgot their water bottle and looks very thirsty. Your bottle is still half full.",
      "choices": [
        {
          "text": "Offer them some of your water 💧",
          "outcome": "generous",
          "xp": 25,
          "response": "You shared your water when they needed it most. Truly kind. 🌟"
        },
        {
          "text": "Pour some into their cup 🤝",
          "outcome": "fair",
          "xp": 20,
          "response": "Sharing some, keeping some — you both stay hydrated. Smart! 😊"
        },
        {
          "text": "Keep your water — you're thirsty too",
          "outcome": "self",
          "xp": 8,
          "response": "You're thirsty — that's fair. But they had none at all. A few sips shared can really help. 💭"
        }
      ],
      "realWorldTip": "Sharing water with someone thirsty is a simple, caring act.",
      "reflectionPrompt": "When have you really needed something a friend had? Did they share?"
    },
    {
      "id": "sok_051",
      "title": "The Festival Bonus",
      "setting": "home",
      "characters": [
        "house helper's child"
      ],
      "ageRange": [
        8,
        12
      ],
      "difficulty": 1,
      "theme": "India",
      "growthDimensions": [
        "empathy",
        "fairness"
      ],
      "culture": [
        "IN"
      ],
      "tags": [
        "India",
        "family",
        "generosity",
        "festival"
      ],
      "situation": "During Diwali, your parents gave you ₹200 as a gift. You learn the house helper's child won't get any new clothes this year.",
      "choices": [
        {
          "text": "Share part of your gift to help them 🪔",
          "outcome": "generous",
          "xp": 25,
          "response": "You shared your festival gift with someone who has less. That's the true spirit of Diwali. 🌟"
        },
        {
          "text": "Give some of your old clothes and toys 🤝",
          "outcome": "fair",
          "xp": 20,
          "response": "A thoughtful way to help — your gently used things bring them joy. 😊"
        },
        {
          "text": "Keep all your money for yourself",
          "outcome": "self",
          "xp": 8,
          "response": "It's your gift to keep — but a small share could brighten another child's whole festival. 💭"
        }
      ],
      "realWorldTip": "Festivals are a chance to share good fortune with those who have less.",
      "reflectionPrompt": "How would your festival feel if you had nothing new to wear?"
    },
    {
      "id": "sok_052",
      "title": "The Fundraiser Snacks",
      "setting": "school",
      "characters": [
        "classmate who can't afford a snack"
      ],
      "ageRange": [
        8,
        12
      ],
      "difficulty": 1,
      "theme": "US",
      "growthDimensions": [
        "empathy",
        "fairness"
      ],
      "culture": [
        "US"
      ],
      "tags": [
        "US",
        "school",
        "money",
        "kindness"
      ],
      "situation": "The school bake sale is on. You have $5 for snacks. A classmate has no money and is pretending they're not hungry.",
      "choices": [
        {
          "text": "Buy an extra snack and offer it to them 🧁",
          "outcome": "generous",
          "xp": 25,
          "response": "You quietly bought them a treat! No fuss, just kindness. They felt cared for. 🌟"
        },
        {
          "text": "Buy one thing and split it with them 🤝",
          "outcome": "fair",
          "xp": 20,
          "response": "Sharing what you bought — kind and considerate. 😊"
        },
        {
          "text": "Spend it all on yourself",
          "outcome": "self",
          "xp": 8,
          "response": "You enjoyed your snacks — but your classmate went without. A small share goes a long way. 💭"
        }
      ],
      "realWorldTip": "Helping someone without making a big deal of it protects their dignity.",
      "reflectionPrompt": "Why might someone pretend they're not hungry?"
    },
    {
      "id": "sok_053",
      "title": "The Cricket Match Tickets",
      "setting": "home",
      "characters": [
        "best friend"
      ],
      "ageRange": [
        8,
        12
      ],
      "difficulty": 1,
      "theme": "India",
      "growthDimensions": [
        "empathy",
        "fairness"
      ],
      "culture": [
        "IN"
      ],
      "tags": [
        "India",
        "sports",
        "friends",
        "generosity"
      ],
      "situation": "You won two tickets to a cricket match. You could take your best friend, or sell the spare ticket for money you've been saving for.",
      "choices": [
        {
          "text": "Take your best friend for free 🏏",
          "outcome": "generous",
          "xp": 25,
          "response": "You chose friendship over money! The shared memory is worth more than cash. 🌟"
        },
        {
          "text": "Offer it to them at half price 🤝",
          "outcome": "fair",
          "xp": 20,
          "response": "A fair middle path — they come along and you recover a little. 😊"
        },
        {
          "text": "Sell it to the highest bidder",
          "outcome": "self",
          "xp": 8,
          "response": "You earned some money — but missed sharing a special day with your friend. Memories outlast money. 💭"
        }
      ],
      "realWorldTip": "Sometimes the most valuable thing you can share is an experience with someone you love.",
      "reflectionPrompt": "What's a memory you treasure more than any object?"
    },
    {
      "id": "sok_054",
      "title": "The Game Account",
      "setting": "online",
      "characters": [
        "online friend"
      ],
      "ageRange": [
        8,
        12
      ],
      "difficulty": 1,
      "theme": "online",
      "growthDimensions": [
        "empathy",
        "fairness"
      ],
      "culture": [
        "global"
      ],
      "tags": [
        "online",
        "gaming",
        "sharing",
        "digital"
      ],
      "situation": "You unlocked a rare item in a game. An online friend who's new asks if you'll share tips or help them get one too.",
      "choices": [
        {
          "text": "Spend time helping them get one too 🎮",
          "outcome": "generous",
          "xp": 25,
          "response": "You shared your time and knowledge! Your friend leveled up thanks to you. 🌟"
        },
        {
          "text": "Give them a few quick tips 🤝",
          "outcome": "fair",
          "xp": 20,
          "response": "A few helpful tips set them on the right path. Kind of you! 😊"
        },
        {
          "text": "Keep your tricks secret",
          "outcome": "self",
          "xp": 8,
          "response": "You stayed ahead — but helping a new player would have made the game friendlier for both. 💭"
        }
      ],
      "realWorldTip": "Sharing knowledge online helps build a kinder community for everyone.",
      "reflectionPrompt": "How does it feel when an experienced player helps you learn?"
    },
    {
      "id": "sok_055",
      "title": "The Notes Before Exams",
      "setting": "school",
      "characters": [
        "classmate who was absent"
      ],
      "ageRange": [
        8,
        12
      ],
      "difficulty": 1,
      "theme": "India",
      "growthDimensions": [
        "empathy",
        "fairness"
      ],
      "culture": [
        "IN"
      ],
      "tags": [
        "India",
        "school",
        "exams",
        "sharing"
      ],
      "situation": "Exams are near. A classmate was sick for a week and missed important notes. You have neat, complete notes — and worry sharing might give them an edge.",
      "choices": [
        {
          "text": "Share your full notes to help them catch up 📒",
          "outcome": "generous",
          "xp": 25,
          "response": "You helped a classmate who fell behind through no fault of theirs. Generous and fair. 🌟"
        },
        {
          "text": "Share the key points and explain them 🤝",
          "outcome": "fair",
          "xp": 20,
          "response": "You gave them what they truly needed to catch up. Thoughtful! 😊"
        },
        {
          "text": "Keep your notes — you worked hard for them",
          "outcome": "self",
          "xp": 8,
          "response": "You did work hard — but they were sick, not lazy. Sharing helps level the field. 💭"
        }
      ],
      "realWorldTip": "Helping someone who fell behind through bad luck is fairness, not losing.",
      "reflectionPrompt": "Would you want help catching up if you'd been sick? Why?"
    },
    {
      "id": "sok_056",
      "title": "The Allowance Decision",
      "setting": "home",
      "characters": [
        "sibling saving for something"
      ],
      "ageRange": [
        8,
        12
      ],
      "difficulty": 1,
      "theme": "US",
      "growthDimensions": [
        "empathy",
        "fairness"
      ],
      "culture": [
        "US"
      ],
      "tags": [
        "US",
        "family",
        "money",
        "siblings"
      ],
      "situation": "You've saved $30. Your sibling is $5 short of buying something they've wanted for months and feels disappointed.",
      "choices": [
        {
          "text": "Lend or give them the $5 they need 💵",
          "outcome": "generous",
          "xp": 25,
          "response": "You helped your sibling reach their goal! Their gratitude is worth more than $5. 🌟"
        },
        {
          "text": "Offer to lend it, to be paid back later 🤝",
          "outcome": "fair",
          "xp": 20,
          "response": "A fair loan — you help now and get it back later. Kind and sensible. 😊"
        },
        {
          "text": "Keep all your savings",
          "outcome": "self",
          "xp": 8,
          "response": "It's your money to keep — but $5 could turn your sibling's disappointment into joy. 💭"
        }
      ],
      "realWorldTip": "Helping family reach a goal builds trust that lasts far longer than the money.",
      "reflectionPrompt": "How does it feel when someone helps you reach something you've worked toward?"
    },
    {
      "id": "sok_057",
      "title": "The Street Vendor's Change",
      "setting": "shop",
      "characters": [
        "street vendor",
        "younger sibling"
      ],
      "ageRange": [
        8,
        12
      ],
      "difficulty": 1,
      "theme": "India",
      "growthDimensions": [
        "empathy",
        "fairness"
      ],
      "culture": [
        "IN"
      ],
      "tags": [
        "India",
        "shop",
        "honesty",
        "money"
      ],
      "situation": "A street vendor accidentally gives you ₹50 extra in change. Your younger sibling whispers, \"Just keep it, he won't notice.\"",
      "choices": [
        {
          "text": "Return the extra change honestly 💰",
          "outcome": "generous",
          "xp": 25,
          "response": "You returned what wasn't yours! The vendor was so grateful. Honesty is its own reward. 🌟"
        },
        {
          "text": "Return it and explain to your sibling why 🤝",
          "outcome": "fair",
          "xp": 20,
          "response": "You did the right thing AND taught your sibling. Double kindness! 😊"
        },
        {
          "text": "Keep the extra money",
          "outcome": "self",
          "xp": 8,
          "response": "You kept ₹50 — but it belonged to the vendor, who works hard for every rupee. Returning it is right. 💭"
        }
      ],
      "realWorldTip": "Returning extra change, even when no one would notice, builds an honest heart.",
      "reflectionPrompt": "Why does honesty matter even when no one is watching?"
    },
    {
      "id": "sok_058",
      "title": "The Science Fair Spotlight",
      "setting": "school",
      "characters": [
        "quiet teammate"
      ],
      "ageRange": [
        8,
        12
      ],
      "difficulty": 1,
      "theme": "school",
      "growthDimensions": [
        "empathy",
        "fairness"
      ],
      "culture": [
        "global"
      ],
      "tags": [
        "school",
        "teamwork",
        "credit",
        "fairness"
      ],
      "situation": "Your team won the science fair. The teacher asks who did the work. A quiet teammate did a lot but said nothing. You could take most of the credit.",
      "choices": [
        {
          "text": "Make sure your quiet teammate gets credit 🏆",
          "outcome": "generous",
          "xp": 25,
          "response": "You shared the spotlight fairly! Your teammate finally got recognised. That's leadership. 🌟"
        },
        {
          "text": "Name everyone's contributions equally 🤝",
          "outcome": "fair",
          "xp": 20,
          "response": "You gave fair credit to all. Everyone felt valued. 😊"
        },
        {
          "text": "Accept most of the praise yourself",
          "outcome": "self",
          "xp": 8,
          "response": "You got the glory — but your quiet teammate deserved recognition too. Sharing credit is fair. 💭"
        }
      ],
      "realWorldTip": "Sharing credit fairly, especially with quiet people, is a mark of a true leader.",
      "reflectionPrompt": "How does it feel when someone takes credit for your work?"
    },
    {
      "id": "sok_059",
      "title": "The Group Snack Decision",
      "setting": "school",
      "characters": [
        "classmates",
        "one child with allergies"
      ],
      "ageRange": [
        4,
        9
      ],
      "difficulty": 2,
      "theme": "India",
      "growthDimensions": [
        "empathy",
        "fairness"
      ],
      "culture": [
        "IN"
      ],
      "tags": [
        "India",
        "school",
        "food",
        "inclusion"
      ],
      "situation": "Your class is sharing snacks for a party. You brought peanut chikki, your favourite. But one classmate is allergic to peanuts and can't have any of the treats with nuts.",
      "choices": [
        {
          "text": "Suggest swapping to snacks everyone can eat 🥜",
          "outcome": "generous",
          "xp": 25,
          "response": "You thought of the one person who'd be left out! Now everyone can join the party. 🌟"
        },
        {
          "text": "Set aside safe snacks just for them 🤝",
          "outcome": "fair",
          "xp": 20,
          "response": "You made sure they had something too. Thoughtful inclusion! 😊"
        },
        {
          "text": "Bring your chikki anyway — most kids can eat it",
          "outcome": "self",
          "xp": 8,
          "response": "Most kids enjoyed it — but one was left watching. Including everyone matters more than your favourite. 💭"
        }
      ],
      "realWorldTip": "When planning shared food, think about who might be left out and find a way to include them.",
      "reflectionPrompt": "How would it feel to watch everyone eat treats you can't have?"
    },
    {
      "id": "sok_060",
      "title": "The Video Game Turn",
      "setting": "home",
      "characters": [
        "two siblings",
        "one friend visiting"
      ],
      "ageRange": [
        4,
        9
      ],
      "difficulty": 2,
      "theme": "US",
      "growthDimensions": [
        "empathy",
        "fairness"
      ],
      "culture": [
        "US"
      ],
      "tags": [
        "US",
        "family",
        "gaming",
        "turns"
      ],
      "situation": "Three of you want to play a game that's only for two players. Your sibling and your visiting friend are both waiting while you play.",
      "choices": [
        {
          "text": "Set up a fair rotation so all three play 🎮",
          "outcome": "generous",
          "xp": 25,
          "response": "You created a system where nobody's left out for long. Everyone had fun! 🌟"
        },
        {
          "text": "Let the two of them play while you watch 🤝",
          "outcome": "fair",
          "xp": 20,
          "response": "You stepped back so others could play. Generous waiting! 😊"
        },
        {
          "text": "Keep playing — you set it up",
          "outcome": "self",
          "xp": 8,
          "response": "You enjoyed your game — but two people waited a long time. Rotating turns is fairer. 💭"
        }
      ],
      "realWorldTip": "When more people want to play than a game allows, a fair rotation keeps everyone happy.",
      "reflectionPrompt": "How long is too long to wait for your turn?"
    },
    {
      "id": "sok_061",
      "title": "The Rakhi Sweets",
      "setting": "festival",
      "characters": [
        "cousins",
        "one cousin who arrived late"
      ],
      "ageRange": [
        4,
        9
      ],
      "difficulty": 2,
      "theme": "India",
      "growthDimensions": [
        "empathy",
        "fairness"
      ],
      "culture": [
        "IN"
      ],
      "tags": [
        "India",
        "festival",
        "RakshaBandhan",
        "sharing"
      ],
      "situation": "After Raksha Bandhan, the sweets are almost gone. A cousin who arrived late hasn't had any, and there are only two pieces left — which you were saving.",
      "choices": [
        {
          "text": "Give both pieces to your late cousin 🍬",
          "outcome": "generous",
          "xp": 25,
          "response": "You gave up your saved sweets so they wouldn't miss out on the festival. Beautiful! 🌟"
        },
        {
          "text": "Share one piece, keep one 🤝",
          "outcome": "fair",
          "xp": 20,
          "response": "One for them, one for you — fair festival sharing! 😊"
        },
        {
          "text": "Eat both — you were saving them",
          "outcome": "self",
          "xp": 8,
          "response": "You saved them fairly — but your cousin had none of the festival sweets. Sharing would mean a lot. 💭"
        }
      ],
      "realWorldTip": "Festivals feel complete when everyone, even latecomers, gets to share in the joy.",
      "reflectionPrompt": "How would you feel arriving late to find all the treats gone?"
    },
    {
      "id": "sok_062",
      "title": "The Shared Sandcastle",
      "setting": "park",
      "characters": [
        "kids building separately"
      ],
      "ageRange": [
        4,
        9
      ],
      "difficulty": 2,
      "theme": "park",
      "growthDimensions": [
        "empathy",
        "fairness"
      ],
      "culture": [
        "global"
      ],
      "tags": [
        "park",
        "beach",
        "teamwork",
        "building"
      ],
      "situation": "You're building a sandcastle with the only good bucket and shovel. Two other kids are trying to build with just their hands and struggling.",
      "choices": [
        {
          "text": "Invite them to build one big castle together 🏖️",
          "outcome": "generous",
          "xp": 25,
          "response": "You turned three small struggles into one amazing castle! Teamwork made it magnificent. 🌟"
        },
        {
          "text": "Lend them your tools when you're done 🤝",
          "outcome": "fair",
          "xp": 20,
          "response": "Sharing your tools after your turn — fair and kind! 😊"
        },
        {
          "text": "Keep building your own castle",
          "outcome": "self",
          "xp": 8,
          "response": "Your castle looks nice — but the others struggled nearby. Sharing tools could've built something amazing together. 💭"
        }
      ],
      "realWorldTip": "Sharing tools and working together often creates something better than working alone.",
      "reflectionPrompt": "What can a group build together that one person can't build alone?"
    },
    {
      "id": "sok_063",
      "title": "The One Swing in PE",
      "setting": "school",
      "characters": [
        "classmates",
        "a shy new student"
      ],
      "ageRange": [
        4,
        9
      ],
      "difficulty": 2,
      "theme": "India",
      "growthDimensions": [
        "empathy",
        "fairness"
      ],
      "culture": [
        "IN"
      ],
      "tags": [
        "India",
        "school",
        "inclusion",
        "PE"
      ],
      "situation": "During free play, everyone rushes to the equipment. A shy new student stands alone, unsure how to join. You're already on the best spot.",
      "choices": [
        {
          "text": "Invite the new student to join you 🤸",
          "outcome": "generous",
          "xp": 25,
          "response": "You noticed the one left out and welcomed them. They felt so much better! 🌟"
        },
        {
          "text": "Introduce them to a group to play with 🤝",
          "outcome": "fair",
          "xp": 20,
          "response": "You helped them find friends to play with. Kind connecting! 😊"
        },
        {
          "text": "Keep playing — they'll figure it out",
          "outcome": "self",
          "xp": 8,
          "response": "You had fun — but the new student stood alone. A simple invite could change their whole day. 💭"
        }
      ],
      "realWorldTip": "Noticing someone who's new or shy and inviting them in is a powerful kindness.",
      "reflectionPrompt": "How did it feel the first time you were somewhere new and didn't know anyone?"
    },
    {
      "id": "sok_064",
      "title": "The Last Two Pancakes",
      "setting": "home",
      "characters": [
        "family at breakfast"
      ],
      "ageRange": [
        4,
        9
      ],
      "difficulty": 2,
      "theme": "US",
      "growthDimensions": [
        "empathy",
        "fairness"
      ],
      "culture": [
        "US"
      ],
      "tags": [
        "US",
        "family",
        "food",
        "breakfast"
      ],
      "situation": "There are two pancakes left and three people still want more: you, your sibling, and your dad who hasn't eaten yet because he was making them.",
      "choices": [
        {
          "text": "Offer both to Dad — he made them and hasn't eaten 🥞",
          "outcome": "generous",
          "xp": 25,
          "response": "You noticed Dad worked hard and went without! Thoughtful and grateful. 🌟"
        },
        {
          "text": "Cut them up so all three share 🤝",
          "outcome": "fair",
          "xp": 20,
          "response": "Cutting them to share three ways — everyone gets a bite. Fair! 😊"
        },
        {
          "text": "Take one for yourself quickly",
          "outcome": "self",
          "xp": 8,
          "response": "You got a pancake — but Dad cooked and hasn't eaten. Noticing his effort would be kind. 💭"
        }
      ],
      "realWorldTip": "Notice when someone has worked hard or gone without — they often deserve the first share.",
      "reflectionPrompt": "Who in your home does things for others and sometimes goes last?"
    },
    {
      "id": "sok_065",
      "title": "The Shared Study Table",
      "setting": "home",
      "characters": [
        "sibling doing homework"
      ],
      "ageRange": [
        4,
        9
      ],
      "difficulty": 2,
      "theme": "India",
      "growthDimensions": [
        "empathy",
        "fairness"
      ],
      "culture": [
        "IN"
      ],
      "tags": [
        "India",
        "family",
        "homework",
        "space"
      ],
      "situation": "There's one study table and you've spread all your books across it. Your sibling needs to do their homework too but has no space.",
      "choices": [
        {
          "text": "Clear half the table for them to share 📚",
          "outcome": "generous",
          "xp": 25,
          "response": "You made room without being asked! Now you both study side by side. 🌟"
        },
        {
          "text": "Take turns — you finish, then them 🤝",
          "outcome": "fair",
          "xp": 20,
          "response": "Taking turns at the table — fair sharing of space! 😊"
        },
        {
          "text": "Keep the whole table — you were there first",
          "outcome": "self",
          "xp": 8,
          "response": "You had your space — but your sibling had none. Sharing the table helps you both. 💭"
        }
      ],
      "realWorldTip": "Sharing space, like a table, is just as kind as sharing things.",
      "reflectionPrompt": "Why is it sometimes hard to share space you've already settled into?"
    },
    {
      "id": "sok_066",
      "title": "The Class Pet Care",
      "setting": "school",
      "characters": [
        "classmates",
        "the class hamster"
      ],
      "ageRange": [
        4,
        9
      ],
      "difficulty": 2,
      "theme": "school",
      "growthDimensions": [
        "empathy",
        "fairness"
      ],
      "culture": [
        "global"
      ],
      "tags": [
        "school",
        "pets",
        "responsibility",
        "sharing"
      ],
      "situation": "It's your turn to feed the class hamster — the fun job everyone wants. A classmate who never gets picked is watching hopefully.",
      "choices": [
        {
          "text": "Let the classmate help you feed it 🐹",
          "outcome": "generous",
          "xp": 25,
          "response": "You shared the special job with someone who never gets a turn. They were thrilled! 🌟"
        },
        {
          "text": "Ask the teacher if you can do it together 🤝",
          "outcome": "fair",
          "xp": 20,
          "response": "You found a fair way to include them. Thoughtful! 😊"
        },
        {
          "text": "Do it yourself — it's your turn",
          "outcome": "self",
          "xp": 8,
          "response": "It was your turn fairly — but sharing the joy with someone left out would be extra kind. 💭"
        }
      ],
      "realWorldTip": "Sharing a fun responsibility with someone who's often left out spreads happiness.",
      "reflectionPrompt": "How does it feel to never get picked for the fun jobs?"
    },
    {
      "id": "sok_067",
      "title": "The Ice Cream Money",
      "setting": "shop",
      "characters": [
        "friend who lost their money"
      ],
      "ageRange": [
        4,
        9
      ],
      "difficulty": 2,
      "theme": "India",
      "growthDimensions": [
        "empathy",
        "fairness"
      ],
      "culture": [
        "IN"
      ],
      "tags": [
        "India",
        "shop",
        "money",
        "friends"
      ],
      "situation": "You and a friend went to buy ice cream. Your friend lost their coins on the way and now can't buy one. You have just enough for yours.",
      "choices": [
        {
          "text": "Buy one and share it with your friend 🍦",
          "outcome": "generous",
          "xp": 25,
          "response": "You shared your ice cream so your friend wouldn't go without. Sweet friendship! 🌟"
        },
        {
          "text": "Get a smaller one each so both have some 🤝",
          "outcome": "fair",
          "xp": 20,
          "response": "Clever! Two small ones so you both enjoy a treat. 😊"
        },
        {
          "text": "Buy your ice cream and eat it",
          "outcome": "self",
          "xp": 8,
          "response": "You enjoyed yours — but your friend watched with none. Sharing would have meant so much. 💭"
        }
      ],
      "realWorldTip": "Sharing a treat when a friend has bad luck turns a sad moment into a happy one.",
      "reflectionPrompt": "Have you ever lost something and had a friend help you out?"
    },
    {
      "id": "sok_068",
      "title": "The Bike Helmet",
      "setting": "park",
      "characters": [
        "friend who wants to try your bike"
      ],
      "ageRange": [
        4,
        9
      ],
      "difficulty": 2,
      "theme": "US",
      "growthDimensions": [
        "empathy",
        "fairness"
      ],
      "culture": [
        "US"
      ],
      "tags": [
        "US",
        "park",
        "safety",
        "sharing"
      ],
      "situation": "Your friend wants to try your new bike, but there's only one helmet — yours. They want to ride without it to have a turn.",
      "choices": [
        {
          "text": "Share the helmet so they ride safely 🚴",
          "outcome": "generous",
          "xp": 25,
          "response": "You shared your helmet so your friend could ride safely. Caring AND smart! 🌟"
        },
        {
          "text": "Take turns riding, sharing the helmet 🤝",
          "outcome": "fair",
          "xp": 20,
          "response": "Taking turns and sharing safety gear — responsible sharing! 😊"
        },
        {
          "text": "Let them ride without it — just this once",
          "outcome": "self",
          "xp": 8,
          "response": "They got a turn — but safety matters. Sharing the helmet keeps everyone protected. 💭"
        }
      ],
      "realWorldTip": "Real sharing includes sharing safety — never let a turn come at the cost of someone getting hurt.",
      "reflectionPrompt": "Why is it important to stay safe even when you're excited for a turn?"
    },
    {
      "id": "sok_069",
      "title": "The Pongal Feast",
      "setting": "festival",
      "characters": [
        "neighbour who lives alone"
      ],
      "ageRange": [
        4,
        9
      ],
      "difficulty": 2,
      "theme": "India",
      "growthDimensions": [
        "empathy",
        "fairness"
      ],
      "culture": [
        "IN"
      ],
      "tags": [
        "India",
        "festival",
        "Pongal",
        "community"
      ],
      "situation": "Your family made a big Pongal feast. An elderly neighbour who lives alone has no family visiting this year. There's plenty of food.",
      "choices": [
        {
          "text": "Ask to share the feast with the neighbour 🍚",
          "outcome": "generous",
          "xp": 25,
          "response": "You thought of someone alone on a festival day! Your kindness made their Pongal special. 🌟"
        },
        {
          "text": "Take a plate of food over to them 🤝",
          "outcome": "fair",
          "xp": 20,
          "response": "Bringing them a festival plate — warm and thoughtful! 😊"
        },
        {
          "text": "Enjoy the feast with just your family",
          "outcome": "self",
          "xp": 8,
          "response": "Your family feast was lovely — but a neighbour sat alone. Sharing the festival would have meant the world. 💭"
        }
      ],
      "realWorldTip": "Festivals are a chance to include those who are alone — a shared meal can mean everything.",
      "reflectionPrompt": "How might someone feel spending a festival day completely alone?"
    },
    {
      "id": "sok_070",
      "title": "The Birthday Goodie Bags",
      "setting": "home",
      "characters": [
        "party guests",
        "one extra child"
      ],
      "ageRange": [
        4,
        9
      ],
      "difficulty": 2,
      "theme": "birthday",
      "growthDimensions": [
        "empathy",
        "fairness"
      ],
      "culture": [
        "global"
      ],
      "tags": [
        "birthday",
        "sharing",
        "party",
        "inclusion"
      ],
      "situation": "At your birthday, you made goodie bags for each guest. One more child showed up than expected, and now there aren't enough bags for everyone.",
      "choices": [
        {
          "text": "Give the extra child yours from the host stash 🎁",
          "outcome": "generous",
          "xp": 25,
          "response": "You gave up your own goodie bag so no guest felt left out! Generous host. 🌟"
        },
        {
          "text": "Split the treats so everyone gets some 🤝",
          "outcome": "fair",
          "xp": 20,
          "response": "You shared out the treats fairly. Everyone leaves happy! 😊"
        },
        {
          "text": "Let the extra child go without — you ran out",
          "outcome": "self",
          "xp": 8,
          "response": "It wasn't your fault you ran out — but a child left empty-handed. Sharing yours would be kind. 💭"
        }
      ],
      "realWorldTip": "A good host makes sure no guest feels left out, even if it means giving up your own share.",
      "reflectionPrompt": "How would it feel to be the only one without a party favour?"
    },
    {
      "id": "sok_071",
      "title": "The Umbrella in the Rain",
      "setting": "school",
      "characters": [
        "classmate with no umbrella"
      ],
      "ageRange": [
        4,
        9
      ],
      "difficulty": 2,
      "theme": "India",
      "growthDimensions": [
        "empathy",
        "fairness"
      ],
      "culture": [
        "IN"
      ],
      "tags": [
        "India",
        "school",
        "rain",
        "sharing"
      ],
      "situation": "It's pouring after school and you have an umbrella. A classmate who lives the same way as you has none and is about to get soaked.",
      "choices": [
        {
          "text": "Share your umbrella and walk together ☂️",
          "outcome": "generous",
          "xp": 25,
          "response": "You shared your umbrella and your walk home! Both of you stayed dry and made a friend. 🌟"
        },
        {
          "text": "Walk them to their gate, then continue 🤝",
          "outcome": "fair",
          "xp": 20,
          "response": "You got them part of the way safely. Kind sharing! 😊"
        },
        {
          "text": "Use it yourself — it's your umbrella",
          "outcome": "self",
          "xp": 8,
          "response": "You stayed dry — but your classmate got soaked walking the same way. Sharing would've helped you both. 💭"
        }
      ],
      "realWorldTip": "Sharing an umbrella is a small thing that can turn a miserable walk into a friendly one.",
      "reflectionPrompt": "Has anyone ever shared something with you on a rainy or cold day?"
    },
    {
      "id": "sok_072",
      "title": "The Reading Buddy",
      "setting": "school",
      "characters": [
        "classmate who reads slowly"
      ],
      "ageRange": [
        4,
        9
      ],
      "difficulty": 2,
      "theme": "US",
      "growthDimensions": [
        "empathy",
        "fairness"
      ],
      "culture": [
        "US"
      ],
      "tags": [
        "US",
        "school",
        "inclusion",
        "reading"
      ],
      "situation": "During reading time, you finish your book quickly. A classmate is struggling and falling behind, looking frustrated and a little embarrassed.",
      "choices": [
        {
          "text": "Offer to be their reading buddy and help 📖",
          "outcome": "generous",
          "xp": 25,
          "response": "You turned your free time into help for someone struggling. Patient and kind! 🌟"
        },
        {
          "text": "Quietly tell the teacher they might need support 🤝",
          "outcome": "responsible",
          "xp": 20,
          "response": "You got them the right help discreetly. Thoughtful! 😊"
        },
        {
          "text": "Start a second book on your own",
          "outcome": "self",
          "xp": 8,
          "response": "You read ahead — but a classmate struggled alone nearby. A little help could lift them. 💭"
        }
      ],
      "realWorldTip": "Helping someone who's struggling, without making them feel bad, is a wonderful kindness.",
      "reflectionPrompt": "How does it feel to fall behind while others race ahead? What would help?"
    },
    {
      "id": "sok_073",
      "title": "The Library Book",
      "setting": "school",
      "characters": [
        "classmate who needs the same book"
      ],
      "ageRange": [
        5,
        10
      ],
      "difficulty": 2,
      "theme": "India",
      "growthDimensions": [
        "empathy",
        "fairness"
      ],
      "culture": [
        "IN"
      ],
      "tags": [
        "India",
        "school",
        "books",
        "sharing"
      ],
      "situation": "There's only one copy of the book you both need for a project. You got to it first, but your classmate needs it for the same deadline.",
      "choices": [
        {
          "text": "Suggest sharing it — study together 📖",
          "outcome": "generous",
          "xp": 25,
          "response": "You turned competition into teamwork! Studying together helped you both. 🌟"
        },
        {
          "text": "Split the time — you take it, then them 🤝",
          "outcome": "fair",
          "xp": 20,
          "response": "A fair schedule so you both get to use it. Smart sharing! 😊"
        },
        {
          "text": "Keep it the whole time — you got it first",
          "outcome": "self",
          "xp": 8,
          "response": "You got the book — but your classmate has the same deadline. Sharing time would be fair. 💭"
        }
      ],
      "realWorldTip": "When a resource is limited, sharing the time fairly helps everyone meet their goals.",
      "reflectionPrompt": "How does it feel when someone won't share something you both need?"
    },
    {
      "id": "sok_074",
      "title": "The Charging Cable",
      "setting": "home",
      "characters": [
        "family members",
        "sibling with a dead tablet"
      ],
      "ageRange": [
        5,
        10
      ],
      "difficulty": 2,
      "theme": "US",
      "growthDimensions": [
        "empathy",
        "fairness"
      ],
      "culture": [
        "US"
      ],
      "tags": [
        "US",
        "family",
        "technology",
        "sharing"
      ],
      "situation": "There's one charging cable and your tablet is at 80%. Your sibling's tablet is dead and they want to use it for a school assignment.",
      "choices": [
        {
          "text": "Let them charge first — they need it for school 🔌",
          "outcome": "generous",
          "xp": 25,
          "response": "You put their schoolwork first! Your tablet can wait. Considerate choice. 🌟"
        },
        {
          "text": "Take turns charging — they go first 🤝",
          "outcome": "fair",
          "xp": 20,
          "response": "Fair sharing — their urgent need first, yours after. 😊"
        },
        {
          "text": "Keep charging yours — you had it first",
          "outcome": "self",
          "xp": 8,
          "response": "Your tablet's already fine — theirs is dead and they have schoolwork. Letting them go first is kind. 💭"
        }
      ],
      "realWorldTip": "When sharing, consider whose need is more urgent — not just who got there first.",
      "reflectionPrompt": "Why does it matter whose need is more urgent when sharing?"
    },
    {
      "id": "sok_075",
      "title": "The Football Captain",
      "setting": "park",
      "characters": [
        "kids picking teams",
        "a less skilled player"
      ],
      "ageRange": [
        5,
        10
      ],
      "difficulty": 2,
      "theme": "India",
      "growthDimensions": [
        "empathy",
        "fairness"
      ],
      "culture": [
        "IN"
      ],
      "tags": [
        "India",
        "sports",
        "inclusion",
        "football"
      ],
      "situation": "You're picking football teams. There's one player left who isn't very good. Picking them might cost you the game, but they look anxious about being last.",
      "choices": [
        {
          "text": "Pick them warmly and encourage them ⚽",
          "outcome": "generous",
          "xp": 25,
          "response": "You chose kindness over winning! Their confidence soared, and your team had heart. 🌟"
        },
        {
          "text": "Pick them but give them an easier position 🤝",
          "outcome": "fair",
          "xp": 20,
          "response": "You included them thoughtfully, setting them up to succeed. 😊"
        },
        {
          "text": "Pick the strongest remaining players",
          "outcome": "self",
          "xp": 8,
          "response": "You aimed to win — but that player felt the sting of being last again. Including them matters. 💭"
        }
      ],
      "realWorldTip": "How you treat the least skilled player shows what kind of leader and teammate you are.",
      "reflectionPrompt": "What would help you feel better if you were always picked last?"
    },
    {
      "id": "sok_076",
      "title": "The Shared Computer",
      "setting": "school",
      "characters": [
        "classmate without a computer at home"
      ],
      "ageRange": [
        5,
        10
      ],
      "difficulty": 2,
      "theme": "school",
      "growthDimensions": [
        "empathy",
        "fairness"
      ],
      "culture": [
        "global"
      ],
      "tags": [
        "school",
        "technology",
        "sharing",
        "fairness"
      ],
      "situation": "You both need the one free library computer. You have one at home; your classmate doesn't and can only work here.",
      "choices": [
        {
          "text": "Let them use it — you can work at home 💻",
          "outcome": "generous",
          "xp": 25,
          "response": "You realised their need was greater and stepped aside. Wise and fair! 🌟"
        },
        {
          "text": "Split the time fairly between you 🤝",
          "outcome": "fair",
          "xp": 20,
          "response": "Sharing the time fairly — you both get work done. 😊"
        },
        {
          "text": "Use it now — you got here first",
          "outcome": "self",
          "xp": 8,
          "response": "You can work at home, but they can't. Letting them use it would be the fairer choice. 💭"
        }
      ],
      "realWorldTip": "Fairness sometimes means giving up your turn for someone who has fewer options.",
      "reflectionPrompt": "Is 'first come first served' always the fairest way? When might it not be?"
    },
    {
      "id": "sok_077",
      "title": "The Festival New Clothes",
      "setting": "home",
      "characters": [
        "cousin whose family has less"
      ],
      "ageRange": [
        5,
        10
      ],
      "difficulty": 2,
      "theme": "India",
      "growthDimensions": [
        "empathy",
        "fairness"
      ],
      "culture": [
        "IN"
      ],
      "tags": [
        "India",
        "festival",
        "clothes",
        "generosity"
      ],
      "situation": "You got three new outfits for the festival. Your cousin, whose family is struggling, got none and admires one of yours.",
      "choices": [
        {
          "text": "Offer to share an outfit with your cousin 👕",
          "outcome": "generous",
          "xp": 25,
          "response": "You shared your festival joy! Your cousin felt included and special. 🌟"
        },
        {
          "text": "Give them one you wear less often 🤝",
          "outcome": "fair",
          "xp": 20,
          "response": "A thoughtful gift from what you have plenty of. Kind! 😊"
        },
        {
          "text": "Keep all three — they're yours",
          "outcome": "self",
          "xp": 8,
          "response": "They're your outfits — but your cousin has none for the festival. Sharing one could mean so much. 💭"
        }
      ],
      "realWorldTip": "When you have more than enough, sharing with family who have less is true festival spirit.",
      "reflectionPrompt": "How would a festival feel without anything new to wear when others have lots?"
    },
    {
      "id": "sok_078",
      "title": "The Project Partner Choice",
      "setting": "school",
      "characters": [
        "popular friend",
        "a lonely classmate"
      ],
      "ageRange": [
        5,
        10
      ],
      "difficulty": 2,
      "theme": "US",
      "growthDimensions": [
        "empathy",
        "fairness"
      ],
      "culture": [
        "US"
      ],
      "tags": [
        "US",
        "school",
        "inclusion",
        "friendship"
      ],
      "situation": "You can pick a project partner. Your popular friend wants you, but you notice a classmate who's often alone has no partner and looks worried.",
      "choices": [
        {
          "text": "Partner with the classmate who has no one 🤝",
          "outcome": "generous",
          "xp": 25,
          "response": "You chose someone who needed a partner over the easy choice. That's real kindness. 🌟"
        },
        {
          "text": "Suggest a group of three to include everyone 👥",
          "outcome": "fair",
          "xp": 20,
          "response": "You found a way to include both! Clever and kind. 😊"
        },
        {
          "text": "Pick your popular friend",
          "outcome": "self",
          "xp": 8,
          "response": "You had fun with your friend — but a classmate was left without a partner again. 💭"
        }
      ],
      "realWorldTip": "Choosing to include someone who's often left out can change how they feel about themselves.",
      "reflectionPrompt": "How does it feel to be the last one without a partner?"
    },
    {
      "id": "sok_079",
      "title": "The Shared Auto Ride",
      "setting": "shop",
      "characters": [
        "classmate going the same way"
      ],
      "ageRange": [
        5,
        10
      ],
      "difficulty": 2,
      "theme": "India",
      "growthDimensions": [
        "empathy",
        "fairness"
      ],
      "culture": [
        "IN"
      ],
      "tags": [
        "India",
        "transport",
        "sharing",
        "money"
      ],
      "situation": "You're taking an auto-rickshaw home. A classmate going the same direction is waiting in the heat with no money for their own ride.",
      "choices": [
        {
          "text": "Offer to share your auto and split nothing 🛺",
          "outcome": "generous",
          "xp": 25,
          "response": "You shared your ride and saved your classmate from the heat. Generous! 🌟"
        },
        {
          "text": "Share the ride and they pay you back later 🤝",
          "outcome": "fair",
          "xp": 20,
          "response": "Sharing the ride with a fair pay-back plan. Helpful and sensible! 😊"
        },
        {
          "text": "Take the auto alone — you paid for it",
          "outcome": "self",
          "xp": 8,
          "response": "You rode comfortably — but your classmate waited in the heat. Sharing the ride costs little and helps a lot. 💭"
        }
      ],
      "realWorldTip": "Sharing a ride with someone stuck or struggling is an easy, caring act.",
      "reflectionPrompt": "Have you ever been stuck somewhere wishing someone would help?"
    },
    {
      "id": "sok_080",
      "title": "The Class Group Chat",
      "setting": "online",
      "characters": [
        "classmate who missed the announcement"
      ],
      "ageRange": [
        9,
        12
      ],
      "difficulty": 2,
      "theme": "India",
      "growthDimensions": [
        "empathy",
        "fairness"
      ],
      "culture": [
        "IN"
      ],
      "tags": [
        "India",
        "online",
        "school",
        "sharing"
      ],
      "situation": "In the class WhatsApp group, you see important exam information. A classmate who was offline missed it and messages asking if anyone can help.",
      "choices": [
        {
          "text": "Share all the details clearly to help them 📱",
          "outcome": "generous",
          "xp": 25,
          "response": "You took the time to help them catch up. Generous with your effort! 🌟"
        },
        {
          "text": "Send them the key points 🤝",
          "outcome": "fair",
          "xp": 20,
          "response": "You gave them what they needed to stay on track. Kind! 😊"
        },
        {
          "text": "Ignore it — they should've been online",
          "outcome": "self",
          "xp": 8,
          "response": "You had the info — they missed it by bad luck. Sharing would've helped a classmate in need. 💭"
        }
      ],
      "realWorldTip": "Sharing important information with someone who missed it is a quiet, valuable kindness.",
      "reflectionPrompt": "How would you feel if you missed something important and no one helped?"
    },
    {
      "id": "sok_081",
      "title": "The Test Curve",
      "setting": "school",
      "characters": [
        "struggling classmate"
      ],
      "ageRange": [
        9,
        12
      ],
      "difficulty": 2,
      "theme": "US",
      "growthDimensions": [
        "empathy",
        "fairness"
      ],
      "culture": [
        "US"
      ],
      "tags": [
        "US",
        "school",
        "exams",
        "helping"
      ],
      "situation": "You did really well on a test. A classmate who tried hard but struggles asks if you'll help them study before the next one. It would cost you free time.",
      "choices": [
        {
          "text": "Spend your free time tutoring them 📝",
          "outcome": "generous",
          "xp": 25,
          "response": "You gave your time to help someone improve. Generous and patient! 🌟"
        },
        {
          "text": "Share your study method and notes 🤝",
          "outcome": "fair",
          "xp": 20,
          "response": "You shared what works for you. A helpful boost! 😊"
        },
        {
          "text": "Say you're too busy",
          "outcome": "self",
          "xp": 8,
          "response": "Your time is valuable — but a classmate reached out for help. A little of your time could change their grade. 💭"
        }
      ],
      "realWorldTip": "Sharing your knowledge and time with someone who's struggling is one of the most generous acts.",
      "reflectionPrompt": "How does it feel when someone patient helps you understand something hard?"
    },
    {
      "id": "sok_082",
      "title": "The Inherited Bicycle",
      "setting": "home",
      "characters": [
        "younger neighbour"
      ],
      "ageRange": [
        9,
        12
      ],
      "difficulty": 2,
      "theme": "India",
      "growthDimensions": [
        "empathy",
        "fairness"
      ],
      "culture": [
        "IN"
      ],
      "tags": [
        "India",
        "generosity",
        "community",
        "recycling"
      ],
      "situation": "You've outgrown your old bicycle but it still works. A younger neighbour can't afford one and walks far to school every day.",
      "choices": [
        {
          "text": "Give them your old bicycle 🚲",
          "outcome": "generous",
          "xp": 25,
          "response": "You gave a child the gift of an easier journey to school! Life-changing kindness. 🌟"
        },
        {
          "text": "Lend it to them until they get their own 🤝",
          "outcome": "fair",
          "xp": 20,
          "response": "Lending it helps them now while you decide. Thoughtful! 😊"
        },
        {
          "text": "Keep it in the garage just in case",
          "outcome": "self",
          "xp": 8,
          "response": "It sits unused — while a child walks far daily. Giving it would transform their school days. 💭"
        }
      ],
      "realWorldTip": "Passing on what you've outgrown can be life-changing for someone who has less.",
      "reflectionPrompt": "What do you own that could really help someone else?"
    },
    {
      "id": "sok_083",
      "title": "The Talent Show Slot",
      "setting": "school",
      "characters": [
        "nervous classmate"
      ],
      "ageRange": [
        9,
        12
      ],
      "difficulty": 2,
      "theme": "school",
      "growthDimensions": [
        "empathy",
        "fairness"
      ],
      "culture": [
        "global"
      ],
      "tags": [
        "school",
        "sharing",
        "opportunity",
        "kindness"
      ],
      "situation": "There's one last talent show slot and both you and a shy classmate want it. You perform often; this would be their first time ever on stage.",
      "choices": [
        {
          "text": "Offer the slot to your classmate 🎤",
          "outcome": "generous",
          "xp": 25,
          "response": "You gave up the spotlight so someone could have their first moment. Generous and brave! 🌟"
        },
        {
          "text": "Suggest performing together 🤝",
          "outcome": "fair",
          "xp": 20,
          "response": "Sharing the stage — now you both shine! Creative kindness. 😊"
        },
        {
          "text": "Take the slot — you earned your spot",
          "outcome": "self",
          "xp": 8,
          "response": "You perform often already — this would've been their first ever chance. Sharing it could mean everything to them. 💭"
        }
      ],
      "realWorldTip": "Sharing an opportunity, especially someone's first chance, is a generous gift.",
      "reflectionPrompt": "How would it feel to get your very first chance at something you've always wanted to try?"
    },
    {
      "id": "sok_084",
      "title": "The Shared Credit",
      "setting": "school",
      "characters": [
        "friend who didn't help much",
        "teacher"
      ],
      "ageRange": [
        5,
        10
      ],
      "difficulty": 3,
      "theme": "India",
      "growthDimensions": [
        "empathy",
        "fairness",
        "reasoning"
      ],
      "culture": [
        "IN"
      ],
      "tags": [
        "India",
        "school",
        "fairness",
        "honesty"
      ],
      "situation": "You did most of a paired project while your friend barely helped. The teacher is about to give you both top marks. Your friend looks hopeful, but it wasn't really fair.",
      "choices": [
        {
          "text": "Accept the shared marks — keep the friendship 🤝",
          "outcome": "loyal",
          "xp": 20,
          "response": "You protected your friendship — but the marks weren't quite earned. It's a real tension with no perfect answer. 💭"
        },
        {
          "text": "Quietly tell the teacher how the work was split",
          "outcome": "honest",
          "xp": 25,
          "response": "You chose honesty, even though it was uncomfortable. Fairness sometimes costs us. 💙"
        },
        {
          "text": "Talk to your friend first about being honest together",
          "outcome": "wise",
          "xp": 30,
          "response": "You gave your friend a chance to own it with you. The bravest and kindest path. 🌟"
        }
      ],
      "realWorldTip": "When fairness and friendship pull in different directions, talking honestly with the person first is often best.",
      "reflectionPrompt": "Is it fair to get credit for work you didn't do? What would you want a partner to do?"
    },
    {
      "id": "sok_085",
      "title": "The Sibling's Secret Snack",
      "setting": "home",
      "characters": [
        "sibling",
        "parent"
      ],
      "ageRange": [
        5,
        10
      ],
      "difficulty": 3,
      "theme": "US",
      "growthDimensions": [
        "empathy",
        "fairness",
        "reasoning"
      ],
      "culture": [
        "US"
      ],
      "tags": [
        "US",
        "family",
        "honesty",
        "loyalty"
      ],
      "situation": "You see your sibling sneak cookies before dinner, which isn't allowed. Later, your parent asks if anyone took cookies. Your sibling gives you a pleading look.",
      "choices": [
        {
          "text": "Stay quiet — it's not your job to tell 🤐",
          "outcome": "loyal",
          "xp": 20,
          "response": "You stayed loyal — but the truth stayed hidden. Loyalty and honesty don't always agree. 💭"
        },
        {
          "text": "Tell your parent the truth",
          "outcome": "honest",
          "xp": 25,
          "response": "You told the truth, even though it was hard with your sibling watching. Honesty matters. 💙"
        },
        {
          "text": "Quietly encourage your sibling to admit it 🤝",
          "outcome": "wise",
          "xp": 30,
          "response": "You helped your sibling do the right thing themselves. Kind to everyone, including the truth. 🌟"
        }
      ],
      "realWorldTip": "Helping someone admit their own mistake is kinder than either covering for them or telling on them.",
      "reflectionPrompt": "When is keeping a secret loyal, and when does it become unfair?"
    },
    {
      "id": "sok_086",
      "title": "The Tiffin Thief",
      "setting": "school",
      "characters": [
        "hungry classmate",
        "class teacher"
      ],
      "ageRange": [
        5,
        10
      ],
      "difficulty": 3,
      "theme": "India",
      "growthDimensions": [
        "empathy",
        "fairness",
        "reasoning"
      ],
      "culture": [
        "IN"
      ],
      "tags": [
        "India",
        "school",
        "compassion",
        "honesty"
      ],
      "situation": "You catch a classmate taking food from another student's tiffin. They whisper that they had no breakfast and their family has little food. The other student doesn't know yet.",
      "choices": [
        {
          "text": "Quietly share your own tiffin with them 🍱",
          "outcome": "generous",
          "xp": 25,
          "response": "You met their need with kindness instead of judgement. Compassionate! 💙"
        },
        {
          "text": "Tell a teacher so the family can get help 🤝",
          "outcome": "responsible",
          "xp": 30,
          "response": "You looked past the moment to the real problem — and got them real help. Wise. 🌟"
        },
        {
          "text": "Tell the student whose food was taken",
          "outcome": "honest",
          "xp": 20,
          "response": "Honesty matters — but the classmate was hungry, not bad. This is a hard call with no easy answer. 💭"
        }
      ],
      "realWorldTip": "Sometimes a 'wrong' action hides a real need. Looking for the cause can help more than punishing the act.",
      "reflectionPrompt": "How should we treat someone who does something wrong because they're struggling?"
    },
    {
      "id": "sok_087",
      "title": "The Found Wallet",
      "setting": "park",
      "characters": [
        "friend",
        "wallet owner"
      ],
      "ageRange": [
        5,
        10
      ],
      "difficulty": 3,
      "theme": "honesty",
      "growthDimensions": [
        "empathy",
        "fairness",
        "reasoning"
      ],
      "culture": [
        "global"
      ],
      "tags": [
        "honesty",
        "money",
        "temptation",
        "fairness"
      ],
      "situation": "You and a friend find a wallet with money in the park. Your friend says, \"Let's split it — finders keepers!\" There's an ID card showing who it belongs to.",
      "choices": [
        {
          "text": "Insist on returning it to the owner 💼",
          "outcome": "honest",
          "xp": 30,
          "response": "You did the clearly right thing, even when your friend pushed back. Strong character! 🌟"
        },
        {
          "text": "Return it but feel torn about the friendship 🤝",
          "outcome": "wise",
          "xp": 25,
          "response": "You chose honesty while valuing the friendship. A thoughtful balance. 💙"
        },
        {
          "text": "Split it — your friend found it too",
          "outcome": "self",
          "xp": 8,
          "response": "The money felt like a windfall — but someone is missing their wallet. Returning it is right. 💭"
        }
      ],
      "realWorldTip": "'Finders keepers' isn't fair when you can see who something belongs to. Returning it is the honest choice.",
      "reflectionPrompt": "How would you feel if you lost your wallet and someone kept it?"
    },
    {
      "id": "sok_088",
      "title": "The Grandmother's Gift",
      "setting": "home",
      "characters": [
        "grandmother",
        "sibling"
      ],
      "ageRange": [
        5,
        10
      ],
      "difficulty": 3,
      "theme": "India",
      "growthDimensions": [
        "empathy",
        "fairness",
        "reasoning"
      ],
      "culture": [
        "IN"
      ],
      "tags": [
        "India",
        "family",
        "fairness",
        "gratitude"
      ],
      "situation": "Your grandmother gave you extra pocket money but told you to keep it secret from your sibling, who got less. Your sibling is sad about something and could use cheering up.",
      "choices": [
        {
          "text": "Share some of your extra with your sibling 🤝",
          "outcome": "generous",
          "xp": 25,
          "response": "You shared your good fortune to lift your sibling's spirits. Generous heart! 🌟"
        },
        {
          "text": "Keep Grandma's secret but cheer them another way",
          "outcome": "wise",
          "xp": 20,
          "response": "You honoured Grandma's wish while still caring for your sibling. Thoughtful balance. 💙"
        },
        {
          "text": "Keep it all secret and say nothing",
          "outcome": "self",
          "xp": 12,
          "response": "You followed Grandma's instructions — but your sibling stayed sad. There were kinder paths. 💭"
        }
      ],
      "realWorldTip": "When you have more than someone you love, sharing can turn good fortune into shared joy.",
      "reflectionPrompt": "Is it fair when one person secretly gets more than another? How does it feel?"
    },
    {
      "id": "sok_089",
      "title": "The Game Day Jersey",
      "setting": "school",
      "characters": [
        "teammate who forgot theirs",
        "coach"
      ],
      "ageRange": [
        5,
        10
      ],
      "difficulty": 3,
      "theme": "US",
      "growthDimensions": [
        "empathy",
        "fairness",
        "reasoning"
      ],
      "culture": [
        "US"
      ],
      "tags": [
        "US",
        "sports",
        "loyalty",
        "rules"
      ],
      "situation": "A teammate forgot their jersey and can't play without one. You have a spare in your bag, but lending it means you'd be breaking the team's 'bring your own gear' rule.",
      "choices": [
        {
          "text": "Lend your spare so they can play 👕",
          "outcome": "generous",
          "xp": 25,
          "response": "You helped your teammate play, even bending a minor rule for a good reason. Kind judgement. 💙"
        },
        {
          "text": "Talk to the coach together to find a solution 🤝",
          "outcome": "wise",
          "xp": 30,
          "response": "You sought an honest fix with the coach. Solving it the right way! 🌟"
        },
        {
          "text": "Follow the rule — they should've remembered",
          "outcome": "self",
          "xp": 12,
          "response": "The rule matters — but so does your teammate. There may have been a kinder path. 💭"
        }
      ],
      "realWorldTip": "Some rules bend for good reasons — but talking to a trusted adult first is wisest.",
      "reflectionPrompt": "When is it okay to bend a small rule to help someone? When isn't it?"
    },
    {
      "id": "sok_090",
      "title": "The Crowded Temple Queue",
      "setting": "festival",
      "characters": [
        "elderly person",
        "your family"
      ],
      "ageRange": [
        5,
        10
      ],
      "difficulty": 3,
      "theme": "India",
      "growthDimensions": [
        "empathy",
        "fairness",
        "reasoning"
      ],
      "culture": [
        "IN"
      ],
      "tags": [
        "India",
        "festival",
        "fairness",
        "respect"
      ],
      "situation": "You've waited an hour in the temple queue and you're finally near the front. An elderly person who just arrived is struggling to stand in the heat at the back.",
      "choices": [
        {
          "text": "Offer them your place near the front 🙏",
          "outcome": "generous",
          "xp": 25,
          "response": "You gave up your hard-earned spot for someone who needed it more. Beautiful respect. 🌟"
        },
        {
          "text": "Help them find a shaded place to wait 🤝",
          "outcome": "wise",
          "xp": 20,
          "response": "You found a way to help without losing your place. Thoughtful! 💙"
        },
        {
          "text": "Keep your place — you waited an hour",
          "outcome": "self",
          "xp": 12,
          "response": "You earned your spot fairly — but an elder struggled in the heat. There were kinder options. 💭"
        }
      ],
      "realWorldTip": "Giving up something you earned for someone who needs it more is a deep kindness.",
      "reflectionPrompt": "When should someone who waited longer give way to someone who needs help more?"
    },
    {
      "id": "sok_091",
      "title": "The Winning Answer",
      "setting": "school",
      "characters": [
        "quiz teammate",
        "rival team"
      ],
      "ageRange": [
        5,
        10
      ],
      "difficulty": 3,
      "theme": "school",
      "growthDimensions": [
        "empathy",
        "fairness",
        "reasoning"
      ],
      "culture": [
        "global"
      ],
      "tags": [
        "school",
        "honesty",
        "competition",
        "fairness"
      ],
      "situation": "During a class quiz, you overhear the answer from the rival team by accident. Using it would help your team win the prize everyone wants.",
      "choices": [
        {
          "text": "Don't use it — that wouldn't be fair 🎯",
          "outcome": "honest",
          "xp": 30,
          "response": "You won't win by unfair means. That integrity is worth more than any prize. 🌟"
        },
        {
          "text": "Tell the teacher what happened 🤝",
          "outcome": "wise",
          "xp": 25,
          "response": "You were honest about the mix-up. The fairest possible choice. 💙"
        },
        {
          "text": "Use the answer — it was an accident",
          "outcome": "self",
          "xp": 8,
          "response": "It came by accident — but using it still isn't fair to the other team. Winning fairly matters more. 💭"
        }
      ],
      "realWorldTip": "Winning by unfair means doesn't feel like winning. Fair play is worth more than any prize.",
      "reflectionPrompt": "Would a prize feel good if you knew you didn't win it fairly?"
    },
    {
      "id": "sok_092",
      "title": "The Shared Room Decision",
      "setting": "home",
      "characters": [
        "sibling",
        "visiting cousin"
      ],
      "ageRange": [
        5,
        10
      ],
      "difficulty": 3,
      "theme": "India",
      "growthDimensions": [
        "empathy",
        "fairness",
        "reasoning"
      ],
      "culture": [
        "IN"
      ],
      "tags": [
        "India",
        "family",
        "sharing",
        "generosity"
      ],
      "situation": "A cousin is visiting and needs a place to sleep. You'd have to give up your bed and sleep on the floor, or your younger sibling would. You're older and bigger.",
      "choices": [
        {
          "text": "Offer your own bed and take the floor 🛏️",
          "outcome": "generous",
          "xp": 25,
          "response": "You took the discomfort yourself rather than passing it to your younger sibling. Mature kindness! 🌟"
        },
        {
          "text": "Suggest taking turns on the floor 🤝",
          "outcome": "fair",
          "xp": 20,
          "response": "A fair split of the discomfort. Reasonable sharing! 💙"
        },
        {
          "text": "Let your younger sibling take the floor",
          "outcome": "self",
          "xp": 10,
          "response": "You stayed comfortable — but passed the discomfort to someone smaller. The kinder path was harder. 💭"
        }
      ],
      "realWorldTip": "Taking on discomfort yourself, rather than passing it to someone smaller, is generous.",
      "reflectionPrompt": "Is it fair for the older or bigger person to take the harder spot? Why or why not?"
    },
    {
      "id": "sok_093",
      "title": "The Lemonade Stand Profit",
      "setting": "park",
      "characters": [
        "business partner friend",
        "a kid with no money"
      ],
      "ageRange": [
        5,
        10
      ],
      "difficulty": 3,
      "theme": "US",
      "growthDimensions": [
        "empathy",
        "fairness",
        "reasoning"
      ],
      "culture": [
        "US"
      ],
      "tags": [
        "US",
        "money",
        "generosity",
        "business"
      ],
      "situation": "You and a friend run a lemonade stand and made $10 to split. A little kid wants lemonade but has no money and looks really thirsty on the hot day.",
      "choices": [
        {
          "text": "Give them a free cup from your share 🍋",
          "outcome": "generous",
          "xp": 25,
          "response": "You gave from your own earnings to help someone thirsty. Generous businessperson! 🌟"
        },
        {
          "text": "Suggest you and your friend both chip in 🤝",
          "outcome": "fair",
          "xp": 20,
          "response": "You shared the cost of kindness fairly with your partner. 💙"
        },
        {
          "text": "Sorry, no money no lemonade — it's business",
          "outcome": "self",
          "xp": 10,
          "response": "Business is business — but a thirsty kid on a hot day is a chance for kindness too. 💭"
        }
      ],
      "realWorldTip": "Even in business, leaving room for kindness makes you the kind of person people remember.",
      "reflectionPrompt": "Can you be both fair in business and kind to those who can't pay?"
    },
    {
      "id": "sok_094",
      "title": "The Homework Copy",
      "setting": "school",
      "characters": [
        "friend who didn't do homework",
        "teacher"
      ],
      "ageRange": [
        5,
        10
      ],
      "difficulty": 3,
      "theme": "India",
      "growthDimensions": [
        "empathy",
        "fairness",
        "reasoning"
      ],
      "culture": [
        "IN"
      ],
      "tags": [
        "India",
        "school",
        "honesty",
        "friendship"
      ],
      "situation": "Your friend didn't do their homework and asks to copy yours before class. They helped you when you were stuck last week. The teacher is strict about copying.",
      "choices": [
        {
          "text": "Offer to explain it so they can do their own 🤝",
          "outcome": "wise",
          "xp": 30,
          "response": "You helped them truly learn instead of just copy. The kindest and most honest path! 🌟"
        },
        {
          "text": "Say no — copying could get you both in trouble",
          "outcome": "honest",
          "xp": 25,
          "response": "You protected you both from trouble honestly, even though it was awkward. 💙"
        },
        {
          "text": "Let them copy — they helped you before",
          "outcome": "loyal",
          "xp": 12,
          "response": "You repaid their kindness — but copying doesn't help them learn and risks trouble. A hard call. 💭"
        }
      ],
      "realWorldTip": "Helping a friend understand something is far better than letting them copy — it actually helps them.",
      "reflectionPrompt": "What's the difference between helping a friend and doing their work for them?"
    },
    {
      "id": "sok_095",
      "title": "The Broken Vase",
      "setting": "home",
      "characters": [
        "younger sibling",
        "parent"
      ],
      "ageRange": [
        5,
        10
      ],
      "difficulty": 3,
      "theme": "family",
      "growthDimensions": [
        "empathy",
        "fairness",
        "reasoning"
      ],
      "culture": [
        "global"
      ],
      "tags": [
        "family",
        "honesty",
        "loyalty",
        "responsibility"
      ],
      "situation": "Your younger sibling accidentally broke a vase and is scared. Your parent asks what happened. Your sibling silently begs you not to tell.",
      "choices": [
        {
          "text": "Encourage your sibling to tell the truth together 🤝",
          "outcome": "wise",
          "xp": 30,
          "response": "You supported your sibling in being honest. Kind to them AND to the truth. 🌟"
        },
        {
          "text": "Tell your parent it was an accident",
          "outcome": "honest",
          "xp": 25,
          "response": "You told the truth gently, making clear it was an accident. Fair and honest. 💙"
        },
        {
          "text": "Say you don't know what happened",
          "outcome": "loyal",
          "xp": 12,
          "response": "You protected your sibling — but with a lie. Helping them tell the truth would've been kinder. 💭"
        }
      ],
      "realWorldTip": "Supporting someone to admit an accident is braver and kinder than lying for them.",
      "reflectionPrompt": "Why is it scary to admit accidents? What makes it easier?"
    },
    {
      "id": "sok_096",
      "title": "The Extra Item in the Bag",
      "setting": "shop",
      "characters": [
        "shopkeeper",
        "parent"
      ],
      "ageRange": [
        5,
        10
      ],
      "difficulty": 3,
      "theme": "India",
      "growthDimensions": [
        "empathy",
        "fairness",
        "reasoning"
      ],
      "culture": [
        "IN"
      ],
      "tags": [
        "India",
        "shop",
        "honesty",
        "money"
      ],
      "situation": "You get home and find the shopkeeper accidentally put an extra chocolate bar in your bag without charging for it. No one would ever know.",
      "choices": [
        {
          "text": "Go back and return it or pay for it 🍫",
          "outcome": "honest",
          "xp": 30,
          "response": "You returned what wasn't yours, even though no one would know. True honesty! 🌟"
        },
        {
          "text": "Tell a parent and let them decide 🤝",
          "outcome": "wise",
          "xp": 25,
          "response": "You brought it to a trusted adult to handle rightly. Responsible! 💙"
        },
        {
          "text": "Keep it — it was their mistake",
          "outcome": "self",
          "xp": 8,
          "response": "It was the shopkeeper's error — but it's still not yours. Returning it is the honest thing. 💭"
        }
      ],
      "realWorldTip": "Honesty means doing the right thing even when absolutely no one would find out.",
      "reflectionPrompt": "Why does being honest matter even when you'd never get caught?"
    },
    {
      "id": "sok_097",
      "title": "The Last Spot on the Team",
      "setting": "school",
      "characters": [
        "close friend",
        "a better player"
      ],
      "ageRange": [
        5,
        10
      ],
      "difficulty": 3,
      "theme": "US",
      "growthDimensions": [
        "empathy",
        "fairness",
        "reasoning"
      ],
      "culture": [
        "US"
      ],
      "tags": [
        "US",
        "sports",
        "loyalty",
        "fairness"
      ],
      "situation": "You're helping pick the final team member. Your close friend wants the spot, but another kid is clearly a better player and would help the team more.",
      "choices": [
        {
          "text": "Pick fairly based on skill, explain to your friend 🤝",
          "outcome": "fair",
          "xp": 30,
          "response": "You chose fairly and were honest with your friend about why. Mature and brave! 🌟"
        },
        {
          "text": "Pick the better player but comfort your friend",
          "outcome": "wise",
          "xp": 25,
          "response": "You made the fair call while caring for your friend's feelings. Balanced. 💙"
        },
        {
          "text": "Pick your friend — loyalty matters",
          "outcome": "loyal",
          "xp": 15,
          "response": "You stayed loyal — but the fairer choice was the other player. Friendship and fairness clashed here. 💭"
        }
      ],
      "realWorldTip": "Being fair sometimes means a hard conversation with a friend — but honesty keeps friendships strong.",
      "reflectionPrompt": "Should friendship or fairness come first when choosing a team? Why?"
    },
    {
      "id": "sok_098",
      "title": "The Embarrassing Photo",
      "setting": "online",
      "characters": [
        "friend in the photo",
        "group chat"
      ],
      "ageRange": [
        6,
        11
      ],
      "difficulty": 3,
      "theme": "India",
      "growthDimensions": [
        "empathy",
        "fairness",
        "reasoning"
      ],
      "culture": [
        "IN"
      ],
      "tags": [
        "India",
        "online",
        "loyalty",
        "kindness"
      ],
      "situation": "Someone shares a funny but embarrassing photo of your friend in the class group chat. People are laughing. Your friend isn't online yet and doesn't know.",
      "choices": [
        {
          "text": "Ask the group to take it down kindly 🛡️",
          "outcome": "responsible",
          "xp": 30,
          "response": "You stood up for your friend publicly — hard to do, but truly loyal. 🌟"
        },
        {
          "text": "Privately warn your friend and offer support 🤝",
          "outcome": "wise",
          "xp": 25,
          "response": "You made sure your friend wasn't blindsided and felt supported. Caring! 💙"
        },
        {
          "text": "Laugh along — it's just a joke",
          "outcome": "self",
          "xp": 8,
          "response": "It seemed harmless — but it's your friend's embarrassment. Standing up for them matters. 💭"
        }
      ],
      "realWorldTip": "Standing up for someone when they're not there to defend themselves is real friendship.",
      "reflectionPrompt": "How would you want friends to act if an embarrassing photo of you was shared?"
    },
    {
      "id": "sok_099",
      "title": "The Group Pizza Money",
      "setting": "school",
      "characters": [
        "group members",
        "one who forgot money"
      ],
      "ageRange": [
        6,
        11
      ],
      "difficulty": 3,
      "theme": "US",
      "growthDimensions": [
        "empathy",
        "fairness",
        "reasoning"
      ],
      "culture": [
        "US"
      ],
      "tags": [
        "US",
        "school",
        "money",
        "fairness"
      ],
      "situation": "Your group is ordering pizza and splitting the cost. One member forgot their money and can't pay. If everyone chips in a little extra, they can still eat.",
      "choices": [
        {
          "text": "Suggest everyone chips in a little for them 🍕",
          "outcome": "generous",
          "xp": 25,
          "response": "You found a way to include them without embarrassment. Kind group thinking! 🌟"
        },
        {
          "text": "Cover their share yourself this time 🤝",
          "outcome": "generous",
          "xp": 25,
          "response": "You quietly covered them. Generous and discreet! 💙"
        },
        {
          "text": "They forgot, so they don't eat",
          "outcome": "self",
          "xp": 8,
          "response": "Rules are rules — but a small chip-in from everyone would let them join. Inclusion matters. 💭"
        }
      ],
      "realWorldTip": "Small acts of group generosity can spare one person from being left out.",
      "reflectionPrompt": "How would it feel to be the only one not eating because you forgot your money?"
    },
    {
      "id": "sok_100",
      "title": "The Festival Firecracker Money",
      "setting": "home",
      "characters": [
        "friend whose family avoids crackers",
        "siblings"
      ],
      "ageRange": [
        6,
        11
      ],
      "difficulty": 3,
      "theme": "India",
      "growthDimensions": [
        "empathy",
        "fairness",
        "reasoning"
      ],
      "culture": [
        "IN"
      ],
      "tags": [
        "India",
        "festival",
        "values",
        "respect"
      ],
      "situation": "You have money for Diwali firecrackers. A friend mentions their family avoids crackers because of pollution and a neighbour with breathing problems. You love the noise and lights.",
      "choices": [
        {
          "text": "Buy fewer crackers out of respect for others 🪔",
          "outcome": "wise",
          "xp": 30,
          "response": "You balanced your fun with care for others' health. Thoughtful maturity! 🌟"
        },
        {
          "text": "Choose quieter, less smoky options 🤝",
          "outcome": "responsible",
          "xp": 25,
          "response": "You found a way to celebrate while being considerate. Smart compromise! 💙"
        },
        {
          "text": "Buy lots — it's the festival",
          "outcome": "self",
          "xp": 10,
          "response": "Festivals are joyful — but a neighbour struggles to breathe. Considering others is part of celebrating well. 💭"
        }
      ],
      "realWorldTip": "Celebrating thoughtfully, with care for neighbours and the environment, is a mature kind of joy.",
      "reflectionPrompt": "How can we celebrate in ways that don't harm others around us?"
    },
    {
      "id": "sok_101",
      "title": "The Anonymous Donation",
      "setting": "school",
      "characters": [
        "classmate in need",
        "class"
      ],
      "ageRange": [
        6,
        11
      ],
      "difficulty": 3,
      "theme": "school",
      "growthDimensions": [
        "empathy",
        "fairness",
        "reasoning"
      ],
      "culture": [
        "global"
      ],
      "tags": [
        "school",
        "generosity",
        "humility",
        "kindness"
      ],
      "situation": "Your class is collecting money for a classmate whose family had a hard time. You could give a lot and let everyone see, or give quietly without recognition.",
      "choices": [
        {
          "text": "Give generously but anonymously 🎁",
          "outcome": "generous",
          "xp": 30,
          "response": "You gave to help, not to be seen. The purest kind of generosity! 🌟"
        },
        {
          "text": "Give and encourage others to give too 🤝",
          "outcome": "responsible",
          "xp": 25,
          "response": "You gave and inspired more giving. Leadership in kindness! 💙"
        },
        {
          "text": "Give a little and make sure people notice",
          "outcome": "self",
          "xp": 12,
          "response": "You helped — but partly for the credit. Giving quietly is even kinder. 💭"
        }
      ],
      "realWorldTip": "The kindest giving often happens quietly, without any need for thanks or recognition.",
      "reflectionPrompt": "Does it matter whether people know you did something kind? Why or why not?"
    },
    {
      "id": "sok_102",
      "title": "The Scholarship Spot",
      "setting": "school",
      "characters": [
        "equally deserving friend"
      ],
      "ageRange": [
        6,
        11
      ],
      "difficulty": 3,
      "theme": "India",
      "growthDimensions": [
        "empathy",
        "fairness",
        "reasoning"
      ],
      "culture": [
        "IN"
      ],
      "tags": [
        "India",
        "school",
        "fairness",
        "friendship"
      ],
      "situation": "You and a friend both applied for one scholarship. You found out you can withdraw to let them have it — their family needs it more, but you worked just as hard.",
      "choices": [
        {
          "text": "Talk honestly with your friend about both needs 🤝",
          "outcome": "wise",
          "xp": 30,
          "response": "You opened an honest conversation instead of deciding alone. Mature and fair! 🌟"
        },
        {
          "text": "Let them have it — their need is greater",
          "outcome": "generous",
          "xp": 25,
          "response": "You put their greater need first, even at your own cost. Deeply generous. 💙"
        },
        {
          "text": "Keep competing — you earned your chance too",
          "outcome": "fair",
          "xp": 18,
          "response": "You worked hard and deserve a fair shot — that's valid too. A genuinely hard situation. 💭"
        }
      ],
      "realWorldTip": "When something is scarce and you both have a claim, honest conversation beats deciding silently.",
      "reflectionPrompt": "How do you balance your own needs with someone else's greater need?"
    },
    {
      "id": "sok_103",
      "title": "The Witnessed Mistake",
      "setting": "park",
      "characters": [
        "kid who broke something",
        "park keeper"
      ],
      "ageRange": [
        6,
        11
      ],
      "difficulty": 3,
      "theme": "US",
      "growthDimensions": [
        "empathy",
        "fairness",
        "reasoning"
      ],
      "culture": [
        "US"
      ],
      "tags": [
        "US",
        "park",
        "honesty",
        "loyalty"
      ],
      "situation": "You see another kid accidentally break a park bench slat while playing, then walk away. Later the park keeper asks if anyone knows what happened.",
      "choices": [
        {
          "text": "Encourage the kid to own up with you 🤝",
          "outcome": "wise",
          "xp": 30,
          "response": "You helped them take responsibility rather than exposing or shielding them. Wise! 🌟"
        },
        {
          "text": "Tell the park keeper honestly what you saw",
          "outcome": "honest",
          "xp": 25,
          "response": "You told the truth about what happened. Honest, even when hard. 💙"
        },
        {
          "text": "Say nothing — it wasn't you",
          "outcome": "self",
          "xp": 10,
          "response": "It wasn't your mistake — but you know the truth. Staying silent isn't quite the same as honest. 💭"
        }
      ],
      "realWorldTip": "Encouraging someone to take responsibility is kinder than either telling on them or staying silent.",
      "reflectionPrompt": "What's the difference between telling on someone and helping them own their mistake?"
    },
    {
      "id": "sok_104",
      "title": "The Inherited Heirloom",
      "setting": "home",
      "characters": [
        "sibling",
        "grandparent"
      ],
      "ageRange": [
        6,
        11
      ],
      "difficulty": 3,
      "theme": "India",
      "growthDimensions": [
        "empathy",
        "fairness",
        "reasoning"
      ],
      "culture": [
        "IN"
      ],
      "tags": [
        "India",
        "family",
        "fairness",
        "generosity"
      ],
      "situation": "Your grandparent gave you a special heirloom, knowing you'd treasure it. But your sibling, who was very close to that grandparent, is quietly heartbroken not to have it.",
      "choices": [
        {
          "text": "Offer to share or rotate keeping it 🤝",
          "outcome": "generous",
          "xp": 30,
          "response": "You shared something precious to ease your sibling's grief. Deeply kind! 🌟"
        },
        {
          "text": "Keep it but find a meaningful way to include them",
          "outcome": "wise",
          "xp": 25,
          "response": "You honoured the gift while caring for your sibling's feelings. Thoughtful balance. 💙"
        },
        {
          "text": "Keep it — Grandpa gave it to you",
          "outcome": "self",
          "xp": 15,
          "response": "It was given to you, which is valid — but your sibling's grief is real too. A tender situation. 💭"
        }
      ],
      "realWorldTip": "Sometimes sharing something precious matters more than owning it, especially with people we love.",
      "reflectionPrompt": "Is a gift more meaningful when kept alone or when shared with someone who also loved the giver?"
    },
    {
      "id": "sok_105",
      "title": "The Cheater's Dilemma",
      "setting": "school",
      "characters": [
        "friend who cheated",
        "teacher",
        "class"
      ],
      "ageRange": [
        6,
        11
      ],
      "difficulty": 3,
      "theme": "school",
      "growthDimensions": [
        "empathy",
        "fairness",
        "reasoning"
      ],
      "culture": [
        "global"
      ],
      "tags": [
        "school",
        "honesty",
        "loyalty",
        "fairness"
      ],
      "situation": "You know your friend cheated on a test and got a high score. Other students who studied hard got lower marks. Your friend begs you to keep it secret.",
      "choices": [
        {
          "text": "Urge your friend to tell the teacher themselves 🤝",
          "outcome": "wise",
          "xp": 30,
          "response": "You gave your friend a chance to make it right. The bravest, kindest path. 🌟"
        },
        {
          "text": "Tell the teacher — it's unfair to others",
          "outcome": "honest",
          "xp": 25,
          "response": "You stood up for the students who earned their marks honestly. Fair and brave. 💙"
        },
        {
          "text": "Keep the secret — they're your friend",
          "outcome": "loyal",
          "xp": 12,
          "response": "You stayed loyal — but others were treated unfairly. Loyalty and fairness truly clash here. 💭"
        }
      ],
      "realWorldTip": "When someone's wrong affects others unfairly, helping them make it right serves everyone.",
      "reflectionPrompt": "Is it fair to those who studied hard when cheating goes unnoticed?"
    },
    {
      "id": "sok_106",
      "title": "The Viral Fundraiser",
      "setting": "online",
      "characters": [
        "needy stranger online",
        "your followers"
      ],
      "ageRange": [
        8,
        12
      ],
      "difficulty": 3,
      "theme": "India",
      "growthDimensions": [
        "empathy",
        "fairness",
        "reasoning"
      ],
      "culture": [
        "IN"
      ],
      "tags": [
        "India",
        "online",
        "generosity",
        "responsibility"
      ],
      "situation": "You see an online fundraiser for someone who needs medical help. You could share it widely with your contacts, but you're not 100% sure it's genuine.",
      "choices": [
        {
          "text": "Verify first, then share if it's real 🔍",
          "outcome": "wise",
          "xp": 30,
          "response": "You helped responsibly — checking before spreading. Smart generosity! 🌟"
        },
        {
          "text": "Donate a small amount yourself quietly 🤝",
          "outcome": "generous",
          "xp": 25,
          "response": "You helped directly while being careful. Kind and measured. 💙"
        },
        {
          "text": "Share it immediately to everyone",
          "outcome": "self",
          "xp": 12,
          "response": "Your heart was right — but spreading unverified things can cause harm. Checking first is wiser. 💭"
        }
      ],
      "realWorldTip": "Online generosity is best paired with care — verify before you share, to truly help.",
      "reflectionPrompt": "How can you be both generous and careful when helping online?"
    },
    {
      "id": "sok_107",
      "title": "The Group Project Freeloader",
      "setting": "school",
      "characters": [
        "teammate who did nothing",
        "hardworking teammates"
      ],
      "ageRange": [
        8,
        12
      ],
      "difficulty": 3,
      "theme": "US",
      "growthDimensions": [
        "empathy",
        "fairness",
        "reasoning"
      ],
      "culture": [
        "US"
      ],
      "tags": [
        "US",
        "school",
        "fairness",
        "teamwork"
      ],
      "situation": "In a group project, one teammate did almost nothing but expects equal credit. The others worked hard. The teacher will grade everyone the same unless someone speaks up.",
      "choices": [
        {
          "text": "Talk to the freeloader privately first 🤝",
          "outcome": "wise",
          "xp": 30,
          "response": "You gave them a chance to contribute or own it before escalating. Fair and mature! 🌟"
        },
        {
          "text": "Tell the teacher how work was actually divided",
          "outcome": "honest",
          "xp": 25,
          "response": "You spoke up for fairness to those who worked hard. Brave! 💙"
        },
        {
          "text": "Say nothing — avoid the conflict",
          "outcome": "self",
          "xp": 12,
          "response": "You avoided conflict — but the hardworking teammates were treated unfairly. Speaking up matters. 💭"
        }
      ],
      "realWorldTip": "Addressing unfairness directly but kindly — starting with the person — is the mature path.",
      "reflectionPrompt": "Is equal credit fair when the work wasn't equal? What would you want?"
    },
    {
      "id": "sok_108",
      "title": "The Family Business Choice",
      "setting": "home",
      "characters": [
        "family",
        "a struggling employee"
      ],
      "ageRange": [
        8,
        12
      ],
      "difficulty": 3,
      "theme": "India",
      "growthDimensions": [
        "empathy",
        "fairness",
        "reasoning"
      ],
      "culture": [
        "IN"
      ],
      "tags": [
        "India",
        "family",
        "ethics",
        "compassion"
      ],
      "situation": "Your family runs a small shop. An employee made a costly mistake. Your parent is upset and considering firing them, but you know they support a large family.",
      "choices": [
        {
          "text": "Gently share what you know about their family 🤝",
          "outcome": "wise",
          "xp": 30,
          "response": "You offered compassion without excusing the mistake. Thoughtful and kind. 🌟"
        },
        {
          "text": "Suggest a fair second chance with a plan",
          "outcome": "responsible",
          "xp": 25,
          "response": "You proposed fairness and a path forward. Wise problem-solving! 💙"
        },
        {
          "text": "Stay out of it — it's grown-up business",
          "outcome": "self",
          "xp": 12,
          "response": "It's complex grown-up territory — but a gentle word might help a struggling family. 💭"
        }
      ],
      "realWorldTip": "Mixing fairness with compassion — a second chance with clear expectations — often serves everyone best.",
      "reflectionPrompt": "How do you balance consequences for mistakes with compassion for people's circumstances?"
    },
    {
      "id": "sok_109",
      "title": "The Election Promise",
      "setting": "school",
      "characters": [
        "classmates",
        "rival candidate"
      ],
      "ageRange": [
        8,
        12
      ],
      "difficulty": 3,
      "theme": "school",
      "growthDimensions": [
        "empathy",
        "fairness",
        "reasoning"
      ],
      "culture": [
        "global"
      ],
      "tags": [
        "school",
        "honesty",
        "leadership",
        "fairness"
      ],
      "situation": "You're running for class representative. You could promise things you can't actually deliver to win votes, like 'no homework Fridays.' Your honest rival isn't making big promises.",
      "choices": [
        {
          "text": "Make only promises you can truly keep 🤝",
          "outcome": "honest",
          "xp": 30,
          "response": "You chose honesty over easy votes. That's what real leadership looks like! 🌟"
        },
        {
          "text": "Be honest about what you can and can't do",
          "outcome": "wise",
          "xp": 25,
          "response": "You were transparent with your classmates. Trustworthy! 💙"
        },
        {
          "text": "Make the big promises — everyone does",
          "outcome": "self",
          "xp": 10,
          "response": "Big promises win votes — but breaking them breaks trust. Honest leadership lasts longer. 💭"
        }
      ],
      "realWorldTip": "True leaders make promises they can keep, even if it costs them some popularity.",
      "reflectionPrompt": "Would you rather have a leader who promises a lot or one who's honest about what's possible?"
    },
    {
      "id": "sok_110",
      "title": "The Tuition Notes Business",
      "setting": "school",
      "characters": [
        "classmates",
        "a struggling student"
      ],
      "ageRange": [
        8,
        12
      ],
      "difficulty": 3,
      "theme": "India",
      "growthDimensions": [
        "empathy",
        "fairness",
        "reasoning"
      ],
      "culture": [
        "IN"
      ],
      "tags": [
        "India",
        "school",
        "money",
        "generosity"
      ],
      "situation": "You make excellent notes and some classmates pay you for copies. A student who's struggling and can't afford to pay asks for a set. Your paying customers might mind.",
      "choices": [
        {
          "text": "Give the struggling student notes for free 🤝",
          "outcome": "generous",
          "xp": 30,
          "response": "You helped someone in need without charging. Kindness over profit! 🌟"
        },
        {
          "text": "Offer them a free set quietly, keep selling others",
          "outcome": "wise",
          "xp": 25,
          "response": "You balanced your small business with compassion. Thoughtful! 💙"
        },
        {
          "text": "Charge everyone the same — it's only fair",
          "outcome": "self",
          "xp": 15,
          "response": "Equal pricing seems fair — but a student who genuinely can't pay is different. Compassion has a place. 💭"
        }
      ],
      "realWorldTip": "Fairness isn't always treating everyone identically — sometimes it means helping those who can't pay.",
      "reflectionPrompt": "Is charging everyone the same always fair, or should need be considered?"
    },
    {
      "id": "sok_111",
      "title": "The Tournament Trophy",
      "setting": "park",
      "characters": [
        "teammate who sat out",
        "team"
      ],
      "ageRange": [
        8,
        12
      ],
      "difficulty": 3,
      "theme": "US",
      "growthDimensions": [
        "empathy",
        "fairness",
        "reasoning"
      ],
      "culture": [
        "US"
      ],
      "tags": [
        "US",
        "sports",
        "fairness",
        "recognition"
      ],
      "situation": "Your team won a tournament. There's one MVP trophy. You scored the most, but a teammate who sat out injured had organised all the practices that got you there.",
      "choices": [
        {
          "text": "Nominate your teammate for their hidden work 🏆",
          "outcome": "generous",
          "xp": 30,
          "response": "You recognised the invisible work behind the win. Generous and perceptive! 🌟"
        },
        {
          "text": "Suggest the team decide together fairly 🤝",
          "outcome": "fair",
          "xp": 25,
          "response": "You let the team fairly recognise everyone's role. Wise! 💙"
        },
        {
          "text": "Accept the MVP — you scored the most",
          "outcome": "self",
          "xp": 15,
          "response": "You earned points on the field — but wins are built on hidden work too. Sharing recognition is generous. 💭"
        }
      ],
      "realWorldTip": "Recognising the quiet, behind-the-scenes work others do is a generous kind of fairness.",
      "reflectionPrompt": "Who does important work that often goes unseen and unthanked?"
    },
    {
      "id": "sok_112",
      "title": "The Wedding Gift Money",
      "setting": "home",
      "characters": [
        "cousin getting married",
        "your savings goal"
      ],
      "ageRange": [
        8,
        12
      ],
      "difficulty": 3,
      "theme": "India",
      "growthDimensions": [
        "empathy",
        "fairness",
        "reasoning"
      ],
      "culture": [
        "IN"
      ],
      "tags": [
        "India",
        "family",
        "money",
        "generosity"
      ],
      "situation": "A beloved cousin is getting married. Custom suggests giving a generous gift, but you've been saving for something you really want. Giving generously would set your savings back months.",
      "choices": [
        {
          "text": "Give generously — family milestones matter 💝",
          "outcome": "generous",
          "xp": 25,
          "response": "You honoured a family milestone over your own want. Generous spirit! 🌟"
        },
        {
          "text": "Give a thoughtful gift within your means 🤝",
          "outcome": "wise",
          "xp": 30,
          "response": "You gave meaningfully without harming your own goals. Balanced and mature! 💙"
        },
        {
          "text": "Give a small token — save your money",
          "outcome": "self",
          "xp": 15,
          "response": "Saving for your goal is reasonable — but a beloved cousin's wedding is a special moment. Balance matters. 💭"
        }
      ],
      "realWorldTip": "Generosity doesn't mean giving beyond your means — a thoughtful gift within your limits is wise.",
      "reflectionPrompt": "How do you balance your own goals with showing up for people you love?"
    }
  ],

  /* ═══════════════════════════════════════════════════════════════
     TRUTH OR FIB — 27 scenarios
     Game: truthorfib.html
  ═══════════════════════════════════════════════════════════════ */
  truthOrFib:   [
    {
      "id": "tof_001",
      "title": "The Broken Vase",
      "setting": "home",
      "characters": [
        "parent"
      ],
      "ageRange": [
        3,
        8
      ],
      "difficulty": 1,
      "theme": "honesty",
      "growthDimensions": [
        "fairness",
        "reasoning"
      ],
      "culture": [
        "global"
      ],
      "tags": [
        "home",
        "mistake",
        "family"
      ],
      "situation": "You accidentally knocked over mum's favourite vase and it cracked. She comes in and asks what happened.",
      "choices": [
        {
          "text": "Tell the truth: I knocked it over by accident",
          "outcome": "honest",
          "xp": 30,
          "response": "Accidents happen! Telling the truth immediately — that's courage. Mum's proud of you for that. 🌟"
        },
        {
          "text": "Say you don't know what happened",
          "outcome": "evasive",
          "xp": 8,
          "response": "That's not quite a lie, but not the truth either. It still leaves Mum confused. 💭"
        },
        {
          "text": "Blame the cat 🐱",
          "outcome": "lie",
          "xp": 3,
          "response": "Poor cat! They can't defend themselves. Lies often come out eventually — and then feel worse. 💭"
        }
      ],
      "realWorldTip": "The next time you make a mistake, tell a parent right away. Notice how they respond.",
      "reflectionPrompt": "Why do we sometimes feel scared to tell the truth?",
      "statement": "Telling the truth about a mistake makes it easier to fix.",
      "isTruth": true
    },
    {
      "id": "tof_002",
      "title": "The Missing Homework",
      "setting": "school",
      "characters": [
        "teacher"
      ],
      "ageRange": [
        5,
        9
      ],
      "difficulty": 1,
      "theme": "honesty",
      "growthDimensions": [
        "fairness"
      ],
      "culture": [
        "global"
      ],
      "tags": [
        "school",
        "homework",
        "teacher"
      ],
      "situation": "You forgot to do your homework. Your teacher is collecting it. You could say you forgot it at home.",
      "choices": [
        {
          "text": "Tell the teacher I forgot to do it",
          "outcome": "honest",
          "xp": 30,
          "response": "Straight up honest! The teacher might be strict, but they respect truthful students. 🌟"
        },
        {
          "text": "Say I left it at home",
          "outcome": "lie",
          "xp": 5,
          "response": "A small lie, but it delays the truth. What happens tomorrow when you still don't have it? 💭"
        },
        {
          "text": "Say I was sick and couldn't finish",
          "outcome": "lie",
          "xp": 3,
          "response": "Now there are two things to hide. Lies stack up fast. 💭"
        }
      ],
      "realWorldTip": "Tell a parent about a time you were honest with a teacher, even when it was hard.",
      "reflectionPrompt": "Is it ever okay to lie to avoid getting in trouble?",
      "statement": "A small lie is harmless and doesn't cause any problems.",
      "isTruth": false
    },
    {
      "id": "tof_003",
      "title": "The Compliment Lie",
      "setting": "home",
      "characters": [
        "relative"
      ],
      "ageRange": [
        6,
        11
      ],
      "difficulty": 2,
      "theme": "honesty",
      "growthDimensions": [
        "empathy",
        "fairness"
      ],
      "culture": [
        "global"
      ],
      "tags": [
        "family",
        "social lies",
        "feelings"
      ],
      "situation": "Your aunt made a dish especially for you. It tastes awful. She asks with excitement: 'Do you like it?'",
      "choices": [
        {
          "text": "Say 'It's delicious!' — don't hurt her feelings",
          "outcome": "white lie",
          "xp": 15,
          "response": "A kind lie. But she might make it again! Is there a kinder truth? 💭"
        },
        {
          "text": "Say 'Thank you so much for making this for me'",
          "outcome": "redirect",
          "xp": 25,
          "response": "Truthful — you ARE grateful — and kind. You didn't lie AND didn't hurt feelings. Wise! 🌟"
        },
        {
          "text": "Say 'It's not really my favourite but thank you'",
          "outcome": "honest kindly",
          "xp": 30,
          "response": "Gentle honesty — the hardest kind. She might appreciate knowing for next time! 🌟"
        }
      ],
      "realWorldTip": "Practice saying something true AND kind at the same time today.",
      "reflectionPrompt": "Is it ever okay to lie to protect someone's feelings?",
      "statement": "Being honest about a bad grade helps you get real support to improve.",
      "isTruth": true
    },
    {
      "id": "tof_004",
      "title": "The Race Fall",
      "setting": "sports",
      "characters": [
        "coach",
        "teammates"
      ],
      "ageRange": [
        7,
        12
      ],
      "difficulty": 2,
      "theme": "honesty",
      "growthDimensions": [
        "fairness",
        "reasoning"
      ],
      "culture": [
        "global"
      ],
      "tags": [
        "sports",
        "competition",
        "fairness"
      ],
      "situation": "During a running race, you tripped and took a shortcut by accident. You crossed the finish line first, but only because of the shortcut. The coach didn't see.",
      "choices": [
        {
          "text": "Accept the win — nobody saw",
          "outcome": "dishonest",
          "xp": 5,
          "response": "Nobody saw... but YOU know. Can you fully enjoy a win that isn't quite real? 💭"
        },
        {
          "text": "Tell the coach what happened",
          "outcome": "honest",
          "xp": 30,
          "response": "Telling the truth when you could have gotten away with a win — that's real championship character. 🏆🌟"
        },
        {
          "text": "Say nothing but don't celebrate",
          "outcome": "guilty",
          "xp": 15,
          "response": "Staying quiet but not celebrating — you feel the discomfort. That feeling is your conscience talking. 💭"
        }
      ],
      "realWorldTip": "Think of a time you did something honest even when no one was watching.",
      "reflectionPrompt": "Does winning matter if you didn't win fairly?",
      "statement": "Pretending you finished homework when you haven't will always work out fine.",
      "isTruth": false
    },
    {
      "id": "tof_005",
      "title": "The Biryani That Wasn't Yours",
      "setting": "home",
      "characters": [
        "sibling",
        "parent"
      ],
      "ageRange": [
        5,
        10
      ],
      "difficulty": 1,
      "theme": "honesty",
      "growthDimensions": [
        "fairness"
      ],
      "culture": [
        "IN"
      ],
      "tags": [
        "food",
        "family",
        "sibling",
        "blame"
      ],
      "situation": "Your sibling ate the last of the biryani that was saved for Dad. They ask you who ate it. Your sibling is looking at you nervously.",
      "choices": [
        {
          "text": "Tell the truth — my sibling ate it",
          "outcome": "honest",
          "xp": 25,
          "response": "Honest. Your sibling has to face it, but at least Dad knows the truth. 🌟"
        },
        {
          "text": "Cover for your sibling — say you don't know",
          "outcome": "loyal lie",
          "xp": 10,
          "response": "Protecting them is kind. But Dad is left confused and someone got away with it. 💭"
        },
        {
          "text": "Tell your sibling to come clean themselves",
          "outcome": "wise",
          "xp": 30,
          "response": "You gave them the chance to be honest. That's more powerful than ratting them out. 💡"
        }
      ],
      "realWorldTip": "If you see someone do something wrong, try helping them make it right instead of covering for them.",
      "reflectionPrompt": "Is protecting a friend or sibling from getting in trouble the same as lying?",
      "statement": "When you own up to something wrong, people usually respect you more.",
      "isTruth": true
    },
    {
      "id": "tof_006",
      "title": "The Online Age Limit",
      "setting": "online",
      "characters": [
        "website",
        "parent"
      ],
      "ageRange": [
        9,
        12
      ],
      "difficulty": 2,
      "theme": "honesty",
      "growthDimensions": [
        "reasoning",
        "fairness"
      ],
      "culture": [
        "global"
      ],
      "tags": [
        "internet",
        "age limit",
        "rules"
      ],
      "situation": "You want to sign up for a gaming platform but it requires users to be 13. You're 10. You could easily type in a fake birth year.",
      "choices": [
        {
          "text": "Type a fake age — everyone does it",
          "outcome": "dishonest",
          "xp": 5,
          "response": "Age limits exist for safety reasons. What might the platform contain that they're protecting you from? 💭"
        },
        {
          "text": "Ask a parent to help find an age-appropriate alternative",
          "outcome": "responsible",
          "xp": 30,
          "response": "Rules + asking for help = the smart play. Your parent can find something even better! 🌟"
        },
        {
          "text": "Skip it — follow the rule",
          "outcome": "honest",
          "xp": 25,
          "response": "Respecting rules even when nobody's checking — that's integrity. 💪"
        }
      ],
      "realWorldTip": "Ask a parent to help you find apps or games that are right for your age.",
      "reflectionPrompt": "Why do apps and websites have age limits?",
      "statement": "Admitting you copied one answer is braver than pretending you didn't.",
      "isTruth": true
    },
    {
      "id": "tof_007",
      "title": "The Science Fair Credit",
      "setting": "school",
      "characters": [
        "parent who helped too much",
        "teacher"
      ],
      "ageRange": [
        8,
        12
      ],
      "difficulty": 3,
      "theme": "honesty",
      "growthDimensions": [
        "fairness",
        "reasoning"
      ],
      "culture": [
        "global"
      ],
      "tags": [
        "school",
        "honesty",
        "parent help",
        "grey zone"
      ],
      "situation": "Your parent helped you so much with your science project that it's mostly their work. The teacher is very impressed and asks: 'Did you do all of this yourself?'",
      "choices": [
        {
          "text": "Say 'Yes, I did it myself!'",
          "outcome": "dishonest",
          "xp": 5,
          "response": "Tough spot — your parent meant well! But the teacher is grading YOUR learning. 💭"
        },
        {
          "text": "Say 'My parent helped me a lot with this one'",
          "outcome": "honest",
          "xp": 30,
          "response": "That took courage! The teacher now knows the truth AND sees your honesty. 🌟"
        },
        {
          "text": "Say 'I had some help' without explaining more",
          "outcome": "partial",
          "xp": 20,
          "response": "Partial truth. Better than a full lie — but leaves things unclear. 💭"
        }
      ],
      "realWorldTip": "Talk to a parent about the right amount of help for homework.",
      "reflectionPrompt": "When does getting help become someone else doing it for you?",
      "statement": "There is almost always a truthful way to be kind — you rarely have to choose.",
      "isTruth": true
    },
    {
      "id": "tof_008",
      "title": "The Broken Promise",
      "setting": "school",
      "characters": [
        "best friend"
      ],
      "ageRange": [
        6,
        11
      ],
      "difficulty": 2,
      "theme": "honesty",
      "growthDimensions": [
        "fairness",
        "empathy"
      ],
      "culture": [
        "global"
      ],
      "tags": [
        "promise",
        "friendship",
        "trust"
      ],
      "situation": "You promised your friend you'd come to their birthday party. Something better came up and now you don't want to go. They ask why you're not coming.",
      "choices": [
        {
          "text": "Tell the truth: something else came up",
          "outcome": "honest",
          "xp": 20,
          "response": "Honest, but it hurts them. A promise is a big deal. Could you still show up briefly? 💭"
        },
        {
          "text": "Make up an excuse — say you're sick",
          "outcome": "lie",
          "xp": 5,
          "response": "The lie protects you but breaks real trust. What if they find out? 💭"
        },
        {
          "text": "Keep your promise and go — you said you would",
          "outcome": "committed",
          "xp": 30,
          "response": "A promise kept when you didn't feel like it — that's what makes you someone people trust. 🌟"
        }
      ],
      "realWorldTip": "Only make promises you know you can keep. And when you make one — keep it.",
      "reflectionPrompt": "How important is keeping your word?",
      "statement": "Letting someone else take blame for your mistake is acceptable if it avoids trouble.",
      "isTruth": false
    },
    {
      "id": "tof_009",
      "title": "The Lost Library Book",
      "setting": "school",
      "characters": [
        "librarian"
      ],
      "ageRange": [
        6,
        10
      ],
      "difficulty": 1,
      "theme": "honesty",
      "growthDimensions": [
        "fairness",
        "responsibility"
      ],
      "culture": [
        "global"
      ],
      "tags": [
        "school",
        "library",
        "responsibility"
      ],
      "situation": "You lost a library book and it's overdue. The librarian asks where it is.",
      "choices": [
        {
          "text": "Say I lost it and offer to pay for it",
          "outcome": "honest",
          "xp": 30,
          "response": "Honest AND taking responsibility. That's two great things at once. 🌟"
        },
        {
          "text": "Say it's at home and I'll bring it tomorrow",
          "outcome": "lie",
          "xp": 5,
          "response": "Buying time with a lie creates more problems. Tomorrow comes quickly! 💭"
        },
        {
          "text": "Tell the truth but ask for help finding a solution",
          "outcome": "honest",
          "xp": 25,
          "response": "Honest and asking for help — great combination. Adults love problem-solving with you. 🌟"
        }
      ],
      "realWorldTip": "When you make a mistake, focus on the solution, not the cover-up.",
      "reflectionPrompt": "What does it mean to take responsibility?",
      "statement": "If nobody finds out about a mistake, it doesn't matter at all.",
      "isTruth": false
    },
    {
      "id": "tof_010",
      "title": "The Test Score",
      "setting": "school",
      "characters": [
        "parent"
      ],
      "ageRange": [
        7,
        12
      ],
      "difficulty": 2,
      "theme": "honesty",
      "growthDimensions": [
        "fairness",
        "reasoning"
      ],
      "culture": [
        "IN"
      ],
      "tags": [
        "school",
        "marks",
        "parent",
        "pressure"
      ],
      "situation": "You got low marks on a test. Your parents have high expectations and will be disappointed. They ask how the test went.",
      "choices": [
        {
          "text": "Tell them the truth about my marks",
          "outcome": "honest",
          "xp": 30,
          "response": "Hard conversation ahead, but now your parents can actually help you improve. Brave. 🌟"
        },
        {
          "text": "Say 'it was okay' and hope they don't find out",
          "outcome": "evasive",
          "xp": 8,
          "response": "Vague answers are temporary shields. The report card will tell all eventually. 💭"
        },
        {
          "text": "Tell them and ask for help with studying",
          "outcome": "honest + wise",
          "xp": 35,
          "response": "Truth PLUS a plan — that's the power move. You turned a bad mark into a growth moment. 🌟💡"
        }
      ],
      "realWorldTip": "Talk to a parent about a subject you find difficult. Ask for help before the next test.",
      "reflectionPrompt": "Is it harder to be honest with people whose opinion matters most to you?",
      "statement": "Honesty about screen time helps families agree on fair rules.",
      "isTruth": true
    },
    {
      "id": "tof_011",
      "title": "The Overheard Secret",
      "setting": "school",
      "characters": [
        "friend",
        "another classmate"
      ],
      "ageRange": [
        8,
        12
      ],
      "difficulty": 3,
      "theme": "honesty",
      "growthDimensions": [
        "empathy",
        "fairness"
      ],
      "culture": [
        "global"
      ],
      "tags": [
        "gossip",
        "secret",
        "friendship",
        "grey zone"
      ],
      "situation": "You overheard your friend saying something unkind about another classmate. The classmate asks you if your friend said anything about them.",
      "choices": [
        {
          "text": "Tell them what you heard",
          "outcome": "honest",
          "xp": 20,
          "response": "Honest, but it might cause a fight. Is there a way to fix this without hurting both sides? 💭"
        },
        {
          "text": "Say 'I'm not sure, let me talk to them first'",
          "outcome": "wise",
          "xp": 30,
          "response": "Giving your friend a chance to make it right first — that's conflict-smart thinking. 🌟"
        },
        {
          "text": "Say you didn't hear anything",
          "outcome": "lie",
          "xp": 5,
          "response": "A lie to protect feelings. But the unkind words are still out there. 💭"
        }
      ],
      "realWorldTip": "If you hear something unkind about a friend, tell them privately before it spreads.",
      "reflectionPrompt": "Should you always tell people what others say about them?",
      "statement": "A well-intentioned lie is always better than a difficult honest conversation.",
      "isTruth": false
    },
    {
      "id": "tof_012",
      "title": "The Compliment That Wasn't True",
      "setting": "school",
      "characters": [
        "classmate who worked hard"
      ],
      "ageRange": [
        7,
        11
      ],
      "difficulty": 2,
      "theme": "honesty",
      "growthDimensions": [
        "empathy",
        "fairness"
      ],
      "culture": [
        "global"
      ],
      "tags": [
        "compliment",
        "friendship",
        "social"
      ],
      "situation": "Your classmate shows you a drawing they worked very hard on. Honestly, you don't think it's very good. They ask: 'Is it good?'",
      "choices": [
        {
          "text": "Say 'It's amazing!' to be nice",
          "outcome": "white lie",
          "xp": 10,
          "response": "Kind but not honest. They might enter it in a competition and be embarrassed later. 💭"
        },
        {
          "text": "Say 'I can see you worked really hard on it!'",
          "outcome": "kind truth",
          "xp": 30,
          "response": "True AND kind. You noticed their effort — that's what matters most! 🌟"
        },
        {
          "text": "Tell them exactly what you think",
          "outcome": "blunt",
          "xp": 15,
          "response": "Honest, but without kindness it can sting. Is there a gentler way to say it? 💭"
        }
      ],
      "realWorldTip": "Practice saying something true AND encouraging to someone today.",
      "reflectionPrompt": "What's the difference between being honest and being kind?",
      "statement": "If you broke a rule and no one found out, keeping quiet forever is the best plan.",
      "isTruth": false
    },
    {
      "id": "tof_013",
      "title": "The Stolen Pencil",
      "setting": "school",
      "characters": [
        "teacher",
        "classmate whose pencil was taken"
      ],
      "ageRange": [
        5,
        9
      ],
      "difficulty": 1,
      "theme": "honesty",
      "growthDimensions": [
        "fairness"
      ],
      "culture": [
        "global"
      ],
      "tags": [
        "school",
        "stealing",
        "property"
      ],
      "situation": "You accidentally took a classmate's pencil home and only realised later. They're looking for it. You could secretly put it back or admit what happened.",
      "choices": [
        {
          "text": "Give it back and explain what happened 🖊️",
          "outcome": "honest",
          "xp": 30,
          "response": "Returning it AND explaining takes courage. Your classmate will trust you more, not less. 🌟"
        },
        {
          "text": "Secretly put it on their desk",
          "outcome": "quiet fix",
          "xp": 20,
          "response": "The problem is solved! But you don't get to feel the relief of honesty. Still kind though. 🤝"
        },
        {
          "text": "Keep it — they probably won't notice",
          "outcome": "dishonest",
          "xp": 3,
          "response": "They WILL notice. And then you'll have to explain anyway, but with a bigger problem. 💭"
        }
      ],
      "realWorldTip": "Return or report anything that isn't yours — even small things.",
      "reflectionPrompt": "Why is keeping something that isn't yours wrong even if it was an accident?",
      "statement": "Saying sorry and telling the truth helps rebuild trust.",
      "isTruth": true
    },
    {
      "id": "tof_014",
      "title": "The Social Media Post",
      "setting": "online",
      "characters": [
        "classmate",
        "parent"
      ],
      "ageRange": [
        10,
        12
      ],
      "difficulty": 3,
      "theme": "honesty",
      "growthDimensions": [
        "reasoning",
        "fairness"
      ],
      "culture": [
        "global"
      ],
      "tags": [
        "social media",
        "online",
        "reputation",
        "grey zone"
      ],
      "situation": "A classmate posts something online that is half true and half exaggerated, making another classmate look bad. People are believing it. Do you correct it publicly?",
      "choices": [
        {
          "text": "Comment publicly: that's not entirely true",
          "outcome": "honest",
          "xp": 25,
          "response": "Brave! Standing up for truth online when everyone else is silent — that's digital courage. 🌟"
        },
        {
          "text": "Tell the classmate being talked about privately",
          "outcome": "wise",
          "xp": 30,
          "response": "They deserve to know! And you kept things from escalating publicly. Smart. 💡"
        },
        {
          "text": "Tell an adult — it could be cyberbullying",
          "outcome": "responsible",
          "xp": 25,
          "response": "Getting a grown-up involved when online stuff feels wrong — always the right call. ✅"
        }
      ],
      "realWorldTip": "Before sharing or believing something online, ask: is this really true? Ask a parent.",
      "reflectionPrompt": "Who is responsible when something false spreads online?",
      "statement": "Correcting someone's wrong impression is honest, even if they didn't ask.",
      "isTruth": true
    },
    {
      "id": "tof_015",
      "title": "The Accidental Lie That Grew",
      "setting": "school",
      "characters": [
        "teacher",
        "classmates"
      ],
      "ageRange": [
        7,
        11
      ],
      "difficulty": 2,
      "theme": "honesty",
      "growthDimensions": [
        "reasoning",
        "fairness"
      ],
      "culture": [
        "global"
      ],
      "tags": [
        "lie that grew",
        "school",
        "snowball"
      ],
      "situation": "You told one small lie about missing a school event. Now the story has grown and your teacher is planning a special get-well card for your fake illness.",
      "choices": [
        {
          "text": "Come clean now — before it gets worse",
          "outcome": "honest",
          "xp": 30,
          "response": "Stopping the snowball before it becomes an avalanche — brave and right. 🌟"
        },
        {
          "text": "Go along with it — it's too far to turn back",
          "outcome": "deeper lie",
          "xp": 3,
          "response": "Lies that grow usually collapse eventually. The longer this goes, the harder the fall. 💭"
        },
        {
          "text": "Quietly fix it without making a big deal",
          "outcome": "partial",
          "xp": 20,
          "response": "Trying to fix it quietly — still better than letting it grow. 🤝"
        }
      ],
      "realWorldTip": "If you've told a lie that's grown, tell a parent today. They can help you fix it.",
      "reflectionPrompt": "Why do small lies sometimes turn into big problems?",
      "statement": "Letting a friend copy your work is truly helping them learn.",
      "isTruth": false
    },
    {
      "id": "tof_016",
      "title": "The Puja Room Mishap",
      "setting": "home",
      "characters": [
        "grandparent"
      ],
      "ageRange": [
        5,
        10
      ],
      "difficulty": 1,
      "theme": "honesty",
      "growthDimensions": [
        "fairness",
        "respect"
      ],
      "culture": [
        "IN"
      ],
      "tags": [
        "home",
        "grandparent",
        "puja",
        "accident"
      ],
      "situation": "You were playing near the puja room and accidentally knocked over an oil lamp (diya). Nothing caught fire, but the carpet is stained. Your grandparent asks what happened.",
      "choices": [
        {
          "text": "Tell them exactly what happened 🪔",
          "outcome": "honest",
          "xp": 30,
          "response": "Accidents happen — honesty makes them easier to fix. Your grandparent will appreciate the truth. 🌟"
        },
        {
          "text": "Say you don't know how the lamp fell",
          "outcome": "evasive",
          "xp": 8,
          "response": "You were right there — they probably know. Telling the truth would have been easier. 💭"
        },
        {
          "text": "Try to clean it up before anyone sees",
          "outcome": "hiding",
          "xp": 10,
          "response": "Fixing the problem is good! But telling them what happened matters too. 💭"
        }
      ],
      "realWorldTip": "Tell a grandparent or elder about a mistake you made and how you handled it.",
      "reflectionPrompt": "Does it matter more WHO you tell the truth to?",
      "statement": "Lying once usually makes everything easier in the end.",
      "isTruth": false
    },
    {
      "id": "tof_017",
      "title": "The Extra Screen Time",
      "setting": "home",
      "characters": [
        "parent"
      ],
      "ageRange": [
        6,
        11
      ],
      "difficulty": 2,
      "theme": "honesty",
      "growthDimensions": [
        "self-regulation",
        "fairness"
      ],
      "culture": [
        "global"
      ],
      "tags": [
        "screen time",
        "rules",
        "parent",
        "trust"
      ],
      "situation": "You played on your tablet for an extra 30 minutes after your screen time ended, while your parents were busy. They ask: 'Did you follow the screen time rule today?'",
      "choices": [
        {
          "text": "Say yes — they'll never check",
          "outcome": "lie",
          "xp": 5,
          "response": "The app history tells all. And breaking trust is much worse than extra screen time. 💭"
        },
        {
          "text": "Admit you went over and apologise",
          "outcome": "honest",
          "xp": 30,
          "response": "Owning up without being caught — that's real trustworthiness. Your parents will remember this. 🌟"
        },
        {
          "text": "Say 'mostly' and change the subject",
          "outcome": "evasive",
          "xp": 10,
          "response": "'Mostly' is a soft lie. They sense something's off. 💭"
        }
      ],
      "realWorldTip": "Set a timer for your screen time this week and tell a parent when you've used it all.",
      "reflectionPrompt": "Why does breaking small rules matter even when no one sees?",
      "statement": "Talking to a teacher honestly when something goes wrong usually leads to help.",
      "isTruth": true
    },
    {
      "id": "tof_018",
      "title": "The Cricket Score",
      "setting": "sports",
      "characters": [
        "opposing team captain"
      ],
      "ageRange": [
        7,
        12
      ],
      "difficulty": 2,
      "theme": "honesty",
      "growthDimensions": [
        "fairness",
        "reasoning"
      ],
      "culture": [
        "IN"
      ],
      "tags": [
        "cricket",
        "sports",
        "competition",
        "cheating"
      ],
      "situation": "Playing a street cricket match, you run between the wickets and you KNOW you were run out — but the fielding team didn't appeal in time and the umpire says 'not out'.",
      "choices": [
        {
          "text": "Walk — I know I was out",
          "outcome": "honest",
          "xp": 35,
          "response": "Walking when you know you're out — the rarest and greatest sporting honour. Legends do this. 🏏🌟"
        },
        {
          "text": "Stay — the umpire said not out, that's the rule",
          "outcome": "technical",
          "xp": 15,
          "response": "Technically correct. But you know. Does it feel like a clean innings? 💭"
        },
        {
          "text": "Argue about it openly to confuse everyone",
          "outcome": "dishonest",
          "xp": 3,
          "response": "Deliberately confusing others to benefit yourself — that's not cricket, literally. 💭"
        }
      ],
      "realWorldTip": "In your next game, call yourself out even if no one else does.",
      "reflectionPrompt": "Can you be honest in sports even when winning is at stake?",
      "statement": "Using an answer you accidentally saw in a test is still cheating.",
      "isTruth": true
    },
    {
      "id": "tof_019",
      "title": "The Copied Drawing",
      "setting": "school",
      "characters": [
        "teacher",
        "original artist"
      ],
      "ageRange": [
        7,
        11
      ],
      "difficulty": 2,
      "theme": "honesty",
      "growthDimensions": [
        "fairness",
        "reasoning"
      ],
      "culture": [
        "global"
      ],
      "tags": [
        "art",
        "copying",
        "school",
        "credit"
      ],
      "situation": "You copied a drawing from online for an art competition. It looks amazing. The teacher is about to announce you as the winner.",
      "choices": [
        {
          "text": "Accept the prize — no one knows",
          "outcome": "dishonest",
          "xp": 3,
          "response": "You'd know. And online images often get traced back. The prize would feel hollow. 💭"
        },
        {
          "text": "Tell the teacher before they announce it",
          "outcome": "honest",
          "xp": 35,
          "response": "Stopping an undeserved prize — the bravest thing. The teacher will NEVER forget this honesty. 🌟"
        },
        {
          "text": "Accept it but decide never to copy again",
          "outcome": "partial",
          "xp": 10,
          "response": "A quiet decision to do better — good start. But what about this time? 💭"
        }
      ],
      "realWorldTip": "When you use someone else's idea or work, always say where it came from.",
      "reflectionPrompt": "What's the difference between being inspired by something and copying it?",
      "statement": "Backing up a friend's lie is harmless if their intentions were good.",
      "isTruth": false
    },
    {
      "id": "tof_020",
      "title": "The Allergy Announcement",
      "setting": "school",
      "characters": [
        "new friend"
      ],
      "ageRange": [
        6,
        10
      ],
      "difficulty": 1,
      "theme": "honesty",
      "growthDimensions": [
        "fairness",
        "reasoning"
      ],
      "culture": [
        "global"
      ],
      "tags": [
        "health",
        "honesty",
        "food allergy"
      ],
      "situation": "You have a food allergy but you're embarrassed about it. At a birthday party, someone offers you food that you're allergic to. You don't want to seem different.",
      "choices": [
        {
          "text": "Eat it anyway — it's just this once",
          "outcome": "dangerous",
          "xp": 0,
          "response": "Oh no — allergies can be very serious! Please always tell someone. Your health is more important than anything. 🚨"
        },
        {
          "text": "Say 'No thank you' without explaining",
          "outcome": "safe but private",
          "xp": 15,
          "response": "Safe! But sharing your allergy with a friend actually helps them look out for you. 💭"
        },
        {
          "text": "Tell them honestly about the allergy",
          "outcome": "honest + safe",
          "xp": 30,
          "response": "Honest AND safe. Good friends want to know so they can care for you. 🌟"
        }
      ],
      "realWorldTip": "If you have any allergy or health condition, always tell a trusted adult and friend.",
      "reflectionPrompt": "Why is it important to be honest about things that affect your health?",
      "statement": "Honest people find it easier to build strong friendships.",
      "isTruth": true
    },
    {
      "id": "tof_021",
      "title": "The Holi Colour Mishap",
      "setting": "festival",
      "characters": [
        "neighbour",
        "parent"
      ],
      "ageRange": [
        5,
        9
      ],
      "difficulty": 1,
      "theme": "honesty",
      "growthDimensions": [
        "fairness"
      ],
      "culture": [
        "IN"
      ],
      "tags": [
        "holi",
        "festival",
        "accident",
        "property"
      ],
      "situation": "During Holi, you accidentally splashed colour on a neighbour's freshly washed car. They don't know it was you.",
      "choices": [
        {
          "text": "Tell the neighbour and apologise",
          "outcome": "honest",
          "xp": 30,
          "response": "Admitting an accident to a grown-up neighbour takes real courage. They'll appreciate it. 🌟"
        },
        {
          "text": "Walk away quickly — it was an accident",
          "outcome": "avoiding",
          "xp": 5,
          "response": "Accidents don't need to be secrets. Saying sorry clears the air. 💭"
        },
        {
          "text": "Tell your parent and let them handle it",
          "outcome": "responsible",
          "xp": 25,
          "response": "Getting a grown-up involved is smart and honest. Good call. ✅"
        }
      ],
      "realWorldTip": "The next time you accidentally hurt someone or break something, say sorry right away.",
      "reflectionPrompt": "Does an accident need an apology?",
      "statement": "Blaming someone else for your mistake is a kind thing to do.",
      "isTruth": false
    },
    {
      "id": "tof_022",
      "title": "The Friend's Bad Idea",
      "setting": "school",
      "characters": [
        "best friend",
        "teacher"
      ],
      "ageRange": [
        7,
        12
      ],
      "difficulty": 3,
      "theme": "honesty",
      "growthDimensions": [
        "fairness",
        "reasoning"
      ],
      "culture": [
        "global"
      ],
      "tags": [
        "peer pressure",
        "friendship",
        "courage",
        "grey zone"
      ],
      "situation": "Your best friend wants to pull a prank on a classmate they don't like. You know it will hurt that classmate's feelings. Your friend is excited about it.",
      "choices": [
        {
          "text": "Tell your friend honestly that it's a bad idea",
          "outcome": "honest + brave",
          "xp": 30,
          "response": "Saying no to your best friend when they're wrong — that's the hardest honesty. Real friendship looks like this. 🌟"
        },
        {
          "text": "Go along with it to avoid conflict",
          "outcome": "peer pressure",
          "xp": 5,
          "response": "Keeping the peace at someone else's expense — that's not friendship, it's fear. 💭"
        },
        {
          "text": "Tell a teacher before it happens",
          "outcome": "protective",
          "xp": 25,
          "response": "Protecting the classmate first — brave, and the right thing for everyone. 💪"
        }
      ],
      "realWorldTip": "If a friend is about to do something that could hurt someone, say so — even if it's uncomfortable.",
      "reflectionPrompt": "Is it ever hard to be honest with your closest friends?",
      "statement": "Staying silent when someone is wrongly blamed is the same as being innocent.",
      "isTruth": false
    },
    {
      "id": "tof_023",
      "title": "The Overheard Parents",
      "setting": "home",
      "characters": [
        "sibling",
        "parent"
      ],
      "ageRange": [
        8,
        12
      ],
      "difficulty": 3,
      "theme": "honesty",
      "growthDimensions": [
        "empathy",
        "fairness"
      ],
      "culture": [
        "global"
      ],
      "tags": [
        "family",
        "overhearing",
        "privacy",
        "grey zone"
      ],
      "situation": "You accidentally overheard your parents discussing something private (a family money problem). Your sibling asks if everything is okay at home.",
      "choices": [
        {
          "text": "Tell your sibling what you heard",
          "outcome": "oversharing",
          "xp": 10,
          "response": "Sharing adult worries with younger siblings can scare them unnecessarily. 💭"
        },
        {
          "text": "Say 'I think things are fine' to protect them",
          "outcome": "protective",
          "xp": 20,
          "response": "Protecting them from adult worries — thoughtful. Though 'I think' keeps it honest. 🤝"
        },
        {
          "text": "Talk to a parent about what you heard",
          "outcome": "wise",
          "xp": 30,
          "response": "Going to the source — adult and wise. They can explain at the right level. 🌟"
        }
      ],
      "realWorldTip": "If you hear something worrying at home, talk to a trusted adult about it.",
      "reflectionPrompt": "Is sharing a secret always the honest thing to do?",
      "statement": "Helping someone cheat because their situation is hard is a genuine act of kindness.",
      "isTruth": false
    },
    {
      "id": "tof_024",
      "title": "The Exam Cheat Sheet",
      "setting": "school",
      "characters": [
        "classmate",
        "teacher"
      ],
      "ageRange": [
        9,
        12
      ],
      "difficulty": 3,
      "theme": "honesty",
      "growthDimensions": [
        "fairness",
        "reasoning"
      ],
      "culture": [
        "IN"
      ],
      "tags": [
        "exam",
        "cheating",
        "peer pressure",
        "grey zone"
      ],
      "situation": "A classmate passes you a cheat sheet during an important exam. The teacher hasn't noticed yet. You could use it or push it away.",
      "choices": [
        {
          "text": "Push it away without making a scene",
          "outcome": "honest",
          "xp": 25,
          "response": "Quiet courage. You didn't need to announce it — you just did the right thing. 🌟"
        },
        {
          "text": "Use it — everyone else probably does",
          "outcome": "dishonest",
          "xp": 3,
          "response": "Not everyone does. And if caught, both of you face serious consequences. 💭"
        },
        {
          "text": "Tell the teacher after the exam",
          "outcome": "honest + delayed",
          "xp": 20,
          "response": "You waited, but you still told the truth. Not easy — but right. 🤝"
        }
      ],
      "realWorldTip": "Talk to a parent or teacher about how to prepare better for the next test.",
      "reflectionPrompt": "Does cheating hurt anyone besides yourself?",
      "statement": "A whistle-blower who exposes cheating harms their peers by doing so.",
      "isTruth": false
    },
    {
      "id": "tof_025",
      "title": "The App Purchase",
      "setting": "home",
      "characters": [
        "parent"
      ],
      "ageRange": [
        9,
        12
      ],
      "difficulty": 2,
      "theme": "honesty",
      "growthDimensions": [
        "fairness",
        "reasoning"
      ],
      "culture": [
        "global"
      ],
      "tags": [
        "money",
        "online purchase",
        "parent",
        "trust"
      ],
      "situation": "You accidentally made an in-app purchase on your parent's phone. The money has already been charged. Your parent hasn't noticed yet.",
      "choices": [
        {
          "text": "Tell them immediately and explain it was an accident",
          "outcome": "honest",
          "xp": 30,
          "response": "Telling before they notice — that's next-level trustworthiness. They might be frustrated but they'll trust you more. 🌟"
        },
        {
          "text": "Wait and see if they notice",
          "outcome": "hoping",
          "xp": 8,
          "response": "They WILL notice. And finding out you knew all along makes it much worse. 💭"
        },
        {
          "text": "Delete the app so there's no trace",
          "outcome": "hiding",
          "xp": 3,
          "response": "Bank statements exist. The truth always comes out — better from you first. 💭"
        }
      ],
      "realWorldTip": "Always ask a parent before making any purchase online, even a small one.",
      "reflectionPrompt": "Is waiting to see if someone notices different from hiding the truth?",
      "statement": "Returning something borrowed that got damaged builds more trust than hiding it.",
      "isTruth": true
    },
    {
      "id": "tof_026",
      "title": "The Friend's Secret",
      "setting": "school",
      "characters": [
        "friend who told you a secret",
        "another classmate"
      ],
      "ageRange": [
        7,
        11
      ],
      "difficulty": 3,
      "theme": "honesty",
      "growthDimensions": [
        "empathy",
        "fairness"
      ],
      "culture": [
        "global"
      ],
      "tags": [
        "secret",
        "friendship",
        "trust",
        "grey zone"
      ],
      "situation": "Your friend told you in confidence that they have a crush on someone. That someone directly asks you: 'Does anyone like me?'",
      "choices": [
        {
          "text": "Keep the secret — say 'I don't know'",
          "outcome": "loyal",
          "xp": 25,
          "response": "Keeping someone's secret is a form of honesty too — honest to your friend's trust. 🌟"
        },
        {
          "text": "Tell the truth — you asked me directly",
          "outcome": "blunt",
          "xp": 10,
          "response": "Direct honesty broke your friend's trust. Not all truths are ours to tell. 💭"
        },
        {
          "text": "Say 'That's something to ask people yourself'",
          "outcome": "wise redirect",
          "xp": 30,
          "response": "Didn't lie AND didn't betray your friend. That's masterful. 🌟💡"
        }
      ],
      "realWorldTip": "Keep the secrets people trust you with. Only share them if someone could be hurt.",
      "reflectionPrompt": "When should you break a secret?",
      "statement": "Covering for a struggling friend sometimes hides the help they actually need.",
      "isTruth": true
    },
    {
      "id": "tof_027",
      "title": "The Survey Answer",
      "setting": "school",
      "characters": [
        "teacher"
      ],
      "ageRange": [
        8,
        12
      ],
      "difficulty": 2,
      "theme": "honesty",
      "growthDimensions": [
        "fairness",
        "reasoning"
      ],
      "culture": [
        "global"
      ],
      "tags": [
        "school",
        "feedback",
        "survey",
        "truth"
      ],
      "situation": "Your teacher asks everyone to fill in a feedback form about the class. Some questions ask if the teaching is clear. Honestly, you've been confused for weeks but you don't want to be rude.",
      "choices": [
        {
          "text": "Write honestly — I've been confused about some things",
          "outcome": "honest",
          "xp": 30,
          "response": "Honest feedback helps the teacher help everyone including you. Brave and kind! 🌟"
        },
        {
          "text": "Write that everything is great to make them happy",
          "outcome": "people pleasing",
          "xp": 8,
          "response": "They won't know to help you if you say everything's fine. 💭"
        },
        {
          "text": "Be specific and polite: write what was hard",
          "outcome": "honest + kind",
          "xp": 35,
          "response": "Specific, honest, and kind. The teacher can actually USE this feedback. 🌟💡"
        }
      ],
      "realWorldTip": "Give honest feedback to someone this week — a teacher, parent, or friend.",
      "reflectionPrompt": "Can honest feedback be a form of kindness?",
      "statement": "Exaggerating the truth a little is basically the same as telling it straight.",
      "isTruth": false
    },
    {
      "id": "tof_028",
      "title": "The Empty Sweet Box",
      "setting": "home",
      "characters": [
        "mother"
      ],
      "ageRange": [
        3,
        8
      ],
      "difficulty": 1,
      "theme": "home",
      "growthDimensions": [
        "fairness",
        "reasoning"
      ],
      "culture": [
        "IN"
      ],
      "tags": [
        "home",
        "India",
        "food",
        "honesty"
      ],
      "situation": "You ate the last two ladoos that were saved for guests. Mummy opens the empty box and asks who finished them.",
      "choices": [
        {
          "text": "Tell the truth: I ate them, sorry",
          "outcome": "honest",
          "xp": 30,
          "response": "You owned up right away! Mummy says, \"Thank you for being honest. Next time, ask first.\" 🌟"
        },
        {
          "text": "Say you don't know",
          "outcome": "evasive",
          "xp": 8,
          "response": "Not quite a lie, but not honest either. Mummy is left puzzled and the truth stays hidden. 💭"
        },
        {
          "text": "Blame your little brother",
          "outcome": "lie",
          "xp": 3,
          "response": "Your brother gets the blame for something he didn't do. That's unfair, and lies usually come out. 💭"
        }
      ],
      "realWorldTip": "When you eat something you shouldn't have, telling the truth is braver than blaming someone else.",
      "reflectionPrompt": "Why is it unfair to blame someone else for something you did?",
      "statement": "Telling a grown-up when something goes wrong is usually the right choice.",
      "isTruth": true
    },
    {
      "id": "tof_029",
      "title": "The Torn Book",
      "setting": "school",
      "characters": [
        "teacher"
      ],
      "ageRange": [
        3,
        8
      ],
      "difficulty": 1,
      "theme": "school",
      "growthDimensions": [
        "responsibility",
        "reasoning"
      ],
      "culture": [
        "US"
      ],
      "tags": [
        "school",
        "US",
        "books",
        "honesty"
      ],
      "situation": "You accidentally tore a page in a library book while flipping too fast. The teacher asks if anyone knows how it happened.",
      "choices": [
        {
          "text": "Raise your hand and say it was an accident",
          "outcome": "honest",
          "xp": 30,
          "response": "You spoke up honestly! The teacher gently shows you how to handle books carefully. No big deal. 🌟"
        },
        {
          "text": "Stay quiet and hope no one notices",
          "outcome": "evasive",
          "xp": 8,
          "response": "You say nothing. But you feel worried every library visit, wondering if you'll be found out. 💭"
        },
        {
          "text": "Slip the book back and say nothing",
          "outcome": "lie",
          "xp": 3,
          "response": "You hide it. The next reader finds the torn page, confused. Hiding mistakes makes them feel bigger. 💭"
        }
      ],
      "realWorldTip": "Accidents with books happen — telling the truth helps you learn to be more careful.",
      "reflectionPrompt": "How does it feel to hide a mistake versus just telling the truth?",
      "statement": "Hiding a mistake always makes it go away faster.",
      "isTruth": false
    },
    {
      "id": "tof_030",
      "title": "The Muddy Footprints",
      "setting": "home",
      "characters": [
        "grandmother"
      ],
      "ageRange": [
        3,
        8
      ],
      "difficulty": 1,
      "theme": "home",
      "growthDimensions": [
        "responsibility"
      ],
      "culture": [
        "IN"
      ],
      "tags": [
        "home",
        "India",
        "mess",
        "honesty"
      ],
      "situation": "You ran inside with muddy shoes and left footprints on grandmother's clean floor. She asks who tracked in the mud.",
      "choices": [
        {
          "text": "Admit it was you and offer to clean it",
          "outcome": "honest",
          "xp": 30,
          "response": "You own up AND offer to help clean! Grandmother smiles, \"Such an honest, helpful child.\" 🌟"
        },
        {
          "text": "Pretend you didn't see the footprints",
          "outcome": "evasive",
          "xp": 8,
          "response": "You act confused. Grandmother cleans it herself, puzzled. The truth would have been kinder. 💭"
        },
        {
          "text": "Say the dog did it",
          "outcome": "lie",
          "xp": 3,
          "response": "You blame the dog, who has no muddy paws! Grandmother knows. Lies are easy to spot. 💭"
        }
      ],
      "realWorldTip": "Owning your mess and helping clean up shows real honesty and responsibility.",
      "reflectionPrompt": "Why is it better to admit a mess than to hide it?",
      "statement": "Being honest, even when it's scary, shows real bravery.",
      "isTruth": true
    },
    {
      "id": "tof_031",
      "title": "The Spilled Juice",
      "setting": "home",
      "characters": [
        "parent"
      ],
      "ageRange": [
        3,
        8
      ],
      "difficulty": 1,
      "theme": "home",
      "growthDimensions": [
        "responsibility",
        "reasoning"
      ],
      "culture": [
        "global"
      ],
      "tags": [
        "home",
        "accidents",
        "honesty",
        "family"
      ],
      "situation": "You spilled juice on the carpet while playing where you weren't supposed to. Your parent walks in and asks what the wet spot is.",
      "choices": [
        {
          "text": "Tell them you spilled juice by accident",
          "outcome": "honest",
          "xp": 30,
          "response": "You told the truth! Your parent helps you clean it and reminds you to drink at the table. All okay. 🌟"
        },
        {
          "text": "Say it was already there",
          "outcome": "lie",
          "xp": 3,
          "response": "You make up a story. But your parent saw the cup nearby. Made-up stories rarely hold up. 💭"
        },
        {
          "text": "Mumble that you don't know",
          "outcome": "evasive",
          "xp": 8,
          "response": "You avoid the truth. Your parent cleans up confused. Being clear and honest is kinder. 💭"
        }
      ],
      "realWorldTip": "Telling the truth about a spill, even if you broke a rule, is the brave choice.",
      "reflectionPrompt": "What makes telling the truth feel scary sometimes?",
      "statement": "People who tell small lies never get caught.",
      "isTruth": false
    },
    {
      "id": "tof_032",
      "title": "The Lost Pencil",
      "setting": "school",
      "characters": [
        "friend",
        "teacher"
      ],
      "ageRange": [
        3,
        8
      ],
      "difficulty": 1,
      "theme": "school",
      "growthDimensions": [
        "fairness"
      ],
      "culture": [
        "IN"
      ],
      "tags": [
        "school",
        "India",
        "honesty",
        "friends"
      ],
      "situation": "You found a nice pencil on the floor and started using it. Then a classmate says they lost their pencil and it looks just like yours.",
      "choices": [
        {
          "text": "Give it back and say you found it",
          "outcome": "honest",
          "xp": 30,
          "response": "You return it honestly! Your classmate is so grateful. Being truthful made you a good friend. 🌟"
        },
        {
          "text": "Say it's your pencil",
          "outcome": "lie",
          "xp": 3,
          "response": "You keep it by lying. But your classmate is sad, and you know deep down it isn't yours. 💭"
        },
        {
          "text": "Hide it in your bag",
          "outcome": "evasive",
          "xp": 5,
          "response": "You sneak it away. Now you feel nervous every time they look for it. Honesty would feel lighter. 💭"
        }
      ],
      "realWorldTip": "If you find something that belongs to someone else, telling the truth and returning it is right.",
      "reflectionPrompt": "How would you feel if you lost something and someone kept it?",
      "statement": "Admitting what you did wrong is better than hoping no one notices.",
      "isTruth": true
    },
    {
      "id": "tof_033",
      "title": "The Cookie Crumbs",
      "setting": "home",
      "characters": [
        "parent"
      ],
      "ageRange": [
        3,
        8
      ],
      "difficulty": 1,
      "theme": "home",
      "growthDimensions": [
        "reasoning",
        "responsibility"
      ],
      "culture": [
        "US"
      ],
      "tags": [
        "home",
        "US",
        "food",
        "honesty"
      ],
      "situation": "You ate a cookie before dinner, which isn't allowed. There are crumbs on your shirt. Your parent asks if you've been snacking.",
      "choices": [
        {
          "text": "Admit you had a cookie",
          "outcome": "honest",
          "xp": 30,
          "response": "You're honest even with crumbs as evidence! Your parent appreciates the truth more than the rule-break. 🌟"
        },
        {
          "text": "Say no, brushing off the crumbs",
          "outcome": "lie",
          "xp": 3,
          "response": "You deny it, but the crumbs give you away. Lying when the truth is obvious makes things worse. 💭"
        },
        {
          "text": "Say a crumb just fell on you somehow",
          "outcome": "evasive",
          "xp": 8,
          "response": "You dodge the question. Your parent doesn't quite believe it. Honesty is simpler. 💭"
        }
      ],
      "realWorldTip": "When there's clear evidence, honesty is always better than a story that won't hold up.",
      "reflectionPrompt": "Why is it hard to lie when there's evidence?",
      "statement": "Making up excuses for mistakes is just as good as telling the truth.",
      "isTruth": false
    },
    {
      "id": "tof_034",
      "title": "The Drawing on the Wall",
      "setting": "home",
      "characters": [
        "mother"
      ],
      "ageRange": [
        3,
        8
      ],
      "difficulty": 1,
      "theme": "home",
      "growthDimensions": [
        "responsibility"
      ],
      "culture": [
        "IN"
      ],
      "tags": [
        "home",
        "India",
        "art",
        "honesty"
      ],
      "situation": "You drew on the wall with crayons. It looked fun but now there are marks everywhere. Mummy notices and asks who drew on the wall.",
      "choices": [
        {
          "text": "Admit you did it and say sorry",
          "outcome": "honest",
          "xp": 30,
          "response": "You own up! Mummy explains walls aren't for drawing and gives you paper instead. Honesty wins. 🌟"
        },
        {
          "text": "Point at your baby sibling",
          "outcome": "lie",
          "xp": 3,
          "response": "You blame the baby, who can't even hold a crayon properly! Mummy knows it was you. 💭"
        },
        {
          "text": "Say you didn't see who did it",
          "outcome": "evasive",
          "xp": 8,
          "response": "You avoid it. But you're the only one who draws like that. Honesty would be clearer. 💭"
        }
      ],
      "realWorldTip": "Admitting what you did, even when you'll be corrected, is braver than blaming a baby.",
      "reflectionPrompt": "Why isn't it fair to blame someone who couldn't have done it?",
      "statement": "When you tell the truth, you usually feel lighter and less worried.",
      "isTruth": true
    },
    {
      "id": "tof_035",
      "title": "The Broken Branch",
      "setting": "park",
      "characters": [
        "park keeper",
        "friend"
      ],
      "ageRange": [
        3,
        8
      ],
      "difficulty": 1,
      "theme": "park",
      "growthDimensions": [
        "responsibility",
        "reasoning"
      ],
      "culture": [
        "global"
      ],
      "tags": [
        "park",
        "nature",
        "honesty",
        "responsibility"
      ],
      "situation": "You were swinging on a small tree branch and it snapped off. A park keeper comes over and asks if you saw what happened to the tree.",
      "choices": [
        {
          "text": "Tell them you broke it by accident",
          "outcome": "honest",
          "xp": 30,
          "response": "You're honest! The keeper explains why trees need care, and you understand. Truth respected. 🌟"
        },
        {
          "text": "Say it was already broken",
          "outcome": "lie",
          "xp": 3,
          "response": "You make up a story. But the fresh break shows it just happened. Lies don't match the evidence. 💭"
        },
        {
          "text": "Walk away quickly",
          "outcome": "evasive",
          "xp": 5,
          "response": "You leave without answering. But running away doesn't fix anything, and you feel uneasy. 💭"
        }
      ],
      "realWorldTip": "Being honest about accidents helps you learn — even about taking care of nature.",
      "reflectionPrompt": "How can telling the truth help you learn something new?",
      "statement": "It's fine to take something that isn't yours if no one is watching.",
      "isTruth": false
    },
    {
      "id": "tof_036",
      "title": "The Hidden Vegetables",
      "setting": "home",
      "characters": [
        "father"
      ],
      "ageRange": [
        3,
        8
      ],
      "difficulty": 1,
      "theme": "home",
      "growthDimensions": [
        "reasoning"
      ],
      "culture": [
        "IN"
      ],
      "tags": [
        "home",
        "India",
        "food",
        "honesty"
      ],
      "situation": "You didn't want to eat your vegetables, so you hid them under your plate. Papa asks if you finished your food.",
      "choices": [
        {
          "text": "Admit you hid them and didn't want them",
          "outcome": "honest",
          "xp": 30,
          "response": "You're honest about not liking them! Papa talks with you about trying small bites. Honesty opens up help. 🌟"
        },
        {
          "text": "Say yes, you ate everything",
          "outcome": "lie",
          "xp": 3,
          "response": "You say you finished — but the hidden veggies are right there. Papa finds them. Truth was easier. 💭"
        },
        {
          "text": "Shrug and say maybe",
          "outcome": "evasive",
          "xp": 8,
          "response": "You give a vague answer. Papa checks and finds the vegetables. Being clear is better. 💭"
        }
      ],
      "realWorldTip": "Being honest about food you don't like helps grown-ups understand and help you.",
      "reflectionPrompt": "Why is it better to say you don't like something than to hide it?",
      "statement": "Keeping promises is an important part of being honest.",
      "isTruth": true
    },
    {
      "id": "tof_037",
      "title": "The Pushed Friend",
      "setting": "school",
      "characters": [
        "teacher",
        "friend"
      ],
      "ageRange": [
        3,
        8
      ],
      "difficulty": 1,
      "theme": "school",
      "growthDimensions": [
        "responsibility",
        "fairness"
      ],
      "culture": [
        "US"
      ],
      "tags": [
        "school",
        "US",
        "honesty",
        "friends"
      ],
      "situation": "You were playing rough and accidentally pushed a friend who fell down. The teacher asks what happened.",
      "choices": [
        {
          "text": "Tell the teacher you pushed too hard by accident",
          "outcome": "honest",
          "xp": 30,
          "response": "You're honest about it! You apologise to your friend, and the teacher helps you play more gently. 🌟"
        },
        {
          "text": "Say your friend tripped on their own",
          "outcome": "lie",
          "xp": 3,
          "response": "You blame their feet. But others saw what happened. Honesty would have helped you both. 💭"
        },
        {
          "text": "Say you didn't do anything",
          "outcome": "evasive",
          "xp": 8,
          "response": "You deny it. Your friend feels hurt that you won't admit it. The truth matters to them. 💭"
        }
      ],
      "realWorldTip": "When you accidentally hurt someone, admitting it and saying sorry helps everyone feel better.",
      "reflectionPrompt": "How does it feel when someone won't admit they hurt you?",
      "statement": "Copying someone else's work is okay as long as you do it quietly.",
      "isTruth": false
    },
    {
      "id": "tof_038",
      "title": "The Broken Toy Train",
      "setting": "home",
      "characters": [
        "elder sibling"
      ],
      "ageRange": [
        3,
        8
      ],
      "difficulty": 1,
      "theme": "home",
      "growthDimensions": [
        "responsibility"
      ],
      "culture": [
        "IN"
      ],
      "tags": [
        "home",
        "India",
        "toys",
        "honesty"
      ],
      "situation": "You were playing with your older sibling's toy train and a wheel came off. They come looking for it and ask if you touched it.",
      "choices": [
        {
          "text": "Tell them you were playing and it broke",
          "outcome": "honest",
          "xp": 30,
          "response": "You're honest! Your sibling is a little sad but appreciates the truth. You fix it together with tape. 🌟"
        },
        {
          "text": "Say you never touched it",
          "outcome": "lie",
          "xp": 3,
          "response": "You deny it. But you're the only one who plays with trains. Your sibling feels you can't be trusted. 💭"
        },
        {
          "text": "Say it was already broken",
          "outcome": "evasive",
          "xp": 8,
          "response": "You dodge blame. But they know it worked this morning. Honesty keeps their trust. 💭"
        }
      ],
      "realWorldTip": "Being honest when you break someone's toy keeps them trusting you with their things.",
      "reflectionPrompt": "Why does honesty help people trust you?",
      "statement": "Honesty helps friendships stay strong and trusting.",
      "isTruth": true
    },
    {
      "id": "tof_039",
      "title": "The Wet Homework",
      "setting": "home",
      "characters": [
        "parent",
        "teacher"
      ],
      "ageRange": [
        3,
        8
      ],
      "difficulty": 1,
      "theme": "home",
      "growthDimensions": [
        "responsibility",
        "reasoning"
      ],
      "culture": [
        "global"
      ],
      "tags": [
        "home",
        "school",
        "honesty",
        "responsibility"
      ],
      "situation": "You spilled water on your homework and it's all smudged. Your parent asks why your homework looks like that.",
      "choices": [
        {
          "text": "Explain you accidentally spilled water on it",
          "outcome": "honest",
          "xp": 30,
          "response": "You tell the truth! Your parent helps you redo it neatly and you keep water away from homework now. 🌟"
        },
        {
          "text": "Say the teacher gave it to you that way",
          "outcome": "lie",
          "xp": 3,
          "response": "You blame the teacher. But the smudges are fresh. Made-up excuses get tangled fast. 💭"
        },
        {
          "text": "Say you don't know how it happened",
          "outcome": "evasive",
          "xp": 8,
          "response": "You act confused. Your parent senses something's off. Just being honest is simpler. 💭"
        }
      ],
      "realWorldTip": "Honesty about little accidents, like a spill, is always easier than making up excuses.",
      "reflectionPrompt": "Why do made-up excuses often get complicated?",
      "statement": "Saying 'I don't know' to dodge a question is the same as lying.",
      "isTruth": true
    },
    {
      "id": "tof_040",
      "title": "The Disappointing Test",
      "setting": "school",
      "characters": [
        "parent"
      ],
      "ageRange": [
        5,
        10
      ],
      "difficulty": 1,
      "theme": "school",
      "growthDimensions": [
        "responsibility",
        "reasoning"
      ],
      "culture": [
        "IN"
      ],
      "tags": [
        "school",
        "India",
        "exams",
        "honesty"
      ],
      "situation": "You did badly on a test and you're worried your parents will be upset. They ask how the test went.",
      "choices": [
        {
          "text": "Tell them honestly you didn't do well",
          "outcome": "honest",
          "xp": 30,
          "response": "You're honest about it. Your parents help you understand what went wrong and study better. Truth helps! 🌟"
        },
        {
          "text": "Say you haven't got it back yet",
          "outcome": "lie",
          "xp": 5,
          "response": "You stall with a lie. But the truth comes out later, and now there's a lie on top of a low score. 💭"
        },
        {
          "text": "Say it went fine",
          "outcome": "evasive",
          "xp": 8,
          "response": "You dodge it. But when they see the real score, they're more disappointed by the dodge than the marks. 💭"
        }
      ],
      "realWorldTip": "Being honest about a bad grade lets people help you improve — hiding it just delays that.",
      "reflectionPrompt": "Why might telling the truth about a bad grade actually help you?",
      "statement": "A lie that makes someone happy in the moment is always better.",
      "isTruth": false
    },
    {
      "id": "tof_041",
      "title": "The Screen Time",
      "setting": "home",
      "characters": [
        "parent"
      ],
      "ageRange": [
        5,
        10
      ],
      "difficulty": 1,
      "theme": "home",
      "growthDimensions": [
        "responsibility"
      ],
      "culture": [
        "US"
      ],
      "tags": [
        "home",
        "US",
        "rules",
        "honesty"
      ],
      "situation": "You played video games longer than allowed while your parent was busy. They ask how long you played.",
      "choices": [
        {
          "text": "Tell them the real amount of time",
          "outcome": "honest",
          "xp": 30,
          "response": "You're honest even though you went over. Your parent values the truth and you talk about limits together. 🌟"
        },
        {
          "text": "Say you only played a little",
          "outcome": "lie",
          "xp": 5,
          "response": "You shrink the truth. But the game shows your play time. Getting caught in a lie feels worse. 💭"
        },
        {
          "text": "Say you weren't really keeping track",
          "outcome": "evasive",
          "xp": 8,
          "response": "You dodge it. Your parent senses you're avoiding. Honesty would clear the air. 💭"
        }
      ],
      "realWorldTip": "Being honest about breaking a screen-time rule is better than getting caught in a lie about it.",
      "reflectionPrompt": "Why is it tempting to make a rule-break sound smaller than it was?",
      "statement": "If you break something by accident, telling the owner is right.",
      "isTruth": true
    },
    {
      "id": "tof_042",
      "title": "The Borrowed Answer",
      "setting": "school",
      "characters": [
        "teacher",
        "classmate"
      ],
      "ageRange": [
        5,
        10
      ],
      "difficulty": 1,
      "theme": "school",
      "growthDimensions": [
        "fairness",
        "responsibility"
      ],
      "culture": [
        "IN"
      ],
      "tags": [
        "school",
        "India",
        "exams",
        "honesty"
      ],
      "situation": "During a quiz, you glanced at a friend's paper and copied one answer. After, the teacher asks if everyone did their own work.",
      "choices": [
        {
          "text": "Admit you copied one answer",
          "outcome": "honest",
          "xp": 30,
          "response": "You own up honestly. The teacher respects your courage and you promise to study that topic. 🌟"
        },
        {
          "text": "Say yes, you did it all yourself",
          "outcome": "lie",
          "xp": 3,
          "response": "You lie about it. But your answer matches your friend's exactly. The truth was the braver path. 💭"
        },
        {
          "text": "Stay silent and look away",
          "outcome": "evasive",
          "xp": 8,
          "response": "You avoid answering. The unease of the copied answer stays with you. Honesty would lift it. 💭"
        }
      ],
      "realWorldTip": "Admitting you copied is hard, but it's the honest path — and helps you actually learn.",
      "reflectionPrompt": "Why doesn't copying help you in the long run?",
      "statement": "Keeping a mistake secret protects everyone involved.",
      "isTruth": false
    },
    {
      "id": "tof_043",
      "title": "The Missing Money",
      "setting": "home",
      "characters": [
        "parent",
        "sibling"
      ],
      "ageRange": [
        5,
        10
      ],
      "difficulty": 1,
      "theme": "home",
      "growthDimensions": [
        "fairness",
        "responsibility"
      ],
      "culture": [
        "global"
      ],
      "tags": [
        "home",
        "money",
        "honesty",
        "family"
      ],
      "situation": "You took a coin from the jar to buy candy without asking. Your parent notices money is missing and asks the family about it.",
      "choices": [
        {
          "text": "Admit you took a coin without asking",
          "outcome": "honest",
          "xp": 30,
          "response": "You confess honestly. Your parent appreciates the truth and you agree to ask first next time. 🌟"
        },
        {
          "text": "Stay quiet and let everyone wonder",
          "outcome": "evasive",
          "xp": 8,
          "response": "You stay silent while your family puzzles over it. The unfairness of others wondering sits with you. 💭"
        },
        {
          "text": "Suggest maybe your sibling took it",
          "outcome": "lie",
          "xp": 3,
          "response": "You hint at your sibling. Now an innocent person is suspected. Lies hurt others, not just you. 💭"
        }
      ],
      "realWorldTip": "Admitting you took something without asking is honest; letting others be suspected is not.",
      "reflectionPrompt": "How does staying silent sometimes let others get unfairly blamed?",
      "statement": "People usually feel better after they tell the truth.",
      "isTruth": true
    },
    {
      "id": "tof_044",
      "title": "The Forgotten Project",
      "setting": "school",
      "characters": [
        "teacher",
        "group"
      ],
      "ageRange": [
        5,
        10
      ],
      "difficulty": 1,
      "theme": "school",
      "growthDimensions": [
        "responsibility"
      ],
      "culture": [
        "IN"
      ],
      "tags": [
        "school",
        "India",
        "honesty",
        "teamwork"
      ],
      "situation": "You forgot to do your part of a group project. The teacher asks the group if everyone contributed equally.",
      "choices": [
        {
          "text": "Admit you didn't finish your part",
          "outcome": "honest",
          "xp": 30,
          "response": "You're honest with the group and teacher. You offer to make it up. They respect your truthfulness. 🌟"
        },
        {
          "text": "Stay quiet and let teammates cover for you",
          "outcome": "evasive",
          "xp": 8,
          "response": "You let others take the weight silently. They notice, and it strains the team's trust. 💭"
        },
        {
          "text": "Say you did your part fully",
          "outcome": "lie",
          "xp": 3,
          "response": "You claim you finished. But the missing work is obvious. The lie makes teammates trust you less. 💭"
        }
      ],
      "realWorldTip": "Admitting you didn't finish your part is fairer to your team than pretending you did.",
      "reflectionPrompt": "How does honesty help a team work better together?",
      "statement": "It's okay to blame a younger child for something you did.",
      "isTruth": false
    },
    {
      "id": "tof_045",
      "title": "The Damaged Bike",
      "setting": "park",
      "characters": [
        "friend"
      ],
      "ageRange": [
        5,
        10
      ],
      "difficulty": 1,
      "theme": "park",
      "growthDimensions": [
        "responsibility",
        "fairness"
      ],
      "culture": [
        "US"
      ],
      "tags": [
        "park",
        "US",
        "honesty",
        "friends"
      ],
      "situation": "You borrowed a friend's bike and scratched it when you fell. Your friend asks if their bike is okay when you return it.",
      "choices": [
        {
          "text": "Show them the scratch and explain what happened",
          "outcome": "honest",
          "xp": 30,
          "response": "You point out the scratch honestly and apologise. Your friend appreciates your honesty and forgives you. 🌟"
        },
        {
          "text": "Hand it back without mentioning the scratch",
          "outcome": "evasive",
          "xp": 8,
          "response": "You stay quiet about it. When they find the scratch later, they feel you hid it. Trust takes a hit. 💭"
        },
        {
          "text": "Say it was already scratched",
          "outcome": "lie",
          "xp": 3,
          "response": "You blame an old scratch. But they know their bike. Lying about damage breaks trust fast. 💭"
        }
      ],
      "realWorldTip": "When you damage something you borrowed, telling the truth right away keeps friendships strong.",
      "reflectionPrompt": "How would you feel if a friend hid that they damaged your things?",
      "statement": "Found money always belongs to the person who found it, no matter what.",
      "isTruth": false
    },
    {
      "id": "tof_046",
      "title": "The Late Homework Excuse",
      "setting": "home",
      "characters": [
        "parent",
        "teacher"
      ],
      "ageRange": [
        5,
        10
      ],
      "difficulty": 1,
      "theme": "home",
      "growthDimensions": [
        "responsibility",
        "reasoning"
      ],
      "culture": [
        "IN"
      ],
      "tags": [
        "home",
        "India",
        "school",
        "honesty"
      ],
      "situation": "You didn't do your homework because you were playing. Your parent asks if your homework is done before you go out again.",
      "choices": [
        {
          "text": "Admit you haven't done it yet",
          "outcome": "honest",
          "xp": 30,
          "response": "You're honest. Your parent helps you make a plan to finish it first. Truth leads to real help. 🌟"
        },
        {
          "text": "Say you finished it at school",
          "outcome": "lie",
          "xp": 5,
          "response": "You lie to go play. But the unfinished homework shows up tomorrow, and the lie unravels. 💭"
        },
        {
          "text": "Say it's almost done",
          "outcome": "evasive",
          "xp": 8,
          "response": "You stretch the truth. Your parent checks and sees it's barely started. Honesty avoids that. 💭"
        }
      ],
      "realWorldTip": "Being honest about unfinished homework leads to help, not just trouble.",
      "reflectionPrompt": "Why is honesty about responsibilities better than excuses?",
      "statement": "Returning extra change given by mistake is the honest thing to do.",
      "isTruth": true
    },
    {
      "id": "tof_047",
      "title": "The Wrong Line",
      "setting": "school",
      "characters": [
        "teacher",
        "classmates"
      ],
      "ageRange": [
        5,
        10
      ],
      "difficulty": 1,
      "theme": "school",
      "growthDimensions": [
        "fairness",
        "responsibility"
      ],
      "culture": [
        "global"
      ],
      "tags": [
        "school",
        "honesty",
        "fairness",
        "queue"
      ],
      "situation": "You cut ahead in the lunch line when no one was looking. A classmate near the back politely asks the teacher if everyone lined up fairly.",
      "choices": [
        {
          "text": "Admit you cut in and move to the back",
          "outcome": "honest",
          "xp": 30,
          "response": "You own up and go to the back. The teacher and classmates respect your fairness. Honesty restored order! 🌟"
        },
        {
          "text": "Pretend you were always there",
          "outcome": "lie",
          "xp": 3,
          "response": "You deny cutting. But kids around you saw. Lying about a small thing makes it a bigger deal. 💭"
        },
        {
          "text": "Stay quiet and hope no one noticed",
          "outcome": "evasive",
          "xp": 8,
          "response": "You stay silent. But the classmate who waited fairly feels the unfairness. Honesty would fix it. 💭"
        }
      ],
      "realWorldTip": "Admitting you cut in line and fixing it is fairer than pretending you didn't.",
      "reflectionPrompt": "Why does cutting in line feel unfair to those who waited?",
      "statement": "Honesty matters even when absolutely no one is watching.",
      "isTruth": true
    },
    {
      "id": "tof_048",
      "title": "The Copied Essay",
      "setting": "school",
      "characters": [
        "teacher",
        "self"
      ],
      "ageRange": [
        8,
        12
      ],
      "difficulty": 1,
      "theme": "school",
      "growthDimensions": [
        "responsibility",
        "fairness"
      ],
      "culture": [
        "global"
      ],
      "tags": [
        "school",
        "honesty",
        "integrity",
        "writing"
      ],
      "situation": "You copied part of an essay from the internet and submitted it. The teacher praises your 'advanced writing' and asks how you came up with such ideas.",
      "choices": [
        {
          "text": "Admit you copied part of it from online",
          "outcome": "honest",
          "xp": 30,
          "response": "You confess despite the praise. The teacher values your honesty and helps you write your own next time. 🌟"
        },
        {
          "text": "Take the credit and make up an explanation",
          "outcome": "lie",
          "xp": 3,
          "response": "You pretend the ideas are yours. But the teacher could check the source. The praise built on a lie feels hollow. 💭"
        },
        {
          "text": "Mumble that you read a lot",
          "outcome": "evasive",
          "xp": 8,
          "response": "You give a vague answer. The unease of false praise grows. Honesty would clear your conscience. 💭"
        }
      ],
      "realWorldTip": "Admitting you copied, even when being praised for it, is honest and helps you grow as a writer.",
      "reflectionPrompt": "Why does praise feel empty when you didn't really earn it?",
      "statement": "Telling the truth about a mistake makes it easier to fix.",
      "isTruth": true
    },
    {
      "id": "tof_049",
      "title": "The Inked Answers",
      "setting": "school",
      "characters": [
        "teacher",
        "self"
      ],
      "ageRange": [
        8,
        12
      ],
      "difficulty": 1,
      "theme": "school",
      "growthDimensions": [
        "responsibility",
        "fairness"
      ],
      "culture": [
        "IN"
      ],
      "tags": [
        "school",
        "India",
        "exams",
        "honesty"
      ],
      "situation": "You wrote some answers on your hand before a test but didn't end up using them. The teacher notices ink on your hand and asks about it.",
      "choices": [
        {
          "text": "Admit you wrote answers but chose not to use them",
          "outcome": "honest",
          "xp": 30,
          "response": "You're fully honest. The teacher respects that you resisted and chose integrity. A real lesson learned. 🌟"
        },
        {
          "text": "Say it's just a random doodle",
          "outcome": "lie",
          "xp": 3,
          "response": "You lie about the ink. But the teacher recognises answers. The lie makes a small mistake much bigger. 💭"
        },
        {
          "text": "Say you washed it off and don't know",
          "outcome": "evasive",
          "xp": 8,
          "response": "You dodge it. The teacher isn't convinced. Honesty about your choice would have been respected. 💭"
        }
      ],
      "realWorldTip": "Even if you prepared to cheat but didn't, being honest about it shows real growth.",
      "reflectionPrompt": "Why does admitting a temptation you resisted take courage?",
      "statement": "A small lie is harmless and doesn't cause any problems.",
      "isTruth": false
    },
    {
      "id": "tof_050",
      "title": "The Broken Phone Screen",
      "setting": "home",
      "characters": [
        "parent"
      ],
      "ageRange": [
        8,
        12
      ],
      "difficulty": 1,
      "theme": "home",
      "growthDimensions": [
        "responsibility"
      ],
      "culture": [
        "US"
      ],
      "tags": [
        "home",
        "US",
        "technology",
        "honesty"
      ],
      "situation": "You dropped your parent's phone and cracked the screen while using it without permission. They ask if you know how the screen got cracked.",
      "choices": [
        {
          "text": "Admit you used it and dropped it",
          "outcome": "honest",
          "xp": 30,
          "response": "You own up fully. Your parent is disappointed about the screen but proud of your honesty. Trust holds. 🌟"
        },
        {
          "text": "Say it must have cracked in their pocket",
          "outcome": "lie",
          "xp": 3,
          "response": "You invent a story. But fresh cracks don't happen in pockets. The lie damages trust more than the screen. 💭"
        },
        {
          "text": "Say you found it like that",
          "outcome": "evasive",
          "xp": 8,
          "response": "You distance yourself from it. Your parent suspects more. Honesty would have hurt less. 💭"
        }
      ],
      "realWorldTip": "Admitting you broke something expensive is hard, but honesty protects the trust that matters most.",
      "reflectionPrompt": "Why might a parent care more about honesty than about a broken screen?",
      "statement": "When you own up to something wrong, people usually respect you more.",
      "isTruth": true
    },
    {
      "id": "tof_051",
      "title": "The Group Chat Rumour",
      "setting": "school",
      "characters": [
        "classmates",
        "friend"
      ],
      "ageRange": [
        8,
        12
      ],
      "difficulty": 1,
      "theme": "school",
      "growthDimensions": [
        "fairness",
        "reasoning"
      ],
      "culture": [
        "IN"
      ],
      "tags": [
        "school",
        "India",
        "online",
        "honesty"
      ],
      "situation": "You started a rumour in the class chat that turned out to be false and hurt a classmate. People ask who started it.",
      "choices": [
        {
          "text": "Admit you started it and apologise",
          "outcome": "honest",
          "xp": 30,
          "response": "You own your mistake and apologise to the classmate. It's hard, but it begins to repair the harm. 🌟"
        },
        {
          "text": "Stay quiet and let it blow over",
          "outcome": "evasive",
          "xp": 8,
          "response": "You hope it fades. But the classmate stays hurt, not knowing who to forgive. Silence doesn't heal it. 💭"
        },
        {
          "text": "Blame someone else for starting it",
          "outcome": "lie",
          "xp": 3,
          "response": "You point at another person. Now two people are hurt by your choices. Lies multiply the damage. 💭"
        }
      ],
      "realWorldTip": "Owning up to spreading something false, and apologising, is the only way to truly make it right.",
      "reflectionPrompt": "How can admitting a mistake help heal the harm it caused?",
      "statement": "If nobody finds out about a mistake, it doesn't matter at all.",
      "isTruth": false
    },
    {
      "id": "tof_052",
      "title": "The Unauthorised Purchase",
      "setting": "home",
      "characters": [
        "parent"
      ],
      "ageRange": [
        8,
        12
      ],
      "difficulty": 1,
      "theme": "home",
      "growthDimensions": [
        "responsibility",
        "reasoning"
      ],
      "culture": [
        "global"
      ],
      "tags": [
        "home",
        "money",
        "online",
        "honesty"
      ],
      "situation": "You bought something in a game using your parent's saved card without asking. They notice the charge and ask if you know anything about it.",
      "choices": [
        {
          "text": "Admit you made the purchase without asking",
          "outcome": "honest",
          "xp": 30,
          "response": "You confess honestly. Your parent talks with you about asking first, and you offer to repay it. Trust stays. 🌟"
        },
        {
          "text": "Say it must be a mistake by the company",
          "outcome": "lie",
          "xp": 3,
          "response": "You blame the company. But the charge matches your game. The lie turns one mistake into a bigger problem. 💭"
        },
        {
          "text": "Say you have no idea what it is",
          "outcome": "evasive",
          "xp": 8,
          "response": "You play dumb. Your parent traces it to your game anyway. Honesty would have gone better. 💭"
        }
      ],
      "realWorldTip": "Owning up to spending money without permission is honest, and offering to make it right shows maturity.",
      "reflectionPrompt": "Why is honesty about money especially important for trust?",
      "statement": "Saying sorry and telling the truth helps rebuild trust.",
      "isTruth": true
    },
    {
      "id": "tof_053",
      "title": "The Skipped Class",
      "setting": "school",
      "characters": [
        "parent",
        "teacher"
      ],
      "ageRange": [
        8,
        12
      ],
      "difficulty": 1,
      "theme": "school",
      "growthDimensions": [
        "responsibility"
      ],
      "culture": [
        "IN"
      ],
      "tags": [
        "school",
        "India",
        "honesty",
        "responsibility"
      ],
      "situation": "You skipped an extra tuition class to hang out with friends. Your parent asks how the class went today.",
      "choices": [
        {
          "text": "Admit you skipped it to be with friends",
          "outcome": "honest",
          "xp": 30,
          "response": "You tell the truth even though it's awkward. Your parent appreciates the honesty and you talk it through. 🌟"
        },
        {
          "text": "Describe a class that never happened",
          "outcome": "lie",
          "xp": 3,
          "response": "You invent details. But the tutor mentions your absence later. The made-up class falls apart. 💭"
        },
        {
          "text": "Say it was fine and change the subject",
          "outcome": "evasive",
          "xp": 8,
          "response": "You dodge it. The dodge feels heavier as the truth waits to come out. Honesty would lighten it. 💭"
        }
      ],
      "realWorldTip": "Being honest about skipping something leads to a real conversation, not a tangle of lies.",
      "reflectionPrompt": "Why does one lie often lead to needing more lies?",
      "statement": "Lying once usually makes everything easier in the end.",
      "isTruth": false
    },
    {
      "id": "tof_054",
      "title": "The Accidental Damage",
      "setting": "park",
      "characters": [
        "neighbour",
        "parent"
      ],
      "ageRange": [
        8,
        12
      ],
      "difficulty": 1,
      "theme": "park",
      "growthDimensions": [
        "responsibility",
        "fairness"
      ],
      "culture": [
        "US"
      ],
      "tags": [
        "park",
        "US",
        "honesty",
        "responsibility"
      ],
      "situation": "You kicked a ball that broke a neighbour's window. No one saw. You could walk away, but the neighbour will wonder what happened.",
      "choices": [
        {
          "text": "Tell the neighbour and your parent the truth",
          "outcome": "honest",
          "xp": 30,
          "response": "You own up despite no one seeing. The neighbour respects your honesty, and your parent helps fix it. 🌟"
        },
        {
          "text": "Walk away and say nothing",
          "outcome": "evasive",
          "xp": 5,
          "response": "You leave quietly. The neighbour is left confused and out a window. Honesty would have been right. 💭"
        },
        {
          "text": "Say you saw someone else do it",
          "outcome": "lie",
          "xp": 3,
          "response": "You invent a culprit. If it's checked, the lie collapses, and an innocent person could be blamed. 💭"
        }
      ],
      "realWorldTip": "Telling the truth even when no one saw you is one of the hardest and most honourable things to do.",
      "reflectionPrompt": "Why does honesty matter even when no one would ever know?",
      "statement": "Honest people find it easier to build strong friendships.",
      "isTruth": true
    },
    {
      "id": "tof_055",
      "title": "The Hidden Report Card",
      "setting": "home",
      "characters": [
        "parents"
      ],
      "ageRange": [
        8,
        12
      ],
      "difficulty": 1,
      "theme": "home",
      "growthDimensions": [
        "responsibility",
        "reasoning"
      ],
      "culture": [
        "IN"
      ],
      "tags": [
        "home",
        "India",
        "school",
        "honesty"
      ],
      "situation": "Your report card had some low marks, so you hid it. Your parents ask if report cards have come out yet.",
      "choices": [
        {
          "text": "Show them the report card honestly",
          "outcome": "honest",
          "xp": 30,
          "response": "You bring it out despite your fear. Your parents focus on helping you improve, glad you trusted them. 🌟"
        },
        {
          "text": "Say they haven't been given out yet",
          "outcome": "lie",
          "xp": 5,
          "response": "You lie to delay. But the school messages your parents, and now there's a lie alongside low marks. 💭"
        },
        {
          "text": "Say you might have lost it",
          "outcome": "evasive",
          "xp": 8,
          "response": "You stall vaguely. Your parents get suspicious. Honesty about the marks would have been simpler. 💭"
        }
      ],
      "realWorldTip": "Showing a disappointing report card honestly lets your family support you, instead of hiding alone.",
      "reflectionPrompt": "Why might hiding bad news feel worse than sharing it?",
      "statement": "Blaming someone else for your mistake is a kind thing to do.",
      "isTruth": false
    },
    {
      "id": "tof_056",
      "title": "The Friend's Gift",
      "setting": "home",
      "characters": [
        "friend",
        "parent"
      ],
      "ageRange": [
        4,
        9
      ],
      "difficulty": 2,
      "theme": "home",
      "growthDimensions": [
        "empathy",
        "reasoning"
      ],
      "culture": [
        "IN"
      ],
      "tags": [
        "home",
        "India",
        "honesty",
        "kindness"
      ],
      "situation": "Your friend gives you a birthday present they made themselves. You don't really like it, but they're watching excitedly to see your reaction.",
      "choices": [
        {
          "text": "Thank them warmly for making it for you",
          "outcome": "honest",
          "xp": 30,
          "response": "You focus on the kind effort, which is genuinely true! Your friend beams. Honest AND kind. 🌟"
        },
        {
          "text": "Say it's the best gift you've ever gotten",
          "outcome": "lie",
          "xp": 8,
          "response": "You exaggerate. It's meant kindly, but big lies can lead to awkward moments later. The kind truth was enough. 💭"
        },
        {
          "text": "Make a face and say you don't like it",
          "outcome": "blunt",
          "xp": 10,
          "response": "You're honest but harsh. Your friend's face falls. There was a kinder, still-honest way to respond. 💭"
        }
      ],
      "realWorldTip": "You can be honest and kind by thanking someone for their effort and thought, which is always true.",
      "reflectionPrompt": "How can you be truthful without hurting someone's feelings?",
      "statement": "Being honest about spending money without permission is better than making up a story.",
      "isTruth": true
    },
    {
      "id": "tof_057",
      "title": "The Lunch Trade",
      "setting": "school",
      "characters": [
        "classmate",
        "teacher"
      ],
      "ageRange": [
        4,
        9
      ],
      "difficulty": 2,
      "theme": "school",
      "growthDimensions": [
        "fairness",
        "responsibility"
      ],
      "culture": [
        "US"
      ],
      "tags": [
        "school",
        "US",
        "honesty",
        "fairness"
      ],
      "situation": "You traded lunches with a classmate but then told them your sandwich had something it didn't, to make the trade better for you. They seem happy but you tricked them a little.",
      "choices": [
        {
          "text": "Tell them the truth about the trade",
          "outcome": "honest",
          "xp": 30,
          "response": "You come clean about the trade. They appreciate your honesty, and you trade fairly. Trust kept! 🌟"
        },
        {
          "text": "Say nothing — the trade is done",
          "outcome": "evasive",
          "xp": 10,
          "response": "You let the unfair trade stand. But you feel a little guilty, and they'd feel tricked if they knew. 💭"
        },
        {
          "text": "Insist your sandwich was amazing",
          "outcome": "lie",
          "xp": 5,
          "response": "You double down on the trick. When they realise, they won't trust trading with you again. 💭"
        }
      ],
      "realWorldTip": "Being honest in trades and deals, even small ones, keeps friends trusting you.",
      "reflectionPrompt": "How would you feel if you found out a trade was unfair?",
      "statement": "Writing a fake online review is minor and doesn't really affect anyone.",
      "isTruth": false
    },
    {
      "id": "tof_058",
      "title": "The Grandparent's Question",
      "setting": "home",
      "characters": [
        "grandfather"
      ],
      "ageRange": [
        4,
        9
      ],
      "difficulty": 2,
      "theme": "home",
      "growthDimensions": [
        "empathy",
        "reasoning"
      ],
      "culture": [
        "IN"
      ],
      "tags": [
        "home",
        "India",
        "honesty",
        "family"
      ],
      "situation": "Your grandfather cooked a special dish and asks if you liked it. You didn't really enjoy the taste, but he made it with so much love and is waiting hopefully.",
      "choices": [
        {
          "text": "Thank him for cooking with love, mention what you did like",
          "outcome": "honest",
          "xp": 30,
          "response": "You find something true and kind to say about his effort. He's touched, and you weren't dishonest. 🌟"
        },
        {
          "text": "Say it was the most delicious thing ever",
          "outcome": "lie",
          "xp": 8,
          "response": "You overdo the praise. He might make it often now! A gentler truth would have been wiser. 💭"
        },
        {
          "text": "Say you didn't like it at all",
          "outcome": "blunt",
          "xp": 10,
          "response": "You're honest but it stings. His face falls after all his effort. Kindness and truth can go together. 💭"
        }
      ],
      "realWorldTip": "When someone makes something with love, you can honestly thank them for the effort and care.",
      "reflectionPrompt": "Why does the effort someone puts in matter, even if you don't love the result?",
      "statement": "An honest mistake handled openly is almost always treated better than a cover-up.",
      "isTruth": true
    },
    {
      "id": "tof_059",
      "title": "The Test Mix-Up",
      "setting": "school",
      "characters": [
        "teacher",
        "classmate"
      ],
      "ageRange": [
        4,
        9
      ],
      "difficulty": 2,
      "theme": "school",
      "growthDimensions": [
        "fairness",
        "responsibility"
      ],
      "culture": [
        "global"
      ],
      "tags": [
        "school",
        "honesty",
        "fairness",
        "exams"
      ],
      "situation": "The teacher accidentally gave you a classmate's test by mistake, and it has better answers than yours. You could quietly copy a few before handing it back.",
      "choices": [
        {
          "text": "Hand it back right away without copying",
          "outcome": "honest",
          "xp": 30,
          "response": "You return it untouched. The teacher thanks you, and you keep your integrity. Truly honest! 🌟"
        },
        {
          "text": "Copy a couple of answers first",
          "outcome": "lie",
          "xp": 5,
          "response": "You sneak a few answers. But those marks aren't yours, and you'd know it every time you saw the grade. 💭"
        },
        {
          "text": "Keep it and say nothing",
          "outcome": "evasive",
          "xp": 8,
          "response": "You hold onto it quietly. But it's not yours, and your classmate needs it. Returning it is right. 💭"
        }
      ],
      "realWorldTip": "Returning something that isn't yours without taking advantage shows real honesty.",
      "reflectionPrompt": "Why is it tempting to take an unfair advantage, and why is resisting it worth it?",
      "statement": "Signing a classmate in as present when they're absent is a small harmless favour.",
      "isTruth": false
    },
    {
      "id": "tof_060",
      "title": "The Forgotten Playtime",
      "setting": "home",
      "characters": [
        "younger sibling"
      ],
      "ageRange": [
        4,
        9
      ],
      "difficulty": 2,
      "theme": "home",
      "growthDimensions": [
        "responsibility",
        "empathy"
      ],
      "culture": [
        "IN"
      ],
      "tags": [
        "home",
        "India",
        "honesty",
        "promises"
      ],
      "situation": "You promised to play with your younger sibling but forgot and played with friends instead. Your sibling asks why you didn't come like you said.",
      "choices": [
        {
          "text": "Admit you forgot and say you're sorry",
          "outcome": "honest",
          "xp": 30,
          "response": "You own up honestly and apologise. Your sibling forgives you, and you make plans to play tomorrow. 🌟"
        },
        {
          "text": "Say you were busy with important things",
          "outcome": "lie",
          "xp": 5,
          "response": "You make an excuse. But your sibling saw you playing with friends. The excuse hurts more than forgetting. 💭"
        },
        {
          "text": "Say you never really promised",
          "outcome": "lie",
          "xp": 3,
          "response": "You deny the promise. Your sibling feels confused and hurt, doubting their own memory. That's unfair. 💭"
        }
      ],
      "realWorldTip": "Admitting you forgot a promise and apologising is far kinder than making excuses.",
      "reflectionPrompt": "How does it feel when someone forgets a promise but won't admit it?",
      "statement": "Honest test scores, even lower ones, are more helpful than dishonest high ones.",
      "isTruth": true
    },
    {
      "id": "tof_061",
      "title": "The Winning Score",
      "setting": "park",
      "characters": [
        "friends",
        "self"
      ],
      "ageRange": [
        4,
        9
      ],
      "difficulty": 2,
      "theme": "park",
      "growthDimensions": [
        "fairness",
        "reasoning"
      ],
      "culture": [
        "US"
      ],
      "tags": [
        "park",
        "US",
        "honesty",
        "games"
      ],
      "situation": "You're keeping score in a game and you're losing. You could quietly give yourself an extra point and probably no one would notice.",
      "choices": [
        {
          "text": "Keep the score honestly, even if you lose",
          "outcome": "honest",
          "xp": 30,
          "response": "You report the real score. You might lose, but everyone trusts you to keep score fairly. That's worth more! 🌟"
        },
        {
          "text": "Add a secret point for yourself",
          "outcome": "lie",
          "xp": 5,
          "response": "You sneak a point. But if anyone notices, they'll never trust your scorekeeping again. 💭"
        },
        {
          "text": "Round up your score a little",
          "outcome": "lie",
          "xp": 8,
          "response": "You fudge it slightly. Even a small cheat is still cheating, and the win wouldn't feel real. 💭"
        }
      ],
      "realWorldTip": "Keeping score honestly, even when you're losing, makes you someone others can always trust.",
      "reflectionPrompt": "Why does an unfair win not feel as good as a fair loss?",
      "statement": "Getting praise for work you didn't do feels just as satisfying as earning it.",
      "isTruth": false
    },
    {
      "id": "tof_062",
      "title": "The Hidden Mess",
      "setting": "home",
      "characters": [
        "parent"
      ],
      "ageRange": [
        4,
        9
      ],
      "difficulty": 2,
      "theme": "home",
      "growthDimensions": [
        "responsibility"
      ],
      "culture": [
        "IN"
      ],
      "tags": [
        "home",
        "India",
        "honesty",
        "responsibility"
      ],
      "situation": "You made a mess building a fort and shoved everything under the bed instead of tidying. Your parent asks if you cleaned your room.",
      "choices": [
        {
          "text": "Admit you hid the mess and offer to tidy properly",
          "outcome": "honest",
          "xp": 30,
          "response": "You're honest about hiding it and clean up properly. Your parent appreciates the truth. 🌟"
        },
        {
          "text": "Say yes, the room is clean",
          "outcome": "lie",
          "xp": 5,
          "response": "You claim it's clean. But the hidden mess is found later. Now there's a lie plus an untidy room. 💭"
        },
        {
          "text": "Say you're almost done",
          "outcome": "evasive",
          "xp": 8,
          "response": "You stretch the truth. Your parent checks and sees the shoved-away mess. Honesty was simpler. 💭"
        }
      ],
      "realWorldTip": "Admitting you hid a mess instead of cleaning it is more honest than claiming it's done.",
      "reflectionPrompt": "Why does hiding a mess usually make it worse later?",
      "statement": "Admitting you were late and why usually leads to a better conversation.",
      "isTruth": true
    },
    {
      "id": "tof_063",
      "title": "The Accidental Trip",
      "setting": "school",
      "characters": [
        "classmate",
        "teacher"
      ],
      "ageRange": [
        4,
        9
      ],
      "difficulty": 2,
      "theme": "school",
      "growthDimensions": [
        "responsibility",
        "empathy"
      ],
      "culture": [
        "global"
      ],
      "tags": [
        "school",
        "honesty",
        "fairness",
        "accidents"
      ],
      "situation": "You accidentally tripped a classmate while running, and they dropped their art project. It looks like you did it on purpose, but it was truly an accident. The teacher asks what happened.",
      "choices": [
        {
          "text": "Explain it was an accident and help them fix it",
          "outcome": "honest",
          "xp": 30,
          "response": "You honestly explain and help repair the project. The classmate understands, and the teacher sees your good heart. 🌟"
        },
        {
          "text": "Say you didn't touch them",
          "outcome": "lie",
          "xp": 3,
          "response": "You deny it. But others saw the trip. Denying an accident makes you look like you meant it. 💭"
        },
        {
          "text": "Stay silent and let them assume",
          "outcome": "evasive",
          "xp": 8,
          "response": "You say nothing. The classmate thinks you did it on purpose. The truth would have cleared things up. 💭"
        }
      ],
      "realWorldTip": "Explaining honestly that something was an accident, and helping fix it, clears up misunderstandings.",
      "reflectionPrompt": "Why is it important to explain when something was truly an accident?",
      "statement": "A lie that delays a problem always makes that problem smaller over time.",
      "isTruth": false
    },
    {
      "id": "tof_064",
      "title": "The Extra Pocket Money",
      "setting": "home",
      "characters": [
        "parent"
      ],
      "ageRange": [
        4,
        9
      ],
      "difficulty": 2,
      "theme": "home",
      "growthDimensions": [
        "fairness",
        "responsibility"
      ],
      "culture": [
        "IN"
      ],
      "tags": [
        "home",
        "India",
        "money",
        "honesty"
      ],
      "situation": "Your parent gave you pocket money and accidentally counted out extra. You notice the extra amount. They didn't realise.",
      "choices": [
        {
          "text": "Point out the extra money right away",
          "outcome": "honest",
          "xp": 30,
          "response": "You return the extra honestly. Your parent is impressed and trusts you even more with money. 🌟"
        },
        {
          "text": "Keep the extra quietly",
          "outcome": "evasive",
          "xp": 5,
          "response": "You pocket it silently. But it wasn't yours to keep, and the guilt lingers. Honesty feels better. 💭"
        },
        {
          "text": "Say your parent gave it on purpose",
          "outcome": "lie",
          "xp": 3,
          "response": "You pretend it was intended. But your parent remembers counting. The lie about money breaks trust. 💭"
        }
      ],
      "realWorldTip": "Pointing out extra money you were given by mistake builds deep trust.",
      "reflectionPrompt": "Why does honesty about money matter so much for trust?",
      "statement": "Honest records, even when they show a mistake, are fairer for everyone.",
      "isTruth": true
    },
    {
      "id": "tof_065",
      "title": "The Group Story",
      "setting": "school",
      "characters": [
        "classmates",
        "teacher"
      ],
      "ageRange": [
        4,
        9
      ],
      "difficulty": 2,
      "theme": "school",
      "growthDimensions": [
        "responsibility",
        "reasoning"
      ],
      "culture": [
        "US"
      ],
      "tags": [
        "school",
        "US",
        "honesty",
        "peer pressure"
      ],
      "situation": "Your friends made up a story to tell the teacher about why your group's project is late, and they want you to back it up. The real reason is you all forgot.",
      "choices": [
        {
          "text": "Tell the teacher the honest reason",
          "outcome": "honest",
          "xp": 30,
          "response": "You tell the truth that you all forgot. The teacher appreciates honesty and gives a fair extension. 🌟"
        },
        {
          "text": "Go along with your friends' made-up story",
          "outcome": "lie",
          "xp": 5,
          "response": "You support the false story. But made-up excuses can unravel, and then everyone's in deeper trouble. 💭"
        },
        {
          "text": "Stay quiet and let friends do the talking",
          "outcome": "evasive",
          "xp": 8,
          "response": "You don't lie, but you don't tell the truth either. The false story stands. Honesty would be cleaner. 💭"
        }
      ],
      "realWorldTip": "Telling the honest reason, even when friends want to make one up, often works out better.",
      "reflectionPrompt": "Why can group lies be even trickier than lies you tell alone?",
      "statement": "If a teacher makes a marking mistake in your favour, you don't need to say anything.",
      "isTruth": false
    },
    {
      "id": "tof_066",
      "title": "The Sibling's Snack",
      "setting": "home",
      "characters": [
        "sibling",
        "parent"
      ],
      "ageRange": [
        4,
        9
      ],
      "difficulty": 2,
      "theme": "home",
      "growthDimensions": [
        "fairness",
        "responsibility"
      ],
      "culture": [
        "IN"
      ],
      "tags": [
        "home",
        "India",
        "honesty",
        "family"
      ],
      "situation": "You ate your sibling's special snack that was saved for them. They're upset and looking for it, and your parent asks if you know where it went.",
      "choices": [
        {
          "text": "Admit you ate it and apologise",
          "outcome": "honest",
          "xp": 30,
          "response": "You own up and say sorry to your sibling. You offer to share yours. Honesty mends the moment. 🌟"
        },
        {
          "text": "Say you didn't see it",
          "outcome": "lie",
          "xp": 3,
          "response": "You deny it. Your sibling stays upset, blaming themselves for 'losing' it. That's unfair to them. 💭"
        },
        {
          "text": "Suggest maybe they ate it and forgot",
          "outcome": "lie",
          "xp": 3,
          "response": "You make them doubt their own memory. That's not fair, and the truth would come out anyway. 💭"
        }
      ],
      "realWorldTip": "Admitting you took someone's snack is fairer than letting them think they lost it.",
      "reflectionPrompt": "Why is making someone doubt their memory an unkind thing to do?",
      "statement": "Being honest about not liking a gift can still be done kindly.",
      "isTruth": true
    },
    {
      "id": "tof_067",
      "title": "The Found Toy",
      "setting": "park",
      "characters": [
        "younger child",
        "parent"
      ],
      "ageRange": [
        4,
        9
      ],
      "difficulty": 2,
      "theme": "park",
      "growthDimensions": [
        "fairness",
        "empathy"
      ],
      "culture": [
        "global"
      ],
      "tags": [
        "park",
        "honesty",
        "kindness",
        "fairness"
      ],
      "situation": "You found a cool toy at the park that a younger child clearly dropped — you saw it fall from their bag. You really want to keep it, and they haven't noticed yet.",
      "choices": [
        {
          "text": "Return it to the child you saw drop it",
          "outcome": "honest",
          "xp": 30,
          "response": "You give it back. The little one is overjoyed, and their parent thanks you warmly. Honesty and kindness! 🌟"
        },
        {
          "text": "Keep it since you found it",
          "outcome": "lie",
          "xp": 5,
          "response": "You keep it quietly. But you saw whose it was, so it's not really 'finders keepers.' The child cries looking for it. 💭"
        },
        {
          "text": "Put it in your bag to decide later",
          "outcome": "evasive",
          "xp": 8,
          "response": "You stash it. But you know who dropped it. Holding onto it doesn't make it yours. 💭"
        }
      ],
      "realWorldTip": "If you saw who dropped something, the honest thing is to return it, not keep it.",
      "reflectionPrompt": "How is keeping something you saw someone drop different from finding something truly lost?",
      "statement": "Pointing out a billing error that saved you money isn't really your responsibility.",
      "isTruth": false
    },
    {
      "id": "tof_068",
      "title": "The Homework Helper",
      "setting": "school",
      "characters": [
        "friend",
        "teacher"
      ],
      "ageRange": [
        4,
        9
      ],
      "difficulty": 2,
      "theme": "school",
      "growthDimensions": [
        "fairness",
        "responsibility"
      ],
      "culture": [
        "IN"
      ],
      "tags": [
        "school",
        "India",
        "honesty",
        "friends"
      ],
      "situation": "Your friend did your homework for you as a favour. The teacher praises your 'neat work' and asks if you did it all yourself.",
      "choices": [
        {
          "text": "Admit your friend helped a lot",
          "outcome": "honest",
          "xp": 30,
          "response": "You're honest about the help. The teacher appreciates it and makes sure you understand the work yourself. 🌟"
        },
        {
          "text": "Take the credit fully",
          "outcome": "lie",
          "xp": 5,
          "response": "You claim it all. But you can't answer the teacher's follow-up questions. The truth shows anyway. 💭"
        },
        {
          "text": "Say you worked on it together",
          "outcome": "evasive",
          "xp": 12,
          "response": "A half-truth — they did it, you watched. Being fully honest about the help would be cleaner. 💭"
        }
      ],
      "realWorldTip": "Being honest about getting help means you actually learn, instead of just looking good.",
      "reflectionPrompt": "Why is it important that YOU understand your own work?",
      "statement": "Honesty in small money matters builds trust worth far more than the amount.",
      "isTruth": true
    },
    {
      "id": "tof_069",
      "title": "The TV Remote Fib",
      "setting": "home",
      "characters": [
        "parent",
        "sibling"
      ],
      "ageRange": [
        4,
        9
      ],
      "difficulty": 2,
      "theme": "home",
      "growthDimensions": [
        "responsibility",
        "fairness"
      ],
      "culture": [
        "US"
      ],
      "tags": [
        "home",
        "US",
        "honesty",
        "family"
      ],
      "situation": "You hid the TV remote so your sibling couldn't change the channel, then said you hadn't seen it. Your parent asks the family where the remote went.",
      "choices": [
        {
          "text": "Admit you hid it and give it back",
          "outcome": "honest",
          "xp": 30,
          "response": "You own up and return it. Your parent appreciates the honesty, and you and your sibling sort out fair turns. 🌟"
        },
        {
          "text": "Keep insisting you don't know",
          "outcome": "lie",
          "xp": 3,
          "response": "You keep up the fib. But it's found where you hid it. The lie about a small thing causes big distrust. 💭"
        },
        {
          "text": "Say your sibling probably lost it",
          "outcome": "lie",
          "xp": 3,
          "response": "You blame your sibling. Now they're scolded for something you did. That's unfair and untrue. 💭"
        }
      ],
      "realWorldTip": "Admitting you hid something is honest; blaming a sibling for your action is not.",
      "reflectionPrompt": "Why does even a small lie sometimes cause a big loss of trust?",
      "statement": "Saying you understand something you don't is helpful to everyone in class.",
      "isTruth": false
    },
    {
      "id": "tof_070",
      "title": "The Wrong Grade",
      "setting": "school",
      "characters": [
        "teacher"
      ],
      "ageRange": [
        5,
        10
      ],
      "difficulty": 2,
      "theme": "school",
      "growthDimensions": [
        "fairness",
        "responsibility"
      ],
      "culture": [
        "global"
      ],
      "tags": [
        "school",
        "honesty",
        "exams",
        "fairness"
      ],
      "situation": "The teacher accidentally marked a wrong answer as correct, giving you a higher grade than you earned. You notice, but the teacher doesn't.",
      "choices": [
        {
          "text": "Point out the marking mistake honestly",
          "outcome": "honest",
          "xp": 30,
          "response": "You tell the teacher about the error, even though it lowers your grade. They're impressed by your integrity. 🌟"
        },
        {
          "text": "Say nothing and keep the higher grade",
          "outcome": "evasive",
          "xp": 8,
          "response": "You keep the extra marks quietly. But the grade isn't truly yours, and you know it. 💭"
        },
        {
          "text": "Hope the teacher doesn't notice",
          "outcome": "evasive",
          "xp": 5,
          "response": "You stay silent, hoping it slides. The unearned grade sits uneasily with you. Honesty would feel right. 💭"
        }
      ],
      "realWorldTip": "Pointing out a grading mistake that helped you, even though it lowers your score, is true honesty.",
      "reflectionPrompt": "Why might someone keep quiet about a mistake in their favour? Why is speaking up better?",
      "statement": "Admitting you were wrong in front of others is a sign of real maturity.",
      "isTruth": true
    },
    {
      "id": "tof_071",
      "title": "The Blamed Classmate",
      "setting": "school",
      "characters": [
        "teacher",
        "classmate"
      ],
      "ageRange": [
        5,
        10
      ],
      "difficulty": 2,
      "theme": "school",
      "growthDimensions": [
        "fairness",
        "responsibility"
      ],
      "culture": [
        "IN"
      ],
      "tags": [
        "school",
        "India",
        "honesty",
        "courage"
      ],
      "situation": "You accidentally broke the classroom's pencil sharpener. The teacher is blaming a classmate who was nearby. Only you know it was actually you.",
      "choices": [
        {
          "text": "Speak up that it was you, not them",
          "outcome": "honest",
          "xp": 30,
          "response": "You clear the innocent classmate by telling the truth. Brave and fair! The teacher respects your courage. 🌟"
        },
        {
          "text": "Stay quiet and let them take the blame",
          "outcome": "evasive",
          "xp": 5,
          "response": "You stay silent while someone else is wrongly blamed. The unfairness sits heavily on you. 💭"
        },
        {
          "text": "Agree that the classmate probably did it",
          "outcome": "lie",
          "xp": 3,
          "response": "You let them be blamed and even add to it. Now an innocent person is punished for what you did. 💭"
        }
      ],
      "realWorldTip": "Speaking up when someone else is wrongly blamed for what you did is true courage.",
      "reflectionPrompt": "How would it feel to be punished for something you didn't do?",
      "statement": "Sharing someone else's password with their verbal approval is always safe and honest.",
      "isTruth": false
    },
    {
      "id": "tof_072",
      "title": "The Secret Snack Run",
      "setting": "home",
      "characters": [
        "parent",
        "sibling"
      ],
      "ageRange": [
        5,
        10
      ],
      "difficulty": 2,
      "theme": "home",
      "growthDimensions": [
        "responsibility"
      ],
      "culture": [
        "US"
      ],
      "tags": [
        "home",
        "US",
        "honesty",
        "rules"
      ],
      "situation": "You snuck cookies before dinner and gave one to your sibling too, telling them not to tell. Now your parent asks if anyone has been in the cookie jar.",
      "choices": [
        {
          "text": "Admit you both had cookies",
          "outcome": "honest",
          "xp": 30,
          "response": "You tell the truth for both of you. Your parent values the honesty over the rule-break. Trust intact! 🌟"
        },
        {
          "text": "Deny it and hope your sibling stays quiet",
          "outcome": "lie",
          "xp": 3,
          "response": "You deny it and drag your sibling into the lie. Now you've made them lie too. That's a lot to carry. 💭"
        },
        {
          "text": "Blame your sibling alone",
          "outcome": "lie",
          "xp": 3,
          "response": "You pin it on your sibling, even though you started it. That's unfair, and they'll feel betrayed. 💭"
        }
      ],
      "realWorldTip": "Owning up to a rule-break is honest; pulling someone else into a lie makes it worse.",
      "reflectionPrompt": "Why is it unfair to ask someone else to lie for you?",
      "statement": "Being honest about a bad grade helps you get real support to improve.",
      "isTruth": true
    },
    {
      "id": "tof_073",
      "title": "The Quiz Whisper",
      "setting": "school",
      "characters": [
        "friend",
        "teacher"
      ],
      "ageRange": [
        5,
        10
      ],
      "difficulty": 2,
      "theme": "school",
      "growthDimensions": [
        "fairness",
        "responsibility"
      ],
      "culture": [
        "IN"
      ],
      "tags": [
        "school",
        "India",
        "honesty",
        "exams"
      ],
      "situation": "During a quiz, a friend quietly told you an answer without you asking. You used it. After, the teacher asks if anyone shared answers.",
      "choices": [
        {
          "text": "Admit you heard and used an answer",
          "outcome": "honest",
          "xp": 30,
          "response": "You own up honestly, even though you didn't start it. The teacher respects your integrity. 🌟"
        },
        {
          "text": "Stay quiet since you didn't ask for it",
          "outcome": "evasive",
          "xp": 8,
          "response": "You reason it wasn't your fault. But you did use it. Full honesty would sit better with you. 💭"
        },
        {
          "text": "Deny hearing anything",
          "outcome": "lie",
          "xp": 3,
          "response": "You deny it. But your answer matches your friend's. The lie risks getting you both in deeper. 💭"
        }
      ],
      "realWorldTip": "Even if you didn't ask for help, being honest about using it shows real integrity.",
      "reflectionPrompt": "Is using an answer you didn't ask for still unfair? Why?",
      "statement": "Pretending you finished homework when you haven't will always work out fine.",
      "isTruth": false
    },
    {
      "id": "tof_074",
      "title": "The Damaged Library Book",
      "setting": "home",
      "characters": [
        "parent",
        "librarian"
      ],
      "ageRange": [
        5,
        10
      ],
      "difficulty": 2,
      "theme": "home",
      "growthDimensions": [
        "responsibility",
        "reasoning"
      ],
      "culture": [
        "global"
      ],
      "tags": [
        "home",
        "honesty",
        "books",
        "responsibility"
      ],
      "situation": "Your little sibling scribbled in your library book, but you were supposed to be watching them. The librarian asks how the book got damaged.",
      "choices": [
        {
          "text": "Explain honestly what happened and take responsibility",
          "outcome": "honest",
          "xp": 30,
          "response": "You tell the truth and accept responsibility for not watching closely. The librarian appreciates your honesty. 🌟"
        },
        {
          "text": "Blame your sibling entirely",
          "outcome": "lie",
          "xp": 8,
          "response": "You pin it all on your toddler sibling. But you were in charge. Taking some responsibility is fairer. 💭"
        },
        {
          "text": "Say it came that way from the library",
          "outcome": "lie",
          "xp": 3,
          "response": "You claim it was already damaged. But the records show otherwise. The lie creates a bigger problem. 💭"
        }
      ],
      "realWorldTip": "Taking responsibility for what you were in charge of, even a sibling's mistake, is honest and mature.",
      "reflectionPrompt": "What does it mean to take responsibility for something you were supposed to watch?",
      "statement": "Admitting you copied one answer is braver than pretending you didn't.",
      "isTruth": true
    },
    {
      "id": "tof_075",
      "title": "The Game Cheating",
      "setting": "park",
      "characters": [
        "friends"
      ],
      "ageRange": [
        5,
        10
      ],
      "difficulty": 2,
      "theme": "park",
      "growthDimensions": [
        "fairness",
        "reasoning"
      ],
      "culture": [
        "IN"
      ],
      "tags": [
        "park",
        "India",
        "honesty",
        "games"
      ],
      "situation": "In a game of hide and seek, you peeked while you were supposed to have your eyes closed. You found everyone fast. Your friends ask if you really kept your eyes shut.",
      "choices": [
        {
          "text": "Admit you peeked and offer to be seeker again",
          "outcome": "honest",
          "xp": 30,
          "response": "You own up and replay fairly. Your friends appreciate your honesty, and the game stays fun for all. 🌟"
        },
        {
          "text": "Say you kept them closed the whole time",
          "outcome": "lie",
          "xp": 5,
          "response": "You lie about peeking. But finding everyone so fast was suspicious. Cheating spoils the game's fun. 💭"
        },
        {
          "text": "Say you only peeked a tiny bit",
          "outcome": "evasive",
          "xp": 10,
          "response": "You admit a little but minimise it. Half-honesty still bends the rules. Full honesty keeps games fair. 💭"
        }
      ],
      "realWorldTip": "Admitting you peeked or broke a game rule keeps games fun and fair for everyone.",
      "reflectionPrompt": "Why does cheating spoil a game even if you win?",
      "statement": "Letting someone else take blame for your mistake is acceptable if it avoids trouble.",
      "isTruth": false
    },
    {
      "id": "tof_076",
      "title": "The Overheard Plan",
      "setting": "school",
      "characters": [
        "friends",
        "classmate"
      ],
      "ageRange": [
        5,
        10
      ],
      "difficulty": 2,
      "theme": "school",
      "growthDimensions": [
        "empathy",
        "responsibility"
      ],
      "culture": [
        "US"
      ],
      "tags": [
        "school",
        "US",
        "honesty",
        "loyalty"
      ],
      "situation": "You overheard friends planning a mean prank on a classmate. The classmate later asks if you know why people are acting strange around them.",
      "choices": [
        {
          "text": "Warn them kindly so they're not blindsided",
          "outcome": "honest",
          "xp": 30,
          "response": "You quietly warn them out of care. They avoid the prank and trust you deeply. Honesty protected them! 🌟"
        },
        {
          "text": "Say you don't know anything",
          "outcome": "lie",
          "xp": 5,
          "response": "You deny knowing. The prank happens and hurts them. You could have prevented it with the truth. 💭"
        },
        {
          "text": "Change the subject",
          "outcome": "evasive",
          "xp": 8,
          "response": "You dodge it. The classmate stays unaware and gets hurt. Honest care would have helped them. 💭"
        }
      ],
      "realWorldTip": "Honestly warning someone about a prank or harm coming their way is a caring kind of truth.",
      "reflectionPrompt": "When is sharing the truth a way of protecting someone?",
      "statement": "Honesty about screen time helps families agree on fair rules.",
      "isTruth": true
    },
    {
      "id": "tof_077",
      "title": "The Vase and the Cousin",
      "setting": "home",
      "characters": [
        "parent",
        "cousin"
      ],
      "ageRange": [
        5,
        10
      ],
      "difficulty": 2,
      "theme": "home",
      "growthDimensions": [
        "fairness",
        "responsibility"
      ],
      "culture": [
        "IN"
      ],
      "tags": [
        "home",
        "India",
        "honesty",
        "family"
      ],
      "situation": "You and your cousin were playing and you knocked over a decoration, but your cousin moved first so it looks like their fault. Your parent asks your cousin if they did it.",
      "choices": [
        {
          "text": "Speak up that it was actually you",
          "outcome": "honest",
          "xp": 30,
          "response": "You clear your cousin honestly. They're grateful, and your parent respects your fairness. 🌟"
        },
        {
          "text": "Let your cousin take the blame",
          "outcome": "evasive",
          "xp": 5,
          "response": "You stay quiet while your cousin is wrongly blamed. They feel hurt and confused. Honesty was needed. 💭"
        },
        {
          "text": "Agree it was the cousin",
          "outcome": "lie",
          "xp": 3,
          "response": "You let them take the fall for your action. That's unfair and damages their trust in you. 💭"
        }
      ],
      "realWorldTip": "Speaking up when a family member is wrongly blamed for your mistake is honest and loyal.",
      "reflectionPrompt": "How would you feel if a cousin let you take the blame for something they did?",
      "statement": "If you broke a rule and no one found out, keeping quiet forever is the best plan.",
      "isTruth": false
    },
    {
      "id": "tof_078",
      "title": "The Project Credit",
      "setting": "school",
      "characters": [
        "teacher",
        "teammate"
      ],
      "ageRange": [
        9,
        12
      ],
      "difficulty": 2,
      "theme": "school",
      "growthDimensions": [
        "fairness",
        "responsibility"
      ],
      "culture": [
        "IN"
      ],
      "tags": [
        "school",
        "India",
        "honesty",
        "teamwork"
      ],
      "situation": "Your teammate did most of the project work, but you presented it well. The teacher assumes you did the bulk and praises you. Your teammate looks deflated.",
      "choices": [
        {
          "text": "Honestly credit your teammate's hard work",
          "outcome": "honest",
          "xp": 30,
          "response": "You set the record straight: \"They did most of the research.\" Your teammate beams. Fair and honest! 🌟"
        },
        {
          "text": "Accept the praise without correcting it",
          "outcome": "evasive",
          "xp": 8,
          "response": "You let the wrong impression stand. Your teammate feels unseen, and you know it isn't fair. 💭"
        },
        {
          "text": "Claim you both did exactly equal work",
          "outcome": "lie",
          "xp": 10,
          "response": "You smooth it over with a half-truth. But your teammate did more, and they know you didn't fully credit them. 💭"
        }
      ],
      "realWorldTip": "Giving honest credit to those who did the work, even when praise comes to you, is fair and kind.",
      "reflectionPrompt": "Why does it matter to credit people honestly for their work?",
      "statement": "Letting a friend copy your work is truly helping them learn.",
      "isTruth": false
    },
    {
      "id": "tof_079",
      "title": "The Dented Car",
      "setting": "home",
      "characters": [
        "parent",
        "neighbour"
      ],
      "ageRange": [
        9,
        12
      ],
      "difficulty": 2,
      "theme": "home",
      "growthDimensions": [
        "responsibility",
        "reasoning"
      ],
      "culture": [
        "US"
      ],
      "tags": [
        "home",
        "US",
        "honesty",
        "responsibility"
      ],
      "situation": "You were practising basketball and the ball dented the neighbour's car door slightly. No one saw. Your parent later asks if you know anything about the neighbour's car.",
      "choices": [
        {
          "text": "Tell the truth and offer to apologise to the neighbour",
          "outcome": "honest",
          "xp": 30,
          "response": "You own up despite no one seeing. Your parent helps you apologise, and the neighbour respects your honesty. 🌟"
        },
        {
          "text": "Say you have no idea",
          "outcome": "lie",
          "xp": 3,
          "response": "You deny it. But the ball marks match. Getting caught in a lie is far worse than the dent. 💭"
        },
        {
          "text": "Say it was probably someone else's ball",
          "outcome": "lie",
          "xp": 5,
          "response": "You deflect blame. But it was your ball and your game. The lie risks unraveling badly. 💭"
        }
      ],
      "realWorldTip": "Owning up to accidental damage even when unseen, and apologising, is a mark of real integrity.",
      "reflectionPrompt": "Why is honesty when no one saw you one of the hardest kinds?",
      "statement": "Talking to a teacher honestly when something goes wrong usually leads to help.",
      "isTruth": true
    },
    {
      "id": "tof_080",
      "title": "The Attendance Sign-In",
      "setting": "school",
      "characters": [
        "teacher",
        "friend"
      ],
      "ageRange": [
        9,
        12
      ],
      "difficulty": 2,
      "theme": "school",
      "growthDimensions": [
        "fairness",
        "responsibility"
      ],
      "culture": [
        "IN"
      ],
      "tags": [
        "school",
        "India",
        "honesty",
        "rules"
      ],
      "situation": "A friend asks you to mark them present on the attendance sheet even though they're skipping class. They've done you favours before.",
      "choices": [
        {
          "text": "Refuse and explain you can't lie on attendance",
          "outcome": "honest",
          "xp": 30,
          "response": "You say no kindly but firmly. Your friend's upset at first, but you protected you both from trouble. 🌟"
        },
        {
          "text": "Mark them present this once",
          "outcome": "lie",
          "xp": 5,
          "response": "You falsify the record. But if it's checked, you're both in serious trouble for the lie. 💭"
        },
        {
          "text": "Say you'll think about it and avoid them",
          "outcome": "evasive",
          "xp": 10,
          "response": "You dodge instead of refusing clearly. The pressure lingers. An honest no would be cleaner. 💭"
        }
      ],
      "realWorldTip": "Refusing to lie on official records, even for a friend, protects everyone from bigger trouble.",
      "reflectionPrompt": "Why is it important not to falsify records, even small ones?",
      "statement": "Using an answer you accidentally saw in a test is still cheating.",
      "isTruth": true
    },
    {
      "id": "tof_081",
      "title": "The Fake Review",
      "setting": "online",
      "characters": [
        "family",
        "online shoppers"
      ],
      "ageRange": [
        9,
        12
      ],
      "difficulty": 2,
      "theme": "online",
      "growthDimensions": [
        "fairness",
        "reasoning"
      ],
      "culture": [
        "global"
      ],
      "tags": [
        "online",
        "honesty",
        "ethics",
        "digital"
      ],
      "situation": "Your family member asks you to write a glowing fake review for their small business online, even though you've never used the product. It might help their sales.",
      "choices": [
        {
          "text": "Kindly explain you can't write a fake review",
          "outcome": "honest",
          "xp": 30,
          "response": "You explain that fake reviews mislead people. You offer to genuinely try the product first. Honest and fair! 🌟"
        },
        {
          "text": "Write the fake glowing review",
          "outcome": "lie",
          "xp": 5,
          "response": "You post the fake review. But it tricks real shoppers, and fake reviews can get the business in trouble. 💭"
        },
        {
          "text": "Write a vague positive review without details",
          "outcome": "evasive",
          "xp": 10,
          "response": "You hedge with a vague review. But it's still not honest, since you've never used it. Truth matters online too. 💭"
        }
      ],
      "realWorldTip": "Honest reviews help people make good choices; fake ones mislead and can backfire.",
      "reflectionPrompt": "Why does honesty matter even in online reviews and ratings?",
      "statement": "Backing up a friend's lie is harmless if their intentions were good.",
      "isTruth": false
    },
    {
      "id": "tof_082",
      "title": "The Sports Selection",
      "setting": "school",
      "characters": [
        "coach",
        "friend"
      ],
      "ageRange": [
        9,
        12
      ],
      "difficulty": 2,
      "theme": "school",
      "growthDimensions": [
        "fairness",
        "responsibility"
      ],
      "culture": [
        "IN"
      ],
      "tags": [
        "school",
        "India",
        "honesty",
        "fairness"
      ],
      "situation": "You're helping the coach record tryout scores. Your friend did poorly but begs you to write a higher score so they make the team. The coach trusts your records.",
      "choices": [
        {
          "text": "Record the true scores honestly",
          "outcome": "honest",
          "xp": 30,
          "response": "You keep the scores accurate. Your friend's upset, but the team is chosen fairly and the coach trusts you. 🌟"
        },
        {
          "text": "Write a slightly higher score for your friend",
          "outcome": "lie",
          "xp": 5,
          "response": "You fudge their score. But it's unfair to others who earned their spots, and the coach's trust is at risk. 💭"
        },
        {
          "text": "Round their score up generously",
          "outcome": "evasive",
          "xp": 10,
          "response": "You bump it 'just a little.' Still unfair to those who scored honestly. Fair records matter. 💭"
        }
      ],
      "realWorldTip": "Keeping records honest, even when a friend pleads, protects fairness for everyone.",
      "reflectionPrompt": "Why is it unfair to others when scores are changed for a friend?",
      "statement": "Returning something borrowed that got damaged builds more trust than hiding it.",
      "isTruth": true
    },
    {
      "id": "tof_083",
      "title": "The Curfew Truth",
      "setting": "home",
      "characters": [
        "parents"
      ],
      "ageRange": [
        9,
        12
      ],
      "difficulty": 2,
      "theme": "home",
      "growthDimensions": [
        "responsibility"
      ],
      "culture": [
        "US"
      ],
      "tags": [
        "home",
        "US",
        "honesty",
        "trust"
      ],
      "situation": "You came home past your curfew because you lost track of time with friends. Your parents ask why you're late, and the easy answer is to blame traffic or a friend.",
      "choices": [
        {
          "text": "Tell them honestly you lost track of time",
          "outcome": "honest",
          "xp": 30,
          "response": "You tell the truth. Your parents appreciate the honesty and you discuss how to manage time better. Trust grows. 🌟"
        },
        {
          "text": "Blame heavy traffic",
          "outcome": "lie",
          "xp": 5,
          "response": "You invent traffic. But it could be checked, and being caught in a lie costs more trust than being late. 💭"
        },
        {
          "text": "Say a friend made you stay",
          "outcome": "lie",
          "xp": 5,
          "response": "You blame a friend. That's unfair to them, and it dodges your own responsibility. Honesty is fairer. 💭"
        }
      ],
      "realWorldTip": "Telling the truth about being late builds trust that earns you more freedom over time.",
      "reflectionPrompt": "How does honesty, even about mistakes, lead to more trust and freedom?",
      "statement": "Exaggerating the truth a little is basically the same as telling it straight.",
      "isTruth": false
    },
    {
      "id": "tof_084",
      "title": "The Surprise Party Secret",
      "setting": "home",
      "characters": [
        "parent",
        "grandmother"
      ],
      "ageRange": [
        5,
        10
      ],
      "difficulty": 3,
      "theme": "home",
      "growthDimensions": [
        "empathy",
        "reasoning"
      ],
      "culture": [
        "IN"
      ],
      "tags": [
        "home",
        "India",
        "honesty",
        "kindness"
      ],
      "situation": "Your family is planning a surprise party for grandmother. She asks you directly if anything special is happening this weekend. Telling the truth would ruin the surprise; lying feels wrong.",
      "choices": [
        {
          "text": "Smile and say \"you'll have to wait and see!\"",
          "outcome": "honest",
          "xp": 30,
          "response": "You keep the surprise without lying — a playful truth! Grandmother smiles, suspecting something lovely. 🌟"
        },
        {
          "text": "Say \"no, nothing special at all\"",
          "outcome": "lie",
          "xp": 12,
          "response": "You flatly deny it. It protects the surprise, but it's an untrue statement. There was a truthful way to be playful. 💭"
        },
        {
          "text": "Accidentally reveal the party",
          "outcome": "blunt",
          "xp": 8,
          "response": "You blurt out the truth and ruin the surprise everyone worked on. Honesty is good, but timing matters too. 💭"
        }
      ],
      "realWorldTip": "You can protect a happy surprise without lying — by being playfully truthful instead.",
      "reflectionPrompt": "Is there a difference between keeping a secret and telling a lie?",
      "statement": "The size of a lie doesn't matter as much as the reality it changes.",
      "isTruth": true
    },
    {
      "id": "tof_085",
      "title": "The Friend's Cheating",
      "setting": "school",
      "characters": [
        "friend",
        "teacher"
      ],
      "ageRange": [
        5,
        10
      ],
      "difficulty": 3,
      "theme": "school",
      "growthDimensions": [
        "fairness",
        "responsibility"
      ],
      "culture": [
        "US"
      ],
      "tags": [
        "school",
        "US",
        "honesty",
        "loyalty"
      ],
      "situation": "You saw your best friend copy answers during a test. The teacher asks the class if anyone noticed cheating. Your friend gives you a desperate look. Other kids studied hard.",
      "choices": [
        {
          "text": "Talk to your friend privately afterward to make it right",
          "outcome": "wise",
          "xp": 30,
          "response": "You urge your friend to tell the teacher themselves. They do, keeping their integrity. The kindest, bravest path. 🌟"
        },
        {
          "text": "Tell the teacher quietly what you saw",
          "outcome": "honest",
          "xp": 25,
          "response": "You report it, protecting the kids who studied. It's hard with your friend watching, but it's fair. 💙"
        },
        {
          "text": "Say you didn't see anything",
          "outcome": "lie",
          "xp": 10,
          "response": "You lie to protect your friend. But the honest students were treated unfairly, and you helped hide it. 💭"
        }
      ],
      "realWorldTip": "When honesty and loyalty clash, helping a friend make it right serves both them and others.",
      "reflectionPrompt": "What do you do when being honest might hurt a friend?",
      "statement": "It's possible to be honest about something while still being kind about how you say it.",
      "isTruth": true
    },
    {
      "id": "tof_086",
      "title": "The Disliked Dish",
      "setting": "home",
      "characters": [
        "aunt",
        "parent"
      ],
      "ageRange": [
        5,
        10
      ],
      "difficulty": 3,
      "theme": "home",
      "growthDimensions": [
        "empathy",
        "reasoning"
      ],
      "culture": [
        "IN"
      ],
      "tags": [
        "home",
        "India",
        "honesty",
        "kindness"
      ],
      "situation": "Your aunt visited and cooked a dish you really don't enjoy. She asks earnestly if you liked it, with hopeful eyes. Your parent is watching, hoping you'll be polite.",
      "choices": [
        {
          "text": "Thank her sincerely for cooking for you",
          "outcome": "honest",
          "xp": 30,
          "response": "You honestly thank her for the effort and care, which is completely true. She's touched, and you didn't lie. 🌟"
        },
        {
          "text": "Say it was absolutely delicious",
          "outcome": "lie",
          "xp": 12,
          "response": "You overpraise it. Now she'll cook it every visit! A kind truth about her effort would've been wiser. 💭"
        },
        {
          "text": "Say plainly that you didn't like it",
          "outcome": "blunt",
          "xp": 10,
          "response": "You're honest but it stings after all her effort. There was a way to be truthful AND kind. 💭"
        }
      ],
      "realWorldTip": "You can always honestly thank someone for their effort and love, even if you didn't love the result.",
      "reflectionPrompt": "How can you tell the truth in a way that's still kind?",
      "statement": "If a friend begs you to lie for them, loyalty should always win over honesty.",
      "isTruth": false
    },
    {
      "id": "tof_087",
      "title": "The Accidental Advantage",
      "setting": "school",
      "characters": [
        "teacher",
        "class"
      ],
      "ageRange": [
        5,
        10
      ],
      "difficulty": 3,
      "theme": "school",
      "growthDimensions": [
        "fairness",
        "responsibility"
      ],
      "culture": [
        "global"
      ],
      "tags": [
        "school",
        "honesty",
        "fairness",
        "integrity"
      ],
      "situation": "The teacher accidentally told your row the test answers, thinking it was the practice sheet. You realised, but the other rows didn't hear. You could use this to score higher.",
      "choices": [
        {
          "text": "Tell the teacher about the slip-up",
          "outcome": "honest",
          "xp": 30,
          "response": "You point out the mistake so the test is fair for everyone. The teacher is grateful for your integrity. 🌟"
        },
        {
          "text": "Use what you heard without telling",
          "outcome": "self",
          "xp": 8,
          "response": "You quietly benefit. But your higher score isn't truly earned, and it's unfair to other rows. 💭"
        },
        {
          "text": "Tell only your friends to use it too",
          "outcome": "lie",
          "xp": 5,
          "response": "You spread the unfair advantage. Now more kids have unearned scores, and the test is unfair for all. 💭"
        }
      ],
      "realWorldTip": "Pointing out an accidental advantage, even one that helps you, keeps things fair for everyone.",
      "reflectionPrompt": "Why is it tempting to keep an unfair advantage quiet? Why is speaking up better?",
      "statement": "Noticing you benefited from someone else's mistake means you should speak up.",
      "isTruth": true
    },
    {
      "id": "tof_088",
      "title": "The Sibling's Broken Promise",
      "setting": "home",
      "characters": [
        "sibling",
        "parents"
      ],
      "ageRange": [
        5,
        10
      ],
      "difficulty": 3,
      "theme": "home",
      "growthDimensions": [
        "empathy",
        "responsibility"
      ],
      "culture": [
        "IN"
      ],
      "tags": [
        "home",
        "India",
        "honesty",
        "loyalty"
      ],
      "situation": "Your sibling promised your parents they'd stop a bad habit but secretly hasn't. Your parents ask you directly if your sibling has kept their promise. Your sibling silently pleads.",
      "choices": [
        {
          "text": "Encourage your sibling to be honest themselves",
          "outcome": "wise",
          "xp": 30,
          "response": "You quietly tell your sibling they should come clean, and offer to support them. They do. Kind to everyone. 🌟"
        },
        {
          "text": "Gently tell your parents the truth out of care",
          "outcome": "honest",
          "xp": 25,
          "response": "You share honestly because you're worried for your sibling. They get help, even if they're upset at first. 💙"
        },
        {
          "text": "Cover for your sibling",
          "outcome": "lie",
          "xp": 10,
          "response": "You lie to protect them. But the bad habit continues, unhelped, and now you're tangled in it too. 💭"
        }
      ],
      "realWorldTip": "Sometimes the most caring honesty is helping someone face their own truth.",
      "reflectionPrompt": "When does protecting someone with a lie actually hurt them?",
      "statement": "Encouraging a friend to admit their mistake is a kinder act than reporting them.",
      "isTruth": true
    },
    {
      "id": "tof_089",
      "title": "The Winning Catch",
      "setting": "park",
      "characters": [
        "team",
        "referee"
      ],
      "ageRange": [
        5,
        10
      ],
      "difficulty": 3,
      "theme": "park",
      "growthDimensions": [
        "fairness",
        "responsibility"
      ],
      "culture": [
        "US"
      ],
      "tags": [
        "park",
        "US",
        "honesty",
        "sports"
      ],
      "situation": "In a close game, the referee says you made a great catch and your team wins. But only you know the ball actually touched the ground first. Your team is celebrating.",
      "choices": [
        {
          "text": "Tell the referee the ball touched the ground",
          "outcome": "honest",
          "xp": 30,
          "response": "You admit the truth, even though it costs the win. Both teams are amazed by your honesty. A true champion! 🌟"
        },
        {
          "text": "Stay quiet and accept the win",
          "outcome": "self",
          "xp": 10,
          "response": "You take the win, but you know it wasn't real. The trophy doesn't feel as good as it should. 💭"
        },
        {
          "text": "Tell your team and let them decide",
          "outcome": "wise",
          "xp": 25,
          "response": "You share the truth with your team. Together you choose honesty. A team of real character! 💙"
        }
      ],
      "realWorldTip": "Real winners tell the truth even when it costs them the win.",
      "reflectionPrompt": "Would a win feel good if you knew it wasn't earned honestly?",
      "statement": "A coach's trust in your records matters less than helping a friend make the team.",
      "isTruth": false
    },
    {
      "id": "tof_090",
      "title": "The Teacher's Error",
      "setting": "school",
      "characters": [
        "teacher",
        "class"
      ],
      "ageRange": [
        5,
        10
      ],
      "difficulty": 3,
      "theme": "school",
      "growthDimensions": [
        "reasoning",
        "responsibility"
      ],
      "culture": [
        "IN"
      ],
      "tags": [
        "school",
        "India",
        "honesty",
        "respect"
      ],
      "situation": "Your teacher confidently teaches a fact you're sure is wrong from a book you read. Correcting them publicly might embarrass them, but the whole class is learning it incorrectly.",
      "choices": [
        {
          "text": "Mention it respectfully after class",
          "outcome": "wise",
          "xp": 30,
          "response": "You privately share what you read. The teacher thanks you and corrects it kindly the next day. Respectful! 🌟"
        },
        {
          "text": "Ask a gentle question that reveals the right answer",
          "outcome": "wise",
          "xp": 30,
          "response": "You raise your hand: \"I read something different — can you help me understand?\" Tactful and honest! 💙"
        },
        {
          "text": "Announce loudly that the teacher is wrong",
          "outcome": "blunt",
          "xp": 10,
          "response": "You're right, but you embarrass the teacher publicly. There were kinder, equally honest ways. 💭"
        }
      ],
      "realWorldTip": "You can be honest about a mistake while still being respectful about how and when you share it.",
      "reflectionPrompt": "How can you correct someone without embarrassing them?",
      "statement": "Fake reviews and false ratings don't affect real decisions real people make.",
      "isTruth": false
    },
    {
      "id": "tof_091",
      "title": "The Found Diary Entry",
      "setting": "home",
      "characters": [
        "sibling",
        "parent"
      ],
      "ageRange": [
        5,
        10
      ],
      "difficulty": 3,
      "theme": "home",
      "growthDimensions": [
        "empathy",
        "responsibility"
      ],
      "culture": [
        "global"
      ],
      "tags": [
        "home",
        "honesty",
        "privacy",
        "empathy"
      ],
      "situation": "You accidentally saw your sibling's note saying they're being bullied and feel very sad. They've kept it secret. Your parent asks if you know why your sibling seems down.",
      "choices": [
        {
          "text": "Gently encourage your sibling to talk to your parent",
          "outcome": "wise",
          "xp": 30,
          "response": "You support your sibling in sharing themselves, respecting their privacy while helping them get support. 🌟"
        },
        {
          "text": "Tell your parent you're worried about your sibling",
          "outcome": "honest",
          "xp": 25,
          "response": "You share your worry out of love so your sibling gets help. Caring honesty, even if they're upset. 💙"
        },
        {
          "text": "Say you don't know anything",
          "outcome": "lie",
          "xp": 10,
          "response": "You keep it fully secret. But your sibling keeps suffering alone, and they could have gotten help. 💭"
        }
      ],
      "realWorldTip": "When someone you love is hurting, caring honesty can open the door to help they need.",
      "reflectionPrompt": "How do you balance respecting someone's privacy with caring about their safety?",
      "statement": "An honest mistake handled openly almost always leads to better outcomes.",
      "isTruth": true
    },
    {
      "id": "tof_092",
      "title": "The Helper's Blame",
      "setting": "home",
      "characters": [
        "house helper",
        "parent"
      ],
      "ageRange": [
        5,
        10
      ],
      "difficulty": 3,
      "theme": "home",
      "growthDimensions": [
        "fairness",
        "empathy"
      ],
      "culture": [
        "IN"
      ],
      "tags": [
        "home",
        "India",
        "honesty",
        "fairness"
      ],
      "situation": "You broke a dish, but your parent assumes the house helper did it and is about to scold her. She's too nervous to defend herself. Only you know the truth.",
      "choices": [
        {
          "text": "Immediately say it was you, not her",
          "outcome": "honest",
          "xp": 30,
          "response": "You clear her name right away. She's spared an unfair scolding, and your parent respects your honesty. 🌟"
        },
        {
          "text": "Tell your parent privately afterward",
          "outcome": "honest",
          "xp": 25,
          "response": "You quietly take responsibility, sparing her in front of others. Brave and considerate. 💙"
        },
        {
          "text": "Stay quiet — she might not get in trouble",
          "outcome": "self",
          "xp": 8,
          "response": "You stay silent while an innocent person is blamed. The unfairness weighs heavily on you. 💭"
        }
      ],
      "realWorldTip": "Speaking up to protect someone who can't defend themselves is honesty AND courage.",
      "reflectionPrompt": "How would it feel to be blamed for something you didn't do, unable to defend yourself?",
      "statement": "Reporting dishonesty that harms many people is selfish if it upsets your friend group.",
      "isTruth": false
    },
    {
      "id": "tof_093",
      "title": "The Shared Screenshot",
      "setting": "online",
      "characters": [
        "friend",
        "classmate"
      ],
      "ageRange": [
        5,
        10
      ],
      "difficulty": 3,
      "theme": "online",
      "growthDimensions": [
        "empathy",
        "responsibility"
      ],
      "culture": [
        "US"
      ],
      "tags": [
        "online",
        "US",
        "honesty",
        "loyalty"
      ],
      "situation": "A friend shows you a private message a classmate sent, and wants to share it widely as a joke. The classmate trusted that it was private. Your friend asks if you'll help spread it.",
      "choices": [
        {
          "text": "Refuse and ask your friend not to share it",
          "outcome": "honest",
          "xp": 30,
          "response": "You stand up for the classmate's privacy. Your friend reconsiders. You protected someone's trust. 🌟"
        },
        {
          "text": "Quietly warn the classmate it might spread",
          "outcome": "wise",
          "xp": 25,
          "response": "You give the classmate a heads-up so they aren't blindsided. Caring and honest. 💙"
        },
        {
          "text": "Go along and share it too",
          "outcome": "lie",
          "xp": 5,
          "response": "You help spread the private message. The classmate is humiliated and their trust is shattered. 💭"
        }
      ],
      "realWorldTip": "Protecting someone's private message from being spread is an honest, loyal act.",
      "reflectionPrompt": "Why does it matter to keep private things private, even when others want to share?",
      "statement": "When someone's safety is at risk, keeping their secret matters more than getting help.",
      "isTruth": false
    },
    {
      "id": "tof_094",
      "title": "The Group Project Lie",
      "setting": "school",
      "characters": [
        "group",
        "teacher"
      ],
      "ageRange": [
        5,
        10
      ],
      "difficulty": 3,
      "theme": "school",
      "growthDimensions": [
        "fairness",
        "responsibility"
      ],
      "culture": [
        "IN"
      ],
      "tags": [
        "school",
        "India",
        "honesty",
        "teamwork"
      ],
      "situation": "Your group didn't finish the project because most members slacked off. They want to tell the teacher it was lost in a computer crash. The teacher asks what happened.",
      "choices": [
        {
          "text": "Tell the teacher the honest reason",
          "outcome": "honest",
          "xp": 30,
          "response": "You admit the group fell behind. The teacher respects the honesty and gives a fair path forward. 🌟"
        },
        {
          "text": "Suggest the group own up together",
          "outcome": "wise",
          "xp": 25,
          "response": "You encourage the group to be honest as a team. Together you face it and learn. 💙"
        },
        {
          "text": "Back up the computer-crash story",
          "outcome": "lie",
          "xp": 8,
          "response": "You support the lie. But made-up excuses can be checked, and getting caught is far worse. 💭"
        }
      ],
      "realWorldTip": "Telling the honest reason for falling behind usually goes better than a story that can unravel.",
      "reflectionPrompt": "Why are group lies especially risky?",
      "statement": "Some truths are too uncomfortable to share, so staying silent forever is acceptable.",
      "isTruth": false
    },
    {
      "id": "tof_095",
      "title": "The Parent's White Lie",
      "setting": "home",
      "characters": [
        "parent",
        "relative"
      ],
      "ageRange": [
        5,
        10
      ],
      "difficulty": 3,
      "theme": "home",
      "growthDimensions": [
        "reasoning",
        "empathy"
      ],
      "culture": [
        "US"
      ],
      "tags": [
        "home",
        "US",
        "honesty",
        "complexity"
      ],
      "situation": "Your parent told a relative a small untruth to avoid hurting their feelings about a gift. The relative then asks you directly if the family really liked it. You're caught in the middle.",
      "choices": [
        {
          "text": "Focus honestly on the kind thought behind it",
          "outcome": "wise",
          "xp": 30,
          "response": "You say, \"It was so thoughtful of you,\" which is completely true. Honest and kind at once! 🌟"
        },
        {
          "text": "Gently change the subject to something genuine",
          "outcome": "wise",
          "xp": 25,
          "response": "You steer toward something true you can praise. Tactful and honest. 💙"
        },
        {
          "text": "Repeat your parent's untruth",
          "outcome": "lie",
          "xp": 10,
          "response": "You echo the lie. It's easier, but small lies pull you into bigger tangles. Honesty is cleaner. 💭"
        }
      ],
      "realWorldTip": "You can almost always find something true and kind to say, instead of repeating a lie.",
      "reflectionPrompt": "Is it possible to be honest without hurting feelings? How?",
      "statement": "Praising work you know is plagiarised makes you partly responsible for the dishonesty.",
      "isTruth": true
    },
    {
      "id": "tof_096",
      "title": "The Hidden Injury",
      "setting": "park",
      "characters": [
        "friend",
        "parent"
      ],
      "ageRange": [
        5,
        10
      ],
      "difficulty": 3,
      "theme": "park",
      "growthDimensions": [
        "responsibility",
        "empathy"
      ],
      "culture": [
        "IN"
      ],
      "tags": [
        "park",
        "India",
        "honesty",
        "safety"
      ],
      "situation": "Your friend got hurt doing something their parents told them not to do. They beg you not to tell, but the injury looks like it might need a grown-up's care. They're scared of getting in trouble.",
      "choices": [
        {
          "text": "Encourage them to tell a grown-up for their safety",
          "outcome": "wise",
          "xp": 30,
          "response": "You convince them their safety matters more than trouble. A grown-up helps, and they're okay. 🌟"
        },
        {
          "text": "Tell a trusted adult because you're worried",
          "outcome": "honest",
          "xp": 25,
          "response": "You get help despite the promise, because their wellbeing comes first. Caring and brave. 💙"
        },
        {
          "text": "Keep their secret as asked",
          "outcome": "lie",
          "xp": 8,
          "response": "You stay quiet. But the injury gets worse without care. Some secrets shouldn't be kept. 💭"
        }
      ],
      "realWorldTip": "When someone's safety is at risk, getting help is more important than keeping a secret.",
      "reflectionPrompt": "When is breaking a promise actually the caring thing to do?",
      "statement": "You can be honest about a mistake without also being unkind about it.",
      "isTruth": true
    },
    {
      "id": "tof_097",
      "title": "The Easy Way Out",
      "setting": "school",
      "characters": [
        "teacher",
        "self"
      ],
      "ageRange": [
        5,
        10
      ],
      "difficulty": 3,
      "theme": "school",
      "growthDimensions": [
        "responsibility",
        "fairness"
      ],
      "culture": [
        "global"
      ],
      "tags": [
        "school",
        "honesty",
        "integrity",
        "temptation"
      ],
      "situation": "You didn't study for a quiz. A classmate left their completed quiz visible and you could easily copy. No one would know, and you really need a good grade.",
      "choices": [
        {
          "text": "Do your own quiz, even if you score lower",
          "outcome": "honest",
          "xp": 30,
          "response": "You answer honestly with what you know. Your grade is truly yours, and you feel proud. 🌟"
        },
        {
          "text": "Cover your eyes and focus on your own paper",
          "outcome": "wise",
          "xp": 25,
          "response": "You deliberately look away and do your best honestly. Integrity protected! 💙"
        },
        {
          "text": "Copy a few answers",
          "outcome": "lie",
          "xp": 8,
          "response": "You copy quietly. You score higher, but it isn't your work, and the grade feels borrowed. 💭"
        }
      ],
      "realWorldTip": "Doing your own work, even for a lower grade, is honest and something to be proud of.",
      "reflectionPrompt": "Why does an honestly earned grade feel better than a copied one?",
      "statement": "Standing up for someone wrongly blamed always comes with personal risk.",
      "isTruth": true
    },
    {
      "id": "tof_098",
      "title": "The Favoured Friend's Marks",
      "setting": "school",
      "characters": [
        "teacher",
        "friend",
        "class"
      ],
      "ageRange": [
        6,
        11
      ],
      "difficulty": 3,
      "theme": "school",
      "growthDimensions": [
        "fairness",
        "responsibility"
      ],
      "culture": [
        "IN"
      ],
      "tags": [
        "school",
        "India",
        "honesty",
        "fairness"
      ],
      "situation": "You notice the teacher consistently gives your friend higher marks than their work deserves, while harder-working students get less. Your friend enjoys it. The teacher asks if students feel grading is fair.",
      "choices": [
        {
          "text": "Talk to your friend about the unfairness first",
          "outcome": "wise",
          "xp": 30,
          "response": "You discuss it kindly with your friend, who chooses to ask for fair grading. Brave and loyal! 🌟"
        },
        {
          "text": "Respectfully raise the fairness concern",
          "outcome": "honest",
          "xp": 25,
          "response": "You bring up fairness tactfully so hardworking students get what they earned. Courageous! 💙"
        },
        {
          "text": "Say grading is fine since it helps your friend",
          "outcome": "lie",
          "xp": 10,
          "response": "You protect your friend's advantage. But others are treated unfairly, and you helped hide it. 💭"
        }
      ],
      "realWorldTip": "Fairness means caring that everyone gets what they earned, even when unfairness helps a friend.",
      "reflectionPrompt": "Is it honest to stay quiet about unfairness that benefits someone you like?",
      "statement": "Honesty that costs you something is usually more credible than honesty that costs nothing.",
      "isTruth": true
    },
    {
      "id": "tof_099",
      "title": "The Sibling's Secret Struggle",
      "setting": "home",
      "characters": [
        "sibling",
        "parents"
      ],
      "ageRange": [
        6,
        11
      ],
      "difficulty": 3,
      "theme": "home",
      "growthDimensions": [
        "responsibility",
        "empathy"
      ],
      "culture": [
        "US"
      ],
      "tags": [
        "home",
        "US",
        "honesty",
        "loyalty"
      ],
      "situation": "Your older sibling has been secretly skipping their study sessions and lying to your parents about it, falling badly behind. They beg you to keep their secret, but they're really struggling.",
      "choices": [
        {
          "text": "Encourage your sibling to tell your parents themselves",
          "outcome": "wise",
          "xp": 30,
          "response": "You urge them to come clean and offer support. They do, finally getting the help they need. 🌟"
        },
        {
          "text": "Tell your parents because you're worried",
          "outcome": "honest",
          "xp": 25,
          "response": "You share your worry out of love. Your sibling gets help before things get worse. 💙"
        },
        {
          "text": "Keep their secret as asked",
          "outcome": "lie",
          "xp": 10,
          "response": "You stay loyal. But your sibling keeps falling behind, unhelped, and the problem grows. 💭"
        }
      ],
      "realWorldTip": "Sometimes the most loyal thing is helping someone face a problem instead of hiding it with them.",
      "reflectionPrompt": "When does keeping a secret stop being kind and start being harmful?",
      "statement": "A carefully phrased half-truth counts as being fully honest.",
      "isTruth": false
    },
    {
      "id": "tof_100",
      "title": "The Forwarded Fake News",
      "setting": "online",
      "characters": [
        "family group",
        "relatives"
      ],
      "ageRange": [
        6,
        11
      ],
      "difficulty": 3,
      "theme": "online",
      "growthDimensions": [
        "reasoning",
        "responsibility"
      ],
      "culture": [
        "IN"
      ],
      "tags": [
        "online",
        "India",
        "honesty",
        "reasoning"
      ],
      "situation": "In your family group chat, a relative shares alarming 'news' you're fairly sure is fake. Elders are believing it and getting scared. Correcting an elder feels disrespectful, but the fear is spreading.",
      "choices": [
        {
          "text": "Respectfully share a reliable fact-check",
          "outcome": "wise",
          "xp": 30,
          "response": "You kindly post a trusted source. The fear calms, and you did it respectfully. Honest and tactful! 🌟"
        },
        {
          "text": "Privately message the relative who shared it",
          "outcome": "wise",
          "xp": 25,
          "response": "You gently tell them the facts one-on-one, saving their dignity. Considerate honesty. 💙"
        },
        {
          "text": "Say nothing to avoid disrespecting elders",
          "outcome": "lie",
          "xp": 10,
          "response": "You stay silent. The fake news spreads fear among relatives. There were respectful ways to help. 💭"
        }
      ],
      "realWorldTip": "You can correct misinformation respectfully — checking facts protects everyone from false fear.",
      "reflectionPrompt": "How can you share the truth with elders in a way that's still respectful?",
      "statement": "Helping someone else lie means you share the moral weight of that lie.",
      "isTruth": true
    },
    {
      "id": "tof_101",
      "title": "The Deal for Silence",
      "setting": "school",
      "characters": [
        "popular kid",
        "bullied classmate"
      ],
      "ageRange": [
        6,
        11
      ],
      "difficulty": 3,
      "theme": "school",
      "growthDimensions": [
        "fairness",
        "responsibility"
      ],
      "culture": [
        "global"
      ],
      "tags": [
        "school",
        "honesty",
        "integrity",
        "courage"
      ],
      "situation": "A popular kid offers to make you part of their group — but only if you lie and say you didn't see them bully a quieter classmate. Joining would boost your status. The bullied kid suffers in silence.",
      "choices": [
        {
          "text": "Refuse to lie and stand up for the bullied kid",
          "outcome": "honest",
          "xp": 30,
          "response": "You turn down the deal and tell the truth. You chose integrity over popularity. Heroic! 🌟"
        },
        {
          "text": "Decline and quietly support the bullied classmate",
          "outcome": "wise",
          "xp": 25,
          "response": "You say no thanks and befriend the bullied kid. Loyalty to what's right! 💙"
        },
        {
          "text": "Take the deal and lie",
          "outcome": "lie",
          "xp": 5,
          "response": "You lie for status. The bullying continues, you helped hide it, and the popularity feels hollow. 💭"
        }
      ],
      "realWorldTip": "Telling the truth even when a lie would benefit you is the mark of real character.",
      "reflectionPrompt": "Is popularity worth gaining if it means lying about someone's pain?",
      "statement": "The right time to share a hard truth is never — some things are better unsaid.",
      "isTruth": false
    },
    {
      "id": "tof_102",
      "title": "The Family Business Honesty",
      "setting": "home",
      "characters": [
        "parent",
        "customer"
      ],
      "ageRange": [
        6,
        11
      ],
      "difficulty": 3,
      "theme": "home",
      "growthDimensions": [
        "reasoning",
        "responsibility"
      ],
      "culture": [
        "IN"
      ],
      "tags": [
        "home",
        "India",
        "honesty",
        "ethics"
      ],
      "situation": "Helping at your family's shop, you notice a customer was accidentally given too little change in their favour — they underpaid. They're about to leave happy. Telling means a small loss for your family.",
      "choices": [
        {
          "text": "Politely tell the customer about the error",
          "outcome": "honest",
          "xp": 30,
          "response": "You correct it kindly. The customer respects your family's honesty and becomes a loyal regular. 🌟"
        },
        {
          "text": "Tell your parent so they decide",
          "outcome": "wise",
          "xp": 25,
          "response": "You let your parent handle it honestly. They appreciate you noticing and being truthful. 💙"
        },
        {
          "text": "Stay quiet — it's a small loss for the customer",
          "outcome": "lie",
          "xp": 10,
          "response": "Wait, it's the shop's loss. You stay quiet, letting an error stand. Honesty would build more trust. 💭"
        }
      ],
      "realWorldTip": "Honesty in business, even at a small cost, builds trust worth far more than the loss.",
      "reflectionPrompt": "Why might honesty help a business more than a small unfair gain?",
      "statement": "Guilt after keeping a secret about someone else's wrongdoing is normal and meaningful.",
      "isTruth": true
    },
    {
      "id": "tof_103",
      "title": "The Misattributed Praise",
      "setting": "school",
      "characters": [
        "teacher",
        "shy teammate"
      ],
      "ageRange": [
        6,
        11
      ],
      "difficulty": 3,
      "theme": "school",
      "growthDimensions": [
        "fairness",
        "responsibility"
      ],
      "culture": [
        "US"
      ],
      "tags": [
        "school",
        "US",
        "honesty",
        "fairness"
      ],
      "situation": "The teacher praises you for research a shy teammate actually did, since you presented it well. The teammate did the hard work quietly. The teacher asks how you found such great information.",
      "choices": [
        {
          "text": "Honestly credit your shy teammate",
          "outcome": "honest",
          "xp": 30,
          "response": "You say, \"That was all their research.\" The teammate beams, finally seen. Honest and fair! 🌟"
        },
        {
          "text": "Make sure to mention the whole team's roles",
          "outcome": "wise",
          "xp": 25,
          "response": "You fairly name everyone's contributions. The team feels valued. Great character. 💙"
        },
        {
          "text": "Accept the praise without correcting it",
          "outcome": "lie",
          "xp": 10,
          "response": "You let the wrong impression stand. The shy teammate feels invisible, and it isn't fair. 💭"
        }
      ],
      "realWorldTip": "Honestly crediting quiet people's hard work, even when praise comes to you, is fair and kind.",
      "reflectionPrompt": "How does it feel when someone takes credit for what you did?",
      "statement": "If no one was physically harmed, dishonesty in competitions is acceptable.",
      "isTruth": false
    },
    {
      "id": "tof_104",
      "title": "The Difficult Truth",
      "setting": "home",
      "characters": [
        "relative",
        "parents"
      ],
      "ageRange": [
        6,
        11
      ],
      "difficulty": 3,
      "theme": "home",
      "growthDimensions": [
        "self-regulation",
        "empathy"
      ],
      "culture": [
        "IN"
      ],
      "tags": [
        "home",
        "India",
        "honesty",
        "respect"
      ],
      "situation": "A relative keeps unfairly criticising you and comparing you to cousins. They then ask if you have anything to say. You're hurt and want to snap back, but your parents value respect to elders.",
      "choices": [
        {
          "text": "Calmly and honestly share how it makes you feel",
          "outcome": "wise",
          "xp": 30,
          "response": "You respectfully say, \"That hurts my feelings.\" Honest and dignified — a hard balance you nailed! 🌟"
        },
        {
          "text": "Politely excuse yourself to cool down",
          "outcome": "wise",
          "xp": 25,
          "response": "You stay calm and step away with grace, keeping both honesty and respect. Mature! 💙"
        },
        {
          "text": "Snap back with a sharp retort",
          "outcome": "blunt",
          "xp": 10,
          "response": "You react sharply. It feels good briefly, but now there's tension and your parents are upset. 💭"
        }
      ],
      "realWorldTip": "You can honestly share your feelings while staying calm and respectful, even with difficult people.",
      "reflectionPrompt": "How can you be honest about being hurt without being disrespectful?",
      "statement": "Returning something wrongly given to you, without being asked, shows real integrity.",
      "isTruth": true
    },
    {
      "id": "tof_105",
      "title": "The Sibling's Alibi",
      "setting": "home",
      "characters": [
        "sibling",
        "parents"
      ],
      "ageRange": [
        6,
        11
      ],
      "difficulty": 3,
      "theme": "home",
      "growthDimensions": [
        "responsibility",
        "fairness"
      ],
      "culture": [
        "US"
      ],
      "tags": [
        "home",
        "US",
        "honesty",
        "loyalty"
      ],
      "situation": "Your sibling wants you to lie and say they were home studying when they actually went somewhere they weren't allowed. They promise to do your chores for a week. Your parents ask where your sibling was earlier.",
      "choices": [
        {
          "text": "Refuse to lie and encourage them to be honest",
          "outcome": "wise",
          "xp": 30,
          "response": "You won't cover with a lie, but you offer to support them telling the truth. They respect your integrity. 🌟"
        },
        {
          "text": "Tell the truth gently when asked",
          "outcome": "honest",
          "xp": 25,
          "response": "You honestly say you're not sure, rather than confirm a false story. You stay truthful without piling on. 💙"
        },
        {
          "text": "Give the false alibi for the chore deal",
          "outcome": "lie",
          "xp": 8,
          "response": "You lie for the reward. But if it unravels, you're both in deeper trouble, and you've traded honesty for chores. 💭"
        }
      ],
      "realWorldTip": "Refusing to lie for someone, even for a reward, protects you both from bigger trouble.",
      "reflectionPrompt": "Why is being asked to lie for someone a tricky kind of pressure?",
      "statement": "An apology given only to avoid consequences is just as meaningful as a genuine one.",
      "isTruth": false
    },
    {
      "id": "tof_106",
      "title": "The Competition Slip",
      "setting": "school",
      "characters": [
        "judges",
        "rival"
      ],
      "ageRange": [
        6,
        11
      ],
      "difficulty": 3,
      "theme": "school",
      "growthDimensions": [
        "fairness",
        "responsibility"
      ],
      "culture": [
        "IN"
      ],
      "tags": [
        "school",
        "India",
        "honesty",
        "fairness"
      ],
      "situation": "In a school competition, the judges accidentally awarded you points that should have gone to a rival who actually performed better. Only you noticed the scoring error. Staying quiet means you win.",
      "choices": [
        {
          "text": "Point out the scoring error to the judges",
          "outcome": "honest",
          "xp": 30,
          "response": "You report the mistake even though it costs you the win. The judges and your rival are amazed by your integrity. 🌟"
        },
        {
          "text": "Mention it quietly so it's corrected fairly",
          "outcome": "wise",
          "xp": 25,
          "response": "You discreetly flag the error so the right person wins. Fairness over winning! 💙"
        },
        {
          "text": "Stay silent and accept the win",
          "outcome": "lie",
          "xp": 8,
          "response": "You keep the win you didn't earn. But you know it belonged to someone else, and it feels hollow. 💭"
        }
      ],
      "realWorldTip": "Pointing out a scoring error that helped you win, even when it costs you, is remarkable honesty.",
      "reflectionPrompt": "Would a trophy feel good if you knew someone else truly earned it?",
      "statement": "Acknowledging when you had an unfair advantage, even if you didn't create it, is honest.",
      "isTruth": true
    },
    {
      "id": "tof_107",
      "title": "The Cheating Ring",
      "setting": "school",
      "characters": [
        "popular group",
        "teacher",
        "honest students"
      ],
      "ageRange": [
        8,
        12
      ],
      "difficulty": 3,
      "theme": "school",
      "growthDimensions": [
        "fairness",
        "responsibility"
      ],
      "culture": [
        "IN"
      ],
      "tags": [
        "school",
        "India",
        "honesty",
        "courage"
      ],
      "situation": "You discover a group has been secretly cheating on tests all year, lowering honest students' relative ranks. The teacher asks if anyone knows about cheating. Exposing them makes you a target; silence keeps you safe.",
      "choices": [
        {
          "text": "Report it to a trusted teacher with what you know",
          "outcome": "honest",
          "xp": 30,
          "response": "You bring the truth forward despite the risk. Honest students finally get fair ranks. Courageous! 🌟"
        },
        {
          "text": "Privately urge the group to stop and own up",
          "outcome": "wise",
          "xp": 25,
          "response": "You warn them to come clean before it's exposed. Some do, avoiding harm. A chance to make it right. 💙"
        },
        {
          "text": "Stay silent to protect yourself",
          "outcome": "lie",
          "xp": 10,
          "response": "You keep quiet. The cheating continues, and honest students keep losing out unfairly all year. 💭"
        }
      ],
      "realWorldTip": "Telling the truth about widespread cheating is scary, but it protects everyone who plays fair.",
      "reflectionPrompt": "When is it worth taking a personal risk to tell the truth?",
      "statement": "There is almost always a truthful way to be kind — you rarely have to choose.",
      "isTruth": true
    },
    {
      "id": "tof_108",
      "title": "The Costly Honesty",
      "setting": "home",
      "characters": [
        "parents",
        "self"
      ],
      "ageRange": [
        8,
        12
      ],
      "difficulty": 3,
      "theme": "home",
      "growthDimensions": [
        "responsibility",
        "reasoning"
      ],
      "culture": [
        "US"
      ],
      "tags": [
        "home",
        "US",
        "honesty",
        "integrity"
      ],
      "situation": "You damaged something expensive while doing something you weren't allowed to do. Your parents would never find out it was you. Admitting it means real consequences; staying silent means someone else might be suspected.",
      "choices": [
        {
          "text": "Tell your parents the full truth",
          "outcome": "honest",
          "xp": 30,
          "response": "You own up despite the consequences. Your parents are disappointed but deeply respect your honesty. Trust holds. 🌟"
        },
        {
          "text": "Admit it but explain the full situation calmly",
          "outcome": "wise",
          "xp": 25,
          "response": "You're honest and give context. Your parents appreciate the truth and you work out fixing it together. 💙"
        },
        {
          "text": "Stay silent and let it stay a mystery",
          "outcome": "lie",
          "xp": 8,
          "response": "You avoid consequences, but the truth haunts you, and someone else might be wrongly suspected. 💭"
        }
      ],
      "realWorldTip": "Honesty that costs you something is the hardest and most honourable kind.",
      "reflectionPrompt": "Why might your parents value honesty even more than the broken item?",
      "statement": "A well-intentioned lie is always better than a difficult honest conversation.",
      "isTruth": false
    },
    {
      "id": "tof_109",
      "title": "The Stolen Idea Win",
      "setting": "online",
      "characters": [
        "classmates",
        "rival team"
      ],
      "ageRange": [
        8,
        12
      ],
      "difficulty": 3,
      "theme": "online",
      "growthDimensions": [
        "fairness",
        "responsibility"
      ],
      "culture": [
        "IN"
      ],
      "tags": [
        "online",
        "India",
        "honesty",
        "integrity"
      ],
      "situation": "Someone leaked a rival team's competition idea in your class chat. Your team could use it to win. Everyone's excited. The teacher asks if all entries are original work.",
      "choices": [
        {
          "text": "Tell the truth that the idea was leaked",
          "outcome": "honest",
          "xp": 30,
          "response": "You're honest about the leak. Your team creates something original instead, and you keep your integrity. 🌟"
        },
        {
          "text": "Refuse to use it and tell your team why",
          "outcome": "wise",
          "xp": 25,
          "response": "You convince your team to win with their own ideas. Genuine work earns real respect. 💙"
        },
        {
          "text": "Say all entries are original and use the idea",
          "outcome": "lie",
          "xp": 5,
          "response": "You lie and use stolen ideas to win. But it wasn't your work, and the victory feels hollow. 💭"
        }
      ],
      "realWorldTip": "Winning with stolen ideas and a lie isn't really winning. Honest effort is worth more.",
      "reflectionPrompt": "Would a win feel good if it came from a lie and someone else's work?",
      "statement": "Correcting someone's wrong impression is honest, even if they didn't ask.",
      "isTruth": true
    },
    {
      "id": "tof_110",
      "title": "The Perfect Score Pressure",
      "setting": "school",
      "characters": [
        "parents",
        "classmate"
      ],
      "ageRange": [
        8,
        12
      ],
      "difficulty": 3,
      "theme": "school",
      "growthDimensions": [
        "responsibility",
        "self-regulation"
      ],
      "culture": [
        "global"
      ],
      "tags": [
        "school",
        "honesty",
        "integrity",
        "pressure"
      ],
      "situation": "Your parents expect top grades and will be very disappointed by your low score. A classmate offers to help you cheat on the retest to 'fix' it. The pressure feels crushing.",
      "choices": [
        {
          "text": "Refuse and talk honestly with your parents about the pressure",
          "outcome": "wise",
          "xp": 30,
          "response": "You decline cheating and have an honest talk about the pressure. They listen. Brave and honest! 🌟"
        },
        {
          "text": "Decline and ask the teacher for real help",
          "outcome": "honest",
          "xp": 25,
          "response": "You say no to cheating and seek genuine help to improve. You grow honestly. 💙"
        },
        {
          "text": "Accept the cheating offer",
          "outcome": "lie",
          "xp": 5,
          "response": "You cheat to get the score. But the guilt and fear feel worse than any low grade. 💭"
        }
      ],
      "realWorldTip": "No grade is worth your honesty. Honest struggles build more than dishonest success.",
      "reflectionPrompt": "How can pressure sometimes push people toward dishonest choices? How do you resist?",
      "statement": "Staying silent when someone is wrongly blamed is the same as being innocent.",
      "isTruth": false
    },
    {
      "id": "tof_111",
      "title": "The Inheritance Truth",
      "setting": "home",
      "characters": [
        "extended family",
        "grandparent's wish"
      ],
      "ageRange": [
        8,
        12
      ],
      "difficulty": 3,
      "theme": "home",
      "growthDimensions": [
        "empathy",
        "reasoning"
      ],
      "culture": [
        "IN"
      ],
      "tags": [
        "home",
        "India",
        "honesty",
        "family"
      ],
      "situation": "Your family is arguing over a late grandparent's treasured item. You alone know your grandparent privately said they wanted it to go to the cousin who never asks for anything. Telling means going against louder relatives.",
      "choices": [
        {
          "text": "Calmly share what your grandparent actually wanted",
          "outcome": "honest",
          "xp": 30,
          "response": "You tell the truth about Grandpa's wish. The arguing settles, and the quiet cousin is honoured. 🌟"
        },
        {
          "text": "Suggest the family discuss it calmly together",
          "outcome": "wise",
          "xp": 25,
          "response": "You propose a calm conversation, sharing what you know. You help restore fairness and peace. 💙"
        },
        {
          "text": "Stay out of the grown-ups' argument",
          "outcome": "lie",
          "xp": 10,
          "response": "You stay silent. The item may go to the loudest, not the one Grandpa truly wanted. 💭"
        }
      ],
      "realWorldTip": "Sharing what you honestly know, even against louder voices, can bring fairness and peace.",
      "reflectionPrompt": "Why can telling a calm truth help settle an argument?",
      "statement": "Helping someone cheat because their situation is hard is a genuine act of kindness.",
      "isTruth": false
    },
    {
      "id": "tof_112",
      "title": "The Anonymous Poster",
      "setting": "school",
      "characters": [
        "classmates",
        "victim"
      ],
      "ageRange": [
        8,
        12
      ],
      "difficulty": 3,
      "theme": "school",
      "growthDimensions": [
        "responsibility",
        "fairness"
      ],
      "culture": [
        "US"
      ],
      "tags": [
        "school",
        "US",
        "honesty",
        "courage"
      ],
      "situation": "You figured out who's behind an anonymous account posting mean things about classmates — someone you know. They don't realise you found out. The teacher asks if anyone knows who's responsible.",
      "choices": [
        {
          "text": "Privately urge them to stop and come clean",
          "outcome": "wise",
          "xp": 30,
          "response": "You tell them you know and urge them to stop, or you'll report it. They delete the account. 🌟"
        },
        {
          "text": "Report it honestly to a trusted adult",
          "outcome": "honest",
          "xp": 25,
          "response": "You bring the truth to an adult who handles it properly. The cruelty stops. 💙"
        },
        {
          "text": "Stay silent to avoid drama",
          "outcome": "lie",
          "xp": 8,
          "response": "You keep quiet. The anonymous cruelty continues, hurting more classmates over time. 💭"
        }
      ],
      "realWorldTip": "Telling the truth to stop online cruelty, privately or to an adult, protects everyone it targets.",
      "reflectionPrompt": "What's the bravest way to stop someone from hurting others anonymously?",
      "statement": "A whistle-blower who exposes cheating harms their peers by doing so.",
      "isTruth": false
    },
    {
      "id": "tof_113",
      "title": "The Sports Record",
      "setting": "school",
      "characters": [
        "coach",
        "friend",
        "team"
      ],
      "ageRange": [
        8,
        12
      ],
      "difficulty": 3,
      "theme": "school",
      "growthDimensions": [
        "fairness",
        "responsibility"
      ],
      "culture": [
        "IN"
      ],
      "tags": [
        "school",
        "India",
        "honesty",
        "fairness"
      ],
      "situation": "You're trusted to record tryout times. Your friend ran slower than needed to make the team and begs you to write a faster time. The coach relies completely on your honesty. Other kids earned their spots fairly.",
      "choices": [
        {
          "text": "Record the true time honestly",
          "outcome": "honest",
          "xp": 30,
          "response": "You keep the record accurate. Your friend's upset, but the team is fair and the coach's trust holds. 🌟"
        },
        {
          "text": "Tell your friend you can't falsify records",
          "outcome": "wise",
          "xp": 25,
          "response": "You explain kindly why you can't lie. Your friend respects your integrity, even if it stings. 💙"
        },
        {
          "text": "Write a faster time for your friend",
          "outcome": "lie",
          "xp": 5,
          "response": "You falsify the record. It's unfair to those who earned their spots, and your trust is on the line. 💭"
        }
      ],
      "realWorldTip": "Keeping records honest, even when a friend pleads, protects fairness for everyone who earned their place.",
      "reflectionPrompt": "Why is it unfair to others when records are changed for a friend?",
      "statement": "Covering for a struggling friend sometimes hides the help they actually need.",
      "isTruth": true
    }
  ],


  /* ═══════════════════════════════════════════════════════════════
     EMOTION MATCH — 26 scenarios
     Game: emotionmatch.html
  ═══════════════════════════════════════════════════════════════ */
  emotionMatch: [

    {
      id: 'em_001',
      title: 'The Disappointed Friend',
      setting: 'school',
      characters: ['friend'],
      ageRange: [3, 8],
      difficulty: 1,
      theme: 'empathy',
      growthDimensions: ['empathy'],
      culture: ['global'],
      tags: ['feelings', 'sadness', 'friendship'],
      situation: "Your friend dropped their ice cream and it fell on the ground. Their face falls. What are they feeling?",
      emotion: 'hurt/disappointed',
      faceOptions: ['😔', '😄', '😠', '😴'],
      correctEmotion: '😔',
      response: "Disappointed — and maybe a little sad. Losing something you were excited about really stings. 💙",
      followUp: "What would you do to help them feel better?",
      realWorldTip: 'Today, notice when someone looks sad and ask: \'Are you okay?\'',
      reflectionPrompt: 'How can you tell when someone is disappointed even if they don\'t say anything?'
    },

    {
      id: 'em_002',
      title: 'The Big Win',
      setting: 'school',
      characters: ['classmate'],
      ageRange: [3, 7],
      difficulty: 1,
      theme: 'empathy',
      growthDimensions: ['empathy'],
      culture: ['global'],
      tags: ['happiness', 'winning', 'feelings'],
      situation: "Your classmate just found out they won the spelling bee. They\'re jumping up and down with their hands in the air!",
      emotion: 'excited/joyful',
      faceOptions: ['🥳', '😢', '😠', '😴'],
      correctEmotion: '🥳',
      response: "Excited and proud! Big wins make you feel like you\'re floating. 🌟",
      followUp: "How do YOU feel when you win something?",
      realWorldTip: 'Celebrate someone else\'s win today — tell them congratulations and mean it!',
      reflectionPrompt: 'How do you feel when someone celebrates WITH you?'
    },

    {
      id: 'em_003',
      title: 'The Left Out Feeling',
      setting: 'school',
      characters: ['group of friends'],
      ageRange: [4, 9],
      difficulty: 1,
      theme: 'empathy',
      growthDimensions: ['empathy'],
      culture: ['global'],
      tags: ['exclusion', 'sadness', 'belonging'],
      situation: "A group of friends is playing a game at recess. They didn\'t invite one child, who is standing nearby watching quietly.",
      emotion: 'lonely/left out',
      faceOptions: ['😢', '😄', '😤', '😲'],
      correctEmotion: '🥺',
      response: "Lonely and left out. Watching everyone else have fun without you is one of the worst feelings. 💙",
      followUp: "Have you ever felt this way? What helped?",
      realWorldTip: 'Look for someone playing alone today and invite them to join you.',
      reflectionPrompt: 'What does belonging feel like?'
    },

    {
      id: 'em_004',
      title: 'The Unexpected Surprise',
      setting: 'home',
      characters: ['family'],
      ageRange: [3, 8],
      difficulty: 1,
      theme: 'empathy',
      growthDimensions: ['empathy'],
      culture: ['global'],
      tags: ['surprise', 'happiness', 'family'],
      situation: "A child walks into a room and everyone shouts \'SURPRISE!\' for their birthday. Their eyes go wide and their mouth drops open.",
      emotion: 'surprised/happy',
      faceOptions: ['😲', '😔', '😡', '😴'],
      correctEmotion: '😲',
      response: "Surprised and delighted! That frozen moment before you realise what\'s happening is magic. 🎉",
      followUp: "What was your biggest surprise ever?",
      realWorldTip: 'Do something unexpected and kind for someone today — a small surprise!',
      reflectionPrompt: 'Is being surprised always a good feeling?'
    },

    {
      id: 'em_005',
      title: 'The Unfair Rule',
      setting: 'school',
      characters: ['teacher'],
      ageRange: [5, 10],
      difficulty: 1,
      theme: 'empathy',
      growthDimensions: ['empathy', 'fairness'],
      culture: ['global'],
      tags: ['anger', 'unfair', 'feelings'],
      situation: "The teacher announces that the whole class loses break time because of what one student did. Many children cross their arms and frown.",
      emotion: 'angry/frustrated',
      faceOptions: ['😤', '😄', '😢', '😴'],
      correctEmotion: '😤',
      response: "Frustrated and angry — especially when the punishment doesn\'t feel fair. Those feelings make sense! 💛",
      followUp: "When YOU feel frustrated, what do you do?",
      realWorldTip: 'When you feel angry or frustrated, try taking 3 deep breaths before reacting.',
      reflectionPrompt: 'Is anger always bad, or is it sometimes useful?'
    },

    {
      id: 'em_006',
      title: 'Meeting Someone New',
      setting: 'school',
      characters: ['new teacher', 'classmates'],
      ageRange: [4, 8],
      difficulty: 1,
      theme: 'empathy',
      growthDimensions: ['empathy', 'self-regulation'],
      culture: ['global'],
      tags: ['anxiety', 'new situations', 'feelings'],
      situation: "It\'s the first day of school. A child holds their school bag tightly, looks at their feet, and has a small nervous smile.",
      emotion: 'nervous/anxious',
      faceOptions: ['😰', '😄', '😠', '🤩'],
      correctEmotion: '😰',
      response: "Nervous and anxious. New places make your tummy do flips! It\'s completely normal. 💛",
      followUp: "What helps YOU feel less nervous in new situations?",
      realWorldTip: 'If you see someone looking nervous, give them a warm smile.',
      reflectionPrompt: 'What makes nervous feelings go away?'
    },

    {
      id: 'em_007',
      title: 'The Unfair Game',
      setting: 'sports',
      characters: ['teammate', 'referee'],
      ageRange: [6, 11],
      difficulty: 2,
      theme: 'empathy',
      growthDimensions: ['empathy', 'self-regulation'],
      culture: ['global'],
      tags: ['sports', 'fairness', 'complex emotions'],
      situation: "A player scores a great goal but the referee says it doesn\'t count due to a rule. The player kicks the ground, then looks at their teammate who\'s also disappointed.",
      emotion: 'angry/frustrated',
      faceOptions: ['😤😢', '🤩', '😴', '😂'],
      correctEmotion: '😤',
      response: "Frustrated AND upset for the team. Two feelings at once — that happens! 💛",
      followUp: "Can you feel two emotions at the same time?",
      realWorldTip: 'Name TWO feelings you have right now. It\'s okay to feel more than one thing.',
      reflectionPrompt: 'Can you be happy and sad at the same time? When?'
    },

    {
      id: 'em_008',
      title: 'The Sick Grandparent',
      setting: 'home',
      characters: ['grandparent'],
      ageRange: [5, 10],
      difficulty: 2,
      theme: 'empathy',
      growthDimensions: ['empathy'],
      culture: ['global'],
      tags: ['worry', 'family', 'illness', 'love'],
      situation: "A child\'s grandparent is unwell and in hospital. The child is helping make tea quietly and keeps looking at the phone, waiting for news.",
      emotion: 'worried',
      faceOptions: ['😟', '😄', '😤', '😲'],
      correctEmotion: '😟',
      response: "Worried and full of love. When someone we love is sick, the waiting is the hardest part. 💙",
      followUp: "How do you show someone you love them when they\'re not well?",
      realWorldTip: 'Do something caring for a grandparent or family elder this week — a hug, a call, a drawing.',
      reflectionPrompt: 'What does it feel like to worry about someone you love?'
    },

    {
      id: 'em_009',
      title: 'The Bully Steps In',
      setting: 'school',
      characters: ['bully', 'victim', 'bystanders'],
      ageRange: [7, 12],
      difficulty: 2,
      theme: 'empathy',
      growthDimensions: ['empathy', 'fairness'],
      culture: ['global'],
      tags: ['bullying', 'fear', 'courage'],
      situation: "An older student is being mean to a smaller child. A bystander\'s eyes are wide, body stiff, looking between the bully and the door.",
      emotion: 'scared',
      faceOptions: ['😨', '😄', '😤', '😴'],
      correctEmotion: '😨',
      response: "Scared — and feeling the pull between wanting to help and fear of getting involved. That\'s a hard moment. 💙",
      followUp: "What do you think the bystander should do?",
      realWorldTip: 'If you see bullying, get a teacher or adult. You don\'t have to step in alone.',
      reflectionPrompt: 'What\'s the difference between a bystander and an upstander?'
    },

    {
      id: 'em_010',
      title: 'The Perfect Gift',
      setting: 'home',
      characters: ['parent'],
      ageRange: [4, 9],
      difficulty: 1,
      theme: 'empathy',
      growthDimensions: ['empathy'],
      culture: ['global'],
      tags: ['gratitude', 'happiness', 'gift'],
      situation: "A parent secretly stayed up late to make a handmade birthday card. When their child opens it, they look up with shining eyes and a wide smile.",
      emotion: 'touched/loved',
      faceOptions: ['🥹', '😤', '😴', '😲'],
      correctEmotion: '🥹',
      response: "Touched and deeply loved. A handmade thing says \'I thought only of you.\' 💛✨",
      followUp: "What\'s the most meaningful gift you\'ve received?",
      realWorldTip: 'Make something by hand for someone you love this week.',
      reflectionPrompt: 'Why does a handmade gift sometimes feel more special than a bought one?'
    },

    {
      id: 'em_011',
      title: 'Eid Takbeer',
      setting: 'festival',
      characters: ['community'],
      ageRange: [4, 10],
      difficulty: 1,
      theme: 'empathy',
      growthDimensions: ['empathy', 'respect'],
      culture: ['IN'],
      tags: ['eid', 'community', 'joy', 'belonging'],
      situation: "On Eid morning, children are dressed in new clothes and hugging everyone. Their faces are glowing, arms open wide.",
      emotion: 'grateful',
      faceOptions: ['😊', '😔', '😤', '😰'],
      correctEmotion: '🤗',
      response: "Joyful and grateful — the special warmth of a celebration with people you love. 🌙✨",
      followUp: "What celebration makes you feel most joyful?",
      realWorldTip: 'Share what you\'re grateful for with your family today.',
      reflectionPrompt: 'What makes celebration joyful?'
    },

    {
      id: 'em_012',
      title: 'The Bad Dream',
      setting: 'home',
      characters: ['self'],
      ageRange: [3, 7],
      difficulty: 1,
      theme: 'empathy',
      growthDimensions: ['empathy', 'self-regulation'],
      culture: ['global'],
      tags: ['fear', 'nighttime', 'self'],
      situation: "A child wakes up in the middle of the night after a scary dream. They\'re sitting up in bed, looking around with big wide eyes.",
      emotion: 'scared',
      faceOptions: ['😨', '😄', '😢', '🤩'],
      correctEmotion: '😨',
      response: "Scared! Bad dreams feel so real. Remembering it WAS a dream takes a moment. 💙",
      followUp: "What do you do when you have a scary dream?",
      realWorldTip: 'If you wake up scared, try these: breathe slowly, remember it\'s a dream, think of something happy.',
      reflectionPrompt: 'What helps you feel safe when you\'re scared?'
    },

    {
      id: 'em_013',
      title: 'The Best Friend\'s Move',
      setting: 'home',
      characters: ['best friend'],
      ageRange: [6, 11],
      difficulty: 2,
      theme: 'empathy',
      growthDimensions: ['empathy'],
      culture: ['global'],
      tags: ['grief', 'friendship', 'change'],
      situation: "A child just found out their best friend is moving to another city next month. They\'re looking at old photos together, quiet, with a small sad smile.",
      emotion: 'missing/hopeful',
      faceOptions: ['😢', '😄', '😤', '😲'],
      correctEmotion: '😞',
      response: "Sad, but with love underneath. Missing someone before they even leave is called anticipatory grief — and it shows how much they mean to you. 💙",
      followUp: "Have you ever missed someone before you had to say goodbye?",
      realWorldTip: 'Write or draw something for someone important to you — before you need to say goodbye.',
      reflectionPrompt: 'Is it normal to feel sad about something that hasn\'t happened yet?'
    },

    {
      id: 'em_014',
      title: 'The Apology Accepted',
      setting: 'school',
      characters: ['classmate'],
      ageRange: [5, 10],
      difficulty: 1,
      theme: 'empathy',
      growthDimensions: ['empathy'],
      culture: ['global'],
      tags: ['forgiveness', 'relief', 'friendship'],
      situation: "After a big argument, one child says sorry. The other child pauses, then smiles and says \'It\'s okay.\' Both let out a long breath.",
      emotion: 'relieved/forgiving',
      faceOptions: ['😌', '😡', '😔', '😲'],
      correctEmotion: '😌',
      response: "Relief! Arguments feel like holding your breath. Forgiveness lets you breathe again. 🌸",
      followUp: "How does it feel to forgive someone?",
      realWorldTip: 'Is there someone you need to say sorry to? Today\'s a good day.',
      reflectionPrompt: 'Who benefits more from forgiveness — the person forgiven or the person who forgives?'
    },

    {
      id: 'em_015',
      title: 'The Proud Moment',
      setting: 'school',
      characters: ['parent', 'teacher'],
      ageRange: [5, 10],
      difficulty: 1,
      theme: 'empathy',
      growthDimensions: ['empathy'],
      culture: ['global'],
      tags: ['pride', 'achievement', 'family'],
      situation: "A child stands on stage to receive an award. Their parent is in the audience, wiping away a happy tear.",
      emotion: 'proud',
      faceOptions: ['🥹😤', '😄😄', '😴', '😢😤'],
      correctEmotion: '😊',
      response: "Both proud in different ways. The child feels accomplished; the parent feels full of love. 🌟💛",
      followUp: "When have you felt truly proud of yourself?",
      realWorldTip: 'Tell a parent or teacher about something you\'re proud of — big or small.',
      reflectionPrompt: 'What\'s the difference between being proud and being boastful?'
    },

    {
      id: 'em_016',
      title: 'The Namaz Interrupted',
      setting: 'home',
      characters: ['parent'],
      ageRange: [6, 11],
      difficulty: 2,
      theme: 'empathy',
      growthDimensions: ['empathy', 'respect'],
      culture: ['IN'],
      tags: ['respect', 'religion', 'patience'],
      situation: "A parent is praying (namaz). A child bursts in wanting to ask something urgently. The parent holds up one finger — \'just a moment.\'",
      emotion: 'impatient',
      faceOptions: ['😤😌', '😄😄', '😢😴', '😲😤'],
      correctEmotion: '🙄',
      response: "The child is impatient; the parent is peacefully focused. Both feelings are real — just different. 💛",
      followUp: "Can you think of things worth waiting for?",
      realWorldTip: 'Practice waiting patiently for someone to finish what they\'re doing before interrupting.',
      reflectionPrompt: 'How do you feel when someone interrupts YOU during something important?'
    },

    {
      id: 'em_017',
      title: 'The Lonely Diwali',
      setting: 'festival',
      characters: ['grandparent far away'],
      ageRange: [5, 10],
      difficulty: 2,
      theme: 'empathy',
      growthDimensions: ['empathy'],
      culture: ['IN'],
      tags: ['loneliness', 'diwali', 'family', 'distance'],
      situation: "A grandparent is video-calling on Diwali night from far away. They\'re smiling but their eyes look a little watery as they watch the fireworks through the screen.",
      emotion: 'bittersweet',
      faceOptions: ['😊😢', '😄😤', '😴😲', '😂😡'],
      correctEmotion: '😥',
      response: "Happy to see family AND lonely for being so far. Two feelings living together. 💙🪔",
      followUp: "How do you show someone you love them when they\'re far away?",
      realWorldTip: 'Call or message a grandparent or relative who lives far away this week.',
      reflectionPrompt: 'How do you stay close to people who live far away?'
    },

    {
      id: 'em_018',
      title: 'The Embarrassing Moment',
      setting: 'school',
      characters: ['classmates'],
      ageRange: [6, 11],
      difficulty: 2,
      theme: 'empathy',
      growthDimensions: ['empathy', 'self-regulation'],
      culture: ['global'],
      tags: ['embarrassment', 'school', 'feelings'],
      situation: "During a class presentation, a child mispronounces a big word. A few classmates giggle. The presenter goes red and looks at the floor.",
      emotion: 'embarrassed',
      faceOptions: ['😳', '😄', '😠', '😴'],
      correctEmotion: '😳',
      response: "Embarrassed! That hot-faced, wanting-to-disappear feeling. Everyone has felt this. 💙",
      followUp: "What do YOU do when you feel embarrassed?",
      realWorldTip: 'If someone makes a mistake, don\'t laugh. Give them an encouraging nod instead.',
      reflectionPrompt: 'How quickly does embarrassment pass when people are kind to you?'
    },

    {
      id: 'em_019',
      title: 'The Secret Admirer Drawing',
      setting: 'school',
      characters: ['unknown admirer'],
      ageRange: [6, 10],
      difficulty: 1,
      theme: 'empathy',
      growthDimensions: ['empathy'],
      culture: ['global'],
      tags: ['surprise', 'kindness', 'happiness'],
      situation: "A child finds a beautiful drawing on their desk with a note that says \'You\'re a great friend.\' They look around, wondering who left it, smiling big.",
      emotion: 'touched/loved',
      faceOptions: ['🥹', '😤', '😔', '😲'],
      correctEmotion: '🥹',
      response: "Touched, curious, and happy all at once! Unexpected kindness hits differently. 🌸✨",
      followUp: "Have you ever done something kind anonymously?",
      realWorldTip: 'Leave an anonymous kind note for someone today.',
      reflectionPrompt: 'Why does anonymous kindness feel so special?'
    },

    {
      id: 'em_020',
      title: 'The Missing Pet',
      setting: 'home',
      characters: ['family pet'],
      ageRange: [4, 9],
      difficulty: 2,
      theme: 'empathy',
      growthDimensions: ['empathy'],
      culture: ['global'],
      tags: ['sadness', 'pet', 'loss', 'family'],
      situation: "A child\'s pet has gone missing. They\'re walking through the neighbourhood calling the pet\'s name, checking every bush.",
      emotion: 'worried',
      faceOptions: ['😟', '😄', '😤', '😴'],
      correctEmotion: '😟',
      response: "Worried, sad, but still hoping. That mix of fear and hope is very real. 💙",
      followUp: "What would you do to help someone whose pet was missing?",
      realWorldTip: 'Take care of an animal or plant today — even just giving it water or attention.',
      reflectionPrompt: 'Why do we love pets so much?'
    },

    {
      id: 'em_021',
      title: 'Ganesh Chaturthi Visarjan',
      setting: 'festival',
      characters: ['family', 'community'],
      ageRange: [5, 11],
      difficulty: 2,
      theme: 'empathy',
      growthDimensions: ['empathy', 'self-regulation'],
      culture: ['IN'],
      tags: ['ganesh chaturthi', 'visarjan', 'bittersweet', 'festival'],
      situation: "At Ganesh Visarjan, a child watches the beloved Ganesh idol being immersed in the water. They\'re singing and clapping, but there are also tears on their cheeks.",
      emotion: 'bittersweet',
      faceOptions: ['😊😢', '😤😄', '😴😲', '😡😂'],
      correctEmotion: '😥',
      response: "Bittersweet — joy and sadness woven together. Some of life\'s most beautiful moments feel exactly like this. 🌸💛",
      followUp: "Can you think of other moments that feel bittersweet?",
      realWorldTip: 'It\'s okay to feel happy and sad at the same time. Tell someone about a bittersweet moment.',
      reflectionPrompt: 'Why do some endings make us both happy and sad?'
    },

    {
      id: 'em_022',
      title: 'The Group Hug',
      setting: 'school',
      characters: ['whole class'],
      ageRange: [3, 8],
      difficulty: 1,
      theme: 'empathy',
      growthDimensions: ['empathy'],
      culture: ['global'],
      tags: ['belonging', 'happiness', 'community'],
      situation: "At the end of a school trip, the whole class has a spontaneous group hug. Everyone is laughing and squeezing each other.",
      emotion: 'excited/joyful',
      faceOptions: ['😄', '😔', '😤', '😨'],
      correctEmotion: '🥳',
      response: "Pure joy and belonging! The feeling of being part of something bigger than yourself. 🌟",
      followUp: "When do YOU feel like you truly belong somewhere?",
      realWorldTip: 'Tell your class or friend group one thing you love about being with them.',
      reflectionPrompt: 'What does it feel like to belong?'
    },

    {
      id: 'em_023',
      title: 'The Big Test Tomorrow',
      setting: 'home',
      characters: ['self'],
      ageRange: [7, 12],
      difficulty: 1,
      theme: 'empathy',
      growthDimensions: ['empathy', 'self-regulation'],
      culture: ['global'],
      tags: ['anxiety', 'school', 'worry'],
      situation: "The night before a big test, a child is lying in bed staring at the ceiling. They\'ve studied, but can\'t stop thinking \'What if I forget everything?\'",
      emotion: 'nervous/anxious',
      faceOptions: ['😰', '😄', '😠', '😴'],
      correctEmotion: '😰',
      response: "Anxious! That buzzing, restless, worried feeling the night before something big. So normal. 💛",
      followUp: "What tricks help you calm down before something important?",
      realWorldTip: 'Try the 5-4-3-2-1 method: 5 things you see, 4 you hear, 3 you can touch, 2 you smell, 1 you taste.',
      reflectionPrompt: 'What helps anxiety more — avoiding the worry or facing it?'
    },

    {
      id: 'em_024',
      title: 'The Lohri Bonfire',
      setting: 'festival',
      characters: ['family', 'community'],
      ageRange: [4, 10],
      difficulty: 1,
      theme: 'empathy',
      growthDimensions: ['empathy'],
      culture: ['IN'],
      tags: ['lohri', 'festival', 'warmth', 'community'],
      situation: "A family is dancing around the Lohri bonfire. The firelight glows on everyone\'s faces. The child looks from face to face — everyone is laughing.",
      emotion: 'grateful',
      faceOptions: ['😊', '😤', '😔', '😲'],
      correctEmotion: '🤗',
      response: "Warm, grateful, and joyful. Being with people you love in the light of a fire — few feelings match it. 🔥💛",
      followUp: "What is your favourite family celebration and how does it make you feel?",
      realWorldTip: 'Thank your family for a celebration you love. Tell them what it means to you.',
      reflectionPrompt: 'Why do shared celebrations feel so special?'
    },

    {
      id: 'em_025',
      title: 'The Art Rejected',
      setting: 'school',
      characters: ['teacher', 'classmates'],
      ageRange: [6, 11],
      difficulty: 2,
      theme: 'empathy',
      growthDimensions: ['empathy', 'self-regulation'],
      culture: ['global'],
      tags: ['disappointment', 'rejection', 'art', 'resilience'],
      situation: "A child worked very hard on a painting for the school display. The teacher chose other paintings and not theirs. They stare at their painting alone in the corner.",
      emotion: 'hurt/disappointed',
      faceOptions: ['😔', '😄', '😤', '😲'],
      correctEmotion: '😔',
      response: "Hurt and disappointed. Working hard and not being chosen stings deeply. 💙",
      followUp: "What would you say to this child?",
      realWorldTip: 'Notice someone\'s effort today — compliment what they tried, not just what worked.',
      reflectionPrompt: 'How do you keep trying after a disappointment?'
    },

    {
      id: 'em_026',
      title: 'Graduation Day',
      setting: 'school',
      characters: ['teacher', 'classmates', 'parent'],
      ageRange: [7, 12],
      difficulty: 2,
      theme: 'empathy',
      growthDimensions: ['empathy'],
      culture: ['global'],
      tags: ['graduation', 'mixed feelings', 'transition'],
      situation: "On the last day of school, children are signing each other\'s books, taking photos, hugging teachers. Some are laughing, some are crying, some are doing both.",
      emotion: 'bittersweet',
      faceOptions: ['😊😢', '😤😄', '😴😔', '🤩😤'],
      correctEmotion: '😥',
      response: "Excited for what\'s coming AND sad to leave behind what they love. That\'s how the biggest chapters end. 💙✨",
      followUp: "Think about something you\'ve left behind that you still miss.",
      realWorldTip: 'Write a thank-you note to a teacher who made a difference for you.',
      reflectionPrompt: 'Is it possible to be excited and scared about the same thing?'
    },
    {
      "id": "em_027",
      "title": "The Birthday Surprise",
      "setting": "home",
      "characters": [
        "child"
      ],
      "ageRange": [
        3,
        8
      ],
      "difficulty": 1,
      "theme": "joy",
      "growthDimensions": [
        "empathy"
      ],
      "culture": [
        "IN"
      ],
      "tags": [
        "feelings",
        "joy",
        "birthday"
      ],
      "situation": "It's your birthday and your family brings out a big cake with candles, singing your name. Your eyes go wide and you can't stop smiling. What are you feeling?",
      "emotion": "excited/joyful",
      "faceOptions": [
        "🥳",
        "😢",
        "😴",
        "😟"
      ],
      "correctEmotion": "🥳",
      "response": "Excited and joyful! Birthdays full of love and surprises make our hearts dance. 🎉",
      "followUp": "What makes you feel this excited?",
      "realWorldTip": "Notice the happy, bouncy feeling when something wonderful happens — that's excitement!",
      "reflectionPrompt": "What does your body feel like when you're really excited?"
    },
    {
      "id": "em_028",
      "title": "The Lost Balloon",
      "setting": "park",
      "characters": [
        "child"
      ],
      "ageRange": [
        3,
        8
      ],
      "difficulty": 1,
      "theme": "sadness",
      "growthDimensions": [
        "empathy"
      ],
      "culture": [
        "US"
      ],
      "tags": [
        "feelings",
        "sadness",
        "park"
      ],
      "situation": "You're holding a bright red balloon at the park when it slips from your hand and floats away into the sky. You watch it disappear. What are you feeling?",
      "emotion": "sad",
      "faceOptions": [
        "😢",
        "😄",
        "😲",
        "😴"
      ],
      "correctEmotion": "😢",
      "response": "Sad — watching something you loved float away is hard. It's okay to feel sad. 💙",
      "followUp": "What might help you feel a little better?",
      "realWorldTip": "When we lose something we like, feeling sad is natural and okay.",
      "reflectionPrompt": "What helps you when you feel sad?"
    },
    {
      "id": "em_029",
      "title": "The Dark Room",
      "setting": "home",
      "characters": [
        "child"
      ],
      "ageRange": [
        3,
        8
      ],
      "difficulty": 1,
      "theme": "fear",
      "growthDimensions": [
        "empathy"
      ],
      "culture": [
        "IN"
      ],
      "tags": [
        "feelings",
        "fear",
        "home"
      ],
      "situation": "The lights suddenly go out and the whole room is dark. You can't see anything and you hear a strange noise. Your heart beats fast. What are you feeling?",
      "emotion": "scared",
      "faceOptions": [
        "😨",
        "😄",
        "🤗",
        "😴"
      ],
      "correctEmotion": "😨",
      "response": "Scared! The dark and strange sounds can feel frightening. It's okay — you're safe. 💙",
      "followUp": "What makes you feel safe when you're scared?",
      "realWorldTip": "Feeling scared is your body's way of being careful. Telling a grown-up helps.",
      "reflectionPrompt": "What helps you feel brave when you're scared?"
    },
    {
      "id": "em_030",
      "title": "The New Puppy",
      "setting": "home",
      "characters": [
        "child",
        "puppy"
      ],
      "ageRange": [
        3,
        8
      ],
      "difficulty": 1,
      "theme": "joy",
      "growthDimensions": [
        "empathy"
      ],
      "culture": [
        "global"
      ],
      "tags": [
        "feelings",
        "joy",
        "pets"
      ],
      "situation": "Your family brings home a soft, wiggly new puppy who licks your face and wags its tail. You giggle and hug it close. What are you feeling?",
      "emotion": "happy/joyful",
      "faceOptions": [
        "😄",
        "😢",
        "😰",
        "😠"
      ],
      "correctEmotion": "😄",
      "response": "Happy and joyful! A cuddly new friend fills your heart with warmth and giggles. 🐶",
      "followUp": "What makes you feel this happy?",
      "realWorldTip": "Happiness is that warm, giggly feeling when something lovely happens.",
      "reflectionPrompt": "What's something that always makes you happy?"
    },
    {
      "id": "em_031",
      "title": "The Missed Turn",
      "setting": "school",
      "characters": [
        "child",
        "classmates"
      ],
      "ageRange": [
        3,
        8
      ],
      "difficulty": 1,
      "theme": "frustration",
      "growthDimensions": [
        "empathy"
      ],
      "culture": [
        "IN"
      ],
      "tags": [
        "feelings",
        "frustration",
        "school"
      ],
      "situation": "You waited a long time for your turn on the swing, but when it's finally your turn, another child jumps on instead. You stamp your foot. What are you feeling?",
      "emotion": "angry/frustrated",
      "faceOptions": [
        "😤",
        "😄",
        "🥹",
        "😴"
      ],
      "correctEmotion": "😤",
      "response": "Frustrated! When something feels unfair, it's normal to feel angry. Take a deep breath. 💨",
      "followUp": "What could you do when you feel frustrated?",
      "realWorldTip": "When you feel frustrated, taking a slow breath helps before you act.",
      "reflectionPrompt": "What helps you calm down when you're frustrated?"
    },
    {
      "id": "em_032",
      "title": "The Spilled Paint",
      "setting": "school",
      "characters": [
        "child",
        "classmates"
      ],
      "ageRange": [
        3,
        8
      ],
      "difficulty": 1,
      "theme": "embarrassment",
      "growthDimensions": [
        "empathy"
      ],
      "culture": [
        "US"
      ],
      "tags": [
        "feelings",
        "embarrassment",
        "school"
      ],
      "situation": "You knock over a jar of paint in front of the whole class and it splashes everywhere. Everyone turns to look at you. Your cheeks feel hot. What are you feeling?",
      "emotion": "embarrassed",
      "faceOptions": [
        "😳",
        "😄",
        "😴",
        "🥳"
      ],
      "correctEmotion": "😳",
      "response": "Embarrassed! When everyone looks after a mistake, our cheeks get warm. It happens to everyone. 💙",
      "followUp": "What could a friend say to help you feel better?",
      "realWorldTip": "Everyone feels embarrassed sometimes. Mistakes are how we learn.",
      "reflectionPrompt": "What helps you when you feel embarrassed?"
    },
    {
      "id": "em_033",
      "title": "The Grandparent Visit",
      "setting": "home",
      "characters": [
        "child",
        "grandparents"
      ],
      "ageRange": [
        3,
        8
      ],
      "difficulty": 1,
      "theme": "joy",
      "growthDimensions": [
        "empathy"
      ],
      "culture": [
        "IN"
      ],
      "tags": [
        "feelings",
        "joy",
        "family"
      ],
      "situation": "Your grandparents who live far away are coming to visit today! You keep running to the window to look for their car. What are you feeling?",
      "emotion": "excited/joyful",
      "faceOptions": [
        "🥳",
        "😢",
        "😨",
        "😟"
      ],
      "correctEmotion": "🥳",
      "response": "Excited and joyful! Seeing people you love after a long time fills you with happy energy. 🎉",
      "followUp": "Who are you most excited to see?",
      "realWorldTip": "That can't-sit-still feeling when something good is coming is excitement!",
      "reflectionPrompt": "What makes you feel excited and bouncy?"
    },
    {
      "id": "em_034",
      "title": "The Test Results",
      "setting": "school",
      "characters": [
        "student"
      ],
      "ageRange": [
        5,
        11
      ],
      "difficulty": 1,
      "theme": "worry",
      "growthDimensions": [
        "empathy"
      ],
      "culture": [
        "IN"
      ],
      "tags": [
        "feelings",
        "worry",
        "school"
      ],
      "situation": "The teacher is about to hand back the test results. You're not sure how you did, and you keep biting your lip and tapping your foot. What are you feeling?",
      "emotion": "worried",
      "faceOptions": [
        "😟",
        "😄",
        "🥳",
        "🤗"
      ],
      "correctEmotion": "😟",
      "response": "Worried! Not knowing how something turned out makes us anxious. Deep breaths help. 💙",
      "followUp": "What helps you when you're worried about something?",
      "realWorldTip": "Worry is that uneasy feeling before something uncertain. Talking about it helps.",
      "reflectionPrompt": "What do you do when you feel worried?"
    },
    {
      "id": "em_035",
      "title": "The Helping Hand",
      "setting": "home",
      "characters": [
        "child",
        "parent"
      ],
      "ageRange": [
        5,
        11
      ],
      "difficulty": 1,
      "theme": "gratitude",
      "growthDimensions": [
        "empathy"
      ],
      "culture": [
        "US"
      ],
      "tags": [
        "feelings",
        "gratitude",
        "family"
      ],
      "situation": "You were struggling with something hard, and your parent quietly sat down and helped you until it was done. You feel warm inside and want to hug them. What are you feeling?",
      "emotion": "grateful",
      "faceOptions": [
        "🤗",
        "😠",
        "😢",
        "😴"
      ],
      "correctEmotion": "🤗",
      "response": "Grateful! That warm, thankful feeling when someone helps you is gratitude. 💛",
      "followUp": "How could you show someone you're grateful?",
      "realWorldTip": "Gratitude is the warm feeling of being thankful for someone's kindness.",
      "reflectionPrompt": "Who are you grateful for, and why?"
    },
    {
      "id": "em_036",
      "title": "The First Bike Ride",
      "setting": "park",
      "characters": [
        "child",
        "parent"
      ],
      "ageRange": [
        5,
        11
      ],
      "difficulty": 1,
      "theme": "pride",
      "growthDimensions": [
        "empathy"
      ],
      "culture": [
        "IN"
      ],
      "tags": [
        "feelings",
        "pride",
        "achievement"
      ],
      "situation": "After many tries, you finally ride your bike all by yourself without anyone holding on! You did it! You sit up tall with a big smile. What are you feeling?",
      "emotion": "proud",
      "faceOptions": [
        "😊",
        "😢",
        "😨",
        "😟"
      ],
      "correctEmotion": "😊",
      "response": "Proud! That tall, glowing feeling when you achieve something hard is pride. You earned it! 🌟",
      "followUp": "What's something else you're proud of?",
      "realWorldTip": "Pride is the happy, accomplished feeling after you work hard and succeed.",
      "reflectionPrompt": "What's something you worked hard to learn?"
    },
    {
      "id": "em_037",
      "title": "The Surprise Visitor",
      "setting": "school",
      "characters": [
        "student",
        "old friend"
      ],
      "ageRange": [
        5,
        11
      ],
      "difficulty": 1,
      "theme": "surprise",
      "growthDimensions": [
        "empathy"
      ],
      "culture": [
        "global"
      ],
      "tags": [
        "feelings",
        "surprise",
        "friendship"
      ],
      "situation": "You walk into class and your best friend who moved away last year is standing there, back to visit! Your mouth drops open and your eyes go wide. What are you feeling?",
      "emotion": "surprised/happy",
      "faceOptions": [
        "😲",
        "😢",
        "😴",
        "😟"
      ],
      "correctEmotion": "😲",
      "response": "Surprised and happy! An unexpected wonderful moment can make your jaw drop with joy. 🎉",
      "followUp": "What's the best surprise you've ever had?",
      "realWorldTip": "Surprise is that wide-eyed feeling when something unexpected happens — and it can be happy!",
      "reflectionPrompt": "How does your face change when you're surprised?"
    },
    {
      "id": "em_038",
      "title": "The Winning Goal",
      "setting": "park",
      "characters": [
        "child",
        "team"
      ],
      "ageRange": [
        5,
        11
      ],
      "difficulty": 1,
      "theme": "pride",
      "growthDimensions": [
        "empathy"
      ],
      "culture": [
        "US"
      ],
      "tags": [
        "feelings",
        "pride",
        "sports"
      ],
      "situation": "You score the winning goal for your team in the final seconds of the game! Your teammates lift you up cheering. You stand tall with the biggest smile. What are you feeling?",
      "emotion": "proud",
      "faceOptions": [
        "😊",
        "😢",
        "😰",
        "🙄"
      ],
      "correctEmotion": "😊",
      "response": "Proud! That glowing, tall feeling when you achieve something great is pride. You earned it! 🌟",
      "followUp": "What's a moment you felt really proud of yourself?",
      "realWorldTip": "Pride is the wonderful, accomplished feeling after you succeed at something.",
      "reflectionPrompt": "What achievement are you most proud of?"
    },
    {
      "id": "em_039",
      "title": "The Big Presentation",
      "setting": "school",
      "characters": [
        "student",
        "class"
      ],
      "ageRange": [
        8,
        12
      ],
      "difficulty": 1,
      "theme": "nervousness",
      "growthDimensions": [
        "empathy"
      ],
      "culture": [
        "IN"
      ],
      "tags": [
        "feelings",
        "nervousness",
        "school"
      ],
      "situation": "You're about to present in front of the whole class. Your palms are sweaty, your heart races, and your stomach feels fluttery as you walk to the front. What are you feeling?",
      "emotion": "nervous/anxious",
      "faceOptions": [
        "😰",
        "😄",
        "🥳",
        "😴"
      ],
      "correctEmotion": "😰",
      "response": "Nervous! That fluttery, sweaty-palms feeling before something big is anxiety. It's normal! 💙",
      "followUp": "What helps you calm your nerves?",
      "realWorldTip": "Nervousness before a big moment is normal. Slow breaths and preparation help.",
      "reflectionPrompt": "What helps you feel calmer when you're nervous?"
    },
    {
      "id": "em_040",
      "title": "The Missed Call",
      "setting": "home",
      "characters": [
        "child",
        "faraway friend"
      ],
      "ageRange": [
        8,
        12
      ],
      "difficulty": 1,
      "theme": "missing",
      "growthDimensions": [
        "empathy"
      ],
      "culture": [
        "US"
      ],
      "tags": [
        "feelings",
        "missing",
        "friendship"
      ],
      "situation": "Your close friend moved to another city. You see an old photo of you two together and wish you could hang out like before. You hope you'll see them again soon. What are you feeling?",
      "emotion": "missing/hopeful",
      "faceOptions": [
        "😞",
        "🥳",
        "😤",
        "😲"
      ],
      "correctEmotion": "😞",
      "response": "Missing them — with a little hope. Longing for someone far away, while hoping to reunite, is bittersweet. 💙",
      "followUp": "How could you stay connected with a faraway friend?",
      "realWorldTip": "Missing someone shows how much they mean to you. Staying in touch helps.",
      "reflectionPrompt": "How do you stay close to people who are far away?"
    },
    {
      "id": "em_041",
      "title": "The Returned Lost Item",
      "setting": "home",
      "characters": [
        "student"
      ],
      "ageRange": [
        8,
        12
      ],
      "difficulty": 1,
      "theme": "relief",
      "growthDimensions": [
        "empathy"
      ],
      "culture": [
        "IN"
      ],
      "tags": [
        "feelings",
        "relief",
        "school"
      ],
      "situation": "You thought you lost your favourite book that means a lot to you. You searched everywhere, stomach in knots. Then a friend returns it — they'd borrowed it. You let out a big breath. What are you feeling?",
      "emotion": "relieved/forgiving",
      "faceOptions": [
        "😌",
        "😨",
        "🥳",
        "😟"
      ],
      "correctEmotion": "😌",
      "response": "Relieved! That big-breath, weight-lifted feeling when a worry goes away is relief. 💙",
      "followUp": "What's something that made you feel relieved recently?",
      "realWorldTip": "Relief is the calm that washes over you when a worry finally ends.",
      "reflectionPrompt": "How does your body feel when a worry goes away?"
    },
    {
      "id": "em_042",
      "title": "The Waiting Game",
      "setting": "school",
      "characters": [
        "student"
      ],
      "ageRange": [
        8,
        12
      ],
      "difficulty": 1,
      "theme": "impatience",
      "growthDimensions": [
        "empathy"
      ],
      "culture": [
        "global"
      ],
      "tags": [
        "feelings",
        "impatience",
        "school"
      ],
      "situation": "The teacher said results would come 'soon,' but it's been ages. You keep checking the clock, sighing, and fidgeting in your seat, wishing it would just happen already. What are you feeling?",
      "emotion": "impatient",
      "faceOptions": [
        "🙄",
        "🥹",
        "😨",
        "🤗"
      ],
      "correctEmotion": "🙄",
      "response": "Impatient! That restless, clock-watching, 'hurry up' feeling is impatience. We all feel it! 💙",
      "followUp": "What helps you wait when you're impatient?",
      "realWorldTip": "Impatience is the restless feeling of wanting something to happen NOW. Distractions help the wait.",
      "reflectionPrompt": "What helps you be patient when waiting is hard?"
    },
    {
      "id": "em_043",
      "title": "The Heartfelt Letter",
      "setting": "home",
      "characters": [
        "student",
        "parent"
      ],
      "ageRange": [
        8,
        12
      ],
      "difficulty": 1,
      "theme": "touched",
      "growthDimensions": [
        "empathy"
      ],
      "culture": [
        "IN"
      ],
      "tags": [
        "feelings",
        "touched",
        "family"
      ],
      "situation": "Your parent leaves a handwritten note in your bag saying how proud they are of you and how much they love you. Reading it, your eyes get a little teary in a warm way. What are you feeling?",
      "emotion": "touched/loved",
      "faceOptions": [
        "🥹",
        "😤",
        "😨",
        "🙄"
      ],
      "correctEmotion": "🥹",
      "response": "Touched and loved! That warm, happy-teary feeling from someone's love is being touched. 💛",
      "followUp": "How could you show someone you love them?",
      "realWorldTip": "Feeling touched is that warm, almost-teary feeling when someone shows they care deeply.",
      "reflectionPrompt": "What's something someone did that touched your heart?"
    },
    {
      "id": "em_044",
      "title": "The Left Out Group",
      "setting": "school",
      "characters": [
        "student",
        "classmates"
      ],
      "ageRange": [
        8,
        12
      ],
      "difficulty": 1,
      "theme": "loneliness",
      "growthDimensions": [
        "empathy"
      ],
      "culture": [
        "US"
      ],
      "tags": [
        "feelings",
        "loneliness",
        "school"
      ],
      "situation": "At lunch, you see your group of friends made plans for the weekend without inviting you. They're laughing together across the room. You sit by yourself, feeling small. What are you feeling?",
      "emotion": "lonely/left out",
      "faceOptions": [
        "🥺",
        "🥳",
        "😲",
        "🤗"
      ],
      "correctEmotion": "🥺",
      "response": "Lonely and left out. Being excluded by friends really hurts. Your feelings are valid. 💙",
      "followUp": "What could you do when you feel left out?",
      "realWorldTip": "Feeling left out is painful and real. Talking to someone you trust can help.",
      "reflectionPrompt": "What helps you when you feel left out?"
    },
    {
      "id": "em_045",
      "title": "The Difficult Goodbye",
      "setting": "school",
      "characters": [
        "student",
        "graduating friend"
      ],
      "ageRange": [
        8,
        12
      ],
      "difficulty": 1,
      "theme": "bittersweet",
      "growthDimensions": [
        "empathy"
      ],
      "culture": [
        "IN"
      ],
      "tags": [
        "feelings",
        "bittersweet",
        "friendship"
      ],
      "situation": "Your best friend is moving to a new school. You're happy for their exciting new adventure, but also sad you won't see them every day. You smile and tear up at the same time. What are you feeling?",
      "emotion": "bittersweet",
      "faceOptions": [
        "😥",
        "🥳",
        "😨",
        "🙄"
      ],
      "correctEmotion": "😥",
      "response": "Bittersweet — happy and sad mixed together. Big life changes often feel both ways at once. 💙",
      "followUp": "Can you feel two emotions at the same time?",
      "realWorldTip": "Bittersweet is when happy and sad mix together — a very grown-up kind of feeling.",
      "reflectionPrompt": "Have you ever felt happy and sad at the same time?"
    },
    {
      "id": "em_046",
      "title": "The Almost Accident",
      "setting": "home",
      "characters": [
        "child",
        "sibling"
      ],
      "ageRange": [
        8,
        12
      ],
      "difficulty": 1,
      "theme": "worry",
      "growthDimensions": [
        "empathy"
      ],
      "culture": [
        "global"
      ],
      "tags": [
        "feelings",
        "worry",
        "family"
      ],
      "situation": "Your younger sibling climbed too high on the playground and wobbled. They're okay now, but you keep thinking about what could have happened and feel uneasy watching them. What are you feeling?",
      "emotion": "worried",
      "faceOptions": [
        "😟",
        "🥳",
        "😄",
        "🙄"
      ],
      "correctEmotion": "😟",
      "response": "Worried! Caring about someone's safety creates that uneasy, watchful feeling. It shows you love them. 💙",
      "followUp": "How can you help keep someone you care about safe?",
      "realWorldTip": "Worry about others' safety comes from caring. Talking about it eases the feeling.",
      "reflectionPrompt": "Who do you worry about because you care about them?"
    },
    {
      "id": "em_047",
      "title": "The Quiet Helper",
      "setting": "home",
      "characters": [
        "child",
        "grandmother"
      ],
      "ageRange": [
        4,
        9
      ],
      "difficulty": 2,
      "theme": "touched",
      "growthDimensions": [
        "empathy"
      ],
      "culture": [
        "IN"
      ],
      "tags": [
        "feelings",
        "touched",
        "family"
      ],
      "situation": "You were feeling down, and without saying anything, your grandmother quietly made your favourite snack and left it by your side with a gentle pat. Your throat feels tight in a warm way. What are you feeling?",
      "emotion": "touched/loved",
      "faceOptions": [
        "🥹",
        "😤",
        "😨",
        "🙄"
      ],
      "correctEmotion": "🥹",
      "response": "Touched and loved! When someone shows they care without words, it warms us deeply. 💛",
      "followUp": "How does it feel when someone cares without being asked?",
      "realWorldTip": "Sometimes the deepest care comes quietly. Noticing it is a gift.",
      "reflectionPrompt": "Has someone ever shown they cared without saying a word?"
    },
    {
      "id": "em_048",
      "title": "The Almost-Won Race",
      "setting": "school",
      "characters": [
        "child",
        "classmates"
      ],
      "ageRange": [
        4,
        9
      ],
      "difficulty": 2,
      "theme": "disappointment",
      "growthDimensions": [
        "empathy"
      ],
      "culture": [
        "US"
      ],
      "tags": [
        "feelings",
        "disappointment",
        "sports"
      ],
      "situation": "You practised so hard for the race and were sure you'd win, but you came in second by just a tiny bit. You smile for your friend who won, but your shoulders slump. What are you feeling?",
      "emotion": "hurt/disappointed",
      "faceOptions": [
        "😔",
        "🥳",
        "😲",
        "🤗"
      ],
      "correctEmotion": "😔",
      "response": "Disappointed. When we hope for something and just miss it, it stings — even if we're glad for others. 💙",
      "followUp": "What helps you when things don't go as you hoped?",
      "realWorldTip": "Disappointment is the let-down feeling when hopes don't quite come true. It's okay to feel it.",
      "reflectionPrompt": "How do you handle it when something doesn't go your way?"
    },
    {
      "id": "em_049",
      "title": "The Festival Without Friend",
      "setting": "festival",
      "characters": [
        "child",
        "faraway friend"
      ],
      "ageRange": [
        4,
        9
      ],
      "difficulty": 2,
      "theme": "missing",
      "growthDimensions": [
        "empathy"
      ],
      "culture": [
        "IN"
      ],
      "tags": [
        "feelings",
        "missing",
        "festival"
      ],
      "situation": "It's a big festival and everyone's celebrating, but your best friend who usually celebrates with you moved away. You enjoy the lights but keep wishing they were here, hoping to celebrate together next year. What are you feeling?",
      "emotion": "missing/hopeful",
      "faceOptions": [
        "😞",
        "🥳",
        "😤",
        "😲"
      ],
      "correctEmotion": "😞",
      "response": "Missing them, with hope. Longing for someone during special times, while hoping to reunite, is tender. 💙",
      "followUp": "How could you include a faraway friend in your celebration?",
      "realWorldTip": "Missing someone during happy times shows how much they mean to you.",
      "reflectionPrompt": "How do you keep faraway loved ones in your heart during celebrations?"
    },
    {
      "id": "em_050",
      "title": "The Broken Toy Forgiveness",
      "setting": "home",
      "characters": [
        "child",
        "sibling"
      ],
      "ageRange": [
        4,
        9
      ],
      "difficulty": 2,
      "theme": "relief",
      "growthDimensions": [
        "empathy"
      ],
      "culture": [
        "global"
      ],
      "tags": [
        "feelings",
        "relief",
        "family"
      ],
      "situation": "Your sibling accidentally broke your toy and was really sorry. You were upset at first, but after they apologised and helped fix it, you feel the anger melt away and let it go. What are you feeling?",
      "emotion": "relieved/forgiving",
      "faceOptions": [
        "😌",
        "😤",
        "😨",
        "🥳"
      ],
      "correctEmotion": "😌",
      "response": "Relieved and forgiving! Letting go of anger after someone makes things right brings peace. 💙",
      "followUp": "How does it feel to forgive someone?",
      "realWorldTip": "Forgiving someone who's truly sorry brings a calm, peaceful relief.",
      "reflectionPrompt": "How do you feel after you forgive someone?"
    },
    {
      "id": "em_051",
      "title": "The Class Award",
      "setting": "school",
      "characters": [
        "student",
        "classmates"
      ],
      "ageRange": [
        4,
        9
      ],
      "difficulty": 2,
      "theme": "pride",
      "growthDimensions": [
        "empathy"
      ],
      "culture": [
        "IN"
      ],
      "tags": [
        "feelings",
        "pride",
        "school"
      ],
      "situation": "The teacher announces you won an award for your hard work this term and asks you to come to the front. The class claps for you. You walk up with a quiet, glowing smile. What are you feeling?",
      "emotion": "proud",
      "faceOptions": [
        "😊",
        "😢",
        "😰",
        "🙄"
      ],
      "correctEmotion": "😊",
      "response": "Proud! That warm, glowing feeling when your effort is recognised is well-deserved pride. 🌟",
      "followUp": "What hard work are you proud of?",
      "realWorldTip": "Pride from being recognised for real effort is a wonderful, healthy feeling.",
      "reflectionPrompt": "What's something you worked hard at that deserves recognition?"
    },
    {
      "id": "em_052",
      "title": "The Sleepover Nerves",
      "setting": "home",
      "characters": [
        "child",
        "friend"
      ],
      "ageRange": [
        4,
        9
      ],
      "difficulty": 2,
      "theme": "nervousness",
      "growthDimensions": [
        "empathy"
      ],
      "culture": [
        "US"
      ],
      "tags": [
        "feelings",
        "nervousness",
        "friendship"
      ],
      "situation": "It's your first time sleeping over at a friend's house without your family. You're excited but your tummy feels fluttery and you're not sure what to expect. What are you feeling?",
      "emotion": "nervous/anxious",
      "faceOptions": [
        "😰",
        "🥳",
        "😄",
        "😤"
      ],
      "correctEmotion": "😰",
      "response": "Nervous! New experiences away from home can feel exciting and anxious at once. That's normal! 💙",
      "followUp": "What helps you feel braver about new things?",
      "realWorldTip": "Nervousness about new experiences is normal. A little courage helps you try them.",
      "reflectionPrompt": "What helps you feel ready for something new?"
    },
    {
      "id": "em_053",
      "title": "The Shared Victory",
      "setting": "park",
      "characters": [
        "child",
        "friend"
      ],
      "ageRange": [
        4,
        9
      ],
      "difficulty": 2,
      "theme": "grateful",
      "growthDimensions": [
        "empathy"
      ],
      "culture": [
        "IN"
      ],
      "tags": [
        "feelings",
        "grateful",
        "friendship"
      ],
      "situation": "You were about to give up climbing the tall play structure, but your friend stayed beside you, cheering you on until you made it to the top. You want to thank them so much. What are you feeling?",
      "emotion": "grateful",
      "faceOptions": [
        "🤗",
        "😠",
        "😢",
        "🙄"
      ],
      "correctEmotion": "🤗",
      "response": "Grateful! When someone believes in you and helps you succeed, thankfulness fills your heart. 💛",
      "followUp": "How could you thank someone who believed in you?",
      "realWorldTip": "Gratitude for someone's support is a warm way to honour their kindness.",
      "reflectionPrompt": "Who has cheered you on when you wanted to give up?"
    },
    {
      "id": "em_054",
      "title": "The Hidden Tears",
      "setting": "school",
      "characters": [
        "classmate"
      ],
      "ageRange": [
        4,
        9
      ],
      "difficulty": 2,
      "theme": "sadness",
      "growthDimensions": [
        "empathy"
      ],
      "culture": [
        "global"
      ],
      "tags": [
        "feelings",
        "sadness",
        "empathy"
      ],
      "situation": "A classmate is sitting alone, quietly wiping their eyes and trying to hide it. They keep looking down and won't talk. Even though they're not loud about it, what are they feeling?",
      "emotion": "sad",
      "faceOptions": [
        "😢",
        "🥳",
        "😲",
        "🙄"
      ],
      "correctEmotion": "😢",
      "response": "Sad. Sometimes sadness is quiet and hidden. Noticing it in others shows real empathy. 💙",
      "followUp": "How could you gently help a sad classmate?",
      "realWorldTip": "Sadness isn't always loud. Quietly noticing it in others is a kind skill.",
      "reflectionPrompt": "How can you tell when someone is sad even if they hide it?"
    },
    {
      "id": "em_055",
      "title": "The Surprise Reunion",
      "setting": "home",
      "characters": [
        "child",
        "soldier parent"
      ],
      "ageRange": [
        4,
        9
      ],
      "difficulty": 2,
      "theme": "surprise",
      "growthDimensions": [
        "empathy"
      ],
      "culture": [
        "IN"
      ],
      "tags": [
        "feelings",
        "surprise",
        "family"
      ],
      "situation": "Your parent who works far away was supposed to come home next month, but they suddenly walk through the door today! You freeze, eyes wide, then run to them. What are you feeling?",
      "emotion": "surprised/happy",
      "faceOptions": [
        "😲",
        "😤",
        "😴",
        "😟"
      ],
      "correctEmotion": "😲",
      "response": "Surprised and happy! An unexpected reunion with someone you love is a wonderful shock of joy. 🎉",
      "followUp": "What's the happiest surprise you can imagine?",
      "realWorldTip": "Happy surprises make our eyes go wide and our hearts leap with joy.",
      "reflectionPrompt": "How do you feel when something wonderful happens unexpectedly?"
    },
    {
      "id": "em_056",
      "title": "The Waiting Results",
      "setting": "school",
      "characters": [
        "student"
      ],
      "ageRange": [
        4,
        9
      ],
      "difficulty": 2,
      "theme": "impatience",
      "growthDimensions": [
        "empathy"
      ],
      "culture": [
        "US"
      ],
      "tags": [
        "feelings",
        "impatience",
        "school"
      ],
      "situation": "You're waiting to find out if you made the school play. The list goes up at lunch, but lunch feels like it's taking forever. You keep glancing at the clock and sighing. What are you feeling?",
      "emotion": "impatient",
      "faceOptions": [
        "🙄",
        "🥹",
        "😨",
        "🤗"
      ],
      "correctEmotion": "🙄",
      "response": "Impatient! That restless, can't-wait feeling when you want to know something NOW is impatience. 💙",
      "followUp": "What could you do to make waiting easier?",
      "realWorldTip": "Impatience is wanting something to happen faster. Finding a distraction helps the wait.",
      "reflectionPrompt": "What helps you when waiting feels too long?"
    },
    {
      "id": "em_057",
      "title": "The Forgotten Lines",
      "setting": "school",
      "characters": [
        "student",
        "audience"
      ],
      "ageRange": [
        5,
        10
      ],
      "difficulty": 2,
      "theme": "embarrassment",
      "growthDimensions": [
        "empathy"
      ],
      "culture": [
        "IN"
      ],
      "tags": [
        "feelings",
        "embarrassment",
        "school"
      ],
      "situation": "During the school play, you forget your lines in front of everyone and freeze. There's a long silence as the audience watches. Your face burns red. What are you feeling?",
      "emotion": "embarrassed",
      "faceOptions": [
        "😳",
        "🥳",
        "😴",
        "🤗"
      ],
      "correctEmotion": "😳",
      "response": "Embarrassed! Freezing up in front of others makes our faces burn. It happens to even the best performers. 💙",
      "followUp": "What could help you recover from an embarrassing moment?",
      "realWorldTip": "Embarrassment fades. Even famous actors forget lines sometimes!",
      "reflectionPrompt": "How do you bounce back after an embarrassing moment?"
    },
    {
      "id": "em_058",
      "title": "The Returned Pet",
      "setting": "home",
      "characters": [
        "child",
        "lost pet"
      ],
      "ageRange": [
        5,
        10
      ],
      "difficulty": 2,
      "theme": "relief",
      "growthDimensions": [
        "empathy"
      ],
      "culture": [
        "US"
      ],
      "tags": [
        "feelings",
        "relief",
        "pets"
      ],
      "situation": "Your cat went missing for two whole days and you were so scared. Then a neighbour brings it home, safe and sound. You hug your cat tight and finally breathe easy. What are you feeling?",
      "emotion": "relieved/forgiving",
      "faceOptions": [
        "😌",
        "😨",
        "🥳",
        "😟"
      ],
      "correctEmotion": "😌",
      "response": "Relieved! That big exhale when a scary worry finally ends is pure relief. 💙",
      "followUp": "What's a worry that turned out okay in the end?",
      "realWorldTip": "Relief is the calm wave that washes over you when something you feared resolves happily.",
      "reflectionPrompt": "How does your body feel when a big worry finally ends?"
    },
    {
      "id": "em_059",
      "title": "The Unfair Punishment",
      "setting": "school",
      "characters": [
        "student",
        "teacher"
      ],
      "ageRange": [
        5,
        10
      ],
      "difficulty": 2,
      "theme": "frustration",
      "growthDimensions": [
        "empathy"
      ],
      "culture": [
        "IN"
      ],
      "tags": [
        "feelings",
        "frustration",
        "school"
      ],
      "situation": "The whole class got punished for something only a few kids did, including you who did nothing wrong. You clench your fists, feeling it's so unfair. What are you feeling?",
      "emotion": "angry/frustrated",
      "faceOptions": [
        "😤",
        "🥳",
        "🥹",
        "😴"
      ],
      "correctEmotion": "😤",
      "response": "Frustrated! Being blamed unfairly creates a hot, clenched feeling. Take a breath before reacting. 💨",
      "followUp": "What's a calm way to handle feeling treated unfairly?",
      "realWorldTip": "Frustration at unfairness is natural. Calming down first helps you respond wisely.",
      "reflectionPrompt": "What helps you stay calm when something feels unfair?"
    },
    {
      "id": "em_060",
      "title": "The New Sibling",
      "setting": "home",
      "characters": [
        "child",
        "baby sibling",
        "parents"
      ],
      "ageRange": [
        5,
        10
      ],
      "difficulty": 2,
      "theme": "bittersweet",
      "growthDimensions": [
        "empathy"
      ],
      "culture": [
        "global"
      ],
      "tags": [
        "feelings",
        "bittersweet",
        "family"
      ],
      "situation": "Your family just had a new baby. You love your little sibling, but you also miss being the only one who got all the attention. You feel happy and a little sad at the same time. What are you feeling?",
      "emotion": "bittersweet",
      "faceOptions": [
        "😥",
        "🥳",
        "😨",
        "🙄"
      ],
      "correctEmotion": "😥",
      "response": "Bittersweet — love and a touch of loss mixed together. Big family changes often feel both ways. 💙",
      "followUp": "Can you love someone and still miss how things were?",
      "realWorldTip": "Bittersweet feelings — happy and sad together — are a normal part of big changes.",
      "reflectionPrompt": "Have you felt happy and sad about the same change?"
    },
    {
      "id": "em_061",
      "title": "The Crowded Ceremony",
      "setting": "temple",
      "characters": [
        "child",
        "family"
      ],
      "ageRange": [
        5,
        10
      ],
      "difficulty": 2,
      "theme": "overwhelmed",
      "growthDimensions": [
        "empathy"
      ],
      "culture": [
        "IN"
      ],
      "tags": [
        "feelings",
        "overwhelmed",
        "festival"
      ],
      "situation": "You're at a huge, crowded temple ceremony with loud bells, lots of people pushing, and bright lights everywhere. It's a lot all at once and you grip your parent's hand tightly. What are you feeling?",
      "emotion": "nervous/anxious",
      "faceOptions": [
        "😰",
        "🥳",
        "😄",
        "😊"
      ],
      "correctEmotion": "😰",
      "response": "Nervous and anxious! Big crowds and lots of noise can feel overwhelming. Staying close to a grown-up helps. 💙",
      "followUp": "What helps you feel calmer in busy, loud places?",
      "realWorldTip": "Loud, crowded places can make anyone anxious. Holding a trusted hand helps.",
      "reflectionPrompt": "What helps you feel safe in busy, noisy places?"
    },
    {
      "id": "em_062",
      "title": "The Picked Last",
      "setting": "school",
      "characters": [
        "student",
        "classmates"
      ],
      "ageRange": [
        5,
        10
      ],
      "difficulty": 2,
      "theme": "loneliness",
      "growthDimensions": [
        "empathy"
      ],
      "culture": [
        "US"
      ],
      "tags": [
        "feelings",
        "loneliness",
        "sports"
      ],
      "situation": "During team selection, you're picked last again while everyone else gets chosen early. You stand alone as the teams fill up, feeling small and unwanted. What are you feeling?",
      "emotion": "lonely/left out",
      "faceOptions": [
        "🥺",
        "🥳",
        "😲",
        "🤗"
      ],
      "correctEmotion": "🥺",
      "response": "Lonely and left out. Being chosen last hurts and can make you feel unwanted. Your feelings matter. 💙",
      "followUp": "What could a kind teammate do to help?",
      "realWorldTip": "Being picked last is painful. A kind word from someone can make a big difference.",
      "reflectionPrompt": "What would help you feel included when you're left out?"
    },
    {
      "id": "em_063",
      "title": "The Public Mistake",
      "setting": "school",
      "characters": [
        "student",
        "class"
      ],
      "ageRange": [
        9,
        12
      ],
      "difficulty": 2,
      "theme": "embarrassment",
      "growthDimensions": [
        "empathy"
      ],
      "culture": [
        "IN"
      ],
      "tags": [
        "feelings",
        "embarrassment",
        "school"
      ],
      "situation": "You confidently gave an answer in class, but it was completely wrong, and a few kids snickered. The teacher gently corrected you. Your ears feel hot and you want to disappear. What are you feeling?",
      "emotion": "embarrassed",
      "faceOptions": [
        "😳",
        "🥳",
        "😴",
        "😊"
      ],
      "correctEmotion": "😳",
      "response": "Embarrassed! Being publicly wrong stings, but mistakes are how everyone learns. The snickers fade fast. 💙",
      "followUp": "How can you handle making a mistake in front of others?",
      "realWorldTip": "Everyone makes public mistakes. The brave ones keep participating anyway.",
      "reflectionPrompt": "How do you recover when you're wrong in front of others?"
    },
    {
      "id": "em_064",
      "title": "The Parent's Sacrifice",
      "setting": "home",
      "characters": [
        "student",
        "parent"
      ],
      "ageRange": [
        9,
        12
      ],
      "difficulty": 2,
      "theme": "grateful",
      "growthDimensions": [
        "empathy"
      ],
      "culture": [
        "US"
      ],
      "tags": [
        "feelings",
        "grateful",
        "family"
      ],
      "situation": "You find out your parent gave up something they wanted so you could go on the school trip. Realising what they sacrificed for you, your heart swells with thankfulness. What are you feeling?",
      "emotion": "grateful",
      "faceOptions": [
        "🤗",
        "😤",
        "😨",
        "🙄"
      ],
      "correctEmotion": "🤗",
      "response": "Grateful! Realising someone sacrificed for you fills your heart with deep thankfulness. 💛",
      "followUp": "How could you show your gratitude for a sacrifice someone made?",
      "realWorldTip": "Recognising others' sacrifices for us is the root of deep gratitude.",
      "reflectionPrompt": "What sacrifice has someone made for you that you're grateful for?"
    },
    {
      "id": "em_065",
      "title": "The Rival's Success",
      "setting": "school",
      "characters": [
        "student",
        "rival"
      ],
      "ageRange": [
        9,
        12
      ],
      "difficulty": 2,
      "theme": "disappointment",
      "growthDimensions": [
        "empathy"
      ],
      "culture": [
        "IN"
      ],
      "tags": [
        "feelings",
        "disappointment",
        "school"
      ],
      "situation": "You worked incredibly hard for the top rank, but a classmate edged ahead of you. You congratulate them sincerely, but inside you feel let down by how close you came. What are you feeling?",
      "emotion": "hurt/disappointed",
      "faceOptions": [
        "😔",
        "🥳",
        "😲",
        "🤗"
      ],
      "correctEmotion": "😔",
      "response": "Disappointed. Coming so close to a goal and just missing it is genuinely hard, even when you're gracious. 💙",
      "followUp": "How do you stay motivated after a disappointment?",
      "realWorldTip": "Disappointment after near-misses is real. It can fuel you to keep growing.",
      "reflectionPrompt": "How do you bounce back from a near-miss?"
    },
    {
      "id": "em_066",
      "title": "The Long-Awaited News",
      "setting": "home",
      "characters": [
        "student",
        "family"
      ],
      "ageRange": [
        9,
        12
      ],
      "difficulty": 2,
      "theme": "relief",
      "growthDimensions": [
        "empathy"
      ],
      "culture": [
        "global"
      ],
      "tags": [
        "feelings",
        "relief",
        "family"
      ],
      "situation": "Your family was anxiously waiting for important news about a sick grandparent's health. When the doctor finally calls to say they'll be okay, everyone exhales together and you feel the tension leave your body. What are you feeling?",
      "emotion": "relieved/forgiving",
      "faceOptions": [
        "😌",
        "😨",
        "🥳",
        "😟"
      ],
      "correctEmotion": "😌",
      "response": "Relieved! When a deep worry about someone you love finally lifts, the relief is profound. 💙",
      "followUp": "How does it feel when a big family worry resolves well?",
      "realWorldTip": "Relief after worrying about a loved one is one of the most powerful calm feelings.",
      "reflectionPrompt": "How does your whole body feel when a big worry finally lifts?"
    },
    {
      "id": "em_067",
      "title": "The Sibling's New Bike",
      "setting": "home",
      "characters": [
        "child",
        "sibling"
      ],
      "ageRange": [
        5,
        10
      ],
      "difficulty": 3,
      "theme": "jealousy",
      "growthDimensions": [
        "empathy"
      ],
      "culture": [
        "IN"
      ],
      "tags": [
        "feelings",
        "jealousy",
        "family"
      ],
      "situation": "Your sibling got a shiny new bike for their birthday. You smile and say 'cool,' but inside you wish it were yours and feel a twinge watching them ride it. What are you really feeling?",
      "emotion": "jealous",
      "faceOptions": [
        "😒",
        "🥳",
        "😴",
        "🤗"
      ],
      "correctEmotion": "😒",
      "response": "Jealous! Wanting what someone else has is a feeling everyone gets sometimes. Naming it helps you handle it. 💙",
      "followUp": "What's a healthy way to handle jealous feelings?",
      "realWorldTip": "Jealousy is normal — even when we love someone. Noticing it honestly helps it pass.",
      "reflectionPrompt": "What do you do when you feel jealous of someone?"
    },
    {
      "id": "em_068",
      "title": "The Untold Truth",
      "setting": "school",
      "characters": [
        "child",
        "friend"
      ],
      "ageRange": [
        5,
        10
      ],
      "difficulty": 3,
      "theme": "guilt",
      "growthDimensions": [
        "empathy"
      ],
      "culture": [
        "US"
      ],
      "tags": [
        "feelings",
        "guilt",
        "friendship"
      ],
      "situation": "You accidentally broke your friend's toy and quickly put it back without telling them. Now every time they smile at you, your stomach twists and you can't quite look them in the eye. What are you feeling?",
      "emotion": "guilty",
      "faceOptions": [
        "😣",
        "🥳",
        "😲",
        "😴"
      ],
      "correctEmotion": "😣",
      "response": "Guilty! That uncomfortable, twisty feeling when we've done something we know wasn't right is guilt. It nudges us to make things right. 💙",
      "followUp": "What could ease a guilty feeling?",
      "realWorldTip": "Guilt is your conscience telling you to make something right. Owning up usually helps.",
      "reflectionPrompt": "What helps you feel better after you've done something wrong?"
    },
    {
      "id": "em_069",
      "title": "The Too-Much Day",
      "setting": "school",
      "characters": [
        "student"
      ],
      "ageRange": [
        5,
        10
      ],
      "difficulty": 3,
      "theme": "overwhelmed",
      "growthDimensions": [
        "empathy"
      ],
      "culture": [
        "IN"
      ],
      "tags": [
        "feelings",
        "overwhelmed",
        "school"
      ],
      "situation": "You have a test, a project due, a friend who's upset with you, and chores all on the same day. It feels like too much and you don't know where to start. What are you feeling?",
      "emotion": "overwhelmed",
      "faceOptions": [
        "😩",
        "🥳",
        "😄",
        "🤗"
      ],
      "correctEmotion": "😩",
      "response": "Overwhelmed! When too many things pile up at once, that 'I can't handle it all' feeling is being overwhelmed. Taking one thing at a time helps. 💙",
      "followUp": "What helps when you feel like there's too much to do?",
      "realWorldTip": "Feeling overwhelmed means there's too much at once. Breaking it into small steps helps.",
      "reflectionPrompt": "What do you do when everything feels like too much?"
    },
    {
      "id": "em_070",
      "title": "The Graduation Goodbye",
      "setting": "school",
      "characters": [
        "student",
        "best friend"
      ],
      "ageRange": [
        5,
        10
      ],
      "difficulty": 3,
      "theme": "proud but sad",
      "growthDimensions": [
        "empathy"
      ],
      "culture": [
        "global"
      ],
      "tags": [
        "feelings",
        "proud but sad",
        "friendship"
      ],
      "situation": "Your best friend is moving up to a special new school they worked so hard to get into. You're truly happy and proud of them, but also sad they won't be with you. You hug them with a teary smile. What are you feeling?",
      "emotion": "proud but sad",
      "faceOptions": [
        "🥲",
        "😤",
        "😨",
        "🙄"
      ],
      "correctEmotion": "🥲",
      "response": "Proud but sad! Being genuinely happy for someone AND sad to lose them is a deep, grown-up mix of feelings. 💙",
      "followUp": "Can you feel proud and sad about the same thing?",
      "realWorldTip": "Proud-but-sad is a mature feeling — celebrating someone while missing them at once.",
      "reflectionPrompt": "Have you ever been happy for someone but sad at the same time?"
    },
    {
      "id": "em_071",
      "title": "The Mysterious Box",
      "setting": "home",
      "characters": [
        "child",
        "family"
      ],
      "ageRange": [
        5,
        10
      ],
      "difficulty": 3,
      "theme": "curiosity",
      "growthDimensions": [
        "empathy"
      ],
      "culture": [
        "IN"
      ],
      "tags": [
        "feelings",
        "curiosity",
        "home"
      ],
      "situation": "A package arrives addressed to the whole family. No one knows what's inside. You keep wondering and wondering, dying to know what it could be. What are you feeling?",
      "emotion": "curious",
      "faceOptions": [
        "🤔",
        "😢",
        "😨",
        "😤"
      ],
      "correctEmotion": "🤔",
      "response": "Curious! That tingling 'I really want to know!' feeling that makes you wonder and explore is curiosity. 💡",
      "followUp": "What's something you're really curious about?",
      "realWorldTip": "Curiosity is the wonderful urge to discover and learn. It helps us grow!",
      "reflectionPrompt": "What are you most curious to learn about?"
    },
    {
      "id": "em_072",
      "title": "The Friend's Achievement",
      "setting": "school",
      "characters": [
        "student",
        "friend"
      ],
      "ageRange": [
        5,
        10
      ],
      "difficulty": 3,
      "theme": "jealousy",
      "growthDimensions": [
        "empathy"
      ],
      "culture": [
        "US"
      ],
      "tags": [
        "feelings",
        "jealousy",
        "school"
      ],
      "situation": "Your friend got the lead role in the play that you both wanted. You clap for them and say congratulations, but there's a sour pinch inside as you imagine yourself in that role. What are you really feeling underneath?",
      "emotion": "jealous",
      "faceOptions": [
        "😒",
        "🥳",
        "🤗",
        "😌"
      ],
      "correctEmotion": "😒",
      "response": "Jealous! It's natural to feel a pinch when a friend gets what you wanted. Being honest about it helps you stay a good friend. 💙",
      "followUp": "How can you be happy for a friend even when you feel jealous?",
      "realWorldTip": "You can feel jealous AND still be a good friend — by noticing the feeling and choosing kindness.",
      "reflectionPrompt": "How do you handle it when a friend gets something you wanted?"
    },
    {
      "id": "em_073",
      "title": "The Blamed Sibling",
      "setting": "home",
      "characters": [
        "child",
        "sibling"
      ],
      "ageRange": [
        5,
        10
      ],
      "difficulty": 3,
      "theme": "guilt",
      "growthDimensions": [
        "empathy"
      ],
      "culture": [
        "IN"
      ],
      "tags": [
        "feelings",
        "guilt",
        "family"
      ],
      "situation": "You made a mess, but your sibling got blamed for it and was scolded. You stayed quiet to avoid trouble. Now you feel a heavy, uncomfortable weight whenever you see them. What are you feeling?",
      "emotion": "guilty",
      "faceOptions": [
        "😣",
        "🥳",
        "😲",
        "🤗"
      ],
      "correctEmotion": "😣",
      "response": "Guilty! Letting someone else take blame for what we did creates a heavy feeling that won't go away until we make it right. 💙",
      "followUp": "What would help lift that guilty feeling?",
      "realWorldTip": "Guilt grows when we let others suffer for our actions. Telling the truth lightens it.",
      "reflectionPrompt": "Why does keeping a guilty secret feel so heavy?"
    },
    {
      "id": "em_074",
      "title": "The Packed Schedule",
      "setting": "school",
      "characters": [
        "student"
      ],
      "ageRange": [
        5,
        10
      ],
      "difficulty": 3,
      "theme": "overwhelmed",
      "growthDimensions": [
        "empathy"
      ],
      "culture": [
        "global"
      ],
      "tags": [
        "feelings",
        "overwhelmed",
        "school"
      ],
      "situation": "Everyone keeps asking you to do things — join this club, help with that project, finish your homework, practise an instrument. Your head spins and you feel like you can't breathe with so much going on. What are you feeling?",
      "emotion": "overwhelmed",
      "faceOptions": [
        "😩",
        "🥳",
        "😄",
        "😊"
      ],
      "correctEmotion": "😩",
      "response": "Overwhelmed! When everyone needs something and it's all too much, that drowning feeling is being overwhelmed. It's okay to ask for help. 💙",
      "followUp": "Who could you ask for help when overwhelmed?",
      "realWorldTip": "When overwhelmed, it's okay to slow down, ask for help, and do one thing at a time.",
      "reflectionPrompt": "What helps you when you have too much going on?"
    },
    {
      "id": "em_075",
      "title": "The Older Sibling Leaves",
      "setting": "home",
      "characters": [
        "child",
        "older sibling"
      ],
      "ageRange": [
        5,
        10
      ],
      "difficulty": 3,
      "theme": "proud but sad",
      "growthDimensions": [
        "empathy"
      ],
      "culture": [
        "IN"
      ],
      "tags": [
        "feelings",
        "proud but sad",
        "family"
      ],
      "situation": "Your older sibling is leaving for a special boarding school they earned a place at. You're so proud of how smart they are, but your room will feel empty without them. You wave goodbye, smiling and crying. What are you feeling?",
      "emotion": "proud but sad",
      "faceOptions": [
        "🥲",
        "😤",
        "😨",
        "😒"
      ],
      "correctEmotion": "🥲",
      "response": "Proud but sad! Celebrating someone's big achievement while missing them deeply is a tender, mixed feeling. 💙",
      "followUp": "How can you stay close to someone who moves away?",
      "realWorldTip": "Proud-but-sad shows you can hold two real feelings — joy and loss — at the same time.",
      "reflectionPrompt": "Have you felt proud of someone but sad they were leaving?"
    },
    {
      "id": "em_076",
      "title": "The Strange Creature",
      "setting": "park",
      "characters": [
        "child"
      ],
      "ageRange": [
        5,
        10
      ],
      "difficulty": 3,
      "theme": "curiosity",
      "growthDimensions": [
        "empathy"
      ],
      "culture": [
        "US"
      ],
      "tags": [
        "feelings",
        "curiosity",
        "nature"
      ],
      "situation": "At the park, you spot a bug you've never seen before — it has shimmering wings and moves in a strange way. You crouch down, full of questions, wanting to watch it closely and learn more. What are you feeling?",
      "emotion": "curious",
      "faceOptions": [
        "🤔",
        "😨",
        "😢",
        "😤"
      ],
      "correctEmotion": "🤔",
      "response": "Curious! That eager 'I want to know more!' feeling that draws you to explore is curiosity — the start of all learning. 💡",
      "followUp": "What would you want to discover about it?",
      "realWorldTip": "Curiosity drives us to explore and learn. It's one of the best feelings for growing!",
      "reflectionPrompt": "What's something in nature you're curious about?"
    },
    {
      "id": "em_077",
      "title": "The Winning Friend",
      "setting": "school",
      "characters": [
        "student",
        "best friend"
      ],
      "ageRange": [
        5,
        10
      ],
      "difficulty": 3,
      "theme": "proud but sad",
      "growthDimensions": [
        "empathy"
      ],
      "culture": [
        "IN"
      ],
      "tags": [
        "feelings",
        "proud but sad",
        "school"
      ],
      "situation": "You and your best friend both entered a contest. They won first prize and you didn't place at all. You're genuinely proud of them and cheer loudly, but you also feel a quiet sadness for yourself. What are you feeling?",
      "emotion": "proud but sad",
      "faceOptions": [
        "🥲",
        "🥳",
        "😤",
        "😩"
      ],
      "correctEmotion": "🥲",
      "response": "Proud but sad! Truly celebrating a friend's win while feeling your own disappointment is a mature, mixed emotion. 💙",
      "followUp": "How do you celebrate others when you're also disappointed?",
      "realWorldTip": "You can be genuinely happy for someone and sad for yourself at once — that's emotional maturity.",
      "reflectionPrompt": "How do you stay a good friend when you're also disappointed?"
    },
    {
      "id": "em_078",
      "title": "The White Lie Caught",
      "setting": "home",
      "characters": [
        "child",
        "parent"
      ],
      "ageRange": [
        5,
        10
      ],
      "difficulty": 3,
      "theme": "guilt",
      "growthDimensions": [
        "empathy"
      ],
      "culture": [
        "global"
      ],
      "tags": [
        "feelings",
        "guilt",
        "family"
      ],
      "situation": "You told your parent you finished your reading when you hadn't. They believed you and praised you for being responsible. Now their proud smile makes you feel worse, not better. What are you feeling?",
      "emotion": "guilty",
      "faceOptions": [
        "😣",
        "🥳",
        "😲",
        "🤗"
      ],
      "correctEmotion": "😣",
      "response": "Guilty! When someone trusts us based on something untrue, the guilt grows heavier. Honesty is the only thing that lifts it. 💙",
      "followUp": "What could you do to feel honest again?",
      "realWorldTip": "Praise built on a lie feels hollow. Telling the truth restores your peace.",
      "reflectionPrompt": "Why does being praised for something untrue feel bad?"
    },
    {
      "id": "em_079",
      "title": "The Cousin's Attention",
      "setting": "home",
      "characters": [
        "child",
        "visiting cousin",
        "grandparents"
      ],
      "ageRange": [
        5,
        10
      ],
      "difficulty": 3,
      "theme": "jealousy",
      "growthDimensions": [
        "empathy"
      ],
      "culture": [
        "IN"
      ],
      "tags": [
        "feelings",
        "jealousy",
        "family"
      ],
      "situation": "Your cousin is visiting and your grandparents are giving them all the attention and treats. You usually get that attention. You try to act fine, but you feel a grumpy pinch inside. What are you feeling?",
      "emotion": "jealous",
      "faceOptions": [
        "😒",
        "🥳",
        "🤗",
        "😌"
      ],
      "correctEmotion": "😒",
      "response": "Jealous! Wanting attention back when it shifts to someone else is a very human feeling. Naming it helps you not act grumpy. 💙",
      "followUp": "What's a kind way to handle feeling jealous of attention?",
      "realWorldTip": "Jealousy over attention is normal. Recognising it helps you respond kindly instead of grumpily.",
      "reflectionPrompt": "How do you feel when attention shifts away from you?"
    },
    {
      "id": "em_080",
      "title": "The Mystery Lesson",
      "setting": "school",
      "characters": [
        "student",
        "teacher"
      ],
      "ageRange": [
        5,
        10
      ],
      "difficulty": 3,
      "theme": "curiosity",
      "growthDimensions": [
        "empathy"
      ],
      "culture": [
        "US"
      ],
      "tags": [
        "feelings",
        "curiosity",
        "school"
      ],
      "situation": "Your teacher sets up a covered table with bubbling beakers and says, 'Today we'll discover something amazing.' You lean forward, full of questions, itching to find out what the experiment will show. What are you feeling?",
      "emotion": "curious",
      "faceOptions": [
        "🤔",
        "😨",
        "😢",
        "🙄"
      ],
      "correctEmotion": "🤔",
      "response": "Curious! That leaning-forward, eager-to-discover feeling is curiosity — the spark of learning and science! 💡",
      "followUp": "What experiment would you be most curious to try?",
      "realWorldTip": "Curiosity makes learning exciting. The best discoveries start with a wondering mind.",
      "reflectionPrompt": "What's a question you'd love to find the answer to?"
    },
    {
      "id": "em_081",
      "title": "The Hidden Cheating",
      "setting": "school",
      "characters": [
        "student",
        "classmate"
      ],
      "ageRange": [
        6,
        11
      ],
      "difficulty": 3,
      "theme": "guilt",
      "growthDimensions": [
        "empathy"
      ],
      "culture": [
        "IN"
      ],
      "tags": [
        "feelings",
        "guilt",
        "school"
      ],
      "situation": "You let a friend copy your homework, and now the teacher is praising both of you. Your friend looks relieved, but you feel uneasy knowing it wasn't really their work, and you helped. What are you feeling?",
      "emotion": "guilty",
      "faceOptions": [
        "😣",
        "🥳",
        "😲",
        "🤗"
      ],
      "correctEmotion": "😣",
      "response": "Guilty! Helping with something dishonest leaves an uneasy weight, even when no one's caught. Your conscience is speaking. 💙",
      "followUp": "What does guilt tell us about ourselves?",
      "realWorldTip": "Guilt is a sign of a healthy conscience. It points us back toward doing what's right.",
      "reflectionPrompt": "Why might helping someone cheat make you feel guilty too?"
    },
    {
      "id": "em_082",
      "title": "The Sibling's Spotlight",
      "setting": "home",
      "characters": [
        "child",
        "talented sibling"
      ],
      "ageRange": [
        6,
        11
      ],
      "difficulty": 3,
      "theme": "jealousy",
      "growthDimensions": [
        "empathy"
      ],
      "culture": [
        "US"
      ],
      "tags": [
        "feelings",
        "jealousy",
        "family"
      ],
      "situation": "Your sibling is incredibly talented at music and everyone always praises them. At dinner, the whole conversation is about their latest award. You poke at your food, feeling invisible and a little resentful. What are you feeling?",
      "emotion": "jealous",
      "faceOptions": [
        "😒",
        "🥳",
        "🤗",
        "😌"
      ],
      "correctEmotion": "😒",
      "response": "Jealous! Feeling overshadowed by a talented sibling is common. Naming the jealousy helps you talk about wanting your own moment. 💙",
      "followUp": "How could you ask for some attention in a healthy way?",
      "realWorldTip": "Jealousy of a sibling's spotlight is normal. Talking about your own feelings helps more than hiding them.",
      "reflectionPrompt": "How do you feel when someone always gets more attention than you?"
    },
    {
      "id": "em_083",
      "title": "The Exam Avalanche",
      "setting": "school",
      "characters": [
        "student"
      ],
      "ageRange": [
        6,
        11
      ],
      "difficulty": 3,
      "theme": "overwhelmed",
      "growthDimensions": [
        "empathy"
      ],
      "culture": [
        "IN"
      ],
      "tags": [
        "feelings",
        "overwhelmed",
        "school"
      ],
      "situation": "Final exams are next week — five subjects, a huge syllabus, and you've barely started. Looking at the giant pile of books, your chest tightens and your mind goes blank with how much there is. What are you feeling?",
      "emotion": "overwhelmed",
      "faceOptions": [
        "😩",
        "🥳",
        "😄",
        "😊"
      ],
      "correctEmotion": "😩",
      "response": "Overwhelmed! A mountain of work can make your mind freeze. Breaking it into a daily plan makes it manageable. 💙",
      "followUp": "How could you break a huge task into smaller pieces?",
      "realWorldTip": "When overwhelmed by a big task, a step-by-step plan turns a mountain into stairs.",
      "reflectionPrompt": "What's your strategy when facing a huge amount of work?"
    },
    {
      "id": "em_084",
      "title": "The Bittersweet Move",
      "setting": "home",
      "characters": [
        "child",
        "family"
      ],
      "ageRange": [
        6,
        11
      ],
      "difficulty": 3,
      "theme": "proud but sad",
      "growthDimensions": [
        "empathy"
      ],
      "culture": [
        "global"
      ],
      "tags": [
        "feelings",
        "proud but sad",
        "family"
      ],
      "situation": "Your family is moving because your parent got their dream job. You're proud of them and excited for the new adventure, but you'll have to leave your friends and the only home you've known. You feel pulled both ways. What are you feeling?",
      "emotion": "proud but sad",
      "faceOptions": [
        "🥲",
        "😤",
        "😨",
        "🙄"
      ],
      "correctEmotion": "🥲",
      "response": "Proud but sad! Being happy about a good change while grieving what you leave behind is a deeply mixed, mature feeling. 💙",
      "followUp": "How do you handle a change that's both good and hard?",
      "realWorldTip": "Big life changes often bring proud-but-sad feelings. Both are real and okay.",
      "reflectionPrompt": "Have you faced a change that was exciting and sad at once?"
    },
    {
      "id": "em_085",
      "title": "The Unanswered Question",
      "setting": "school",
      "characters": [
        "student",
        "teacher"
      ],
      "ageRange": [
        6,
        11
      ],
      "difficulty": 3,
      "theme": "curiosity",
      "growthDimensions": [
        "empathy"
      ],
      "culture": [
        "IN"
      ],
      "tags": [
        "feelings",
        "curiosity",
        "school"
      ],
      "situation": "In science class, the teacher mentions that no one knows exactly what's at the bottom of the deepest ocean. Your mind lights up with questions and you can't stop imagining what mysteries might be down there. What are you feeling?",
      "emotion": "curious",
      "faceOptions": [
        "🤔",
        "😨",
        "😢",
        "😩"
      ],
      "correctEmotion": "🤔",
      "response": "Curious! That spark of endless questions about the unknown is curiosity — the feeling that drives explorers and scientists! 💡",
      "followUp": "What unsolved mystery are you most curious about?",
      "realWorldTip": "Curiosity about the unknown is what leads humans to explore and discover new things.",
      "reflectionPrompt": "What mystery about the world would you most love to solve?"
    },
    {
      "id": "em_086",
      "title": "The Friend's Secret Hurt",
      "setting": "school",
      "characters": [
        "student",
        "friend hiding feelings"
      ],
      "ageRange": [
        6,
        11
      ],
      "difficulty": 3,
      "theme": "empathy",
      "growthDimensions": [
        "empathy"
      ],
      "culture": [
        "US"
      ],
      "tags": [
        "feelings",
        "empathy",
        "friendship"
      ],
      "situation": "Your friend keeps saying they're 'totally fine' and laughing along, but you notice they go quiet when a certain topic comes up, and their smile doesn't reach their eyes. Beneath the surface, what are they really feeling?",
      "emotion": "hurt/disappointed",
      "faceOptions": [
        "😔",
        "🥳",
        "😲",
        "🤗"
      ],
      "correctEmotion": "😔",
      "response": "Hurt and disappointed — hidden behind a brave face. Real empathy means noticing the feelings people try to hide. 💙",
      "followUp": "How could you gently let a friend know you've noticed?",
      "realWorldTip": "People often hide hurt behind 'I'm fine.' Noticing the real feeling is deep empathy.",
      "reflectionPrompt": "How can you tell when someone's 'fine' isn't really fine?"
    },
    {
      "id": "em_087",
      "title": "The Forgiven Betrayal",
      "setting": "home",
      "characters": [
        "child",
        "friend"
      ],
      "ageRange": [
        6,
        11
      ],
      "difficulty": 3,
      "theme": "relief",
      "growthDimensions": [
        "empathy"
      ],
      "culture": [
        "IN"
      ],
      "tags": [
        "feelings",
        "relief",
        "friendship"
      ],
      "situation": "A friend shared your secret and you were really angry for days. But they sincerely apologised and explained, and after thinking it over, you decide to let the anger go. A calm settles over you. What are you feeling?",
      "emotion": "relieved/forgiving",
      "faceOptions": [
        "😌",
        "😤",
        "😨",
        "😩"
      ],
      "correctEmotion": "😌",
      "response": "Relieved and forgiving! Choosing to release anger after a genuine apology brings a deep, peaceful calm. 💙",
      "followUp": "How does forgiving someone change how YOU feel?",
      "realWorldTip": "Forgiveness isn't just for the other person — it lifts a weight off you too.",
      "reflectionPrompt": "How do you feel after you choose to forgive someone?"
    },
    {
      "id": "em_088",
      "title": "The Public Speech Win",
      "setting": "school",
      "characters": [
        "student",
        "rival"
      ],
      "ageRange": [
        6,
        11
      ],
      "difficulty": 3,
      "theme": "proud but sad",
      "growthDimensions": [
        "empathy"
      ],
      "culture": [
        "global"
      ],
      "tags": [
        "feelings",
        "proud but sad",
        "school"
      ],
      "situation": "You won the speech competition, but your closest friend, who practised just as hard, came last and looks crushed. You're proud of your win, yet sad seeing your friend so disappointed. What are you feeling?",
      "emotion": "proud but sad",
      "faceOptions": [
        "🥲",
        "🥳",
        "😤",
        "😒"
      ],
      "correctEmotion": "🥲",
      "response": "Proud but sad! Celebrating your own success while feeling for a friend's disappointment is emotional maturity. 💙",
      "followUp": "How could you celebrate while supporting your friend?",
      "realWorldTip": "You can feel proud of yourself and sad for someone else at the same time — and that's deeply caring.",
      "reflectionPrompt": "How do you balance your own joy with empathy for someone who's down?"
    },
    {
      "id": "em_089",
      "title": "The Achievement Comparison",
      "setting": "home",
      "characters": [
        "student",
        "high-achieving friend"
      ],
      "ageRange": [
        8,
        12
      ],
      "difficulty": 3,
      "theme": "jealousy",
      "growthDimensions": [
        "empathy"
      ],
      "culture": [
        "IN"
      ],
      "tags": [
        "feelings",
        "jealousy",
        "school"
      ],
      "situation": "Your friend keeps getting top marks effortlessly while you study hard for less. When relatives praise them in front of you, you smile tightly while a resentful knot forms inside. What are you really feeling?",
      "emotion": "jealous",
      "faceOptions": [
        "😒",
        "🥳",
        "🤗",
        "😌"
      ],
      "correctEmotion": "😒",
      "response": "Jealous! Working hard while others succeed easily can stir resentment. Acknowledging it honestly helps you focus on your own growth. 💙",
      "followUp": "How can you turn jealousy into motivation?",
      "realWorldTip": "Jealousy can be a signal of what you want. Channelled well, it becomes motivation, not resentment.",
      "reflectionPrompt": "How can you handle jealousy in a way that helps you grow?"
    },
    {
      "id": "em_090",
      "title": "The Silent Witness",
      "setting": "school",
      "characters": [
        "student",
        "bullied classmate"
      ],
      "ageRange": [
        8,
        12
      ],
      "difficulty": 3,
      "theme": "guilt",
      "growthDimensions": [
        "empathy"
      ],
      "culture": [
        "US"
      ],
      "tags": [
        "feelings",
        "guilt",
        "school"
      ],
      "situation": "You watched a classmate get bullied and said nothing because you were afraid. The classmate looked to you for help and you looked away. Days later, that moment keeps replaying and weighing on you. What are you feeling?",
      "emotion": "guilty",
      "faceOptions": [
        "😣",
        "🥳",
        "😲",
        "🤗"
      ],
      "correctEmotion": "😣",
      "response": "Guilty! Not acting when we could have help creates a lasting weight. That guilt can give us courage to act next time. 💙",
      "followUp": "What could you do differently if it happened again?",
      "realWorldTip": "Guilt over inaction can teach us. It often gives us the courage to do right next time.",
      "reflectionPrompt": "How can a guilty feeling help us become braver?"
    },
    {
      "id": "em_091",
      "title": "The Caregiver's Load",
      "setting": "home",
      "characters": [
        "student",
        "sick parent",
        "siblings"
      ],
      "ageRange": [
        8,
        12
      ],
      "difficulty": 3,
      "theme": "overwhelmed",
      "growthDimensions": [
        "empathy"
      ],
      "culture": [
        "IN"
      ],
      "tags": [
        "feelings",
        "overwhelmed",
        "family"
      ],
      "situation": "Your parent is unwell, so you're helping care for younger siblings, doing chores, AND keeping up with school. Each day there's more than you can manage and you feel stretched impossibly thin. What are you feeling?",
      "emotion": "overwhelmed",
      "faceOptions": [
        "😩",
        "🥳",
        "😄",
        "😊"
      ],
      "correctEmotion": "😩",
      "response": "Overwhelmed! Carrying responsibilities too big for your age is exhausting. It's important to ask trusted adults for support. 💙",
      "followUp": "Who could you reach out to for help with too much?",
      "realWorldTip": "When responsibilities pile too high, reaching out to trusted adults isn't weakness — it's wisdom.",
      "reflectionPrompt": "Who are the trusted people you could ask for help when overwhelmed?"
    },
    {
      "id": "em_092",
      "title": "The Last Year Together",
      "setting": "school",
      "characters": [
        "student",
        "graduating class"
      ],
      "ageRange": [
        8,
        12
      ],
      "difficulty": 3,
      "theme": "bittersweet",
      "growthDimensions": [
        "empathy"
      ],
      "culture": [
        "global"
      ],
      "tags": [
        "feelings",
        "bittersweet",
        "school"
      ],
      "situation": "It's the final day of your last year with the class you've grown up with. You're excited for what's next, but as you look around at friends you may not see again, your heart aches with happy memories. What are you feeling?",
      "emotion": "bittersweet",
      "faceOptions": [
        "😥",
        "🥳",
        "😤",
        "🙄"
      ],
      "correctEmotion": "😥",
      "response": "Bittersweet! Endings full of good memories and new beginnings create that happy-sad ache. It honours what mattered. 💙",
      "followUp": "How do you hold onto good memories as things change?",
      "realWorldTip": "Bittersweet feelings at endings show how much something meant to you. They're worth feeling fully.",
      "reflectionPrompt": "What endings have felt bittersweet to you?"
    },
    {
      "id": "em_093",
      "title": "The Viral Mistake",
      "setting": "online",
      "characters": [
        "student",
        "online crowd"
      ],
      "ageRange": [
        8,
        12
      ],
      "difficulty": 3,
      "theme": "embarrassment",
      "growthDimensions": [
        "empathy"
      ],
      "culture": [
        "IN"
      ],
      "tags": [
        "feelings",
        "embarrassment",
        "online"
      ],
      "situation": "A clip of you stumbling during a performance got shared in the school group chat and lots of people saw it. Every notification makes your face flush and you wish you could hide forever. What are you feeling?",
      "emotion": "embarrassed",
      "faceOptions": [
        "😳",
        "🥳",
        "😄",
        "🤔"
      ],
      "correctEmotion": "😳",
      "response": "Embarrassed! Public mistakes spreading online amplify the flush of embarrassment. But it fades, and people forget faster than you fear. 💙",
      "followUp": "How could you cope when an embarrassing moment spreads?",
      "realWorldTip": "Online embarrassment feels huge but fades fast. Reaching out to a friend helps you through it.",
      "reflectionPrompt": "How do you recover when an embarrassing moment feels very public?"
    },
    {
      "id": "em_094",
      "title": "The Dream and the Doubt",
      "setting": "home",
      "characters": [
        "student",
        "parents"
      ],
      "ageRange": [
        8,
        12
      ],
      "difficulty": 3,
      "theme": "nervousness",
      "growthDimensions": [
        "empathy"
      ],
      "culture": [
        "US"
      ],
      "tags": [
        "feelings",
        "nervousness",
        "family"
      ],
      "situation": "You've decided to try out for something you really want, but you've never done anything like it and might fail in front of everyone. The night before, your mind races with 'what ifs' and you can't sleep. What are you feeling?",
      "emotion": "nervous/anxious",
      "faceOptions": [
        "😰",
        "🥳",
        "😄",
        "🤔"
      ],
      "correctEmotion": "😰",
      "response": "Nervous and anxious! Big risks toward our dreams stir up racing 'what if' thoughts. Courage means trying anyway. 💙",
      "followUp": "What helps you take a brave step despite nerves?",
      "realWorldTip": "Nerves before a big risk are normal — even brave people feel them. Preparation and self-belief help.",
      "reflectionPrompt": "What helps you be brave when you're nervous about failing?"
    },
    {
      "id": "em_095",
      "title": "The Mentor's Farewell",
      "setting": "school",
      "characters": [
        "student",
        "beloved teacher"
      ],
      "ageRange": [
        8,
        12
      ],
      "difficulty": 3,
      "theme": "proud but sad",
      "growthDimensions": [
        "empathy"
      ],
      "culture": [
        "IN"
      ],
      "tags": [
        "feelings",
        "proud but sad",
        "school"
      ],
      "situation": "Your favourite teacher, who believed in you and changed how you see yourself, is retiring. At their farewell, you're happy they get to rest after years of helping students, but heartbroken you won't have them anymore. What are you feeling?",
      "emotion": "proud but sad",
      "faceOptions": [
        "🥲",
        "😤",
        "😨",
        "🙄"
      ],
      "correctEmotion": "🥲",
      "response": "Proud but sad! Honouring someone's well-earned next chapter while grieving their absence is a profound mixed feeling. 💙",
      "followUp": "How could you show a mentor what they meant to you?",
      "realWorldTip": "Proud-but-sad goodbyes to people who shaped us are some of life's most meaningful emotions.",
      "reflectionPrompt": "Who has shaped who you are? How would you thank them?"
    },
    {
      "id": "em_096",
      "title": "The Unknown Future",
      "setting": "school",
      "characters": [
        "student"
      ],
      "ageRange": [
        8,
        12
      ],
      "difficulty": 3,
      "theme": "curiosity",
      "growthDimensions": [
        "empathy"
      ],
      "culture": [
        "global"
      ],
      "tags": [
        "feelings",
        "curiosity",
        "growth"
      ],
      "situation": "Your teacher asks the class to imagine what jobs might exist in 20 years that don't exist today. Instead of feeling worried, your mind fills with fascinating possibilities and endless questions about the future. What are you feeling?",
      "emotion": "curious",
      "faceOptions": [
        "🤔",
        "😨",
        "😩",
        "😢"
      ],
      "correctEmotion": "🤔",
      "response": "Curious! Facing the unknown with wonder instead of fear is curiosity — a powerful way to approach the future. 💡",
      "followUp": "What future possibility makes you most curious?",
      "realWorldTip": "Meeting the unknown with curiosity instead of fear turns uncertainty into adventure.",
      "reflectionPrompt": "What about the future are you most curious and excited to discover?"
    }
  ],

  /* ═══════════════════════════════════════════════════════════════
     KINDNESS QUEST — 26 scenarios
     Game: kindnessquest.html
  ═══════════════════════════════════════════════════════════════ */
  kindnessQuest: [

    {
      id: 'kq_001',
      title: 'The Dropped Books',
      setting: 'school',
      characters: ['classmate'],
      ageRange: [3, 8],
      difficulty: 1,
      theme: 'kindness',
      growthDimensions: ['empathy'],
      culture: ['global'],
      tags: ['school', 'helping', 'kindness'],
      situation: "A classmate drops all their books in the hallway and everyone around them keeps walking past.",
      choices: [
        { text: 'Stop and help them pick up 📚', outcome: 'kind', xp: 25,
          response: "You were the one who stopped. That\'s not small — that\'s leadership in kindness. 🌟" },
        { text: 'Keep walking — I\'m late for class', outcome: 'self', xp: 5,
          response: "Being on time matters. But it only takes 30 seconds to help. Would you want someone to stop for you? 💭" },
        { text: 'Ask someone else to help them', outcome: 'delegate', xp: 15,
          response: "Getting others involved is thoughtful! Even better if you stay to help too. 🤝" }
      ],
      realWorldTip: 'Be the first to help someone today — even with something small.',
      reflectionPrompt: 'Why do people sometimes walk past when someone needs help?'
    },

    {
      id: 'kq_002',
      title: 'The Lunch Volunteer',
      setting: 'school',
      characters: ['lunch server', 'younger children'],
      ageRange: [7, 12],
      difficulty: 1,
      theme: 'kindness',
      growthDimensions: ['empathy', 'responsibility'],
      culture: ['global'],
      tags: ['volunteering', 'school', 'service'],
      situation: "You notice the lunch volunteers are overwhelmed with long queues of younger students. No one your age has offered to help.",
      choices: [
        { text: 'Offer to help serve lunch 🍱', outcome: 'kind', xp: 30,
          response: "Nobody asked. You noticed and stepped up. That\'s servant leadership. 🌟" },
        { text: 'Wait for someone else to volunteer first', outcome: 'hesitant', xp: 10,
          response: "Waiting for someone else means sometimes nobody goes. You could be first. 💭" },
        { text: 'Ask a teacher if you\'re allowed to help', outcome: 'responsible', xp: 20,
          response: "Checking first — responsible and then kind. Good combo! 🤝" }
      ],
      realWorldTip: 'Volunteer for one thing this week that you weren\'t asked to do.',
      reflectionPrompt: 'What\'s the difference between helping when asked and helping when no one asked?'
    },

    {
      id: 'kq_003',
      title: 'The Elderly Neighbour',
      setting: 'home',
      characters: ['elderly neighbour'],
      ageRange: [5, 11],
      difficulty: 1,
      theme: 'kindness',
      growthDimensions: ['empathy', 'responsibility'],
      culture: ['global'],
      tags: ['elderly', 'community', 'service'],
      situation: "Your elderly neighbour is struggling to carry heavy grocery bags from their car. You\'re on your way out to play.",
      choices: [
        { text: 'Help carry the bags 🛍️', outcome: 'kind', xp: 25,
          response: "Play can wait a few minutes. That neighbour won\'t forget your help. 🌟" },
        { text: 'Ask if they\'d like help', outcome: 'respectful', xp: 20,
          response: "Asking first shows respect for their independence. Then help if they say yes! 🤝" },
        { text: 'Walk past — it\'s not my responsibility', outcome: 'self', xp: 5,
          response: "Technically true. But kindness goes beyond responsibility. 💭" }
      ],
      realWorldTip: 'Do something helpful for an older person in your life or neighbourhood this week.',
      reflectionPrompt: 'What can younger people offer to older people?'
    },

    {
      id: 'kq_004',
      title: 'The New Language Struggle',
      setting: 'school',
      characters: ['new student from different country'],
      ageRange: [6, 11],
      difficulty: 2,
      theme: 'kindness',
      growthDimensions: ['empathy', 'fairness'],
      culture: ['global'],
      tags: ['inclusion', 'language', 'new student', 'diversity'],
      situation: "A new student who doesn\'t speak your language well is struggling to understand the teacher\'s instructions and looking confused and embarrassed.",
      choices: [
        { text: 'Sit next to them and quietly help them understand', outcome: 'kind', xp: 30,
          response: "Helping without making a fuss about it — that\'s the kindest way. They felt seen and helped. 🌟" },
        { text: 'Tell the teacher they need help', outcome: 'helpful', xp: 20,
          response: "Getting the teacher involved — they can really help. Smart move. 🤝" },
        { text: 'Use gestures and drawings to explain', outcome: 'creative kind', xp: 30,
          response: "Finding a way across the language barrier — creative and beautifully kind! 🌟💡" }
      ],
      realWorldTip: 'Learn to say \'hello\' and \'welcome\' in a classmate\'s language.',
      reflectionPrompt: 'How would you feel moving to a place where no one spoke your language?'
    },

    {
      id: 'kq_005',
      title: 'The Sad Teacher',
      setting: 'school',
      characters: ['teacher'],
      ageRange: [6, 11],
      difficulty: 2,
      theme: 'kindness',
      growthDimensions: ['empathy'],
      culture: ['global'],
      tags: ['teacher', 'adult feelings', 'empathy'],
      situation: "Your teacher seems quiet and sad today. They\'re doing their best but their smile doesn\'t reach their eyes. Class is ending.",
      choices: [
        { text: 'Write them a kind note: \'Hope you feel better\'', outcome: 'kind', xp: 30,
          response: "A child noticing an adult\'s sadness and doing something about it — that\'s rare and precious. 🌟" },
        { text: 'Ask \'Are you okay?\' quietly after class', outcome: 'direct kind', xp: 25,
          response: "Checking in directly shows you really care. Adults need that too. 💛" },
        { text: 'Be extra well-behaved today to make class easier', outcome: 'subtle kind', xp: 20,
          response: "Quiet kindness — making their hard day a little easier without words. Thoughtful. 🤝" }
      ],
      realWorldTip: 'Write a thank-you note to a teacher this week.',
      reflectionPrompt: 'Do adults need kindness just as much as children?'
    },

    {
      id: 'kq_006',
      title: 'The Street Dog',
      setting: 'park',
      characters: ['stray dog'],
      ageRange: [4, 10],
      difficulty: 1,
      theme: 'kindness',
      growthDimensions: ['empathy', 'responsibility'],
      culture: ['IN'],
      tags: ['animal', 'compassion', 'street dog'],
      situation: "On your way home, you see a thin stray dog looking for food outside a shop. You have some biscuits in your bag.",
      choices: [
        { text: 'Give the dog some biscuits 🐕', outcome: 'kind', xp: 25,
          response: "Kindness to animals is kindness to the world. That dog felt your care. 🌟" },
        { text: 'Tell a shopkeeper so they can help', outcome: 'helpful', xp: 20,
          response: "Getting someone who can provide regular help — smart thinking. 🤝" },
        { text: 'Walk past — I\'m not supposed to touch strays', outcome: 'safe', xp: 10,
          response: "Safety first is wise. Could you still leave some food from a distance? 💭" }
      ],
      realWorldTip: 'Leave some water out for animals near your home.',
      reflectionPrompt: 'Do we have a responsibility to care for animals?'
    },

    {
      id: 'kq_007',
      title: 'The Crying Younger Child',
      setting: 'park',
      characters: ['young lost child'],
      ageRange: [7, 12],
      difficulty: 2,
      theme: 'kindness',
      growthDimensions: ['empathy', 'responsibility'],
      culture: ['global'],
      tags: ['lost child', 'safety', 'help'],
      situation: "At the park, you see a very young child sitting alone and crying. They look lost. No adults are nearby.",
      choices: [
        { text: 'Stay with them and call out for their parents', outcome: 'safe + kind', xp: 30,
          response: "Staying with them AND getting help — perfect response. You kept them safe. 🌟" },
        { text: 'Find a park security guard or adult immediately', outcome: 'responsible', xp: 30,
          response: "Getting the right grown-up fast — exactly right! 🌟" },
        { text: 'Ask if they\'re okay and what their parent\'s name is', outcome: 'kind', xp: 25,
          response: "Getting information to help find the parents — kind and smart. 💡" }
      ],
      realWorldTip: 'If you ever see a child alone and crying, always find a trusted adult to help.',
      reflectionPrompt: 'What\'s the safest way to help a child who looks lost?'
    },

    {
      id: 'kq_008',
      title: 'The Upstander Moment',
      setting: 'school',
      characters: ['child being teased', 'group teasing'],
      ageRange: [7, 12],
      difficulty: 3,
      theme: 'kindness',
      growthDimensions: ['empathy', 'fairness'],
      culture: ['global'],
      tags: ['bullying', 'standing up', 'courage', 'grey zone'],
      situation: "A group of kids is making fun of a classmate\'s lunch — it\'s a traditional dish from their culture and the kids are saying it smells bad.",
      choices: [
        { text: 'Say \'Actually, that smells amazing — what is it?\' loudly', outcome: 'upstander', xp: 35,
          response: "You flipped the script! Curiosity instead of cruelty — and you gave that child dignity. 🌟" },
        { text: 'Sit next to the classmate being teased', outcome: 'quiet solidarity', xp: 25,
          response: "Your presence said \'I\'m on your side\' without a word. That mattered. 🌟" },
        { text: 'Tell a teacher after lunch', outcome: 'responsible', xp: 20,
          response: "Making sure it\'s reported — right. Though speaking up in the moment has more immediate power. 🤝" }
      ],
      realWorldTip: 'Be an upstander this week — say something kind when others are being unkind.',
      reflectionPrompt: 'What\'s the difference between a bystander and an upstander?'
    },

    {
      id: 'kq_009',
      title: 'The Masjid Sadaqah',
      setting: 'temple',
      characters: ['person in need'],
      ageRange: [5, 11],
      difficulty: 1,
      theme: 'kindness',
      growthDimensions: ['empathy', 'fairness'],
      culture: ['IN'],
      tags: ['charity', 'sadaqah', 'religion', 'kindness'],
      situation: "Outside the masjid after Friday prayers, a person is sitting quietly with their hand open. You have some coins in your pocket.",
      choices: [
        { text: 'Give what you have 🕌', outcome: 'generous', xp: 30,
          response: "Sadaqah — charity from the heart. You did something for another without expecting anything back. 🌙🌟" },
        { text: 'Ask your parent if it\'s okay to give', outcome: 'responsible', xp: 20,
          response: "Checking with a parent before giving — that\'s thoughtful. Then give together. 🤝" },
        { text: 'Walk by — you don\'t know them', outcome: 'self', xp: 5,
          response: "Charity isn\'t about knowing someone. 💭" }
      ],
      realWorldTip: 'Ask your family how you can give to others this week — big or small.',
      reflectionPrompt: 'Why does giving to someone you don\'t know feel different from giving to a friend?'
    },

    {
      id: 'kq_010',
      title: 'The Lunch Thief',
      setting: 'school',
      characters: ['classmate who is hungry'],
      ageRange: [6, 11],
      difficulty: 2,
      theme: 'kindness',
      growthDimensions: ['empathy', 'reasoning'],
      culture: ['global'],
      tags: ['hunger', 'compassion', 'school'],
      situation: "You notice your classmate never seems to have lunch. Today they\'re just drinking water while others eat. You have extra food.",
      choices: [
        { text: 'Quietly offer them some of your food', outcome: 'kind', xp: 30,
          response: "Noticing AND acting quietly so they don\'t feel embarrassed — that\'s sophisticated kindness. 🌟" },
        { text: 'Tell the teacher discreetly', outcome: 'responsible', xp: 25,
          response: "Making sure the school can provide ongoing help — smart and caring. 🌟" },
        { text: 'Don\'t say anything — maybe they\'re on a diet', outcome: 'uncertain', xp: 8,
          response: "Assuming the best is kind. But noticing and checking quietly could really help. 💭" }
      ],
      realWorldTip: 'If you notice a classmate struggling with anything, tell a trusted adult.',
      reflectionPrompt: 'Why is it important to help someone without making them feel embarrassed?'
    },

    {
      id: 'kq_011',
      title: 'The Online Comment',
      setting: 'online',
      characters: ['stranger online'],
      ageRange: [9, 12],
      difficulty: 2,
      theme: 'kindness',
      growthDimensions: ['empathy', 'reasoning'],
      culture: ['global'],
      tags: ['online', 'comment', 'digital kindness'],
      situation: "You see someone post their first artwork online. The comments are mostly negative. You could add a comment.",
      choices: [
        { text: 'Write something genuinely encouraging', outcome: 'kind', xp: 30,
          response: "One kind comment in a sea of harsh ones changes everything. You might have kept them going. 🌟" },
        { text: 'Like the post without commenting', outcome: 'quiet support', xp: 15,
          response: "A like says \'I see you\' — better than nothing. But words have even more power. 🤝" },
        { text: 'Don\'t engage — it\'s strangers online', outcome: 'safe', xp: 8,
          response: "Safe, but kindness online is just as real as kindness offline. 💭" }
      ],
      realWorldTip: 'Leave one kind comment online this week. Make it specific and genuine.',
      reflectionPrompt: 'Does online kindness count as much as in-person kindness?'
    },

    {
      id: 'kq_012',
      title: 'The Temple Flower Seller',
      setting: 'temple',
      characters: ['elderly flower seller'],
      ageRange: [5, 10],
      difficulty: 1,
      theme: 'kindness',
      growthDimensions: ['empathy'],
      culture: ['IN'],
      tags: ['temple', 'kindness', 'elderly', 'seva'],
      situation: "An elderly woman is selling marigold garlands outside the temple in the hot sun. She looks tired. Your family buys some flowers.",
      choices: [
        { text: 'Give her some water from your bottle 💧', outcome: 'thoughtful', xp: 30,
          response: "She didn\'t ask, but you saw what she needed. That\'s the highest form of kindness. 🌟🌸" },
        { text: 'Say \'Thank you, aunty\' with a big smile', outcome: 'respectful', xp: 20,
          response: "A smile and respectful word to someone who works hard — simple and warm. 💛" },
        { text: 'Tell your parent she looks tired', outcome: 'aware', xp: 20,
          response: "You noticed and told someone who could help. Awareness is the first step to kindness. 🌟" }
      ],
      realWorldTip: 'Notice and thank someone who works hard but goes unrecognised — a cleaner, a helper, a security guard.',
      reflectionPrompt: 'Who are the invisible helpers in your daily life?'
    },

    {
      id: 'kq_013',
      title: 'The Rainy Day Umbrella',
      setting: 'school',
      characters: ['teacher', 'students'],
      ageRange: [5, 10],
      difficulty: 1,
      theme: 'kindness',
      growthDimensions: ['empathy'],
      culture: ['IN', 'global'],
      tags: ['rain', 'school', 'sharing'],
      situation: "It\'s raining hard after school. Many students forgot umbrellas. A school peon (helper) is trying to carry things while also getting soaked.",
      choices: [
        { text: 'Offer to share your umbrella with the peon', outcome: 'kind', xp: 30,
          response: "Sharing your umbrella with someone who serves others — beautiful. 🌟" },
        { text: 'Hold the door open and help carry things', outcome: 'helpful', xp: 25,
          response: "Practical, immediate help. Your hands made their job easier. 🤝" },
        { text: 'Wait inside until it stops raining', outcome: 'self', xp: 5,
          response: "Comfortable choice. But the peon doesn\'t have that option. 💭" }
      ],
      realWorldTip: 'Thank your school\'s support staff — office helpers, security, cleaning staff — by name.',
      reflectionPrompt: 'Why do some people\'s kindness go unnoticed?'
    },

    {
      id: 'kq_014',
      title: 'The Worried New Parent',
      setting: 'home',
      characters: ['parent with newborn sibling'],
      ageRange: [7, 12],
      difficulty: 2,
      theme: 'kindness',
      growthDimensions: ['empathy', 'responsibility'],
      culture: ['global'],
      tags: ['family', 'new baby', 'empathy', 'responsibility'],
      situation: "A new baby has arrived at home. Your parent looks exhausted and stressed. The house is messy and there\'s a pile of dishes.",
      choices: [
        { text: 'Wash the dishes without being asked', outcome: 'kind', xp: 30,
          response: "You saw what was needed and did it. That\'s love in action. 🌟" },
        { text: 'Ask \'What can I do to help?\'', outcome: 'considerate', xp: 25,
          response: "Asking lets them tell you what they need most. Thoughtful! 🤝" },
        { text: 'Play quietly so the baby can sleep', outcome: 'considerate', xp: 20,
          response: "Sometimes the kindest thing is to not add to someone\'s load. 🌸" }
      ],
      realWorldTip: 'Do one chore at home today without being asked.',
      reflectionPrompt: 'How can children show kindness to parents?'
    },

    {
      id: 'kq_015',
      title: 'The Birthday Forgotten',
      setting: 'school',
      characters: ['classmate'],
      ageRange: [6, 11],
      difficulty: 2,
      theme: 'kindness',
      growthDimensions: ['empathy'],
      culture: ['global'],
      tags: ['birthday', 'kindness', 'noticing'],
      situation: "You remember it\'s a classmate\'s birthday. Nobody else seems to have noticed or remembered. They look a little deflated.",
      choices: [
        { text: 'Quietly say \'Happy birthday!\' and make a small card', outcome: 'kind', xp: 30,
          response: "You turned a forgotten birthday into a remembered one. That\'s a gift. 🎁🌟" },
        { text: 'Tell the class so everyone can wish them', outcome: 'inclusive', xp: 30,
          response: "Now the whole class gets to celebrate. You gave them their moment! 🎉" },
        { text: 'Nothing — I don\'t know them well enough', outcome: 'self', xp: 5,
          response: "\'Happy birthday\' doesn\'t require deep friendship. Two words, a whole lot of joy. 💭" }
      ],
      realWorldTip: 'Wish someone a happy birthday this week — even someone you\'re not very close to.',
      reflectionPrompt: 'Why does being remembered on your birthday feel so good?'
    },

    {
      id: 'kq_016',
      title: 'The Compliment Challenge',
      setting: 'school',
      characters: ['five different classmates'],
      ageRange: [5, 10],
      difficulty: 1,
      theme: 'kindness',
      growthDimensions: ['empathy'],
      culture: ['global'],
      tags: ['compliment', 'kindness', 'school'],
      situation: "You have a challenge: give five genuine compliments to five different people today. You feel shy about it.",
      choices: [
        { text: 'Do all five — push through the shyness!', outcome: 'brave kind', xp: 35,
          response: "Kindness plus courage! Five people felt better because of you today. 🌟🌟" },
        { text: 'Do two — it\'s a start', outcome: 'partial', xp: 20,
          response: "Starting is the hardest part! Two genuine compliments — still wonderful. 🌸" },
        { text: 'Skip it — it feels awkward', outcome: 'self', xp: 5,
          response: "Awkward for you, wonderful for them. Kindness is worth the awkward. 💭" }
      ],
      realWorldTip: 'Give three genuine compliments today — one to a family member, one to a friend, one to anyone.',
      reflectionPrompt: 'Why do compliments sometimes feel harder to give than to receive?'
    },

    {
      id: 'kq_017',
      title: 'The Cheer Up Mission',
      setting: 'home',
      characters: ['friend who is sick'],
      ageRange: [5, 10],
      difficulty: 1,
      theme: 'kindness',
      growthDimensions: ['empathy'],
      culture: ['global'],
      tags: ['illness', 'friendship', 'cheer up'],
      situation: "Your best friend has been home sick for three days. They\'re bored and sad. You want to cheer them up.",
      choices: [
        { text: 'Make them a funny video to make them laugh 🎬', outcome: 'creative kind', xp: 30,
          response: "Laughter is medicine. You gave them the best kind. 🌟🎉" },
        { text: 'Send them school notes so they don\'t fall behind', outcome: 'practical kind', xp: 25,
          response: "Helping them with school while they\'re sick — caring AND thoughtful. 🤝" },
        { text: 'Draw them a card and leave it at their door', outcome: 'kind', xp: 25,
          response: "A hand-drawn card says \'I thought of you.\' Simple and powerful. 🌸" }
      ],
      realWorldTip: 'Do something to cheer up a friend or family member this week.',
      reflectionPrompt: 'What\'s the most creative way you\'ve ever cheered someone up?'
    },

    {
      id: 'kq_018',
      title: 'The Bus Seat',
      setting: 'school',
      characters: ['elderly passenger', 'tired pregnant woman'],
      ageRange: [6, 11],
      difficulty: 1,
      theme: 'kindness',
      growthDimensions: ['empathy', 'fairness'],
      culture: ['global', 'IN'],
      tags: ['public transport', 'elderly', 'kindness'],
      situation: "On the school bus home, you have a seat. An elderly person gets on and is standing. So is a tired-looking pregnant woman. There\'s only one seat available.",
      choices: [
        { text: 'Offer your seat to the elderly person', outcome: 'kind', xp: 25,
          response: "Respecting elders with action — lovely. 🌟" },
        { text: 'Give your seat to the pregnant woman', outcome: 'kind', xp: 25,
          response: "She needs it most right now. Thoughtful and caring. 🌟" },
        { text: 'Ask the driver if there\'s a solution for both', outcome: 'wise', xp: 30,
          response: "Solving for everyone — that\'s thinking beyond the obvious. 💡🌟" }
      ],
      realWorldTip: 'Give up your seat for someone who needs it more — on transport or anywhere.',
      reflectionPrompt: 'Who deserves help most when not everyone can be helped?'
    },

    {
      id: 'kq_019',
      title: 'The Rangoli Surprise',
      setting: 'home',
      characters: ['parent'],
      ageRange: [5, 10],
      difficulty: 1,
      theme: 'kindness',
      growthDimensions: ['empathy'],
      culture: ['IN'],
      tags: ['diwali', 'rangoli', 'family', 'surprise'],
      situation: "Your parent has been very busy and tired. Diwali is tomorrow. You know how to make a small rangoli and you have the colours.",
      choices: [
        { text: 'Make a surprise rangoli for them 🎨', outcome: 'thoughtful', xp: 30,
          response: "You gave them the gift of beauty, made with love, when they had no time. Perfect Diwali spirit. 🪔🌟" },
        { text: 'Ask if they\'d like you to make one together', outcome: 'togetherness', xp: 25,
          response: "Doing it together makes it a memory. Lovely idea! 💛" },
        { text: 'Wait — they might want to make it themselves', outcome: 'respectful', xp: 15,
          response: "Considerate! But asking \'Would you like me to?\' gives them the choice. 💭" }
      ],
      realWorldTip: 'Do something beautiful or helpful at home without being asked.',
      reflectionPrompt: 'What\'s a kind thing you can do at home that no one asked for?'
    },

    {
      id: 'kq_020',
      title: 'The Shy New Friend',
      setting: 'school',
      characters: ['very shy new student'],
      ageRange: [5, 10],
      difficulty: 2,
      theme: 'kindness',
      growthDimensions: ['empathy'],
      culture: ['global'],
      tags: ['shyness', 'inclusion', 'friendship'],
      situation: "A new student is very shy. They haven\'t spoken to anyone in three days. They sit alone every break and look at their shoes.",
      choices: [
        { text: 'Sit next to them every day this week', outcome: 'persistent kind', xp: 35,
          response: "Consistent kindness — not once but every day. That\'s how real friendship starts. 🌟" },
        { text: 'Say hello and ask one simple question', outcome: 'opening', xp: 25,
          response: "One question opens a door. \'What do you like to do?\' can change everything. 🌸" },
        { text: 'Let them come to me when they\'re ready', outcome: 'patient', xp: 10,
          response: "Respecting their pace is kind. But a shy person rarely comes to you — they need you to come first. 💭" }
      ],
      realWorldTip: 'Say hello to someone who seems shy or alone — every day for a week.',
      reflectionPrompt: 'What does it cost you to say hello to someone new?'
    },

    {
      id: 'kq_021',
      title: 'The Helping Hand in Grief',
      setting: 'home',
      characters: ['neighbour who lost someone'],
      ageRange: [7, 12],
      difficulty: 3,
      theme: 'kindness',
      growthDimensions: ['empathy'],
      culture: ['global'],
      tags: ['grief', 'loss', 'community', 'grey zone'],
      situation: "Your neighbour\'s parent passed away. You don\'t know what to say. You see them outside looking empty.",
      choices: [
        { text: 'Say \'I\'m so sorry. I\'m here if you need anything.\'', outcome: 'present kind', xp: 30,
          response: "\'I\'m here\' is the most powerful thing you can say. You don\'t need to fix grief — just witness it. 🌟💙" },
        { text: 'Leave food at their door without saying anything', outcome: 'quiet kind', xp: 25,
          response: "Anonymous comfort. Sometimes kindness doesn\'t need words. 🌸" },
        { text: 'Give them space — grief is private', outcome: 'uncertain', xp: 10,
          response: "Space can be kind. But often people in grief feel invisible. A small gesture says \'I see you.\' 💭" }
      ],
      realWorldTip: 'Ask a parent how to show kindness to someone who is grieving.',
      reflectionPrompt: 'What do people need most when they are sad?'
    },

    {
      id: 'kq_022',
      title: 'The Kitchen Helper',
      setting: 'home',
      characters: ['grandparent cooking'],
      ageRange: [4, 9],
      difficulty: 1,
      theme: 'kindness',
      growthDimensions: ['empathy', 'responsibility'],
      culture: ['IN', 'global'],
      tags: ['cooking', 'helping', 'grandparent', 'family'],
      situation: "Your grandparent is cooking a big meal alone. You can see they\'re tired. You could help, but cooking is unfamiliar to you.",
      choices: [
        { text: 'Ask to help — even if I don\'t know how', outcome: 'brave kind', xp: 30,
          response: "Offering to learn while you help — that\'s growing and giving at the same time. 🌟" },
        { text: 'Set the table and pour water for everyone', outcome: 'practical', xp: 25,
          response: "You took what you COULD do and did it. Practical and helpful. 🤝" },
        { text: 'Sit nearby and keep them company', outcome: 'present', xp: 20,
          response: "Company is a form of help. Cooking alone is lonely. 💛" }
      ],
      realWorldTip: 'Ask a grandparent to teach you how to make their favourite dish.',
      reflectionPrompt: 'What are the ways you can help at home even when you\'re young?'
    },

    {
      id: 'kq_023',
      title: 'The Public Mess',
      setting: 'park',
      characters: ['strangers', 'environment'],
      ageRange: [6, 11],
      difficulty: 2,
      theme: 'kindness',
      growthDimensions: ['responsibility', 'fairness'],
      culture: ['global', 'IN'],
      tags: ['environment', 'litter', 'public space'],
      situation: "At the park, you see someone drop litter and walk away. The area is already a bit messy. You have nothing to do with it, but you have your hands free.",
      choices: [
        { text: 'Pick up the litter and bin it', outcome: 'responsible kind', xp: 30,
          response: "Cleaning up someone else\'s mess — no recognition, no reward. Just pure good. 🌟🌍" },
        { text: 'Tell the person to pick it up', outcome: 'direct', xp: 20,
          response: "Holding someone accountable — brave! If they respond badly, it\'s not your fault for trying. 💪" },
        { text: 'Leave it — it\'s not my litter', outcome: 'self', xp: 5,
          response: "The park belongs to everyone. Its cleanliness is everyone\'s responsibility. 💭" }
      ],
      realWorldTip: 'Pick up one piece of litter today that isn\'t yours.',
      reflectionPrompt: 'Are we responsible for things we didn\'t cause?'
    },

    {
      id: 'kq_024',
      title: 'The Quiet Acts of Kindness',
      setting: 'school',
      characters: ['whole class'],
      ageRange: [5, 10],
      difficulty: 1,
      theme: 'kindness',
      growthDimensions: ['empathy'],
      culture: ['global'],
      tags: ['small acts', 'school', 'invisible kindness'],
      situation: "Your class is having a \'Kindness Week\'. The teacher asks everyone to do one kind thing each day without telling anyone about it.",
      choices: [
        { text: 'Do a different secret kind act each day', outcome: 'consistent kind', xp: 35,
          response: "A whole week of secret kindness — the world was quietly better because of you. 🌟✨" },
        { text: 'Do one big kind act on the last day', outcome: 'one time', xp: 15,
          response: "One big act is good! But small daily kindness changes habits. 💭" },
        { text: 'Do kind things only when someone might see', outcome: 'performative', xp: 8,
          response: "Kindness for an audience is still kind — but the secret ones build your character. 💭" }
      ],
      realWorldTip: 'Do one secret kind act every day this week. Don\'t tell anyone.',
      reflectionPrompt: 'Why is secret kindness sometimes more powerful than visible kindness?'
    },

    {
      id: 'kq_025',
      title: 'The Refugee Classmate',
      setting: 'school',
      characters: ['classmate who recently arrived as refugee'],
      ageRange: [8, 12],
      difficulty: 3,
      theme: 'kindness',
      growthDimensions: ['empathy', 'fairness'],
      culture: ['global'],
      tags: ['refugee', 'diversity', 'empathy', 'inclusion'],
      situation: "A classmate who arrived as a refugee doesn\'t have many supplies and wears the same clothes often. Some kids are starting to whisper about it.",
      choices: [
        { text: 'Invite them to join your group and ignore the whispers', outcome: 'inclusive', xp: 30,
          response: "Actions louder than whispers. You included them — that\'s what changes culture. 🌟" },
        { text: 'Talk to a teacher about the whispering', outcome: 'responsible', xp: 25,
          response: "Getting an adult to address the wider problem — right and thoughtful. 🌟" },
        { text: 'Offer to share supplies quietly without making it a big deal', outcome: 'sensitive kind', xp: 30,
          response: "Helping without embarrassing — sensitive and kind in the best way. 🌟" }
      ],
      realWorldTip: 'Ask a parent about children around the world who have had to leave their homes. How can your family help?',
      reflectionPrompt: 'What would life be like if you had to start over in a new country?'
    },

    {
      id: 'kq_026',
      title: 'The Thank You Letter',
      setting: 'home',
      characters: ['someone who helped you'],
      ageRange: [5, 11],
      difficulty: 1,
      theme: 'kindness',
      growthDimensions: ['empathy'],
      culture: ['global'],
      tags: ['gratitude', 'letter', 'thankfulness'],
      situation: "You think about someone who helped you recently — maybe a teacher, a bus driver, a family friend. You haven\'t thanked them properly.",
      choices: [
        { text: 'Write them a heartfelt thank you letter 📝', outcome: 'grateful kind', xp: 35,
          response: "A letter takes more effort than a quick thanks — they will keep it forever. 🌟💛" },
        { text: 'Say thank you the next time you see them', outcome: 'verbal', xp: 20,
          response: "Saying it directly is real and warm. Simple and good. 🌸" },
        { text: 'Think about thanking them but don\'t do it', outcome: 'intention', xp: 5,
          response: "Gratitude only felt but not shared doesn\'t reach them. Say it. 💭" }
      ],
      realWorldTip: 'Write ONE thank you this week. Give it, post it, or just say it out loud.',
      reflectionPrompt: 'Who in your life deserves a thank you they haven\'t received?'
    },

  {
    "id": "kq_027",
    "title": "The Exam Pressure",
    "setting": "school",
    "characters": [
      "Priya who is copying",
      "teacher pacing the room"
    ],
    "ageRange": [
      9,
      12
    ],
    "difficulty": 3,
    "theme": "honesty vs compassion",
    "growthDimensions": [
      "empathy",
      "fairness",
      "reasoning"
    ],
    "culture": [
      "IN"
    ],
    "tags": [
      "honesty",
      "compassion",
      "family hardship",
      "school",
      "dilemma"
    ],
    "situation": "During a big exam, you notice your classmate Priya hiding a tiny chit. You know her family is in trouble — her father lost his job and she might lose her scholarship if she fails. The teacher is watching from the front.",
    "choices": [
      {
        "text": "Stay focused on your own paper — it's not your responsibility",
        "outcome": "observer",
        "xp": 15,
        "response": "You're not wrong that it's not your duty. But sometimes watching quietly when someone is struggling is its own kind of hard choice. 🌱"
      },
      {
        "text": "Quietly shift so the chit is harder for her to see — without drawing attention",
        "outcome": "protective",
        "xp": 25,
        "response": "You stop the copying without calling her out. A subtle act that protects her dignity. But it doesn't solve her deeper problem. 💙"
      },
      {
        "text": "After the exam, tell her privately that you're worried about her",
        "outcome": "direct kind",
        "xp": 35,
        "response": "Reaching out after — not to report, but to connect. Real kindness sometimes means addressing the root, not just the moment. 💚"
      }
    ],
    "realWorldTip": "Kindness and honesty can be in tension. The bravest act is often talking directly to the person, not around them.",
    "reflectionPrompt": "Can you be kind to someone who is doing something wrong? What does that look like?"
  },
  {
    "id": "kq_028",
    "title": "The Mean Note",
    "setting": "school",
    "characters": [
      "Lily who received the note",
      "Jake who wrote it",
      "you"
    ],
    "ageRange": [
      8,
      12
    ],
    "difficulty": 3,
    "theme": "loyalty vs honesty",
    "growthDimensions": [
      "empathy",
      "fairness",
      "responsibility"
    ],
    "culture": [
      "US"
    ],
    "tags": [
      "friendship",
      "honesty",
      "anonymous cruelty",
      "betrayal"
    ],
    "situation": "You find an anonymous mean note about your friend Lily. You recognise Jake's handwriting — he's your other close friend. Jake has been going through a hard time at home. Lily is upset and has no idea who wrote it.",
    "choices": [
      {
        "text": "Go to Jake privately — tell him you know and give him a chance to fix it",
        "outcome": "direct kind",
        "xp": 35,
        "response": "Giving Jake a chance to do the right thing is both brave and kind — to him AND to Lily. You trust him to be better. 💚"
      },
      {
        "text": "Tell Lily what you know — she deserves to protect herself",
        "outcome": "responsible",
        "xp": 25,
        "response": "Lily's wellbeing matters too. You chose honesty over loyalty. It's painful, but sometimes necessary. 💙"
      },
      {
        "text": "Stay out of it — it's between them",
        "outcome": "observer",
        "xp": 10,
        "response": "Stepping back feels safer — but you're the only one who knows. Silence sometimes has a cost too. 🌱"
      }
    ],
    "realWorldTip": "When your friend does something wrong, telling them privately is very different from telling on them.",
    "reflectionPrompt": "Is it harder to confront a friend who did something wrong, or a stranger? Why?"
  },
  {
    "id": "kq_029",
    "title": "The Captain's Pick",
    "setting": "sports",
    "characters": [
      "Arjun who always gets picked last",
      "your teammates"
    ],
    "ageRange": [
      7,
      12
    ],
    "difficulty": 3,
    "theme": "inclusion vs winning",
    "growthDimensions": [
      "empathy",
      "fairness"
    ],
    "culture": [
      "IN",
      "global"
    ],
    "tags": [
      "inclusion",
      "sports",
      "peer pressure",
      "leadership"
    ],
    "situation": "It's your first time as cricket team captain. Arjun always gets picked last — he's not the best player. If you pick him first, some teammates might roll their eyes. But you remember watching his face every time he was chosen last.",
    "choices": [
      {
        "text": "Pick Arjun first — make a statement",
        "outcome": "inclusive",
        "xp": 35,
        "response": "One brave choice can change a person's day — or even how they feel about themselves. You used your moment of power beautifully. 💚"
      },
      {
        "text": "Pick him somewhere in the middle — not first, not last",
        "outcome": "subtle kind",
        "xp": 25,
        "response": "A quiet kindness. He didn't get picked last, and you avoided the fuss. Small steps are still steps forward. 💙"
      },
      {
        "text": "Pick the strongest players first — you want to win",
        "outcome": "self",
        "xp": 10,
        "response": "Winning matters — but leadership is also about how you make your team feel. Arjun noticed, even if he didn't say anything. 🌱"
      }
    ],
    "realWorldTip": "Leaders set the tone. When you include someone who's usually left out, others follow your example.",
    "reflectionPrompt": "If you were always chosen last, what one thing would change the most for you?"
  },
  {
    "id": "kq_030",
    "title": "The Secret's Weight",
    "setting": "home",
    "characters": [
      "Diya your closest friend",
      "Diya's worried parent"
    ],
    "ageRange": [
      8,
      12
    ],
    "difficulty": 3,
    "theme": "loyalty vs protection",
    "growthDimensions": [
      "empathy",
      "responsibility"
    ],
    "culture": [
      "IN",
      "global"
    ],
    "tags": [
      "secrets",
      "friendship",
      "wellbeing",
      "trust"
    ],
    "situation": "Your closest friend Diya told you in secret she's being excluded by her friend group and is very sad. Now her mother calls YOU asking if Diya is okay — she seems withdrawn and unhappy. If you tell, you break her trust. If you don't, her mother can't help.",
    "choices": [
      {
        "text": "Tell Diya's mum — her wellbeing matters more than the secret right now",
        "outcome": "protective",
        "xp": 30,
        "response": "Sometimes keeping someone safe means making a hard call. You did it from love, not betrayal. 💚"
      },
      {
        "text": "Tell Diya that her mum called — and ask her what she wants to do",
        "outcome": "responsible",
        "xp": 35,
        "response": "You give Diya the power to decide, while being honest. That's friendship AND respect at the same time. 💚"
      },
      {
        "text": "Say you don't know anything — protect the secret completely",
        "outcome": "loyal",
        "xp": 15,
        "response": "You stay loyal, but at a cost — her mum can't help. Sometimes secrets have a price that's not ours alone to pay. 🌱"
      }
    ],
    "realWorldTip": "A secret that keeps someone safe should be kept. A secret that keeps someone unsafe should be shared — but gently.",
    "reflectionPrompt": "When is keeping a secret the wrong thing to do?"
  },
  {
    "id": "kq_031",
    "title": "The Borrowed Lie",
    "setting": "school",
    "characters": [
      "Rohan your friend",
      "class teacher"
    ],
    "ageRange": [
      8,
      12
    ],
    "difficulty": 3,
    "theme": "loyalty vs honesty",
    "growthDimensions": [
      "responsibility",
      "fairness"
    ],
    "culture": [
      "IN",
      "global"
    ],
    "tags": [
      "honesty",
      "peer pressure",
      "friendship",
      "covering up"
    ],
    "situation": "Your friend Rohan was late to class and asks you to tell the teacher he was on time. He once covered for you. Now it's your turn — but covering means lying to a teacher.",
    "choices": [
      {
        "text": "Say no and explain why — you won't lie for anyone",
        "outcome": "responsible",
        "xp": 30,
        "response": "Standing firm — even when it's awkward with a friend — shows real integrity. Good friends respect that. 💙"
      },
      {
        "text": "Offer to walk in with him right now and face the teacher together",
        "outcome": "direct kind",
        "xp": 35,
        "response": "You found a way to be loyal AND honest — by supporting him through the truth, not around it. That's a real friend. 💚"
      },
      {
        "text": "Do it this once — but tell him you won't do it again",
        "outcome": "one time",
        "xp": 15,
        "response": "You covered for him — but deep down you know it doesn't feel right. Friendship based on lies gets complicated. 🌱"
      }
    ],
    "realWorldTip": "A real friend helps you face hard moments honestly, not avoid them by lying.",
    "reflectionPrompt": "If a friendship asks you to lie, what does that tell you about the friendship?"
  },
  {
    "id": "kq_032",
    "title": "The Hungry Rival",
    "setting": "school",
    "characters": [
      "Raj who was mean last year",
      "you with your favourite lunch"
    ],
    "ageRange": [
      7,
      12
    ],
    "difficulty": 3,
    "theme": "forgiveness vs self-protection",
    "growthDimensions": [
      "empathy",
      "fairness"
    ],
    "culture": [
      "IN",
      "global"
    ],
    "tags": [
      "forgiveness",
      "past hurt",
      "kindness to enemies",
      "lunch"
    ],
    "situation": "You've just sat down with your favourite meal when Raj — who used to bully you last year — sits nearby looking embarrassed. He whispers he forgot his lunch. He's been nicer lately. But you remember how he used to treat you.",
    "choices": [
      {
        "text": "Share your lunch — choose a fresh start",
        "outcome": "forgiving",
        "xp": 35,
        "response": "Choosing to forgive — even when it's hard — is one of the bravest things anyone can do. You chose to write a new story. 💚"
      },
      {
        "text": "Offer to go to the canteen together to find something extra",
        "outcome": "practical kind",
        "xp": 25,
        "response": "A practical solution that helps without giving everything away. You helped without making yourself smaller. 💙"
      },
      {
        "text": "Say you don't have enough — you're not ready yet",
        "outcome": "self",
        "xp": 10,
        "response": "It's okay not to be ready to forgive. Protecting yourself is valid too. But watch how Raj changes over time. 🌱"
      }
    ],
    "realWorldTip": "Forgiving someone doesn't mean forgetting what happened — it means choosing not to carry it anymore.",
    "reflectionPrompt": "Have you ever been kind to someone who wasn't kind to you first? How did it feel?"
  },
  {
    "id": "kq_033",
    "title": "The Viral Moment",
    "setting": "online",
    "characters": [
      "Meera whose video is going viral",
      "your group chat"
    ],
    "ageRange": [
      8,
      12
    ],
    "difficulty": 3,
    "theme": "peer courage vs group pressure",
    "growthDimensions": [
      "empathy",
      "responsibility"
    ],
    "culture": [
      "IN",
      "global"
    ],
    "tags": [
      "online kindness",
      "peer pressure",
      "viral video",
      "standing up"
    ],
    "situation": "Your group chat is sharing a funny video of your classmate Meera tripping at the school concert. Hundreds of kids have seen it. Everyone's adding captions. Someone asks you to share it further.",
    "choices": [
      {
        "text": "Say in the chat: \"I don't think Meera would want this shared\"",
        "outcome": "upstander",
        "xp": 35,
        "response": "Speaking up in a group chat is one of the hardest acts of courage. You changed the direction of the whole conversation. 💚"
      },
      {
        "text": "Don't share or add a caption — but don't say anything",
        "outcome": "quiet solidarity",
        "xp": 20,
        "response": "You chose not to add to it. Quiet refusal is still a choice — it just stays invisible. Sometimes invisible is enough. 💙"
      },
      {
        "text": "Leave the group chat without saying anything",
        "outcome": "observer",
        "xp": 15,
        "response": "You removed yourself — which protects you. But the video kept going. Silence can have its own cost. 🌱"
      }
    ],
    "realWorldTip": "Before sharing something, ask: would this person be okay with me sharing it? If not — don't.",
    "reflectionPrompt": "Would you want a video of your worst moment shared with hundreds of people?"
  },
  {
    "id": "kq_034",
    "title": "The Birthday Slip",
    "setting": "home",
    "characters": [
      "Dadi (grandmother)",
      "your family planning a surprise"
    ],
    "ageRange": [
      7,
      12
    ],
    "difficulty": 3,
    "theme": "owning mistakes",
    "growthDimensions": [
      "responsibility",
      "empathy"
    ],
    "culture": [
      "IN"
    ],
    "tags": [
      "family",
      "mistakes",
      "honesty",
      "surprise",
      "grandmother"
    ],
    "situation": "Your family is planning a surprise birthday party for Dadi. You accidentally let slip the secret to your cousin. Now Dadi is making other plans for that evening. To fix it, you'd have to admit your mistake to the whole family.",
    "choices": [
      {
        "text": "Tell the family what happened — own your mistake completely",
        "outcome": "responsible",
        "xp": 35,
        "response": "Owning your mistake, even when it's embarrassing, is the most grown-up thing you can do. The family can fix it together now. 💚"
      },
      {
        "text": "Ask your cousin to secretly help change Dadi's plans without involving adults",
        "outcome": "creative kind",
        "xp": 25,
        "response": "Trying to solve it creatively — without the full family knowing. It might work! But more people are involved now. 💙"
      },
      {
        "text": "Hope for the best and say nothing — maybe it'll sort itself out",
        "outcome": "passive",
        "xp": 10,
        "response": "Waiting it out is tempting — but the longer you wait, the harder it gets to fix. Problems rarely sort themselves out. 🌱"
      }
    ],
    "realWorldTip": "Admitting a mistake early is almost always better than watching it get bigger.",
    "reflectionPrompt": "Is it harder to admit mistakes to friends or to family? Why do you think that is?"
  },
  {
    "id": "kq_035",
    "title": "The New Teammate",
    "setting": "sports",
    "characters": [
      "Jamie the talented newcomer",
      "Jordan your best friend"
    ],
    "ageRange": [
      7,
      12
    ],
    "difficulty": 3,
    "theme": "competing loyalties",
    "growthDimensions": [
      "empathy",
      "fairness"
    ],
    "culture": [
      "US"
    ],
    "tags": [
      "friendship",
      "sports",
      "jealousy",
      "inclusion",
      "loyalty"
    ],
    "situation": "Your soccer team just got a new player, Jamie, who is much better than your best friend Jordan. Coach is thinking about making Jamie the starter instead. Jordan is upset. Jamie seems nervous about being resented. Both are looking to you.",
    "choices": [
      {
        "text": "Welcome Jamie warmly — and separately check on Jordan",
        "outcome": "inclusive",
        "xp": 35,
        "response": "Making room for both people takes wisdom. You showed that inclusion and loyalty don't have to be enemies. 💚"
      },
      {
        "text": "Focus on Jordan — he's your friend and he needs you most right now",
        "outcome": "loyal",
        "xp": 20,
        "response": "Standing by your friend through hard moments is what friendship is. Jamie will find her feet — Jordan needs you today. 💙"
      },
      {
        "text": "Stay neutral — you don't want to get caught in the middle",
        "outcome": "observer",
        "xp": 15,
        "response": "Stepping back is understandable — but both Jamie and Jordan were looking to you. Neutrality is a choice too. 🌱"
      }
    ],
    "realWorldTip": "Real friends help you handle hard feelings, not just avoid them.",
    "reflectionPrompt": "Can you be a good friend to two people who are competing with each other?"
  },
  {
    "id": "kq_036",
    "title": "The Street Child",
    "setting": "shop",
    "characters": [
      "child begging near the market"
    ],
    "ageRange": [
      8,
      12
    ],
    "difficulty": 3,
    "theme": "generosity vs obedience",
    "growthDimensions": [
      "empathy",
      "responsibility"
    ],
    "culture": [
      "IN"
    ],
    "tags": [
      "poverty",
      "generosity",
      "dilemma",
      "India",
      "street child"
    ],
    "situation": "Outside a market, a child about your age asks for food. You have ₹50 your parent gave you to buy a snack for yourself. Your parent is inside shopping and didn't see. The child looks hungry.",
    "choices": [
      {
        "text": "Give him your ₹50 — he needs it more than a snack",
        "outcome": "generous",
        "xp": 35,
        "response": "Choosing someone else's need over your own want — that's what real generosity looks like. 💚"
      },
      {
        "text": "Buy two small things and give him one",
        "outcome": "practical kind",
        "xp": 30,
        "response": "Finding a way to help without giving everything — creative and kind. You made something from what you had. 💙"
      },
      {
        "text": "Walk past — you're not sure what the right thing is",
        "outcome": "uncertain",
        "xp": 10,
        "response": "It's genuinely hard to know in the moment. That uncertainty is real. Next time, trust your instinct a little more. 🌱"
      }
    ],
    "realWorldTip": "You don't have to give everything to help someone. Even a small act of noticing goes a long way.",
    "reflectionPrompt": "If you had extra food and someone hungry was nearby, what would you want to do? And what would you actually do?"
  },
  {
    "id": "kq_037",
    "title": "The Rainy Day Chai Wallah",
    "setting": "shop",
    "characters": [
      "chai wallah with no customers"
    ],
    "ageRange": [
      7,
      12
    ],
    "difficulty": 2,
    "theme": "noticing and helping",
    "growthDimensions": [
      "empathy",
      "responsibility"
    ],
    "culture": [
      "IN"
    ],
    "tags": [
      "India",
      "vendors",
      "rain",
      "noticing",
      "community"
    ],
    "situation": "The chai wallah near your school usually smiles and gives you an extra biscuit. Today it's raining hard and he has no customers. He looks tired and worried as he stirs an empty pot.",
    "choices": [
      {
        "text": "Ask a parent to stop and buy tea — sit down and chat with him a while",
        "outcome": "thoughtful",
        "xp": 30,
        "response": "You didn't just buy — you stayed. Sometimes company means more than money. He lit up. 💚"
      },
      {
        "text": "Tell your friends in a message — \"Let's all get chai today after school\"",
        "outcome": "inclusive",
        "xp": 25,
        "response": "You turned one person's slow day into a community moment. Small ripples, big waves. 💙"
      },
      {
        "text": "Smile and wave at him on your way past",
        "outcome": "considerate",
        "xp": 15,
        "response": "A smile costs nothing — and sometimes it's everything. You were kind with what you had. 🌱"
      }
    ],
    "realWorldTip": "Notice the people who serve you every day. A few minutes of your attention can brighten their whole day.",
    "reflectionPrompt": "Have you ever seen a grown-up look worried? What did you do — or what could you have done?"
  },
  {
    "id": "kq_038",
    "title": "The Forgotten Lunch",
    "setting": "school",
    "characters": [
      "Emma who forgot her lunch",
      "cafeteria staff"
    ],
    "ageRange": [
      5,
      10
    ],
    "difficulty": 2,
    "theme": "sharing without embarrassing",
    "growthDimensions": [
      "empathy",
      "fairness"
    ],
    "culture": [
      "US"
    ],
    "tags": [
      "lunch",
      "sharing",
      "kindness",
      "embarrassment",
      "school"
    ],
    "situation": "Your classmate Emma forgot her lunch. The cafeteria ran out of the free lunch option. She's sitting alone pretending she isn't hungry — but you can tell she is.",
    "choices": [
      {
        "text": "Slide half your lunch onto her tray without making a big deal",
        "outcome": "kind",
        "xp": 30,
        "response": "Sharing without fuss is the kindest kind of kind. She felt helped without feeling embarrassed. 💚"
      },
      {
        "text": "Tell the lunch monitor quietly — maybe they have a backup option",
        "outcome": "helpful",
        "xp": 25,
        "response": "Getting the right help in the right way — practical and thoughtful. You kept her dignity. 💙"
      },
      {
        "text": "Ask if she wants to share your dessert at least",
        "outcome": "generous",
        "xp": 20,
        "response": "A small share is still a share. You gave what you could, and that meant something. 🌱"
      }
    ],
    "realWorldTip": "Sharing without making someone feel embarrassed is one of the kindest things you can do.",
    "reflectionPrompt": "Have you ever felt embarrassed to ask for help? How could a friend have made it easier?"
  },
  {
    "id": "kq_039",
    "title": "The Heavy Bags",
    "setting": "home",
    "characters": [
      "Aunty Kamala struggling with heavy bags on the stairs"
    ],
    "ageRange": [
      4,
      9
    ],
    "difficulty": 2,
    "theme": "small acts of everyday kindness",
    "growthDimensions": [
      "empathy",
      "responsibility"
    ],
    "culture": [
      "IN"
    ],
    "tags": [
      "neighbours",
      "elderly",
      "India",
      "helping",
      "everyday kindness"
    ],
    "situation": "Your elderly neighbour Aunty Kamala is struggling up the stairs with heavy bags of vegetables. Your favourite cartoon just started. She hasn't seen you yet.",
    "choices": [
      {
        "text": "Go straight to help carry the bags upstairs",
        "outcome": "helpful",
        "xp": 30,
        "response": "You didn't wait to be asked. Aunty Kamala looked so relieved! The cartoon can wait — this moment can't. 💚"
      },
      {
        "text": "Call your parent to help while you hold the door open",
        "outcome": "responsible kind",
        "xp": 25,
        "response": "Getting reinforcements and holding the door — teamwork kindness! Smart and helpful. 💙"
      },
      {
        "text": "Wave at her and say you'll come in a minute (after the cartoon)",
        "outcome": "hesitant",
        "xp": 10,
        "response": "A minute can feel like forever when your arms are full and your legs are tired. Next time — first instinct is the right one. 🌱"
      }
    ],
    "realWorldTip": "Small acts of helping — like carrying bags or holding a door — take one minute and mean the world.",
    "reflectionPrompt": "Who near you might need a small helping hand today?"
  },
  {
    "id": "kq_040",
    "title": "The Quiet Captain",
    "setting": "sports",
    "characters": [
      "Kabir the team captain crying alone",
      "teammates who left"
    ],
    "ageRange": [
      6,
      12
    ],
    "difficulty": 2,
    "theme": "comforting the strong",
    "growthDimensions": [
      "empathy"
    ],
    "culture": [
      "IN",
      "global"
    ],
    "tags": [
      "loss",
      "sports",
      "comforting",
      "boys emotions",
      "being present"
    ],
    "situation": "Your cricket team just lost an important match. Your team captain Kabir is sitting alone in the corner, wiping his eyes. He always seems so confident. Everyone else has already walked away.",
    "choices": [
      {
        "text": "Go sit beside him quietly — just be there without saying anything",
        "outcome": "present kind",
        "xp": 30,
        "response": "Sometimes the most powerful thing you can offer is simply being there. No words needed. Kabir felt less alone. 💚"
      },
      {
        "text": "Tell him he played brilliantly and the team is nothing without him",
        "outcome": "thoughtful",
        "xp": 25,
        "response": "True words, said at the right moment — a reminder when someone needs it most. 💙"
      },
      {
        "text": "Give him space — he might want to be alone to collect himself",
        "outcome": "aware",
        "xp": 20,
        "response": "Respecting someone's space is also a form of kindness. You read the moment carefully. 🌱"
      }
    ],
    "realWorldTip": "Boys and men have feelings too. Sitting quietly with someone who's upset is one of the most powerful things you can do.",
    "reflectionPrompt": "When you feel sad, do you want company or space? Do you think Kabir wanted the same?"
  },
  {
    "id": "kq_041",
    "title": "The Midnight Nightmare",
    "setting": "home",
    "characters": [
      "little sibling crying from a nightmare",
      "sleeping parents"
    ],
    "ageRange": [
      4,
      9
    ],
    "difficulty": 2,
    "theme": "family kindness",
    "growthDimensions": [
      "empathy",
      "responsibility"
    ],
    "culture": [
      "IN",
      "global"
    ],
    "tags": [
      "sibling",
      "nighttime",
      "fear",
      "family",
      "comfort"
    ],
    "situation": "It's late at night. Your little sibling woke up crying from a nightmare. Your parents are asleep. You're very tired and have school tomorrow.",
    "choices": [
      {
        "text": "Stay with them, hold their hand until they fall asleep again",
        "outcome": "kind",
        "xp": 30,
        "response": "Giving up your sleep for someone who's scared — that's one of the most generous gifts. Your sibling felt safe. 💚"
      },
      {
        "text": "Gently wake Mum or Dad — they know how to comfort nightmares",
        "outcome": "responsible",
        "xp": 25,
        "response": "Knowing when to get the right help is wisdom, not weakness. Your parents want to be there for this. 💙"
      },
      {
        "text": "Tell them it's okay and go back to your room — they'll fall asleep",
        "outcome": "hesitant",
        "xp": 10,
        "response": "You're tired — that's real. But nightmares feel huge when you're small. A few more minutes might have mattered. 🌱"
      }
    ],
    "realWorldTip": "When someone you love is scared, being there — even quietly — is one of the greatest acts of kindness.",
    "reflectionPrompt": "When you have a bad dream, what helps you feel better?"
  },
  {
    "id": "kq_042",
    "title": "The Torn Art Project",
    "setting": "school",
    "characters": [
      "Noah whose two-week painting just got torn",
      "class teacher"
    ],
    "ageRange": [
      5,
      10
    ],
    "difficulty": 2,
    "theme": "helping in a moment of loss",
    "growthDimensions": [
      "empathy",
      "responsibility"
    ],
    "culture": [
      "US"
    ],
    "tags": [
      "art",
      "helping",
      "loss",
      "creativity",
      "school"
    ],
    "situation": "Your classmate Noah's painting — which he worked on for two whole weeks — got accidentally torn. He's standing there staring at it, not sure what to do. The teacher hasn't noticed yet.",
    "choices": [
      {
        "text": "Sit down right now and help him repair it — you have good art skills",
        "outcome": "creative kind",
        "xp": 30,
        "response": "You jumped in and helped — not with advice, but with actual hands-on work. Together you made it better. 💚"
      },
      {
        "text": "Tell the teacher quietly so she can help before anyone else sees",
        "outcome": "responsible",
        "xp": 25,
        "response": "Getting the right adult involved quickly was the wise move. The teacher had exactly what he needed. 💙"
      },
      {
        "text": "Offer all your extra supplies so he can work on it more at home",
        "outcome": "generous",
        "xp": 20,
        "response": "You gave what you had. He couldn't fix it right now, but knowing someone cared made the loss easier. 🌱"
      }
    ],
    "realWorldTip": "When something someone worked hard on gets broken or lost, the first thing they need is to know someone cares.",
    "reflectionPrompt": "If something you worked really hard on was accidentally destroyed, what would help you most?"
  },
  {
    "id": "kq_043",
    "title": "The Dropped Toy",
    "setting": "park",
    "characters": [
      "little friend who dropped their toy in a puddle"
    ],
    "ageRange": [
      3,
      7
    ],
    "difficulty": 1,
    "theme": "everyday kindness",
    "growthDimensions": [
      "empathy"
    ],
    "culture": [
      "IN",
      "global"
    ],
    "tags": [
      "young children",
      "friends",
      "park",
      "kindness"
    ],
    "situation": "Your friend at the park drops their favourite toy in a puddle and starts to cry. You're right there.",
    "choices": [
      {
        "text": "Pick it up and help wipe it clean",
        "outcome": "kind",
        "xp": 25,
        "response": "You fixed their problem without even being asked. That's what kind friends do! 💚"
      },
      {
        "text": "Give them a hug and say \"it's okay\"",
        "outcome": "thoughtful",
        "xp": 20,
        "response": "Sometimes feelings matter more than things. You made them feel better right away. 💙"
      },
      {
        "text": "Walk away — it's their toy",
        "outcome": "self",
        "xp": 5,
        "response": "Your friend needed you just then. Next time, try stepping in — it feels really good! 🌱"
      }
    ],
    "realWorldTip": "When a friend is upset, one small kind action can completely change their day.",
    "reflectionPrompt": "When you're upset, what does a good friend do that helps you?"
  },
  {
    "id": "kq_044",
    "title": "The Crying Baby",
    "setting": "temple",
    "characters": [
      "a baby crying",
      "baby's parent saying prayers"
    ],
    "ageRange": [
      3,
      7
    ],
    "difficulty": 1,
    "theme": "noticing and helping",
    "growthDimensions": [
      "empathy"
    ],
    "culture": [
      "IN"
    ],
    "tags": [
      "young children",
      "temple",
      "India",
      "baby",
      "kindness"
    ],
    "situation": "At the temple, a baby starts crying. Their parent is busy saying prayers and hasn't noticed. The baby is looking right at you.",
    "choices": [
      {
        "text": "Make funny faces and gentle sounds to help the baby calm down",
        "outcome": "kind",
        "xp": 25,
        "response": "The baby smiled! You used what you had — your face and your heart — to help. 💚"
      },
      {
        "text": "Gently tap the parent's arm and point to the baby",
        "outcome": "helpful",
        "xp": 20,
        "response": "Getting the right person involved — smart and kind! The parent was so grateful. 💙"
      },
      {
        "text": "Move away — crying babies are too noisy",
        "outcome": "self",
        "xp": 5,
        "response": "Babies cry when they need someone. Next time, a smile or a gentle wave can help so much! 🌱"
      }
    ],
    "realWorldTip": "Anyone can be kind to a baby — even a child! A funny face or a gentle sound can make a big difference.",
    "reflectionPrompt": "What could you do to make a baby or a toddler smile?"
  },
  {
    "id": "kq_045",
    "title": "The Fallen Friend",
    "setting": "park",
    "characters": [
      "your friend who fell while running"
    ],
    "ageRange": [
      3,
      7
    ],
    "difficulty": 1,
    "theme": "putting others first",
    "growthDimensions": [
      "empathy"
    ],
    "culture": [
      "IN",
      "global"
    ],
    "tags": [
      "young children",
      "park",
      "friends",
      "falling",
      "race"
    ],
    "situation": "You're in the middle of a race and winning! Suddenly your friend falls down and starts to cry. You could still win if you keep running.",
    "choices": [
      {
        "text": "Stop and go help your friend up",
        "outcome": "kind",
        "xp": 25,
        "response": "You gave up winning to help your friend. That shows what really matters to you — and it's the best kind of winner! 💚"
      },
      {
        "text": "Finish the race, then quickly come back to check",
        "outcome": "hesitant",
        "xp": 10,
        "response": "You came back — that's good! But your friend needed you right then. Next time, go to them first. 💙"
      },
      {
        "text": "Keep running — you were winning!",
        "outcome": "self",
        "xp": 5,
        "response": "You won the race — but your friend was upset and alone. What's more important: winning or your friend? 🌱"
      }
    ],
    "realWorldTip": "A true friend stops what they're doing when someone they care about needs help.",
    "reflectionPrompt": "If you fell and got hurt, what would you want your friend to do?"
  },
  {
    "id": "kq_046",
    "title": "The Lonely Party Guest",
    "setting": "home",
    "characters": [
      "a friend who doesn't know the other children at the party"
    ],
    "ageRange": [
      4,
      8
    ],
    "difficulty": 1,
    "theme": "inclusion",
    "growthDimensions": [
      "empathy",
      "fairness"
    ],
    "culture": [
      "IN",
      "global"
    ],
    "tags": [
      "young children",
      "party",
      "inclusion",
      "new friends",
      "birthday"
    ],
    "situation": "It's your birthday party! Everyone is playing and having fun — except one friend who is sitting alone because they don't know the other children.",
    "choices": [
      {
        "text": "Go over and bring them into the game you're playing",
        "outcome": "inclusive",
        "xp": 25,
        "response": "You left the fun to bring someone into it. That is what the best party hosts do — and the best friends. 💚"
      },
      {
        "text": "Ask another friend to go play with them",
        "outcome": "helpful",
        "xp": 20,
        "response": "You thought of a solution! Making sure nobody is left out — even when you're busy having fun — is really thoughtful. 💙"
      },
      {
        "text": "Stay with your other friends — it's your birthday!",
        "outcome": "self",
        "xp": 5,
        "response": "It's your birthday — it's okay to have fun! But imagine sitting alone at a party. One minute with them could change everything. 🌱"
      }
    ],
    "realWorldTip": "At any gathering, look for who might be sitting alone. One small invitation can mean the world.",
    "reflectionPrompt": "Have you ever been the person sitting alone? What did you want someone to do?"
  },
    {
      "id": "kq_047",
      "title": "The Tired Grandmother",
      "setting": "home",
      "characters": [
        "grandmother"
      ],
      "ageRange": [
        3,
        8
      ],
      "difficulty": 1,
      "theme": "kindness",
      "growthDimensions": [
        "empathy"
      ],
      "culture": [
        "IN"
      ],
      "tags": [
        "kindness",
        "India",
        "family",
        "helping"
      ],
      "situation": "Your grandmother looks tired after cooking all day. She's rubbing her feet. You were about to watch cartoons.",
      "choices": [
        {
          "text": "Offer to press her feet gently",
          "outcome": "kind",
          "xp": 25,
          "response": "You gently press her tired feet. She smiles with such love. \"What a kind grandchild,\" she says. 🌟"
        },
        {
          "text": "Bring her a glass of water",
          "outcome": "helpful",
          "xp": 20,
          "response": "You fetch her water without being asked. She's so touched by your thoughtfulness. 😊"
        },
        {
          "text": "Go watch cartoons",
          "outcome": "self",
          "xp": 5,
          "response": "You watch your show. Grandmother rests alone, still tired. A small kindness could have meant so much. 💭"
        }
      ],
      "realWorldTip": "Noticing when someone is tired and helping is a beautiful, simple kindness.",
      "reflectionPrompt": "Who in your home gets tired and might like some help?"
    },
    {
      "id": "kq_048",
      "title": "The Crying Toddler",
      "setting": "park",
      "characters": [
        "little toddler",
        "parent"
      ],
      "ageRange": [
        3,
        8
      ],
      "difficulty": 1,
      "theme": "kindness",
      "growthDimensions": [
        "empathy"
      ],
      "culture": [
        "US"
      ],
      "tags": [
        "kindness",
        "US",
        "park",
        "helping"
      ],
      "situation": "A tiny toddler at the park dropped their ice cream and is crying. Their parent is searching for napkins. You're nearby with your friends.",
      "choices": [
        {
          "text": "Make a funny face to cheer the toddler up",
          "outcome": "kind",
          "xp": 25,
          "response": "You pull a silly face and the toddler giggles through their tears! You turned crying into laughing. 🌟"
        },
        {
          "text": "Help find their parent quickly",
          "outcome": "helpful",
          "xp": 20,
          "response": "You point the parent to the crying toddler. Soon they're comforted. Helpful! 😊"
        },
        {
          "text": "Keep playing with your friends",
          "outcome": "self",
          "xp": 5,
          "response": "You keep playing. The toddler cries a while longer. A small kind gesture could have helped. 💭"
        }
      ],
      "realWorldTip": "Even small children can be cheered up by a kind, silly face from a bigger kid.",
      "reflectionPrompt": "What could you do to make a sad little one smile?"
    },
    {
      "id": "kq_049",
      "title": "The New Baby",
      "setting": "home",
      "characters": [
        "baby sibling",
        "mother"
      ],
      "ageRange": [
        3,
        8
      ],
      "difficulty": 1,
      "theme": "kindness",
      "growthDimensions": [
        "empathy",
        "responsibility"
      ],
      "culture": [
        "IN"
      ],
      "tags": [
        "kindness",
        "India",
        "family",
        "baby"
      ],
      "situation": "Your new baby sibling is crying and your mother looks exhausted trying to calm them. You have a favourite soft toy that always makes you feel better.",
      "choices": [
        {
          "text": "Offer your soft toy to the baby",
          "outcome": "generous",
          "xp": 25,
          "response": "You share your beloved toy! The baby calms, holding it. Your mother is so grateful. 🌟"
        },
        {
          "text": "Sing a gentle song to the baby",
          "outcome": "kind",
          "xp": 20,
          "response": "You softly sing, and the baby quiets down. Your mother mouths \"thank you.\" 😊"
        },
        {
          "text": "Keep your toy — it's special to you",
          "outcome": "self",
          "xp": 8,
          "response": "You keep your toy. The baby keeps crying. Sharing it could have helped your tired family. 💭"
        }
      ],
      "realWorldTip": "Sharing something that comforts you with a crying baby is a generous, loving act.",
      "reflectionPrompt": "How does it feel to help calm someone who's upset?"
    },
    {
      "id": "kq_050",
      "title": "The Dropped Blocks",
      "setting": "school",
      "characters": [
        "classmate"
      ],
      "ageRange": [
        3,
        8
      ],
      "difficulty": 1,
      "theme": "kindness",
      "growthDimensions": [
        "empathy"
      ],
      "culture": [
        "global"
      ],
      "tags": [
        "kindness",
        "school",
        "helping",
        "sharing"
      ],
      "situation": "A classmate knocked over their tower of blocks and all the pieces scattered across the floor. They look upset. Other kids stepped over the blocks.",
      "choices": [
        {
          "text": "Help pick up the blocks and rebuild together",
          "outcome": "kind",
          "xp": 25,
          "response": "You help gather every block and build an even taller tower together! Your classmate beams. 🌟"
        },
        {
          "text": "Pick up the blocks near you",
          "outcome": "helpful",
          "xp": 20,
          "response": "You gather the blocks closest to you. It's a kind start that helps your classmate. 😊"
        },
        {
          "text": "Step over them like the others",
          "outcome": "self",
          "xp": 5,
          "response": "You walk past. Your classmate picks them up alone, sadly. Helping would have cheered them. 💭"
        }
      ],
      "realWorldTip": "Helping someone clean up and rebuild after a mess turns sadness into teamwork.",
      "reflectionPrompt": "How does it feel when someone helps you fix a mess?"
    },
    {
      "id": "kq_051",
      "title": "The Forgotten Lunch Money",
      "setting": "school",
      "characters": [
        "classmate"
      ],
      "ageRange": [
        5,
        11
      ],
      "difficulty": 1,
      "theme": "kindness",
      "growthDimensions": [
        "empathy",
        "generosity"
      ],
      "culture": [
        "IN"
      ],
      "tags": [
        "kindness",
        "India",
        "school",
        "food"
      ],
      "situation": "A classmate forgot their lunch money and is sitting hungry while everyone eats. You have enough to share a little of your food.",
      "choices": [
        {
          "text": "Share part of your lunch with them",
          "outcome": "generous",
          "xp": 25,
          "response": "You share without hesitation. Your classmate is so relieved and grateful. Real kindness! 🌟"
        },
        {
          "text": "Tell a teacher they need lunch help",
          "outcome": "helpful",
          "xp": 20,
          "response": "You quietly let a teacher know. They make sure your classmate gets fed. Thoughtful! 😊"
        },
        {
          "text": "Eat your own lunch",
          "outcome": "self",
          "xp": 5,
          "response": "You eat alone. Your classmate stays hungry, watching. A small share would have meant a lot. 💭"
        }
      ],
      "realWorldTip": "Sharing food with someone hungry is one of the kindest things you can do.",
      "reflectionPrompt": "How would you feel sitting hungry while others ate?"
    },
    {
      "id": "kq_052",
      "title": "The Left-Out Kid",
      "setting": "park",
      "characters": [
        "lonely kid",
        "your friends"
      ],
      "ageRange": [
        5,
        11
      ],
      "difficulty": 1,
      "theme": "kindness",
      "growthDimensions": [
        "empathy"
      ],
      "culture": [
        "US"
      ],
      "tags": [
        "kindness",
        "US",
        "park",
        "inclusion"
      ],
      "situation": "You and your friends are playing a fun game. A kid stands at the edge, watching, clearly wishing they could join but too shy to ask.",
      "choices": [
        {
          "text": "Invite the shy kid to join your game",
          "outcome": "kind",
          "xp": 25,
          "response": "You wave them in! Their face lights up. By the end, they're laughing with everyone. You included them! 🌟"
        },
        {
          "text": "Ask your friends if the kid can play too",
          "outcome": "helpful",
          "xp": 20,
          "response": "You check with your friends and bring the kid in. Thoughtful including! 😊"
        },
        {
          "text": "Keep playing with just your friends",
          "outcome": "self",
          "xp": 5,
          "response": "You play on. The shy kid keeps watching alone. One invite could have changed their whole day. 💭"
        }
      ],
      "realWorldTip": "Inviting someone who's watching from the side can completely change their day.",
      "reflectionPrompt": "Have you ever wanted to join a game but felt too shy to ask?"
    },
    {
      "id": "kq_053",
      "title": "The Sick Friend's Homework",
      "setting": "home",
      "characters": [
        "sick friend"
      ],
      "ageRange": [
        5,
        11
      ],
      "difficulty": 1,
      "theme": "kindness",
      "growthDimensions": [
        "empathy",
        "responsibility"
      ],
      "culture": [
        "IN"
      ],
      "tags": [
        "kindness",
        "India",
        "school",
        "helping"
      ],
      "situation": "Your friend is home sick and missed school. They messaged asking if anyone could share today's homework. You have all the notes.",
      "choices": [
        {
          "text": "Carefully share all the homework and notes",
          "outcome": "kind",
          "xp": 25,
          "response": "You send clear photos of everything. Your friend can keep up despite being sick. Such a good friend! 🌟"
        },
        {
          "text": "Share the main points so they're not lost",
          "outcome": "helpful",
          "xp": 20,
          "response": "You send the key points. Your friend appreciates not falling too far behind. 😊"
        },
        {
          "text": "Tell them to ask someone else",
          "outcome": "self",
          "xp": 5,
          "response": "You brush it off. Your friend falls behind and feels forgotten while sick. Helping was easy. 💭"
        }
      ],
      "realWorldTip": "Sharing notes with a sick friend is a simple act that means a great deal.",
      "reflectionPrompt": "How would you feel missing school and falling behind while sick?"
    },
    {
      "id": "kq_054",
      "title": "The Spilled Art Supplies",
      "setting": "school",
      "characters": [
        "classmate",
        "teacher"
      ],
      "ageRange": [
        5,
        11
      ],
      "difficulty": 1,
      "theme": "kindness",
      "growthDimensions": [
        "empathy"
      ],
      "culture": [
        "global"
      ],
      "tags": [
        "kindness",
        "school",
        "helping",
        "art"
      ],
      "situation": "A classmate tripped and spilled a whole box of art supplies everywhere. Paint, crayons, and brushes rolled across the floor. They look embarrassed as others giggle.",
      "choices": [
        {
          "text": "Help gather the supplies and reassure them",
          "outcome": "kind",
          "xp": 25,
          "response": "You help pick everything up and say \"It happens to everyone!\" The giggling stops and they feel better. 🌟"
        },
        {
          "text": "Quietly start collecting the rolling crayons",
          "outcome": "helpful",
          "xp": 20,
          "response": "You gather the scattered crayons without a word. Your quiet help means a lot. 😊"
        },
        {
          "text": "Laugh along with the others",
          "outcome": "self",
          "xp": 3,
          "response": "You giggle too — but then you see their embarrassed face, and it doesn't feel funny. 💭"
        }
      ],
      "realWorldTip": "Helping someone after an embarrassing spill, instead of laughing, is true kindness.",
      "reflectionPrompt": "How would you feel if you spilled something and everyone laughed?"
    },
    {
      "id": "kq_055",
      "title": "The Lost Elder",
      "setting": "temple",
      "characters": [
        "confused elderly person",
        "temple crowd"
      ],
      "ageRange": [
        5,
        11
      ],
      "difficulty": 1,
      "theme": "kindness",
      "growthDimensions": [
        "empathy",
        "responsibility"
      ],
      "culture": [
        "IN"
      ],
      "tags": [
        "kindness",
        "India",
        "temple",
        "helping"
      ],
      "situation": "At a crowded temple, an elderly person looks lost and confused, searching for their family. People are rushing past them.",
      "choices": [
        {
          "text": "Gently help them and find a temple helper",
          "outcome": "kind",
          "xp": 25,
          "response": "You stay with them calmly and find a helper who reunites them with family. You were their guardian angel! 🌟"
        },
        {
          "text": "Ask a nearby adult to help them",
          "outcome": "helpful",
          "xp": 20,
          "response": "You alert a trusted adult who guides the elder. Quick, caring thinking! 😊"
        },
        {
          "text": "Walk past like everyone else",
          "outcome": "self",
          "xp": 5,
          "response": "You hurry by. The elder stays lost and worried. A moment of your kindness could have helped. 💭"
        }
      ],
      "realWorldTip": "Helping a lost or confused elder, with an adult's help, is a deeply kind act.",
      "reflectionPrompt": "How might an older person feel lost in a big crowd?"
    },
    {
      "id": "kq_056",
      "title": "The Overwhelmed Parent",
      "setting": "home",
      "characters": [
        "parent",
        "younger sibling"
      ],
      "ageRange": [
        5,
        11
      ],
      "difficulty": 1,
      "theme": "kindness",
      "growthDimensions": [
        "empathy",
        "responsibility"
      ],
      "culture": [
        "US"
      ],
      "tags": [
        "kindness",
        "US",
        "family",
        "helping"
      ],
      "situation": "Your parent is juggling cooking, a phone call, and your crying younger sibling all at once, looking totally overwhelmed. You're playing nearby.",
      "choices": [
        {
          "text": "Help by playing with your younger sibling",
          "outcome": "kind",
          "xp": 25,
          "response": "You distract your sibling with a fun game! Your parent gives you a grateful, relieved look. 🌟"
        },
        {
          "text": "Set the table to help with dinner",
          "outcome": "helpful",
          "xp": 20,
          "response": "You quietly set the table. One less thing for your overwhelmed parent. Thoughtful! 😊"
        },
        {
          "text": "Keep playing on your own",
          "outcome": "self",
          "xp": 5,
          "response": "You play alone. Your parent struggles with everything at once. A little help would have eased things. 💭"
        }
      ],
      "realWorldTip": "Noticing when a parent is overwhelmed and helping out is a wonderful kindness.",
      "reflectionPrompt": "What small thing could you do to help a busy grown-up?"
    },
    {
      "id": "kq_057",
      "title": "The Thirsty Street Dog",
      "setting": "park",
      "characters": [
        "stray dog"
      ],
      "ageRange": [
        5,
        11
      ],
      "difficulty": 1,
      "theme": "kindness",
      "growthDimensions": [
        "empathy",
        "responsibility"
      ],
      "culture": [
        "IN"
      ],
      "tags": [
        "kindness",
        "India",
        "animals",
        "helping"
      ],
      "situation": "On a hot day, a friendly street dog is panting in the heat, clearly thirsty. There's a tap nearby and you have a small bowl from your picnic.",
      "choices": [
        {
          "text": "Fill the bowl with water for the dog",
          "outcome": "kind",
          "xp": 25,
          "response": "You give the panting dog cool water. It drinks gratefully, tail wagging. Such a caring heart! 🌟"
        },
        {
          "text": "Ask a grown-up to help give it water",
          "outcome": "helpful",
          "xp": 20,
          "response": "You get an adult to safely help the dog drink. Caring and sensible! 😊"
        },
        {
          "text": "Walk past — it's just a street dog",
          "outcome": "self",
          "xp": 5,
          "response": "You walk on. The dog keeps panting in the heat. A bowl of water would have helped so much. 💭"
        }
      ],
      "realWorldTip": "Showing kindness to thirsty animals on hot days is a gentle, caring act.",
      "reflectionPrompt": "How can you be kind to animals around you?"
    },
    {
      "id": "kq_058",
      "title": "The Nervous New Student",
      "setting": "school",
      "characters": [
        "new student"
      ],
      "ageRange": [
        5,
        11
      ],
      "difficulty": 1,
      "theme": "kindness",
      "growthDimensions": [
        "empathy"
      ],
      "culture": [
        "global"
      ],
      "tags": [
        "kindness",
        "school",
        "inclusion",
        "helping"
      ],
      "situation": "A new student looks nervous and lost, unsure where to sit or what to do. They don't know anyone. You remember how scary the first day can feel.",
      "choices": [
        {
          "text": "Welcome them and show them around",
          "outcome": "kind",
          "xp": 25,
          "response": "You introduce yourself and show them everything. By lunch, they have a friend — you! 🌟"
        },
        {
          "text": "Save them a seat next to you",
          "outcome": "helpful",
          "xp": 20,
          "response": "You wave them to the seat beside you. A small welcome that means a lot on a scary day. 😊"
        },
        {
          "text": "Let them figure it out themselves",
          "outcome": "self",
          "xp": 5,
          "response": "You leave them to it. The new student spends the day lost and alone. A welcome was all they needed. 💭"
        }
      ],
      "realWorldTip": "Welcoming a new student warmly can turn their scary first day into a good one.",
      "reflectionPrompt": "What would help you most on your first day somewhere new?"
    },
    {
      "id": "kq_059",
      "title": "The Mocked Drawing",
      "setting": "school",
      "characters": [
        "classmate",
        "other kids"
      ],
      "ageRange": [
        4,
        10
      ],
      "difficulty": 2,
      "theme": "kindness",
      "growthDimensions": [
        "empathy",
        "responsibility"
      ],
      "culture": [
        "IN"
      ],
      "tags": [
        "kindness",
        "India",
        "school",
        "standing up"
      ],
      "situation": "Some kids are laughing at a classmate's drawing, calling it ugly. The classmate is trying not to cry and starting to crumple up their artwork.",
      "choices": [
        {
          "text": "Tell them you think it's creative and unique",
          "outcome": "kind",
          "xp": 30,
          "response": "You praise their art genuinely. They smooth out the paper, smiling. The mockers go quiet. You lifted them up! 🌟"
        },
        {
          "text": "Ask the kids to stop being unkind",
          "outcome": "responsible",
          "xp": 25,
          "response": "You speak up: \"That's not nice.\" The teasing stops and your classmate feels protected. Brave! 💙"
        },
        {
          "text": "Stay quiet and look away",
          "outcome": "self",
          "xp": 8,
          "response": "You say nothing. Your classmate crumples their drawing, hurt. A kind word could have saved it. 💭"
        }
      ],
      "realWorldTip": "A genuine kind word about someone's work can undo the hurt of others' mockery.",
      "reflectionPrompt": "How does one kind comment feel after several mean ones?"
    },
    {
      "id": "kq_060",
      "title": "The Lonely Grandparent",
      "setting": "home",
      "characters": [
        "grandparent on phone"
      ],
      "ageRange": [
        4,
        10
      ],
      "difficulty": 2,
      "theme": "kindness",
      "growthDimensions": [
        "empathy"
      ],
      "culture": [
        "US"
      ],
      "tags": [
        "kindness",
        "US",
        "family",
        "connection"
      ],
      "situation": "Your grandparent lives far away and called, but everyone's busy. You can hear in their voice they're lonely and just want to chat. Your show is about to start.",
      "choices": [
        {
          "text": "Sit and chat with them for a while",
          "outcome": "kind",
          "xp": 30,
          "response": "You talk and listen, sharing your day. Your grandparent's voice brightens with joy. You made their day! 🌟"
        },
        {
          "text": "Tell them about your week briefly",
          "outcome": "responsible",
          "xp": 25,
          "response": "You share a few stories. Your grandparent feels remembered and loved. Thoughtful! 💙"
        },
        {
          "text": "Say you're busy and hang up",
          "outcome": "self",
          "xp": 8,
          "response": "You rush off. Your grandparent spends the evening lonely. A short chat would have meant everything. 💭"
        }
      ],
      "realWorldTip": "Spending a little time chatting with a lonely grandparent is a precious gift.",
      "reflectionPrompt": "How does it feel when someone takes time just to talk with you?"
    },
    {
      "id": "kq_061",
      "title": "The Fallen Cyclist",
      "setting": "park",
      "characters": [
        "kid who fell off bike"
      ],
      "ageRange": [
        4,
        10
      ],
      "difficulty": 2,
      "theme": "kindness",
      "growthDimensions": [
        "empathy",
        "responsibility"
      ],
      "culture": [
        "IN"
      ],
      "tags": [
        "kindness",
        "India",
        "park",
        "helping"
      ],
      "situation": "A kid fell off their bike and scraped their knee badly. They're trying to be brave but you can see they're hurt and a little scared. No grown-up is right there.",
      "choices": [
        {
          "text": "Help them up and find a grown-up",
          "outcome": "kind",
          "xp": 30,
          "response": "You comfort them and quickly find an adult to help. They're cared for and grateful for your help. 🌟"
        },
        {
          "text": "Stay with them so they're not alone",
          "outcome": "responsible",
          "xp": 25,
          "response": "You sit with them, keeping them calm until help comes. Your presence comforts them. 💙"
        },
        {
          "text": "Keep riding your own bike",
          "outcome": "self",
          "xp": 8,
          "response": "You ride on. The hurt kid sits alone, scared. Stopping to help would have meant a lot. 💭"
        }
      ],
      "realWorldTip": "Helping someone who's hurt and getting a grown-up is the kind and right thing to do.",
      "reflectionPrompt": "What would you want someone to do if you fell and got hurt?"
    },
    {
      "id": "kq_062",
      "title": "The Excluded Lunch Table",
      "setting": "school",
      "characters": [
        "lonely classmate",
        "your group"
      ],
      "ageRange": [
        4,
        10
      ],
      "difficulty": 2,
      "theme": "kindness",
      "growthDimensions": [
        "empathy",
        "fairness"
      ],
      "culture": [
        "global"
      ],
      "tags": [
        "kindness",
        "school",
        "inclusion",
        "food"
      ],
      "situation": "At lunch, a classmate has no one to sit with and is about to eat alone in a corner. Your table is full of your friends, but there's a little room to squeeze in one more.",
      "choices": [
        {
          "text": "Invite them to squeeze in at your table",
          "outcome": "kind",
          "xp": 30,
          "response": "You make room and wave them over. They join happily, and your group welcomes them. No one eats alone! 🌟"
        },
        {
          "text": "Go sit with them at their table",
          "outcome": "responsible",
          "xp": 25,
          "response": "You leave your group to keep them company. A real sacrifice of kindness! 💙"
        },
        {
          "text": "Let them sit alone — your table's full",
          "outcome": "self",
          "xp": 8,
          "response": "You stay put. They eat alone in the corner. A little squeeze could have included them. 💭"
        }
      ],
      "realWorldTip": "Making room for someone with no one to sit with is a powerful act of kindness.",
      "reflectionPrompt": "How does it feel to have nowhere to sit at lunch?"
    },
    {
      "id": "kq_063",
      "title": "The Helper's Long Day",
      "setting": "home",
      "characters": [
        "house helper"
      ],
      "ageRange": [
        4,
        10
      ],
      "difficulty": 2,
      "theme": "kindness",
      "growthDimensions": [
        "empathy",
        "responsibility"
      ],
      "culture": [
        "IN"
      ],
      "tags": [
        "kindness",
        "India",
        "home",
        "gratitude"
      ],
      "situation": "The house helper has been working hard all day and looks exhausted. She's about to start another task. You could offer to help or at least thank her.",
      "choices": [
        {
          "text": "Offer to help with a small task",
          "outcome": "kind",
          "xp": 30,
          "response": "You help carry something or tidy up. She's touched by your thoughtfulness and thanks you warmly. 🌟"
        },
        {
          "text": "Bring her water and thank her sincerely",
          "outcome": "responsible",
          "xp": 25,
          "response": "You bring water and say a heartfelt thank you. She feels seen and appreciated. 💙"
        },
        {
          "text": "Ignore her — it's her job",
          "outcome": "self",
          "xp": 8,
          "response": "You walk past. She continues tired and unthanked. A small kindness costs nothing and means much. 💭"
        }
      ],
      "realWorldTip": "Showing gratitude and small help to those who work hard for us is a beautiful kindness.",
      "reflectionPrompt": "Who works hard to help your family? How could you thank them?"
    },
    {
      "id": "kq_064",
      "title": "The Wheelchair Friend",
      "setting": "school",
      "characters": [
        "classmate using a wheelchair"
      ],
      "ageRange": [
        4,
        10
      ],
      "difficulty": 2,
      "theme": "kindness",
      "growthDimensions": [
        "empathy",
        "fairness"
      ],
      "culture": [
        "US"
      ],
      "tags": [
        "kindness",
        "US",
        "school",
        "inclusion"
      ],
      "situation": "A classmate who uses a wheelchair can't reach a book on a high shelf and the others have run off to recess. They look frustrated trying to reach it.",
      "choices": [
        {
          "text": "Get the book down and ask if they need more help",
          "outcome": "kind",
          "xp": 30,
          "response": "You grab the book and ask what else they need. They're so grateful for your easy, natural help. 🌟"
        },
        {
          "text": "Reach the book for them quickly",
          "outcome": "responsible",
          "xp": 25,
          "response": "You hand them the book with a smile. A simple, thoughtful help! 💙"
        },
        {
          "text": "Run off to recess like the others",
          "outcome": "self",
          "xp": 8,
          "response": "You rush to play. Your classmate struggles alone. A moment of help would have meant a lot. 💭"
        }
      ],
      "realWorldTip": "Helping someone reach what they need, naturally and kindly, includes everyone.",
      "reflectionPrompt": "How can you help make sure everyone can do the same things?"
    },
    {
      "id": "kq_065",
      "title": "The Festival Outsider",
      "setting": "festival",
      "characters": [
        "child from another background",
        "your family"
      ],
      "ageRange": [
        4,
        10
      ],
      "difficulty": 2,
      "theme": "kindness",
      "growthDimensions": [
        "empathy",
        "fairness"
      ],
      "culture": [
        "IN"
      ],
      "tags": [
        "kindness",
        "India",
        "festival",
        "inclusion"
      ],
      "situation": "During your family's festival, a neighbour child from a different background watches curiously from outside, never having celebrated it. They seem interested but unsure if they're welcome.",
      "choices": [
        {
          "text": "Invite them to join and explain the festival",
          "outcome": "kind",
          "xp": 30,
          "response": "You welcome them in and share your traditions. They join joyfully, learning something new. Beautiful sharing! 🌟"
        },
        {
          "text": "Bring them some festival sweets",
          "outcome": "responsible",
          "xp": 25,
          "response": "You offer them sweets and a warm smile. They feel included in the celebration. 💙"
        },
        {
          "text": "Celebrate with just your family",
          "outcome": "self",
          "xp": 8,
          "response": "You stay inside. The curious child watches alone from outside. Sharing your festival would have been kind. 💭"
        }
      ],
      "realWorldTip": "Welcoming others into your celebrations, whatever their background, spreads joy and friendship.",
      "reflectionPrompt": "How does it feel to be included in something new and special?"
    },
    {
      "id": "kq_066",
      "title": "The Littered Park",
      "setting": "park",
      "characters": [
        "other park visitors"
      ],
      "ageRange": [
        4,
        10
      ],
      "difficulty": 2,
      "theme": "kindness",
      "growthDimensions": [
        "responsibility",
        "empathy"
      ],
      "culture": [
        "global"
      ],
      "tags": [
        "kindness",
        "park",
        "responsibility",
        "environment"
      ],
      "situation": "You notice the park playground is covered in litter that someone left behind. It's making the space messy for everyone, including little kids who play there. No one else is picking it up.",
      "choices": [
        {
          "text": "Pick up the litter and find a bin",
          "outcome": "responsible",
          "xp": 30,
          "response": "You clean up the mess, making the park nice for everyone. Other kids see and start helping too! 🌟"
        },
        {
          "text": "Pick up the litter near the play area",
          "outcome": "kind",
          "xp": 25,
          "response": "You clear the worst of it near where little kids play. Thoughtful and caring! 💙"
        },
        {
          "text": "Leave it — you didn't make the mess",
          "outcome": "self",
          "xp": 8,
          "response": "You walk past. The litter stays, spoiling the park for little kids. Helping would have made it nicer for all. 💭"
        }
      ],
      "realWorldTip": "Cleaning up a mess you didn't make, for everyone's sake, is a generous kindness.",
      "reflectionPrompt": "Why is it kind to clean up even when you didn't make the mess?"
    },
    {
      "id": "kq_067",
      "title": "The Slow Reader",
      "setting": "school",
      "characters": [
        "struggling classmate"
      ],
      "ageRange": [
        4,
        10
      ],
      "difficulty": 2,
      "theme": "kindness",
      "growthDimensions": [
        "empathy",
        "patience"
      ],
      "culture": [
        "IN"
      ],
      "tags": [
        "kindness",
        "India",
        "school",
        "patience"
      ],
      "situation": "During reading time, a classmate is struggling and reading slowly. Some kids are sighing impatiently and rolling their eyes, making the classmate more nervous.",
      "choices": [
        {
          "text": "Encourage them patiently and kindly",
          "outcome": "kind",
          "xp": 30,
          "response": "You smile and say \"Take your time, you're doing great.\" They relax and read better. Your patience helped! 🌟"
        },
        {
          "text": "Offer to be their reading buddy",
          "outcome": "responsible",
          "xp": 25,
          "response": "You offer to practise reading together. They light up at having a patient friend. 💙"
        },
        {
          "text": "Sigh impatiently like the others",
          "outcome": "self",
          "xp": 8,
          "response": "You join the impatience. The classmate gets more flustered and embarrassed. Patience would have helped them. 💭"
        }
      ],
      "realWorldTip": "Being patient and encouraging with someone who's struggling helps them more than impatience ever could.",
      "reflectionPrompt": "How does it feel when people are impatient with you while you're learning?"
    },
    {
      "id": "kq_068",
      "title": "The Sad Friend's Visit",
      "setting": "home",
      "characters": [
        "friend going through a hard time"
      ],
      "ageRange": [
        4,
        10
      ],
      "difficulty": 2,
      "theme": "kindness",
      "growthDimensions": [
        "empathy"
      ],
      "culture": [
        "US"
      ],
      "tags": [
        "kindness",
        "US",
        "friends",
        "comfort"
      ],
      "situation": "Your friend came over but seems really sad — their pet just passed away. You had fun games planned, but they're quiet and teary, not in the mood to play.",
      "choices": [
        {
          "text": "Sit with them and let them talk about it",
          "outcome": "kind",
          "xp": 30,
          "response": "You put the games aside and listen. Your friend feels comforted and less alone. True friendship! 🌟"
        },
        {
          "text": "Offer a gentle hug and quiet company",
          "outcome": "responsible",
          "xp": 25,
          "response": "You give them a hug and stay close. Your quiet comfort means everything right now. 💙"
        },
        {
          "text": "Insist on playing games to cheer them up",
          "outcome": "self",
          "xp": 10,
          "response": "You push the games. But they're not ready, and feel unheard. Sometimes listening helps more than fun. 💭"
        }
      ],
      "realWorldTip": "When a friend is grieving, listening and being present comforts more than trying to fix it.",
      "reflectionPrompt": "What helps you most when you're feeling really sad?"
    },
    {
      "id": "kq_069",
      "title": "The Smaller Kid's Turn",
      "setting": "park",
      "characters": [
        "younger child",
        "big kids"
      ],
      "ageRange": [
        4,
        10
      ],
      "difficulty": 2,
      "theme": "kindness",
      "growthDimensions": [
        "empathy",
        "fairness"
      ],
      "culture": [
        "IN"
      ],
      "tags": [
        "kindness",
        "India",
        "park",
        "fairness"
      ],
      "situation": "Big kids are hogging the slide and a much smaller child has been waiting a long time, too timid to push in. The little one looks like they might give up and leave.",
      "choices": [
        {
          "text": "Help the little one get a turn",
          "outcome": "kind",
          "xp": 30,
          "response": "You make space and help the little one slide. Their delighted squeal melts everyone's heart! 🌟"
        },
        {
          "text": "Ask the big kids to let the little one go",
          "outcome": "responsible",
          "xp": 25,
          "response": "You speak up for the little one's turn. The big kids agree, and fairness wins! 💙"
        },
        {
          "text": "Wait for your own turn",
          "outcome": "self",
          "xp": 8,
          "response": "You wait quietly. The little one gives up and wanders off sadly. Helping them would have been kind. 💭"
        }
      ],
      "realWorldTip": "Helping a smaller, timid child get their turn is a caring, fair kindness.",
      "reflectionPrompt": "How would you feel waiting forever for a turn while bigger kids went ahead?"
    },
    {
      "id": "kq_070",
      "title": "The Teased Accent",
      "setting": "school",
      "characters": [
        "classmate with an accent",
        "other kids"
      ],
      "ageRange": [
        4,
        10
      ],
      "difficulty": 2,
      "theme": "kindness",
      "growthDimensions": [
        "empathy",
        "fairness"
      ],
      "culture": [
        "global"
      ],
      "tags": [
        "kindness",
        "school",
        "inclusion",
        "diversity"
      ],
      "situation": "A classmate who speaks with an accent is being teased when they talk. They're getting quieter, afraid to speak up. You can see how much it's hurting them.",
      "choices": [
        {
          "text": "Compliment them and ask about their home",
          "outcome": "kind",
          "xp": 30,
          "response": "You say their accent is cool and ask about where they're from. They light up sharing stories. You included them! 🌟"
        },
        {
          "text": "Tell the teasers to stop",
          "outcome": "responsible",
          "xp": 25,
          "response": "You stand up: \"Stop teasing them.\" The teasing stops, and your classmate gives a grateful look. 💙"
        },
        {
          "text": "Stay quiet to avoid trouble",
          "outcome": "self",
          "xp": 8,
          "response": "You say nothing. Your classmate stops talking, feeling unwelcome. Standing up could have helped. 💭"
        }
      ],
      "realWorldTip": "Defending someone teased for being different, and showing interest, is true kindness.",
      "reflectionPrompt": "How would it feel to be teased for the way you talk?"
    },
    {
      "id": "kq_071",
      "title": "The Younger Sibling's Fear",
      "setting": "home",
      "characters": [
        "younger sibling"
      ],
      "ageRange": [
        4,
        10
      ],
      "difficulty": 2,
      "theme": "kindness",
      "growthDimensions": [
        "empathy",
        "responsibility"
      ],
      "culture": [
        "IN"
      ],
      "tags": [
        "kindness",
        "India",
        "family",
        "comfort"
      ],
      "situation": "There's a power cut and it's dark. Your younger sibling is scared of the dark and crying. Your parents are busy finding candles. You have a flashlight.",
      "choices": [
        {
          "text": "Comfort them and share your flashlight",
          "outcome": "kind",
          "xp": 30,
          "response": "You hold them close and shine the light, making shadow puppets. Their fear turns into giggles! 🌟"
        },
        {
          "text": "Stay close and reassure them",
          "outcome": "responsible",
          "xp": 25,
          "response": "You sit beside them, talking softly until they feel safe. Your comfort calms their fear. 💙"
        },
        {
          "text": "Tell them to stop being a baby",
          "outcome": "self",
          "xp": 5,
          "response": "You dismiss their fear. They cry harder, feeling alone. Comfort would have helped them feel safe. 💭"
        }
      ],
      "realWorldTip": "Comforting a scared younger sibling, instead of dismissing their fear, is loving kindness.",
      "reflectionPrompt": "What helps you feel brave when you're scared?"
    },
    {
      "id": "kq_072",
      "title": "The Forgotten Birthday",
      "setting": "school",
      "characters": [
        "classmate"
      ],
      "ageRange": [
        4,
        10
      ],
      "difficulty": 2,
      "theme": "kindness",
      "growthDimensions": [
        "empathy"
      ],
      "culture": [
        "US"
      ],
      "tags": [
        "kindness",
        "US",
        "school",
        "thoughtfulness"
      ],
      "situation": "You realise it's a classmate's birthday but no one remembered or said anything. They look a little sad watching others get attention on their special days.",
      "choices": [
        {
          "text": "Wish them happy birthday and get others to too",
          "outcome": "kind",
          "xp": 30,
          "response": "You start a birthday wish, and soon the class joins in! Their sad day turns into a happy one. 🌟"
        },
        {
          "text": "Make them a quick birthday card",
          "outcome": "responsible",
          "xp": 25,
          "response": "You draw a little card. They're touched that someone remembered. Thoughtful! 💙"
        },
        {
          "text": "Say nothing — it's not your job",
          "outcome": "self",
          "xp": 8,
          "response": "You stay quiet. Their birthday passes unnoticed, and they feel forgotten. A simple wish would have helped. 💭"
        }
      ],
      "realWorldTip": "Remembering and celebrating someone when others forgot is a thoughtful kindness.",
      "reflectionPrompt": "How would it feel if everyone forgot your birthday?"
    },
    {
      "id": "kq_073",
      "title": "The Confused Shopkeeper",
      "setting": "shop",
      "characters": [
        "elderly shopkeeper"
      ],
      "ageRange": [
        4,
        10
      ],
      "difficulty": 2,
      "theme": "kindness",
      "growthDimensions": [
        "empathy",
        "responsibility"
      ],
      "culture": [
        "IN"
      ],
      "tags": [
        "kindness",
        "India",
        "shop",
        "helping"
      ],
      "situation": "An elderly shopkeeper is struggling to count change and getting flustered as customers wait impatiently. You're good with numbers and notice their difficulty.",
      "choices": [
        {
          "text": "Gently offer to help count the change",
          "outcome": "kind",
          "xp": 30,
          "response": "You kindly help count the change. The shopkeeper relaxes and thanks you warmly. You eased their stress! 🌟"
        },
        {
          "text": "Patiently wait and reassure them",
          "outcome": "responsible",
          "xp": 25,
          "response": "You wait calmly and say \"No rush.\" Your patience calms them down. Thoughtful! 💙"
        },
        {
          "text": "Sigh impatiently with the others",
          "outcome": "self",
          "xp": 8,
          "response": "You join the impatience. The flustered shopkeeper struggles more. Patience and help would have been kind. 💭"
        }
      ],
      "realWorldTip": "Patiently helping an elder who's struggling, instead of adding pressure, is a gentle kindness.",
      "reflectionPrompt": "How does impatience from others affect someone who's already flustered?"
    },
    {
      "id": "kq_074",
      "title": "The Domestic Worker's Child",
      "setting": "home",
      "characters": [
        "worker's child",
        "parents"
      ],
      "ageRange": [
        8,
        12
      ],
      "difficulty": 2,
      "theme": "kindness",
      "growthDimensions": [
        "empathy",
        "fairness"
      ],
      "culture": [
        "IN"
      ],
      "tags": [
        "kindness",
        "India",
        "home",
        "generosity"
      ],
      "situation": "The domestic worker's child visits and admires your old books and toys that you've outgrown and never use anymore. They can't afford such things. Your parents leave the choice to you.",
      "choices": [
        {
          "text": "Give them books and toys you've outgrown",
          "outcome": "generous",
          "xp": 30,
          "response": "You gift your unused things to someone who'll treasure them. Their joy is overwhelming! True generosity. 🌟"
        },
        {
          "text": "Share a few favourites you can part with",
          "outcome": "responsible",
          "xp": 25,
          "response": "You pick some to give. The child is thrilled with their new treasures. Thoughtful sharing! 💙"
        },
        {
          "text": "Keep everything — they're yours",
          "outcome": "self",
          "xp": 8,
          "response": "You keep it all, unused. The child leaves empty-handed. Sharing what you don't use could have meant so much. 💭"
        }
      ],
      "realWorldTip": "Giving away things you've outgrown to someone who has less is meaningful generosity.",
      "reflectionPrompt": "What do you own but never use that could bring someone else joy?"
    },
    {
      "id": "kq_075",
      "title": "The Struggling Student",
      "setting": "school",
      "characters": [
        "classmate falling behind"
      ],
      "ageRange": [
        8,
        12
      ],
      "difficulty": 2,
      "theme": "kindness",
      "growthDimensions": [
        "empathy",
        "responsibility"
      ],
      "culture": [
        "US"
      ],
      "tags": [
        "kindness",
        "US",
        "school",
        "helping"
      ],
      "situation": "A classmate is clearly falling behind in math and getting discouraged, on the verge of giving up. You understand it well and could spend your free time helping them.",
      "choices": [
        {
          "text": "Offer to tutor them in your free time",
          "outcome": "kind",
          "xp": 30,
          "response": "You patiently help them understand. Their confidence returns and they start improving. You changed their path! 🌟"
        },
        {
          "text": "Share your study tips and notes",
          "outcome": "responsible",
          "xp": 25,
          "response": "You give them your methods and notes. A helpful boost for a struggling classmate! 💙"
        },
        {
          "text": "Focus on your own work",
          "outcome": "self",
          "xp": 8,
          "response": "You stay focused on yourself. Your classmate gives up, discouraged. A little help could have saved their confidence. 💭"
        }
      ],
      "realWorldTip": "Sharing your time and knowledge to help someone struggling is a generous kindness.",
      "reflectionPrompt": "How does it feel when someone patient helps you understand something hard?"
    },
    {
      "id": "kq_076",
      "title": "The Online Newcomer",
      "setting": "online",
      "characters": [
        "new online community member"
      ],
      "ageRange": [
        8,
        12
      ],
      "difficulty": 2,
      "theme": "kindness",
      "growthDimensions": [
        "empathy",
        "responsibility"
      ],
      "culture": [
        "IN"
      ],
      "tags": [
        "kindness",
        "India",
        "online",
        "inclusion"
      ],
      "situation": "In an online group or game, a newcomer is being ignored and is clearly confused about how things work. Some members are even being a bit rude to them. You know the ropes well.",
      "choices": [
        {
          "text": "Welcome them and explain how things work",
          "outcome": "kind",
          "xp": 30,
          "response": "You guide the newcomer kindly. They feel welcomed and become a friendly member. You set a kind tone! 🌟"
        },
        {
          "text": "Send them helpful tips privately",
          "outcome": "responsible",
          "xp": 25,
          "response": "You quietly message them helpful guidance. They're grateful for the friendly help. 💙"
        },
        {
          "text": "Ignore them like the others",
          "outcome": "self",
          "xp": 8,
          "response": "You ignore them too. The newcomer feels unwelcome and leaves. A friendly welcome would have helped. 💭"
        }
      ],
      "realWorldTip": "Welcoming and helping newcomers online builds a kinder community for everyone.",
      "reflectionPrompt": "How does it feel to be new somewhere and have someone help you?"
    },
    {
      "id": "kq_077",
      "title": "The Injured Bird",
      "setting": "park",
      "characters": [
        "injured bird",
        "parent"
      ],
      "ageRange": [
        8,
        12
      ],
      "difficulty": 2,
      "theme": "kindness",
      "growthDimensions": [
        "empathy",
        "responsibility"
      ],
      "culture": [
        "global"
      ],
      "tags": [
        "kindness",
        "park",
        "animals",
        "responsibility"
      ],
      "situation": "You find a small bird with an injured wing on the ground, unable to fly. It's in danger from cats and the cold. You know not to handle wild animals carelessly.",
      "choices": [
        {
          "text": "Get an adult to help the bird safely",
          "outcome": "responsible",
          "xp": 30,
          "response": "You find an adult who helps the bird get proper care. You helped it the right, safe way! 🌟"
        },
        {
          "text": "Gently shelter it and call for help",
          "outcome": "kind",
          "xp": 25,
          "response": "You carefully shield it from danger and call for help. Caring and sensible! 💙"
        },
        {
          "text": "Leave it — nature will sort it out",
          "outcome": "self",
          "xp": 10,
          "response": "You walk away. The injured bird is left in danger. Getting safe help could have saved it. 💭"
        }
      ],
      "realWorldTip": "Helping an injured animal means getting safe adult help, not handling it carelessly.",
      "reflectionPrompt": "Why is it important to get help instead of handling a hurt wild animal yourself?"
    },
    {
      "id": "kq_078",
      "title": "The Bullied Junior",
      "setting": "school",
      "characters": [
        "younger student",
        "bully"
      ],
      "ageRange": [
        8,
        12
      ],
      "difficulty": 2,
      "theme": "kindness",
      "growthDimensions": [
        "empathy",
        "responsibility"
      ],
      "culture": [
        "IN"
      ],
      "tags": [
        "kindness",
        "India",
        "school",
        "courage"
      ],
      "situation": "You see an older student bullying a younger one, taking their things and mocking them. The younger student is scared and alone. Other kids are pretending not to notice.",
      "choices": [
        {
          "text": "Get a teacher right away to stop it",
          "outcome": "responsible",
          "xp": 30,
          "response": "You quickly bring a teacher. The bullying stops and the younger student is safe. Smart, brave help! 🌟"
        },
        {
          "text": "Stand with the younger student to support them",
          "outcome": "kind",
          "xp": 25,
          "response": "You stand beside them: \"Leave them alone.\" Your support gives them courage. 💙"
        },
        {
          "text": "Pretend not to notice like the others",
          "outcome": "self",
          "xp": 8,
          "response": "You look away. The younger student keeps suffering alone. Getting help would have protected them. 💭"
        }
      ],
      "realWorldTip": "Standing up for or getting help for someone being bullied is a courageous kindness.",
      "reflectionPrompt": "What are safe ways to help when you see someone being bullied?"
    },
    {
      "id": "kq_079",
      "title": "The Cheating Out of Desperation",
      "setting": "school",
      "characters": [
        "struggling classmate",
        "teacher"
      ],
      "ageRange": [
        5,
        10
      ],
      "difficulty": 3,
      "theme": "kindness",
      "growthDimensions": [
        "empathy",
        "fairness"
      ],
      "culture": [
        "IN"
      ],
      "tags": [
        "kindness",
        "India",
        "school",
        "dilemma"
      ],
      "situation": "You see a classmate copying during a test. You know their family is struggling and they're terrified of failing. But other students studied hard and it's not fair to them either.",
      "choices": [
        {
          "text": "Quietly offer to help them study after, not enable it now",
          "outcome": "wise",
          "xp": 30,
          "response": "You don't enable cheating, but you offer real help afterward. Kind to them AND fair to others. 🌟"
        },
        {
          "text": "Privately tell them you noticed, with compassion",
          "outcome": "responsible",
          "xp": 25,
          "response": "You gently let them know you saw, showing you care without judging. It opens a door to help. 💙"
        },
        {
          "text": "Say nothing — they're struggling",
          "outcome": "self",
          "xp": 12,
          "response": "You feel for them, but staying silent isn't fair to those who studied. A hard situation with no easy path. 💭"
        }
      ],
      "realWorldTip": "Real kindness to a struggling person often means helping them properly, not enabling a shortcut.",
      "reflectionPrompt": "How can you be kind to someone struggling while still being fair to everyone?"
    },
    {
      "id": "kq_080",
      "title": "The Two Friends' Fight",
      "setting": "home",
      "characters": [
        "friend A",
        "friend B"
      ],
      "ageRange": [
        5,
        10
      ],
      "difficulty": 3,
      "theme": "kindness",
      "growthDimensions": [
        "empathy",
        "fairness"
      ],
      "culture": [
        "US"
      ],
      "tags": [
        "kindness",
        "US",
        "friendship",
        "loyalty"
      ],
      "situation": "Your two best friends had a big fight and both want you to take their side. Each thinks the other was wrong. You can see both made mistakes, and you don't want to lose either friendship.",
      "choices": [
        {
          "text": "Stay caring to both without taking a side",
          "outcome": "wise",
          "xp": 30,
          "response": "You refuse to pick sides and gently help both see each other's view. A peacemaker's kindness! 🌟"
        },
        {
          "text": "Help them talk it out together",
          "outcome": "responsible",
          "xp": 30,
          "response": "You bring them together to listen to each other. Your kindness helps heal the friendship. 🌟"
        },
        {
          "text": "Side with the friend you're closer to",
          "outcome": "self",
          "xp": 12,
          "response": "You pick a side. One friend feels supported, the other betrayed. The fight deepens. A hard call. 💭"
        }
      ],
      "realWorldTip": "Being kind to both sides of a conflict, without picking one, is wise and fair.",
      "reflectionPrompt": "Is it possible to be a good friend to two people who are fighting?"
    },
    {
      "id": "kq_081",
      "title": "The Beggar's Request",
      "setting": "shop",
      "characters": [
        "person begging",
        "parent"
      ],
      "ageRange": [
        5,
        10
      ],
      "difficulty": 3,
      "theme": "kindness",
      "growthDimensions": [
        "empathy",
        "reasoning"
      ],
      "culture": [
        "IN"
      ],
      "tags": [
        "kindness",
        "India",
        "poverty",
        "dilemma"
      ],
      "situation": "Outside a shop, someone asks you for money for food. You have a little money your parent gave you. Your parent told you it's safer to give food than money to strangers. The person seems genuinely hungry.",
      "choices": [
        {
          "text": "Ask your parent to help buy them food",
          "outcome": "wise",
          "xp": 30,
          "response": "You involve your parent, who helps you offer food safely. Kindness done thoughtfully and safely! 🌟"
        },
        {
          "text": "Offer them a snack you have, not money",
          "outcome": "responsible",
          "xp": 25,
          "response": "You share food rather than money, balancing kindness with your parent's safe advice. 💙"
        },
        {
          "text": "Give them all your money quickly",
          "outcome": "reactive",
          "xp": 15,
          "response": "Your heart is kind, but acting alone with money worried your parent. Kindness needs safety too. 💭"
        }
      ],
      "realWorldTip": "Compassion is wonderful, and even better when balanced with safety and a trusted adult's guidance.",
      "reflectionPrompt": "How can you help people in need while also staying safe?"
    },
    {
      "id": "kq_082",
      "title": "The Kind Lie",
      "setting": "school",
      "characters": [
        "friend",
        "teacher"
      ],
      "ageRange": [
        5,
        10
      ],
      "difficulty": 3,
      "theme": "kindness",
      "growthDimensions": [
        "empathy",
        "responsibility"
      ],
      "culture": [
        "global"
      ],
      "tags": [
        "kindness",
        "school",
        "honesty",
        "dilemma"
      ],
      "situation": "Your friend did a presentation that didn't go well and they're crushed. They ask you, \"Was it really that bad?\" You don't want to hurt them, but lying isn't right either.",
      "choices": [
        {
          "text": "Find something true and encouraging to say",
          "outcome": "wise",
          "xp": 30,
          "response": "You honestly praise what was good and gently suggest improvements. Kind AND truthful! 🌟"
        },
        {
          "text": "Focus on how brave they were to present",
          "outcome": "responsible",
          "xp": 25,
          "response": "You truthfully highlight their courage. They feel supported without being lied to. 💙"
        },
        {
          "text": "Say it was perfect",
          "outcome": "lie",
          "xp": 12,
          "response": "You lie to spare them. It feels kind, but they won't improve, and it wasn't honest. A gentle truth was possible. 💭"
        }
      ],
      "realWorldTip": "You can be kind and honest by finding something genuinely good to encourage.",
      "reflectionPrompt": "How can you support a friend honestly without crushing them?"
    },
    {
      "id": "kq_083",
      "title": "The Favoured Sibling",
      "setting": "home",
      "characters": [
        "sibling",
        "grandmother"
      ],
      "ageRange": [
        5,
        10
      ],
      "difficulty": 3,
      "theme": "kindness",
      "growthDimensions": [
        "empathy",
        "fairness"
      ],
      "culture": [
        "IN"
      ],
      "tags": [
        "kindness",
        "India",
        "family",
        "fairness"
      ],
      "situation": "Your grandmother clearly favours your sibling, giving them more attention and treats. Your sibling feels a bit guilty about it. You feel hurt, but taking it out on your sibling wouldn't be fair to them.",
      "choices": [
        {
          "text": "Be kind to your sibling despite your hurt",
          "outcome": "wise",
          "xp": 30,
          "response": "You don't blame your sibling for grandmother's choices. You stay warm with them. Mature kindness! 🌟"
        },
        {
          "text": "Talk honestly with your sibling about your feelings",
          "outcome": "responsible",
          "xp": 25,
          "response": "You share your feelings kindly without blaming them. You stay close as siblings. 💙"
        },
        {
          "text": "Be cold to your sibling",
          "outcome": "self",
          "xp": 10,
          "response": "You take it out on your sibling, who didn't choose grandmother's favouritism. It hurts you both. 💭"
        }
      ],
      "realWorldTip": "It's unfair to punish someone for something they didn't choose, even when you feel hurt.",
      "reflectionPrompt": "How can you handle hurt feelings without taking them out on someone innocent?"
    },
    {
      "id": "kq_084",
      "title": "The Rival's Injury",
      "setting": "park",
      "characters": [
        "rival player",
        "your team"
      ],
      "ageRange": [
        5,
        10
      ],
      "difficulty": 3,
      "theme": "kindness",
      "growthDimensions": [
        "empathy",
        "fairness"
      ],
      "culture": [
        "US"
      ],
      "tags": [
        "kindness",
        "US",
        "sports",
        "compassion"
      ],
      "situation": "During a competitive game, a player from the other team — who's been unfriendly to you — gets hurt and needs help. Your team is winning and some teammates want to keep playing.",
      "choices": [
        {
          "text": "Stop and help, even though they were unkind",
          "outcome": "wise",
          "xp": 30,
          "response": "You help your rival despite their unfriendliness. They're stunned by your kindness. You rose above it! 🌟"
        },
        {
          "text": "Make sure they get help before continuing",
          "outcome": "responsible",
          "xp": 25,
          "response": "You ensure they're cared for first. Kindness wins over rivalry. 💙"
        },
        {
          "text": "Keep playing — they were mean to you",
          "outcome": "self",
          "xp": 10,
          "response": "You play on. The hurt rival is left struggling. Even rivals deserve kindness when hurt. 💭"
        }
      ],
      "realWorldTip": "Showing kindness even to someone who's been unkind to you is one of the hardest, best things.",
      "reflectionPrompt": "Is it harder to be kind to someone who's been mean to you? Why is it worth it?"
    },
    {
      "id": "kq_085",
      "title": "The Shared Blame",
      "setting": "school",
      "characters": [
        "friend",
        "teacher"
      ],
      "ageRange": [
        5,
        10
      ],
      "difficulty": 3,
      "theme": "kindness",
      "growthDimensions": [
        "empathy",
        "responsibility"
      ],
      "culture": [
        "IN"
      ],
      "tags": [
        "kindness",
        "India",
        "school",
        "loyalty"
      ],
      "situation": "Your friend made a mistake that got the whole group in trouble. Everyone's annoyed at them and they feel awful. You could pile on too, or stand by them while still being honest about the mistake.",
      "choices": [
        {
          "text": "Support your friend while gently acknowledging the mistake",
          "outcome": "wise",
          "xp": 30,
          "response": "You stand by them kindly: \"It happens, let's fix it together.\" Your loyalty lifts them up. 🌟"
        },
        {
          "text": "Comfort them privately afterward",
          "outcome": "responsible",
          "xp": 25,
          "response": "You quietly reassure your friend they're not a bad person. Your kindness eases their guilt. 💙"
        },
        {
          "text": "Join everyone in blaming them",
          "outcome": "self",
          "xp": 10,
          "response": "You pile on too. Your friend feels completely alone with their mistake. Kindness was needed. 💭"
        }
      ],
      "realWorldTip": "Standing by a friend who made a mistake, while being honest, is loyal kindness.",
      "reflectionPrompt": "How does it feel to make a mistake and have everyone turn on you?"
    },
    {
      "id": "kq_086",
      "title": "The Pity Invite",
      "setting": "online",
      "characters": [
        "lonely classmate",
        "your friends"
      ],
      "ageRange": [
        5,
        10
      ],
      "difficulty": 3,
      "theme": "kindness",
      "growthDimensions": [
        "empathy",
        "fairness"
      ],
      "culture": [
        "global"
      ],
      "tags": [
        "kindness",
        "online",
        "inclusion",
        "dilemma"
      ],
      "situation": "Your friends are planning an online game night and don't want to include a classmate who's a bit annoying but very lonely. You feel torn — including them might make the night less fun, but excluding them feels unkind.",
      "choices": [
        {
          "text": "Include them and help them fit in better",
          "outcome": "wise",
          "xp": 30,
          "response": "You invite them and gently help them join in well. They have fun, and so does everyone. Inclusive! 🌟"
        },
        {
          "text": "Invite them to a smaller hangout another time",
          "outcome": "responsible",
          "xp": 25,
          "response": "You make sure they're included another way, so they're not left out. Thoughtful balance! 💙"
        },
        {
          "text": "Go along with excluding them",
          "outcome": "self",
          "xp": 10,
          "response": "You let them be excluded. They spend the night alone, knowing they were left out. A kinder path existed. 💭"
        }
      ],
      "realWorldTip": "Finding a way to include someone lonely, even if imperfect, is kinder than excluding them.",
      "reflectionPrompt": "How can you include someone who's lonely even if it's a little harder?"
    },
    {
      "id": "kq_087",
      "title": "The Talented Bully",
      "setting": "school",
      "characters": [
        "talented but mean classmate",
        "quieter kids"
      ],
      "ageRange": [
        6,
        11
      ],
      "difficulty": 3,
      "theme": "kindness",
      "growthDimensions": [
        "empathy",
        "responsibility"
      ],
      "culture": [
        "IN"
      ],
      "tags": [
        "kindness",
        "India",
        "school",
        "courage"
      ],
      "situation": "A talented, popular classmate is kind to you but mean to quieter kids. Being their friend has perks, but you've seen them hurt others. Standing up might cost you their friendship.",
      "choices": [
        {
          "text": "Kindly tell them how their behaviour affects others",
          "outcome": "wise",
          "xp": 30,
          "response": "You speak up about their meanness to others. It's risky, but real friends hear hard truths. 🌟"
        },
        {
          "text": "Befriend and support the quieter kids they hurt",
          "outcome": "responsible",
          "xp": 25,
          "response": "You quietly stand with the kids being hurt. Your kindness protects them. 💙"
        },
        {
          "text": "Stay friends and ignore their meanness",
          "outcome": "self",
          "xp": 10,
          "response": "You enjoy the perks but ignore their cruelty to others. Your silence lets it continue. 💭"
        }
      ],
      "realWorldTip": "True kindness sometimes means telling a friend a hard truth about how they treat others.",
      "reflectionPrompt": "Is it kind to stay silent when a friend is unkind to other people?"
    },
    {
      "id": "kq_088",
      "title": "The Grandparent's Repeated Story",
      "setting": "home",
      "characters": [
        "grandparent"
      ],
      "ageRange": [
        6,
        11
      ],
      "difficulty": 3,
      "theme": "kindness",
      "growthDimensions": [
        "empathy",
        "patience"
      ],
      "culture": [
        "US"
      ],
      "tags": [
        "kindness",
        "US",
        "family",
        "patience"
      ],
      "situation": "Your grandparent, who's getting older and forgetful, tells you the same story for the fifth time. You're a little bored, but they're so happy sharing it and don't realise they've repeated it.",
      "choices": [
        {
          "text": "Listen warmly as if hearing it fresh",
          "outcome": "wise",
          "xp": 30,
          "response": "You listen with genuine warmth. Your grandparent's joy in sharing is worth your patience. Loving kindness! 🌟"
        },
        {
          "text": "Gently engage and ask kind questions",
          "outcome": "responsible",
          "xp": 25,
          "response": "You ask warm questions, making them feel heard. Your patience honours them. 💙"
        },
        {
          "text": "Tell them they've said it before",
          "outcome": "blunt",
          "xp": 12,
          "response": "You point out the repetition. They feel embarrassed and deflated. A little patience would've been kinder. 💭"
        }
      ],
      "realWorldTip": "Patiently listening to an elder, even a repeated story, is a gentle act of love and respect.",
      "reflectionPrompt": "Why might patience with forgetful elders be an important kindness?"
    },
    {
      "id": "kq_089",
      "title": "The Unfair Group Grade",
      "setting": "school",
      "characters": [
        "lazy teammate",
        "hardworking teammates"
      ],
      "ageRange": [
        6,
        11
      ],
      "difficulty": 3,
      "theme": "kindness",
      "growthDimensions": [
        "empathy",
        "fairness"
      ],
      "culture": [
        "IN"
      ],
      "tags": [
        "kindness",
        "India",
        "school",
        "fairness"
      ],
      "situation": "A teammate did almost no work but will get the same group grade. They have a tough home situation right now. The others worked hard and find it unfair. You're caught between compassion and fairness.",
      "choices": [
        {
          "text": "Talk with the teammate kindly about contributing",
          "outcome": "wise",
          "xp": 30,
          "response": "You gently encourage them, understanding their situation but inviting them to help. Compassion AND fairness! 🌟"
        },
        {
          "text": "Quietly help them do a small part they can manage",
          "outcome": "responsible",
          "xp": 25,
          "response": "You help them contribute something real, balancing kindness with fairness. 💙"
        },
        {
          "text": "Stay silent to spare their feelings",
          "outcome": "self",
          "xp": 12,
          "response": "You protect their feelings, but the hardworking teammates feel it's unfair. A genuinely hard balance. 💭"
        }
      ],
      "realWorldTip": "Balancing compassion for someone's hard situation with fairness to others takes real wisdom.",
      "reflectionPrompt": "How do you balance being kind to someone struggling with being fair to everyone?"
    },
    {
      "id": "kq_090",
      "title": "The Found Money Dilemma",
      "setting": "park",
      "characters": [
        "friend",
        "wallet owner"
      ],
      "ageRange": [
        6,
        11
      ],
      "difficulty": 3,
      "theme": "kindness",
      "growthDimensions": [
        "fairness",
        "responsibility"
      ],
      "culture": [
        "global"
      ],
      "tags": [
        "kindness",
        "park",
        "honesty",
        "dilemma"
      ],
      "situation": "You and a friend find a wallet with cash. Your friend, whose family is struggling, says they really need the money and begs to keep it. You can see who it belongs to from the ID inside.",
      "choices": [
        {
          "text": "Return it, then find other ways to help your friend",
          "outcome": "wise",
          "xp": 30,
          "response": "You return the wallet AND think of honest ways to support your friend. Kind to both the owner and your friend! 🌟"
        },
        {
          "text": "Gently insist you both return it together",
          "outcome": "responsible",
          "xp": 25,
          "response": "You stand firm on honesty while staying kind to your struggling friend. 💙"
        },
        {
          "text": "Let your friend keep it — they need it",
          "outcome": "self",
          "xp": 10,
          "response": "You feel for your friend, but the money belongs to someone else. Kindness and honesty point the same way here. 💭"
        }
      ],
      "realWorldTip": "Being kind to a struggling friend doesn't mean keeping what belongs to someone else.",
      "reflectionPrompt": "How can you help a friend in need without doing something unfair to others?"
    },
    {
      "id": "kq_091",
      "title": "The Aging Pet",
      "setting": "home",
      "characters": [
        "old family pet",
        "younger sibling"
      ],
      "ageRange": [
        6,
        11
      ],
      "difficulty": 3,
      "theme": "kindness",
      "growthDimensions": [
        "empathy",
        "responsibility"
      ],
      "culture": [
        "IN"
      ],
      "tags": [
        "kindness",
        "India",
        "animals",
        "compassion"
      ],
      "situation": "Your old family dog is unwell and needs extra care, which is tiring. Your younger sibling doesn't understand and keeps wanting to play roughly with it. You could rest, or step up to care for the dog and guide your sibling.",
      "choices": [
        {
          "text": "Gently care for the dog and teach your sibling",
          "outcome": "wise",
          "xp": 30,
          "response": "You tend to the dog and gently show your sibling how to be gentle. Compassion for both! 🌟"
        },
        {
          "text": "Take on the dog's care patiently",
          "outcome": "responsible",
          "xp": 25,
          "response": "You patiently care for your old friend. Your kindness eases its final days. 💙"
        },
        {
          "text": "Let someone else deal with it",
          "outcome": "self",
          "xp": 10,
          "response": "You leave the care to others. The old dog and your confused sibling both need gentle guidance. 💭"
        }
      ],
      "realWorldTip": "Caring patiently for an aging pet, and guiding others to be gentle, is deep compassion.",
      "reflectionPrompt": "How can you show kindness to an animal that needs extra care?"
    },
    {
      "id": "kq_092",
      "title": "The Whistleblower's Kindness",
      "setting": "school",
      "characters": [
        "friend self-harming attention",
        "teacher"
      ],
      "ageRange": [
        8,
        12
      ],
      "difficulty": 3,
      "theme": "kindness",
      "growthDimensions": [
        "empathy",
        "responsibility"
      ],
      "culture": [
        "IN"
      ],
      "tags": [
        "kindness",
        "India",
        "school",
        "wellbeing"
      ],
      "situation": "A friend confides something worrying about how sad and hopeless they've been feeling, then makes you promise not to tell anyone. You're scared for them, but you don't want to break their trust.",
      "choices": [
        {
          "text": "Tell a trusted adult because you care about their safety",
          "outcome": "wise",
          "xp": 30,
          "response": "You get help despite the promise, because their safety matters most. The truest kindness. 🌟"
        },
        {
          "text": "Encourage your friend to talk to an adult with you",
          "outcome": "responsible",
          "xp": 30,
          "response": "You support them in reaching out for help together. Caring and brave! 🌟"
        },
        {
          "text": "Keep the secret as promised",
          "outcome": "self",
          "xp": 10,
          "response": "You keep quiet to honour the promise. But some worries are too big to carry alone — getting help is the kind thing. 💭"
        }
      ],
      "realWorldTip": "When a friend's wellbeing is at risk, getting them help is the most caring thing, even if it means breaking a promise.",
      "reflectionPrompt": "When is telling a trusted adult more important than keeping a secret?"
    },
    {
      "id": "kq_093",
      "title": "The Online Cruelty",
      "setting": "online",
      "characters": [
        "classmates",
        "targeted student"
      ],
      "ageRange": [
        8,
        12
      ],
      "difficulty": 3,
      "theme": "kindness",
      "growthDimensions": [
        "empathy",
        "responsibility"
      ],
      "culture": [
        "US"
      ],
      "tags": [
        "kindness",
        "US",
        "online",
        "courage"
      ],
      "situation": "In a group chat, classmates are piling onto one student with mean comments. Joining in would fit in with the group; staying silent feels safe but lets it continue. Speaking up risks them turning on you.",
      "choices": [
        {
          "text": "Speak up kindly and defend the targeted student",
          "outcome": "wise",
          "xp": 30,
          "response": "You write something kind and ask them to stop. It's brave, and it shifts the whole chat. 🌟"
        },
        {
          "text": "Privately support the targeted student",
          "outcome": "responsible",
          "xp": 25,
          "response": "You message the student that you've got their back. Your support means they're not alone. 💙"
        },
        {
          "text": "Stay silent to avoid becoming a target",
          "outcome": "self",
          "xp": 10,
          "response": "You stay quiet to be safe. The cruelty continues, and the student suffers alone. 💭"
        }
      ],
      "realWorldTip": "Defending someone being attacked online, even at personal risk, is courageous kindness.",
      "reflectionPrompt": "What makes it hard to speak up against a group? Why does it matter?"
    },
    {
      "id": "kq_094",
      "title": "The Stretched Family",
      "setting": "home",
      "characters": [
        "parents",
        "younger siblings"
      ],
      "ageRange": [
        8,
        12
      ],
      "difficulty": 3,
      "theme": "kindness",
      "growthDimensions": [
        "empathy",
        "responsibility"
      ],
      "culture": [
        "IN"
      ],
      "tags": [
        "kindness",
        "India",
        "family",
        "sacrifice"
      ],
      "situation": "Your family is going through a hard time financially. You've been saving for something you really want. You notice your parents stressed about money for your siblings' needs. Helping would mean giving up your goal.",
      "choices": [
        {
          "text": "Offer some savings to help your family",
          "outcome": "generous",
          "xp": 30,
          "response": "You offer your savings for your family's needs. Your sacrifice moves your parents deeply. Selfless love! 🌟"
        },
        {
          "text": "Offer to help in other ways without money",
          "outcome": "wise",
          "xp": 25,
          "response": "You find ways to ease the burden — helping at home, asking for less. Thoughtful kindness! 💙"
        },
        {
          "text": "Keep saving for your own goal",
          "outcome": "self",
          "xp": 12,
          "response": "You hold onto your savings. It's understandable, but your family is struggling. A genuinely hard choice. 💭"
        }
      ],
      "realWorldTip": "Sometimes the kindest thing is sharing what you have with family during hard times.",
      "reflectionPrompt": "How do you balance your own wants with your family's needs in tough times?"
    },
    {
      "id": "kq_095",
      "title": "The Reformed Bully",
      "setting": "school",
      "characters": [
        "former bully",
        "other students"
      ],
      "ageRange": [
        8,
        12
      ],
      "difficulty": 3,
      "theme": "kindness",
      "growthDimensions": [
        "empathy",
        "reasoning"
      ],
      "culture": [
        "global"
      ],
      "tags": [
        "kindness",
        "school",
        "forgiveness",
        "dilemma"
      ],
      "situation": "A student who used to bully you is genuinely trying to change and reaches out to be friends. Others warn you not to trust them. You're unsure whether to give them a chance or protect yourself.",
      "choices": [
        {
          "text": "Give them a cautious chance to show they've changed",
          "outcome": "wise",
          "xp": 30,
          "response": "You offer a careful chance while staying aware. People can grow, and you allow for it. Generous and wise! 🌟"
        },
        {
          "text": "Be polite but take time to rebuild trust",
          "outcome": "responsible",
          "xp": 25,
          "response": "You stay open but let trust rebuild slowly. A balanced, healthy kindness. 💙"
        },
        {
          "text": "Reject them completely",
          "outcome": "self",
          "xp": 12,
          "response": "You shut them out entirely. Protecting yourself is valid, but everyone can deserve a chance to grow. 💭"
        }
      ],
      "realWorldTip": "Giving someone a careful chance to show they've changed balances kindness with wisdom.",
      "reflectionPrompt": "Can people really change? How do you balance forgiveness with protecting yourself?"
    }
  ],

  /* ═══════════════════════════════════════════════════════════════
     STORY CHOICES — 25 scenarios (short branching episodes)
     Game: storychoices.html
  ═══════════════════════════════════════════════════════════════ */
  storyChoices: [

    {
      id: 'sc_001',
      title: 'The New Kid',
      setting: 'school',
      characters: ['new student', 'friends'],
      ageRange: [5, 10],
      difficulty: 1,
      theme: 'kindness',
      growthDimensions: ['empathy'],
      culture: ['global'],
      tags: ['new kid', 'inclusion', 'friendship'],
      storyText: "It\'s Monday morning. A new student called Mia stands at the classroom door looking terrified. Your friends are waving you over to sit with them. Mia has nowhere to go.",
      choices: [
        { text: 'Wave Mia over to your group', outcome: 'inclusive', xp: 30,
          storyOutcome: "Mia\'s face lights up. By Friday, she\'s laughing with your whole group. Your friends say \'Good call.\' You made a friend AND kept your friends. 🌟",
          nextHook: "Next week, Mia tells you she almost didn\'t come back to school on Tuesday." },
        { text: 'Go to your friends and hope someone else helps Mia', outcome: 'neutral', xp: 10,
          storyOutcome: "Mia finds a seat alone. She\'s quiet all week. You wonder sometimes if she\'s okay. 💭",
          nextHook: "Three weeks later, Mia becomes close friends with someone else entirely." },
        { text: 'Go to Mia yourself — your friends can wait', outcome: 'brave kind', xp: 35,
          storyOutcome: "You sit with Mia. Your friends join you within minutes — they were waiting to see what you\'d do. You\'re the one who set the tone. 🌟",
          nextHook: "Mia tells you this was her third new school in two years." }
      ],
      realWorldTip: 'Be the person who sets the kind tone in your group.',
      reflectionPrompt: 'What does leadership in kindness look like?'
    },

    {
      id: 'sc_002',
      title: 'The Lost Wallet',
      setting: 'park',
      characters: ['stranger'],
      ageRange: [7, 12],
      difficulty: 2,
      theme: 'honesty',
      growthDimensions: ['fairness', 'reasoning'],
      culture: ['global'],
      tags: ['honesty', 'money', 'found object'],
      storyText: "Walking home through the park, you spot a wallet on the bench. You open it — there\'s ₹500, some cards, and a photo of a family. No one is around.",
      choices: [
        { text: 'Take it to the nearest police station or security', outcome: 'honest', xp: 35,
          storyOutcome: "Three days later, a thank-you note arrives at your school. The owner was a teacher who needed that money for her student\'s field trip. 🌟",
          nextHook: "The teacher visits your class to say thank you in person." },
        { text: 'Leave it where it is — not my problem', outcome: 'neutral', xp: 5,
          storyOutcome: "Someone less honest takes it an hour later. The family in the photo never gets their wallet back. 💭",
          nextHook: "You think about it for days." },
        { text: 'Keep the money, hand in the rest', outcome: 'partial', xp: 10,
          storyOutcome: "You spend the ₹500. It feels strange. The cards and photo are useless without the money for whoever lost it. 💭",
          nextHook: "A poster appears in the park: \'Lost wallet. Reward offered.\'" }
      ],
      realWorldTip: 'If you find something that isn\'t yours, always try to return it.',
      reflectionPrompt: 'Does doing the right thing always come with a reward?'
    },

    {
      id: 'sc_003',
      title: 'The Team Captain',
      setting: 'sports',
      characters: ['teammates', 'coach'],
      ageRange: [8, 12],
      difficulty: 2,
      theme: 'fairness',
      growthDimensions: ['fairness', 'reasoning'],
      culture: ['global', 'IN'],
      tags: ['sports', 'leadership', 'fairness'],
      storyText: "You\'re chosen as team captain for the inter-school cricket tournament. You need to pick the playing 11. Your best friend is not as good as another student who trained harder but who nobody really likes.",
      choices: [
        { text: 'Pick the better player — the team\'s best chance matters', outcome: 'fair', xp: 30,
          storyOutcome: "The better player scores the winning runs. Your best friend understands eventually — you explain why. 🏏🌟",
          nextHook: "Your best friend asks to train harder before the next tournament." },
        { text: 'Pick your friend — loyalty matters', outcome: 'loyal', xp: 15,
          storyOutcome: "You lose the match by 5 runs. The team is quiet on the bus home. Your friend feels guilty. 💭",
          nextHook: "Your friend asks you to never do that again — \'Pick the better player next time.\'" },
        { text: 'Talk to the coach and let them decide', outcome: 'wise', xp: 25,
          storyOutcome: "The coach picks the better player. You didn\'t have to. But you learn: tough calls get easier when you get help. 🌟",
          nextHook: "The coach says you\'re one of the best captains they\'ve had." }
      ],
      realWorldTip: 'When leadership decisions are hard, talk to someone wiser.',
      reflectionPrompt: 'Is being a good leader the same as being a good friend?'
    },

    {
      id: 'sc_004',
      title: 'The Festival Fight',
      setting: 'festival',
      characters: ['sibling', 'parents'],
      ageRange: [6, 11],
      difficulty: 2,
      theme: 'self-regulation',
      growthDimensions: ['self-regulation', 'empathy'],
      culture: ['IN'],
      tags: ['festival', 'conflict', 'sibling', 'self-regulation'],
      storyText: "It\'s Diwali night. Your sibling accidentally knocks over YOUR diyas that you spent an hour setting up. They\'re devastated. You\'re furious. Your parents are watching.",
      choices: [
        { text: 'Take three deep breaths before saying anything', outcome: 'self-regulate', xp: 35,
          storyOutcome: "Three breaths later, you say \'It\'s okay, it was an accident.\' Your sibling helps you reset the diyas. The festival feels warm again. 🪔🌟",
          nextHook: "Your parent later says: \'That was the most grown-up thing I\'ve ever seen you do.\'" },
        { text: 'Shout at them — you worked so hard!', outcome: 'reactive', xp: 5,
          storyOutcome: "Your sibling cries. Your parents get involved. The rest of Diwali feels tense. You feel bad too. 💭",
          nextHook: "Later that night you both apologise to each other." },
        { text: 'Walk away to calm down before responding', outcome: 'wise', xp: 28,
          storyOutcome: "You come back five minutes later. \'Sorry I walked away. It was an accident. Let\'s fix it together.\' 🌸",
          nextHook: "Your sibling helps you make new diyas and they turn out even better." }
      ],
      realWorldTip: 'Next time you feel very angry, try 3 deep breaths before responding.',
      reflectionPrompt: 'Is controlling your reaction harder than the thing that made you angry?'
    },

    {
      id: 'sc_005',
      title: 'The Online Rumour',
      setting: 'online',
      characters: ['classmate', 'group chat'],
      ageRange: [9, 12],
      difficulty: 3,
      theme: 'honesty',
      growthDimensions: ['fairness', 'reasoning'],
      culture: ['global'],
      tags: ['online', 'rumour', 'courage', 'grey zone'],
      storyText: "A rumour about your classmate is spreading in the class group chat. You know it\'s completely false. The classmate hasn\'t seen it yet. 40 people are already reacting to it.",
      choices: [
        { text: 'Post publicly: \'This is not true. I know them.\'', outcome: 'brave honest', xp: 35,
          storyOutcome: "The rumour stops spreading. A few others agree with you. The classmate texts you: \'Thank you. I saw it. You\'re a real friend.\' 🌟",
          nextHook: "The person who started it apologises in the group chat." },
        { text: 'Tell the classmate privately before they see it', outcome: 'protective', xp: 30,
          storyOutcome: "They see your message first. They\'re upset but grateful you told them before they were blindsided. Together you decide what to do. 🤝",
          nextHook: "You both report the message to a teacher." },
        { text: 'Screenshot it and show a parent or teacher', outcome: 'responsible', xp: 25,
          storyOutcome: "An adult gets involved. The message is removed. The process takes a day, but it\'s handled properly. 🌟",
          nextHook: "The school has a class session on digital responsibility." }
      ],
      realWorldTip: 'Don\'t share anything online you\'re not 100% sure is true.',
      reflectionPrompt: 'What responsibility do you have when you know something is false?'
    },

    {
      id: 'sc_006',
      title: 'The Grandfather\'s Story',
      setting: 'home',
      characters: ['grandfather'],
      ageRange: [5, 10],
      difficulty: 1,
      theme: 'respect',
      growthDimensions: ['empathy', 'responsibility'],
      culture: ['IN', 'global'],
      tags: ['grandparent', 'listening', 'respect', 'family'],
      storyText: "Your grandfather wants to tell you a long story about his childhood. You\'ve heard parts of it before. Your friends are waiting outside to play.",
      choices: [
        { text: 'Stay and listen to the whole story', outcome: 'respectful', xp: 30,
          storyOutcome: "Halfway through, he says something you\'ve never heard before — a piece of your family history. You\'re glad you stayed. 🌟",
          nextHook: "That evening, you ask him to tell you another one." },
        { text: 'Ask if you can hear it after playing', outcome: 'negotiating', xp: 20,
          storyOutcome: "He smiles and says yes. You come back — he\'s asleep. The next morning you ask him to tell it. He\'s delighted you remembered. 💛",
          nextHook: "He starts writing down his stories in a notebook." },
        { text: 'Listen for a bit then sneak away', outcome: 'self', xp: 5,
          storyOutcome: "He notices. He doesn\'t say anything. But he doesn\'t offer to tell stories again for a while. 💭",
          nextHook: "You feel something was missed." }
      ],
      realWorldTip: 'Ask a grandparent or elder to tell you a story from their childhood this week.',
      reflectionPrompt: 'What stories from your family might be lost forever if not told now?'
    },

    {
      id: 'sc_007',
      title: 'The Sick Day Temptation',
      setting: 'home',
      characters: ['parent'],
      ageRange: [6, 11],
      difficulty: 2,
      theme: 'honesty',
      growthDimensions: ['fairness', 'reasoning'],
      culture: ['global'],
      tags: ['school', 'honesty', 'temptation'],
      storyText: "You\'re not sick. But today is a very hard test and you haven\'t studied enough. You COULD pretend to feel ill. Your parent would believe you.",
      choices: [
        { text: 'Go to school and take the test', outcome: 'honest', xp: 30,
          storyOutcome: "The test is hard. But you do better than you expected. More importantly, you feel clean. No lie to manage. 🌟",
          nextHook: "You ask your parent to help you study earlier next time." },
        { text: 'Fake being sick and stay home', outcome: 'dishonest', xp: 5,
          storyOutcome: "You spend the day lying in bed. The test gets rescheduled to tomorrow — same test. Now you have a lie AND a test. 💭",
          nextHook: "Your parent asks how the test went. You have to keep lying." },
        { text: 'Tell the truth and ask for help studying tonight', outcome: 'honest + wise', xp: 35,
          storyOutcome: "Your parent sits with you that evening and helps. You take the test. You\'re proud of how you handled it. 🌟💡",
          nextHook: "You and your parent make a study schedule together." }
      ],
      realWorldTip: 'If you\'re not prepared for something, tell a parent and make a plan.',
      reflectionPrompt: 'What\'s harder — facing a challenge or avoiding it?'
    },

    {
      id: 'sc_008',
      title: 'The Broken Friendship',
      setting: 'school',
      characters: ['former best friend'],
      ageRange: [7, 12],
      difficulty: 3,
      theme: 'empathy',
      growthDimensions: ['empathy', 'fairness'],
      culture: ['global'],
      tags: ['friendship', 'conflict', 'forgiveness', 'grey zone'],
      storyText: "You and your best friend had a huge fight 3 weeks ago. They said something really hurtful. You haven\'t spoken since. They just slipped a note under your desk: \'I\'m sorry. Can we talk?\'",
      choices: [
        { text: 'Write back: \'Yes. After class?\'', outcome: 'forgiving', xp: 30,
          storyOutcome: "After class you both say your parts. It\'s awkward for 5 minutes. Then it\'s okay. Not perfect, but beginning. 🌸",
          nextHook: "A month later, you both agree: this was the deepest your friendship has ever been." },
        { text: 'Ignore the note — the hurt was too big', outcome: 'self-protective', xp: 10,
          storyOutcome: "You don\'t respond. They stop trying. You miss them but can\'t make yourself move. 💭",
          nextHook: "At the end-of-year party, you make eye contact but neither speaks." },
        { text: 'Write back: \'I need more time.\'', outcome: 'honest', xp: 25,
          storyOutcome: "Honest and brave. Saying \'not yet\' is better than pretending. They write: \'Okay. I\'ll be here.\' 🌟",
          nextHook: "Two weeks later, you\'re ready." }
      ],
      realWorldTip: 'When a friendship is hurting, it\'s okay to take time — but don\'t wait so long you lose something beautiful.',
      reflectionPrompt: 'Is forgiving someone the same as saying what they did was okay?'
    },

    {
      id: 'sc_009',
      title: 'The Test of Courage',
      setting: 'school',
      characters: ['bully', 'classmate being bullied'],
      ageRange: [8, 12],
      difficulty: 3,
      theme: 'courage',
      growthDimensions: ['fairness', 'empathy'],
      culture: ['global'],
      tags: ['bullying', 'courage', 'upstander', 'grey zone'],
      storyText: "An older student is regularly making a younger classmate feel small — calling them names quietly so no adult hears. You see it happen every day. You\'re not physically bigger than the older student.",
      choices: [
        { text: 'Say \'Hey, stop\' directly to the older student', outcome: 'brave', xp: 30,
          storyOutcome: "They look surprised. They back off — for now. The classmate looks at you with eyes that say \'thank you.\' 🌟",
          nextHook: "The older student avoids you for a week, then eventually nods at you in the hallway." },
        { text: 'Stand next to the younger classmate every time you see it', outcome: 'solidarity', xp: 25,
          storyOutcome: "Your presence changes the dynamic. The bully prefers victims who are alone. The behaviour reduces. 🌟",
          nextHook: "The younger classmate starts waiting for you in the hallway." },
        { text: 'Report it to a teacher with specific details', outcome: 'responsible', xp: 30,
          storyOutcome: "With your details, the teacher can act. The behaviour is addressed in a serious conversation. 🌟",
          nextHook: "The teacher thanks you. They say it often takes just one person reporting for action to happen." }
      ],
      realWorldTip: 'You don\'t have to face bullying alone. Reporting to an adult is always brave.',
      reflectionPrompt: 'What makes someone an upstander rather than a bystander?'
    },

    {
      id: 'sc_010',
      title: 'The Prize Money',
      setting: 'school',
      characters: ['class fund', 'needy classmate'],
      ageRange: [9, 12],
      difficulty: 3,
      theme: 'fairness',
      growthDimensions: ['fairness', 'reasoning'],
      culture: ['IN'],
      tags: ['money', 'class fund', 'fairness', 'grey zone'],
      storyText: "Your class won ₹1000 in a school competition. The class is debating how to spend it. Some want a pizza party. Others want to donate it to a classmate\'s family who are struggling. You have one vote.",
      choices: [
        { text: 'Vote to donate to the classmate\'s family', outcome: 'generous', xp: 30,
          storyOutcome: "The donation wins by two votes. The classmate cries when they hear. The pizza party happens next term from new funds. 🌟",
          nextHook: "Your class is written up in the school newsletter." },
        { text: 'Vote for the pizza party — we all worked for it', outcome: 'fair', xp: 20,
          storyOutcome: "Pizza party wins. It\'s fun. But some students feel quieter about it than expected. 💭",
          nextHook: "Someone suggests a fundraiser for the struggling classmate separately." },
        { text: 'Propose splitting it — half and half', outcome: 'wise compromise', xp: 35,
          storyOutcome: "The class votes for the split. Both things happen. Everyone feels good. The struggling classmate gets ₹500 and the class gets pizza. 🌟💡",
          nextHook: "Your teacher says the compromise was the most mature thing the class has ever done." }
      ],
      realWorldTip: 'When your group wins something, think about who else might benefit.',
      reflectionPrompt: 'Should a group always do what the majority wants?'
    },

    {
      id: 'sc_011',
      title: 'The Science Partner',
      setting: 'school',
      characters: ['classmate with different abilities'],
      ageRange: [7, 11],
      difficulty: 2,
      theme: 'fairness',
      growthDimensions: ['fairness', 'empathy'],
      culture: ['global'],
      tags: ['disability', 'inclusion', 'school', 'partnership'],
      storyText: "The teacher assigns science partners by random draw. You get paired with a classmate who has a learning difficulty and works more slowly. You\'re worried about your grade.",
      choices: [
        { text: 'Ask the teacher to change partners — honestly', outcome: 'honest selfish', xp: 10,
          storyOutcome: "The teacher says no. You work together anyway. By the end, they have an idea that makes your project stand out. 💭🌟",
          nextHook: "You apologise for wanting to switch." },
        { text: 'Work with them — and figure out how to support both of you', outcome: 'inclusive', xp: 35,
          storyOutcome: "You learn to work differently. They teach you something unexpected. Your project is original and strong. 🌟",
          nextHook: "Your teacher says this was the best collaborative work in the class." },
        { text: 'Do most of the work yourself to protect the grade', outcome: 'controlling', xp: 10,
          storyOutcome: "You get a good grade. But your partner didn\'t really learn. And you\'re exhausted. 💭",
          nextHook: "Your teacher notes that your partner didn\'t seem engaged." }
      ],
      realWorldTip: 'Ask someone who learns differently from you how they see the world.',
      reflectionPrompt: 'What can you learn from someone who thinks differently from you?'
    },

    {
      id: 'sc_012',
      title: 'The Missing Phone',
      setting: 'school',
      characters: ['classmate', 'teacher'],
      ageRange: [9, 12],
      difficulty: 3,
      theme: 'honesty',
      growthDimensions: ['fairness', 'reasoning'],
      culture: ['global'],
      tags: ['phone', 'theft', 'honesty', 'grey zone'],
      storyText: "A classmate\'s phone goes missing during PE. You saw who took it — it was another classmate who\'s been going through a hard time at home. The teacher is asking everyone directly.",
      choices: [
        { text: 'Tell the teacher what you saw', outcome: 'honest', xp: 25,
          storyOutcome: "The teacher handles it with compassion — the classmate isn\'t punished harshly but has to return the phone. Both sides feel heard. 🌟",
          nextHook: "The classmate who took it finds you later and says \'I was having the worst week. Thanks for not making it worse.\'"},
        { text: 'Talk to the classmate who took it first', outcome: 'wise', xp: 35,
          storyOutcome: "They immediately return it. The teacher never needs to get involved. The classmate is relieved and trusts you for it. 🌟",
          nextHook: "You become their trusted friend during a hard time." },
        { text: 'Stay silent — you don\'t want to cause trouble', outcome: 'silent', xp: 5,
          storyOutcome: "The teacher can\'t resolve it. The classmate whose phone was taken is upset for days. 💭",
          nextHook: "The situation escalates to parents being called." }
      ],
      realWorldTip: 'When you know something important, speaking up is usually the right thing — how you do it matters.',
      reflectionPrompt: 'Can you be both honest and kind at the same time?'
    },

    {
      id: 'sc_013',
      title: 'The Dussehra Drama',
      setting: 'festival',
      characters: ['Ravana effigy crowd', 'stranger who falls'],
      ageRange: [6, 11],
      difficulty: 1,
      theme: 'kindness',
      growthDimensions: ['empathy'],
      culture: ['IN'],
      tags: ['dussehra', 'festival', 'crowd', 'kindness'],
      storyText: "At the Dussehra Ravana burning event, the crowd surges forward. In the excitement, an older person stumbles and falls near you. Everyone else is pushing forward to see the effigy burn.",
      choices: [
        { text: 'Stop and help them up', outcome: 'kind', xp: 30,
          storyOutcome: "You miss the effigy moment, but the elder takes your hand warmly. \'God bless you, child.\' You remember this more than the fireworks. 🌟🙏",
          nextHook: "Your parent saw. They squeeze your shoulder on the way home." },
        { text: 'Call out to people nearby: \'Someone fell! Help!\'', outcome: 'helpful', xp: 25,
          storyOutcome: "Three people stop and help. You didn\'t do it alone — you mobilised others. Smart and kind. 🌟",
          nextHook: "A stranger says, \'Good thinking, kid.\'" },
        { text: 'Keep watching — others will help', outcome: 'self', xp: 5,
          storyOutcome: "Others don\'t stop. The elder manages to get up alone. Everyone looked away. 💭",
          nextHook: "The effigy burns, but you feel a little hollow." }
      ],
      realWorldTip: 'In crowds, always watch out for people who might need help.',
      reflectionPrompt: 'Why does it feel harder to help someone when everyone else is watching something else?'
    },

    {
      id: 'sc_014',
      title: 'The Perfect Lie',
      setting: 'home',
      characters: ['parents'],
      ageRange: [8, 12],
      difficulty: 3,
      theme: 'honesty',
      growthDimensions: ['fairness', 'reasoning'],
      culture: ['global'],
      tags: ['lie', 'parent', 'grey zone', 'perfect crime'],
      storyText: "You went somewhere your parents said no to. Nothing bad happened. Nobody saw you. Your parents have no way of knowing. They ask: \'What did you do today?\'",
      choices: [
        { text: 'Tell the truth — even though nothing bad happened', outcome: 'honest', xp: 35,
          storyOutcome: "They\'re upset for a moment. Then your parent says \'I\'m glad you told me. That actually makes me trust you more.\' New conversation about WHY the rule existed. 🌟",
          nextHook: "A new, slightly relaxed version of the rule is agreed on together." },
        { text: 'Tell a version that\'s mostly true', outcome: 'partial', xp: 10,
          storyOutcome: "Mostly true sits uncomfortably. You change the story in small ways for months. It\'s exhausting. 💭",
          nextHook: "A small detail slips one day." },
        { text: 'Lie completely — nothing happened so no harm done', outcome: 'dishonest', xp: 3,
          storyOutcome: "Nothing bad happened today. But you\'ve started a pattern of lying that\'s much harder to stop than it was to start. 💭",
          nextHook: "Next time, lying feels easier. That\'s not a good sign." }
      ],
      realWorldTip: 'Tell the truth even when you could get away with not telling it.',
      reflectionPrompt: 'Is a lie only wrong if someone gets hurt?'
    },

    {
      id: 'sc_015',
      title: 'The Farewell Gift',
      setting: 'school',
      characters: ['beloved teacher who is leaving'],
      ageRange: [6, 11],
      difficulty: 1,
      theme: 'gratitude',
      growthDimensions: ['empathy'],
      culture: ['global'],
      tags: ['gratitude', 'farewell', 'teacher', 'gift'],
      storyText: "Your favourite teacher is leaving the school. The class wants to give them something. You have ₹200 pocket money saved. Some classmates want to pool money for a gift from a shop. Others want to make something by hand.",
      choices: [
        { text: 'Put your money toward a bought gift with everyone', outcome: 'group gift', xp: 20,
          storyOutcome: "You pool together and buy a beautiful plant. The teacher tears up. \'I\'ll grow this wherever I go.\' 🌿🌟",
          nextHook: "The teacher writes each student a short personal note before leaving." },
        { text: 'Make a handmade memory book from the class', outcome: 'creative', xp: 35,
          storyOutcome: "Each student adds a drawing and a message. The teacher holds it like it\'s gold. \'I\'ve received gifts before. Never something like this.\' 🌟",
          nextHook: "Years later, a former student sees the memory book on the teacher\'s desk at a new school." },
        { text: 'Write a personal letter from just you', outcome: 'personal', xp: 30,
          storyOutcome: "In the letter you write what you actually learned from them — specific things. They read it three times and hug you. 🌟💛",
          nextHook: "They carry the letter in their bag for two years." }
      ],
      realWorldTip: 'Write a letter to a teacher who changed you — even if they\'ve already left.',
      reflectionPrompt: 'What\'s the best gift you\'ve ever given or received?'
    },

    {
      id: 'sc_016',
      title: 'The Inheritance Argument',
      setting: 'home',
      characters: ['siblings', 'parents'],
      ageRange: [9, 12],
      difficulty: 3,
      theme: 'fairness',
      growthDimensions: ['fairness', 'reasoning'],
      culture: ['global', 'IN'],
      tags: ['family', 'fairness', 'sibling', 'grey zone'],
      storyText: "Your grandparent passes away and leaves a special item behind — a beautiful watch. Three grandchildren want it. You\'re one of them. Your parent asks each grandchild why they deserve it.",
      choices: [
        { text: 'Say why it matters to you — honestly', outcome: 'honest', xp: 25,
          storyOutcome: "Each grandchild shares their reason. One reason stands out as most connected to the grandparent\'s wish. A fair conversation leads to an agreement. 🌟",
          nextHook: "The cousins decide to share it — one month each." },
        { text: 'Say you don\'t need it — let the others have it', outcome: 'generous', xp: 30,
          storyOutcome: "Your generosity surprises everyone. You feel at peace. Years later, the cousin says it\'s the most meaningful thing they own. 🌟",
          nextHook: "They leave it to YOUR child one day." },
        { text: 'Suggest it goes to the grandparent\'s favourite charity', outcome: 'wise', xp: 35,
          storyOutcome: "Nobody expected that. After a pause, the family agrees. The watch is sold and the money goes to a cause the grandparent loved. 🌟",
          nextHook: "The family starts a small annual donation in their name." }
      ],
      realWorldTip: 'Ask about how your family makes decisions when things are hard to divide.',
      reflectionPrompt: 'When something can\'t be shared equally, how should it be decided?'
    },

    {
      id: 'sc_017',
      title: 'The Good Samaritan Bus',
      setting: 'school',
      characters: ['bus driver', 'passengers'],
      ageRange: [7, 12],
      difficulty: 2,
      theme: 'courage',
      growthDimensions: ['fairness', 'empathy'],
      culture: ['global', 'IN'],
      tags: ['public transport', 'courage', 'helping'],
      storyText: "On the school bus, a student is being rude to the bus driver — making fun of them in front of everyone. Everyone is laughing nervously. The driver looks upset.",
      choices: [
        { text: 'Say to the rude student: \'That\'s not funny. Stop.\'', outcome: 'brave', xp: 35,
          storyOutcome: "The laughter dies. The student backs down. The driver glances in the mirror at you. That glance says everything. 🌟",
          nextHook: "The driver starts greeting you by name every morning." },
        { text: 'Tell a teacher as soon as you get to school', outcome: 'responsible', xp: 25,
          storyOutcome: "The incident is reported. The student apologises to the driver the next day. Proper resolution. 🌟",
          nextHook: "Your school discusses respect for staff in the next assembly." },
        { text: 'Say nothing — it\'s not my problem', outcome: 'bystander', xp: 5,
          storyOutcome: "The laughing continues. The driver says nothing but their driving becomes tense. The bus is quiet. 💭",
          nextHook: "Tomorrow, the same student does it again — a little worse." }
      ],
      realWorldTip: 'Respect everyone who works to serve you — bus drivers, cleaners, cafeteria staff.',
      reflectionPrompt: 'Why does cruelty continue when bystanders stay silent?'
    },

    {
      id: 'sc_018',
      title: 'The Honest Report Card',
      setting: 'home',
      characters: ['parent'],
      ageRange: [7, 12],
      difficulty: 2,
      theme: 'honesty',
      growthDimensions: ['fairness', 'reasoning'],
      culture: ['IN', 'global'],
      tags: ['report card', 'parent', 'school', 'honesty'],
      storyText: "Your report card arrives. It\'s worse than last term. You know your parent will be very disappointed. You could wait for them to find it, or show them yourself.",
      choices: [
        { text: 'Show it immediately and explain what happened', outcome: 'proactive honest', xp: 35,
          storyOutcome: "Your parent is disappointed but listens. Together you make a plan. \'I\'m proud you showed me yourself\' they say. 🌟",
          nextHook: "You both create a homework routine. Next term is better." },
        { text: 'Hide it and hope for the best', outcome: 'hiding', xp: 3,
          storyOutcome: "The school emails the parents anyway. Now there\'s hiding AND the bad marks. 💭",
          nextHook: "Trust is harder to rebuild than marks." },
        { text: 'Give it to them but quickly explain before they react', outcome: 'honest', xp: 25,
          storyOutcome: "You give context before they spiral. It helps. They still talk it through — but calmly. 🌟",
          nextHook: "Your parent says: \'Next time, explain FIRST. That helped.\'" }
      ],
      realWorldTip: 'When you\'re worried about how a parent will react, try showing them and explaining first.',
      reflectionPrompt: 'Does your parents\' reaction determine whether you\'re honest with them?'
    },

    {
      id: 'sc_019',
      title: 'The Charity Run',
      setting: 'school',
      characters: ['classmates', 'charity'],
      ageRange: [7, 11],
      difficulty: 1,
      theme: 'responsibility',
      growthDimensions: ['responsibility', 'fairness'],
      culture: ['global'],
      tags: ['charity', 'school', 'volunteering', 'giving'],
      storyText: "Your school is organising a charity run. You can collect sponsorships. Your friend says \'Let\'s just get the minimum and go easy.\' You think you could raise a lot more if you tried.",
      choices: [
        { text: 'Aim high — collect as many sponsors as possible', outcome: 'ambitious kind', xp: 30,
          storyOutcome: "You raise 4x the minimum. The charity receives enough to buy 20 school kits for children in need. 🌟",
          nextHook: "The charity sends your school a photo of the children with the kits." },
        { text: 'Do the minimum — no extra effort', outcome: 'minimum', xp: 10,
          storyOutcome: "You finish quickly. But during the run, you learn the charity is for children your age who have nothing. \'Could have done more.\' 💭",
          nextHook: "Next year you sign up again and this time — you go all in." },
        { text: 'Motivate your friend to try harder too', outcome: 'leader', xp: 35,
          storyOutcome: "You convince your friend. Together you raise more than anyone in the class. 🌟",
          nextHook: "Your teacher asks if you\'d like to help organise next year\'s event." }
      ],
      realWorldTip: 'When you have a chance to help, go further than the minimum.',
      reflectionPrompt: 'When you can do more good, do you have a responsibility to?'
    },

    {
      id: 'sc_020',
      title: 'The Growing Argument',
      setting: 'home',
      characters: ['sibling'],
      ageRange: [6, 11],
      difficulty: 2,
      theme: 'self-regulation',
      growthDimensions: ['self-regulation', 'empathy'],
      culture: ['global'],
      tags: ['sibling', 'conflict', 'self-regulation', 'communication'],
      storyText: "You and your sibling have been bickering all day over small things. Now it\'s escalating into a real argument. You can feel yourself about to say something you\'ll regret.",
      choices: [
        { text: 'Stop and say \'I don\'t want to fight. Can we reset?\'', outcome: 'self-regulate', xp: 35,
          storyOutcome: "Your sibling is shocked — then nods. The argument dissolves. The rest of the day is peaceful. 🌟",
          nextHook: "Your sibling uses the same phrase with a friend the next week." },
        { text: 'Walk to another room until you both calm down', outcome: 'regulate + space', xp: 28,
          storyOutcome: "Space helps. You come back 10 minutes later, both softer. The issue is talked through quietly. 🌸",
          nextHook: "You both agree to use \'5-minute cool-downs\' as a sibling rule." },
        { text: 'Say the thing you\'ll regret', outcome: 'reactive', xp: 3,
          storyOutcome: "It lands hard. Your sibling goes quiet. You both feel terrible. The repair takes days. 💭",
          nextHook: "Later, you apologise and they say \'I forgive you. But that hurt.\'"}
      ],
      realWorldTip: 'Before saying something in anger, ask: \'Will I regret this in 10 minutes?\'',
      reflectionPrompt: 'What\'s the hardest thing to control when you\'re very angry?'
    },

    {
      id: 'sc_021',
      title: 'The Neighbourhood Garden',
      setting: 'park',
      characters: ['neighbourhood community'],
      ageRange: [7, 12],
      difficulty: 1,
      theme: 'responsibility',
      growthDimensions: ['responsibility'],
      culture: ['global', 'IN'],
      tags: ['community', 'environment', 'responsibility'],
      storyText: "The park near your home has a small garden patch that used to be beautiful but is now overgrown and littered. You walk past it every day. No one has volunteered to fix it.",
      choices: [
        { text: 'Start cleaning it yourself — bring a bag', outcome: 'proactive', xp: 30,
          storyOutcome: "On day 3, a neighbour joins you. Then two more. Within a week, the garden is back. It\'s yours now in the best way. 🌱🌟",
          nextHook: "The garden gets a little sign: \'Restored by the neighbourhood kids, 2025.\'" },
        { text: 'Tell a parent and ask them to report it to the municipality', outcome: 'responsible', xp: 20,
          storyOutcome: "The municipality responds in 2 weeks. The garden is cleaned. Slower, but sustainable. 🌟",
          nextHook: "You suggest forming a \'neighbourhood green team.\'"},
        { text: 'Wait for someone else to deal with it', outcome: 'passive', xp: 5,
          storyOutcome: "Everyone waits. Nothing happens. The garden gets worse. 💭",
          nextHook: "A year later it\'s a dumping ground." }
      ],
      realWorldTip: 'Choose one thing in your community to care for — a plant, a corner, a place.',
      reflectionPrompt: 'Who is responsible for shared spaces?'
    },

    {
      id: 'sc_022',
      title: 'The Inherited Kindness',
      setting: 'home',
      characters: ['parent', 'stranger'],
      ageRange: [5, 10],
      difficulty: 1,
      theme: 'kindness',
      growthDimensions: ['empathy'],
      culture: ['IN', 'global'],
      tags: ['role model', 'family', 'kindness', 'modelling'],
      storyText: "You\'re walking with your parent when they stop to buy food from a street vendor and give extra money \'because they work so hard.\' The vendor\'s face lights up.",
      choices: [
        { text: 'Ask your parent why they gave extra', outcome: 'curious', xp: 25,
          storyOutcome: "\'Because kindness costs so little and means so much,\' they say. You remember this phrase for years. 🌟",
          nextHook: "You start noticing vendors and workers differently." },
        { text: 'Use your own pocket money to buy something too', outcome: 'inspired kind', xp: 35,
          storyOutcome: "You buy something small. The vendor smiles twice. Your parent looks at you with pride. 🌟",
          nextHook: "This becomes your thing. You always buy from street vendors when you can." },
        { text: 'Just watch — you\'re not sure what to do', outcome: 'observer', xp: 10,
          storyOutcome: "You see it happen. Something shifts inside you. Not today, but soon — you\'ll do something similar. 💛",
          nextHook: "Three weeks later, you do exactly that." }
      ],
      realWorldTip: 'Pay attention to who in your life shows kindness quietly. Let them teach you.',
      reflectionPrompt: 'Who has taught you kindness by example, not words?'
    },

    {
      id: 'sc_023',
      title: 'The Power Cut Kindness',
      setting: 'home',
      characters: ['neighbour family'],
      ageRange: [5, 10],
      difficulty: 1,
      theme: 'kindness',
      growthDimensions: ['empathy'],
      culture: ['IN'],
      tags: ['power cut', 'community', 'sharing', 'kindness'],
      storyText: "A long power cut hits your neighbourhood on a hot day. Your home has a generator. Your neighbour\'s young children are crying from the heat.",
      choices: [
        { text: 'Invite them over to cool down with you', outcome: 'generous', xp: 30,
          storyOutcome: "Two families, one cool room, cold water, a board game. The power cut becomes an unexpected family memory. 🌟",
          nextHook: "The neighbours return the kindness in an unexpected way months later." },
        { text: 'Give them some cold water and ice', outcome: 'kind', xp: 25,
          storyOutcome: "Small relief on a hot day — big in the moment. The mother looks genuinely grateful. 🌸",
          nextHook: "She brings you homemade food as a thank you the next day." },
        { text: 'Keep to yourself — it\'s not your problem', outcome: 'self', xp: 5,
          storyOutcome: "You stay cool. They stay hot. Something small is missed between neighbours. 💭",
          nextHook: "Neighbourhoods get colder the more we all do this." }
      ],
      realWorldTip: 'Think of one way to help a neighbour this week.',
      reflectionPrompt: 'What makes a neighbourhood feel like a community?'
    },

    {
      id: 'sc_024',
      title: 'The Viral Video',
      setting: 'online',
      characters: ['classmate', 'whole school potentially'],
      ageRange: [9, 12],
      difficulty: 3,
      theme: 'responsibility',
      growthDimensions: ['fairness', 'reasoning'],
      culture: ['global'],
      tags: ['viral', 'online', 'responsibility', 'grey zone'],
      storyText: "A video of your classmate having a bad day (crying, stumbling) was taken secretly and sent to a group chat. People are laughing and forwarding it. You have it in your chat.",
      choices: [
        { text: 'Delete it and tell the person who sent it: \'Don\'t share this\'', outcome: 'responsible', xp: 30,
          storyOutcome: "You don\'t add to it. The chain breaks somewhere. The classmate never finds out how wide it got. 🌟",
          nextHook: "You later find out 3 others did the same thing as you. Together you stopped it." },
        { text: 'Report it to a teacher with screenshots', outcome: 'brave responsible', xp: 35,
          storyOutcome: "The teacher acts quickly. The video is traced back. The sender faces consequences. The classmate is protected. 🌟",
          nextHook: "Your school holds a digital responsibility week because of this." },
        { text: 'Watch it but don\'t forward — that\'s enough', outcome: 'partial', xp: 10,
          storyOutcome: "You didn\'t forward, but watching it still added a view. The classmate is still hurt when they hear about it. 💭",
          nextHook: "You wonder if \'not forwarding\' was enough." }
      ],
      realWorldTip: 'Never share a video or photo of someone without their permission — especially if it could hurt them.',
      reflectionPrompt: 'Does watching something harmful make you responsible for it?'
    },

    {
      id: 'sc_025',
      title: 'The Last Day Kindness',
      setting: 'school',
      characters: ['whole class', 'teacher'],
      ageRange: [6, 11],
      difficulty: 1,
      theme: 'gratitude',
      growthDimensions: ['empathy'],
      culture: ['global'],
      tags: ['gratitude', 'last day', 'school', 'kindness'],
      storyText: "It\'s the last day of school for the year. You have 30 minutes before home time. You could just hang out, or you could do something meaningful with the time.",
      choices: [
        { text: 'Go around and genuinely thank every classmate for something specific', outcome: 'grateful', xp: 35,
          storyOutcome: "30 genuine thank-yous. Some people cry. The teacher asks what you\'re doing. \'Finishing the year right\', you say. 🌟",
          nextHook: "Three classmates text you over the summer saying it was the best thing that happened all year." },
        { text: 'Write a note for your teacher — what they changed for you', outcome: 'thoughtful', xp: 30,
          storyOutcome: "The teacher reads it at their desk. They look up at you. No words. Just a nod that says everything. 🌟💛",
          nextHook: "The note stays on their desk all of next year." },
        { text: 'Just enjoy the free time with friends', outcome: 'relaxed', xp: 10,
          storyOutcome: "Good laughs. Good times. No regrets. A year closed normally. 🌸",
          nextHook: "Over summer, you think of things you wish you\'d said." }
      ],
      realWorldTip: 'Before this school year ends, thank one person who made it better.',
      reflectionPrompt: 'What do you want to say to people before a chapter closes?'
    },
    {
      "id": "sc_026",
      "title": "The Spilled Milk",
      "setting": "home",
      "characters": [
        "mother",
        "little sibling"
      ],
      "ageRange": [
        3,
        8
      ],
      "difficulty": 1,
      "theme": "honesty",
      "growthDimensions": [
        "responsibility"
      ],
      "culture": [
        "IN"
      ],
      "tags": [
        "honesty",
        "family",
        "India",
        "accidents"
      ],
      "storyText": "You knock over a glass of milk while reaching for biscuits. It spills everywhere. Your little sibling is nearby and might get blamed. Mummy calls out, asking what happened.",
      "choices": [
        {
          "text": "Tell Mummy it was you, by accident",
          "outcome": "honest",
          "xp": 30,
          "storyOutcome": "Mummy smiles and helps you clean up. \"Thank you for telling the truth,\" she says. Accidents happen — honesty makes them okay. 🌟",
          "nextHook": "Next time something spills, you remember how good telling the truth felt."
        },
        {
          "text": "Stay quiet and let her wonder",
          "outcome": "neutral",
          "xp": 10,
          "storyOutcome": "Mummy cleans it up, puzzled. Your little sibling gets a confused look. You feel a little funny inside. 💭",
          "nextHook": "Later you wish you'd just said it was you."
        },
        {
          "text": "Quietly clean it up yourself and tell her",
          "outcome": "responsible",
          "xp": 35,
          "storyOutcome": "You grab a cloth AND tell the truth. Mummy is so proud! \"What a responsible helper.\" 🌟",
          "nextHook": "Mummy starts trusting you with bigger jobs after this."
        }
      ],
      "realWorldTip": "When you make a mess by accident, telling the truth and helping clean up makes everything better.",
      "reflectionPrompt": "Why does it feel good to tell the truth even after a mistake?"
    },
    {
      "id": "sc_027",
      "title": "The Fallen Friend",
      "setting": "park",
      "characters": [
        "friend who fell"
      ],
      "ageRange": [
        3,
        8
      ],
      "difficulty": 1,
      "theme": "kindness",
      "growthDimensions": [
        "empathy"
      ],
      "culture": [
        "US"
      ],
      "tags": [
        "kindness",
        "park",
        "friends",
        "helping"
      ],
      "storyText": "You're racing your friend to the slide and you're winning! Suddenly your friend trips and falls, scraping their knee. They start to cry. The slide is right there.",
      "choices": [
        {
          "text": "Stop and help your friend up",
          "outcome": "brave kind",
          "xp": 35,
          "storyOutcome": "You forget the race and run back. Your friend stops crying because you're there. \"You're a good friend,\" they say. 🌟",
          "nextHook": "Your friend remembers this every time someone needs help."
        },
        {
          "text": "Win first, then check on them",
          "outcome": "neutral",
          "xp": 10,
          "storyOutcome": "You reach the slide first — but your friend is still on the ground. Winning doesn't feel as fun now. 💭",
          "nextHook": "You wonder if winning was worth it."
        },
        {
          "text": "Call a grown-up to help while you comfort them",
          "outcome": "helpful",
          "xp": 30,
          "storyOutcome": "You stay with your friend AND get help. Smart and kind! The grown-up fixes the scrape. 🌟",
          "nextHook": "Your friend's parent thanks you for being so caring."
        }
      ],
      "realWorldTip": "When a friend is hurt, helping them matters more than winning a game.",
      "reflectionPrompt": "What would you want a friend to do if you fell down and got hurt?"
    },
    {
      "id": "sc_028",
      "title": "The Shared Crayons",
      "setting": "home",
      "characters": [
        "cousin"
      ],
      "ageRange": [
        3,
        8
      ],
      "difficulty": 1,
      "theme": "sharing",
      "growthDimensions": [
        "empathy",
        "fairness"
      ],
      "culture": [
        "IN"
      ],
      "tags": [
        "sharing",
        "India",
        "family",
        "art"
      ],
      "storyText": "You're colouring a beautiful picture. Your cousin comes over with no crayons and watches sadly. You have a big box of bright colours all to yourself.",
      "choices": [
        {
          "text": "Share your crayons so you can colour together",
          "outcome": "inclusive",
          "xp": 30,
          "storyOutcome": "Your cousin's eyes light up! You both make pictures and laugh. Two artists are better than one. 🌟",
          "nextHook": "Your cousin gives you their picture as a thank-you gift."
        },
        {
          "text": "Keep colouring on your own",
          "outcome": "neutral",
          "xp": 10,
          "storyOutcome": "You finish your picture — but your cousin just watched the whole time, looking sad. 💭",
          "nextHook": "You realise later they really wanted to join in."
        },
        {
          "text": "Give them your favourite colour to start",
          "outcome": "kind",
          "xp": 25,
          "storyOutcome": "You hand over your best colour first! Your cousin grins and starts drawing happily. 🌟",
          "nextHook": "Sharing your favourite made the moment extra special."
        }
      ],
      "realWorldTip": "Sharing your things turns one happy person into two happy people.",
      "reflectionPrompt": "How does it feel when someone shares something special with you?"
    },
    {
      "id": "sc_029",
      "title": "The Broken Toy",
      "setting": "home",
      "characters": [
        "younger sibling"
      ],
      "ageRange": [
        3,
        8
      ],
      "difficulty": 1,
      "theme": "honesty",
      "growthDimensions": [
        "responsibility"
      ],
      "culture": [
        "global"
      ],
      "tags": [
        "honesty",
        "family",
        "toys",
        "accidents"
      ],
      "storyText": "You were playing rough with your sibling's favourite toy and it broke. Your sibling is in another room. You could hide it under the couch and no one would know.",
      "choices": [
        {
          "text": "Tell your sibling what happened and say sorry",
          "outcome": "honest",
          "xp": 35,
          "storyOutcome": "Your sibling is sad but says \"Thank you for telling me.\" You help fix it together with tape. Honesty kept your trust. 🌟",
          "nextHook": "Your sibling trusts you with their toys again because you were honest."
        },
        {
          "text": "Hide it under the couch",
          "outcome": "neutral",
          "xp": 8,
          "storyOutcome": "No one sees the broken toy — yet. But you feel worried every time your sibling looks for it. 💭",
          "nextHook": "A few days later your sibling finds it and feels confused and hurt."
        },
        {
          "text": "Offer to share your own toy to make up for it",
          "outcome": "kind",
          "xp": 30,
          "storyOutcome": "You admit it AND share your toy. Your sibling forgives you quickly. Making things right feels good! 🌟",
          "nextHook": "Your sibling learns that mistakes can be fixed with honesty and kindness."
        }
      ],
      "realWorldTip": "When you break something, telling the truth and trying to fix it is always better than hiding it.",
      "reflectionPrompt": "Why is hiding a mistake harder than telling the truth?"
    },
    {
      "id": "sc_030",
      "title": "The Diya Flame",
      "setting": "festival",
      "characters": [
        "younger cousin",
        "grandmother"
      ],
      "ageRange": [
        3,
        8
      ],
      "difficulty": 1,
      "theme": "festival",
      "growthDimensions": [
        "empathy",
        "responsibility"
      ],
      "culture": [
        "IN"
      ],
      "tags": [
        "festival",
        "Diwali",
        "India",
        "helping"
      ],
      "storyText": "During Diwali, your little cousin is too scared to light a diya. The other kids are laughing because they did it easily. Your cousin looks like they might cry.",
      "choices": [
        {
          "text": "Help your cousin light it gently, step by step",
          "outcome": "kind",
          "xp": 35,
          "storyOutcome": "You guide their hand softly. The diya glows! Your cousin beams with pride. You made them feel brave. 🌟",
          "nextHook": "Your cousin lights diyas confidently every Diwali after this."
        },
        {
          "text": "Light it for them quickly so the laughing stops",
          "outcome": "helpful",
          "xp": 25,
          "storyOutcome": "You light it fast. The laughing stops, but your cousin didn't get to try. Still, you protected them. 😊",
          "nextHook": "Next year, you remember to let them try with help."
        },
        {
          "text": "Laugh along with the other kids",
          "outcome": "self",
          "xp": 8,
          "storyOutcome": "You laugh too — but your cousin's eyes fill with tears. They run to grandmother. You feel bad. 💭",
          "nextHook": "Your cousin stays close to grandmother for the rest of the evening."
        }
      ],
      "realWorldTip": "Helping someone who's scared, instead of laughing, makes you a true friend.",
      "reflectionPrompt": "How does it feel when people laugh at you for being scared?"
    },
    {
      "id": "sc_031",
      "title": "The Lonely Lunch",
      "setting": "school",
      "characters": [
        "classmate eating alone"
      ],
      "ageRange": [
        3,
        8
      ],
      "difficulty": 1,
      "theme": "kindness",
      "growthDimensions": [
        "empathy"
      ],
      "culture": [
        "US"
      ],
      "tags": [
        "kindness",
        "school",
        "US",
        "inclusion"
      ],
      "storyText": "At lunch, you see a classmate sitting all alone at the end of the table. Everyone else is in groups, laughing. The lonely classmate is staring at their food.",
      "choices": [
        {
          "text": "Go sit with them and start a chat",
          "outcome": "inclusive",
          "xp": 35,
          "storyOutcome": "You sit down and ask about their favourite game. They light up! By the end of lunch, you're both laughing. 🌟",
          "nextHook": "They save you a seat every day after this."
        },
        {
          "text": "Wave at them from your table",
          "outcome": "kind",
          "xp": 20,
          "storyOutcome": "You wave and they smile a little. It's something — but they still eat alone. 😊",
          "nextHook": "You think maybe next time you'll actually go over."
        },
        {
          "text": "Stay with your own friends",
          "outcome": "neutral",
          "xp": 10,
          "storyOutcome": "You have fun with your friends — but the classmate eats alone the whole time. 💭",
          "nextHook": "You notice they sit alone again the next day too."
        }
      ],
      "realWorldTip": "Sitting with someone who's alone can completely change their whole day.",
      "reflectionPrompt": "Have you ever felt alone somewhere? What would have helped?"
    },
    {
      "id": "sc_032",
      "title": "The Last Sweet",
      "setting": "home",
      "characters": [
        "guest child"
      ],
      "ageRange": [
        3,
        8
      ],
      "difficulty": 1,
      "theme": "sharing",
      "growthDimensions": [
        "empathy",
        "fairness"
      ],
      "culture": [
        "IN"
      ],
      "tags": [
        "sharing",
        "India",
        "food",
        "guests"
      ],
      "storyText": "A friend is visiting your home. There's one last gulab jamun on the plate. You both love them. Your friend is your guest and looks at it hopefully.",
      "choices": [
        {
          "text": "Offer it to your guest",
          "outcome": "generous",
          "xp": 30,
          "storyOutcome": "\"You have it,\" you say. Your friend smiles big. Being a kind host feels wonderful. 🌟",
          "nextHook": "Your friend always remembers how kind you were as a host."
        },
        {
          "text": "Suggest splitting it in half",
          "outcome": "fair",
          "xp": 25,
          "storyOutcome": "You cut it in two. You both get a sweet bite and a happy smile. 😊",
          "nextHook": "Sharing made the visit even more fun."
        },
        {
          "text": "Eat it quickly yourself",
          "outcome": "self",
          "xp": 8,
          "storyOutcome": "You eat it fast — but your friend looks disappointed. The visit feels a little awkward after. 💭",
          "nextHook": "You wish you'd offered it to your guest."
        }
      ],
      "realWorldTip": "When someone visits your home, offering them the treat first is a warm way to welcome them.",
      "reflectionPrompt": "How do you like to be treated when you visit someone's home?"
    },
    {
      "id": "sc_033",
      "title": "The Stuck Kitten",
      "setting": "park",
      "characters": [
        "scared kitten",
        "park visitors"
      ],
      "ageRange": [
        3,
        8
      ],
      "difficulty": 1,
      "theme": "kindness",
      "growthDimensions": [
        "empathy",
        "responsibility"
      ],
      "culture": [
        "global"
      ],
      "tags": [
        "kindness",
        "animals",
        "park",
        "helping"
      ],
      "storyText": "At the park, you see a tiny kitten stuck under a bench, too scared to come out. It's meowing softly. Other kids are walking past without noticing.",
      "choices": [
        {
          "text": "Gently talk to it and find a grown-up to help",
          "outcome": "responsible",
          "xp": 35,
          "storyOutcome": "You speak softly so it isn't scared, and get a grown-up. Together you free the kitten safely. 🌟",
          "nextHook": "The kitten's owner thanks you for being so careful and kind."
        },
        {
          "text": "Try to grab it quickly yourself",
          "outcome": "reactive",
          "xp": 15,
          "storyOutcome": "You reach for it fast — but the scared kitten darts away further. Good heart, but gentler is better. 💭",
          "nextHook": "You learn that scared animals need calm, not quick grabs."
        },
        {
          "text": "Walk past like the others",
          "outcome": "neutral",
          "xp": 8,
          "storyOutcome": "You keep walking. The kitten stays stuck and scared. You wonder later if it got out okay. 💭",
          "nextHook": "You hope someone kinder came along after you."
        }
      ],
      "realWorldTip": "Helping a scared animal means staying calm and getting a grown-up — never grabbing quickly.",
      "reflectionPrompt": "Why do scared animals need us to be gentle and slow?"
    },
    {
      "id": "sc_034",
      "title": "The Dropped Tiffin",
      "setting": "school",
      "characters": [
        "classmate"
      ],
      "ageRange": [
        3,
        8
      ],
      "difficulty": 1,
      "theme": "kindness",
      "growthDimensions": [
        "empathy"
      ],
      "culture": [
        "IN"
      ],
      "tags": [
        "kindness",
        "India",
        "school",
        "food"
      ],
      "storyText": "A classmate trips and drops their tiffin. Their whole lunch spills on the floor. They look like they're about to cry, and other kids are giggling.",
      "choices": [
        {
          "text": "Share your lunch with them",
          "outcome": "generous",
          "xp": 35,
          "storyOutcome": "You slide half your tiffin over. \"We can share!\" Their tears turn into a smile. The giggling stops. 🌟",
          "nextHook": "Your classmate shares with someone else the next week, passing on your kindness."
        },
        {
          "text": "Help them clean up the mess",
          "outcome": "helpful",
          "xp": 30,
          "storyOutcome": "You grab tissues and help clean. They're so grateful someone helped instead of laughing. 🌟",
          "nextHook": "They become one of your closest friends."
        },
        {
          "text": "Giggle with the other kids",
          "outcome": "self",
          "xp": 8,
          "storyOutcome": "You laugh too — but then you see their tears, and it doesn't feel funny anymore. 💭",
          "nextHook": "You wish you'd helped instead of laughed."
        }
      ],
      "realWorldTip": "When someone has an accident, kindness helps far more than laughter.",
      "reflectionPrompt": "How would you feel if you dropped your lunch and everyone laughed?"
    },
    {
      "id": "sc_035",
      "title": "The Bedtime Helper",
      "setting": "home",
      "characters": [
        "tired parent",
        "baby sibling"
      ],
      "ageRange": [
        3,
        8
      ],
      "difficulty": 1,
      "theme": "family",
      "growthDimensions": [
        "responsibility",
        "empathy"
      ],
      "culture": [
        "US"
      ],
      "tags": [
        "family",
        "helping",
        "US",
        "responsibility"
      ],
      "storyText": "Your parent looks exhausted, trying to get your baby sibling to sleep. Your toys are scattered everywhere and need tidying. No one asked you to help yet.",
      "choices": [
        {
          "text": "Quietly tidy your toys without being asked",
          "outcome": "responsible",
          "xp": 35,
          "storyOutcome": "Your parent turns around to a clean room and gives you the biggest hug. \"You're amazing,\" they whisper. 🌟",
          "nextHook": "Your parent starts trusting you with more grown-up jobs."
        },
        {
          "text": "Offer to sing softly to the baby",
          "outcome": "kind",
          "xp": 30,
          "storyOutcome": "You sing a gentle song and the baby calms down. Your parent mouths \"thank you.\" Teamwork! 🌟",
          "nextHook": "You become the baby's favourite bedtime helper."
        },
        {
          "text": "Keep playing — someone else will tidy",
          "outcome": "self",
          "xp": 8,
          "storyOutcome": "You keep playing. Your tired parent has to tidy too. They sigh quietly. 💭",
          "nextHook": "You notice your parent looking even more tired afterward."
        }
      ],
      "realWorldTip": "Helping out without being asked, especially when someone's tired, is a wonderful surprise.",
      "reflectionPrompt": "Who in your home gets tired? How could you help them?"
    },
    {
      "id": "sc_036",
      "title": "The Smaller Kid's Ball",
      "setting": "park",
      "characters": [
        "younger child"
      ],
      "ageRange": [
        3,
        8
      ],
      "difficulty": 1,
      "theme": "kindness",
      "growthDimensions": [
        "empathy"
      ],
      "culture": [
        "IN"
      ],
      "tags": [
        "kindness",
        "India",
        "park",
        "helping"
      ],
      "storyText": "A much younger child's ball rolls toward you and stops at your feet. The little one is too small to run fast and is toddling over slowly, reaching out.",
      "choices": [
        {
          "text": "Gently roll the ball back to them",
          "outcome": "kind",
          "xp": 30,
          "storyOutcome": "You roll it softly right to their hands. They giggle with delight! Such a happy little face. 🌟",
          "nextHook": "The little one's parent smiles warmly at you."
        },
        {
          "text": "Wait for them to come get it",
          "outcome": "neutral",
          "xp": 12,
          "storyOutcome": "You wait. The little one finally reaches it, but it took a while and they looked tired. 💭",
          "nextHook": "You think next time you'll just help."
        },
        {
          "text": "Kick it back hard for fun",
          "outcome": "reactive",
          "xp": 8,
          "storyOutcome": "You kick it far away! The little one has to toddle even further, and looks upset. 💭",
          "nextHook": "You realise that wasn't very kind to someone so small."
        }
      ],
      "realWorldTip": "Being gentle and helpful with younger kids shows what a kind big kid you are.",
      "reflectionPrompt": "How should we treat children who are smaller than us?"
    },
    {
      "id": "sc_037",
      "title": "The Sick Day Card",
      "setting": "home",
      "characters": [
        "sick friend"
      ],
      "ageRange": [
        3,
        8
      ],
      "difficulty": 1,
      "theme": "kindness",
      "growthDimensions": [
        "empathy"
      ],
      "culture": [
        "global"
      ],
      "tags": [
        "kindness",
        "friends",
        "caring",
        "illness"
      ],
      "storyText": "Your best friend is sick at home and missing school. You're playing happily, but you remember how sad it is to be sick and stuck inside alone.",
      "choices": [
        {
          "text": "Make them a get-well card",
          "outcome": "kind",
          "xp": 35,
          "storyOutcome": "You draw a colourful card. When your friend gets it, they feel so much better knowing you thought of them. 🌟",
          "nextHook": "Your friend keeps your card on their shelf for months."
        },
        {
          "text": "Ask a parent to send a kind message",
          "outcome": "helpful",
          "xp": 25,
          "storyOutcome": "Your parent sends a sweet message. Your friend smiles, knowing you care. 😊",
          "nextHook": "Your friend can't wait to come back and see you."
        },
        {
          "text": "Wait to see them when they're back",
          "outcome": "neutral",
          "xp": 12,
          "storyOutcome": "You'll see them later — but they spent the day feeling forgotten and lonely. 💭",
          "nextHook": "Your friend mentions they felt a bit alone while sick."
        }
      ],
      "realWorldTip": "A small kind gesture, like a card, can cheer up someone who's sick and lonely.",
      "reflectionPrompt": "What makes you feel better when you're sick at home?"
    },
    {
      "id": "sc_038",
      "title": "The Test Paper Mix-Up",
      "setting": "school",
      "characters": [
        "teacher",
        "classmate"
      ],
      "ageRange": [
        5,
        10
      ],
      "difficulty": 1,
      "theme": "honesty",
      "growthDimensions": [
        "responsibility",
        "fairness"
      ],
      "culture": [
        "IN"
      ],
      "tags": [
        "honesty",
        "India",
        "school",
        "exams"
      ],
      "storyText": "The teacher hands back tests. You got extra marks by mistake — the teacher added wrong and gave you 5 points you didn't earn. No one would ever know if you stayed quiet.",
      "choices": [
        {
          "text": "Tell the teacher about the mistake",
          "outcome": "honest",
          "xp": 35,
          "storyOutcome": "The teacher fixes it and says, \"Your honesty matters more than 5 marks.\" You feel proud and light. 🌟",
          "nextHook": "The teacher starts trusting your word completely."
        },
        {
          "text": "Stay quiet — it's the teacher's mistake",
          "outcome": "neutral",
          "xp": 10,
          "storyOutcome": "You keep the extra marks. But every time you see your score, it doesn't quite feel like yours. 💭",
          "nextHook": "The marks never feel as good as honestly earned ones."
        },
        {
          "text": "Tell the teacher and point out a friend's error too",
          "outcome": "honest + wise",
          "xp": 30,
          "storyOutcome": "You're honest about yours and notice a friend's marks were added wrong too. Fair for everyone! 🌟",
          "nextHook": "Your class gets fairer scores because you spoke up."
        }
      ],
      "realWorldTip": "Honesty means telling the truth even when keeping quiet would benefit you.",
      "reflectionPrompt": "Would extra marks feel good if you knew you didn't earn them?"
    },
    {
      "id": "sc_039",
      "title": "The Group Game Vote",
      "setting": "school",
      "characters": [
        "classmates",
        "quiet kid"
      ],
      "ageRange": [
        5,
        10
      ],
      "difficulty": 1,
      "theme": "fairness",
      "growthDimensions": [
        "fairness",
        "empathy"
      ],
      "culture": [
        "US"
      ],
      "tags": [
        "fairness",
        "US",
        "school",
        "inclusion"
      ],
      "storyText": "Your class is voting on which game to play. Most kids want soccer, but one quiet classmate can't run because of a leg brace. They'd be left out of soccer completely.",
      "choices": [
        {
          "text": "Suggest a game everyone can play",
          "outcome": "fair",
          "xp": 35,
          "storyOutcome": "You propose a fun game the whole class can join. The quiet classmate beams — finally included! 🌟",
          "nextHook": "That classmate becomes much more confident in class."
        },
        {
          "text": "Vote for soccer but offer them a special role",
          "outcome": "partial",
          "xp": 25,
          "storyOutcome": "You make them the referee. It's something — but they still wish they could really play. 😊",
          "nextHook": "You think about how to include them even better next time."
        },
        {
          "text": "Vote for soccer like everyone else",
          "outcome": "neutral",
          "xp": 10,
          "storyOutcome": "Soccer wins. The classmate sits on the side the whole time, watching. 💭",
          "nextHook": "You notice them sitting out games often after that."
        }
      ],
      "realWorldTip": "Fair choices make sure everyone can join in, not just most people.",
      "reflectionPrompt": "How can you make sure no one gets left out of group activities?"
    },
    {
      "id": "sc_040",
      "title": "The Homework or Cricket",
      "setting": "home",
      "characters": [
        "friends",
        "parent"
      ],
      "ageRange": [
        5,
        10
      ],
      "difficulty": 1,
      "theme": "responsibility",
      "growthDimensions": [
        "responsibility",
        "self-regulation"
      ],
      "culture": [
        "IN"
      ],
      "tags": [
        "responsibility",
        "India",
        "school",
        "choices"
      ],
      "storyText": "Your friends are calling you for cricket outside. But you have homework due tomorrow that you haven't started. Your parent trusts you to decide on your own.",
      "choices": [
        {
          "text": "Finish homework first, then play",
          "outcome": "wise",
          "xp": 35,
          "storyOutcome": "You do your work, then join the game with a clear mind. You play happily AND sleep peacefully. 🌟",
          "nextHook": "Your parent gives you more freedom because you choose responsibly."
        },
        {
          "text": "Play now, do homework later",
          "outcome": "reactive",
          "xp": 15,
          "storyOutcome": "Cricket is fun — but later you're tired and rush the homework. It's messy and you feel stressed. 💭",
          "nextHook": "You promise yourself to do work first next time."
        },
        {
          "text": "Play for 30 minutes, then do homework",
          "outcome": "wise compromise",
          "xp": 30,
          "storyOutcome": "You set a timer for a short game, then study. A smart balance of fun and responsibility! 🌟",
          "nextHook": "You learn that balance makes both more enjoyable."
        }
      ],
      "realWorldTip": "Doing your responsibilities first means you can enjoy fun things without worry.",
      "reflectionPrompt": "How does it feel to play when you know work is still waiting?"
    },
    {
      "id": "sc_041",
      "title": "The Group Chat Joke",
      "setting": "online",
      "characters": [
        "online friends",
        "classmate"
      ],
      "ageRange": [
        5,
        10
      ],
      "difficulty": 1,
      "theme": "online",
      "growthDimensions": [
        "empathy",
        "responsibility"
      ],
      "culture": [
        "global"
      ],
      "tags": [
        "online",
        "kindness",
        "digital",
        "friendship"
      ],
      "storyText": "In your class group chat, someone starts making fun of a classmate's drawing. Others are adding laughing emojis. The classmate is in the chat and can see everything.",
      "choices": [
        {
          "text": "Type something kind about the drawing",
          "outcome": "brave kind",
          "xp": 35,
          "storyOutcome": "You write, \"I think it's really creative!\" The mean comments stop. The classmate sends you a private thank-you. 🌟",
          "nextHook": "Your kind words change the whole mood of the chat."
        },
        {
          "text": "Privately message the classmate to cheer them up",
          "outcome": "kind",
          "xp": 30,
          "storyOutcome": "You send a private \"Don't listen to them, your art is cool.\" They feel less alone. 😊",
          "nextHook": "The classmate trusts you as a real friend now."
        },
        {
          "text": "Stay out of it",
          "outcome": "neutral",
          "xp": 10,
          "storyOutcome": "You don't join in — but you don't help either. The classmate feels hurt and alone in the chat. 💭",
          "nextHook": "You wish you'd said something kind."
        }
      ],
      "realWorldTip": "Standing up for someone online, with kind words, takes courage and means a lot.",
      "reflectionPrompt": "How do mean words online feel different from kind ones?"
    },
    {
      "id": "sc_042",
      "title": "The Rangoli Helper",
      "setting": "festival",
      "characters": [
        "neighbour aunty",
        "other kids"
      ],
      "ageRange": [
        5,
        10
      ],
      "difficulty": 1,
      "theme": "festival",
      "growthDimensions": [
        "empathy",
        "responsibility"
      ],
      "culture": [
        "IN"
      ],
      "tags": [
        "festival",
        "India",
        "helping",
        "community"
      ],
      "storyText": "An elderly neighbour is struggling to bend down and finish her Diwali rangoli before guests arrive. The other kids are busy with firecrackers. She looks worried about time.",
      "choices": [
        {
          "text": "Offer to help finish her rangoli",
          "outcome": "kind",
          "xp": 35,
          "storyOutcome": "You kneel and help fill in the colours. Together you finish a beautiful rangoli just in time! She blesses you warmly. 🌟",
          "nextHook": "Aunty tells your parents what a helpful child you are."
        },
        {
          "text": "Call other kids to help too",
          "outcome": "helpful",
          "xp": 30,
          "storyOutcome": "You gather friends and the rangoli gets done fast with lots of laughter. Teamwork! 🌟",
          "nextHook": "The whole street admires the rangoli you all made."
        },
        {
          "text": "Keep playing with firecrackers",
          "outcome": "self",
          "xp": 8,
          "storyOutcome": "You keep playing. Aunty rushes and her rangoli stays half-done when guests arrive. 💭",
          "nextHook": "You feel a little bad seeing her disappointed face."
        }
      ],
      "realWorldTip": "Helping elders with festival preparations is a beautiful way to show respect and care.",
      "reflectionPrompt": "How can you help older people in your community during busy times?"
    },
    {
      "id": "sc_043",
      "title": "The Found Money",
      "setting": "school",
      "characters": [
        "classmate",
        "teacher"
      ],
      "ageRange": [
        5,
        10
      ],
      "difficulty": 1,
      "theme": "honesty",
      "growthDimensions": [
        "responsibility",
        "fairness"
      ],
      "culture": [
        "US"
      ],
      "tags": [
        "honesty",
        "US",
        "school",
        "money"
      ],
      "storyText": "You find $5 on the classroom floor. No one is looking. You could keep it and buy that snack you've wanted. But someone in your class probably lost it.",
      "choices": [
        {
          "text": "Give it to the teacher to find the owner",
          "outcome": "honest",
          "xp": 35,
          "storyOutcome": "The teacher finds the owner — a classmate who'd been worried sick. Their relief makes you feel great. 🌟",
          "nextHook": "The classmate becomes a good friend, grateful for your honesty."
        },
        {
          "text": "Ask around quietly to find who lost it",
          "outcome": "responsible",
          "xp": 30,
          "storyOutcome": "You ask a few people and find the owner yourself. They're so thankful! Honest detective work. 🌟",
          "nextHook": "Your classmates know you're someone they can trust."
        },
        {
          "text": "Keep it — finders keepers",
          "outcome": "self",
          "xp": 8,
          "storyOutcome": "You buy the snack — but it doesn't taste as good knowing someone lost their money. 💭",
          "nextHook": "You see a classmate searching sadly for their lost money."
        }
      ],
      "realWorldTip": "Returning something that isn't yours, even money, is always the honest choice.",
      "reflectionPrompt": "How would you feel if you lost money and someone returned it?"
    },
    {
      "id": "sc_044",
      "title": "The Younger Sibling's Mistake",
      "setting": "home",
      "characters": [
        "younger sibling",
        "parent"
      ],
      "ageRange": [
        5,
        10
      ],
      "difficulty": 1,
      "theme": "family",
      "growthDimensions": [
        "responsibility",
        "empathy"
      ],
      "culture": [
        "IN"
      ],
      "tags": [
        "family",
        "India",
        "honesty",
        "loyalty"
      ],
      "storyText": "Your younger sibling accidentally spilled paint on the carpet and is terrified of getting scolded. Your parent walks in and asks who made the mess. Your sibling looks at you, frightened.",
      "choices": [
        {
          "text": "Help your sibling explain it was an accident",
          "outcome": "wise",
          "xp": 35,
          "storyOutcome": "You gently say, \"It was an accident, we can clean it.\" Your parent stays calm and you all clean together. 🌟",
          "nextHook": "Your sibling trusts you completely and feels safe coming to you."
        },
        {
          "text": "Stay quiet and let your sibling face it alone",
          "outcome": "neutral",
          "xp": 12,
          "storyOutcome": "Your sibling stammers nervously. They feel alone and scared. You could have supported them. 💭",
          "nextHook": "Your sibling seems hesitant to trust you afterward."
        },
        {
          "text": "Quickly say you'll help clean it up",
          "outcome": "helpful",
          "xp": 30,
          "storyOutcome": "You jump in to help clean. Your parent appreciates your teamwork and stays calm. 🌟",
          "nextHook": "Your sibling looks up to you even more."
        }
      ],
      "realWorldTip": "Supporting a younger sibling through a mistake, instead of leaving them alone, builds deep trust.",
      "reflectionPrompt": "How does it feel to face a mistake alone versus with someone beside you?"
    },
    {
      "id": "sc_045",
      "title": "The Shared Victory",
      "setting": "park",
      "characters": [
        "friends",
        "slower runner"
      ],
      "ageRange": [
        5,
        10
      ],
      "difficulty": 1,
      "theme": "kindness",
      "growthDimensions": [
        "empathy",
        "fairness"
      ],
      "culture": [
        "global"
      ],
      "tags": [
        "kindness",
        "sports",
        "fairness",
        "teamwork"
      ],
      "storyText": "You're about to win a relay race for your team. The last runner on the other team trips badly and their team is devastated. You could celebrate big — or notice their disappointment.",
      "choices": [
        {
          "text": "Win, then go check the fallen runner is okay",
          "outcome": "kind",
          "xp": 35,
          "storyOutcome": "You win, then jog over to help them up. \"You ran great,\" you say. Both teams cheer your sportsmanship. 🌟",
          "nextHook": "You become known as the kind of competitor everyone respects."
        },
        {
          "text": "Celebrate your win with your team",
          "outcome": "neutral",
          "xp": 15,
          "storyOutcome": "You celebrate hard — but the other runner sits hurt and ignored. The win feels a bit empty. 💭",
          "nextHook": "You notice the fallen runner looking sad and alone."
        },
        {
          "text": "Help them up first, then celebrate",
          "outcome": "brave kind",
          "xp": 35,
          "storyOutcome": "You stop to help before celebrating. Your team waits, then cheers louder than ever — for your heart. 🌟",
          "nextHook": "Both teams remember your kindness more than the score."
        }
      ],
      "realWorldTip": "True winners care about everyone on the field, not just their own victory.",
      "reflectionPrompt": "How can you be a good sport whether you win or lose?"
    },
    {
      "id": "sc_046",
      "title": "The Class Monitor Power",
      "setting": "school",
      "characters": [
        "classmates",
        "friend who broke a rule"
      ],
      "ageRange": [
        8,
        12
      ],
      "difficulty": 1,
      "theme": "fairness",
      "growthDimensions": [
        "fairness",
        "responsibility"
      ],
      "culture": [
        "IN"
      ],
      "tags": [
        "fairness",
        "India",
        "school",
        "leadership"
      ],
      "storyText": "You're made class monitor. Your job is to note names of kids who talk during the teacher's absence. Your best friend talks the whole time, then begs you not to write their name.",
      "choices": [
        {
          "text": "Write their name fairly, like everyone else's",
          "outcome": "fair",
          "xp": 35,
          "storyOutcome": "You're fair to everyone, including your friend. They're upset at first but later respect you for it. 🌟",
          "nextHook": "Your classmates trust you as a fair leader, and your friendship survives."
        },
        {
          "text": "Leave your friend's name off",
          "outcome": "loyal",
          "xp": 12,
          "storyOutcome": "You protect your friend — but other kids notice the unfairness and stop trusting you as monitor. 💭",
          "nextHook": "Kids start to think the rules don't apply to your friends."
        },
        {
          "text": "Warn everyone first, then note repeat talkers",
          "outcome": "wise",
          "xp": 30,
          "storyOutcome": "You give a fair warning to all, then note only those who keep talking. Fair AND kind! 🌟",
          "nextHook": "Your class respects your fair, clear leadership."
        }
      ],
      "realWorldTip": "A fair leader treats everyone the same, even friends. That's what earns real respect.",
      "reflectionPrompt": "Why is it hard to be fair to friends? Why does it matter?"
    },
    {
      "id": "sc_047",
      "title": "The Bench Decision",
      "setting": "sports",
      "characters": [
        "teammate",
        "coach"
      ],
      "ageRange": [
        8,
        12
      ],
      "difficulty": 1,
      "theme": "fairness",
      "growthDimensions": [
        "empathy",
        "fairness"
      ],
      "culture": [
        "US"
      ],
      "tags": [
        "fairness",
        "US",
        "sports",
        "teamwork"
      ],
      "storyText": "You're team captain. A teammate who practised hard all season finally gets a chance to play in the big game. But they're nervous and might cost you the win. The coach asks your opinion.",
      "choices": [
        {
          "text": "Support giving them their chance to play",
          "outcome": "brave kind",
          "xp": 35,
          "storyOutcome": "You back your teammate. They play with heart, and win or lose, they'll never forget you believed in them. 🌟",
          "nextHook": "Your teammate becomes one of your most loyal friends."
        },
        {
          "text": "Suggest they play a low-pressure position",
          "outcome": "wise",
          "xp": 30,
          "storyOutcome": "You help them play where they can succeed. They contribute AND feel included. Smart leadership! 🌟",
          "nextHook": "Their confidence grows game by game."
        },
        {
          "text": "Recommend keeping the strongest players in",
          "outcome": "self",
          "xp": 12,
          "storyOutcome": "You aim to win — but your teammate sits the bench again after a season of effort. They look crushed. 💭",
          "nextHook": "Your teammate's enthusiasm fades after being left out."
        }
      ],
      "realWorldTip": "Good leaders give people a fair chance, even when it's a little risky.",
      "reflectionPrompt": "How would you feel practising all season but never getting to play?"
    },
    {
      "id": "sc_048",
      "title": "The Forwarded Rumour",
      "setting": "online",
      "characters": [
        "classmates",
        "rumour subject"
      ],
      "ageRange": [
        8,
        12
      ],
      "difficulty": 1,
      "theme": "online",
      "growthDimensions": [
        "responsibility",
        "reasoning"
      ],
      "culture": [
        "IN"
      ],
      "tags": [
        "online",
        "India",
        "digital",
        "honesty"
      ],
      "storyText": "A message spreads in your class group claiming a classmate did something embarrassing. You don't know if it's true. Everyone's forwarding it. Someone asks you to forward it too.",
      "choices": [
        {
          "text": "Refuse and ask if anyone actually knows it's true",
          "outcome": "wise",
          "xp": 35,
          "storyOutcome": "You ask, \"Does anyone actually know this is real?\" The forwarding stops. You protected someone from a lie. 🌟",
          "nextHook": "The rumour turns out to be false — you prevented real harm."
        },
        {
          "text": "Don't forward it, but stay silent",
          "outcome": "neutral",
          "xp": 20,
          "storyOutcome": "You don't spread it — but you don't stop it either. The rumour keeps going to others. 💭",
          "nextHook": "You wish you'd spoken up to stop it."
        },
        {
          "text": "Forward it — everyone else is",
          "outcome": "reactive",
          "xp": 8,
          "storyOutcome": "You forward it. Later you learn it wasn't true, and the classmate was really hurt. 💭",
          "nextHook": "You feel terrible for helping spread something false."
        }
      ],
      "realWorldTip": "Before sharing something about someone, ask: is it true, and is it kind? If not, don't spread it.",
      "reflectionPrompt": "How can a rumour hurt someone, even if the people sharing it don't mean harm?"
    },
    {
      "id": "sc_049",
      "title": "The Lab Partner Choice",
      "setting": "school",
      "characters": [
        "struggling classmate",
        "smart friend"
      ],
      "ageRange": [
        8,
        12
      ],
      "difficulty": 1,
      "theme": "school",
      "growthDimensions": [
        "empathy",
        "fairness"
      ],
      "culture": [
        "global"
      ],
      "tags": [
        "school",
        "teamwork",
        "choices",
        "kindness"
      ],
      "storyText": "You get to choose a science project partner. Your smart friend wants to team up — easy A. But a classmate who struggles and is often left out quietly hopes you'll pick them.",
      "choices": [
        {
          "text": "Pick the classmate who's often left out",
          "outcome": "brave kind",
          "xp": 35,
          "storyOutcome": "You choose the overlooked classmate. They work hard, surprise everyone, and gain real confidence. 🌟",
          "nextHook": "That classmate finds their love of science because you believed in them."
        },
        {
          "text": "Pick your smart friend for the easy A",
          "outcome": "self",
          "xp": 12,
          "storyOutcome": "You get a good grade easily — but the lonely classmate is left out again, watching. 💭",
          "nextHook": "You notice them getting picked last, again and again."
        },
        {
          "text": "Suggest a group of three to include both",
          "outcome": "wise",
          "xp": 30,
          "storyOutcome": "You bring everyone together! All three of you learn and the overlooked classmate finally belongs. 🌟",
          "nextHook": "Your group becomes an unlikely but happy team."
        }
      ],
      "realWorldTip": "Including someone who's usually left out can change how they see themselves.",
      "reflectionPrompt": "When has someone included you and made you feel like you belonged?"
    },
    {
      "id": "sc_050",
      "title": "The Grandparent's Story",
      "setting": "home",
      "characters": [
        "grandfather",
        "phone"
      ],
      "ageRange": [
        8,
        12
      ],
      "difficulty": 1,
      "theme": "family",
      "growthDimensions": [
        "empathy",
        "responsibility"
      ],
      "culture": [
        "IN"
      ],
      "tags": [
        "family",
        "India",
        "respect",
        "attention"
      ],
      "storyText": "Your grandfather wants to tell you a story about his childhood. You've heard it before and your phone is buzzing with messages from friends. His eyes are hopeful.",
      "choices": [
        {
          "text": "Put the phone away and listen fully",
          "outcome": "kind",
          "xp": 35,
          "storyOutcome": "You set the phone aside and listen. His face glows with joy at your attention. The story feels new this time. 🌟",
          "nextHook": "These moments become memories you treasure after he's gone."
        },
        {
          "text": "Listen while glancing at your phone",
          "outcome": "partial",
          "xp": 15,
          "storyOutcome": "You half-listen. Grandfather notices your divided attention and slowly stops, looking a little sad. 💭",
          "nextHook": "You realise later how much those stories meant."
        },
        {
          "text": "Ask to hear it later, after replying to friends",
          "outcome": "self",
          "xp": 12,
          "storyOutcome": "You choose your phone first. Grandfather nods quietly and the moment passes. 💭",
          "nextHook": "You wish you'd listened when he wanted to share."
        }
      ],
      "realWorldTip": "Giving elders your full attention is a gift of respect they deeply treasure.",
      "reflectionPrompt": "Why might an older person's stories matter more than they seem?"
    },
    {
      "id": "sc_051",
      "title": "The Cheating Friend",
      "setting": "school",
      "characters": [
        "friend",
        "teacher"
      ],
      "ageRange": [
        8,
        12
      ],
      "difficulty": 1,
      "theme": "honesty",
      "growthDimensions": [
        "responsibility",
        "fairness"
      ],
      "culture": [
        "US"
      ],
      "tags": [
        "honesty",
        "US",
        "school",
        "friendship"
      ],
      "storyText": "During a test, you notice your good friend copying answers from a hidden sheet. After class, they admit it and say, \"Don't tell anyone, okay?\" Other kids studied hard for this test.",
      "choices": [
        {
          "text": "Encourage your friend to tell the teacher",
          "outcome": "wise",
          "xp": 35,
          "storyOutcome": "You say, \"You should tell the teacher — I'll come with you.\" It's hard, but you help them do right. 🌟",
          "nextHook": "Your friend thanks you later for not letting them make it worse."
        },
        {
          "text": "Tell your friend you won't cover for them",
          "outcome": "honest",
          "xp": 30,
          "storyOutcome": "You say you can't lie for them. They're upset, but you stayed true to what's fair. 💙",
          "nextHook": "Your friend respects your honesty, even if it stings at first."
        },
        {
          "text": "Keep their secret",
          "outcome": "loyal",
          "xp": 12,
          "storyOutcome": "You stay quiet — but the kids who studied hard got lower marks than your friend who cheated. 💭",
          "nextHook": "The unfairness sits uneasily with you for a long time."
        }
      ],
      "realWorldTip": "Helping a friend make a wrong thing right is truer friendship than keeping a harmful secret.",
      "reflectionPrompt": "Is keeping a secret always the loyal thing to do? When isn't it?"
    },
    {
      "id": "sc_052",
      "title": "The Injured Stray",
      "setting": "park",
      "characters": [
        "stray dog",
        "passersby",
        "parent"
      ],
      "ageRange": [
        8,
        12
      ],
      "difficulty": 1,
      "theme": "kindness",
      "growthDimensions": [
        "empathy",
        "responsibility"
      ],
      "culture": [
        "IN"
      ],
      "tags": [
        "kindness",
        "India",
        "animals",
        "responsibility"
      ],
      "storyText": "You spot a stray dog limping with an injured paw near the park. People are walking past. You know you shouldn't touch a strange animal, but it's clearly in pain.",
      "choices": [
        {
          "text": "Tell a parent and call an animal helpline",
          "outcome": "responsible",
          "xp": 35,
          "storyOutcome": "You get adult help and call for rescue. The dog gets treated safely. You helped the right way! 🌟",
          "nextHook": "You learn how to help animals safely and responsibly."
        },
        {
          "text": "Leave food and water nearby gently",
          "outcome": "kind",
          "xp": 30,
          "storyOutcome": "You carefully place food and water within reach. The dog eats gratefully while you find more help. 🌟",
          "nextHook": "Your small act keeps the dog going until rescue arrives."
        },
        {
          "text": "Try to pick it up and carry it home",
          "outcome": "reactive",
          "xp": 12,
          "storyOutcome": "You mean well, but the scared, hurt dog snaps in fear. Hurt animals need careful, adult help. 💭",
          "nextHook": "You learn that good intentions need safe methods too."
        }
      ],
      "realWorldTip": "Helping an injured animal means getting adult help — never handling a hurt, scared animal alone.",
      "reflectionPrompt": "Why is it important to get help instead of handling a hurt animal yourself?"
    },
    {
      "id": "sc_053",
      "title": "The Popular Crowd",
      "setting": "school",
      "characters": [
        "popular kids",
        "excluded classmate"
      ],
      "ageRange": [
        8,
        12
      ],
      "difficulty": 1,
      "theme": "school",
      "growthDimensions": [
        "empathy",
        "responsibility"
      ],
      "culture": [
        "global"
      ],
      "tags": [
        "school",
        "inclusion",
        "courage",
        "friendship"
      ],
      "storyText": "The popular kids invite you to join their group — but only if you stop hanging out with your longtime friend, who they think is 'uncool.' Your friend has always been there for you.",
      "choices": [
        {
          "text": "Stay loyal to your true friend",
          "outcome": "brave",
          "xp": 35,
          "storyOutcome": "You choose your real friend over popularity. Your friendship grows stronger, built on loyalty. 🌟",
          "nextHook": "Years later, this friend is still by your side — the popular crowd long forgotten."
        },
        {
          "text": "Try to include your friend in the group too",
          "outcome": "wise",
          "xp": 30,
          "storyOutcome": "You tell the popular kids your friend comes too, or you don't. Brave! Some respect you for it. 🌟",
          "nextHook": "You learn who's worth being friends with by how they treat others."
        },
        {
          "text": "Join the group and drift from your friend",
          "outcome": "self",
          "xp": 10,
          "storyOutcome": "You gain popularity — but lose someone who truly cared. The new group feels hollow. 💭",
          "nextHook": "You realise too late what real friendship was worth."
        }
      ],
      "realWorldTip": "Real friends are worth more than being popular. Loyalty is a treasure.",
      "reflectionPrompt": "What makes someone a true friend versus just a popular one?"
    },
    {
      "id": "sc_054",
      "title": "The Tournament and the Friend",
      "setting": "school",
      "characters": [
        "best friend",
        "team"
      ],
      "ageRange": [
        4,
        9
      ],
      "difficulty": 2,
      "theme": "friendship",
      "growthDimensions": [
        "empathy",
        "fairness"
      ],
      "culture": [
        "IN"
      ],
      "tags": [
        "friendship",
        "India",
        "sports",
        "loyalty"
      ],
      "storyText": "You made the school cricket team. Your best friend didn't, and they're trying to be happy for you but you can tell they're hurt. They've stopped talking as much.",
      "choices": [
        {
          "text": "Talk to them about how they're really feeling",
          "outcome": "wise",
          "xp": 35,
          "storyOutcome": "You gently ask how they feel. They open up, you listen, and your friendship gets even stronger. 🌟",
          "nextHook": "Your friend tries out again next season — with your encouragement."
        },
        {
          "text": "Practise with them so they improve",
          "outcome": "kind",
          "xp": 30,
          "storyOutcome": "You spend afternoons helping them practise. They get better AND feel supported by you. 🌟",
          "nextHook": "Your friend makes the team the following year."
        },
        {
          "text": "Give them space and focus on your team",
          "outcome": "neutral",
          "xp": 12,
          "storyOutcome": "You focus on cricket. Your friend drifts away, feeling left behind and forgotten. 💭",
          "nextHook": "Your friendship slowly fades over the season."
        }
      ],
      "realWorldTip": "When you succeed and a friend doesn't, checking on their feelings keeps the friendship strong.",
      "reflectionPrompt": "How would you feel if your friend made a team and you didn't?"
    },
    {
      "id": "sc_055",
      "title": "The Sibling's Spotlight",
      "setting": "home",
      "characters": [
        "younger sibling",
        "parents"
      ],
      "ageRange": [
        4,
        9
      ],
      "difficulty": 2,
      "theme": "family",
      "growthDimensions": [
        "empathy",
        "self-regulation"
      ],
      "culture": [
        "US"
      ],
      "tags": [
        "family",
        "US",
        "jealousy",
        "kindness"
      ],
      "storyText": "Your younger sibling won an award and everyone is celebrating them. You feel a little jealous and left out. Your sibling looks over at you, hoping you're proud of them.",
      "choices": [
        {
          "text": "Genuinely congratulate your sibling",
          "outcome": "kind",
          "xp": 35,
          "storyOutcome": "You give them a big hug and say you're proud. Their face glows. Your jealousy fades into warmth. 🌟",
          "nextHook": "Your sibling cheers loudest for you when your turn comes."
        },
        {
          "text": "Manage your feelings and join the celebration",
          "outcome": "self-regulate",
          "xp": 30,
          "storyOutcome": "You take a breath, set aside the jealousy, and join in. Being happy for them feels better than sulking. 🌟",
          "nextHook": "You learn that celebrating others doesn't take anything from you."
        },
        {
          "text": "Sulk quietly in the corner",
          "outcome": "reactive",
          "xp": 10,
          "storyOutcome": "You stay quiet and grumpy. Your sibling's happy day is dimmed by your mood. 💭",
          "nextHook": "You feel bad later for not sharing their joy."
        }
      ],
      "realWorldTip": "Being genuinely happy for someone, even when you feel jealous, is a sign of real maturity.",
      "reflectionPrompt": "What can you do with jealous feelings so they don't hurt others?"
    },
    {
      "id": "sc_056",
      "title": "The Eid Gift Money",
      "setting": "festival",
      "characters": [
        "cousin",
        "family"
      ],
      "ageRange": [
        4,
        9
      ],
      "difficulty": 2,
      "theme": "festival",
      "growthDimensions": [
        "empathy",
        "fairness"
      ],
      "culture": [
        "IN"
      ],
      "tags": [
        "festival",
        "India",
        "generosity",
        "Eid"
      ],
      "storyText": "You received generous Eidi (gift money) from relatives. Your younger cousin received much less and looks disappointed counting their small amount. You have plenty.",
      "choices": [
        {
          "text": "Share some of your Eidi with your cousin",
          "outcome": "generous",
          "xp": 35,
          "storyOutcome": "You quietly slip them some of yours. Their face lights up with joy! Sharing the festival spirit. 🌟",
          "nextHook": "Your cousin remembers your kindness every Eid."
        },
        {
          "text": "Suggest pooling money to buy something together",
          "outcome": "wise",
          "xp": 30,
          "storyOutcome": "You propose combining to buy a shared treat. Now you both enjoy something fun! 🌟",
          "nextHook": "You two start a tradition of sharing each Eid."
        },
        {
          "text": "Keep all yours — you earned the relatives' love",
          "outcome": "self",
          "xp": 10,
          "storyOutcome": "You keep it all. Your cousin stays disappointed, watching you with your bigger pile. 💭",
          "nextHook": "The festival feels a little less joyful for your cousin."
        }
      ],
      "realWorldTip": "Sharing good fortune during festivals multiplies the joy for everyone.",
      "reflectionPrompt": "How does sharing during celebrations change how they feel?"
    },
    {
      "id": "sc_057",
      "title": "The Substitute Teacher",
      "setting": "school",
      "characters": [
        "substitute teacher",
        "classmates"
      ],
      "ageRange": [
        4,
        9
      ],
      "difficulty": 2,
      "theme": "respect",
      "growthDimensions": [
        "responsibility",
        "empathy"
      ],
      "culture": [
        "global"
      ],
      "tags": [
        "respect",
        "school",
        "behaviour",
        "kindness"
      ],
      "storyText": "A nervous substitute teacher is struggling to manage the class. Some kids are being noisy and making it worse. The substitute looks overwhelmed and close to tears.",
      "choices": [
        {
          "text": "Help by being calm and encouraging others to settle",
          "outcome": "responsible",
          "xp": 35,
          "storyOutcome": "You quiet down and gently help others focus. The substitute relaxes, grateful for your kindness. 🌟",
          "nextHook": "The substitute thanks you personally and tells your teacher how helpful you were."
        },
        {
          "text": "Ignore the noise and do your own work",
          "outcome": "neutral",
          "xp": 15,
          "storyOutcome": "You stay focused — but the chaos continues and the substitute struggles all period. 💭",
          "nextHook": "You wish you'd helped calm things down."
        },
        {
          "text": "Join in the noise — it's a fun break",
          "outcome": "reactive",
          "xp": 8,
          "storyOutcome": "You add to the chaos. The substitute leaves looking defeated. That wasn't kind. 💭",
          "nextHook": "You feel bad seeing how stressed they were."
        }
      ],
      "realWorldTip": "Being kind to someone who's new and struggling, like a substitute, shows real character.",
      "reflectionPrompt": "How would you feel trying to lead a group that wouldn't listen?"
    },
    {
      "id": "sc_058",
      "title": "The Helper's Child",
      "setting": "home",
      "characters": [
        "house helper's child",
        "parents"
      ],
      "ageRange": [
        4,
        9
      ],
      "difficulty": 2,
      "theme": "kindness",
      "growthDimensions": [
        "empathy",
        "fairness"
      ],
      "culture": [
        "IN"
      ],
      "tags": [
        "kindness",
        "India",
        "class",
        "inclusion"
      ],
      "storyText": "The house helper brings her child to work sometimes. The child watches you play with your toys, standing shyly by the door, never asking to join.",
      "choices": [
        {
          "text": "Invite the child to play with you",
          "outcome": "inclusive",
          "xp": 35,
          "storyOutcome": "You wave them over and share your toys. Soon you're both laughing. A new friend! 🌟",
          "nextHook": "You two become genuine friends, and your kindness teaches everyone something."
        },
        {
          "text": "Give them one toy to play with separately",
          "outcome": "partial",
          "xp": 20,
          "storyOutcome": "You hand them a toy. They play quietly alone — better than nothing, but they still seem lonely. 😊",
          "nextHook": "You think next time you'll actually play together."
        },
        {
          "text": "Keep playing on your own",
          "outcome": "neutral",
          "xp": 10,
          "storyOutcome": "You keep playing alone. The child keeps watching from the doorway, never included. 💭",
          "nextHook": "You notice them looking wistful every visit."
        }
      ],
      "realWorldTip": "Including everyone in play, no matter their background, is a beautiful kind of fairness.",
      "reflectionPrompt": "Why might someone feel shy to ask to join in? How can you help?"
    },
    {
      "id": "sc_059",
      "title": "The Playground Rules",
      "setting": "park",
      "characters": [
        "younger kids",
        "big kids"
      ],
      "ageRange": [
        4,
        9
      ],
      "difficulty": 2,
      "theme": "fairness",
      "growthDimensions": [
        "fairness",
        "responsibility"
      ],
      "culture": [
        "US"
      ],
      "tags": [
        "fairness",
        "US",
        "park",
        "leadership"
      ],
      "storyText": "Some big kids are hogging the playground equipment and won't let the younger kids have a turn. The little ones look sad. You're somewhere in between in age.",
      "choices": [
        {
          "text": "Kindly suggest taking turns so all can play",
          "outcome": "fair",
          "xp": 35,
          "storyOutcome": "You speak up for fairness. The big kids agree to share, and the little ones cheer. You're a leader! 🌟",
          "nextHook": "The playground becomes friendlier because you spoke up."
        },
        {
          "text": "Help the younger kids find another spot to play",
          "outcome": "kind",
          "xp": 25,
          "storyOutcome": "You guide the little ones to a free area. They're happy, though the unfairness continues elsewhere. 😊",
          "nextHook": "The younger kids look up to you now."
        },
        {
          "text": "Mind your own business",
          "outcome": "neutral",
          "xp": 10,
          "storyOutcome": "You stay out of it. The little kids never get a turn and wander off disappointed. 💭",
          "nextHook": "You wish you'd helped them get a fair turn."
        }
      ],
      "realWorldTip": "Standing up for fairness, especially for younger or smaller kids, makes you a real leader.",
      "reflectionPrompt": "What can you do when you see something unfair happening?"
    },
    {
      "id": "sc_060",
      "title": "The Forgotten Promise",
      "setting": "home",
      "characters": [
        "younger sibling",
        "parent"
      ],
      "ageRange": [
        4,
        9
      ],
      "difficulty": 2,
      "theme": "responsibility",
      "growthDimensions": [
        "responsibility",
        "empathy"
      ],
      "culture": [
        "IN"
      ],
      "tags": [
        "responsibility",
        "India",
        "family",
        "promises"
      ],
      "storyText": "You promised to help your younger sibling build a fort today. But now your friends invited you out, which sounds more fun. Your sibling is excitedly gathering blankets for the fort.",
      "choices": [
        {
          "text": "Keep your promise and build the fort",
          "outcome": "responsible",
          "xp": 35,
          "storyOutcome": "You stay and build an epic fort together. Your sibling's joy and trust in you grow. Promises kept matter! 🌟",
          "nextHook": "Your sibling believes in your word completely now."
        },
        {
          "text": "Build a quick fort, then go out",
          "outcome": "wise compromise",
          "xp": 30,
          "storyOutcome": "You build a smaller fort first, then head out. Your sibling is happy and you keep your word. 🌟",
          "nextHook": "You learn you can balance promises and fun."
        },
        {
          "text": "Go out — you'll build it another day",
          "outcome": "self",
          "xp": 10,
          "storyOutcome": "You leave. Your sibling sits with the blankets, disappointed, the fort unbuilt. 💭",
          "nextHook": "Your sibling stops trusting your promises as easily."
        }
      ],
      "realWorldTip": "Keeping promises, especially to those who look up to you, builds lasting trust.",
      "reflectionPrompt": "How does it feel when someone breaks a promise to you?"
    },
    {
      "id": "sc_061",
      "title": "The Art Contest",
      "setting": "school",
      "characters": [
        "classmate",
        "art teacher"
      ],
      "ageRange": [
        4,
        9
      ],
      "difficulty": 2,
      "theme": "honesty",
      "growthDimensions": [
        "fairness",
        "responsibility"
      ],
      "culture": [
        "global"
      ],
      "tags": [
        "honesty",
        "school",
        "fairness",
        "art"
      ],
      "storyText": "You and a classmate entered an art contest. You notice they accidentally left their best drawing at home and only have a rough one. Yours is finished and polished. The teacher is about to judge.",
      "choices": [
        {
          "text": "Mention to the teacher they forgot their best work",
          "outcome": "fair",
          "xp": 35,
          "storyOutcome": "You speak up so they can bring it tomorrow. The teacher agrees. Your classmate is so grateful. 🌟",
          "nextHook": "Your classmate's real talent gets seen, thanks to your fairness."
        },
        {
          "text": "Say nothing — it's their responsibility",
          "outcome": "neutral",
          "xp": 15,
          "storyOutcome": "You stay quiet. Your classmate's rough drawing loses, and they're crushed, knowing it wasn't their best. 💭",
          "nextHook": "You wonder if you should have spoken up."
        },
        {
          "text": "Offer to let them bring it the next day yourself",
          "outcome": "kind",
          "xp": 30,
          "storyOutcome": "You suggest a kind solution to the teacher. Everyone gets a fair chance to show their best. 🌟",
          "nextHook": "Your classmate never forgets your fairness."
        }
      ],
      "realWorldTip": "Wanting to win fairly means wanting everyone to have their best chance too.",
      "reflectionPrompt": "Would winning feel good if someone else didn't get a fair chance?"
    },
    {
      "id": "sc_062",
      "title": "The Sick Grandmother",
      "setting": "home",
      "characters": [
        "grandmother",
        "parents"
      ],
      "ageRange": [
        4,
        9
      ],
      "difficulty": 2,
      "theme": "family",
      "growthDimensions": [
        "empathy",
        "responsibility"
      ],
      "culture": [
        "IN"
      ],
      "tags": [
        "family",
        "India",
        "caring",
        "responsibility"
      ],
      "storyText": "Your grandmother is unwell and resting. Your parents are busy. You could watch TV loudly in the next room, or you could help keep things calm and check on her.",
      "choices": [
        {
          "text": "Sit quietly with her and bring her water",
          "outcome": "kind",
          "xp": 35,
          "storyOutcome": "You keep her company and bring water. She holds your hand, comforted. Your care means everything. 🌟",
          "nextHook": "Your grandmother tells everyone what a caring grandchild you are."
        },
        {
          "text": "Keep the house quiet so she can rest",
          "outcome": "responsible",
          "xp": 30,
          "storyOutcome": "You play silently and keep noise down. Grandmother rests peacefully thanks to your thoughtfulness. 🌟",
          "nextHook": "Your parents notice and trust you to be considerate."
        },
        {
          "text": "Watch TV loudly — you're bored",
          "outcome": "self",
          "xp": 8,
          "storyOutcome": "You blast the TV. Grandmother can't rest and looks tired and bothered. 💭",
          "nextHook": "You feel bad when you see she couldn't sleep."
        }
      ],
      "realWorldTip": "Caring for sick family members, even in small quiet ways, is a deep act of love.",
      "reflectionPrompt": "What small things help someone who isn't feeling well?"
    },
    {
      "id": "sc_063",
      "title": "The New Student's Accent",
      "setting": "school",
      "characters": [
        "new student",
        "classmates"
      ],
      "ageRange": [
        4,
        9
      ],
      "difficulty": 2,
      "theme": "kindness",
      "growthDimensions": [
        "empathy",
        "fairness"
      ],
      "culture": [
        "US"
      ],
      "tags": [
        "kindness",
        "US",
        "inclusion",
        "diversity"
      ],
      "storyText": "A new student from another country speaks with an accent and some kids are giggling when they talk. The new student is getting quieter and quieter, afraid to speak up in class.",
      "choices": [
        {
          "text": "Befriend them and show others they're cool",
          "outcome": "brave kind",
          "xp": 35,
          "storyOutcome": "You sit with them and ask about their home country. Soon others want to be friends too. The giggling stops. 🌟",
          "nextHook": "The new student blossoms, sharing amazing stories about their culture."
        },
        {
          "text": "Tell the gigglers to stop being mean",
          "outcome": "brave",
          "xp": 30,
          "storyOutcome": "You speak up: \"That's not nice.\" The teasing stops, and the new student gives you a grateful look. 💙",
          "nextHook": "You become someone classmates know stands up for what's right."
        },
        {
          "text": "Stay quiet — it's not your problem",
          "outcome": "neutral",
          "xp": 10,
          "storyOutcome": "You say nothing. The new student stops speaking in class altogether, feeling unwelcome. 💭",
          "nextHook": "You notice them eating lunch alone every day."
        }
      ],
      "realWorldTip": "Welcoming someone who's different, and standing up when they're teased, is true kindness.",
      "reflectionPrompt": "How would it feel to be new in a place where people laughed at how you talk?"
    },
    {
      "id": "sc_064",
      "title": "The Holi Boundaries",
      "setting": "festival",
      "characters": [
        "friend who dislikes colours",
        "other kids"
      ],
      "ageRange": [
        4,
        9
      ],
      "difficulty": 2,
      "theme": "festival",
      "growthDimensions": [
        "empathy",
        "respect"
      ],
      "culture": [
        "IN"
      ],
      "tags": [
        "festival",
        "India",
        "respect",
        "consent"
      ],
      "storyText": "During Holi, everyone is throwing colours. One friend quietly says they don't like getting colour on their face. The other kids are about to smear colour all over them anyway.",
      "choices": [
        {
          "text": "Speak up so your friend's wishes are respected",
          "outcome": "respectful",
          "xp": 35,
          "storyOutcome": "You say, \"They said no face colour — let's respect that!\" Your friend smiles, grateful you heard them. 🌟",
          "nextHook": "Your friend feels safe celebrating Holi with you every year."
        },
        {
          "text": "Suggest colouring only their hands instead",
          "outcome": "wise",
          "xp": 30,
          "storyOutcome": "You offer a fun compromise everyone's happy with. Your friend joins in comfortably! 🌟",
          "nextHook": "You learn that respecting limits makes celebrations better for all."
        },
        {
          "text": "Join in smearing colour — it's Holi!",
          "outcome": "reactive",
          "xp": 8,
          "storyOutcome": "You smear colour anyway. Your friend pulls away upset and leaves the celebration early. 💭",
          "nextHook": "Your friend avoids Holi gatherings after that."
        }
      ],
      "realWorldTip": "Respecting someone's 'no,' even during fun, shows you truly care about their feelings.",
      "reflectionPrompt": "Why is it important to listen when someone says they don't want something?"
    },
    {
      "id": "sc_065",
      "title": "The Lost Child",
      "setting": "park",
      "characters": [
        "crying lost child",
        "park staff"
      ],
      "ageRange": [
        4,
        9
      ],
      "difficulty": 2,
      "theme": "kindness",
      "growthDimensions": [
        "empathy",
        "responsibility"
      ],
      "culture": [
        "global"
      ],
      "tags": [
        "kindness",
        "park",
        "responsibility",
        "helping"
      ],
      "storyText": "At a busy park, you see a small child crying, looking around frantically for their parent. They seem lost and scared. Adults are walking past without stopping.",
      "choices": [
        {
          "text": "Stay with them and find a park staff member",
          "outcome": "responsible",
          "xp": 35,
          "storyOutcome": "You stay calm, keep them company, and find a staff member who reunites them with their frantic parent. 🌟",
          "nextHook": "The grateful parent thanks you for being so responsible and kind."
        },
        {
          "text": "Ask a trusted adult nearby for help right away",
          "outcome": "helpful",
          "xp": 30,
          "storyOutcome": "You quickly get a trusted adult to help. The child is soon safe with their family. 🌟",
          "nextHook": "You learn the right way to help in a scary situation."
        },
        {
          "text": "Assume their parent will find them soon",
          "outcome": "neutral",
          "xp": 10,
          "storyOutcome": "You walk on. The child keeps crying alone, more and more scared. 💭",
          "nextHook": "You hope someone kinder stopped to help them."
        }
      ],
      "realWorldTip": "If you see a lost child, staying with them and finding a trusted adult or staff is the safest help.",
      "reflectionPrompt": "What would you want someone to do if you were lost and scared?"
    },
    {
      "id": "sc_066",
      "title": "The Shared Umbrella Walk",
      "setting": "school",
      "characters": [
        "classmate",
        "rain"
      ],
      "ageRange": [
        4,
        9
      ],
      "difficulty": 2,
      "theme": "kindness",
      "growthDimensions": [
        "empathy"
      ],
      "culture": [
        "IN"
      ],
      "tags": [
        "kindness",
        "India",
        "rain",
        "sharing"
      ],
      "storyText": "School ends and it's pouring rain. You have an umbrella; a classmate who lives near you has none and will get soaked. But sharing means you'll both walk slower and you might get a little wet too.",
      "choices": [
        {
          "text": "Share your umbrella and walk together",
          "outcome": "kind",
          "xp": 35,
          "storyOutcome": "You huddle under one umbrella, laughing as you splash home together. A soggy but wonderful friendship moment! 🌟",
          "nextHook": "You two become walking-home buddies for the whole rainy season."
        },
        {
          "text": "Walk them to their gate first",
          "outcome": "helpful",
          "xp": 30,
          "storyOutcome": "You make sure they get home dry, then continue. A little wet, but worth it. 🌟",
          "nextHook": "Your classmate's family thanks you warmly."
        },
        {
          "text": "Use it yourself — they'll manage",
          "outcome": "self",
          "xp": 10,
          "storyOutcome": "You stay dry while your classmate gets soaked walking the same way. They shiver the whole walk. 💭",
          "nextHook": "You feel guilty seeing them soaking wet."
        }
      ],
      "realWorldTip": "Sharing your umbrella turns a rainy walk into a moment of friendship.",
      "reflectionPrompt": "Has anyone ever shared something with you on a hard day? How did it feel?"
    },
    {
      "id": "sc_067",
      "title": "The Chores Trade",
      "setting": "home",
      "characters": [
        "sibling",
        "parent"
      ],
      "ageRange": [
        4,
        9
      ],
      "difficulty": 2,
      "theme": "fairness",
      "growthDimensions": [
        "fairness",
        "responsibility"
      ],
      "culture": [
        "US"
      ],
      "tags": [
        "fairness",
        "US",
        "family",
        "responsibility"
      ],
      "storyText": "You and your sibling are supposed to split chores equally. Your sibling is feeling sick today and can barely get up. Doing their chores too would mean a lot more work for you.",
      "choices": [
        {
          "text": "Do their chores so they can rest",
          "outcome": "kind",
          "xp": 35,
          "storyOutcome": "You quietly cover for them. They rest and recover, grateful. \"You're the best,\" they whisper. 🌟",
          "nextHook": "Your sibling covers for you when you're sick later, no questions asked."
        },
        {
          "text": "Do the most important ones and skip the rest",
          "outcome": "wise",
          "xp": 30,
          "storyOutcome": "You handle what really matters and let the small stuff wait. Balanced and caring! 🌟",
          "nextHook": "You learn to help without overwhelming yourself."
        },
        {
          "text": "Insist they do their share, sick or not",
          "outcome": "self",
          "xp": 10,
          "storyOutcome": "You make them work while sick. They struggle through it, feeling worse and unsupported. 💭",
          "nextHook": "Your sibling remembers you weren't there when they felt awful."
        }
      ],
      "realWorldTip": "Helping family when they're sick, even if it's extra work, is what caring looks like.",
      "reflectionPrompt": "How does it feel when someone helps you while you're unwell?"
    },
    {
      "id": "sc_068",
      "title": "The Hard Question",
      "setting": "school",
      "characters": [
        "classmate",
        "teacher"
      ],
      "ageRange": [
        5,
        10
      ],
      "difficulty": 2,
      "theme": "honesty",
      "growthDimensions": [
        "responsibility",
        "reasoning"
      ],
      "culture": [
        "global"
      ],
      "tags": [
        "honesty",
        "school",
        "courage",
        "fairness"
      ],
      "storyText": "The teacher asks who finished all their reading. Most hands shoot up confidently. You didn't quite finish, and neither did the classmate beside you, who's nervously raising their hand anyway.",
      "choices": [
        {
          "text": "Be honest that you didn't finish",
          "outcome": "honest",
          "xp": 35,
          "storyOutcome": "You honestly say you didn't finish. The teacher appreciates it and offers help. Truth feels right! 🌟",
          "nextHook": "Your honesty encourages others to be truthful too, including your nervous classmate."
        },
        {
          "text": "Quietly tell the teacher you need more time",
          "outcome": "wise",
          "xp": 30,
          "storyOutcome": "You privately admit you need more time. The teacher gives you a fair chance to catch up. 🌟",
          "nextHook": "You learn that asking for help honestly leads to support, not trouble."
        },
        {
          "text": "Raise your hand like everyone else",
          "outcome": "reactive",
          "xp": 10,
          "storyOutcome": "You pretend you finished. But later you're lost in the discussion, having faked it. 💭",
          "nextHook": "You wish you'd just been honest about needing more time."
        }
      ],
      "realWorldTip": "Being honest about not finishing something is braver and wiser than pretending.",
      "reflectionPrompt": "Why can it feel scary to admit you didn't finish? What happens when you do?"
    },
    {
      "id": "sc_069",
      "title": "The Exam Whisper",
      "setting": "school",
      "characters": [
        "friend",
        "teacher"
      ],
      "ageRange": [
        5,
        10
      ],
      "difficulty": 2,
      "theme": "honesty",
      "growthDimensions": [
        "responsibility",
        "fairness"
      ],
      "culture": [
        "IN"
      ],
      "tags": [
        "honesty",
        "India",
        "school",
        "exams"
      ],
      "storyText": "During an exam, your friend whispers asking for an answer. The teacher isn't looking. Your friend helped you study last week and looks desperate. Helping now would be cheating.",
      "choices": [
        {
          "text": "Shake your head — you can't cheat",
          "outcome": "honest",
          "xp": 35,
          "storyOutcome": "You quietly refuse. It's hard, but after the exam you offer to study together for next time. 🌟",
          "nextHook": "Your friend respects your honesty and you both do better honestly next time."
        },
        {
          "text": "Offer to help them study after, not now",
          "outcome": "wise",
          "xp": 30,
          "storyOutcome": "You whisper \"after class\" and later teach them properly. Real help, not cheating! 🌟",
          "nextHook": "Your friend actually learns the material, thanks to you."
        },
        {
          "text": "Slide them the answer quietly",
          "outcome": "reactive",
          "xp": 10,
          "storyOutcome": "You help them cheat. But neither of you really learned, and you both feel uneasy about it. 💭",
          "nextHook": "The unearned marks don't sit right with either of you."
        }
      ],
      "realWorldTip": "Helping a friend learn is true friendship; helping them cheat helps no one.",
      "reflectionPrompt": "What's the difference between helping a friend and helping them cheat?"
    },
    {
      "id": "sc_070",
      "title": "The Allowance Temptation",
      "setting": "home",
      "characters": [
        "sibling",
        "parent"
      ],
      "ageRange": [
        5,
        10
      ],
      "difficulty": 2,
      "theme": "honesty",
      "growthDimensions": [
        "responsibility"
      ],
      "culture": [
        "US"
      ],
      "tags": [
        "honesty",
        "US",
        "money",
        "family"
      ],
      "storyText": "You're counting your allowance and realise your parent accidentally gave you $10 extra. They're busy and would never notice. That's enough for the toy you've really wanted.",
      "choices": [
        {
          "text": "Tell your parent about the extra money",
          "outcome": "honest",
          "xp": 35,
          "storyOutcome": "You return it. Your parent hugs you: \"Your honesty means more than any toy.\" You feel genuinely proud. 🌟",
          "nextHook": "Your parent starts giving you more financial responsibility, trusting you fully."
        },
        {
          "text": "Keep it — it was their mistake",
          "outcome": "self",
          "xp": 10,
          "storyOutcome": "You buy the toy — but playing with it feels hollow, knowing how you got the money. 💭",
          "nextHook": "The toy never feels quite as fun as you'd hoped."
        },
        {
          "text": "Ask if you can earn the extra by doing chores",
          "outcome": "wise",
          "xp": 30,
          "storyOutcome": "You offer to work for it instead. Your parent is impressed and you earn it honestly! 🌟",
          "nextHook": "You feel great owning something you truly earned."
        }
      ],
      "realWorldTip": "Honesty about money, even small amounts, builds trust worth far more than any toy.",
      "reflectionPrompt": "Why does something feel better when you earn it honestly?"
    },
    {
      "id": "sc_071",
      "title": "The Gaming Password",
      "setting": "online",
      "characters": [
        "online friend",
        "younger sibling"
      ],
      "ageRange": [
        5,
        10
      ],
      "difficulty": 2,
      "theme": "online",
      "growthDimensions": [
        "responsibility",
        "reasoning"
      ],
      "culture": [
        "IN"
      ],
      "tags": [
        "online",
        "India",
        "digital",
        "safety"
      ],
      "storyText": "An online gaming friend you've never met asks you to share your account password so they can 'give you a free reward.' It sounds exciting, but something feels a bit off.",
      "choices": [
        {
          "text": "Refuse and tell a parent about the request",
          "outcome": "responsible",
          "xp": 35,
          "storyOutcome": "You say no and tell your parent. They explain it was a scam — you protected yourself perfectly! 🌟",
          "nextHook": "You learn to spot online tricks and stay safe."
        },
        {
          "text": "Politely decline and keep your password private",
          "outcome": "wise",
          "xp": 30,
          "storyOutcome": "You say \"No thanks\" and keep your password secret. Smart and safe! 🌟",
          "nextHook": "You feel confident handling tricky online situations."
        },
        {
          "text": "Share it — a free reward sounds great",
          "outcome": "reactive",
          "xp": 5,
          "storyOutcome": "You share it. The 'friend' takes over your account. A hard lesson about online safety. 💭",
          "nextHook": "You learn never to share passwords, the hard way."
        }
      ],
      "realWorldTip": "Never share passwords online, even for exciting rewards. Tell a trusted adult about strange requests.",
      "reflectionPrompt": "Why should passwords always stay private, even from online friends?"
    },
    {
      "id": "sc_072",
      "title": "The Blamed Classmate",
      "setting": "school",
      "characters": [
        "classmate",
        "teacher",
        "real culprit"
      ],
      "ageRange": [
        5,
        10
      ],
      "difficulty": 2,
      "theme": "honesty",
      "growthDimensions": [
        "fairness",
        "responsibility"
      ],
      "culture": [
        "global"
      ],
      "tags": [
        "honesty",
        "school",
        "fairness",
        "courage"
      ],
      "storyText": "The teacher is blaming a quiet classmate for a broken window, but you saw it was actually someone else — a popular, tough kid. Speaking up could make the tough kid angry at you.",
      "choices": [
        {
          "text": "Tell the truth about who really did it",
          "outcome": "brave honest",
          "xp": 35,
          "storyOutcome": "You speak up despite your fear. The innocent classmate is cleared. Truth and courage win! 🌟",
          "nextHook": "The classmate you saved becomes a loyal friend, and others admire your bravery."
        },
        {
          "text": "Tell the teacher privately after class",
          "outcome": "wise",
          "xp": 30,
          "storyOutcome": "You quietly tell the teacher the truth later. The right thing happens without a public confrontation. 🌟",
          "nextHook": "Justice is done, and you handled it wisely."
        },
        {
          "text": "Stay quiet to avoid trouble",
          "outcome": "neutral",
          "xp": 8,
          "storyOutcome": "You say nothing. The innocent classmate gets punished unfairly while you watch. 💭",
          "nextHook": "The unfairness weighs on your conscience for a long time."
        }
      ],
      "realWorldTip": "Standing up for someone who's wrongly blamed is brave and fair, even when it's scary.",
      "reflectionPrompt": "How would it feel to be blamed for something you didn't do?"
    },
    {
      "id": "sc_073",
      "title": "The Festival Cleanup",
      "setting": "home",
      "characters": [
        "family",
        "tired mother"
      ],
      "ageRange": [
        5,
        10
      ],
      "difficulty": 2,
      "theme": "responsibility",
      "growthDimensions": [
        "responsibility",
        "empathy"
      ],
      "culture": [
        "IN"
      ],
      "tags": [
        "responsibility",
        "India",
        "family",
        "festival"
      ],
      "storyText": "After a big festival celebration, the house is a mess and your mother looks exhausted. Everyone else has gone to rest. You're tired too, but you notice how worn out she is.",
      "choices": [
        {
          "text": "Start cleaning up to help your mother",
          "outcome": "responsible",
          "xp": 35,
          "storyOutcome": "You quietly start tidying. Your mother joins you, touched. \"You're my biggest helper,\" she says, smiling. 🌟",
          "nextHook": "Your thoughtfulness becomes a treasured family memory."
        },
        {
          "text": "Gather the other kids to help together",
          "outcome": "leader",
          "xp": 30,
          "storyOutcome": "You rally everyone to pitch in. The cleanup flies by and your mother gets to rest. Teamwork! 🌟",
          "nextHook": "Your family starts a tradition of cleaning up together."
        },
        {
          "text": "Go rest like everyone else",
          "outcome": "self",
          "xp": 10,
          "storyOutcome": "You rest. Your exhausted mother cleans alone late into the night. 💭",
          "nextHook": "You feel guilty seeing how tired she was the next day."
        }
      ],
      "realWorldTip": "Noticing when someone is tired and helping without being asked is a generous act of love.",
      "reflectionPrompt": "Who in your family works hard and might appreciate help?"
    },
    {
      "id": "sc_074",
      "title": "The Team Captain Choice",
      "setting": "school",
      "characters": [
        "skilled kid",
        "kid who tries hard"
      ],
      "ageRange": [
        5,
        10
      ],
      "difficulty": 2,
      "theme": "fairness",
      "growthDimensions": [
        "fairness",
        "empathy"
      ],
      "culture": [
        "US"
      ],
      "tags": [
        "fairness",
        "US",
        "sports",
        "leadership"
      ],
      "storyText": "As captain, you pick your team. One kid is super skilled but mean to others. Another tries really hard, is kind, but isn't as good. You can only pick one for the last spot.",
      "choices": [
        {
          "text": "Pick the kind kid who tries hard",
          "outcome": "wise",
          "xp": 35,
          "storyOutcome": "You value effort and kindness. Your team has heart, and the kind kid plays their best for you. 🌟",
          "nextHook": "Your team becomes known for great sportsmanship, win or lose."
        },
        {
          "text": "Pick based on a fair tryout",
          "outcome": "fair",
          "xp": 30,
          "storyOutcome": "You hold a quick fair tryout so it's about skill shown, not favourites. Everyone respects that. 🌟",
          "nextHook": "Your fair process earns the trust of the whole team."
        },
        {
          "text": "Pick the skilled but mean kid to win",
          "outcome": "self",
          "xp": 12,
          "storyOutcome": "You pick skill over kindness. You might win games, but your team feels tense and unhappy. 💭",
          "nextHook": "The mean kid's attitude slowly hurts team spirit."
        }
      ],
      "realWorldTip": "A good team is built on kindness and effort, not just skill.",
      "reflectionPrompt": "What matters more in a teammate: being the best, or being kind?"
    },
    {
      "id": "sc_075",
      "title": "The Older Bully",
      "setting": "park",
      "characters": [
        "younger kids",
        "older bully"
      ],
      "ageRange": [
        5,
        10
      ],
      "difficulty": 2,
      "theme": "courage",
      "growthDimensions": [
        "empathy",
        "responsibility"
      ],
      "culture": [
        "IN"
      ],
      "tags": [
        "courage",
        "India",
        "park",
        "standing up"
      ],
      "storyText": "At the park, an older kid is teasing some younger children and taking their snacks. The little ones are scared. You're not as big as the bully, but the younger kids are looking around for help.",
      "choices": [
        {
          "text": "Get a trusted adult right away",
          "outcome": "responsible",
          "xp": 35,
          "storyOutcome": "You quickly fetch a nearby parent. The bullying stops and the little ones get their snacks back. Smart help! 🌟",
          "nextHook": "The younger kids feel safe knowing someone helped them."
        },
        {
          "text": "Stand with the younger kids and speak up together",
          "outcome": "brave",
          "xp": 30,
          "storyOutcome": "You stand beside them: \"Leave them alone.\" Together you're braver, and the bully backs off. 💙",
          "nextHook": "You teach the younger kids that standing together gives courage."
        },
        {
          "text": "Stay back — the bully is bigger",
          "outcome": "neutral",
          "xp": 10,
          "storyOutcome": "You stay away. The little kids lose their snacks and leave the park crying. 💭",
          "nextHook": "You wish you'd at least gotten an adult to help."
        }
      ],
      "realWorldTip": "You don't have to be big to stop bullying — getting an adult is brave and smart.",
      "reflectionPrompt": "What are safe ways to help when you see someone being bullied?"
    },
    {
      "id": "sc_076",
      "title": "The Scholarship Essay",
      "setting": "school",
      "characters": [
        "friend",
        "teacher"
      ],
      "ageRange": [
        9,
        12
      ],
      "difficulty": 2,
      "theme": "honesty",
      "growthDimensions": [
        "responsibility",
        "fairness"
      ],
      "culture": [
        "IN"
      ],
      "tags": [
        "honesty",
        "India",
        "school",
        "integrity"
      ],
      "storyText": "You're both competing for a scholarship essay prize. Your friend asks to 'borrow' some of your ideas and phrases for their essay. Helping might cost you the prize you both need.",
      "choices": [
        {
          "text": "Offer to brainstorm ideas, not share your writing",
          "outcome": "wise",
          "xp": 35,
          "storyOutcome": "You help them think of their OWN ideas without giving your work. Fair help that keeps it honest! 🌟",
          "nextHook": "You both submit genuine essays and stay good friends."
        },
        {
          "text": "Encourage them to write from their own experience",
          "outcome": "honest",
          "xp": 30,
          "storyOutcome": "You remind them their real story is more powerful than borrowed words. They write something amazing! 🌟",
          "nextHook": "Your friend discovers their own voice, thanks to you."
        },
        {
          "text": "Let them copy your best parts",
          "outcome": "reactive",
          "xp": 10,
          "storyOutcome": "You let them use your work. Now the essays are too similar, and the teacher questions you both. 💭",
          "nextHook": "The shared phrases get you both in trouble."
        }
      ],
      "realWorldTip": "Helping someone find their own ideas is honest; giving them your work to copy isn't.",
      "reflectionPrompt": "How is helping someone think different from doing the work for them?"
    },
    {
      "id": "sc_077",
      "title": "The Group Project Slacker",
      "setting": "online",
      "characters": [
        "group mates",
        "teacher"
      ],
      "ageRange": [
        9,
        12
      ],
      "difficulty": 2,
      "theme": "fairness",
      "growthDimensions": [
        "fairness",
        "responsibility"
      ],
      "culture": [
        "US"
      ],
      "tags": [
        "fairness",
        "US",
        "school",
        "teamwork"
      ],
      "storyText": "Your online group project is due tomorrow. One member hasn't done their part and keeps making excuses. The rest of you are stressed. They ask you to just add their name to the finished work.",
      "choices": [
        {
          "text": "Talk to them honestly about contributing now",
          "outcome": "wise",
          "xp": 35,
          "storyOutcome": "You message them directly: \"We need your part — can you do it tonight?\" They step up. Fair and direct! 🌟",
          "nextHook": "Your honest nudge gets them to finally contribute."
        },
        {
          "text": "Explain the situation to the teacher fairly",
          "outcome": "honest",
          "xp": 30,
          "storyOutcome": "You let the teacher know how the work was divided, honestly and without cruelty. Fairness for those who worked. 💙",
          "nextHook": "The teacher appreciates your honest, fair approach."
        },
        {
          "text": "Add their name to avoid conflict",
          "outcome": "neutral",
          "xp": 12,
          "storyOutcome": "You add their name. Your team did all the work while they get equal credit. It feels unfair. 💭",
          "nextHook": "The unfairness frustrates your hardworking teammates."
        }
      ],
      "realWorldTip": "Addressing a problem directly and fairly is better than silently accepting unfairness.",
      "reflectionPrompt": "What's the fairest way to handle someone not doing their share?"
    },
    {
      "id": "sc_078",
      "title": "The Family Phone Rule",
      "setting": "home",
      "characters": [
        "parents",
        "younger sibling"
      ],
      "ageRange": [
        9,
        12
      ],
      "difficulty": 2,
      "theme": "responsibility",
      "growthDimensions": [
        "responsibility"
      ],
      "culture": [
        "IN"
      ],
      "tags": [
        "responsibility",
        "India",
        "family",
        "honesty"
      ],
      "storyText": "Your parents set a rule: no phones after 9pm. They're asleep, and you could secretly use yours to chat with friends. Your younger sibling sees you and might copy whatever you do.",
      "choices": [
        {
          "text": "Follow the rule and put your phone away",
          "outcome": "responsible",
          "xp": 35,
          "storyOutcome": "You set a good example. Your sibling follows your lead, and you both sleep well. Integrity matters! 🌟",
          "nextHook": "Your parents trust you with more freedom because you keep rules even unwatched."
        },
        {
          "text": "Explain to your sibling why the rule is good",
          "outcome": "leader",
          "xp": 30,
          "storyOutcome": "You tell your sibling why rest matters and you both put phones away. You're a great role model! 🌟",
          "nextHook": "Your sibling looks up to you as someone who does right."
        },
        {
          "text": "Use it secretly — no one will know",
          "outcome": "self",
          "xp": 10,
          "storyOutcome": "You break the rule. Your sibling copies you, and you're both tired and grumpy the next day. 💭",
          "nextHook": "Your parents notice you're tired and wonder why."
        }
      ],
      "realWorldTip": "Doing the right thing even when no one is watching — especially for those who look up to you — builds real character.",
      "reflectionPrompt": "Why does it matter to keep rules even when no one would find out?"
    },
    {
      "id": "sc_079",
      "title": "The Election Honesty",
      "setting": "school",
      "characters": [
        "classmates",
        "opponent"
      ],
      "ageRange": [
        9,
        12
      ],
      "difficulty": 2,
      "theme": "honesty",
      "growthDimensions": [
        "responsibility",
        "fairness"
      ],
      "culture": [
        "global"
      ],
      "tags": [
        "honesty",
        "school",
        "leadership",
        "fairness"
      ],
      "storyText": "You're running for student council. You could spread a small rumour about your opponent to win more votes, or you could run on your honest ideas alone. Winning matters to you a lot.",
      "choices": [
        {
          "text": "Run honestly on your own ideas",
          "outcome": "honest",
          "xp": 35,
          "storyOutcome": "You campaign on your real ideas. Win or lose, you keep your integrity and others' respect. 🌟",
          "nextHook": "Even if you don't win, classmates remember you as honest and fair."
        },
        {
          "text": "Focus on your strengths, never attacking",
          "outcome": "wise",
          "xp": 30,
          "storyOutcome": "You highlight what you'd do well without tearing anyone down. Clean, respectful campaigning! 🌟",
          "nextHook": "Your positive approach earns genuine admiration."
        },
        {
          "text": "Spread the rumour to gain an edge",
          "outcome": "self",
          "xp": 8,
          "storyOutcome": "The rumour spreads — but it's traced back to you. You lose trust AND the election. 💭",
          "nextHook": "Classmates see you differently after the dishonesty."
        }
      ],
      "realWorldTip": "Winning honestly is worth far more than winning by hurting someone else.",
      "reflectionPrompt": "Would a win feel good if you got it by being unfair to someone?"
    },
    {
      "id": "sc_080",
      "title": "The Inherited Responsibility",
      "setting": "home",
      "characters": [
        "younger siblings",
        "working parents"
      ],
      "ageRange": [
        9,
        12
      ],
      "difficulty": 2,
      "theme": "responsibility",
      "growthDimensions": [
        "responsibility",
        "empathy"
      ],
      "culture": [
        "IN"
      ],
      "tags": [
        "responsibility",
        "India",
        "family",
        "caring"
      ],
      "storyText": "Your parents work late and trust you to watch your younger siblings after school. Today your friends planned something exciting, but your siblings need help with homework and a snack.",
      "choices": [
        {
          "text": "Stay and take care of your siblings",
          "outcome": "responsible",
          "xp": 35,
          "storyOutcome": "You stay and help them. Your siblings feel safe and loved, and your parents trust you deeply. 🌟",
          "nextHook": "Your reliability becomes the backbone your family counts on."
        },
        {
          "text": "Arrange for a neighbour to help, then go briefly",
          "outcome": "wise",
          "xp": 25,
          "storyOutcome": "You responsibly arrange safe care before stepping out briefly. Balanced and trustworthy! 😊",
          "nextHook": "You learn to balance responsibility with your own needs."
        },
        {
          "text": "Leave them alone and go with friends",
          "outcome": "self",
          "xp": 8,
          "storyOutcome": "You leave. Your young siblings are alone, scared, and hungry. Your parents are worried and disappointed. 💭",
          "nextHook": "Your parents reconsider how much they can rely on you."
        }
      ],
      "realWorldTip": "Being responsible for those who depend on you is a serious and meaningful kind of love.",
      "reflectionPrompt": "How does it feel to be trusted with something important?"
    },
    {
      "id": "sc_081",
      "title": "The Witnessed Theft",
      "setting": "school",
      "characters": [
        "classmate stealing",
        "victim",
        "teacher"
      ],
      "ageRange": [
        9,
        12
      ],
      "difficulty": 2,
      "theme": "honesty",
      "growthDimensions": [
        "fairness",
        "responsibility"
      ],
      "culture": [
        "US"
      ],
      "tags": [
        "honesty",
        "US",
        "school",
        "courage"
      ],
      "storyText": "You see a classmate take money from another student's backpack. The thief is someone who's been kind to you before. The victim doesn't know yet. Speaking up feels hard.",
      "choices": [
        {
          "text": "Privately encourage the classmate to return it",
          "outcome": "wise",
          "xp": 35,
          "storyOutcome": "You quietly tell them you saw, and urge them to give it back. They do, avoiding bigger trouble. 🌟",
          "nextHook": "Your classmate is grateful you gave them a chance to do right."
        },
        {
          "text": "Tell the teacher what you saw",
          "outcome": "honest",
          "xp": 30,
          "storyOutcome": "You report it honestly. The money is returned and fairness is restored, even though it was hard. 💙",
          "nextHook": "The victim is grateful, and justice is served."
        },
        {
          "text": "Stay silent — they were nice to you",
          "outcome": "loyal",
          "xp": 10,
          "storyOutcome": "You say nothing out of loyalty. But the victim is upset and the theft goes unaddressed. 💭",
          "nextHook": "The unfairness troubles you whenever you think about it."
        }
      ],
      "realWorldTip": "Giving someone a chance to make a wrong right can be both kind and fair.",
      "reflectionPrompt": "Is staying silent to protect someone always the loyal thing to do?"
    },
    {
      "id": "sc_082",
      "title": "The Friend's Family Secret",
      "setting": "school",
      "characters": [
        "friend",
        "other classmates"
      ],
      "ageRange": [
        5,
        10
      ],
      "difficulty": 3,
      "theme": "loyalty",
      "growthDimensions": [
        "empathy",
        "responsibility"
      ],
      "culture": [
        "IN"
      ],
      "tags": [
        "loyalty",
        "India",
        "friendship",
        "privacy"
      ],
      "storyText": "Your friend confided that their parents are getting divorced and they're really struggling. Now classmates are gossiping and asking you if you know why your friend's been so sad. You know the truth.",
      "choices": [
        {
          "text": "Keep their secret and deflect the questions",
          "outcome": "loyal",
          "xp": 35,
          "storyOutcome": "You protect their privacy: \"That's their business.\" Your friend later thanks you for keeping their trust. 🌟",
          "nextHook": "Your friend knows they can always trust you with anything."
        },
        {
          "text": "Tell classmates to stop gossiping kindly",
          "outcome": "protective",
          "xp": 30,
          "storyOutcome": "You ask everyone to give your friend space without revealing why. Caring and discreet! 💙",
          "nextHook": "Your friend feels shielded and supported by you."
        },
        {
          "text": "Share a little so they'll understand",
          "outcome": "reactive",
          "xp": 10,
          "storyOutcome": "You reveal a bit, meaning well — but it spreads, and your friend feels betrayed. 💭",
          "nextHook": "Your friend pulls away, their trust broken."
        }
      ],
      "realWorldTip": "Keeping a friend's painful secret, even under pressure, is a deep act of loyalty.",
      "reflectionPrompt": "How would you want a friend to handle a secret you shared in confidence?"
    },
    {
      "id": "sc_083",
      "title": "The Talented Cheater",
      "setting": "school",
      "characters": [
        "talented friend",
        "class",
        "teacher"
      ],
      "ageRange": [
        5,
        10
      ],
      "difficulty": 3,
      "theme": "honesty",
      "growthDimensions": [
        "fairness",
        "responsibility"
      ],
      "culture": [
        "US"
      ],
      "tags": [
        "honesty",
        "US",
        "fairness",
        "friendship"
      ],
      "storyText": "Your talented friend, who's usually honest, copied an art project from the internet and won the class prize. The kids who made their own work lost. Your friend begs you not to say anything.",
      "choices": [
        {
          "text": "Encourage your friend to tell the truth themselves",
          "outcome": "wise",
          "xp": 35,
          "storyOutcome": "You urge them to come clean. They do, and though they lose the prize, they keep their integrity and your respect. 🌟",
          "nextHook": "Your friend thanks you for helping them be the person they want to be."
        },
        {
          "text": "Tell the teacher privately what you know",
          "outcome": "honest",
          "xp": 30,
          "storyOutcome": "You quietly inform the teacher. The prize goes to someone who earned it. Fairness restored, even though it hurt. 💙",
          "nextHook": "The honest kids get the recognition they deserved."
        },
        {
          "text": "Stay quiet — they're your friend",
          "outcome": "loyal",
          "xp": 12,
          "storyOutcome": "You keep silent. Your friend keeps the prize, but the kids who worked honestly were treated unfairly. 💭",
          "nextHook": "The unfair outcome bothers you every time you see the prize."
        }
      ],
      "realWorldTip": "Helping a friend make a wrong right serves both them and everyone they affected.",
      "reflectionPrompt": "When loyalty and fairness clash, how do you decide what's right?"
    },
    {
      "id": "sc_084",
      "title": "The Hungry Worker",
      "setting": "home",
      "characters": [
        "construction worker",
        "parent"
      ],
      "ageRange": [
        5,
        10
      ],
      "difficulty": 3,
      "theme": "compassion",
      "growthDimensions": [
        "empathy",
        "reasoning"
      ],
      "culture": [
        "IN"
      ],
      "tags": [
        "compassion",
        "India",
        "poverty",
        "kindness"
      ],
      "storyText": "A construction worker near your home looks very tired and hungry at lunchtime, with no food. You have extra food in your tiffin. Your parent told you not to talk to strangers, but he seems genuinely in need.",
      "choices": [
        {
          "text": "Ask your parent if you can share your food",
          "outcome": "wise",
          "xp": 35,
          "storyOutcome": "You involve your parent, who helps you offer food safely. The worker is deeply grateful. Kindness done right! 🌟",
          "nextHook": "Your family starts keeping extra food to share with workers nearby."
        },
        {
          "text": "Tell a parent he seems hungry so they can help",
          "outcome": "responsible",
          "xp": 30,
          "storyOutcome": "You let an adult handle it. Your parent brings him food and water. Safe and kind! 💙",
          "nextHook": "You learn how to help others while staying safe."
        },
        {
          "text": "Share your food directly without telling anyone",
          "outcome": "reactive",
          "xp": 15,
          "storyOutcome": "Your heart is kind, but going to a stranger alone worried your parent. Kindness needs safety too. 💭",
          "nextHook": "Your parent reminds you to involve them next time."
        }
      ],
      "realWorldTip": "Compassion is wonderful — and even better when done safely, with a trusted adult's help.",
      "reflectionPrompt": "How can you be both kind to people in need and safe at the same time?"
    },
    {
      "id": "sc_085",
      "title": "The Winning Goal",
      "setting": "park",
      "characters": [
        "teammates",
        "opposing player"
      ],
      "ageRange": [
        5,
        10
      ],
      "difficulty": 3,
      "theme": "honesty",
      "growthDimensions": [
        "fairness",
        "responsibility"
      ],
      "culture": [
        "global"
      ],
      "tags": [
        "honesty",
        "sports",
        "fairness",
        "integrity"
      ],
      "storyText": "In the final seconds, you score the winning goal — but only you saw that the ball actually went out of bounds first. The referee didn't notice. Your team is celebrating wildly.",
      "choices": [
        {
          "text": "Tell the referee the ball was out",
          "outcome": "honest",
          "xp": 35,
          "storyOutcome": "You admit the truth, even though it costs the win. Both teams are stunned by your integrity. True champion! 🌟",
          "nextHook": "Years later, people still remember your honesty more than any goal."
        },
        {
          "text": "Stay quiet and accept the win",
          "outcome": "self",
          "xp": 10,
          "storyOutcome": "You take the win — but deep down, you know it wasn't fair. The trophy feels hollow. 💭",
          "nextHook": "The unfair win never sits quite right with you."
        },
        {
          "text": "Tell your team and let them decide together",
          "outcome": "wise",
          "xp": 30,
          "storyOutcome": "You share the truth with your team and they choose honesty together. A team of real character! 🌟",
          "nextHook": "Your whole team learns that integrity matters more than winning."
        }
      ],
      "realWorldTip": "Real winners are honest even when honesty costs them the win.",
      "reflectionPrompt": "Would a victory feel good if you knew it wasn't truly earned?"
    },
    {
      "id": "sc_086",
      "title": "The Teacher's Mistake",
      "setting": "school",
      "characters": [
        "teacher",
        "class"
      ],
      "ageRange": [
        5,
        10
      ],
      "difficulty": 3,
      "theme": "honesty",
      "growthDimensions": [
        "reasoning",
        "responsibility"
      ],
      "culture": [
        "IN"
      ],
      "tags": [
        "honesty",
        "India",
        "school",
        "respect"
      ],
      "storyText": "Your teacher confidently explains something you're quite sure is wrong — you read the correct fact in a book. Correcting a teacher in front of everyone could embarrass them. But the class is learning it wrong.",
      "choices": [
        {
          "text": "Politely mention it to the teacher after class",
          "outcome": "wise",
          "xp": 35,
          "storyOutcome": "You respectfully share what you read privately. The teacher thanks you and corrects it next day. Respectful AND honest! 🌟",
          "nextHook": "Your teacher trusts and respects your thoughtful approach."
        },
        {
          "text": "Gently ask a question that points to the right answer",
          "outcome": "respectful",
          "xp": 30,
          "storyOutcome": "You raise your hand: \"I read something different — could you help me understand?\" The teacher rechecks. Tactful! 💙",
          "nextHook": "The class learns the right fact without anyone being embarrassed."
        },
        {
          "text": "Loudly announce the teacher is wrong",
          "outcome": "reactive",
          "xp": 12,
          "storyOutcome": "You blurt it out. You may be right, but the teacher feels embarrassed and the class gets tense. 💭",
          "nextHook": "You realise there were kinder ways to share the truth."
        }
      ],
      "realWorldTip": "You can be honest about a mistake while still being respectful and kind about how you say it.",
      "reflectionPrompt": "How can you correct someone without embarrassing them?"
    },
    {
      "id": "sc_087",
      "title": "The Sibling's Diary",
      "setting": "home",
      "characters": [
        "sibling",
        "parent"
      ],
      "ageRange": [
        5,
        10
      ],
      "difficulty": 3,
      "theme": "privacy",
      "growthDimensions": [
        "responsibility",
        "empathy"
      ],
      "culture": [
        "US"
      ],
      "tags": [
        "privacy",
        "US",
        "family",
        "trust"
      ],
      "storyText": "You find your sibling's diary open and notice they wrote they're being bullied and feel hopeless. They've kept it secret. Reading more feels wrong, but you're worried about them.",
      "choices": [
        {
          "text": "Close it and gently ask your sibling how they're doing",
          "outcome": "wise",
          "xp": 35,
          "storyOutcome": "You respect their privacy AND show you care, opening a door for them to talk. They share, relieved. 🌟",
          "nextHook": "Your sibling opens up to you and you help them get support together."
        },
        {
          "text": "Tell a parent you're worried about your sibling",
          "outcome": "responsible",
          "xp": 35,
          "storyOutcome": "You alert a trusted adult about your worry, getting your sibling real help. Caring and responsible! 💙",
          "nextHook": "Your sibling gets the support they needed, thanks to you."
        },
        {
          "text": "Read the whole diary to learn more",
          "outcome": "reactive",
          "xp": 10,
          "storyOutcome": "You read it all. You learn more, but you invaded their privacy. If they find out, trust breaks. 💭",
          "nextHook": "You feel uneasy knowing you crossed a line."
        }
      ],
      "realWorldTip": "When worried about someone, caring openly or getting adult help respects them more than snooping.",
      "reflectionPrompt": "How do you balance someone's privacy with worrying about their safety?"
    },
    {
      "id": "sc_088",
      "title": "The Crowded Sweets",
      "setting": "festival",
      "characters": [
        "younger children",
        "temple crowd"
      ],
      "ageRange": [
        5,
        10
      ],
      "difficulty": 3,
      "theme": "fairness",
      "growthDimensions": [
        "fairness",
        "empathy"
      ],
      "culture": [
        "IN"
      ],
      "tags": [
        "fairness",
        "India",
        "festival",
        "generosity"
      ],
      "storyText": "At a temple festival, prasad (blessed sweets) is being given out but running low. You're at the front and could grab extra for yourself. Behind you, smaller children might not get any.",
      "choices": [
        {
          "text": "Take only your share so others get some",
          "outcome": "fair",
          "xp": 35,
          "storyOutcome": "You take just one and step aside. The little ones behind you receive prasad too. Fair and selfless! 🌟",
          "nextHook": "The children's grateful smiles mean more than extra sweets ever could."
        },
        {
          "text": "Take your share and help hand some to little kids",
          "outcome": "generous",
          "xp": 35,
          "storyOutcome": "You take one and help distribute to smaller children who can't reach. Kind leadership! 🌟",
          "nextHook": "The temple volunteers praise your thoughtfulness."
        },
        {
          "text": "Grab extra while you can",
          "outcome": "self",
          "xp": 10,
          "storyOutcome": "You take a handful. Behind you, small children leave empty-handed and disappointed. 💭",
          "nextHook": "You notice their sad faces and feel a pang of regret."
        }
      ],
      "realWorldTip": "Taking only your fair share so others aren't left out is a quiet, generous act.",
      "reflectionPrompt": "Why does taking more than your share leave others with less?"
    },
    {
      "id": "sc_089",
      "title": "The Group's Unfair Plan",
      "setting": "school",
      "characters": [
        "group of friends",
        "left-out kid"
      ],
      "ageRange": [
        5,
        10
      ],
      "difficulty": 3,
      "theme": "courage",
      "growthDimensions": [
        "empathy",
        "responsibility"
      ],
      "culture": [
        "global"
      ],
      "tags": [
        "courage",
        "school",
        "fairness",
        "peer pressure"
      ],
      "storyText": "Your friend group decides to exclude one kid from the birthday party 'as a joke.' Everyone's laughing about it. The kid doesn't know yet. Speaking up might make your friends turn on you.",
      "choices": [
        {
          "text": "Tell your friends it's not a kind joke",
          "outcome": "brave",
          "xp": 35,
          "storyOutcome": "You speak up: \"That's actually mean.\" Some friends agree, and the kid gets included. Brave! 🌟",
          "nextHook": "The included kid never knows how close they came to being hurt — but you do, and you did right."
        },
        {
          "text": "Privately make sure the kid feels included anyway",
          "outcome": "kind",
          "xp": 30,
          "storyOutcome": "You quietly invite the kid to something else and befriend them. Kindness wins quietly. 💙",
          "nextHook": "You gain a genuine friend who values your loyalty."
        },
        {
          "text": "Go along with it to keep your friends",
          "outcome": "self",
          "xp": 8,
          "storyOutcome": "You stay silent. The kid is excluded and hurt when they find out. Your silence allowed it. 💭",
          "nextHook": "The guilt of going along stays with you."
        }
      ],
      "realWorldTip": "Standing up against exclusion, even when friends pressure you, is true courage.",
      "reflectionPrompt": "Why is it hard to speak up against your own friends? Why does it matter?"
    },
    {
      "id": "sc_090",
      "title": "The Maid's Broken Vase",
      "setting": "home",
      "characters": [
        "house helper",
        "parent"
      ],
      "ageRange": [
        5,
        10
      ],
      "difficulty": 3,
      "theme": "fairness",
      "growthDimensions": [
        "fairness",
        "empathy"
      ],
      "culture": [
        "IN"
      ],
      "tags": [
        "fairness",
        "India",
        "honesty",
        "compassion"
      ],
      "storyText": "You accidentally broke an expensive vase. Your parent assumes the house helper did it and is about to scold her, maybe cut her pay. She's too afraid to defend herself. Only you know the truth.",
      "choices": [
        {
          "text": "Admit it was you right away",
          "outcome": "honest",
          "xp": 35,
          "storyOutcome": "You speak up immediately: \"It was me, not her.\" The helper is spared, and your parent respects your honesty. 🌟",
          "nextHook": "Your courage protects someone who couldn't protect herself."
        },
        {
          "text": "Tell your parent privately it was your fault",
          "outcome": "responsible",
          "xp": 35,
          "storyOutcome": "You quietly take responsibility, sparing the helper and being honest. Brave and fair! 💙",
          "nextHook": "The helper is grateful, and you feel proud of doing right."
        },
        {
          "text": "Stay quiet — she might not get in much trouble",
          "outcome": "self",
          "xp": 8,
          "storyOutcome": "You stay silent. An innocent person is blamed and possibly loses pay for your mistake. 💭",
          "nextHook": "The injustice weighs heavily on your conscience."
        }
      ],
      "realWorldTip": "Taking responsibility to protect someone who can't defend themselves is true integrity.",
      "reflectionPrompt": "How would it feel to be blamed for something someone else did?"
    },
    {
      "id": "sc_091",
      "title": "The Viral Embarrassment",
      "setting": "online",
      "characters": [
        "classmate",
        "online crowd"
      ],
      "ageRange": [
        5,
        10
      ],
      "difficulty": 3,
      "theme": "online",
      "growthDimensions": [
        "empathy",
        "responsibility"
      ],
      "culture": [
        "US"
      ],
      "tags": [
        "online",
        "US",
        "kindness",
        "courage"
      ],
      "storyText": "A funny but embarrassing video of a classmate falling is being shared and getting lots of laughs online. People are tagging others to spread it. The classmate hasn't seen it yet but will soon.",
      "choices": [
        {
          "text": "Ask people to stop sharing it, kindly",
          "outcome": "brave",
          "xp": 35,
          "storyOutcome": "You comment, \"Let's not spread this — imagine if it were us.\" The sharing slows. You stood up for them. 🌟",
          "nextHook": "The classmate later learns you defended them and becomes a loyal friend."
        },
        {
          "text": "Privately warn the classmate and offer support",
          "outcome": "kind",
          "xp": 30,
          "storyOutcome": "You message them first so they aren't blindsided, and offer comfort. Thoughtful and caring! 💙",
          "nextHook": "Your classmate faces it with a friend beside them, thanks to you."
        },
        {
          "text": "Laugh and share it too — everyone is",
          "outcome": "self",
          "xp": 8,
          "storyOutcome": "You share it. It spreads further, and the classmate is humiliated. Your laugh added to their pain. 💭",
          "nextHook": "Seeing how hurt they are, you regret joining in."
        }
      ],
      "realWorldTip": "Before sharing something embarrassing about someone, imagine how you'd feel in their place.",
      "reflectionPrompt": "How can one person's choice to stop sharing make a real difference?"
    },
    {
      "id": "sc_092",
      "title": "The Borrowed Homework",
      "setting": "school",
      "characters": [
        "struggling friend",
        "teacher"
      ],
      "ageRange": [
        5,
        10
      ],
      "difficulty": 3,
      "theme": "honesty",
      "growthDimensions": [
        "fairness",
        "empathy"
      ],
      "culture": [
        "IN"
      ],
      "tags": [
        "honesty",
        "India",
        "school",
        "compassion"
      ],
      "storyText": "A friend who struggles a lot and has problems at home didn't do their homework again. They beg to copy yours. You feel bad for them, but copying isn't really helping them or being fair.",
      "choices": [
        {
          "text": "Offer to help them understand it instead",
          "outcome": "wise",
          "xp": 35,
          "storyOutcome": "You sit with them and explain it simply. They actually learn AND finish their own work. Real help! 🌟",
          "nextHook": "Your friend starts improving because you taught instead of just gave."
        },
        {
          "text": "Talk to the teacher about helping your friend",
          "outcome": "responsible",
          "xp": 30,
          "storyOutcome": "You quietly let the teacher know your friend is struggling. They get real support. Caring and wise! 💙",
          "nextHook": "Your friend gets the help they truly needed."
        },
        {
          "text": "Let them copy — they're going through a lot",
          "outcome": "reactive",
          "xp": 12,
          "storyOutcome": "You let them copy out of pity. But they learn nothing and depend on copying again next time. 💭",
          "nextHook": "The cycle continues, and your friend falls further behind."
        }
      ],
      "realWorldTip": "True help means teaching someone to do it themselves, not doing it for them.",
      "reflectionPrompt": "How is helping someone learn kinder than just giving them answers?"
    },
    {
      "id": "sc_093",
      "title": "The Injured Star",
      "setting": "sports",
      "characters": [
        "team",
        "rival who got hurt"
      ],
      "ageRange": [
        5,
        10
      ],
      "difficulty": 3,
      "theme": "sportsmanship",
      "growthDimensions": [
        "empathy",
        "fairness"
      ],
      "culture": [
        "US"
      ],
      "tags": [
        "sportsmanship",
        "US",
        "sports",
        "compassion"
      ],
      "storyText": "During a big game, the other team's best player gets injured and has to leave. Now your team will probably win easily. Your teammates are happy about the advantage. The injured player looks devastated.",
      "choices": [
        {
          "text": "Show concern for the injured player",
          "outcome": "kind",
          "xp": 35,
          "storyOutcome": "You check if they're okay before anything else. Both teams respect your heart over the scoreboard. 🌟",
          "nextHook": "You're remembered as a true sportsman, win or lose."
        },
        {
          "text": "Suggest your team play fair, not gloat",
          "outcome": "wise",
          "xp": 30,
          "storyOutcome": "You remind your team to win with grace, not celebrate someone's injury. Classy leadership! 💙",
          "nextHook": "Your team earns respect for their sportsmanship."
        },
        {
          "text": "Celebrate the easy win ahead",
          "outcome": "self",
          "xp": 10,
          "storyOutcome": "You cheer the advantage. The injured player feels worse seeing the other team gloat. 💭",
          "nextHook": "The win feels less honourable than it could have."
        }
      ],
      "realWorldTip": "Caring about an opponent's wellbeing, even when it helps you to not, is real sportsmanship.",
      "reflectionPrompt": "How should you treat an opponent who's hurt or struggling?"
    },
    {
      "id": "sc_094",
      "title": "The Festival Firecrackers",
      "setting": "home",
      "characters": [
        "neighbour with asthma",
        "siblings"
      ],
      "ageRange": [
        5,
        10
      ],
      "difficulty": 3,
      "theme": "responsibility",
      "growthDimensions": [
        "empathy",
        "reasoning"
      ],
      "culture": [
        "IN"
      ],
      "tags": [
        "responsibility",
        "India",
        "festival",
        "consideration"
      ],
      "storyText": "It's Diwali and you have loud firecrackers. You just learned your elderly neighbour has breathing problems and the smoke makes her very ill. But the loud crackers are the most fun part for you.",
      "choices": [
        {
          "text": "Choose quieter, smokeless celebrations",
          "outcome": "wise",
          "xp": 35,
          "storyOutcome": "You switch to sparklers and lights near her home. You still celebrate, and she can breathe. Thoughtful! 🌟",
          "nextHook": "Your neighbour blesses you warmly for your kindness."
        },
        {
          "text": "Set off crackers far from her house",
          "outcome": "responsible",
          "xp": 30,
          "storyOutcome": "You move your celebration away from her home. You compromise so everyone's okay. Considerate! 💙",
          "nextHook": "You learn that celebrating can include caring for others."
        },
        {
          "text": "Light them anyway — it's the festival",
          "outcome": "self",
          "xp": 8,
          "storyOutcome": "You light them near her home. She struggles to breathe and has to stay shut inside, miserable. 💭",
          "nextHook": "You feel bad knowing your fun made her sick."
        }
      ],
      "realWorldTip": "Celebrating thoughtfully, with care for vulnerable neighbours, is a mature kind of joy.",
      "reflectionPrompt": "How can you have fun in ways that don't harm others around you?"
    },
    {
      "id": "sc_095",
      "title": "The Test Answer Glimpse",
      "setting": "school",
      "characters": [
        "self",
        "classmate"
      ],
      "ageRange": [
        5,
        10
      ],
      "difficulty": 3,
      "theme": "honesty",
      "growthDimensions": [
        "responsibility",
        "fairness"
      ],
      "culture": [
        "global"
      ],
      "tags": [
        "honesty",
        "school",
        "integrity",
        "temptation"
      ],
      "storyText": "During a hard test, you accidentally glance at a classmate's paper and see an answer you weren't sure about. Using it would help your score. No one saw, and it was an accident.",
      "choices": [
        {
          "text": "Don't use it — answer with your own knowledge",
          "outcome": "honest",
          "xp": 35,
          "storyOutcome": "You ignore what you saw and answer honestly. Your score is truly yours, and you feel proud. 🌟",
          "nextHook": "You trust your own ability more, knowing your grades are real."
        },
        {
          "text": "Cover your eyes and refocus on your own paper",
          "outcome": "wise",
          "xp": 30,
          "storyOutcome": "You shift your gaze and concentrate on your own work. Integrity protected! 💙",
          "nextHook": "You finish knowing every answer was your own."
        },
        {
          "text": "Use the answer — it was accidental",
          "outcome": "self",
          "xp": 10,
          "storyOutcome": "You use it. You score higher, but it wasn't really your work. The grade feels borrowed. 💭",
          "nextHook": "You can't fully take pride in a score that wasn't all yours."
        }
      ],
      "realWorldTip": "Honesty means not using an unfair advantage, even one you got by accident.",
      "reflectionPrompt": "Does it count as cheating if you didn't mean to see the answer? Why or why not?"
    },
    {
      "id": "sc_096",
      "title": "The Scholarship Rivalry",
      "setting": "school",
      "characters": [
        "close friend",
        "teacher"
      ],
      "ageRange": [
        6,
        11
      ],
      "difficulty": 3,
      "theme": "fairness",
      "growthDimensions": [
        "fairness",
        "empathy"
      ],
      "culture": [
        "IN"
      ],
      "tags": [
        "fairness",
        "India",
        "school",
        "friendship"
      ],
      "storyText": "You and your best friend both need one scholarship badly. You discover the teacher made an error that helped your score and hurt your friend's. Fixing it might mean your friend wins instead of you.",
      "choices": [
        {
          "text": "Report the error even if it costs you",
          "outcome": "honest",
          "xp": 35,
          "storyOutcome": "You tell the teacher about the mistake. Fairness comes first, even over your own gain. Remarkable integrity! 🌟",
          "nextHook": "Whatever the outcome, you keep both your honour and your friendship."
        },
        {
          "text": "Discuss it honestly with your friend first",
          "outcome": "wise",
          "xp": 30,
          "storyOutcome": "You talk it through with your friend openly. Together you ask the teacher to recheck fairly. 💙",
          "nextHook": "Your honesty deepens your friendship, whatever happens."
        },
        {
          "text": "Stay quiet — the error wasn't your fault",
          "outcome": "self",
          "xp": 12,
          "storyOutcome": "You keep silent. You might win, but on an unfair score, and your friendship feels the strain. 💭",
          "nextHook": "Knowing you benefited from an error troubles you."
        }
      ],
      "realWorldTip": "Fairness sometimes means giving up an advantage you didn't even create.",
      "reflectionPrompt": "Would you want to win because of a mistake that hurt someone else?"
    },
    {
      "id": "sc_097",
      "title": "The Parent's White Lie",
      "setting": "home",
      "characters": [
        "parent",
        "relative"
      ],
      "ageRange": [
        6,
        11
      ],
      "difficulty": 3,
      "theme": "honesty",
      "growthDimensions": [
        "reasoning",
        "empathy"
      ],
      "culture": [
        "US"
      ],
      "tags": [
        "honesty",
        "US",
        "family",
        "complexity"
      ],
      "storyText": "Your parent tells a small lie to a relative to avoid hurting their feelings about a gift they didn't like. Later the relative asks YOU directly if everyone liked the gift. You're caught in the middle.",
      "choices": [
        {
          "text": "Be kind but honest in a gentle way",
          "outcome": "wise",
          "xp": 35,
          "storyOutcome": "You say something true but kind: \"It was so thoughtful of you.\" Honest AND caring. 🌟",
          "nextHook": "You learn you can be truthful without being hurtful."
        },
        {
          "text": "Redirect to focus on the kind gesture",
          "outcome": "wise",
          "xp": 30,
          "storyOutcome": "You focus on the giver's kindness rather than the gift itself. Tactful and warm! 💙",
          "nextHook": "The relative feels appreciated, and you stayed honest."
        },
        {
          "text": "Repeat your parent's lie to be safe",
          "outcome": "reactive",
          "xp": 15,
          "storyOutcome": "You echo the lie. It's easier, but lying gets more tangled, and you feel uncomfortable. 💭",
          "nextHook": "You realise small lies can pull you into bigger ones."
        }
      ],
      "realWorldTip": "You can be honest and kind at the same time by focusing on what's genuinely good.",
      "reflectionPrompt": "Is it possible to be truthful without hurting someone's feelings? How?"
    },
    {
      "id": "sc_098",
      "title": "The Fake News Forward",
      "setting": "online",
      "characters": [
        "family group",
        "relatives"
      ],
      "ageRange": [
        6,
        11
      ],
      "difficulty": 3,
      "theme": "reasoning",
      "growthDimensions": [
        "reasoning",
        "responsibility"
      ],
      "culture": [
        "IN"
      ],
      "tags": [
        "reasoning",
        "India",
        "online",
        "responsibility"
      ],
      "storyText": "In the family WhatsApp group, a relative shares alarming 'news' that you're pretty sure is fake and could scare people. Elders are already believing it and getting worried. Correcting an elder feels disrespectful.",
      "choices": [
        {
          "text": "Respectfully share a fact-check from a reliable source",
          "outcome": "wise",
          "xp": 35,
          "storyOutcome": "You kindly post a trusted source showing the truth. The worry calms. Respectful and responsible! 🌟",
          "nextHook": "Your family starts checking facts before forwarding, thanks to you."
        },
        {
          "text": "Privately message the relative who shared it",
          "outcome": "respectful",
          "xp": 30,
          "storyOutcome": "You gently message them one-on-one with the real facts, saving their dignity. Tactful! 💙",
          "nextHook": "The relative appreciates being told privately and stops spreading it."
        },
        {
          "text": "Say nothing — you don't want to disrespect elders",
          "outcome": "neutral",
          "xp": 12,
          "storyOutcome": "You stay silent. The fake news spreads and causes unnecessary fear among your relatives. 💭",
          "nextHook": "You wish you'd found a respectful way to share the truth."
        }
      ],
      "realWorldTip": "You can correct misinformation respectfully — checking facts protects everyone.",
      "reflectionPrompt": "How can you share the truth with elders in a way that's still respectful?"
    },
    {
      "id": "sc_099",
      "title": "The Reward for Silence",
      "setting": "school",
      "characters": [
        "classmate",
        "bullied kid"
      ],
      "ageRange": [
        6,
        11
      ],
      "difficulty": 3,
      "theme": "courage",
      "growthDimensions": [
        "fairness",
        "responsibility"
      ],
      "culture": [
        "global"
      ],
      "tags": [
        "courage",
        "school",
        "integrity",
        "peer pressure"
      ],
      "storyText": "A popular kid offers to make you part of their cool group — but only if you stay silent about them bullying a quieter classmate. Joining would boost your status. The bullied kid suffers in silence.",
      "choices": [
        {
          "text": "Refuse and stand up for the bullied classmate",
          "outcome": "brave",
          "xp": 35,
          "storyOutcome": "You turn down the offer and support the bullied kid. You choose character over popularity. Heroic! 🌟",
          "nextHook": "The bullied kid gains a true friend, and you gain self-respect worth more than any group."
        },
        {
          "text": "Decline quietly and befriend the bullied kid",
          "outcome": "kind",
          "xp": 30,
          "storyOutcome": "You say no thanks and quietly become the bullied kid's friend. Loyalty to what's right! 💙",
          "nextHook": "You discover real friendship matters more than status."
        },
        {
          "text": "Take the deal and stay silent",
          "outcome": "self",
          "xp": 8,
          "storyOutcome": "You join the group by ignoring cruelty. The popularity feels good briefly, but hollow. 💭",
          "nextHook": "Watching the bullying continue, you feel complicit and uneasy."
        }
      ],
      "realWorldTip": "Real character means doing right even when staying silent would benefit you.",
      "reflectionPrompt": "Is popularity worth gaining if it means ignoring someone's pain?"
    },
    {
      "id": "sc_100",
      "title": "The Family Business Ethics",
      "setting": "home",
      "characters": [
        "parent",
        "customer"
      ],
      "ageRange": [
        6,
        11
      ],
      "difficulty": 3,
      "theme": "honesty",
      "growthDimensions": [
        "reasoning",
        "responsibility"
      ],
      "culture": [
        "IN"
      ],
      "tags": [
        "honesty",
        "India",
        "ethics",
        "family"
      ],
      "storyText": "You help at your family's shop. You notice a customer was accidentally undercharged and is about to leave happy. Telling them means losing money your family could use. Staying quiet means they overpaid... no, underpaid.",
      "choices": [
        {
          "text": "Politely tell the customer about the error",
          "outcome": "honest",
          "xp": 35,
          "storyOutcome": "You kindly correct the bill. The customer respects your family's honesty and becomes a loyal regular. 🌟",
          "nextHook": "Your shop builds a reputation for fairness that brings more customers."
        },
        {
          "text": "Tell your parent so they decide",
          "outcome": "responsible",
          "xp": 30,
          "storyOutcome": "You let your parent handle it honestly. They appreciate you noticing and being truthful. 💙",
          "nextHook": "Your family's integrity becomes a point of pride."
        },
        {
          "text": "Stay quiet — the small loss is the customer's gain",
          "outcome": "self",
          "xp": 12,
          "storyOutcome": "You say nothing. Your family loses money, and you've let an error stand. It feels off. 💭",
          "nextHook": "You wonder if honesty would have built more trust long-term."
        }
      ],
      "realWorldTip": "Honesty in business, even when it costs a little, builds trust that's worth far more.",
      "reflectionPrompt": "Why might being honest in business help more than a small unfair gain?"
    },
    {
      "id": "sc_101",
      "title": "The Group Credit Grab",
      "setting": "school",
      "characters": [
        "teammates",
        "teacher"
      ],
      "ageRange": [
        6,
        11
      ],
      "difficulty": 3,
      "theme": "fairness",
      "growthDimensions": [
        "fairness",
        "responsibility"
      ],
      "culture": [
        "US"
      ],
      "tags": [
        "fairness",
        "US",
        "teamwork",
        "honesty"
      ],
      "storyText": "Your group did a project. During the presentation, you could easily take most of the credit since you're the best speaker, even though a shy teammate did the hardest research. The teacher is impressed by you.",
      "choices": [
        {
          "text": "Make sure the shy teammate gets credit",
          "outcome": "fair",
          "xp": 35,
          "storyOutcome": "You spotlight their research: \"This was all their hard work.\" The shy teammate beams. True fairness! 🌟",
          "nextHook": "Your shy teammate gains confidence and becomes a great collaborator."
        },
        {
          "text": "Share credit equally among the whole team",
          "outcome": "wise",
          "xp": 30,
          "storyOutcome": "You name everyone's contributions fairly. The whole team feels valued. Great teamwork! 💙",
          "nextHook": "Your team trusts you to always be fair."
        },
        {
          "text": "Accept most of the praise — you presented well",
          "outcome": "self",
          "xp": 12,
          "storyOutcome": "You take the credit. The shy teammate's hard work goes unnoticed, and they feel invisible. 💭",
          "nextHook": "You notice them withdrawing, hurt by being overlooked."
        }
      ],
      "realWorldTip": "Sharing credit fairly, especially for quiet people's hard work, is a mark of real character.",
      "reflectionPrompt": "How does it feel when someone takes credit for what you did?"
    },
    {
      "id": "sc_102",
      "title": "The Difficult Relative",
      "setting": "home",
      "characters": [
        "rude relative",
        "parents"
      ],
      "ageRange": [
        6,
        11
      ],
      "difficulty": 3,
      "theme": "respect",
      "growthDimensions": [
        "self-regulation",
        "empathy"
      ],
      "culture": [
        "IN"
      ],
      "tags": [
        "respect",
        "India",
        "family",
        "self-regulation"
      ],
      "storyText": "A relative visiting your home keeps making rude comments about your hobbies and comparing you unfavourably to your cousins. You're hurt and angry. Your parents expect you to be respectful to elders.",
      "choices": [
        {
          "text": "Stay calm and politely excuse yourself",
          "outcome": "self-regulate",
          "xp": 35,
          "storyOutcome": "You breathe, respond politely, and step away calmly. You keep your dignity without disrespect. Mature! 🌟",
          "nextHook": "Your parents are proud of how gracefully you handled it."
        },
        {
          "text": "Calmly share how the comments make you feel",
          "outcome": "brave",
          "xp": 30,
          "storyOutcome": "You respectfully say, \"That hurts my feelings.\" Honest and respectful — a hard balance you nailed! 💙",
          "nextHook": "The relative actually reflects on their words."
        },
        {
          "text": "Snap back rudely",
          "outcome": "reactive",
          "xp": 10,
          "storyOutcome": "You retort sharply. It feels good for a second, but now there's tension and your parents are upset. 💭",
          "nextHook": "The visit turns uncomfortable for everyone."
        }
      ],
      "realWorldTip": "Staying calm and dignified with difficult people protects your peace and your relationships.",
      "reflectionPrompt": "What can you do with hurt or angry feelings so they don't make things worse?"
    },
    {
      "id": "sc_103",
      "title": "The Whistleblower's Dilemma",
      "setting": "school",
      "characters": [
        "popular group",
        "teacher",
        "victim"
      ],
      "ageRange": [
        8,
        12
      ],
      "difficulty": 3,
      "theme": "courage",
      "growthDimensions": [
        "fairness",
        "responsibility"
      ],
      "culture": [
        "IN"
      ],
      "tags": [
        "courage",
        "India",
        "school",
        "integrity"
      ],
      "storyText": "You discover the popular group has been secretly cheating on tests all year, dragging down honest students' relative ranks. Exposing them would make you a target. Staying silent keeps you safe but lets the unfairness continue.",
      "choices": [
        {
          "text": "Report it to a trusted teacher with evidence",
          "outcome": "brave honest",
          "xp": 35,
          "storyOutcome": "You quietly bring proof to a teacher you trust. The cheating stops, and honest students finally get fair ranks. Courageous! 🌟",
          "nextHook": "Though it was scary, you helped restore fairness for everyone who played by the rules."
        },
        {
          "text": "Encourage the group to stop before it's exposed",
          "outcome": "wise",
          "xp": 30,
          "storyOutcome": "You warn them privately to stop. Some do, avoiding harm. A chance to make it right. 💙",
          "nextHook": "A few of them thank you later for the warning."
        },
        {
          "text": "Stay silent to protect yourself",
          "outcome": "self",
          "xp": 12,
          "storyOutcome": "You keep quiet. The cheating continues, and honest hardworking students keep losing out unfairly. 💭",
          "nextHook": "The ongoing injustice weighs on you all year."
        }
      ],
      "realWorldTip": "Standing up against widespread unfairness is hard and scary, but it protects everyone who plays fair.",
      "reflectionPrompt": "When is it worth taking a personal risk to stop something unfair?"
    },
    {
      "id": "sc_104",
      "title": "The Anonymous Account",
      "setting": "online",
      "characters": [
        "classmates",
        "bullied student"
      ],
      "ageRange": [
        8,
        12
      ],
      "difficulty": 3,
      "theme": "online",
      "growthDimensions": [
        "responsibility",
        "fairness"
      ],
      "culture": [
        "US"
      ],
      "tags": [
        "online",
        "US",
        "courage",
        "integrity"
      ],
      "storyText": "You discover who's behind an anonymous account posting mean things about classmates — it's someone you know. They don't know you found out. Exposing them risks drama; staying silent lets the cruelty continue.",
      "choices": [
        {
          "text": "Privately confront them and urge them to stop",
          "outcome": "wise",
          "xp": 35,
          "storyOutcome": "You message them: \"I know it's you. Please stop, or I'll have to report it.\" They delete the account. 🌟",
          "nextHook": "The cruelty stops without public drama, and classmates are protected."
        },
        {
          "text": "Report the account to a trusted adult",
          "outcome": "responsible",
          "xp": 30,
          "storyOutcome": "You bring it to an adult who can handle it properly. The harm stops through the right channels. 💙",
          "nextHook": "The targeted classmates are protected, thanks to your action."
        },
        {
          "text": "Stay out of it to avoid drama",
          "outcome": "self",
          "xp": 10,
          "storyOutcome": "You stay silent. The anonymous cruelty continues, hurting more classmates over time. 💭",
          "nextHook": "Each new mean post reminds you that you could have helped."
        }
      ],
      "realWorldTip": "Addressing online cruelty, privately or through a trusted adult, protects everyone it targets.",
      "reflectionPrompt": "What's the bravest way to stop someone from hurting others online?"
    },
    {
      "id": "sc_105",
      "title": "The Watch Dispute",
      "setting": "home",
      "characters": [
        "extended family",
        "grandparent"
      ],
      "ageRange": [
        8,
        12
      ],
      "difficulty": 3,
      "theme": "fairness",
      "growthDimensions": [
        "empathy",
        "reasoning"
      ],
      "culture": [
        "IN"
      ],
      "tags": [
        "fairness",
        "India",
        "family",
        "peace"
      ],
      "storyText": "Your extended family is arguing over which cousin gets your late grandparent's treasured watch. You know your grandparent once said they wanted it to go to the cousin who's quietest and never asks for anything.",
      "choices": [
        {
          "text": "Gently share what your grandparent actually wanted",
          "outcome": "honest",
          "xp": 35,
          "storyOutcome": "You calmly tell everyone Grandpa's true wish. The arguing settles, and the quiet cousin is honoured. 🌟",
          "nextHook": "Your grandparent's real wishes are respected, and the family finds peace."
        },
        {
          "text": "Suggest the family decide together respectfully",
          "outcome": "wise",
          "xp": 30,
          "storyOutcome": "You propose a calm family discussion instead of arguing. You help restore peace and fairness. 💙",
          "nextHook": "Your levelheadedness helps the family heal."
        },
        {
          "text": "Stay out of the grown-ups' argument",
          "outcome": "neutral",
          "xp": 12,
          "storyOutcome": "You stay quiet. The argument continues, and the watch may go to the loudest, not the one Grandpa wanted. 💭",
          "nextHook": "You wonder if sharing the truth could have brought peace."
        }
      ],
      "realWorldTip": "Sometimes sharing what you know calmly can bring fairness and peace to a difficult situation.",
      "reflectionPrompt": "How can honesty help settle an argument fairly?"
    },
    {
      "id": "sc_106",
      "title": "The Perfect Score Pressure",
      "setting": "school",
      "characters": [
        "parents",
        "self",
        "classmate"
      ],
      "ageRange": [
        8,
        12
      ],
      "difficulty": 3,
      "theme": "honesty",
      "growthDimensions": [
        "responsibility",
        "self-regulation"
      ],
      "culture": [
        "global"
      ],
      "tags": [
        "honesty",
        "school",
        "integrity",
        "pressure"
      ],
      "storyText": "Your parents expect perfect scores and will be very disappointed by your B. A classmate offers to share answers for the makeup test so you can 'fix' your grade. The pressure feels enormous.",
      "choices": [
        {
          "text": "Refuse and talk honestly with your parents",
          "outcome": "brave honest",
          "xp": 35,
          "storyOutcome": "You decline cheating and have an honest talk with your parents about the pressure. They listen. Brave! 🌟",
          "nextHook": "Your honesty opens a healthier conversation about expectations with your family."
        },
        {
          "text": "Decline and ask the teacher for extra help",
          "outcome": "wise",
          "xp": 30,
          "storyOutcome": "You say no to cheating and seek real help to improve. You grow genuinely. 💙",
          "nextHook": "You earn a better grade honestly and feel proud of it."
        },
        {
          "text": "Take the answers — the pressure is too much",
          "outcome": "reactive",
          "xp": 8,
          "storyOutcome": "You cheat to get the score. But the guilt and fear of being caught feel worse than any B. 💭",
          "nextHook": "The 'perfect' score brings anxiety, not pride."
        }
      ],
      "realWorldTip": "No grade is worth your integrity. Honest struggles build more than dishonest success.",
      "reflectionPrompt": "How can pressure for perfect results sometimes lead people to bad choices?"
    },
    {
      "id": "sc_107",
      "title": "The Favoured Friend",
      "setting": "school",
      "characters": [
        "teacher",
        "friend",
        "class"
      ],
      "ageRange": [
        8,
        12
      ],
      "difficulty": 3,
      "theme": "fairness",
      "growthDimensions": [
        "fairness",
        "responsibility"
      ],
      "culture": [
        "IN"
      ],
      "tags": [
        "fairness",
        "India",
        "school",
        "honesty"
      ],
      "storyText": "A teacher clearly favours your friend, giving them better marks than their work deserves while others who worked harder get less. Your friend enjoys the favouritism. Speaking up could upset both the teacher and your friend.",
      "choices": [
        {
          "text": "Talk to your friend about the unfairness first",
          "outcome": "wise",
          "xp": 35,
          "storyOutcome": "You gently discuss it with your friend. Together, they choose to ask for fair grading. Brave and loyal! 🌟",
          "nextHook": "Your friend earns genuine respect by valuing fairness over favouritism."
        },
        {
          "text": "Quietly raise the fairness concern with the teacher",
          "outcome": "honest",
          "xp": 30,
          "storyOutcome": "You respectfully mention the concern to the teacher. Fairer grading helps everyone who works hard. 💙",
          "nextHook": "Hardworking students get the fair marks they earned."
        },
        {
          "text": "Say nothing — your friend benefits",
          "outcome": "self",
          "xp": 12,
          "storyOutcome": "You stay quiet. Your friend keeps unfair marks while harder workers lose out. It feels wrong. 💭",
          "nextHook": "The unfairness to others nags at your conscience."
        }
      ],
      "realWorldTip": "Fairness means caring about everyone getting what they earned, even when unfairness benefits a friend.",
      "reflectionPrompt": "Is it fair to stay silent when favouritism helps someone you like?"
    },
    {
      "id": "sc_108",
      "title": "The Discovered Truth",
      "setting": "home",
      "characters": [
        "sibling",
        "parents"
      ],
      "ageRange": [
        8,
        12
      ],
      "difficulty": 3,
      "theme": "loyalty",
      "growthDimensions": [
        "responsibility",
        "empathy"
      ],
      "culture": [
        "US"
      ],
      "tags": [
        "loyalty",
        "US",
        "family",
        "honesty"
      ],
      "storyText": "You discover your older sibling has been secretly skipping their tutoring sessions and lying to your parents about it, falling behind. They beg you to keep their secret. But they're really struggling.",
      "choices": [
        {
          "text": "Urge your sibling to tell your parents themselves",
          "outcome": "wise",
          "xp": 35,
          "storyOutcome": "You encourage them to come clean and offer to support them. They do, and finally get the help they need. 🌟",
          "nextHook": "Your sibling thanks you for helping them face it before it got worse."
        },
        {
          "text": "Tell your parents because you're worried",
          "outcome": "responsible",
          "xp": 30,
          "storyOutcome": "You share your worry with your parents out of love. Your sibling gets support instead of falling further behind. 💙",
          "nextHook": "Though upset at first, your sibling later understands you helped them."
        },
        {
          "text": "Keep the secret as they asked",
          "outcome": "loyal",
          "xp": 12,
          "storyOutcome": "You stay loyal. But your sibling keeps falling behind, and the problem grows worse and worse. 💭",
          "nextHook": "Watching them struggle, you wonder if silence really helped them."
        }
      ],
      "realWorldTip": "Sometimes the most loyal thing is helping someone face a problem, not hiding it with them.",
      "reflectionPrompt": "When does keeping a secret stop being kind and start being harmful?"
    },
    {
      "id": "sc_109",
      "title": "The Group Project Leak",
      "setting": "online",
      "characters": [
        "classmates",
        "rival team"
      ],
      "ageRange": [
        8,
        12
      ],
      "difficulty": 3,
      "theme": "honesty",
      "growthDimensions": [
        "fairness",
        "responsibility"
      ],
      "culture": [
        "IN"
      ],
      "tags": [
        "honesty",
        "India",
        "online",
        "integrity"
      ],
      "storyText": "Someone shares another team's project ideas in your class group chat before the competition. Your team could use them to win. Everyone's excited. But these ideas were stolen from the rival team.",
      "choices": [
        {
          "text": "Refuse to use them and tell your team why",
          "outcome": "honest",
          "xp": 35,
          "storyOutcome": "You say, \"These aren't ours — let's win with our own ideas.\" Your team creates something original and proud. 🌟",
          "nextHook": "Your team's genuine work earns respect, win or lose."
        },
        {
          "text": "Report the leak to the teacher",
          "outcome": "responsible",
          "xp": 30,
          "storyOutcome": "You inform the teacher about the stolen ideas. Fairness is protected for the rival team. 💙",
          "nextHook": "The competition stays fair, thanks to your honesty."
        },
        {
          "text": "Use the ideas — they're already shared",
          "outcome": "self",
          "xp": 8,
          "storyOutcome": "Your team uses the stolen ideas and wins. But it wasn't really your work, and it isn't fair. 💭",
          "nextHook": "The hollow victory doesn't feel like a true win."
        }
      ],
      "realWorldTip": "Winning with stolen ideas isn't really winning. Original effort, even if it loses, is worth more.",
      "reflectionPrompt": "Would a win feel good if it came from someone else's stolen work?"
    },
    {
      "id": "sc_110",
      "title": "The Coach's Blind Spot",
      "setting": "school",
      "characters": [
        "coach",
        "benched teammate",
        "team"
      ],
      "ageRange": [
        8,
        12
      ],
      "difficulty": 3,
      "theme": "fairness",
      "growthDimensions": [
        "fairness",
        "empathy"
      ],
      "culture": [
        "US"
      ],
      "tags": [
        "fairness",
        "US",
        "sports",
        "courage"
      ],
      "storyText": "Your coach keeps benching a talented teammate because of an old grudge, playing weaker players instead. It's costing the team and hurting the benched player. Speaking up might anger the coach who controls your playing time too.",
      "choices": [
        {
          "text": "Respectfully share your observation with the coach",
          "outcome": "brave",
          "xp": 35,
          "storyOutcome": "You calmly tell the coach the teammate deserves a fair chance. The coach reflects and gives them a shot. 🌟",
          "nextHook": "Your courage helps a teammate AND makes the whole team stronger."
        },
        {
          "text": "Rally the team to support the benched player",
          "outcome": "wise",
          "xp": 30,
          "storyOutcome": "You quietly unite the team to encourage fair play. Together your voice is stronger and kinder. 💙",
          "nextHook": "The team's unity convinces the coach to be fairer."
        },
        {
          "text": "Stay quiet — you don't want to risk your spot",
          "outcome": "self",
          "xp": 12,
          "storyOutcome": "You protect your own position. The teammate keeps getting benched unfairly, and the team suffers. 💭",
          "nextHook": "Watching the unfairness continue, you wish you'd spoken up."
        }
      ],
      "realWorldTip": "Speaking up for fairness, even at personal risk, shows real courage and team spirit.",
      "reflectionPrompt": "When is it worth risking something yourself to stand up for what's fair?"
    },
    {
      "id": "sc_111",
      "title": "The Found Phone",
      "setting": "home",
      "characters": [
        "stranger",
        "parent"
      ],
      "ageRange": [
        8,
        12
      ],
      "difficulty": 3,
      "theme": "honesty",
      "growthDimensions": [
        "responsibility",
        "reasoning"
      ],
      "culture": [
        "global"
      ],
      "tags": [
        "honesty",
        "responsibility",
        "money",
        "integrity"
      ],
      "storyText": "You find an expensive phone on the sidewalk. It's unlocked and you can see who it belongs to. You've wanted a phone like this forever, and no one saw you pick it up. It would be so easy to keep.",
      "choices": [
        {
          "text": "Work with a parent to return it to the owner",
          "outcome": "honest",
          "xp": 35,
          "storyOutcome": "You and your parent contact the owner. Their relief and gratitude feel better than keeping it ever would. 🌟",
          "nextHook": "The grateful owner offers a small reward, but your honesty was its own reward."
        },
        {
          "text": "Hand it to a parent or police to return safely",
          "outcome": "responsible",
          "xp": 30,
          "storyOutcome": "You give it to a trusted adult to return properly. The right thing, done safely. 💙",
          "nextHook": "You feel proud knowing you did the honest thing."
        },
        {
          "text": "Keep it — you found it, after all",
          "outcome": "self",
          "xp": 8,
          "storyOutcome": "You keep the phone. But it's full of someone else's life, and using it never feels right. 💭",
          "nextHook": "Every time you use it, you remember it isn't truly yours."
        }
      ],
      "realWorldTip": "Returning something valuable you found, even when keeping it would be easy, is true integrity.",
      "reflectionPrompt": "How would you feel if you lost something precious and someone returned it?"
    },

  ],

};

// ═══════════════════════════════════════════════════════════════
// METADATA & HELPERS
// ═══════════════════════════════════════════════════════════════

const SCENARIO_THEMES = [
  'sharing', 'honesty', 'kindness', 'empathy',
  'fairness', 'responsibility', 'courage', 'self-regulation', 'gratitude', 'respect'
];

const GROWTH_DIMENSIONS = [
  'empathy', 'fairness', 'reasoning', 'self-regulation', 'responsibility', 'focus'
];

const CULTURES = ['global', 'IN', 'US'];

// Summary counts
const SCENARIO_COUNTS = Object.fromEntries(
  Object.entries(SPARKIDDO_SCENARIOS).map(([k, v]) => [k, v.length])
);
// console.log('Scenario counts:', SCENARIO_COUNTS);
// → { shareOrKeep: 27, truthOrFib: 27, emotionMatch: 26, kindnessQuest: 26, storyChoices: 25 }

// Export for browser use
if (typeof window !== 'undefined') {
  window.SPARKIDDO_SCENARIOS = SPARKIDDO_SCENARIOS;
  window.SCENARIO_THEMES = SCENARIO_THEMES;
  window.GROWTH_DIMENSIONS = GROWTH_DIMENSIONS;
  window.SCENARIO_COUNTS = SCENARIO_COUNTS;
}

// Export for Node/module use
if (typeof module !== 'undefined') {
  module.exports = { SPARKIDDO_SCENARIOS, SCENARIO_THEMES, GROWTH_DIMENSIONS, SCENARIO_COUNTS };
}
