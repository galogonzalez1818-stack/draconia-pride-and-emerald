/**
 * PRIDE & EMERALD: ECHOES OF THE RIFT — REMASTERED 5-EPISODE EDITION
 * ==================================================================
 * Episodes 1, 2, and 3: School Life, Slow-Burn Romance (Draconia × Harry),
 * Family Drama (Lord Lucio), and the Mystery of the 3 Eclipse Seals.
 */
window.STORY = {
  chapters: {
    1: 'Ep. 1: The Mask & The Collision',
    2: 'Ep. 2: Potions & The Library Secret',
    3: 'Ep. 3: Father’s Honor & The Snowfall',
    4: 'Ep. 4: The Eve of the Eclipse',
    5: 'Ep. 5: The Winter Ball & The Mirror',
  },

  objectives: {
    ep1_morning: 'Survive breakfast without losing composure around Harry',
    ep1_locket: 'Discover why your mother’s silver locket suddenly awakened',
    ep2_potions: 'Survive Potions class paired with Harry—and check the stolen roots',
    ep2_library: 'Decode the silver-ash rune in the Library before curfew',
    ep3_lucio: 'Face Lord Lucio’s questions about Harry and your house honor',
    ep3_ball: 'Navigate Winter Ball invitations—and watch the Enchanted Forest',
    ep3_ambush: 'Defend Seal II in the Enchanted Forest and protect Harry!',
    ep3_choice: 'Choose who you will stand beside on the Eve of the Eclipse',
    ep4_romance: 'Meet Harry atop the Astronomy Tower and protect Seal III',
    ep4_alliance: 'Unite the Six-Star Circle and defend the Stone Bridge',
    ep4_shadow: 'Master Severo’s Silver Cipher in secret and intercept Belatrix',
    ep4_honor: 'Stand beside Lord Lucio and decide what pride truly means',
    ep5_climax: 'Stop Lord Thom beneath the Winter Ball before the Eclipse peaks!',
    ep5_epilogue: 'Enjoy the night you fought so hard to protect',
  },

  endings: {
    sovereign: {
      id: 'sovereign',
      badge: 'Ending 1 / 5 • True Romance',
      title: 'Sovereign of Hearts',
      desc: 'No more masks, no more hiding behind noble walls. With Lord Lucio’s reluctant blessing and the Mirror sealed forever, Draconia claims the first waltz of the Winter Ball in Harry’s arms.',
    },
    thorns: {
      id: 'thorns',
      badge: 'Ending 2 / 5 • Tsundere Romance',
      title: 'Thorns & Roses',
      desc: 'Even after saving two worlds together, Draconia insists she only danced with Harry to save his terrible footwork—until one quiet moment under the starlit balcony leaves her completely blushing.',
    },
    guardians: {
      id: 'guardians',
      badge: 'Ending 3 / 5 • Academy Alliance',
      title: 'Guardians of the Six-Star Rift',
      desc: 'Draconia breaks centuries of house rivalry, uniting Harry, Hermiona, Ronn, Lune, and Nevile as equals. She gains true friends—and a warm new beginning with Harry.',
    },
    shadow_keeper: {
      id: 'shadow_keeper',
      badge: 'Ending 4 / 5 • Shadow & Devotion',
      title: 'Keeper of the Silver Shadow',
      desc: 'Trained in forbidden counter-runes by Professor Severo, Draconia dismantles Lord Thom’s rift from the shadows—leaving Harry a single emerald ribbon and a promise beneath the stars.',
    },
    emerald_heir: {
      id: 'emerald_heir',
      badge: 'Ending 5 / 5 • Noble Honor',
      title: 'Pride of the Emerald House',
      desc: 'Standing shoulder-to-shoulder with Lord Lucio, Draconia defends the Academy through discipline and ancient honor—redefining what her family’s pride means for a new era.',
    },
  },

  nodes: {},
};

window.VN_BUILD = function (list) {
  list.forEach((n) => {
    window.STORY.nodes[n.id] = n;
  });
};

window.VN_BUILD([
  // ============================================================================
  // EPISODE 1: THE MASK & THE COLLISION
  // ============================================================================
  {
    id: 'intro_1', chapter: 1, objective: 'ep1_morning', music: 'serious', bg: 'assets/bg_dorm.png', chars: [], speaker: 'draconia', draconiaExpr: 'normal',
    text: 'Every morning in the Emerald Dormitory begins with the same ritual in front of my tall silver mirror. Pin the serpent-and-laurel crest level. Smooth the dark wool collar. Lift my chin exactly half an inch.',
    next: 'intro_2',
  },
  {
    id: 'intro_2', chapter: 1, objective: 'ep1_morning', music: 'serious', bg: 'assets/bg_dorm.png', chars: [], speaker: 'draconia', draconiaExpr: 'normal',
    text: '"A daughter of our house never slouches, Draconia," my father’s calm, aristocratic voice echoes in my memory. "People mistake softness for weakness—so give them poise instead."',
    next: 'intro_3',
  },
  {
    id: 'intro_3', chapter: 1, objective: 'ep1_morning', music: 'romance', bg: 'assets/bg_dorm.png', chars: [], speaker: 'draconia', draconiaExpr: 'sad',
    text: 'I touch the cool silver locket resting beneath my tie—the last gift my mother placed around my neck before she passed away. Sometimes I wonder if anyone in this entire castle realizes how heavy this porcelain mask gets.',
    next: 'intro_4',
  },
  {
    id: 'intro_4', chapter: 1, objective: 'ep1_morning', music: 'romance', bg: 'assets/bg_dorm.png', chars: [], speaker: 'draconia', draconiaExpr: 'sad',
    text: 'In the corridors, younger students hush whenever I walk past. They see pale platinum hair, tailored emerald robes, and a cool glare—and assume I’m made of winter glass. Father raised me with strict honor, yes, never cruelty... yet I don’t know how to take the mask off.',
    next: 'intro_5',
  },
  {
    id: 'intro_5', chapter: 1, objective: 'ep1_morning', music: 'romance', bg: 'assets/bg_dorm.png', chars: [], speaker: 'draconia', draconiaExpr: 'blush',
    text: 'Especially not around Harry. Honestly, it’s humiliating! Twelve years of noble etiquette, completely ruined by one boy with hopeless messy black hair, crooked round glasses, and a grin warm enough to melt half the castle.',
    next: 'intro_6',
  },
  {
    id: 'intro_6', chapter: 1, objective: 'ep1_morning', music: 'romance', bg: 'assets/bg_dorm.png', chars: [], speaker: 'draconia', draconiaExpr: 'blush',
    text: 'Every single time he walks within ten feet of me, my heart tries to escape my ribcage. I want to ask if he slept alright, or tell him his scarf is dragging on the floor... and instead my mouth blurts out something sharp and haughty!',
    next: 'intro_7',
  },
  {
    id: 'intro_7', chapter: 1, objective: 'ep1_morning', music: 'mystery', bg: 'assets/bg_dorm.png', chars: [], speaker: 'draconia', draconiaExpr: 'surprised',
    text: 'Wait—before I head upstairs, I break the wax seal on the owl-letter Father sent at dawn. My fingers freeze halfway down the parchment.',
    next: 'intro_8',
  },
  {
    id: 'intro_8', chapter: 1, objective: 'ep1_morning', music: 'mystery', bg: 'assets/bg_dorm.png', chars: [], speaker: 'draconia', draconiaExpr: 'normal',
    text: '"Draconia: The Winter Ball Eclipse falls in three nights. Headmaster Albuz has invited me to inspect the castle’s ancient wards tomorrow—strange thefts of dark-ritual herbs have been reported nearby. Keep your mother’s locket hidden at all times. — Lord Lucio."',
    next: 'intro_9',
  },
  {
    id: 'intro_9', chapter: 1, objective: 'ep1_morning', music: 'normal', bg: 'assets/bg_dorm.png', chars: [], speaker: 'draconia', draconiaExpr: 'happy',
    text: 'Three days until the Winter Ball... and Father is actually coming to the Academy. I tuck his letter safely inside my satchel, take a deep breath, and head up to the Great Hall for breakfast. Today, I will be completely composed!',
    next: 'e1_1',
  },

  // --- Scene 1B: Great Hall Breakfast & Jealousy ---
  {
    id: 'e1_1', chapter: 1, objective: 'ep1_morning', music: 'normal', bg: 'assets/bg_hall.jpg', chars: ['hermiona'], active: 'draconia', speaker: 'draconia', draconiaExpr: 'normal',
    text: 'The oak doors of the Great Hall swing open to the warm smell of toasted oats, cinnamon, and crackling hearth-fire. Under the starry ceiling, students are already whispering excitedly about Winter Ball dresses and dates.',
    next: 'e1_2',
  },
  {
    id: 'e1_2', chapter: 1, objective: 'ep1_morning', music: 'normal', bg: 'assets/bg_hall.jpg', chars: ['ronn'], active: 'ronn', speaker: 'ronn', draconiaExpr: 'normal',
    text: 'Near the center bench, Ronn is dramatically waving a buttered roll. "I’m telling you, Harry, the Winter Ball is a trap! One wrong step during a waltz and you’re socially finished until graduation!"',
    next: 'e1_3',
  },
  {
    id: 'e1_3', chapter: 1, objective: 'ep1_morning', music: 'normal', bg: 'assets/bg_hall.jpg', chars: ['harry'], active: 'harry', speaker: 'harry', draconiaExpr: 'blush',
    text: 'Harry laughs—that bright, effortless laugh that makes my steps slow down without my permission. "Relax, Ronn. Nobody expects us to dance like aristocrats. Well... unless you plan on asking someone terrifyingly graceful."',
    next: 'e1_4',
  },
  {
    id: 'e1_4', chapter: 1, objective: 'ep1_morning', music: 'normal', bg: 'assets/bg_hall.jpg', chars: ['hermiona'], active: 'hermiona', speaker: 'hermiona', draconiaExpr: 'surprised',
    text: 'Hermiona chuckles, reaching over to straighten Harry’s crooked scarlet tie while pointing at a rune chart between them. "Honestly, Harry, at least fix your collar before first period—and look at that Ward Hourglass over the archway. The silver sand stopped moving!"',
    next: 'e1_5',
  },
  {
    id: 'e1_5', chapter: 1, objective: 'ep1_morning', music: 'romance', bg: 'assets/bg_hall.jpg', chars: ['harry'], active: 'draconia', speaker: 'draconia', draconiaExpr: 'blush',
    text: 'Wait—why did my chest just pinch watching Hermiona fix his tie?! They’re obviously just best friends! Still, my eyebrows knit together before I can stop myself.',
    choices: [
      {
        text: 'Keep my cool and glance up at the frozen Ward Hourglass Hermiona mentioned.',
        effects: { mystery: 10, sincerity: 5 },
        next: 'e1_6a',
      },
      {
        text: 'Walk past with my chin high and mutter: "Really, Harry, do you need a chaperone just to knot a tie?"',
        effects: { affection: 10, courage: 5 },
        next: 'e1_6b',
      },
      {
        text: 'Quietly smile to myself—at least Harry looks happy this morning—and take a seat nearby.',
        effects: { affection: 10, sincerity: 10 },
        next: 'e1_6c',
      },
    ],
  },
  {
    id: 'e1_6a', chapter: 1, objective: 'ep1_morning', music: 'mystery', bg: 'assets/bg_hall.jpg', chars: ['hermiona'], active: 'draconia', speaker: 'draconia', draconiaExpr: 'surprised',
    text: 'I follow Hermiona’s gaze up to the towering crystal hourglass above the main arch. Every single grain of enchanted silver sand is suspended mid-air—trembling slightly, just like Father warned in his letter.',
    next: 'e1_7',
  },
  {
    id: 'e1_6b', chapter: 1, objective: 'ep1_morning', music: 'normal', bg: 'assets/bg_hall.jpg', chars: ['harry'], active: 'harry', mood: 'blush', speaker: 'harry', draconiaExpr: 'blush',
    text: 'Harry blinks in surprise, then flashes a teasing half-smile as his ears pink slightly. "Morning to you too, Draconia. Always nice to know you’re keeping an eye on my wardrobe." My ears instantly catch fire!',
    next: 'e1_7',
  },
  {
    id: 'e1_6c', chapter: 1, objective: 'ep1_morning', music: 'romance', bg: 'assets/bg_hall.jpg', chars: ['harry'], active: 'harry', speaker: 'harry', draconiaExpr: 'happy',
    text: 'Just as I turn toward my table, Harry happens to look up—catching the tiny unguarded smile on my face. For a heartbeat, he looks completely stunned, smiling back before Hermiona nudges his shoulder about the archway.',
    next: 'e1_7',
  },

  // --- Scene 1C: The Collision & The Awakening Locket ---
  {
    id: 'e1_7', chapter: 1, objective: 'ep1_locket', music: 'normal', bg: 'assets/bg_hall.jpg', chars: ['harry'], active: 'harry', speaker: 'harry', draconiaExpr: 'normal',
    text: 'Harry stands up quickly, grabbing his satchel. "Let me check the runes under the archway before the bell rings, Hermiona. If the castle wards are slipping, Minerba should know—WHOA! Coming through—watch out!"',
    next: 'e1_8',
  },
  {
    id: 'e1_8', chapter: 1, objective: 'ep1_locket', music: 'romance', bg: 'assets/bg_hall.jpg', chars: ['harry'], active: 'narrator', speaker: 'narrator', fx: ['shake'], sfx: 'bump', draconiaExpr: 'surprised',
    text: 'THUD! Stepping out from behind the marble pillar, I collide straight into Harry’s chest! My leather books scatter across the flagstones—and before I can hit the stone floor, Harry’s arm wraps firmly around my waist, pulling me steady against him.',
    next: 'e1_9',
  },
  {
    id: 'e1_9', chapter: 1, objective: 'ep1_locket', music: 'romance', bg: 'assets/bg_hall.jpg', chars: ['harry'], active: 'draconia', speaker: 'draconia', sfx: 'heartbeat', draconiaExpr: 'blush',
    text: 'Time stops. I can hear his heartbeat right beneath his woolen sweater. He smells like crisp winter rain and cedarwood. And then—something warm slides free from beneath my collar!',
    next: 'e1_10',
  },
  {
    id: 'e1_10', chapter: 1, objective: 'ep1_locket', music: 'mystery', bg: 'assets/bg_hall.jpg', chars: ['harry'], active: 'harry', mood: 'blush', speaker: 'harry', fx: ['flash-emerald'], sfx: 'sparkle', draconiaExpr: 'surprised',
    text: 'My mother’s silver locket swings between us and flares with blinding emerald-white light! Harry gasps, steadying my shoulders. "Draconia! Are you hurt?! Wait... your locket just glowed—the exact same silver color as the frozen hourglass!"',
    next: 'e1_11',
  },
  {
    id: 'e1_11', chapter: 1, objective: 'ep1_locket', music: 'romance', bg: 'assets/bg_hall.jpg', chars: ['harry'], active: 'draconia', speaker: 'draconia', sfx: 'heartbeat', draconiaExpr: 'blush',
    text: 'Half the Great Hall has gone dead silent staring at us. Harry is kneeling inches away gathering my fallen parchment, his green eyes wide with genuine concern—not mockery, not fear. Say something normal, Draconia! Anything!',
    choices: [
      {
        text: 'Lower my voice, clutching the warm locket: "I’m alright, Harry... thank you for catching me. Just please—don’t tell anyone it glowed."',
        effects: { affection: 15, sincerity: 15, courage: 5 },
        setFlags: { trustedHarryHall: true },
        next: 'e1_12a',
      },
      {
        text: 'Pull back blushing furiously: "Watch where you’re charging, Harry! Are those glasses purely decorative?! Give me my books!"',
        effects: { affection: 10, courage: 5 },
        setFlags: { tsundereHall: true },
        next: 'e1_12b',
      },
      {
        text: 'Step back behind an icy wall: "Keep your hands off my things, Harry. My family’s heirloom is none of your concern."',
        effects: { affection: -10, sincerity: -10, mystery: 15 },
        setFlags: { coldHall: true },
        next: 'e1_12c',
      },
    ],
  },
  {
    id: 'e1_12a', chapter: 1, objective: 'ep1_locket', music: 'romance', bg: 'assets/bg_hall.jpg', chars: ['harry'], active: 'harry', mood: 'blush', speaker: 'harry', draconiaExpr: 'happy',
    text: 'Harry’s expression softens immediately. He places my books carefully into my hands, his voice dropping to a conspiratorial whisper. "My lips are sealed, Draconia. Just... promise you’ll tell me if it burns like that again, okay?"',
    next: 'e1_13',
  },
  {
    id: 'e1_12b', chapter: 1, objective: 'ep1_locket', music: 'normal', bg: 'assets/bg_hall.jpg', chars: ['ronn'], active: 'ronn', speaker: 'ronn', draconiaExpr: 'blush',
    text: 'From three paces away, Ronn bursts out laughing. "Bahaha! Mate, she yelled at you, didn’t even draw her wand, and her ears are brighter than a Gryffin banner! Are we in an alternate universe?!" Harry elbows him, trying not to grin.',
    next: 'e1_13',
  },
  {
    id: 'e1_12c', chapter: 1, objective: 'ep1_locket', music: 'serious', bg: 'assets/bg_hall.jpg', chars: ['hermiona'], active: 'hermiona', speaker: 'hermiona', draconiaExpr: 'sad',
    text: 'Harry blinks, a brief flicker of hurt crossing his face before Hermiona steps gently between us. "Draconia, wait—we weren’t trying to pry. Your locket pulsed at the exact instant the archway rune cracked..."',
    next: 'e1_13',
  },

  // --- Scene 1D: The Hourglass Shatters & Courtyard Hairpin Moment ---
  {
    id: 'e1_13', chapter: 1, objective: 'ep1_locket', music: 'danger', bg: 'assets/bg_hall.jpg', chars: ['albuz'], active: 'narrator', speaker: 'narrator', fx: ['shake', 'flash-violet'], sfx: 'glass', draconiaExpr: 'surprised',
    text: 'CRACK! As the morning bell tolls, the massive Ward Hourglass overhead fractures from top to bottom! Students shriek—until Headmaster Albuz rises calmly from the high table, flicking his wand to dissolve every falling shard into harmless silver stardust.',
    next: 'e1_14',
  },
  {
    id: 'e1_14', chapter: 1, objective: 'ep1_locket', music: 'serious', bg: 'assets/bg_hall.jpg', chars: ['albuz'], active: 'albuz', speaker: 'albuz', draconiaExpr: 'normal',
    text: '"No need for panic, students," Headmaster Albuz says, though his ancient blue eyes briefly linger on the faint glow beneath my collar. "An old boundary enchantment simply grew weary. Proceed calmly to first-period classes."',
    next: 'e1_15',
  },
  {
    id: 'e1_15', chapter: 1, objective: 'ep1_locket', music: 'serious', bg: 'assets/bg_hall.jpg', chars: ['minerba'], active: 'minerba', speaker: 'minerba', draconiaExpr: 'surprised',
    text: 'Beside him, Professor Minerba’s lips press into a thin, grim line as she whispers to Albuz—just loud enough for me to catch as I pass the doors: "Albuz... that was the first Eclipse Seal. It didn’t fail on its own."',
    next: 'e1_16',
  },
  {
    id: 'e1_16', chapter: 1, objective: 'ep1_locket', music: 'mystery', bg: 'assets/bg_courtyard.png', chars: [], active: 'draconia', speaker: 'draconia', draconiaExpr: 'normal',
    text: 'An Eclipse Seal...? Out in the chilly stone Courtyard leading toward the dungeon stairs, I press a hand over my mother’s silver locket. It’s still pulsing like a tiny second heartbeat. What did my mother seal beneath this school—and why did it answer me?',
    next: 'e1_17',
  },
  {
    id: 'e1_17', chapter: 1, objective: 'ep1_locket', music: 'romance', bg: 'assets/bg_courtyard.png', chars: ['harry'], active: 'harry', speaker: 'harry', draconiaExpr: 'surprised',
    text: '"Hey—Draconia! Wait up a second!" Footsteps jog across the frosty cobblestones behind me. I whirl around to find Harry catching his breath, holding out something small and glittering in his gloved palm.',
    next: 'e1_18',
  },
  {
    id: 'e1_18', chapter: 1, objective: 'ep1_locket', music: 'romance', bg: 'assets/bg_courtyard.png', chars: ['harry'], active: 'harry', mood: 'blush', speaker: 'harry', draconiaExpr: 'blush',
    text: '"You dropped your silver hair-clasp when I bumped into you back there," he says, rubbing the back of his neck awkwardly. "I cleaned the dust off it. Figured Severo would deduct fifty points if you showed up without everything spotless."',
    next: 'e1_19',
  },
  {
    id: 'e1_19', chapter: 1, objective: 'ep1_locket', music: 'romance', bg: 'assets/bg_courtyard.png', chars: ['harry'], active: 'draconia', speaker: 'draconia', draconiaExpr: 'blush',
    text: 'I stare at the tiny emerald-and-silver clasp resting in his hand. He actually ran all the way out into the cold just to bring it back before class. "I... thank you, Harry. You didn’t have to bother."',
    next: 'e1_20',
  },
  {
    id: 'e1_20', chapter: 1, objective: 'ep1_locket', music: 'romance', bg: 'assets/bg_courtyard.png', chars: ['harry'], active: 'harry', mood: 'blush', speaker: 'harry', sfx: 'heartbeat', draconiaExpr: 'happy',
    text: 'Harry meets my eyes, his smile quiet and disarmingly sincere. "Everyone acts like you’re carved out of marble, Draconia. Honestly? I don’t think you are. Come on—let’s get to Potions before Severo freezes us both in detention."',
    next: 'e2_1',
  },

  // ============================================================================
  // EPISODE 2: FIVE MINUTES IN POTIONS & THE LIBRARY SECRET
  // ============================================================================
  {
    id: 'e2_1', chapter: 2, objective: 'ep2_potions', music: 'serious', bg: 'assets/bg_potions.jpg', chars: ['severo'], active: 'severo', sfx: 'door', speaker: 'severo', draconiaExpr: 'normal',
    text: 'Down in the candlelit Potions dungeon, bitter steam coils from twenty bronze cauldrons. Professor Severo sweeps past the workbenches in a billow of black robes, his dark gaze landing straight on us.',
    next: 'e2_2',
  },
  {
    id: 'e2_2', chapter: 2, objective: 'ep2_potions', music: 'serious', bg: 'assets/bg_potions.jpg', chars: ['severo'], active: 'severo', speaker: 'severo', draconiaExpr: 'surprised',
    text: '"Silence. Today’s practical assessment is a Clarity Draught—a potion requiring discipline and zero foolishness. Therefore, I have rearranged your partners. Workbench Four: Draconia and Harry."',
    next: 'e2_3',
  },
  {
    id: 'e2_3', chapter: 2, objective: 'ep2_potions', music: 'normal', bg: 'assets/bg_potions.jpg', chars: ['harry'], active: 'harry', mood: 'blush', speaker: 'harry', draconiaExpr: 'blush',
    text: 'Ronn nearly chokes on thin air while Hermiona hides a knowing smile behind her textbook. Harry slides onto the wooden stool beside me with an apologetic grin. "Looks like you’re stuck babysitting my cauldron, Draconia."',
    next: 'e2_4',
  },
  {
    id: 'e2_4', chapter: 2, objective: 'ep2_potions', music: 'normal', bg: 'assets/bg_potions.jpg', chars: ['harry'], active: 'draconia', speaker: 'draconia', draconiaExpr: 'normal',
    text: '"If you blow up my workbench, Harry, I’m telling Minerba you volunteered to polish every trophy in the hall," I reply smoothly—though I can’t keep a tiny smile from tugging at the corner of my mouth as I hand him the silver knife.',
    next: 'e2_5',
  },
  {
    id: 'e2_5', chapter: 2, objective: 'ep2_potions', music: 'romance', bg: 'assets/bg_potions.jpg', chars: ['harry'], active: 'harry', mood: 'blush', speaker: 'harry', draconiaExpr: 'blush',
    text: 'For ten surprisingly peaceful minutes, we fall into an easy rhythm—me measuring silver-dew drops while Harry dices moon-mint. When I lean over his shoulder to inspect his cut, he freezes slightly. "Uh—is my slicing really that bad?"',
    next: 'e2_6',
  },
  {
    id: 'e2_6', chapter: 2, objective: 'ep2_potions', music: 'romance', bg: 'assets/bg_potions.jpg', chars: ['harry'], active: 'draconia', speaker: 'draconia', draconiaExpr: 'happy',
    text: '"Actually... it’s surprisingly neat," I admit softly, realizing how close our shoulders are. "You’re just gripping the knife like it’s a broomstick in a thunderstorm." Harry laughs quietly—a warm, genuine sound just between the two of us.',
    next: 'e2_7',
  },
  {
    id: 'e2_7', chapter: 2, objective: 'ep2_potions', music: 'serious', bg: 'assets/bg_potions.jpg', chars: ['pamona'], active: 'pamona', sfx: 'door', speaker: 'pamona', draconiaExpr: 'surprised',
    text: 'Suddenly the oak door bangs open. Professor Pamona hurries in, soil still dusting her apron and genuine alarm on her face. "Severo, forgive the interruption—I need you in the corridor for five minutes! Someone broke into Greenhouse Four overnight!"',
    next: 'e2_8',
  },
  {
    id: 'e2_8', chapter: 2, objective: 'ep2_potions', music: 'mystery', bg: 'assets/bg_potions.jpg', chars: ['severo'], active: 'severo', speaker: 'severo', draconiaExpr: 'surprised',
    text: 'Severo’s eyes narrow sharply. "What was taken, Pamona?" "Three entire crates of Eclipse-Root—and there is glowing silver ash burned right across the lock!" Severo’s face turns stone-cold. "Class, do not move from your cauldrons until I return."',
    next: 'e2_9',
  },
  {
    id: 'e2_9', chapter: 2, objective: 'ep2_potions', music: 'normal', bg: 'assets/bg_potions.jpg', chars: ['nevile'], active: 'nevile', speaker: 'nevile', draconiaExpr: 'surprised',
    text: 'The moment the heavy door clicks shut, Nevile leans over from the next table whispering anxiously. "Did you hear her?! Yesterday evening, when I went back for my watering gloves, I saw a short man in a grey cloak sneaking out of Greenhouse Four!"',
    next: 'e2_10',
  },
  {
    id: 'e2_10', chapter: 2, objective: 'ep2_potions', music: 'normal', bg: 'assets/bg_potions.jpg', chars: ['harry'], active: 'harry', sfx: 'potion', speaker: 'harry', draconiaExpr: 'surprised',
    text: 'Harry turns sharply at Nevile’s words—and accidentally knocks his entire saucer of crushed star-seeds straight into our cauldron! WHOOSH! Thick violet foam surges toward the rim! "Ah—Draconia! It’s turning purple! Don’t laugh, help!"',
    next: 'e2_choice1',
  },
  {
    id: 'e2_choice1', chapter: 2, objective: 'ep2_potions', music: 'romance', bg: 'assets/bg_potions.jpg', chars: ['harry'], active: 'draconia', speaker: 'draconia', draconiaExpr: 'blush',
    text: 'Severo will be back any minute! Violet sparks dance between us as Harry looks at me in adorable panic. What do I do?',
    choices: [
      {
        text: 'Step close beside him and cover his hand on the ladle: "Breathe, Harry. Counter-clockwise, slowly... follow my lead."',
        effects: { affection: 20, sincerity: 15 },
        setFlags: { helpedHarryPotion: true },
        next: 'e2_11a',
      },
      {
        text: 'Blush fiercely and snatch the ladle: "How are you still alive without me?! Move over, idiot—hand me the silver-leaf!"',
        effects: { affection: 15, courage: 5 },
        setFlags: { tsunderePotion: true },
        next: 'e2_11b',
      },
      {
        text: 'Cast a crisp freezing charm from arm’s length: "Stand back. Focus on the stolen Eclipse-Roots, not fooling around."',
        effects: { mystery: 15, courage: 5, affection: -5 },
        setFlags: { coldPotion: true },
        next: 'e2_11c',
      },
    ],
  },
  {
    id: 'e2_11a', chapter: 2, objective: 'ep2_potions', music: 'romance', bg: 'assets/bg_potions.jpg', chars: ['harry'], active: 'harry', mood: 'blush', sfx: 'sparkle', speaker: 'harry', draconiaExpr: 'happy',
    text: 'My fingers close over his warm knuckles, guiding his wrist in three steady silver spirals. The violent foam subsides into shimmering liquid starlight! Harry stares down at our joined hands, breathing softly. "Whoa... you’re amazing, Draconia. And way kinder than you ever let people see."',
    next: 'e2_12',
  },
  {
    id: 'e2_11b', chapter: 2, objective: 'ep2_potions', music: 'normal', bg: 'assets/bg_potions.jpg', chars: ['ronn'], active: 'ronn', sfx: 'sparkle', speaker: 'ronn', draconiaExpr: 'blush',
    text: 'In three furious flicks, I save the draught into pure crystal silver. From behind us, Ronn whistles low: "Mate, you look ridiculously happy getting bossed around by Draconia!" Harry turns bright red and tosses a mint leaf at him.',
    next: 'e2_12',
  },
  {
    id: 'e2_11c', chapter: 2, objective: 'ep2_potions', music: 'serious', bg: 'assets/bg_potions.jpg', chars: ['harry'], active: 'harry', sfx: 'magic', speaker: 'harry', draconiaExpr: 'normal',
    text: 'My frost charm stabilizes the brew instantly. Harry lets out a slow breath, nodding seriously. "Right—sorry. You’re thinking about the silver ash Pamona mentioned too, aren’t you? The same silver glow from your locket."',
    next: 'e2_12',
  },
  {
    id: 'e2_12', chapter: 2, objective: 'ep2_library', music: 'serious', bg: 'assets/bg_potions.jpg', chars: ['severo'], active: 'severo', sfx: 'bell', speaker: 'severo', draconiaExpr: 'normal',
    text: 'Severo sweeps back inside just as the bell tolls, looking grim. Inspecting our crystal-clear draught, his dark eyebrows lift a fraction. "Impressive. Since you two seem so eager to stay busy, report to Greenhouse Four and the Library after dinner to inventory the remaining wards."',
    next: 'e2_13',
  },

  // --- Scene 2B: Twilight in Greenhouse Four (School Life & Lune's Teasing) ---
  {
    id: 'e2_13', chapter: 2, objective: 'ep2_library', music: 'normal', bg: 'assets/bg_greenhouse.png', chars: ['lune'], active: 'lune', speaker: 'lune', draconiaExpr: 'blush',
    text: 'By dusk, mist curls around the glass roof of Greenhouse Four. Lune is humming softly beside a tray of glowing Moon-Ferns when Harry and I step inside. She tilts her dreamy blue eyes between us. "Oh! Your heartbeats sound like two snowy owls trying to build the same nest."',
    next: 'e2_14',
  },
  {
    id: 'e2_14', chapter: 2, objective: 'ep2_library', music: 'normal', bg: 'assets/bg_greenhouse.png', chars: ['harry'], active: 'harry', mood: 'blush', speaker: 'harry', draconiaExpr: 'blush',
    text: 'Both Harry and I freeze like statues! "L-Lune! We’re just checking the broken lock!" Harry stammers, rubbing his flaming neck while I frantically inspect a completely innocent potted fern. Nevile coughs to hide a laugh.',
    next: 'e2_15',
  },
  {
    id: 'e2_15', chapter: 2, objective: 'ep2_library', music: 'mystery', bg: 'assets/bg_greenhouse.png', chars: ['lune'], active: 'lune', speaker: 'lune', draconiaExpr: 'surprised',
    text: 'Then Lune’s soft voice turns unexpectedly serious as she points toward the scorched iron padlock. "That silver ash isn’t from this world, Draconia. Last night near the forest border, I saw a hooded man speaking into a mirror burning with violet fire."',
    next: 'e2_16',
  },
  {
    id: 'e2_16', chapter: 2, objective: 'ep2_library', music: 'mystery', bg: 'assets/bg_greenhouse.png', chars: ['nevile'], active: 'nevile', speaker: 'nevile', draconiaExpr: 'normal',
    text: 'Nevile hands me a small glass vial of the silver ash. "Professor Pamona asked if Hermiona could match this in the Library’s ancient ward ledgers. She’s already waiting up there—we’ll lock up the greenhouse for you two."',
    next: 'e2_17',
  },

  // --- Scene 2C: Candlelit Library Heart-to-Heart (Slow-Burn Romance!) ---
  {
    id: 'e2_17', chapter: 2, objective: 'ep2_library', music: 'romance', bg: 'assets/bg_library.png', chars: ['harry'], active: 'draconia', speaker: 'draconia', draconiaExpr: 'normal',
    text: 'Up in the high-arched Library, golden lanterns glow softly between towering mahogany shelves. Hermiona left a stack of leather ward-chronicles on the back table with a note saying she went to fetch one more map from Minerba.',
    next: 'e2_18',
  },
  {
    id: 'e2_18', chapter: 2, objective: 'ep2_library', music: 'romance', bg: 'assets/bg_library.png', chars: ['harry'], active: 'harry', speaker: 'harry', draconiaExpr: 'normal',
    text: 'For once, there are no crowds, no whispering students, no rival tables watching every word. Just rain tapping softly against the tall stained glass—and Harry sitting across from me turning dusty parchment pages.',
    next: 'e2_19',
  },
  {
    id: 'e2_19', chapter: 2, objective: 'ep2_library', music: 'romance', bg: 'assets/bg_library.png', chars: ['harry'], active: 'harry', speaker: 'harry', draconiaExpr: 'sad',
    text: 'After a quiet minute, Harry looks up over the lantern light. "Can I ask you something honest, Draconia? Without you hexing me?" I blink. "Depends on how impertinent it is." He smiles softly. "Why do you always act like you have to carry the whole world by yourself?"',
    next: 'e2_20',
  },
  {
    id: 'e2_20', chapter: 2, objective: 'ep2_library', music: 'romance', bg: 'assets/bg_library.png', chars: ['harry'], active: 'draconia', speaker: 'draconia', draconiaExpr: 'sad',
    text: 'My fingers tighten slightly on the edge of the chronicle. Nobody has ever asked me that without expecting an icy sneer in return. "Because when my mother died, Harry... Father stopped letting anyone see him grieve. He taught me that our family name is armor."',
    next: 'e2_21',
  },
  {
    id: 'e2_21', chapter: 2, objective: 'ep2_library', music: 'romance', bg: 'assets/bg_library.png', chars: ['harry'], active: 'draconia', speaker: 'draconia', draconiaExpr: 'sad',
    text: '"People think Lord Lucio is cruel, or that I look down on everyone. It isn’t true. He’s just terrified of losing anything else—and I’ve spent so long trying to be the perfect emerald heiress that I forgot how to simply... talk to people I care about."',
    next: 'e2_22',
  },
  {
    id: 'e2_22', chapter: 2, objective: 'ep2_library', music: 'romance', bg: 'assets/bg_library.png', chars: ['harry'], active: 'harry', mood: 'blush', speaker: 'harry', sfx: 'heartbeat', draconiaExpr: 'blush',
    text: 'Silence hangs warm between us. Slowly, Harry reaches across the candlelit wood and rests his hand gently beside mine—close enough that our fingertips brush. "You don’t need armor around me, Draconia. I actually like the girl underneath it."',
    next: 'e2_choice2',
  },
  {
    id: 'e2_choice2', chapter: 2, objective: 'ep2_library', music: 'romance', bg: 'assets/bg_library.png', chars: ['harry'], active: 'draconia', speaker: 'draconia', draconiaExpr: 'blush',
    text: 'My heart hammers against my ribs. His green eyes are completely steady, waiting for me.',
    choices: [
      {
        text: 'Turn my hand gently to lace my fingers with his: "Honestly, Harry... seeing you every morning is my favorite part of this castle."',
        effects: { affection: 20, sincerity: 20 },
        setFlags: { libraryConfession: true },
        next: 'e2_23a',
      },
      {
        text: 'Flush crimson and flick his forehead lightly: "S-Stop saying shameless things! And if you’re coming to the Winter Ball, let me fix your terrible dress robes first!"',
        effects: { affection: 15, courage: 10 },
        setFlags: { ballPromise: true },
        next: 'e2_23b',
      },
      {
        text: 'Take a steady breath and point to a glowing crest in the chronicle: "Thank you, Harry... truly. Now look at this page—it has my mother’s locket drawn on it!"',
        effects: { mystery: 20, courage: 10, affection: 5 },
        setFlags: { focusedDuty: true },
        next: 'e2_23c',
      },
    ],
  },
  {
    id: 'e2_23a', chapter: 2, objective: 'ep2_library', music: 'romance', bg: 'assets/bg_library.png', chars: ['harry'], active: 'harry', mood: 'blush', speaker: 'harry', draconiaExpr: 'happy',
    text: 'Harry’s breath catches—then a slow, radiant smile lights up his whole face as his thumb brushes lightly over my knuckles. "Good... because I’ve been inventing excuses to bump into you all semester, Draconia."',
    next: 'e2_24',
  },
  {
    id: 'e2_23b', chapter: 2, objective: 'ep2_library', music: 'romance', bg: 'assets/bg_library.png', chars: ['harry'], active: 'harry', mood: 'blush', speaker: 'harry', draconiaExpr: 'happy',
    text: 'Harry laughs softly, rubbing his forehead with an unguarded grin. "Deal. On one condition—you save me a dance at the Winter Ball so I can prove my robes survived your inspection."',
    next: 'e2_24',
  },
  {
    id: 'e2_23c', chapter: 2, objective: 'ep2_library', music: 'mystery', bg: 'assets/bg_library.png', chars: ['harry'], active: 'harry', speaker: 'harry', draconiaExpr: 'surprised',
    text: 'Harry leans in instantly, his eyes widening at the hand-inked crest shining faintly beneath the lantern light. "Wait a second... that’s the exact pattern on your silver locket!"',
    next: 'e2_24',
  },

  // --- Scene 2D: The Big Reveal — The 3 Eclipse Seals & Piter Spying! ---
  {
    id: 'e2_24', chapter: 2, objective: 'ep2_library', music: 'mystery', bg: 'assets/bg_library.png', chars: ['hermiona'], active: 'hermiona', sfx: 'door', speaker: 'hermiona', draconiaExpr: 'surprised',
    text: 'Hermiona rushes back between the shelves, unfolding an ancient blueprint of the castle foundations. "Draconia! Harry! I found it—listen carefully! Fifteen years ago, a dark sorcerer named Lord Thom tried to merge a ruined parallel timeline into ours using the Mirror Vault beneath the Academy!"',
    next: 'e2_25',
  },
  {
    id: 'e2_25', chapter: 2, objective: 'ep2_library', music: 'mystery', bg: 'assets/bg_library.png', chars: ['hermiona'], active: 'hermiona', speaker: 'hermiona', draconiaExpr: 'surprised',
    text: '"Three Ward-Keepers sealed the Vault with Three Eclipse Seals—one in the Great Hall hourglass, one in the Enchanted Forest, and one on the Stone Bridge! And Draconia... your mother was the Keeper who forged the Silver Locket as the master lock!"',
    next: 'e2_26',
  },
  {
    id: 'e2_26', chapter: 2, objective: 'ep2_library', music: 'danger', bg: 'assets/bg_library.png', chars: ['piter'], active: 'piter', fx: ['shake', 'flash-violet'], sfx: 'dark_magic', speaker: 'piter', draconiaExpr: 'angry',
    text: 'CRASH! Above us on the upper mezzanine, a stack of books topples! A hunched figure in a grey cloak—Piter!—hisses in panic as violet mist curls around his heels. "They already know about the locket! Lord Thom must be told!"',
    next: 'e2_27',
  },
  {
    id: 'e2_27', chapter: 2, objective: 'ep2_library', music: 'serious', bg: 'assets/bg_library.png', chars: ['harry'], active: 'harry', speaker: 'harry', draconiaExpr: 'normal',
    text: 'Before we can reach the staircase, Piter vanishes through a shimmering violet crack in the stone wall! Harry steps immediately beside me, wand drawn. "Now everything makes sense: Seal I broke this morning, and the Eclipse peaks at the Winter Ball in two nights!"',
    next: 'e2_28',
  },
  {
    id: 'e2_28', chapter: 2, objective: 'ep3_lucio', music: 'serious', bg: 'assets/bg_library.png', chars: ['minerba'], active: 'minerba', sfx: 'bell', speaker: 'minerba', draconiaExpr: 'surprised',
    text: 'Professor Minerba hurries in with curfew bells echoing across the towers. "Students, back to your dormitories immediately—we’re raising the night wards. And Draconia... your father, Lord Lucio, has just arrived at the main gates and asked to see you first thing tomorrow morning."',
    next: 'e3_1',
  },

  // ============================================================================
  // EPISODE 3: FATHER'S HONOR, WINTER BALL FEVER & THE FOREST AMBUSH
  // ============================================================================
  {
    id: 'e3_1', chapter: 3, objective: 'ep3_lucio', music: 'serious', bg: 'assets/bg_dorm.png', chars: ['lucio'], active: 'lucio', sfx: 'door', speaker: 'lucio', draconiaExpr: 'normal',
    text: 'The next morning, snow drifts silently past the high gothic windows of the Emerald parlor. Lord Lucio stands straight-backed beside the hearth, his silver-topped cane resting neatly in his gloved hands.',
    next: 'e3_2',
  },
  {
    id: 'e3_2', chapter: 3, objective: 'ep3_lucio', music: 'serious', bg: 'assets/bg_dorm.png', chars: ['lucio'], active: 'lucio', speaker: 'lucio', draconiaExpr: 'normal',
    text: '"You look well, Draconia," Father says, his grey eyes softening by a fraction before turning serious. "Albuz briefed me at dawn. Seal I has fallen, and Thom’s zealots are hunting your mother’s locket before tomorrow night’s Winter Ball Eclipse."',
    next: 'e3_3',
  },
  {
    id: 'e3_3', chapter: 3, objective: 'ep3_lucio', music: 'serious', bg: 'assets/bg_dorm.png', chars: ['lucio'], active: 'draconia', speaker: 'draconia', draconiaExpr: 'sad',
    text: '"Father... why didn’t you ever tell me Mother was one of the Ward-Keepers who sealed the Mirror Vault?" I ask quietly, my fingers resting on the silver chain.',
    next: 'e3_4',
  },
  {
    id: 'e3_4', chapter: 3, objective: 'ep3_lucio', music: 'serious', bg: 'assets/bg_dorm.png', chars: ['lucio'], active: 'lucio', speaker: 'lucio', draconiaExpr: 'sad',
    text: 'For the first time in years, Lord Lucio looks tired. "Because she sacrificed her magic so you could grow up in a peaceful world, Draconia. I swore no dark sorcerer would ever drag you into that vault. Which brings me to another matter..."',
    next: 'e3_5',
  },
  {
    id: 'e3_5', chapter: 3, objective: 'ep3_lucio', music: 'serious', bg: 'assets/bg_dorm.png', chars: ['lucio'], active: 'lucio', speaker: 'lucio', draconiaExpr: 'surprised',
    text: 'Father’s piercing gaze locks onto mine. "Half the faculty mentioned you were seen studying alone in the Library—and laughing in the Courtyard—with Harry. Tell me plainly, Draconia: does that boy respect who you are, or is he merely pulling you into reckless danger?"',
    next: 'e3_choice1',
  },
  {
    id: 'e3_choice1', chapter: 3, objective: 'ep3_lucio', music: 'serious', bg: 'assets/bg_dorm.png', chars: ['lucio'], active: 'draconia', speaker: 'draconia', draconiaExpr: 'blush',
    text: 'My heart pounds. This is the first time I’ve ever stood my ground against my father over someone I care about.',
    choices: [
      {
        text: 'Meet his gaze firmly: "He sees the real me, Father—not just our crest. He makes me braver, and I trust him."',
        effects: { affection: 15, sincerity: 15, courage: 10 },
        setFlags: { defendedHarryLucio: true },
        next: 'e3_6a',
      },
      {
        text: 'Blush furiously and straighten my collar: "W-We’re merely rivals investigating the same threat, Father! Really!"',
        effects: { affection: 10, courage: 5 },
        setFlags: { tsundereLucio: true },
        next: 'e3_6b',
      },
      {
        text: 'Lower my gaze dutifully: "Our house’s honor comes first, Father. I won’t let feelings cloud my judgment."',
        effects: { mystery: 15, courage: 5, affection: -10 },
        setFlags: { obedientLucio: true },
        next: 'e3_6c',
      },
    ],
  },
  {
    id: 'e3_6a', chapter: 3, objective: 'ep3_ball', music: 'romance', bg: 'assets/bg_dorm.png', chars: ['lucio'], active: 'lucio', speaker: 'lucio', draconiaExpr: 'happy',
    text: 'A long silence passes. Then—unbelievably—the corner of Lord Lucio’s mouth twitches upward. "You have your mother’s stubbornness, Draconia. Very well. Let us see if young Harry proves worthy of that trust before this Eclipse is over."',
    next: 'e3_7',
  },
  {
    id: 'e3_6b', chapter: 3, objective: 'ep3_ball', music: 'normal', bg: 'assets/bg_dorm.png', chars: ['lucio'], active: 'lucio', speaker: 'lucio', draconiaExpr: 'blush',
    text: 'Lord Lucio raises one pristine silver eyebrow at my bright red ears. "Rivals. Fascinating. I don’t recall rivals blushing quite so vividly—yet keep your wand close today, daughter."',
    next: 'e3_7',
  },
  {
    id: 'e3_6c', chapter: 3, objective: 'ep3_ball', music: 'serious', bg: 'assets/bg_dorm.png', chars: ['lucio'], active: 'lucio', speaker: 'lucio', draconiaExpr: 'normal',
    text: 'Lord Lucio nods solemnly, resting a firm hand on my shoulder. "Discipline is our shield, Draconia. Still... remember that pride is meant to protect your heart, not freeze it solid."',
    next: 'e3_7',
  },

  // --- Scene 3B: Snowfall Courtyard & The Winter Ball Invitation! ---
  {
    id: 'e3_7', chapter: 3, objective: 'ep3_ball', music: 'normal', bg: 'assets/bg_courtyard.png', chars: ['ronn'], active: 'ronn', particles: 'snow', speaker: 'ronn', draconiaExpr: 'normal',
    text: 'Stepping out into the Courtyard after lunch, soft snowflakes drift over stone lanterns strung with emerald and gold ribbons for tomorrow’s Winter Ball. Near the fountain, Ronn is sweating bullets while Hermiona holds a tiny silver corsage.',
    next: 'e3_8',
  },
  {
    id: 'e3_8', chapter: 3, objective: 'ep3_ball', music: 'normal', bg: 'assets/bg_courtyard.png', chars: ['hermiona'], active: 'hermiona', speaker: 'hermiona', draconiaExpr: 'happy',
    text: '"Yes, Ronn, I’ll go to the Ball with you—honestly, it took you three weeks to ask!" Hermiona laughs brightly before spotting me. "Oh! Draconia! Harry’s been pacing behind that archway for twenty minutes rehearsing something!"',
    next: 'e3_9',
  },
  {
    id: 'e3_9', chapter: 3, objective: 'ep3_ball', music: 'romance', bg: 'assets/bg_courtyard.png', chars: ['harry'], active: 'harry', mood: 'blush', speaker: 'harry', draconiaExpr: 'blush',
    text: 'Hermiona and Ronn practically sprint away grinning, leaving Harry standing in the falling snow looking utterly caught! Snowflakes catch in his messy dark hair as he walks slowly toward me, pulling a tiny enchanted silver-emerald snowflake pin from his coat pocket.',
    next: 'e3_10',
  },
  {
    id: 'e3_10', chapter: 3, objective: 'ep3_ball', music: 'romance', bg: 'assets/bg_courtyard.png', chars: ['harry'], active: 'harry', mood: 'blush', sfx: 'heartbeat', speaker: 'harry', draconiaExpr: 'blush',
    text: '"Okay, I had a whole smooth speech ready, and Hermiona totally blew my cover," Harry admits with a sheepish, heart-stopping grin. "So I’ll just say it straight. Draconia... when we stop Thom and tomorrow night comes—will you go to the Winter Ball with me?"',
    next: 'e3_choice2',
  },
  {
    id: 'e3_choice2', chapter: 3, objective: 'ep3_ball', music: 'romance', bg: 'assets/bg_courtyard.png', chars: ['harry'], active: 'draconia', speaker: 'draconia', draconiaExpr: 'blush',
    text: 'Snowflakes melt on my cheeks. Every aristocratic rule in my head goes blissfully quiet as I look at the boy standing in front of me.',
    choices: [
      {
        text: 'Smile radiantly and take the silver snowflake pin: "Yes, Harry. Save the first waltz for me—I wouldn’t go with anyone else."',
        effects: { affection: 25, sincerity: 20 },
        setFlags: { acceptedBall: true },
        next: 'e3_11a',
      },
      {
        text: 'Hide my blazing cheeks behind a haughty pout: "H-Fine! Only because nobody else can survive your footwork without breaking an ankle, idiot!"',
        effects: { affection: 20, courage: 5 },
        setFlags: { tsundereBall: true },
        next: 'e3_11b',
      },
      {
        text: 'Touch the pin gently with a wistful smile: "Keep it safe for me until we seal the Rift, Harry... then ask me again."',
        effects: { affection: 10, courage: 15, mystery: 10 },
        setFlags: { delayedBall: true },
        next: 'e3_11c',
      },
    ],
  },
  {
    id: 'e3_11a', chapter: 3, objective: 'ep3_ambush', music: 'romance', bg: 'assets/bg_courtyard.png', chars: ['harry'], active: 'harry', mood: 'blush', sfx: 'sparkle', speaker: 'harry', draconiaExpr: 'happy',
    text: 'Harry looks like he just won the Academy Cup ten times over! Carefully, he pins the enchanted snowflake to my emerald scarf, his fingers brushing my cheek lightly. "Best answer I could’ve dreamed of, Draconia."',
    next: 'e3_12',
  },
  {
    id: 'e3_11b', chapter: 3, objective: 'ep3_ambush', music: 'romance', bg: 'assets/bg_courtyard.png', chars: ['harry'], active: 'harry', mood: 'blush', sfx: 'sparkle', speaker: 'harry', draconiaExpr: 'blush',
    text: 'Harry chuckles warmly, tucking the snowflake pin into my palm. "I’ll practice my footwork all night just for you, Your Highness." My heart does a ridiculous flip!',
    next: 'e3_12',
  },
  {
    id: 'e3_11c', chapter: 3, objective: 'ep3_ambush', music: 'serious', bg: 'assets/bg_courtyard.png', chars: ['harry'], active: 'harry', speaker: 'harry', draconiaExpr: 'sad',
    text: 'Harry closes his fingers around the pin, nodding with quiet determination. "Then I promise we’ll both make it to that dance floor tomorrow night, Draconia."',
    next: 'e3_12',
  },

  // --- Scene 3C: Dusk Alarm & Enchanted Forest Ambush (REAL DUEL #1!) ---
  {
    id: 'e3_12', chapter: 3, objective: 'ep3_ambush', music: 'danger', bg: 'assets/bg_courtyard.png', chars: ['remuz'], active: 'remuz', fx: ['shake', 'flash-violet'], sfx: 'bell', speaker: 'remuz', draconiaExpr: 'surprised',
    text: 'BOOM! Across the twilight sky, a pillar of violet lightning tears upward from the Enchanted Forest! Professor Remuz sprints through the courtyard gates, wand blazing. "Seal II at the Forest Monoliths is under attack! Students, stay back—!"',
    next: 'e3_13',
  },
  {
    id: 'e3_13', chapter: 3, objective: 'ep3_ambush', music: 'danger', bg: 'assets/bg_forest.jpg', chars: ['harry'], active: 'draconia', sfx: 'wind', speaker: 'draconia', draconiaExpr: 'angry',
    text: 'My mother’s locket burns hot against my chest! Harry and I don’t even need to speak—we race after Remuz into the frozen mist of the Enchanted Forest, where ancient rune-stones glow cracked and bleeding violet smoke.',
    next: 'e3_14',
  },
  {
    id: 'e3_14', chapter: 3, objective: 'ep3_ambush', music: 'danger', bg: 'assets/bg_forest.jpg', chars: ['belatrix'], active: 'belatrix', fx: ['shake', 'flash-violet'], sfx: 'dark_magic', speaker: 'belatrix', draconiaExpr: 'angry',
    text: 'Manic laughter echoes from the frost-covered branches! Belatrix leaps onto the shattered monolith, twirling a jagged wand while Barti and Piter surround the stone ring. "Well, well! Look what wandered straight into our trap—little Draconia playing hero with Harry!"',
    next: 'e3_15',
  },
  {
    id: 'e3_15', chapter: 3, objective: 'ep3_ambush', music: 'danger', bg: 'assets/bg_forest.jpg', chars: ['belatrix'], active: 'belatrix', speaker: 'belatrix', draconiaExpr: 'surprised',
    text: '"Do you even know how pathetic you look right now?!" Belatrix shrieks gleefully. "In our timeline, your mother’s seal shattered, Harry fell before his seventeenth winter, and you knelt at Lord Thom’s feet in silence! Give us that locket!"',
    next: 'e3_16',
  },
  {
    id: 'e3_16', chapter: 3, objective: 'ep3_ambush', music: 'danger', bg: 'assets/bg_forest.jpg', chars: ['harry'], active: 'draconia', speaker: 'draconia', draconiaExpr: 'angry',
    text: 'Cold fury floods through my veins, drowning out every ounce of fear. I step right in front of Harry, raising my wand as emerald sparks ignite around my sleeve. "That timeline will NEVER exist! And you won’t lay a finger on Harry—or my mother’s legacy!"',
    next: 'e3_17',
  },
  {
    id: 'e3_17', chapter: 3, objective: 'ep3_ambush', music: 'danger', bg: 'assets/bg_forest.jpg', chars: ['belatrix'], active: 'belatrix', fx: ['shake', 'flash-violet'], sfx: 'dark_magic', draconiaExpr: 'angry', speaker: 'belatrix',
    duel: { enemy: 'belatrix', ally: 'harry', hp: 115 },
    text: 'Belatrix snarls, violet lightning coiling around her wand as she lunges forward: "Then let’s see if your noble little shield can survive real chaos, Draconia!"',
    next: 'e3_18',
  },

  // --- Scene 3D: Lord Lucio's Arrival & Tender Infirmary Care Scene ---
  {
    id: 'e3_18', chapter: 3, objective: 'ep3_choice', music: 'serious', bg: 'assets/bg_forest.jpg', chars: ['lucio'], active: 'lucio', fx: ['flash-emerald'], sfx: 'magic', speaker: 'lucio', draconiaExpr: 'surprised',
    text: 'As Belatrix staggers back from my final emerald bolt, a razor-sharp beam of silver light slams down between us! Lord Lucio steps out of the mist beside Professor Remuz, cane raised like a duelist’s rapier. "Enough, Belatrix! Take your rabble and flee before I call the entire faculty!"',
    next: 'e3_19',
  },
  {
    id: 'e3_19', chapter: 3, objective: 'ep3_choice', music: 'serious', bg: 'assets/bg_forest.jpg', chars: ['belatrix'], active: 'belatrix', speaker: 'belatrix', draconiaExpr: 'angry',
    text: 'Spitting curses, Belatrix grabs Barti’s cloak as a violet portal tears open behind them. "Laugh while you can, Lucio! Seal II is already cracked—tomorrow night at the Eclipse, Lord Thom walks through the Mirror!" With a crack, they vanish into the snow.',
    next: 'e3_20',
  },
  {
    id: 'e3_20', chapter: 3, objective: 'ep3_choice', music: 'romance', bg: 'assets/bg_infirmary.png', chars: ['harry'], active: 'draconia', speaker: 'draconia', draconiaExpr: 'sad',
    text: 'Back in the warm, quiet Infirmary, moonlight spills across the white linens. Harry sits on the edge of the cot while I carefully wrap a fresh linen bandage around the scorched scratch on his forearm—the hex he jumped in front of to shield my left flank.',
    next: 'e3_21',
  },
  {
    id: 'e3_21', chapter: 3, objective: 'ep3_choice', music: 'romance', bg: 'assets/bg_infirmary.png', chars: ['harry'], active: 'draconia', speaker: 'draconia', draconiaExpr: 'sad',
    text: 'My hands are trembling slightly as I tie the knot. "Honestly, Harry... what were you thinking leaping in front of Barti’s flanking curse?! What if it had been worse?!"',
    next: 'e3_22',
  },
  {
    id: 'e3_22', chapter: 3, objective: 'ep3_choice', music: 'romance', bg: 'assets/bg_infirmary.png', chars: ['harry'], active: 'harry', mood: 'blush', sfx: 'heartbeat', speaker: 'harry', draconiaExpr: 'blush',
    text: 'Harry gently catches my trembling wrist with his uninjured hand, smiling softly up at me. "I’ll stop jumping in front of curses for you the exact day you stop doing it for me, Draconia. Deal?"',
    next: 'e3_23',
  },
  {
    id: 'e3_23', chapter: 3, objective: 'ep3_choice', music: 'serious', bg: 'assets/bg_infirmary.png', chars: ['severo'], active: 'severo', sfx: 'door', speaker: 'severo', draconiaExpr: 'normal',
    text: 'At the doorway, Professor Severo’s voice breaks the quiet. "Seal II is fractured. Only Seal III on the Stone Bridge holds back the Mirror Vault now—and tomorrow night is the Winter Ball Eclipse. Headmaster Albuz expects everyone ready by dawn."',
    next: 'ep3_crossroads',
  },
  {
    id: 'ep3_crossroads', chapter: 3, objective: 'ep3_choice', music: 'mystery', bg: 'assets/bg_infirmary.png', chars: ['harry'], active: 'draconia', speaker: 'draconia', draconiaExpr: 'normal',
    text: 'Only one night remains before Lord Thom strikes beneath the Winter Ball. My heart, my friends, my father’s honor, and Severo’s secrets all pull at me. How will I spend the Eve of the Eclipse?',
    choices: [
      {
        text: '💚 Meet Harry alone atop the Astronomy Tower tonight—no more masks, no more hiding how deeply I care.',
        effects: { affection: 20, sincerity: 15 },
        next: 'e4a_1',
      },
      {
        text: '⭐ Gather Harry, Hermiona, Ronn, Lune, and Nevile to forge a Six-Star defense and unite the Academy!',
        effects: { courage: 20, affection: 10 },
        next: 'e4b_1',
      },
      {
        text: '🌑 Slip down to Severo’s dungeon to master the forbidden Mirror Counter-Cipher and protect Harry from the shadows.',
        effects: { mystery: 25, courage: 10 },
        next: 'e4c_1',
      },
      {
        text: '👑 Walk beside Lord Lucio tonight to prepare our family’s ancient emerald wards with unbroken noble pride.',
        effects: { courage: 15, sincerity: 5 },
        next: 'e4d_1',
      },
    ],
  },
]);
