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

  ],

  /* ═══════════════════════════════════════════════════════════════
     TRUTH OR FIB — 27 scenarios
     Game: truthorfib.html
  ═══════════════════════════════════════════════════════════════ */
  truthOrFib: [

    {
      id: 'tof_001',
      title: 'The Broken Vase',
      setting: 'home',
      characters: ['parent'],
      ageRange: [3, 8],
      difficulty: 1,
      theme: 'honesty',
      growthDimensions: ['fairness', 'reasoning'],
      culture: ['global'],
      tags: ['home', 'mistake', 'family'],
      situation: "You accidentally knocked over mum\'s favourite vase and it cracked. She comes in and asks what happened.",
      choices: [
        { text: 'Tell the truth: I knocked it over by accident', outcome: 'honest', xp: 30,
          response: "Accidents happen! Telling the truth immediately — that\'s courage. Mum\'s proud of you for that. 🌟" },
        { text: 'Say you don\'t know what happened', outcome: 'evasive', xp: 8,
          response: "That\'s not quite a lie, but not the truth either. It still leaves Mum confused. 💭" },
        { text: 'Blame the cat 🐱', outcome: 'lie', xp: 3,
          response: "Poor cat! They can\'t defend themselves. Lies often come out eventually — and then feel worse. 💭" }
      ],
      realWorldTip: 'The next time you make a mistake, tell a parent right away. Notice how they respond.',
      reflectionPrompt: 'Why do we sometimes feel scared to tell the truth?'
    },

    {
      id: 'tof_002',
      title: 'The Missing Homework',
      setting: 'school',
      characters: ['teacher'],
      ageRange: [5, 9],
      difficulty: 1,
      theme: 'honesty',
      growthDimensions: ['fairness'],
      culture: ['global'],
      tags: ['school', 'homework', 'teacher'],
      situation: "You forgot to do your homework. Your teacher is collecting it. You could say you forgot it at home.",
      choices: [
        { text: 'Tell the teacher I forgot to do it', outcome: 'honest', xp: 30,
          response: "Straight up honest! The teacher might be strict, but they respect truthful students. 🌟" },
        { text: 'Say I left it at home', outcome: 'lie', xp: 5,
          response: "A small lie, but it delays the truth. What happens tomorrow when you still don\'t have it? 💭" },
        { text: 'Say I was sick and couldn\'t finish', outcome: 'lie', xp: 3,
          response: "Now there are two things to hide. Lies stack up fast. 💭" }
      ],
      realWorldTip: 'Tell a parent about a time you were honest with a teacher, even when it was hard.',
      reflectionPrompt: 'Is it ever okay to lie to avoid getting in trouble?'
    },

    {
      id: 'tof_003',
      title: 'The Compliment Lie',
      setting: 'home',
      characters: ['relative'],
      ageRange: [6, 11],
      difficulty: 2,
      theme: 'honesty',
      growthDimensions: ['empathy', 'fairness'],
      culture: ['global'],
      tags: ['family', 'social lies', 'feelings'],
      situation: "Your aunt made a dish especially for you. It tastes awful. She asks with excitement: \'Do you like it?\'",
      choices: [
        { text: 'Say \'It\'s delicious!\' — don\'t hurt her feelings', outcome: 'white lie', xp: 15,
          response: "A kind lie. But she might make it again! Is there a kinder truth? 💭" },
        { text: 'Say \'Thank you so much for making this for me\'', outcome: 'redirect', xp: 25,
          response: "Truthful — you ARE grateful — and kind. You didn\'t lie AND didn\'t hurt feelings. Wise! 🌟" },
        { text: 'Say \'It\'s not really my favourite but thank you\'', outcome: 'honest kindly', xp: 30,
          response: "Gentle honesty — the hardest kind. She might appreciate knowing for next time! 🌟" }
      ],
      realWorldTip: 'Practice saying something true AND kind at the same time today.',
      reflectionPrompt: 'Is it ever okay to lie to protect someone\'s feelings?'
    },

    {
      id: 'tof_004',
      title: 'The Race Fall',
      setting: 'sports',
      characters: ['coach', 'teammates'],
      ageRange: [7, 12],
      difficulty: 2,
      theme: 'honesty',
      growthDimensions: ['fairness', 'reasoning'],
      culture: ['global'],
      tags: ['sports', 'competition', 'fairness'],
      situation: "During a running race, you tripped and took a shortcut by accident. You crossed the finish line first, but only because of the shortcut. The coach didn\'t see.",
      choices: [
        { text: 'Accept the win — nobody saw', outcome: 'dishonest', xp: 5,
          response: "Nobody saw... but YOU know. Can you fully enjoy a win that isn\'t quite real? 💭" },
        { text: 'Tell the coach what happened', outcome: 'honest', xp: 30,
          response: "Telling the truth when you could have gotten away with a win — that\'s real championship character. 🏆🌟" },
        { text: 'Say nothing but don\'t celebrate', outcome: 'guilty', xp: 15,
          response: "Staying quiet but not celebrating — you feel the discomfort. That feeling is your conscience talking. 💭" }
      ],
      realWorldTip: 'Think of a time you did something honest even when no one was watching.',
      reflectionPrompt: 'Does winning matter if you didn\'t win fairly?'
    },

    {
      id: 'tof_005',
      title: 'The Biryani That Wasn\'t Yours',
      setting: 'home',
      characters: ['sibling', 'parent'],
      ageRange: [5, 10],
      difficulty: 1,
      theme: 'honesty',
      growthDimensions: ['fairness'],
      culture: ['IN'],
      tags: ['food', 'family', 'sibling', 'blame'],
      situation: "Your sibling ate the last of the biryani that was saved for Dad. They ask you who ate it. Your sibling is looking at you nervously.",
      choices: [
        { text: 'Tell the truth — my sibling ate it', outcome: 'honest', xp: 25,
          response: "Honest. Your sibling has to face it, but at least Dad knows the truth. 🌟" },
        { text: 'Cover for your sibling — say you don\'t know', outcome: 'loyal lie', xp: 10,
          response: "Protecting them is kind. But Dad is left confused and someone got away with it. 💭" },
        { text: 'Tell your sibling to come clean themselves', outcome: 'wise', xp: 30,
          response: "You gave them the chance to be honest. That\'s more powerful than ratting them out. 💡" }
      ],
      realWorldTip: 'If you see someone do something wrong, try helping them make it right instead of covering for them.',
      reflectionPrompt: 'Is protecting a friend or sibling from getting in trouble the same as lying?'
    },

    {
      id: 'tof_006',
      title: 'The Online Age Limit',
      setting: 'online',
      characters: ['website', 'parent'],
      ageRange: [9, 12],
      difficulty: 2,
      theme: 'honesty',
      growthDimensions: ['reasoning', 'fairness'],
      culture: ['global'],
      tags: ['internet', 'age limit', 'rules'],
      situation: "You want to sign up for a gaming platform but it requires users to be 13. You\'re 10. You could easily type in a fake birth year.",
      choices: [
        { text: 'Type a fake age — everyone does it', outcome: 'dishonest', xp: 5,
          response: "Age limits exist for safety reasons. What might the platform contain that they\'re protecting you from? 💭" },
        { text: 'Ask a parent to help find an age-appropriate alternative', outcome: 'responsible', xp: 30,
          response: "Rules + asking for help = the smart play. Your parent can find something even better! 🌟" },
        { text: 'Skip it — follow the rule', outcome: 'honest', xp: 25,
          response: "Respecting rules even when nobody\'s checking — that\'s integrity. 💪" }
      ],
      realWorldTip: 'Ask a parent to help you find apps or games that are right for your age.',
      reflectionPrompt: 'Why do apps and websites have age limits?'
    },

    {
      id: 'tof_007',
      title: 'The Science Fair Credit',
      setting: 'school',
      characters: ['parent who helped too much', 'teacher'],
      ageRange: [8, 12],
      difficulty: 3,
      theme: 'honesty',
      growthDimensions: ['fairness', 'reasoning'],
      culture: ['global'],
      tags: ['school', 'honesty', 'parent help', 'grey zone'],
      situation: "Your parent helped you so much with your science project that it\'s mostly their work. The teacher is very impressed and asks: \'Did you do all of this yourself?\'",
      choices: [
        { text: 'Say \'Yes, I did it myself!\'', outcome: 'dishonest', xp: 5,
          response: "Tough spot — your parent meant well! But the teacher is grading YOUR learning. 💭" },
        { text: 'Say \'My parent helped me a lot with this one\'', outcome: 'honest', xp: 30,
          response: "That took courage! The teacher now knows the truth AND sees your honesty. 🌟" },
        { text: 'Say \'I had some help\' without explaining more', outcome: 'partial', xp: 20,
          response: "Partial truth. Better than a full lie — but leaves things unclear. 💭" }
      ],
      realWorldTip: 'Talk to a parent about the right amount of help for homework.',
      reflectionPrompt: 'When does getting help become someone else doing it for you?'
    },

    {
      id: 'tof_008',
      title: 'The Broken Promise',
      setting: 'school',
      characters: ['best friend'],
      ageRange: [6, 11],
      difficulty: 2,
      theme: 'honesty',
      growthDimensions: ['fairness', 'empathy'],
      culture: ['global'],
      tags: ['promise', 'friendship', 'trust'],
      situation: "You promised your friend you\'d come to their birthday party. Something better came up and now you don\'t want to go. They ask why you\'re not coming.",
      choices: [
        { text: 'Tell the truth: something else came up', outcome: 'honest', xp: 20,
          response: "Honest, but it hurts them. A promise is a big deal. Could you still show up briefly? 💭" },
        { text: 'Make up an excuse — say you\'re sick', outcome: 'lie', xp: 5,
          response: "The lie protects you but breaks real trust. What if they find out? 💭" },
        { text: 'Keep your promise and go — you said you would', outcome: 'committed', xp: 30,
          response: "A promise kept when you didn\'t feel like it — that\'s what makes you someone people trust. 🌟" }
      ],
      realWorldTip: 'Only make promises you know you can keep. And when you make one — keep it.',
      reflectionPrompt: 'How important is keeping your word?'
    },

    {
      id: 'tof_009',
      title: 'The Lost Library Book',
      setting: 'school',
      characters: ['librarian'],
      ageRange: [6, 10],
      difficulty: 1,
      theme: 'honesty',
      growthDimensions: ['fairness', 'responsibility'],
      culture: ['global'],
      tags: ['school', 'library', 'responsibility'],
      situation: "You lost a library book and it\'s overdue. The librarian asks where it is.",
      choices: [
        { text: 'Say I lost it and offer to pay for it', outcome: 'honest', xp: 30,
          response: "Honest AND taking responsibility. That\'s two great things at once. 🌟" },
        { text: 'Say it\'s at home and I\'ll bring it tomorrow', outcome: 'lie', xp: 5,
          response: "Buying time with a lie creates more problems. Tomorrow comes quickly! 💭" },
        { text: 'Tell the truth but ask for help finding a solution', outcome: 'honest', xp: 25,
          response: "Honest and asking for help — great combination. Adults love problem-solving with you. 🌟" }
      ],
      realWorldTip: 'When you make a mistake, focus on the solution, not the cover-up.',
      reflectionPrompt: 'What does it mean to take responsibility?'
    },

    {
      id: 'tof_010',
      title: 'The Test Score',
      setting: 'school',
      characters: ['parent'],
      ageRange: [7, 12],
      difficulty: 2,
      theme: 'honesty',
      growthDimensions: ['fairness', 'reasoning'],
      culture: ['IN'],
      tags: ['school', 'marks', 'parent', 'pressure'],
      situation: "You got low marks on a test. Your parents have high expectations and will be disappointed. They ask how the test went.",
      choices: [
        { text: 'Tell them the truth about my marks', outcome: 'honest', xp: 30,
          response: "Hard conversation ahead, but now your parents can actually help you improve. Brave. 🌟" },
        { text: 'Say \'it was okay\' and hope they don\'t find out', outcome: 'evasive', xp: 8,
          response: "Vague answers are temporary shields. The report card will tell all eventually. 💭" },
        { text: 'Tell them and ask for help with studying', outcome: 'honest + wise', xp: 35,
          response: "Truth PLUS a plan — that\'s the power move. You turned a bad mark into a growth moment. 🌟💡" }
      ],
      realWorldTip: 'Talk to a parent about a subject you find difficult. Ask for help before the next test.',
      reflectionPrompt: 'Is it harder to be honest with people whose opinion matters most to you?'
    },

    {
      id: 'tof_011',
      title: 'The Overheard Secret',
      setting: 'school',
      characters: ['friend', 'another classmate'],
      ageRange: [8, 12],
      difficulty: 3,
      theme: 'honesty',
      growthDimensions: ['empathy', 'fairness'],
      culture: ['global'],
      tags: ['gossip', 'secret', 'friendship', 'grey zone'],
      situation: "You overheard your friend saying something unkind about another classmate. The classmate asks you if your friend said anything about them.",
      choices: [
        { text: 'Tell them what you heard', outcome: 'honest', xp: 20,
          response: "Honest, but it might cause a fight. Is there a way to fix this without hurting both sides? 💭" },
        { text: 'Say \'I\'m not sure, let me talk to them first\'', outcome: 'wise', xp: 30,
          response: "Giving your friend a chance to make it right first — that\'s conflict-smart thinking. 🌟" },
        { text: 'Say you didn\'t hear anything', outcome: 'lie', xp: 5,
          response: "A lie to protect feelings. But the unkind words are still out there. 💭" }
      ],
      realWorldTip: 'If you hear something unkind about a friend, tell them privately before it spreads.',
      reflectionPrompt: 'Should you always tell people what others say about them?'
    },

    {
      id: 'tof_012',
      title: 'The Compliment That Wasn\'t True',
      setting: 'school',
      characters: ['classmate who worked hard'],
      ageRange: [7, 11],
      difficulty: 2,
      theme: 'honesty',
      growthDimensions: ['empathy', 'fairness'],
      culture: ['global'],
      tags: ['compliment', 'friendship', 'social'],
      situation: "Your classmate shows you a drawing they worked very hard on. Honestly, you don\'t think it\'s very good. They ask: \'Is it good?\'",
      choices: [
        { text: 'Say \'It\'s amazing!\' to be nice', outcome: 'white lie', xp: 10,
          response: "Kind but not honest. They might enter it in a competition and be embarrassed later. 💭" },
        { text: 'Say \'I can see you worked really hard on it!\'', outcome: 'kind truth', xp: 30,
          response: "True AND kind. You noticed their effort — that\'s what matters most! 🌟" },
        { text: 'Tell them exactly what you think', outcome: 'blunt', xp: 15,
          response: "Honest, but without kindness it can sting. Is there a gentler way to say it? 💭" }
      ],
      realWorldTip: 'Practice saying something true AND encouraging to someone today.',
      reflectionPrompt: 'What\'s the difference between being honest and being kind?'
    },

    {
      id: 'tof_013',
      title: 'The Stolen Pencil',
      setting: 'school',
      characters: ['teacher', 'classmate whose pencil was taken'],
      ageRange: [5, 9],
      difficulty: 1,
      theme: 'honesty',
      growthDimensions: ['fairness'],
      culture: ['global'],
      tags: ['school', 'stealing', 'property'],
      situation: "You accidentally took a classmate\'s pencil home and only realised later. They\'re looking for it. You could secretly put it back or admit what happened.",
      choices: [
        { text: 'Give it back and explain what happened 🖊️', outcome: 'honest', xp: 30,
          response: "Returning it AND explaining takes courage. Your classmate will trust you more, not less. 🌟" },
        { text: 'Secretly put it on their desk', outcome: 'quiet fix', xp: 20,
          response: "The problem is solved! But you don\'t get to feel the relief of honesty. Still kind though. 🤝" },
        { text: 'Keep it — they probably won\'t notice', outcome: 'dishonest', xp: 3,
          response: "They WILL notice. And then you\'ll have to explain anyway, but with a bigger problem. 💭" }
      ],
      realWorldTip: 'Return or report anything that isn\'t yours — even small things.',
      reflectionPrompt: 'Why is keeping something that isn\'t yours wrong even if it was an accident?'
    },

    {
      id: 'tof_014',
      title: 'The Social Media Post',
      setting: 'online',
      characters: ['classmate', 'parent'],
      ageRange: [10, 12],
      difficulty: 3,
      theme: 'honesty',
      growthDimensions: ['reasoning', 'fairness'],
      culture: ['global'],
      tags: ['social media', 'online', 'reputation', 'grey zone'],
      situation: "A classmate posts something online that is half true and half exaggerated, making another classmate look bad. People are believing it. Do you correct it publicly?",
      choices: [
        { text: 'Comment publicly: that\'s not entirely true', outcome: 'honest', xp: 25,
          response: "Brave! Standing up for truth online when everyone else is silent — that\'s digital courage. 🌟" },
        { text: 'Tell the classmate being talked about privately', outcome: 'wise', xp: 30,
          response: "They deserve to know! And you kept things from escalating publicly. Smart. 💡" },
        { text: 'Tell an adult — it could be cyberbullying', outcome: 'responsible', xp: 25,
          response: "Getting a grown-up involved when online stuff feels wrong — always the right call. ✅" }
      ],
      realWorldTip: 'Before sharing or believing something online, ask: is this really true? Ask a parent.',
      reflectionPrompt: 'Who is responsible when something false spreads online?'
    },

    {
      id: 'tof_015',
      title: 'The Accidental Lie That Grew',
      setting: 'school',
      characters: ['teacher', 'classmates'],
      ageRange: [7, 11],
      difficulty: 2,
      theme: 'honesty',
      growthDimensions: ['reasoning', 'fairness'],
      culture: ['global'],
      tags: ['lie that grew', 'school', 'snowball'],
      situation: "You told one small lie about missing a school event. Now the story has grown and your teacher is planning a special get-well card for your fake illness.",
      choices: [
        { text: 'Come clean now — before it gets worse', outcome: 'honest', xp: 30,
          response: "Stopping the snowball before it becomes an avalanche — brave and right. 🌟" },
        { text: 'Go along with it — it\'s too far to turn back', outcome: 'deeper lie', xp: 3,
          response: "Lies that grow usually collapse eventually. The longer this goes, the harder the fall. 💭" },
        { text: 'Quietly fix it without making a big deal', outcome: 'partial', xp: 20,
          response: "Trying to fix it quietly — still better than letting it grow. 🤝" }
      ],
      realWorldTip: 'If you\'ve told a lie that\'s grown, tell a parent today. They can help you fix it.',
      reflectionPrompt: 'Why do small lies sometimes turn into big problems?'
    },

    {
      id: 'tof_016',
      title: 'The Puja Room Mishap',
      setting: 'home',
      characters: ['grandparent'],
      ageRange: [5, 10],
      difficulty: 1,
      theme: 'honesty',
      growthDimensions: ['fairness', 'respect'],
      culture: ['IN'],
      tags: ['home', 'grandparent', 'puja', 'accident'],
      situation: "You were playing near the puja room and accidentally knocked over an oil lamp (diya). Nothing caught fire, but the carpet is stained. Your grandparent asks what happened.",
      choices: [
        { text: 'Tell them exactly what happened 🪔', outcome: 'honest', xp: 30,
          response: "Accidents happen — honesty makes them easier to fix. Your grandparent will appreciate the truth. 🌟" },
        { text: 'Say you don\'t know how the lamp fell', outcome: 'evasive', xp: 8,
          response: "You were right there — they probably know. Telling the truth would have been easier. 💭" },
        { text: 'Try to clean it up before anyone sees', outcome: 'hiding', xp: 10,
          response: "Fixing the problem is good! But telling them what happened matters too. 💭" }
      ],
      realWorldTip: 'Tell a grandparent or elder about a mistake you made and how you handled it.',
      reflectionPrompt: 'Does it matter more WHO you tell the truth to?'
    },

    {
      id: 'tof_017',
      title: 'The Extra Screen Time',
      setting: 'home',
      characters: ['parent'],
      ageRange: [6, 11],
      difficulty: 2,
      theme: 'honesty',
      growthDimensions: ['self-regulation', 'fairness'],
      culture: ['global'],
      tags: ['screen time', 'rules', 'parent', 'trust'],
      situation: "You played on your tablet for an extra 30 minutes after your screen time ended, while your parents were busy. They ask: \'Did you follow the screen time rule today?\'",
      choices: [
        { text: 'Say yes — they\'ll never check', outcome: 'lie', xp: 5,
          response: "The app history tells all. And breaking trust is much worse than extra screen time. 💭" },
        { text: 'Admit you went over and apologise', outcome: 'honest', xp: 30,
          response: "Owning up without being caught — that\'s real trustworthiness. Your parents will remember this. 🌟" },
        { text: 'Say \'mostly\' and change the subject', outcome: 'evasive', xp: 10,
          response: "\'Mostly\' is a soft lie. They sense something\'s off. 💭" }
      ],
      realWorldTip: 'Set a timer for your screen time this week and tell a parent when you\'ve used it all.',
      reflectionPrompt: 'Why does breaking small rules matter even when no one sees?'
    },

    {
      id: 'tof_018',
      title: 'The Cricket Score',
      setting: 'sports',
      characters: ['opposing team captain'],
      ageRange: [7, 12],
      difficulty: 2,
      theme: 'honesty',
      growthDimensions: ['fairness', 'reasoning'],
      culture: ['IN'],
      tags: ['cricket', 'sports', 'competition', 'cheating'],
      situation: "Playing a street cricket match, you run between the wickets and you KNOW you were run out — but the fielding team didn\'t appeal in time and the umpire says \'not out\'.",
      choices: [
        { text: 'Walk — I know I was out', outcome: 'honest', xp: 35,
          response: "Walking when you know you\'re out — the rarest and greatest sporting honour. Legends do this. 🏏🌟" },
        { text: 'Stay — the umpire said not out, that\'s the rule', outcome: 'technical', xp: 15,
          response: "Technically correct. But you know. Does it feel like a clean innings? 💭" },
        { text: 'Argue about it openly to confuse everyone', outcome: 'dishonest', xp: 3,
          response: "Deliberately confusing others to benefit yourself — that\'s not cricket, literally. 💭" }
      ],
      realWorldTip: 'In your next game, call yourself out even if no one else does.',
      reflectionPrompt: 'Can you be honest in sports even when winning is at stake?'
    },

    {
      id: 'tof_019',
      title: 'The Copied Drawing',
      setting: 'school',
      characters: ['teacher', 'original artist'],
      ageRange: [7, 11],
      difficulty: 2,
      theme: 'honesty',
      growthDimensions: ['fairness', 'reasoning'],
      culture: ['global'],
      tags: ['art', 'copying', 'school', 'credit'],
      situation: "You copied a drawing from online for an art competition. It looks amazing. The teacher is about to announce you as the winner.",
      choices: [
        { text: 'Accept the prize — no one knows', outcome: 'dishonest', xp: 3,
          response: "You\'d know. And online images often get traced back. The prize would feel hollow. 💭" },
        { text: 'Tell the teacher before they announce it', outcome: 'honest', xp: 35,
          response: "Stopping an undeserved prize — the bravest thing. The teacher will NEVER forget this honesty. 🌟" },
        { text: 'Accept it but decide never to copy again', outcome: 'partial', xp: 10,
          response: "A quiet decision to do better — good start. But what about this time? 💭" }
      ],
      realWorldTip: 'When you use someone else\'s idea or work, always say where it came from.',
      reflectionPrompt: 'What\'s the difference between being inspired by something and copying it?'
    },

    {
      id: 'tof_020',
      title: 'The Allergy Announcement',
      setting: 'school',
      characters: ['new friend'],
      ageRange: [6, 10],
      difficulty: 1,
      theme: 'honesty',
      growthDimensions: ['fairness', 'reasoning'],
      culture: ['global'],
      tags: ['health', 'honesty', 'food allergy'],
      situation: "You have a food allergy but you\'re embarrassed about it. At a birthday party, someone offers you food that you\'re allergic to. You don\'t want to seem different.",
      choices: [
        { text: 'Eat it anyway — it\'s just this once', outcome: 'dangerous', xp: 0,
          response: "Oh no — allergies can be very serious! Please always tell someone. Your health is more important than anything. 🚨" },
        { text: 'Say \'No thank you\' without explaining', outcome: 'safe but private', xp: 15,
          response: "Safe! But sharing your allergy with a friend actually helps them look out for you. 💭" },
        { text: 'Tell them honestly about the allergy', outcome: 'honest + safe', xp: 30,
          response: "Honest AND safe. Good friends want to know so they can care for you. 🌟" }
      ],
      realWorldTip: 'If you have any allergy or health condition, always tell a trusted adult and friend.',
      reflectionPrompt: 'Why is it important to be honest about things that affect your health?'
    },

    {
      id: 'tof_021',
      title: 'The Holi Colour Mishap',
      setting: 'festival',
      characters: ['neighbour', 'parent'],
      ageRange: [5, 9],
      difficulty: 1,
      theme: 'honesty',
      growthDimensions: ['fairness'],
      culture: ['IN'],
      tags: ['holi', 'festival', 'accident', 'property'],
      situation: "During Holi, you accidentally splashed colour on a neighbour\'s freshly washed car. They don\'t know it was you.",
      choices: [
        { text: 'Tell the neighbour and apologise', outcome: 'honest', xp: 30,
          response: "Admitting an accident to a grown-up neighbour takes real courage. They\'ll appreciate it. 🌟" },
        { text: 'Walk away quickly — it was an accident', outcome: 'avoiding', xp: 5,
          response: "Accidents don\'t need to be secrets. Saying sorry clears the air. 💭" },
        { text: 'Tell your parent and let them handle it', outcome: 'responsible', xp: 25,
          response: "Getting a grown-up involved is smart and honest. Good call. ✅" }
      ],
      realWorldTip: 'The next time you accidentally hurt someone or break something, say sorry right away.',
      reflectionPrompt: 'Does an accident need an apology?'
    },

    {
      id: 'tof_022',
      title: 'The Friend\'s Bad Idea',
      setting: 'school',
      characters: ['best friend', 'teacher'],
      ageRange: [7, 12],
      difficulty: 3,
      theme: 'honesty',
      growthDimensions: ['fairness', 'reasoning'],
      culture: ['global'],
      tags: ['peer pressure', 'friendship', 'courage', 'grey zone'],
      situation: "Your best friend wants to pull a prank on a classmate they don\'t like. You know it will hurt that classmate\'s feelings. Your friend is excited about it.",
      choices: [
        { text: 'Tell your friend honestly that it\'s a bad idea', outcome: 'honest + brave', xp: 30,
          response: "Saying no to your best friend when they\'re wrong — that\'s the hardest honesty. Real friendship looks like this. 🌟" },
        { text: 'Go along with it to avoid conflict', outcome: 'peer pressure', xp: 5,
          response: "Keeping the peace at someone else\'s expense — that\'s not friendship, it\'s fear. 💭" },
        { text: 'Tell a teacher before it happens', outcome: 'protective', xp: 25,
          response: "Protecting the classmate first — brave, and the right thing for everyone. 💪" }
      ],
      realWorldTip: 'If a friend is about to do something that could hurt someone, say so — even if it\'s uncomfortable.',
      reflectionPrompt: 'Is it ever hard to be honest with your closest friends?'
    },

    {
      id: 'tof_023',
      title: 'The Overheard Parents',
      setting: 'home',
      characters: ['sibling', 'parent'],
      ageRange: [8, 12],
      difficulty: 3,
      theme: 'honesty',
      growthDimensions: ['empathy', 'fairness'],
      culture: ['global'],
      tags: ['family', 'overhearing', 'privacy', 'grey zone'],
      situation: "You accidentally overheard your parents discussing something private (a family money problem). Your sibling asks if everything is okay at home.",
      choices: [
        { text: 'Tell your sibling what you heard', outcome: 'oversharing', xp: 10,
          response: "Sharing adult worries with younger siblings can scare them unnecessarily. 💭" },
        { text: 'Say \'I think things are fine\' to protect them', outcome: 'protective', xp: 20,
          response: "Protecting them from adult worries — thoughtful. Though \'I think\' keeps it honest. 🤝" },
        { text: 'Talk to a parent about what you heard', outcome: 'wise', xp: 30,
          response: "Going to the source — adult and wise. They can explain at the right level. 🌟" }
      ],
      realWorldTip: 'If you hear something worrying at home, talk to a trusted adult about it.',
      reflectionPrompt: 'Is sharing a secret always the honest thing to do?'
    },

    {
      id: 'tof_024',
      title: 'The Exam Cheat Sheet',
      setting: 'school',
      characters: ['classmate', 'teacher'],
      ageRange: [9, 12],
      difficulty: 3,
      theme: 'honesty',
      growthDimensions: ['fairness', 'reasoning'],
      culture: ['IN'],
      tags: ['exam', 'cheating', 'peer pressure', 'grey zone'],
      situation: "A classmate passes you a cheat sheet during an important exam. The teacher hasn\'t noticed yet. You could use it or push it away.",
      choices: [
        { text: 'Push it away without making a scene', outcome: 'honest', xp: 25,
          response: "Quiet courage. You didn\'t need to announce it — you just did the right thing. 🌟" },
        { text: 'Use it — everyone else probably does', outcome: 'dishonest', xp: 3,
          response: "Not everyone does. And if caught, both of you face serious consequences. 💭" },
        { text: 'Tell the teacher after the exam', outcome: 'honest + delayed', xp: 20,
          response: "You waited, but you still told the truth. Not easy — but right. 🤝" }
      ],
      realWorldTip: 'Talk to a parent or teacher about how to prepare better for the next test.',
      reflectionPrompt: 'Does cheating hurt anyone besides yourself?'
    },

    {
      id: 'tof_025',
      title: 'The App Purchase',
      setting: 'home',
      characters: ['parent'],
      ageRange: [9, 12],
      difficulty: 2,
      theme: 'honesty',
      growthDimensions: ['fairness', 'reasoning'],
      culture: ['global'],
      tags: ['money', 'online purchase', 'parent', 'trust'],
      situation: "You accidentally made an in-app purchase on your parent\'s phone. The money has already been charged. Your parent hasn\'t noticed yet.",
      choices: [
        { text: 'Tell them immediately and explain it was an accident', outcome: 'honest', xp: 30,
          response: "Telling before they notice — that\'s next-level trustworthiness. They might be frustrated but they\'ll trust you more. 🌟" },
        { text: 'Wait and see if they notice', outcome: 'hoping', xp: 8,
          response: "They WILL notice. And finding out you knew all along makes it much worse. 💭" },
        { text: 'Delete the app so there\'s no trace', outcome: 'hiding', xp: 3,
          response: "Bank statements exist. The truth always comes out — better from you first. 💭" }
      ],
      realWorldTip: 'Always ask a parent before making any purchase online, even a small one.',
      reflectionPrompt: 'Is waiting to see if someone notices different from hiding the truth?'
    },

    {
      id: 'tof_026',
      title: 'The Friend\'s Secret',
      setting: 'school',
      characters: ['friend who told you a secret', 'another classmate'],
      ageRange: [7, 11],
      difficulty: 3,
      theme: 'honesty',
      growthDimensions: ['empathy', 'fairness'],
      culture: ['global'],
      tags: ['secret', 'friendship', 'trust', 'grey zone'],
      situation: "Your friend told you in confidence that they have a crush on someone. That someone directly asks you: \'Does anyone like me?\'",
      choices: [
        { text: 'Keep the secret — say \'I don\'t know\'', outcome: 'loyal', xp: 25,
          response: "Keeping someone\'s secret is a form of honesty too — honest to your friend\'s trust. 🌟" },
        { text: 'Tell the truth — you asked me directly', outcome: 'blunt', xp: 10,
          response: "Direct honesty broke your friend\'s trust. Not all truths are ours to tell. 💭" },
        { text: 'Say \'That\'s something to ask people yourself\'', outcome: 'wise redirect', xp: 30,
          response: "Didn\'t lie AND didn\'t betray your friend. That\'s masterful. 🌟💡" }
      ],
      realWorldTip: 'Keep the secrets people trust you with. Only share them if someone could be hurt.',
      reflectionPrompt: 'When should you break a secret?'
    },

    {
      id: 'tof_027',
      title: 'The Survey Answer',
      setting: 'school',
      characters: ['teacher'],
      ageRange: [8, 12],
      difficulty: 2,
      theme: 'honesty',
      growthDimensions: ['fairness', 'reasoning'],
      culture: ['global'],
      tags: ['school', 'feedback', 'survey', 'truth'],
      situation: "Your teacher asks everyone to fill in a feedback form about the class. Some questions ask if the teaching is clear. Honestly, you\'ve been confused for weeks but you don\'t want to be rude.",
      choices: [
        { text: 'Write honestly — I\'ve been confused about some things', outcome: 'honest', xp: 30,
          response: "Honest feedback helps the teacher help everyone including you. Brave and kind! 🌟" },
        { text: 'Write that everything is great to make them happy', outcome: 'people pleasing', xp: 8,
          response: "They won\'t know to help you if you say everything\'s fine. 💭" },
        { text: 'Be specific and polite: write what was hard', outcome: 'honest + kind', xp: 35,
          response: "Specific, honest, and kind. The teacher can actually USE this feedback. 🌟💡" }
      ],
      realWorldTip: 'Give honest feedback to someone this week — a teacher, parent, or friend.',
      reflectionPrompt: 'Can honest feedback be a form of kindness?'
    },

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
      emotion: 'disappointed',
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
      correctEmotion: '😢',
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
      emotion: 'frustrated/angry',
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
      emotion: 'frustrated + empathetic',
      faceOptions: ['😤😢', '🤩', '😴', '😂'],
      correctEmotion: '😤😢',
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
      emotion: 'worried/love',
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
      emotion: 'scared but wanting to help',
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
      emotion: 'joyful/grateful',
      faceOptions: ['😊', '😔', '😤', '😰'],
      correctEmotion: '😊',
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
      emotion: 'sad but grateful',
      faceOptions: ['😢', '😄', '😤', '😲'],
      correctEmotion: '😢',
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
      emotion: 'proud (child + parent)',
      faceOptions: ['🥹😤', '😄😄', '😴', '😢😤'],
      correctEmotion: '🥹😤',
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
      emotion: 'child: impatient; parent: calm but focused',
      faceOptions: ['😤😌', '😄😄', '😢😴', '😲😤'],
      correctEmotion: '😤😌',
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
      emotion: 'happy but lonely',
      faceOptions: ['😊😢', '😄😤', '😴😲', '😂😡'],
      correctEmotion: '😊😢',
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
      emotion: 'touched/curious/happy',
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
      emotion: 'worried/sad/hopeful',
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
      emotion: 'bittersweet joy',
      faceOptions: ['😊😢', '😤😄', '😴😲', '😡😂'],
      correctEmotion: '😊😢',
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
      emotion: 'belonging/joy',
      faceOptions: ['😄', '😔', '😤', '😨'],
      correctEmotion: '😄',
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
      emotion: 'anxious',
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
      emotion: 'warmth/gratitude',
      faceOptions: ['😊', '😤', '😔', '😲'],
      correctEmotion: '😊',
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
      emotion: 'bittersweet/excited',
      faceOptions: ['😊😢', '😤😄', '😴😔', '🤩😤'],
      correctEmotion: '😊😢',
      response: "Excited for what\'s coming AND sad to leave behind what they love. That\'s how the biggest chapters end. 💙✨",
      followUp: "Think about something you\'ve left behind that you still miss.",
      realWorldTip: 'Write a thank-you note to a teacher who made a difference for you.',
      reflectionPrompt: 'Is it possible to be excited and scared about the same thing?'
    },

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
