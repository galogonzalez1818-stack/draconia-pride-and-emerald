/**
 * ACT II: 5 MAJOR TRUNKS (tr1_* through tr5_*)
 * Each trunk runs ~16 scenes and splits into 2 distinct final timelines (10 total).
 */
window.VN_BUILD([
  // ==================== TRUNK 1: HEART & SHADOW -> Splits into T1 (Sovereign) or T3 (Secret Devotion) ====================
  {
    id: 'tr1_1', chapter: 4, music: 'mystery', bg: 'assets/bg_forest.jpg', chars: ['harry', 'remuz'], active: 'remuz', sfx: 'wind', speaker: 'remuz',
    text: 'Keep your wands low, you two. The silver mist ahead is thickening—and look at the moss beneath our boots, it’s frozen solid.',
    next: 'tr1_2',
  },
  {
    id: 'tr1_2', chapter: 4, music: 'romance', bg: 'assets/bg_forest.jpg', chars: ['harry'], active: 'harry', draconiaExpr: 'blush', speaker: 'harry',
    text: 'Here, Draconia, take my scarf—your hands are shaking from the cold. Stay right behind me if anything moves in the trees.',
    next: 'tr1_3',
  },
  {
    id: 'tr1_3', chapter: 4, music: 'danger', bg: 'assets/bg_forest.jpg', chars: ['belatrix', 'piter'], active: 'belatrix', speaker: 'belatrix', fx: ['shake', 'flash-violet'], sfx: 'dark_magic', draconiaExpr: 'angry',
    text: 'Hahaha! Look at Harry playing bodyguard to little Draconia! How pathetic! In our timeline, you knelt to Lord Thom without a whisper of protest!',
    next: 'tr1_4',
  },
  {
    id: 'tr1_4', chapter: 4, music: 'danger', bg: 'assets/bg_forest.jpg', chars: ['barti', 'piter'], active: 'piter', speaker: 'piter',
    text: 'I laid the Eclipse-Roots around the monoliths, Barti! Should we open the Mirror anchor right now?',
    next: 'tr1_5',
  },
  {
    id: 'tr1_5', chapter: 4, music: 'danger', bg: 'assets/bg_forest.jpg', chars: ['harry', 'remuz'], active: 'remuz', draconiaExpr: 'angry', speaker: 'remuz',
    text: 'Three against three—Harry, Draconia, watch the flanking shadows! Barti’s curses are fast!',
    next: 'tr1_6',
  },
  {
    id: 'tr1_6', chapter: 4, music: 'serious', bg: 'assets/bg_forest.jpg', chars: ['lucio', 'belatrix'], active: 'lucio', speaker: 'lucio',
    text: 'Lower your wand immediately, Belatrix. I came to the Academy the moment Albuz sent word—and no follower of Thom’s madness will lay a finger on my daughter.',
    next: 'tr1_7',
  },
  {
    id: 'tr1_7', chapter: 4, music: 'serious', bg: 'assets/bg_forest.jpg', chars: ['lucio', 'barti'], active: 'lucio', speaker: 'lucio',
    text: 'Our house carries ancient pride, never cowardice. Leave these grounds before I summon the entire faculty.',
    next: 'tr1_8',
  },
  {
    id: 'tr1_8', chapter: 4, music: 'normal', bg: 'assets/bg_forest.jpg', chars: ['harry', 'lucio'], active: 'harry', draconiaExpr: 'happy', speaker: 'harry',
    text: 'They retreated into the fog! Thank you, Lord Lucio—if you hadn’t arrived when you did, Barti would’ve flanked us.',
    next: 'tr1_9',
  },
  {
    id: 'tr1_9', chapter: 4, music: 'romance', bg: 'assets/bg_tower.jpg', chars: ['harry'], active: 'draconia', draconiaExpr: 'happy', speaker: 'draconia',
    text: 'I can’t sleep. My palms still tingle from the battle, and Lord Lucio’s quiet approval keeps echoing in my ears. I slip up to the Astronomy Tower for air—only to hear footsteps behind me. Harry, carrying two steaming mugs of spiced cider.',
    next: 'tr1_10',
  },
  {
    id: 'tr1_10', chapter: 4, music: 'romance', bg: 'assets/bg_tower.jpg', chars: ['harry'], active: 'harry', mood: 'blush', draconiaExpr: 'blush', speaker: 'harry',
    text: 'My heart nearly stopped when you stepped in front of me to block Belatrix’s hex, Draconia. You’re terrifyingly brave—and I can’t stop looking at you.',
    next: 'tr1_11',
  },
  {
    id: 'tr1_11', chapter: 4, music: 'romance', bg: 'assets/bg_tower.jpg', chars: ['harry'], active: 'harry', mood: 'blush', draconiaExpr: 'blush', sfx: 'heartbeat', speaker: 'harry',
    text: 'Forget house rivalries, forget what anyone whispers in the corridors. I’ve fallen for you, Draconia. Completely.',
    next: 'tr1_split',
  },
  {
    id: 'tr1_split', chapter: 4, music: 'romance', bg: 'assets/bg_tower.jpg', chars: ['harry'], active: 'draconia', draconiaExpr: 'happy', speaker: 'draconia',
    text: 'The cider mug warms my freezing fingers, yet my whole chest feels like it’s about to burst. For the first time in my life, I don’t want to hide behind pride.',
    choices: [
      { text: '"I’m done hiding, Harry. If this is real, let the whole Academy see us walk together."', effects: { affection: 20, sincerity: 25 }, next: 't1_1' },
      { text: '"I love you too, Harry... but let’s keep it between us until the storm passes and I can speak to my father."', effects: { affection: 20, mystery: 10 }, next: 't3_1' },
    ],
  },

  // ==================== TRUNK 2: THORNS & RIVALRY -> Splits into T2 (Thorns) or T4 (Guardians) ====================
  {
    id: 'tr2_1', chapter: 5, music: 'normal', bg: 'assets/bg_forest.jpg', chars: ['harry', 'ronn'], active: 'ronn', speaker: 'ronn',
    text: 'Remind me again why we let Draconia take point into the Enchanted Forest? She’s been glaring at the trees since we left the courtyard.',
    next: 'tr2_2',
  },
  {
    id: 'tr2_2', chapter: 5, music: 'normal', bg: 'assets/bg_forest.jpg', chars: ['harry', 'ronn'], active: 'draconia', speaker: 'draconia',
    text: '"Because unlike you two, Ronn, I actually memorized the outer ward-lines before stepping into the dark. Keep your voice down—there’s movement ahead."',
    next: 'tr2_3',
  },
  {
    id: 'tr2_3', chapter: 5, music: 'danger', bg: 'assets/bg_forest.jpg', chars: ['barti', 'belatrix'], active: 'barti', fx: ['shake', 'flash-violet'], sfx: 'dark_magic', draconiaExpr: 'angry', speaker: 'barti',
    text: 'Stop them! Piter already delivered the Eclipse-Roots—don’t let Harry anywhere near the portal!',
    next: 'tr2_4',
  },
  {
    id: 'tr2_4', chapter: 5, music: 'danger', bg: 'assets/bg_forest.jpg', chars: ['harry', 'ronn'], active: 'ronn', fx: ['flash-emerald'], sfx: 'magic', draconiaExpr: 'angry', speaker: 'ronn',
    text: 'Without hesitating, I step in front of Harry and deflect Barti’s curse straight back into the shadows. Ronn stares wide-eyed: "Blimey, Draconia... you didn’t even blink before shielding him."',
    next: 'tr2_5',
  },
  {
    id: 'tr2_5', chapter: 5, music: 'serious', bg: 'assets/bg_forest.jpg', chars: ['lucio', 'harry'], active: 'lucio', speaker: 'lucio',
    text: 'Lord Lucio emerges from the treeline beside Professor Remuz’s patrol, forcing Belatrix and Barti to retreat. "Sharp reflexes, Draconia. Though I see your temper hasn’t softened."',
    next: 'tr2_6',
  },
  {
    id: 'tr2_6', chapter: 5, music: 'normal', bg: 'assets/bg_infirmary.png', chars: ['hermiona', 'lune'], active: 'hermiona', draconiaExpr: 'blush', speaker: 'hermiona',
    text: 'Back in the Infirmary, Hermiona finishes wrapping the scratch on Harry’s wrist. "Word travels fast, Draconia. Everyone knows you stepped in front of a dark curse for him."',
    next: 'tr2_7',
  },
  {
    id: 'tr2_7', chapter: 5, music: 'normal', bg: 'assets/bg_infirmary.png', chars: ['lune', 'nevile'], active: 'lune', draconiaExpr: 'blush', speaker: 'lune',
    text: 'Lune smiles softly from the doorway. "You pretend to be annoyed, Draconia, yet you haven’t left his bedside since we got back."',
    next: 'tr2_8',
  },
  {
    id: 'tr2_8', chapter: 5, music: 'romance', bg: 'assets/bg_infirmary.png', chars: ['harry'], active: 'harry', mood: 'blush', draconiaExpr: 'surprised', sfx: 'heartbeat', speaker: 'harry',
    text: 'Once the others step out, Harry nervously pulls a small silver-emerald hairpin from his pocket. "I noticed yours broke in the Forest. It’s not much... but I wanted you to have it."',
    next: 'tr2_split',
  },
  {
    id: 'tr2_split', chapter: 5, music: 'romance', bg: 'assets/bg_infirmary.png', chars: ['harry', 'hermiona'], active: 'draconia', draconiaExpr: 'blush', speaker: 'draconia',
    text: 'I stare at the delicate emerald hairpin resting in his palm. My throat goes tight—he actually noticed something so small in the middle of a fight.',
    choices: [
      { text: 'Take it quietly, hiding my blush: "You’re impossible, Harry... Fine. I’ll wear it, since you went to the trouble."', effects: { affection: 15 }, next: 't2_1' },
      { text: 'Smile gently: "Keep it safe for me until after we stop Thom. Tonight, all six of us need to stay focused."', effects: { courage: 20 }, next: 't4_1' },
    ],
  },

  // ==================== TRUNK 3: THE SIX-STAR PACT -> Splits into T4 (Guardians) or T9 (Vanguard) ====================
  {
    id: 'tr3_1', chapter: 6, music: 'serious', bg: 'assets/bg_library.png', chars: ['minerba', 'hermiona'], active: 'minerba', speaker: 'minerba',
    text: 'Excellent work arriving at the Library promptly, Draconia. With Hermiona’s research and Lune’s star-sight, we’ve pinpointed the exact ley-line feeding Thom’s breach.',
    next: 'tr3_2',
  },
  {
    id: 'tr3_2', chapter: 6, music: 'normal', bg: 'assets/bg_greenhouse.png', chars: ['nevile', 'pamona'], active: 'pamona', draconiaExpr: 'happy', speaker: 'pamona',
    text: 'Following Minerba’s map, we hurry across the damp lawn into Greenhouse Four. Professor Pamona smiles as we enter: "Just in time! Nevile’s Moon-Ferns just bloomed into pure silver shields!"',
    next: 'tr3_3',
  },
  {
    id: 'tr3_3', chapter: 6, music: 'normal', bg: 'assets/bg_greenhouse.png', chars: ['nevile', 'lune'], active: 'nevile', draconiaExpr: 'happy', speaker: 'nevile',
    text: 'Nevile hands each of us a glowing silver leaf. "I never thought I’d be preparing battle-wards alongside Draconia... Thank you for trusting us, seriously."',
    next: 'tr3_4',
  },
  {
    id: 'tr3_4', chapter: 6, music: 'serious', bg: 'assets/bg_bridge.png', chars: ['alaric', 'remuz'], active: 'alaric', sfx: 'wind', speaker: 'alaric',
    text: 'Armed with the shields, we rush out to the Stone Bridge where Headmaster Albuz and Professor Remuz are guarding the outer gate. "Time is short—Belatrix, Barti, and Piter are already forcing the Mirror Vault below."',
    next: 'tr3_5',
  },
  {
    id: 'tr3_5', chapter: 6, music: 'danger', bg: 'assets/bg_bridge.png', chars: ['harry', 'ronn'], active: 'harry', draconiaExpr: 'angry', speaker: 'harry',
    text: 'Ronn and I just returned from the outer wall—the wards are shaking! Draconia, what’s the call?',
    next: 'tr3_split',
  },
  {
    id: 'tr3_split', chapter: 6, music: 'serious', bg: 'assets/bg_bridge.png', chars: ['alaric', 'harry'], active: 'draconia', draconiaExpr: 'happy', speaker: 'draconia',
    text: 'Cold wind whips across the Stone Bridge. Hermiona, Ronn, Lune, Nevile, and Harry are all waiting on my word—not because of my surname, but because they actually trust me.',
    choices: [
      { text: '"Let’s rally Harry, Hermiona, Ronn, Lune, and Nevile at the core—together the six of us can seal the Mirror!"', effects: { courage: 25 }, next: 't4_1' },
      { text: '"Let me advance on the front line beside Headmaster Albuz and the professors to hold Thom back."', effects: { courage: 20, mystery: 10 }, next: 't9_1' },
    ],
  },

  // ==================== TRUNK 4: SECRETS OF THE GLASS -> Splits into T6 (Shadow Apprentice) or T7 (Echoes) or T8 (Mirror Queen) ====================
  {
    id: 'tr4_1', chapter: 7, music: 'mystery', bg: 'assets/bg_potions.jpg', chars: ['severo'], active: 'severo', speaker: 'severo',
    text: 'Close the dungeon door, Draconia. Few know this, but I once studied the Mirror Vault’s counter-runes. Thom’s portal is unstable—it can be turned against him.',
    next: 'tr4_2',
  },
  {
    id: 'tr4_2', chapter: 7, music: 'mystery', bg: 'assets/bg_potions.jpg', chars: ['severo'], active: 'severo', draconiaExpr: 'sad', speaker: 'severo',
    text: 'However, tampering with parallel magic risks severing you from everyone you love—including Harry. Are you certain you wish to walk the shadows?',
    next: 'tr4_3',
  },
  {
    id: 'tr4_3', chapter: 7, music: 'danger', bg: 'assets/bg_forest.jpg', chars: ['barti', 'piter'], active: 'piter', sfx: 'wind', draconiaExpr: 'angry', speaker: 'piter',
    text: 'After memorizing Severo’s counter-runes, I slip out alone past curfew to trace the silver ash into the Enchanted Forest. Ahead of me, Piter freezes in the mist: "Look, Barti! Draconia’s alone—no Harry, no Albuz!"',
    next: 'tr4_4',
  },
  {
    id: 'tr4_4', chapter: 7, music: 'danger', bg: 'assets/bg_forest.jpg', chars: ['belatrix'], active: 'belatrix', draconiaExpr: 'angry', speaker: 'belatrix',
    text: 'Belatrix steps from the shadows with a chilling grin. "Don’t touch her, fools! Her locket is drawing her straight to the hidden tunnel—let her walk right down to Lord Thom!"',
    next: 'tr4_5',
  },
  {
    id: 'tr4_5', chapter: 7, music: 'mystery', bg: 'assets/bg_vault.jpg', chars: ['thom'], active: 'thom', sfx: 'door', draconiaExpr: 'surprised', speaker: 'thom',
    text: 'Keeping my wand raised, I descend the stone passage beneath the roots until the obsidian Mirror Vault opens before me. Standing beside the glowing silver glass, Thom smiles: "At last, Draconia."',
    next: 'tr4_split',
  },
  {
    id: 'tr4_split', chapter: 7, music: 'mystery', bg: 'assets/bg_vault.jpg', chars: ['thom', 'severo'], active: 'draconia', draconiaExpr: 'sad', speaker: 'draconia',
    text: 'Silver light spirals around my ankles like cold water. In that reflection, I see Harry’s worried face—and realize whatever I choose right now, I can never take back.',
    choices: [
      { text: 'Give the agreed signal to Severo to invert the runes from the shadows and trap Thom.', effects: { courage: 20, mystery: 15 }, next: 't6_1' },
      { text: 'Step through the Mirror’s silver light alone to close the breach from within and keep Harry safe.', effects: { mystery: 35 }, next: 't7_1' },
      { text: 'Pretend to accept Thom’s offer so I can seize the Mirror’s crown at the final second.', effects: { mystery: 40, sincerity: -20 }, next: 't8_1' },
    ],
  },

  // ==================== TRUNK 5: THE ARISTOCRAT'S DUTY -> Splits into T5 (House Honor) or T10 (Solitude) ====================
  {
    id: 'tr5_1', chapter: 8, music: 'serious', bg: 'assets/bg_dorm.png', chars: ['lucio'], active: 'lucio', draconiaExpr: 'sad', speaker: 'lucio',
    text: 'Here in the Emerald Common Room, you hold yourself with admirable composure, Draconia. Yet remember: pride is a shield against dishonor, not a wall to shut out every ally.',
    next: 'tr5_2',
  },
  {
    id: 'tr5_2', chapter: 8, music: 'normal', bg: 'assets/bg_courtyard.png', chars: ['hermiona', 'nevile'], active: 'hermiona', speaker: 'hermiona',
    text: 'Later that evening, as Father and I cross the Courtyard toward the main gates, Hermiona and Nevile intercept us breathlessly. "Draconia, Lord Lucio—we’re heading to the Vault with Albuz. Please, we need your help."',
    next: 'tr5_3',
  },
  {
    id: 'tr5_3', chapter: 8, music: 'serious', bg: 'assets/bg_bridge.png', chars: ['harry'], active: 'harry', sfx: 'wind', draconiaExpr: 'sad', speaker: 'harry',
    text: 'Out on the snowy Stone Bridge where the faculty is assembling, Harry steps into my path one final time. "Whatever happened between our houses, Draconia, we need you down there. Will you stand with us—or stand alone?"',
    next: 'tr5_split',
  },
  {
    id: 'tr5_split', chapter: 8, music: 'serious', bg: 'assets/bg_bridge.png', chars: ['harry', 'lucio'], active: 'draconia', draconiaExpr: 'sad', speaker: 'draconia',
    text: 'Harry’s green eyes plead with me through the snow while my father stands silently beside me. My pride aches—why is letting someone in so terrifying?',
    choices: [
      { text: '"I will fight shoulder-to-shoulder with my father to defend this Academy—and earn your respect as an equal, Harry."', effects: { courage: 25, sincerity: 10 }, next: 't5_1' },
      { text: '"Go play the hero with Ronn and Hermiona, Harry. My family needs no one."', effects: { affection: -30, sincerity: -25 }, next: 't10_1' },
    ],
  },
]);
