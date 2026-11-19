/**
 * EPISODE 4: THE EVE OF THE ECLIPSE (4 FULL BRANCHING SUB-EPISODES)
 * =================================================================
 * 4A: Starlight & Cider (Romance / Tsundere -> Endings 1 & 2)
 * 4B: The Six-Star Circle (Academy Alliance -> Ending 3)
 * 4C: Secrets of the Silver Cipher (Shadow / Severo -> Ending 4)
 * 4D: The Weight of the Crest (Lord Lucio & Honor -> Ending 5)
 */
window.VN_BUILD([
  // ============================================================================
  // EPISODE 4A: STARLIGHT & CIDER (ROMANCE / TSUNDERE ROUTE)
  // ============================================================================
  {
    id: 'e4a_1', chapter: 4, objective: 'ep4_romance', music: 'romance', bg: 'assets/bg_tower.jpg', chars: [], active: 'draconia', particles: 'sparkles', speaker: 'draconia', draconiaExpr: 'normal',
    text: 'High atop the Astronomy Tower, frost glitters along the brass telescopes and the winter sky opens like black velvet sprinkled with diamonds. I wrap my cloak tighter, breathing slowly in the crisp air—until familiar hurried footsteps echo up the spiral stairs.',
    next: 'e4a_2',
  },
  {
    id: 'e4a_2', chapter: 4, objective: 'ep4_romance', music: 'romance', bg: 'assets/bg_tower.jpg', chars: ['harry'], active: 'harry', mood: 'blush', speaker: 'harry', draconiaExpr: 'happy',
    text: 'Harry emerges onto the balcony balancing two steaming mugs of spiced apple cider. "Thought I’d find you up here," he says softly, handing me a mug. "One look at the Infirmary ceiling and I knew you needed fresh air."',
    next: 'e4a_3',
  },
  {
    id: 'e4a_3', chapter: 4, objective: 'ep4_romance', music: 'romance', bg: 'assets/bg_tower.jpg', chars: ['harry'], active: 'draconia', speaker: 'draconia', draconiaExpr: 'happy',
    text: 'The warm ceramic thaws my frozen fingers instantly. "Spiced cider with cinnamon—how on earth did you know that’s my favorite?" Harry grins sheepishly. "Ronn says I pay way too much attention whenever you’re in the Great Hall."',
    next: 'e4a_4',
  },
  {
    id: 'e4a_4', chapter: 4, objective: 'ep4_romance', music: 'romance', bg: 'assets/bg_tower.jpg', chars: ['harry'], active: 'harry', speaker: 'harry', draconiaExpr: 'sad',
    text: 'We lean side-by-side against the stone railing overlooking the snowy grounds. After a moment, Harry’s voice drops gently. "Back in the Forest... what Belatrix said about another timeline where we lost. It shook you, didn’t it?"',
    next: 'e4a_5',
  },
  {
    id: 'e4a_5', chapter: 4, objective: 'ep4_romance', music: 'romance', bg: 'assets/bg_tower.jpg', chars: ['harry'], active: 'draconia', speaker: 'draconia', draconiaExpr: 'sad',
    text: 'I stare down at the swirling cinnamon in my mug. "Yes. Not because I’m afraid of Lord Thom... I’m terrified of a world where I stay behind my cold mask forever, and you aren’t in it, Harry."',
    next: 'e4a_6',
  },
  {
    id: 'e4a_6', chapter: 4, objective: 'ep4_romance', music: 'romance', bg: 'assets/bg_tower.jpg', chars: ['harry'], active: 'harry', mood: 'blush', sfx: 'sparkle', speaker: 'harry', draconiaExpr: 'surprised',
    text: 'Harry sets his mug down and turns fully toward me. From inside his coat, he draws out a delicate new silver-emerald hairpin shaped like two intertwined laurel leaves. "Your old clasp snapped when you deflected Belatrix’s hex. I asked Professor Pamona and Lune to help me enchant a new one for you."',
    next: 'e4a_7',
  },
  {
    id: 'e4a_7', chapter: 4, objective: 'ep4_romance', music: 'romance', bg: 'assets/bg_tower.jpg', chars: ['harry'], active: 'harry', mood: 'blush', sfx: 'heartbeat', speaker: 'harry', draconiaExpr: 'blush',
    text: 'Slowly, he lifts his hand and tucks a loose strand of my platinum hair behind my ear, sliding the emerald pin gently into place. His palm lingers for a breathless second against my cheek. "I’m not going anywhere, Draconia. Forget house rivalries, forget rumors—I’ve fallen completely in love with you."',
    next: 'e4a_choice',
  },
  {
    id: 'e4a_choice', chapter: 4, objective: 'ep4_romance', music: 'romance', bg: 'assets/bg_tower.jpg', chars: ['harry'], active: 'draconia', speaker: 'draconia', draconiaExpr: 'blush',
    text: 'My whole chest feels like it’s glowing brighter than my mother’s locket. Under the winter stars, the boy I’ve secretly loved all year is waiting for my answer.',
    choices: [
      {
        text: 'Step into his warmth and rest my hand over his: "No more walls, Harry. I love you too—and tomorrow night, I want the whole Academy to see us together."',
        effects: { affection: 25, sincerity: 25 },
        setFlags: { openConfession: true },
        next: 'e4a_8a',
      },
      {
        text: 'Turn bright crimson and grip his collar lightly: "I-Idiot! Of course I’m in love with you—who else would I risk getting hexed for?! Just don’t get cocky about it!"',
        effects: { affection: 25, courage: 10 },
        setFlags: { tsundereConfession: true },
        next: 'e4a_8b',
      },
    ],
  },
  {
    id: 'e4a_8a', chapter: 4, objective: 'ep4_romance', music: 'romance', bg: 'assets/bg_tower.jpg', chars: ['harry'], active: 'harry', mood: 'blush', sfx: 'heartbeat', speaker: 'harry', draconiaExpr: 'happy',
    text: 'Harry’s eyes shine with pure, overwhelming joy. He pulls me gently against his chest, his chin resting softly atop my silver hair as the warm winter stars wheel silently above us. For the first time in my life, I don’t feel cold at all.',
    next: 'e4a_9',
  },
  {
    id: 'e4a_8b', chapter: 4, objective: 'ep4_romance', music: 'romance', bg: 'assets/bg_tower.jpg', chars: ['harry'], active: 'harry', mood: 'blush', sfx: 'heartbeat', speaker: 'harry', draconiaExpr: 'happy',
    text: 'Harry bursts out laughing—a breathless, helplessly fond laugh—and pulls me close before I can hide my blushing face. "Never change, Draconia. Honestly, I wouldn’t trade that fierce blush for anything in the world."',
    next: 'e4a_9',
  },
  {
    id: 'e4a_9', chapter: 4, objective: 'ep4_romance', music: 'danger', bg: 'assets/bg_tower.jpg', chars: ['harry'], active: 'narrator', fx: ['shake', 'flash-violet'], sfx: 'bell', speaker: 'narrator', draconiaExpr: 'surprised',
    text: 'CLANG! CLANG! CLANG! The midnight alarm bell shatters the quiet night! Far below across the snowy ravine, violet flames erupt along the ancient arches of the Stone Bridge—Seal III!',
    next: 'e4a_10',
  },
  {
    id: 'e4a_10', chapter: 4, objective: 'ep4_romance', music: 'danger', bg: 'assets/bg_bridge.png', chars: ['barti'], active: 'barti', particles: 'snow', sfx: 'wind', speaker: 'barti', draconiaExpr: 'angry',
    text: 'Harry and I sprint onto the wind-whipped Stone Bridge, wands already blazing! Through the blowing sleet, Barti stands atop the central keystone carving violet runes into the stone while Piter crouches behind a barrier.',
    next: 'e4a_11',
  },
  {
    id: 'e4a_11', chapter: 4, objective: 'ep4_romance', music: 'danger', bg: 'assets/bg_bridge.png', chars: ['barti'], active: 'barti', fx: ['shake', 'flash-violet'], sfx: 'dark_magic', draconiaExpr: 'angry', speaker: 'barti',
    duel: { enemy: 'barti', ally: 'harry', hp: 120 },
    text: 'Barti spins toward us with a lethal grin: "How romantic! The proud heiress and her little hero arrived just in time to watch Seal III fall! Let’s see how your precious bond holds against my Rift Spears!"',
    next: 'e4a_12',
  },
  {
    id: 'e4a_12', chapter: 4, objective: 'ep4_romance', music: 'serious', bg: 'assets/bg_bridge.png', chars: ['lucio'], active: 'lucio', fx: ['flash-emerald'], sfx: 'magic', speaker: 'lucio', draconiaExpr: 'surprised',
    text: 'As Barti staggers backward and vanishes in a burst of black smoke, heavy boots crunch across the snow behind us. Lord Lucio steps forward beside Professor Minerba—having witnessed Harry and me fighting back-to-back in seamless unison.',
    next: 'e4a_13',
  },
  {
    id: 'e4a_13', chapter: 4, objective: 'ep4_romance', music: 'romance', bg: 'assets/bg_bridge.png', chars: ['lucio'], active: 'lucio', speaker: 'lucio', draconiaExpr: 'happy',
    text: 'Lord Lucio inspects the scorched bridge, then looks quietly from my new emerald hairpin to Harry’s protective stance beside me. "Your footwork was flawless, Draconia. And Harry... though your hair remains a crime against etiquette, you have courage worthy of standing beside my daughter."',
    next: 'e4a_14',
  },
  {
    id: 'e4a_14', chapter: 4, objective: 'ep5_climax', music: 'serious', bg: 'assets/bg_bridge.png', chars: ['harry'], active: 'harry', speaker: 'harry', draconiaExpr: 'normal',
    text: 'We held the Bridge—yet Barti’s runes already scarred the keystone. Tomorrow night, when the Winter Ball Eclipse peaks, Lord Thom will force the Mirror Vault open himself. Harry squeezes my hand tightly: "Tomorrow night we finish this together—and then we claim our waltz."',
    next: 'e5_rom_1',
  },

  // ============================================================================
  // EPISODE 4B: THE SIX-STAR CIRCLE (ACADEMY ALLIANCE ROUTE)
  // ============================================================================
  {
    id: 'e4b_1', chapter: 4, objective: 'ep4_alliance', music: 'normal', bg: 'assets/bg_greenhouse.png', chars: ['pamona'], active: 'pamona', speaker: 'pamona', draconiaExpr: 'normal',
    text: 'Refusing to face tomorrow’s Eclipse divided by old house rivalries, I send word through the castle—and within twenty minutes, Greenhouse Four is glowing like a warm lantern against the snow. Professor Pamona beams as we gather around the worktables.',
    next: 'e4b_2',
  },
  {
    id: 'e4b_2', chapter: 4, objective: 'ep4_alliance', music: 'normal', bg: 'assets/bg_greenhouse.png', chars: ['nevile'], active: 'nevile', speaker: 'nevile', draconiaExpr: 'happy',
    text: 'Nevile carefully harvests six silver-veined Moon-Fern leaves, handing the brightest one straight to me. "I never imagined preparing battle-wards beside Draconia... honestly, thank you for trusting us. My hands aren’t even shaking anymore!"',
    next: 'e4b_3',
  },
  {
    id: 'e4b_3', chapter: 4, objective: 'ep4_alliance', music: 'normal', bg: 'assets/bg_greenhouse.png', chars: ['ronn'], active: 'ronn', speaker: 'ronn', draconiaExpr: 'happy',
    text: 'Ronn leans against a potting bench chewing a peppermint toad. "Wait a second—Draconia just thanked Nevile without adding a single sarcastic footnote! Hermiona, check the sky, I think the moon just turned green!"',
    next: 'e4b_4',
  },
  {
    id: 'e4b_4', chapter: 4, objective: 'ep4_alliance', music: 'normal', bg: 'assets/bg_greenhouse.png', chars: ['hermiona'], active: 'hermiona', speaker: 'hermiona', draconiaExpr: 'happy',
    text: 'Before I can stop myself, a real, bright laugh escapes me—not a practiced aristocratic chuckle, a genuine laugh! Even Ronn freezes blinking, and Hermiona smiles warmly. "Honestly, Draconia, that smile suits you ten times better than your hallway glare."',
    next: 'e4b_5',
  },
  {
    id: 'e4b_5', chapter: 4, objective: 'ep4_alliance', music: 'romance', bg: 'assets/bg_greenhouse.png', chars: ['harry'], active: 'harry', mood: 'blush', speaker: 'harry', draconiaExpr: 'blush',
    text: 'Beside the glass door, Harry is watching me with such soft, unguarded warmth that my cheeks instantly heat up. "Told you she wasn’t carved out of marble," he murmurs quietly, nudging my elbow as he hands me a cup of hot tea.',
    next: 'e4b_6',
  },
  {
    id: 'e4b_6', chapter: 4, objective: 'ep4_alliance', music: 'mystery', bg: 'assets/bg_library.png', chars: ['lune'], active: 'lune', speaker: 'lune', draconiaExpr: 'surprised',
    text: 'Up in the Library, we spread Hermiona’s castle blueprint across the floor. Lune traces six glowing star-points around the Mirror Vault. "Your mother’s locket wasn’t built to carry the burden alone, Draconia. When six different hearts channel through one circle, even a fractured Eclipse Seal cannot break."',
    next: 'e4b_7',
  },
  {
    id: 'e4b_7', chapter: 4, objective: 'ep4_alliance', music: 'normal', bg: 'assets/bg_library.png', chars: ['hermiona'], active: 'draconia', speaker: 'draconia', draconiaExpr: 'happy',
    text: 'Looking around the candlelit circle—Harry, Hermiona, Ronn, Lune, and Nevile—I realize something my father’s etiquette lessons never taught me. For the first time since I arrived at this Academy, I actually have friends.',
    next: 'e4b_choice',
  },
  {
    id: 'e4b_choice', chapter: 4, objective: 'ep4_alliance', music: 'normal', bg: 'assets/bg_library.png', chars: ['harry'], active: 'draconia', speaker: 'draconia', draconiaExpr: 'happy',
    text: 'Everyone looks to me to seal our pact before patrol begins. What do I tell them?',
    choices: [
      {
        text: 'Raise my wand over the blueprint: "Six wands, no rival houses—tonight and tomorrow, we protect this Academy as equals!"',
        effects: { courage: 20, sincerity: 15, affection: 10 },
        next: 'e4b_8a',
      },
      {
        text: 'Smirk fondly at Ronn and Harry: "Since none of you can follow a plan without my leadership, I’m officially taking command!"',
        effects: { courage: 15, affection: 15 },
        next: 'e4b_8b',
      },
    ],
  },
  {
    id: 'e4b_8a', chapter: 4, objective: 'ep4_alliance', music: 'romance', bg: 'assets/bg_library.png', chars: ['harry'], active: 'harry', sfx: 'sparkle', speaker: 'harry', draconiaExpr: 'happy',
    text: 'Six wands tap together in a burst of emerald, crimson, blue, and gold sparks! Harry grins across the circle: "To the Six-Star Pact!"',
    next: 'e4b_9',
  },
  {
    id: 'e4b_8b', chapter: 4, objective: 'ep4_alliance', music: 'normal', bg: 'assets/bg_library.png', chars: ['ronn'], active: 'ronn', sfx: 'sparkle', speaker: 'ronn', draconiaExpr: 'happy',
    text: 'Ronn groans dramatically while raising his wand anyway: "Aye-aye, Captain Draconia! Just don’t assign us extra essays afterward!" Everyone laughs as the circle flares bright.',
    next: 'e4b_9',
  },
  {
    id: 'e4b_9', chapter: 4, objective: 'ep4_alliance', music: 'danger', bg: 'assets/bg_bridge.png', chars: ['albuz'], active: 'albuz', particles: 'snow', fx: ['shake', 'flash-violet'], sfx: 'bell', speaker: 'albuz', draconiaExpr: 'surprised',
    text: 'Midnight bells ring! Racing onto the snowy Stone Bridge, we find Headmaster Albuz and Professor Remuz holding back waves of shadow mist—while Barti drops straight onto the center arch to shatter Seal III!',
    next: 'e4b_10',
  },
  {
    id: 'e4b_10', chapter: 4, objective: 'ep4_alliance', music: 'danger', bg: 'assets/bg_bridge.png', chars: ['barti'], active: 'barti', fx: ['shake', 'flash-violet'], sfx: 'dark_magic', draconiaExpr: 'angry', speaker: 'barti',
    duel: { enemy: 'barti', ally: 'alliance', hp: 120 },
    text: 'Barti sneers at our ring of glowing Moon-Fern shields: "A bunch of schoolkids playing soldier?! Let’s see how long your little friendship lasts against real dark magic!"',
    next: 'e4b_11',
  },
  {
    id: 'e4b_11', chapter: 4, objective: 'ep4_alliance', music: 'serious', bg: 'assets/bg_bridge.png', chars: ['albuz'], active: 'albuz', fx: ['flash-gold'], sfx: 'magic', speaker: 'albuz', draconiaExpr: 'happy',
    text: 'Our Six-Star shield holds unbroken, launching Barti backward into his fleeing shadow-mist! Headmaster Albuz lowers his wand, his eyes twinkling with profound pride. "Remarkable. Six rival hearts beating as one—Draconia, your mother would be weeping with joy tonight."',
    next: 'e4b_12',
  },
  {
    id: 'e4b_12', chapter: 4, objective: 'ep5_climax', music: 'romance', bg: 'assets/bg_bridge.png', chars: ['harry'], active: 'harry', mood: 'blush', speaker: 'harry', draconiaExpr: 'happy',
    text: 'Still catching our breath in the falling snow, Harry bumps my shoulder gently. "Even if the keystone cracked a little, Thom has no idea what’s waiting for him tomorrow night. Rest up for the Winter Ball, Captain."',
    next: 'e5_all_1',
  },

  // ============================================================================
  // EPISODE 4C: SECRETS OF THE SILVER CIPHER (SHADOW / SEVERO ROUTE)
  // ============================================================================
  {
    id: 'e4c_1', chapter: 4, objective: 'ep4_shadow', music: 'mystery', bg: 'assets/bg_potions.jpg', chars: ['severo'], active: 'severo', sfx: 'door', speaker: 'severo', draconiaExpr: 'normal',
    text: 'After curfew, the Potions dungeon is silent save for the hiss of green embers. Professor Severo bolts the oak door with a flick of his wand and unrolls a silver-inked parchment across the stone desk.',
    next: 'e4c_2',
  },
  {
    id: 'e4c_2', chapter: 4, objective: 'ep4_shadow', music: 'mystery', bg: 'assets/bg_potions.jpg', chars: ['severo'], active: 'severo', speaker: 'severo', draconiaExpr: 'surprised',
    text: '"You are certain you wish to walk this path, Draconia?" Severo’s dark voice is unusually quiet. "Your mother and I studied these counter-runes together fifteen years ago. They can turn Lord Thom’s dimensional mirror inward—caging him forever."',
    next: 'e4c_3',
  },
  {
    id: 'e4c_3', chapter: 4, objective: 'ep4_shadow', music: 'mystery', bg: 'assets/bg_potions.jpg', chars: ['severo'], active: 'severo', speaker: 'severo', draconiaExpr: 'sad',
    text: '"Yet shadow-wards demand complete solitude and control," Severo warns gravely. "If you invert the cipher alone, you risk bearing the Mirror’s backlash yourself—keeping Harry and the other students completely out of the line of fire, even if they never know what you sacrificed."',
    next: 'e4c_4',
  },
  {
    id: 'e4c_4', chapter: 4, objective: 'ep4_shadow', music: 'serious', bg: 'assets/bg_potions.jpg', chars: ['severo'], active: 'draconia', speaker: 'draconia', draconiaExpr: 'normal',
    text: 'I trace the shimmering silver runes with my wand tip, feeling my mother’s locket answer in a deep, steady hum. "If walking the shadows means Harry, my father, and this entire school get to dance safely tomorrow night... teach me everything, Professor."',
    next: 'e4c_5',
  },
  {
    id: 'e4c_5', chapter: 4, objective: 'ep4_shadow', music: 'serious', bg: 'assets/bg_potions.jpg', chars: ['severo'], active: 'severo', sfx: 'magic', speaker: 'severo', draconiaExpr: 'normal',
    text: 'For two exhausting hours, Severo drills me ruthlessly in counter-ciphers, wandless ward-inversion, and mind-shielding—until silver fire spins effortlessly off my fingertips. For a fleeting second, a shadow of genuine pride crosses his austere face.',
    next: 'e4c_6',
  },
  {
    id: 'e4c_6', chapter: 4, objective: 'ep4_shadow', music: 'romance', bg: 'assets/bg_courtyard.png', chars: ['harry'], active: 'harry', particles: 'snow', speaker: 'harry', draconiaExpr: 'surprised',
    text: 'Slipping out into the midnight Courtyard to trace the silver-ash trail before Thom’s agents strike Seal III, I nearly freeze when a familiar voice calls softly from the shadows of the arch. "Draconia? Where are you going this late—alone?"',
    next: 'e4c_7',
  },
  {
    id: 'e4c_7', chapter: 4, objective: 'ep4_shadow', music: 'romance', bg: 'assets/bg_courtyard.png', chars: ['harry'], active: 'harry', speaker: 'harry', draconiaExpr: 'sad',
    text: 'Harry steps into the snowlight, eyes searching my face with quiet worry. "You’ve got that look again—the one where you think you have to carry the whole sky by yourself. Whatever Severo taught you down there, don’t shut me out. Let me come with you."',
    next: 'e4c_choice',
  },
  {
    id: 'e4c_choice', chapter: 4, objective: 'ep4_shadow', music: 'romance', bg: 'assets/bg_courtyard.png', chars: ['harry'], active: 'draconia', speaker: 'draconia', draconiaExpr: 'sad',
    text: 'My heart aches so badly it’s hard to breathe. Keeping him safe means keeping him away from the shadow-cipher—yet looking into his eyes makes lying almost impossible.',
    choices: [
      {
        text: 'Untie my emerald ribbon and press it into his hand: "Trust me tonight, Harry. Wait for me at the Winter Ball—I promise I’m coming back."',
        effects: { affection: 20, sincerity: 15, mystery: 10 },
        setFlags: { leftRibbonHarry: true },
        next: 'e4c_8a',
      },
      {
        text: 'Put my cold mask back on to protect him: "Stay in the castle, Harry. Shadow-magic isn’t a game for heroes—leave this to Severo and me."',
        effects: { mystery: 25, courage: 10, affection: -10 },
        next: 'e4c_8b',
      },
    ],
  },
  {
    id: 'e4c_8a', chapter: 4, objective: 'ep4_shadow', music: 'romance', bg: 'assets/bg_courtyard.png', chars: ['harry'], active: 'harry', mood: 'blush', speaker: 'harry', draconiaExpr: 'sad',
    text: 'Harry’s fingers close tightly around my warm emerald ribbon. "You’d better keep that promise, Draconia," he whispers fiercely. "Because if you aren’t back before the Eclipse peaks, I’m tearing that Vault door down myself."',
    next: 'e4c_9',
  },
  {
    id: 'e4c_8b', chapter: 4, objective: 'ep4_shadow', music: 'serious', bg: 'assets/bg_courtyard.png', chars: ['harry'], active: 'harry', speaker: 'harry', draconiaExpr: 'sad',
    text: 'Hurt flickers across Harry’s face, yet he doesn’t step aside until I slip past him into the mist. "You’re a terrible liar, Draconia," he calls softly into the snow. "I know you’re only doing this to protect us."',
    next: 'e4c_9',
  },
  {
    id: 'e4c_9', chapter: 4, objective: 'ep4_shadow', music: 'danger', bg: 'assets/bg_forest.jpg', chars: ['belatrix'], active: 'belatrix', fx: ['shake', 'flash-violet'], sfx: 'wind', speaker: 'belatrix', draconiaExpr: 'angry',
    text: 'Tracing the silver ash deep into the midnight Forest, I walk straight into Belatrix’s snare—exactly as Severo predicted! She steps from the shadows with a delighted cackle. "All alone without your boyfriend or daddy?! Oh, Lord Thom will reward me richly!"',
    next: 'e4c_10',
  },
  {
    id: 'e4c_10', chapter: 4, objective: 'ep4_shadow', music: 'danger', bg: 'assets/bg_forest.jpg', chars: ['belatrix'], active: 'belatrix', fx: ['shake', 'flash-violet'], sfx: 'dark_magic', draconiaExpr: 'angry', speaker: 'belatrix',
    duel: { enemy: 'belatrix', ally: 'solo', hp: 125 },
    text: 'Silver runes ignite like cold fire along my sleeve! Belatrix shrieks in sudden shock: "Counter-ciphers?! Who taught a child forbidden Vault magic?!"',
    next: 'e4c_11',
  },
  {
    id: 'e4c_11', chapter: 4, objective: 'ep5_climax', music: 'mystery', bg: 'assets/bg_forest.jpg', chars: ['severo'], active: 'severo', fx: ['flash-emerald'], sfx: 'magic', speaker: 'severo', draconiaExpr: 'normal',
    text: 'Belatrix flees bleeding shadow-sparks into the night as Severo materializes silently from the treeline. "Flawless control, Draconia," he says quietly. "Tomorrow night, when the Winter Ball distracts the castle, we descend to the Mirror Vault and finish Lord Thom from the dark."',
    next: 'e5_shd_1',
  },

  // ============================================================================
  // EPISODE 4D: THE WEIGHT OF THE CREST (LORD LUCIO & HONOR ROUTE)
  // ============================================================================
  {
    id: 'e4d_1', chapter: 4, objective: 'ep4_honor', music: 'serious', bg: 'assets/bg_dorm.png', chars: ['lucio'], active: 'lucio', speaker: 'lucio', draconiaExpr: 'normal',
    text: 'Late into the evening, the Emerald parlor glows with hearth-fire as Lord Lucio and I lay ancient family ward-scrolls across the dark mahogany table—the very scrolls my mother once studied.',
    next: 'e4d_2',
  },
  {
    id: 'e4d_2', chapter: 4, objective: 'ep4_honor', music: 'serious', bg: 'assets/bg_dorm.png', chars: ['lucio'], active: 'lucio', speaker: 'lucio', draconiaExpr: 'sad',
    text: 'For a long while, neither of us speaks. Then Father sets down his quill and looks quietly at my mother’s silver locket resting over my heart. "I was too hard on you these past years, Draconia."',
    next: 'e4d_3',
  },
  {
    id: 'e4d_3', chapter: 4, objective: 'ep4_honor', music: 'serious', bg: 'assets/bg_dorm.png', chars: ['lucio'], active: 'draconia', speaker: 'draconia', draconiaExpr: 'surprised',
    text: 'I blink in genuine disbelief—I have never once heard Lord Lucio admit a flaw. "Father...?"',
    next: 'e4d_4',
  },
  {
    id: 'e4d_4', chapter: 4, objective: 'ep4_honor', music: 'romance', bg: 'assets/bg_dorm.png', chars: ['lucio'], active: 'lucio', speaker: 'lucio', draconiaExpr: 'sad',
    text: '"When your mother gave her strength to seal that Mirror, I thought if I forged you into impenetrable steel, nothing in this world could ever hurt you," Father says softly. "I never wanted you to be lonely, Draconia. True nobility isn’t coldness—it is standing upright so others can be safe."',
    next: 'e4d_5',
  },
  {
    id: 'e4d_5', chapter: 4, objective: 'ep4_honor', music: 'romance', bg: 'assets/bg_dorm.png', chars: ['lucio'], active: 'draconia', speaker: 'draconia', draconiaExpr: 'happy',
    text: 'Warmth rises behind my eyes—for the first time in years, the heavy weight between us simply dissolves. "I’m proud to be your daughter, Father. Tomorrow night, we show Lord Thom what real honor looks like."',
    next: 'e4d_6',
  },
  {
    id: 'e4d_6', chapter: 4, objective: 'ep4_honor', music: 'serious', bg: 'assets/bg_bridge.png', chars: ['harry'], active: 'harry', particles: 'snow', sfx: 'wind', speaker: 'harry', draconiaExpr: 'surprised',
    text: 'Patrolling the snowy Stone Bridge before midnight, we encounter Harry and Hermiona reinforcing the outer lanterns. Harry steps forward through the drifting snow, green eyes steady. "Lord Lucio. Draconia. Whatever happened between our houses in the past... tomorrow night needs all of us."',
    next: 'e4d_7',
  },
  {
    id: 'e4d_7', chapter: 4, objective: 'ep4_honor', music: 'serious', bg: 'assets/bg_bridge.png', chars: ['lucio'], active: 'lucio', speaker: 'lucio', draconiaExpr: 'normal',
    text: 'Lord Lucio regards Harry calmly, then turns his gaze to me. "The choice is yours, Draconia. Do we welcome Harry as an equal ally beside our house—or stand exclusively on our own?"',
    next: 'e4d_choice',
  },
  {
    id: 'e4d_choice', chapter: 4, objective: 'ep4_honor', music: 'serious', bg: 'assets/bg_bridge.png', chars: ['harry'], active: 'draconia', speaker: 'draconia', draconiaExpr: 'normal',
    text: 'Snowflakes whirl between my father and Harry. What kind of noble heir will I choose to be?',
    choices: [
      {
        text: 'Extend my gloved hand to Harry with quiet dignity: "Stand with us as an equal, Harry. Honor grows stronger when it’s shared."',
        effects: { courage: 20, affection: 15, sincerity: 15 },
        setFlags: { nobleAlliance: true },
        next: 'e4d_8a',
      },
      {
        text: 'Lift my chin coolly: "Keep your friends safe inside, Harry. My family will finish what my mother started."',
        effects: { courage: 20, mystery: 10, affection: -10 },
        setFlags: { nobleSolitude: true },
        next: 'e4d_8b',
      },
    ],
  },
  {
    id: 'e4d_8a', chapter: 4, objective: 'ep4_honor', music: 'romance', bg: 'assets/bg_bridge.png', chars: ['harry'], active: 'harry', mood: 'blush', speaker: 'harry', draconiaExpr: 'happy',
    text: 'Harry grasps my hand firmly with a warm, relieved smile. "Glad to fight at your flank, Draconia." Beside me, Lord Lucio inclines his head in quiet approval.',
    next: 'e4d_9',
  },
  {
    id: 'e4d_8b', chapter: 4, objective: 'ep4_honor', music: 'serious', bg: 'assets/bg_bridge.png', chars: ['harry'], active: 'harry', speaker: 'harry', draconiaExpr: 'sad',
    text: 'Harry’s expression clouds with quiet regret, yet he nods respectfully. "I won’t let you face Thom alone tomorrow, Draconia—whether your pride likes it or not."',
    next: 'e4d_9',
  },
  {
    id: 'e4d_9', chapter: 4, objective: 'ep4_honor', music: 'danger', bg: 'assets/bg_bridge.png', chars: ['belatrix'], active: 'belatrix', fx: ['shake', 'flash-violet'], sfx: 'dark_magic', speaker: 'belatrix', draconiaExpr: 'angry',
    text: 'A shriek splits the snowstorm! Belatrix swoops down onto the Stone Bridge archway, furious sparks raining from her wand! "Traitorous Lucio! Raising your noble crest against Lord Thom’s new era?!"',
    next: 'e4d_10',
  },
  {
    id: 'e4d_10', chapter: 4, objective: 'ep4_honor', music: 'danger', bg: 'assets/bg_bridge.png', chars: ['belatrix'], active: 'belatrix', fx: ['shake', 'flash-violet'], sfx: 'dark_magic', draconiaExpr: 'angry', speaker: 'belatrix',
    duel: { enemy: 'belatrix', ally: 'lucio', hp: 125 },
    text: 'Lord Lucio plants his silver cane beside me: "Show her our family’s true discipline, Draconia!" Belatrix lunges forward in a storm of violet fire!',
    next: 'e4d_11',
  },
  {
    id: 'e4d_11', chapter: 4, objective: 'ep5_climax', music: 'serious', bg: 'assets/bg_bridge.png', chars: ['lucio'], active: 'lucio', fx: ['flash-emerald'], sfx: 'magic', speaker: 'lucio', draconiaExpr: 'happy',
    text: 'Our twin emerald shields shatter Belatrix’s assault, hurling her howling back into the blizzard! Lord Lucio straightens his silver cloak with unmistakable pride. "Well fought, Draconia. Tomorrow night, we end Lord Thom once and for all."',
    next: 'e5_hon_1',
  },
]);
