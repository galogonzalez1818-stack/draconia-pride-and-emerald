/**
 * EPISODE 5: THE WINTER BALL & THE SHATTERED MIRROR
 * =================================================
 * Full Cinematic Finale, Final Boss Duels vs. Lord Thom (2 Phases),
 * and 5 Rich, Multi-Scene Epilogues!
 */
window.VN_BUILD([
  // ============================================================================
  // EPISODE 5A: ROMANCE / TSUNDERE CLIMAX -> ENDINGS 1 & 2
  // ============================================================================
  {
    id: 'e5_rom_1', chapter: 5, objective: 'ep5_climax', music: 'romance', bg: 'assets/bg_ball.jpg', chars: ['harry'], active: 'draconia', particles: 'snow', speaker: 'draconia', draconiaExpr: 'blush',
    text: 'The night of the Winter Ball arrives. Enchanted snow drifts lazily beneath a thousand floating golden candles in the Great Hall. As I descend the grand marble stairs in my tailored emerald-and-silver ball gown, Harry freezes mid-step near the archway—completely speechless.',
    next: 'e5_rom_2',
  },
  {
    id: 'e5_rom_2', chapter: 5, objective: 'ep5_climax', music: 'romance', bg: 'assets/bg_ball.jpg', chars: ['harry'], active: 'harry', mood: 'blush', sfx: 'heartbeat', speaker: 'harry', draconiaExpr: 'happy',
    text: 'Even his messy hair looks suspiciously combed tonight—and he actually took my advice on his tailored dark coat! Harry exhales softly, taking my gloved hand. "Draconia... you’re breathtaking. Seriously, I forgot every single word I practiced."',
    next: 'e5_rom_3',
  },
  {
    id: 'e5_rom_3', chapter: 5, objective: 'ep5_climax', music: 'danger', bg: 'assets/bg_ball.jpg', chars: ['albuz'], active: 'narrator', fx: ['shake', 'flash-violet'], sfx: 'glass', speaker: 'narrator', draconiaExpr: 'surprised',
    text: 'Just as the orchestra lifts its bows for the opening waltz—CRACK! Every tall mirror lining the Great Hall shatters into swirling violet light! Outside the windows, the winter moon turns blood-violet: the Eclipse has begun! Headmaster Albuz raises a golden barrier to shield the students.',
    next: 'e5_rom_4',
  },
  {
    id: 'e5_rom_4', chapter: 5, objective: 'ep5_climax', music: 'danger', bg: 'assets/bg_vault.jpg', chars: ['thom'], active: 'thom', sfx: 'dark_magic', speaker: 'thom', draconiaExpr: 'angry',
    text: 'Harry and I race straight beneath the hall into the obsidian Mirror Vault while Albuz, Severo, and Lord Lucio hold off Belatrix’s minions above! At the center of the glowing silver glass stands Lord Thom—tall, pale, and radiating chilling parallel-world power.',
    next: 'e5_rom_5',
  },
  {
    id: 'e5_rom_5', chapter: 5, objective: 'ep5_climax', music: 'danger', bg: 'assets/bg_vault.jpg', chars: ['thom'], active: 'thom', speaker: 'thom', draconiaExpr: 'angry',
    text: '"Look at you, Draconia," Lord Thom mocks, gesturing toward the swirling mirror showing a cold, solitary reflection of me kneeling in dark robes. "Holding hands with my greatest rival! Surrender your mother’s locket and claim the throne you were born for—before I erase Harry from both worlds!"',
    next: 'e5_rom_6',
  },
  {
    id: 'e5_rom_6', chapter: 5, objective: 'ep5_climax', music: 'danger', bg: 'assets/bg_vault.jpg', chars: ['harry'], active: 'draconia', speaker: 'draconia', draconiaExpr: 'angry',
    text: 'I step firmly beside Harry, my fingers gripping my wand as my mother’s silver locket blazes with radiant emerald fire! "That lonely ghost in your mirror isn’t me, Thom—and it never will be! You’re not touching Harry, and you’re not touching our world!"',
    next: 'e5_rom_boss',
  },
  {
    id: 'e5_rom_boss', chapter: 5, objective: 'ep5_climax', music: 'danger', bg: 'assets/bg_vault.jpg', chars: ['thom'], active: 'thom', fx: ['shake', 'flash-violet'], sfx: 'dark_magic', draconiaExpr: 'angry', speaker: 'thom',
    duel: { enemy: 'thom', ally: 'harry', hp: 170 },
    text: 'Lord Thom raises his obsidian wand in cold fury as the entire Vault shakes: "Foolish girl! Then let the Eclipse swallow you and Harry together!"',
    next: 'e5_rom_after',
  },
  {
    id: 'e5_rom_after', chapter: 5, objective: 'ep5_epilogue', music: 'romance', bg: 'assets/bg_vault.jpg', chars: ['harry'], active: 'harry', fx: ['flash-gold'], sfx: 'sparkle', speaker: 'harry', draconiaExpr: 'happy',
    text: 'Our wands lock together! Emerald light from my mother’s locket surges through Harry’s spell, blasting Lord Thom back into the collapsing rift and sealing the obsidian Mirror into quiet, harmless silver crystal forever! Harry catches me breathless in his arms. "We did it, Draconia... it’s finally over!"',
    next: 'e5_rom_choice',
  },
  {
    id: 'e5_rom_choice', chapter: 5, objective: 'ep5_epilogue', music: 'romance', bg: 'assets/bg_ball.jpg', chars: ['harry'], active: 'draconia', particles: 'snow', speaker: 'draconia', draconiaExpr: 'happy',
    text: 'An hour later, the Great Hall shines brighter than ever—repaired by Headmaster Albuz as the Winter Ball bursts into a joyous victory celebration! The orchestra strikes up a slow golden waltz, and Harry bows before me with a crooked, glowing grin. How do I claim this night?',
    choices: [
      {
        text: '💚 Smile openly and take his hand in front of the entire Academy: "No more hiding, Harry—this waltz is ours." (Ending 1: Sovereign of Hearts)',
        effects: { affection: 20, sincerity: 20 },
        next: 'end_sov_1',
      },
      {
        text: '🌹 Blush bright red and lift my chin playfully: "F-Fine, one waltz—just try not to step on my gown, idiot!" (Ending 2: Thorns & Roses)',
        effects: { affection: 20, courage: 10 },
        next: 'end_tho_1',
      },
    ],
  },

  // --- ENDING 1: SOVEREIGN OF HEARTS (TRUE OPEN ROMANCE — 6 FULL SCENES) ---
  {
    id: 'end_sov_1', chapter: 5, objective: 'ep5_epilogue', music: 'romance', bg: 'assets/bg_ball.jpg', chars: ['ronn'], active: 'ronn', speaker: 'ronn', draconiaExpr: 'happy',
    text: 'Across the punch table, Ronn’s jaw literally drops as Harry and I step hand-in-hand onto the center of the crystal floor. "Hermiona! Pinch me—Draconia is smiling like the sun and holding Harry’s hand in front of the whole school!" Hermiona just laughs and holds out her palm: "That’ll be five silver coins, Ronn."',
    next: 'end_sov_2',
  },
  {
    id: 'end_sov_2', chapter: 5, objective: 'ep5_epilogue', music: 'romance', bg: 'assets/bg_ball.jpg', chars: ['lucio'], active: 'lucio', speaker: 'lucio', draconiaExpr: 'happy',
    text: 'Near the emerald pillars, Lord Lucio watches us glide across the floor, raising a crystal goblet slightly toward me. When the music pauses, he approaches with calm aristocratic poise. "You honored your mother’s legacy tonight, Draconia—and stood beside the one your heart chose without flinching."',
    next: 'end_sov_3',
  },
  {
    id: 'end_sov_3', chapter: 5, objective: 'ep5_epilogue', music: 'romance', bg: 'assets/bg_ball.jpg', chars: ['lucio'], active: 'lucio', speaker: 'lucio', draconiaExpr: 'happy',
    text: 'Father glances dryly at Harry, whose collar has somehow gone slightly crooked again. "Take good care of her, young Harry. And for heaven’s sake, let her help you fix your tie before photographs." Harry grins earnestly: "I promise, Lord Lucio—every single day."',
    next: 'end_sov_4',
  },
  {
    id: 'end_sov_4', chapter: 5, objective: 'ep5_epilogue', music: 'romance', bg: 'assets/bg_tower.jpg', chars: ['harry'], active: 'draconia', particles: 'snow', speaker: 'draconia', draconiaExpr: 'happy',
    text: 'Later, we slip away from the cheering crowd onto the starlit terrace above the hall, where soft snow dances in the warm lantern glow. My mother’s silver locket rests cool and peaceful against my heart—its long watch finally complete.',
    next: 'end_sov_5',
  },
  {
    id: 'end_sov_5', chapter: 5, objective: 'ep5_epilogue', music: 'romance', bg: 'assets/bg_tower.jpg', chars: ['harry'], active: 'harry', mood: 'blush', sfx: 'heartbeat', speaker: 'harry', draconiaExpr: 'blush',
    text: 'Harry brushes a melting snowflake gently from my cheek, his emerald-green eyes filled with nothing but tenderness. "You know, everyone used to call you the Ice Heiress, Draconia... they never had a clue how warm your heart really is."',
    next: 'end_sov_6',
  },
  {
    id: 'end_sov_6', chapter: 5, objective: 'ep5_epilogue', music: 'romance', bg: 'assets/bg_tower.jpg', chars: ['harry'], active: 'draconia', sfx: 'sparkle', speaker: 'draconia', draconiaExpr: 'happy',
    text: '"Only because you were stubborn enough to stay until I took the mask off," I whisper with a radiant smile as he leans in beneath the winter stars. Pride and emerald, heart to heart—our real story is only just beginning.',
    ending: 'sovereign',
  },

  // --- ENDING 2: THORNS & ROSES (TSUNDERE ROMANCE — 6 FULL SCENES) ---
  {
    id: 'end_tho_1', chapter: 5, objective: 'ep5_epilogue', music: 'normal', bg: 'assets/bg_ball.jpg', chars: ['hermiona'], active: 'hermiona', speaker: 'hermiona', draconiaExpr: 'blush',
    text: 'As Harry leads me onto the dance floor while I furiously whisper instructions about his posture, Hermiona catches my eye and smiles knowingly. "Still insisting you two are strictly rivals, Draconia?"',
    next: 'end_tho_2',
  },
  {
    id: 'end_tho_2', chapter: 5, objective: 'ep5_epilogue', music: 'normal', bg: 'assets/bg_ball.jpg', chars: ['harry'], active: 'draconia', speaker: 'draconia', draconiaExpr: 'blush',
    text: '"O-Obviously! Somebody has to keep him from tripping over his own robes in front of Headmaster Albuz!" I protest indignantly—though my hand refuses to let go of Harry’s warm shoulder for even a second.',
    next: 'end_tho_3',
  },
  {
    id: 'end_tho_3', chapter: 5, objective: 'ep5_epilogue', music: 'romance', bg: 'assets/bg_ball.jpg', chars: ['harry'], active: 'harry', mood: 'blush', speaker: 'harry', draconiaExpr: 'blush',
    text: 'Harry spins me effortlessly—surprisingly graceful!—and leans close to my burning ear. "For the record, I practiced waltzing with Ronn for two hours yesterday just so you wouldn’t have anything to scold me about tonight."',
    next: 'end_tho_4',
  },
  {
    id: 'end_tho_4', chapter: 5, objective: 'ep5_epilogue', music: 'romance', bg: 'assets/bg_tower.jpg', chars: ['harry'], active: 'harry', particles: 'snow', mood: 'blush', sfx: 'heartbeat', speaker: 'harry', draconiaExpr: 'surprised',
    text: 'When the song ends, Harry draws me gently out onto the quiet snowy balcony overlooking the lake. Before I can deliver another proud lecture, he lifts my gloved hand softly and presses a warm, lingering kiss to my knuckles.',
    next: 'end_tho_5',
  },
  {
    id: 'end_tho_5', chapter: 5, objective: 'ep5_epilogue', music: 'romance', bg: 'assets/bg_tower.jpg', chars: ['harry'], active: 'draconia', speaker: 'draconia', draconiaExpr: 'blush',
    text: 'My entire brain completely short-circuits! "H-Harry! You can’t just do that without warning a lady of my station!" Harry laughs softly, eyes sparkling. "Oh? Should I ask permission before I hold your hand tomorrow morning at breakfast too?"',
    next: 'end_tho_6',
  },
  {
    id: 'end_tho_6', chapter: 5, objective: 'ep5_epilogue', music: 'romance', bg: 'assets/bg_tower.jpg', chars: ['harry'], active: 'draconia', sfx: 'sparkle', speaker: 'draconia', draconiaExpr: 'happy',
    text: 'Unable to hold back my smile any longer, I let out a soft laugh and lace my fingers stubbornly through his. "Idiot... you don’t need permission anymore." Even roses keep a few thorns—and Harry wouldn’t trade mine for the world.',
    ending: 'thorns',
  },

  // ============================================================================
  // EPISODE 5B: SIX-STAR ALLIANCE CLIMAX -> ENDING 3 (GUARDIANS)
  // ============================================================================
  {
    id: 'e5_all_1', chapter: 5, objective: 'ep5_climax', music: 'normal', bg: 'assets/bg_ball.jpg', chars: ['hermiona'], active: 'hermiona', particles: 'snow', speaker: 'hermiona', draconiaExpr: 'happy',
    text: 'The Winter Ball glitters under enchanted snowfall! For the very first time in Academy history, all six of us—Harry, Hermiona, Ronn, Lune, Nevile, and I—arrive together in our dress robes, sharing jokes like we’ve been best friends for years.',
    next: 'e5_all_2',
  },
  {
    id: 'e5_all_2', chapter: 5, objective: 'ep5_climax', music: 'danger', bg: 'assets/bg_ball.jpg', chars: ['albuz'], active: 'narrator', fx: ['shake', 'flash-violet'], sfx: 'glass', speaker: 'narrator', draconiaExpr: 'surprised',
    text: 'Suddenly the tall mirrors crack with violet fire as the Eclipse darkens the sky! Headmaster Albuz nods gravely toward our circle: "The professors will hold the Great Hall—Six-Star Circle, descend to the Mirror Vault and end Lord Thom!"',
    next: 'e5_all_3',
  },
  {
    id: 'e5_all_3', chapter: 5, objective: 'ep5_climax', music: 'danger', bg: 'assets/bg_vault.jpg', chars: ['thom'], active: 'thom', sfx: 'dark_magic', speaker: 'thom', draconiaExpr: 'angry',
    text: 'Down in the obsidian Vault, Lord Thom sneers in disgust as our six glowing Moon-Fern wards form a blazing hexagonal star around the Mirror. "A proud emerald heiress standing shoulder-to-shoulder with common house rivals?! Your mother’s noble blood is wasted on you!"',
    next: 'e5_all_4',
  },
  {
    id: 'e5_all_4', chapter: 5, objective: 'ep5_climax', music: 'danger', bg: 'assets/bg_vault.jpg', chars: ['thom'], active: 'draconia', speaker: 'draconia', draconiaExpr: 'angry',
    text: 'Nevile strengthens our shield, Lune predicts the rift currents, Hermiona chants the binding ward, Ronn flanks left, and Harry locks eyes with me on my right! "You know nothing about my mother’s pride, Thom—our strength is unity!"',
    next: 'e5_all_boss',
  },
  {
    id: 'e5_all_boss', chapter: 5, objective: 'ep5_climax', music: 'danger', bg: 'assets/bg_vault.jpg', chars: ['thom'], active: 'thom', fx: ['shake', 'flash-violet'], sfx: 'dark_magic', draconiaExpr: 'angry', speaker: 'thom',
    duel: { enemy: 'thom', ally: 'alliance', hp: 170 },
    text: 'Lord Thom erupts in dark lightning, trying to shatter our six-point circle: "Then watch your fragile alliance crumble into ash!"',
    next: 'end_grd_1',
  },
  {
    id: 'end_grd_1', chapter: 5, objective: 'ep5_epilogue', music: 'normal', bg: 'assets/bg_vault.jpg', chars: ['harry'], active: 'harry', fx: ['flash-gold'], sfx: 'sparkle', speaker: 'harry', draconiaExpr: 'happy',
    text: 'Six beams of magic converge through my mother’s silver locket in a blinding starlight pillar! Lord Thom is hurled back into the collapsing rift, and the Mirror seals shut with a crystalline chime!',
    next: 'end_grd_2',
  },
  {
    id: 'end_grd_2', chapter: 5, objective: 'ep5_epilogue', music: 'normal', bg: 'assets/bg_ball.jpg', chars: ['ronn'], active: 'ronn', particles: 'snow', speaker: 'ronn', draconiaExpr: 'happy',
    text: 'Back upstairs at the restored Winter Ball, the entire Academy erupts into deafening applause as all six of us walk back in dusted with silver stardust! Ronn throws an arm cheerfully toward the air: "Six wands, zero dark lords! Someone bring us triple punch!"',
    next: 'end_grd_3',
  },
  {
    id: 'end_grd_3', chapter: 5, objective: 'ep5_epilogue', music: 'normal', bg: 'assets/bg_ball.jpg', chars: ['lune'], active: 'lune', speaker: 'lune', draconiaExpr: 'happy',
    text: 'Lune places a tiny silver star-blossom beside my ear, smiling serenely. "Look around the hall, Draconia. Nobody is whispering out of fear anymore—everyone is smiling at you."',
    next: 'end_grd_4',
  },
  {
    id: 'end_grd_4', chapter: 5, objective: 'ep5_epilogue', music: 'serious', bg: 'assets/bg_ball.jpg', chars: ['lucio'], active: 'lucio', speaker: 'lucio', draconiaExpr: 'happy',
    text: 'Even Lord Lucio approaches our table—and astonishes Hermiona and Nevile by offering them a genuine, courteous bow. "Seeing rival houses stand unbroken under my daughter’s guidance... perhaps the old walls truly needed to fall. Well led, Draconia."',
    next: 'end_grd_5',
  },
  {
    id: 'end_grd_5', chapter: 5, objective: 'ep5_epilogue', music: 'romance', bg: 'assets/bg_ball.jpg', chars: ['harry'], active: 'harry', mood: 'blush', sfx: 'heartbeat', speaker: 'harry', draconiaExpr: 'blush',
    text: 'When the final slow song begins, Harry steps up beside me with a warm, slightly shy grin while Ronn and Hermiona pull Nevile and Lune onto the floor. "Hey, Captain... before the night ends, can I steal you for the last dance—just the two of us?"',
    next: 'end_grd_6',
  },
  {
    id: 'end_grd_6', chapter: 5, objective: 'ep5_epilogue', music: 'romance', bg: 'assets/bg_ball.jpg', chars: ['harry'], active: 'draconia', sfx: 'sparkle', speaker: 'draconia', draconiaExpr: 'happy',
    text: 'I slip my hand happily into his, surrounded by real friends and the boy who helped me break free of my cage. "I thought you’d never ask, Harry." Together, we are the Guardians of the Six-Star Rift—and tomorrow looks brighter than ever.',
    ending: 'guardians',
  },

  // ============================================================================
  // EPISODE 5C: SHADOW CIPHER CLIMAX -> ENDING 4 (KEEPER OF THE SILVER SHADOW)
  // ============================================================================
  {
    id: 'e5_shd_1', chapter: 5, objective: 'ep5_climax', music: 'mystery', bg: 'assets/bg_ball.jpg', chars: ['severo'], active: 'draconia', particles: 'snow', speaker: 'draconia', draconiaExpr: 'normal',
    text: 'Above us, violin music drifts from the glittering Winter Ball—students laughing safely, unaware that the Eclipse moon is rising. Wrapped in a dark emerald cloak, I slip silently past the stone arches beside Professor Severo toward the hidden Vault passage.',
    next: 'e5_shd_2',
  },
  {
    id: 'e5_shd_2', chapter: 5, objective: 'ep5_climax', music: 'mystery', bg: 'assets/bg_vault.jpg', chars: ['severo'], active: 'severo', sfx: 'door', speaker: 'severo', draconiaExpr: 'normal',
    text: 'Inside the freezing obsidian Mirror Vault, silver mist spirals off the glass. Severo draws his wand beside me, his voice low and steady. "Remember the counter-cipher, Draconia. When Lord Thom steps through, we turn his own dimensional tether into a prison—before a single student upstairs is harmed."',
    next: 'e5_shd_3',
  },
  {
    id: 'e5_shd_3', chapter: 5, objective: 'ep5_climax', music: 'danger', bg: 'assets/bg_vault.jpg', chars: ['thom'], active: 'thom', fx: ['shake', 'flash-violet'], sfx: 'dark_magic', speaker: 'thom', draconiaExpr: 'angry',
    text: 'Violet fire explodes across the Vault! Lord Thom steps out from the shattered glass—and halts in stunned outrage at the glowing silver runes Severo and I have already woven around his feet! "Severo?! You betrayed the dark arts to teach a schoolgirl the forbidden counter-cipher?!"',
    next: 'e5_shd_4',
  },
  {
    id: 'e5_shd_4', chapter: 5, objective: 'ep5_climax', music: 'danger', bg: 'assets/bg_vault.jpg', chars: ['thom'], active: 'draconia', speaker: 'draconia', draconiaExpr: 'angry',
    text: 'My mother’s silver locket blazes like starlight over my chest as my shadow-runes lock onto Thom’s wand. "You wanted a daughter of darkness, Thom? Then witness what shadow looks like when it protects the people I love!"',
    next: 'e5_shd_boss',
  },
  {
    id: 'e5_shd_boss', chapter: 5, objective: 'ep5_climax', music: 'danger', bg: 'assets/bg_vault.jpg', chars: ['thom'], active: 'thom', fx: ['shake', 'flash-violet'], sfx: 'dark_magic', draconiaExpr: 'angry', speaker: 'thom',
    duel: { enemy: 'thom', ally: 'severo', hp: 170 },
    text: 'Lord Thom roars as obsidian shards storm through the cavern: "You dare cage ME?! Break before the Mirror!"',
    next: 'end_shd_1',
  },
  {
    id: 'end_shd_1', chapter: 5, objective: 'ep5_epilogue', music: 'mystery', bg: 'assets/bg_vault.jpg', chars: ['severo'], active: 'severo', fx: ['flash-emerald'], sfx: 'glass', speaker: 'severo', draconiaExpr: 'surprised',
    text: 'With one final whispered counter-rune, the silver cipher snaps shut! Lord Thom’s scream vanishes as the Mirror collapses cleanly into a silent obsidian seal—not a single window shattered in the Winter Ball above!',
    next: 'end_shd_2',
  },
  {
    id: 'end_shd_2', chapter: 5, objective: 'ep5_epilogue', music: 'serious', bg: 'assets/bg_potions.jpg', chars: ['severo'], active: 'severo', speaker: 'severo', draconiaExpr: 'happy',
    text: 'Minutes later in the quiet dungeon corridor, Severo hands me back my cooled silver locket, his stern eyes holding rare, unmistakable respect. "Extraordinary discipline, Draconia. Your mother possessed that exact quiet courage. The school may never know who saved them tonight—yet I will not forget."',
    next: 'end_shd_3',
  },
  {
    id: 'end_shd_3', chapter: 5, objective: 'ep5_epilogue', music: 'romance', bg: 'assets/bg_tower.jpg', chars: [], active: 'draconia', particles: 'snow', speaker: 'draconia', draconiaExpr: 'sad',
    text: 'Too exhausted to join the cheering crowd below, I climb up to the snowy Astronomy Tower to catch my breath, listening to the distant waltz music drifting up from the Great Hall. They’re all safe. Harry is safe. That’s all that matters.',
    next: 'end_shd_4',
  },
  {
    id: 'end_shd_4', chapter: 5, objective: 'ep5_epilogue', music: 'romance', bg: 'assets/bg_tower.jpg', chars: ['harry'], active: 'harry', mood: 'blush', sfx: 'door', speaker: 'harry', draconiaExpr: 'surprised',
    text: 'The stairwell door creaks open behind me. I spin around—to find Harry standing breathless in his Winter Ball coat, holding my emerald ribbon tightly in his hand! "Told you I’d find you, Draconia. Severo let it slip where you went."',
    next: 'end_shd_5',
  },
  {
    id: 'end_shd_5', chapter: 5, objective: 'ep5_epilogue', music: 'romance', bg: 'assets/bg_tower.jpg', chars: ['harry'], active: 'harry', mood: 'blush', sfx: 'heartbeat', speaker: 'harry', draconiaExpr: 'blush',
    text: 'Harry steps up beside me in the falling snow, gently tying my emerald ribbon back around my wrist. "You saved every single person down there without asking for a word of applause. You don’t have to walk the shadows alone anymore, Draconia—because I’m right here."',
    next: 'end_shd_6',
  },
  {
    id: 'end_shd_6', chapter: 5, objective: 'ep5_epilogue', music: 'romance', bg: 'assets/bg_tower.jpg', chars: ['harry'], active: 'draconia', sfx: 'sparkle', speaker: 'draconia', draconiaExpr: 'happy',
    text: 'Tears of relief warm my cheeks as I rest my head quietly against his shoulder while distant waltz music swells beneath the stars. The silent guardian of the Academy—no longer alone in the dark.',
    ending: 'shadow_keeper',
  },

  // ============================================================================
  // EPISODE 5D: ARISTOCRAT'S HONOR CLIMAX -> ENDING 5 (PRIDE OF THE EMERALD HOUSE)
  // ============================================================================
  {
    id: 'e5_hon_1', chapter: 5, objective: 'ep5_climax', music: 'serious', bg: 'assets/bg_ball.jpg', chars: ['lucio'], active: 'lucio', particles: 'snow', speaker: 'lucio', draconiaExpr: 'normal',
    text: 'When the Winter Ball begins, Lord Lucio escorts me down the grand staircase—emerald silk and silver filigree gleaming beneath the floating candles. Whispers hush into genuine awe as we take our watch near the high table beside Headmaster Albuz.',
    next: 'e5_hon_2',
  },
  {
    id: 'e5_hon_2', chapter: 5, objective: 'ep5_climax', music: 'danger', bg: 'assets/bg_ball.jpg', chars: ['lucio'], active: 'narrator', fx: ['shake', 'flash-violet'], sfx: 'glass', speaker: 'narrator', draconiaExpr: 'surprised',
    text: 'Then the Eclipse strikes! Violet shockwaves fracture the stone floor, and the secret seal beneath the hall tears open! Without a moment’s hesitation, Lord Lucio raises his silver cane beside me: "With me, Draconia! Show this dark pretender what ancient honor looks like!"',
    next: 'e5_hon_3',
  },
  {
    id: 'e5_hon_3', chapter: 5, objective: 'ep5_climax', music: 'danger', bg: 'assets/bg_vault.jpg', chars: ['thom'], active: 'thom', sfx: 'dark_magic', speaker: 'thom', draconiaExpr: 'angry',
    text: 'Inside the Mirror Vault, Lord Thom stares down at us with venom in his eyes. "Lord Lucio! In my timeline, noble houses knelt before my throne! Why do you throw away supreme power for a school full of weaklings?!"',
    next: 'e5_hon_4',
  },
  {
    id: 'e5_hon_4', chapter: 5, objective: 'ep5_climax', music: 'danger', bg: 'assets/bg_vault.jpg', chars: ['lucio'], active: 'draconia', speaker: 'draconia', draconiaExpr: 'angry',
    text: 'Standing proudly at my father’s right hand as emerald family wards blaze across the floor, I answer before Father even speaks: "Because true nobility protects the realm—it never kneels to tyrants like you, Thom! Now face House Emerald!"',
    next: 'e5_hon_boss',
  },
  {
    id: 'e5_hon_boss', chapter: 5, objective: 'ep5_climax', music: 'danger', bg: 'assets/bg_vault.jpg', chars: ['thom'], active: 'thom', fx: ['shake', 'flash-violet'], sfx: 'dark_magic', draconiaExpr: 'angry', speaker: 'thom',
    duel: { enemy: 'thom', ally: 'lucio', hp: 170 },
    text: 'Lord Thom snarls, hurling dark fire across the obsidian pillars: "Then let your precious noble lineage burn with this Vault!"',
    next: 'end_hon_1',
  },
  {
    id: 'end_hon_1', chapter: 5, objective: 'ep5_epilogue', music: 'serious', bg: 'assets/bg_vault.jpg', chars: ['lucio'], active: 'lucio', fx: ['flash-gold'], sfx: 'sparkle', speaker: 'lucio', draconiaExpr: 'happy',
    text: 'Father’s ancestral barrier and my mother’s silver locket resonate in blinding emerald harmony! The wave shatters Thom’s obsidian wand and slams the dimensional Mirror sealed forever!',
    next: 'end_hon_2',
  },
  {
    id: 'end_hon_2', chapter: 5, objective: 'ep5_epilogue', music: 'normal', bg: 'assets/bg_ball.jpg', chars: ['albuz'], active: 'albuz', particles: 'snow', speaker: 'albuz', draconiaExpr: 'happy',
    text: 'When we ascend back into the restored Great Hall, Headmaster Albuz himself leads the entire Academy in a standing ovation. "Tonight, House Emerald proved that true pride is measured by courage and sacrifice. The Academy owes you a lasting debt, Draconia!"',
    next: 'end_hon_3',
  },
  {
    id: 'end_hon_3', chapter: 5, objective: 'ep5_epilogue', music: 'romance', bg: 'assets/bg_ball.jpg', chars: ['lucio'], active: 'lucio', speaker: 'lucio', draconiaExpr: 'happy',
    text: 'Lord Lucio rests his hand warmly on my shoulder, his eyes glistening with unspoken emotion. "You have surpassed anything I ever dreamed for you, my daughter. Your mother is smiling down on us tonight."',
    next: 'end_hon_4',
  },
  {
    id: 'end_hon_4', chapter: 5, objective: 'ep5_epilogue', music: 'romance', bg: 'assets/bg_ball.jpg', chars: ['harry'], active: 'harry', mood: 'blush', speaker: 'harry', draconiaExpr: 'blush',
    text: 'As the victory waltz starts up again, Harry walks calmly across the shining floor and offers me a surprisingly proper, deeply respectful bow. "You and Lord Lucio were extraordinary down there, Draconia. Would the champion of House Emerald honor me with a dance—as equals?"',
    next: 'end_hon_5',
  },
  {
    id: 'end_hon_5', chapter: 5, objective: 'ep5_epilogue', music: 'romance', bg: 'assets/bg_ball.jpg', chars: ['harry'], active: 'draconia', sfx: 'sparkle', speaker: 'draconia', draconiaExpr: 'happy',
    text: 'I glance briefly at Father—who gives a single, dignified nod—and then place my hand gracefully into Harry’s with a genuine, radiant smile. "Only if you can keep up, Harry." My pride is no longer a wall—it is a crown of emerald light.',
    ending: 'emerald_heir',
  },
]);
