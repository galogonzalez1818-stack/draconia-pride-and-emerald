/**
 * ACT III: 10 DISTINCT FINAL TIMELINES (t1_* through t10_*)
 * Every timeline has its own climax, aftermath, and ending.
 */
window.VN_BUILD([
  // ==================== TIMELINE 1: SOVEREIGN OF HEARTS ====================
  { id: 't1_1', chapter: 11, music: 'romance', bg: 'assets/bg_tower.jpg', chars: ['harry'], active: 'harry', mood: 'blush', speaker: 'harry',
    text: 'Wait—you really mean that? No more hiding from Ronn, Hermiona, or anyone else? You’ve no idea how happy that makes me, Draconia.', next: 't1_2' },
  { id: 't1_2', chapter: 11, music: 'serious', bg: 'assets/bg_vault.jpg', chars: ['alaric', 'severo'], active: 'alaric', speaker: 'alaric',
    text: 'Dawn is breaking, and Thom’s ritual has begun inside the Mirror Vault. Severo and I will hold the outer pillars—Harry and Draconia, advance to the core!', next: 't1_3' },
  { id: 't1_3', chapter: 11, music: 'danger', bg: 'assets/bg_vault.jpg', chars: ['thom', 'harry'], active: 'thom', speaker: 'thom', fx: ['shake', 'flash-violet'], sfx: 'dark_magic', draconiaExpr: 'angry',
    text: 'Pathetic! A proud daughter of nobility holding hands with my rival?! Your locket belongs to my world, Draconia—give it to me!', next: 't1_4' },
  { id: 't1_4', chapter: 11, music: 'danger', bg: 'assets/bg_vault.jpg', chars: ['harry', 'belatrix'], active: 'harry', speaker: 'harry', fx: ['shake', 'flash-emerald'], sfx: 'magic',
    text: 'Together, Draconia—on three! Channel everything into the silver glass!', next: 't1_5' },
  { id: 't1_5', chapter: 11, music: 'normal', bg: 'assets/bg_ball.jpg', chars: ['ronn', 'hermiona'], active: 'ronn', speaker: 'ronn',
    text: 'Three nights later, with Thom banished and the shattered Mirror safely sealed, the Grand Hall shines for the Winter Ball. Ronn grins across the punch table: "Best victory party we’ve ever had!"', next: 't1_6' },
  { id: 't1_6', chapter: 11, music: 'serious', bg: 'assets/bg_ball.jpg', chars: ['lucio', 'harry'], active: 'lucio', speaker: 'lucio',
    text: 'You upheld our family’s honor with courage, Draconia. And Harry... for a boy with hopelessly untidy hair, you’ve earned my respect.', next: 't1_7' },
  { id: 't1_7', chapter: 11, music: 'romance', bg: 'assets/bg_ball.jpg', chars: ['harry'], active: 'harry', mood: 'blush', speaker: 'harry',
    text: 'May I have this dance, Draconia? No more walls, no more pride between us—just you and me.', ending: 'sovereign' },

  // ==================== TIMELINE 2: THORNS & ROSES ====================
  { id: 't2_1', chapter: 12, music: 'romance', bg: 'assets/bg_infirmary.png', chars: ['harry'], active: 'harry', mood: 'blush', speaker: 'harry',
    text: 'Harry’s whole face softens when I pin it into my hair. "I knew emerald suited you, Draconia."', next: 't2_2' },
  { id: 't2_2', chapter: 12, music: 'danger', bg: 'assets/bg_vault.jpg', chars: ['thom', 'harry'], active: 'harry', fx: ['shake', 'flash-violet'], sfx: 'dark_magic', speaker: 'harry',
    text: 'Down in the Mirror Vault, spells flash across the obsidian pillars. "Watch your left, Draconia! And when we get out of here, you’re finally admitting you were worried about me!"', next: 't2_3' },
  { id: 't2_3', chapter: 12, music: 'serious', bg: 'assets/bg_vault.jpg', chars: ['severo', 'piter'], active: 'severo', speaker: 'severo',
    text: 'Severo binds Piter’s wand and reinforces the outer circle. "Save the arguments for later, both of you—seal the central pillar while Thom’s shield is broken!"', next: 't2_4' },
  { id: 't2_4', chapter: 12, music: 'normal', bg: 'assets/bg_ball.jpg', chars: ['hermiona', 'ronn'], active: 'hermiona', speaker: 'hermiona',
    text: 'Three evenings later at the Winter Ball—with Thom’s rift finally sealed—Hermiona smiles knowingly at us. "Still insisting you two are just rivals, Draconia?"', next: 't2_5' },
  { id: 't2_5', chapter: 12, music: 'romance', bg: 'assets/bg_ball.jpg', chars: ['harry'], active: 'harry', mood: 'blush', speaker: 'harry',
    text: 'Harry extends his hand with a teasing grin. "Come on, Draconia. Just one waltz—you can go back to pretending I annoy you tomorrow."', ending: 'thorns' },

  // ==================== TIMELINE 3: EMERALD & GOLD (SECRET DEVOTION) ====================
  { id: 't3_1', chapter: 13, music: 'romance', bg: 'assets/bg_tower.jpg', chars: ['harry'], active: 'harry', mood: 'blush', speaker: 'harry',
    text: 'A secret just between us? Honestly... I like the sound of that. Nobody’s expectations, nobody watching—just you and me.', next: 't3_2' },
  { id: 't3_2', chapter: 13, music: 'danger', bg: 'assets/bg_vault.jpg', chars: ['thom', 'harry'], active: 'thom', fx: ['shake', 'flash-violet'], sfx: 'dark_magic', speaker: 'thom',
    text: 'At dawn we slip down to the Mirror Vault beside Lord Lucio and the professors. Seeing my locket, Thom raises his wand in fury: "You dare defy me, Draconia?! That heirloom was meant to open the sky for my empire!"', next: 't3_3' },
  { id: 't3_3', chapter: 13, music: 'danger', bg: 'assets/bg_vault.jpg', chars: ['harry', 'lucio'], active: 'harry', fx: ['flash-emerald'], sfx: 'magic', speaker: 'harry',
    text: 'Watch out! With Lord Lucio holding Thom back, cast the sealing charm with me right now, Draconia!', next: 't3_4' },
  { id: 't3_4', chapter: 13, music: 'normal', bg: 'assets/bg_ball.jpg', chars: ['hermiona', 'ronn'], active: 'ronn', speaker: 'ronn',
    text: 'Three nights after our victory, the Winter Ball is in full swing. Across the room, Ronn squints in confusion: "Weird... Harry and Draconia barely spoke all evening, yet they both keep glancing toward the Astronomy Tower."', next: 't3_5' },
  { id: 't3_5', chapter: 13, music: 'romance', bg: 'assets/bg_tower.jpg', chars: ['harry'], active: 'harry', mood: 'blush', sfx: 'heartbeat', speaker: 'harry',
    text: 'Up on the quiet, starlit balcony away from the music, Harry catches his breath with a warm grin. "Made it past curfew without Ronn noticing. Happy Winter Ball, my secret emerald queen."', ending: 'secret_devotion' },

  // ==================== TIMELINE 4: THE SIX-STAR ALLIANCE ====================
  { id: 't4_1', chapter: 14, music: 'danger', bg: 'assets/bg_vault.jpg', chars: ['barti', 'piter'], active: 'barti', speaker: 'barti',
    text: 'Impossible! How did these six brats counter every single trap we laid in the chamber?!', next: 't4_2' },
  { id: 't4_2', chapter: 14, music: 'danger', bg: 'assets/bg_vault.jpg', chars: ['alaric', 'remuz'], active: 'alaric', fx: ['flash-gold'], sfx: 'magic', speaker: 'alaric',
    text: 'Professors Minerba, Severo, Remuz, and Pamona—hold the outer ring! Six students must link wands at the Mirror’s center to banish Thom!', next: 't4_3' },
  { id: 't4_3', chapter: 14, music: 'serious', bg: 'assets/bg_vault.jpg', chars: ['lucio', 'nevile'], active: 'lucio', speaker: 'lucio',
    text: 'Seeing six young witches and wizards from rival houses fight as one... perhaps the old ways truly needed to change. Well led, Draconia.', next: 't4_4' },
  { id: 't4_4', chapter: 14, music: 'normal', bg: 'assets/bg_ball.jpg', chars: ['hermiona', 'ronn'], active: 'hermiona', speaker: 'hermiona',
    text: 'Three nights later at the Winter Ball, with Thom’s breach sealed forever, Hermiona raises her glass. "Six wands, one unbroken shield! We didn’t just save the Academy—we proved we’re unstoppable together."', next: 't4_5' },
  { id: 't4_5', chapter: 14, music: 'normal', bg: 'assets/bg_ball.jpg', chars: ['harry', 'lune'], active: 'harry', speaker: 'harry',
    text: 'To the Guardians of the Rift! Romance can wait—tonight, I’m just proud to call you my closest friend, Draconia.', ending: 'guardians' },

  // ==================== TIMELINE 5: PRIDE OF THE ARISTOCRAT ====================
  { id: 't5_1', chapter: 15, music: 'serious', bg: 'assets/bg_vault.jpg', chars: ['lucio', 'harry'], active: 'lucio', speaker: 'lucio',
    text: 'Very well. Stand at my right hand, Draconia. Harry—take the left flank. Let Thom witness what true noble discipline looks like.', next: 't5_2' },
  { id: 't5_2', chapter: 15, music: 'danger', bg: 'assets/bg_vault.jpg', chars: ['lucio', 'belatrix'], active: 'belatrix', speaker: 'belatrix',
    text: 'Traitorous Lucio! Raising your cane against your own sister-in-arms?!', next: 't5_3' },
  { id: 't5_3', chapter: 15, music: 'serious', bg: 'assets/bg_vault.jpg', chars: ['lucio', 'thom'], active: 'lucio', speaker: 'lucio',
    text: 'Our lineage answers to honor, never to madness. Now, Draconia—seal the Mirror!', next: 't5_4' },
  { id: 't5_4', chapter: 15, music: 'normal', bg: 'assets/bg_ball.jpg', chars: ['harry', 'lucio'], active: 'harry', speaker: 'harry',
    text: 'Days later at the Winter Ball, after our combined spell banished Thom for good, Harry approaches Father and me with genuine warmth. "You two were incredible down there, Draconia. You’ve earned my deepest respect."', ending: 'house_honor' },

  // ==================== TIMELINE 6: STUDENT OF SHADOWS ====================
  { id: 't6_1', chapter: 16, music: 'mystery', bg: 'assets/bg_vault.jpg', chars: ['severo', 'thom'], active: 'severo', fx: ['flash-emerald'], sfx: 'magic', speaker: 'severo',
    text: 'Now, Draconia! Invert the silver runes I taught you—turn Thom’s own dimensional tether into a cage!', next: 't6_2' },
  { id: 't6_2', chapter: 16, music: 'danger', bg: 'assets/bg_vault.jpg', chars: ['thom', 'severo'], active: 'thom', fx: ['shake', 'flash-violet'], sfx: 'glass', speaker: 'thom',
    text: 'Severo?! You taught her the counter-cipher?! No—the Mirror is collapsing inward!', next: 't6_3' },
  { id: 't6_3', chapter: 16, music: 'serious', bg: 'assets/bg_potions.jpg', chars: ['severo'], active: 'severo', speaker: 'severo',
    text: 'The next afternoon in his quiet dungeon office, Severo sets down the sealed locket. "Remarkable control. Few students possess the discipline to command shadow-wards without being consumed by them. You have a true gift, Draconia."', next: 't6_4' },
  { id: 't6_4', chapter: 16, music: 'mystery', bg: 'assets/bg_hall.jpg', chars: ['harry'], active: 'harry', speaker: 'harry',
    text: 'Up in the Great Hall, students cheer the return of peace. Harry catches my eye across the crowd and walks over quietly. "Nobody else knows it was you and Severo who dismantled Thom’s ritual from the dark. Thank you, Draconia."', ending: 'shadow_apprentice' },

  // ==================== TIMELINE 7: ECHOES OF ANOTHER WORLD ====================
  { id: 't7_1', chapter: 17, music: 'mystery', bg: 'assets/bg_vault.jpg', chars: ['thom'], active: 'draconia', speaker: 'draconia',
    text: '"I’m sealing this rift from the inside, Thom—so Harry, my father, and this Academy never have to bleed for your war."', next: 't7_2' },
  { id: 't7_2', chapter: 17, music: 'danger', bg: 'assets/bg_vault.jpg', chars: ['harry', 'thom'], active: 'harry', speaker: 'harry',
    text: 'Draconia, NO! Don’t step into the Mirror alone—grab my hand!', next: 't7_3' },
  { id: 't7_3', chapter: 17, music: 'mystery', bg: 'assets/bg_vault.jpg', chars: ['harry'], active: 'draconia', speaker: 'draconia',
    text: 'I smile at him one last time through the silver light as the glass seals shut, dragging Thom back into the void.', next: 't7_4' },
  { id: 't7_4', chapter: 17, music: 'mystery', bg: 'assets/bg_tower.jpg', chars: ['harry'], active: 'narrator', speaker: 'narrator',
    text: 'Only a single emerald ribbon drifted onto the stone floor—proof that somewhere beyond the stars, Draconia is still watching over him.', ending: 'echoes' },

  // ==================== TIMELINE 8: QUEEN OF THE SHATTERED MIRROR ====================
  { id: 't8_1', chapter: 18, music: 'mystery', bg: 'assets/bg_vault.jpg', chars: ['thom'], active: 'thom', speaker: 'thom',
    text: 'Wise choice, Draconia. Take the silver crown of the Mirror—together we shall rule both realities!', next: 't8_2' },
  { id: 't8_2', chapter: 18, music: 'danger', bg: 'assets/bg_vault.jpg', chars: ['thom'], active: 'draconia', speaker: 'draconia',
    text: '"Together? You misunderstand me, Thom. There is only room for *one* sovereign in this vault."', next: 't8_3' },
  { id: 't8_3', chapter: 18, music: 'mystery', bg: 'assets/bg_vault.jpg', chars: ['harry', 'alaric'], active: 'alaric', speaker: 'alaric',
    text: 'By the stars... she banished Thom—yet she kept the Mirror’s silver crown for herself. What have you become, Draconia?', next: 't8_4' },
  { id: 't8_4', chapter: 18, music: 'mystery', bg: 'assets/bg_tower.jpg', chars: [], active: 'narrator', speaker: 'narrator',
    text: 'From the shadows of the Mirror Vault, I guard both timelines in secret—feared by dark sorcerers, and forever out of Harry’s reach.', ending: 'mirror_queen' },

  // ==================== TIMELINE 9: UNBROKEN DAWN ====================
  { id: 't9_1', chapter: 19, music: 'serious', bg: 'assets/bg_vault.jpg', chars: ['alaric', 'minerba'], active: 'minerba', speaker: 'minerba',
    text: 'Stand firm beside us, Draconia! Remuz and Pamona are holding the left arch—now channel your ward with the Headmaster!', next: 't9_2' },
  { id: 't9_2', chapter: 19, music: 'danger', bg: 'assets/bg_vault.jpg', chars: ['remuz', 'pamona'], active: 'remuz', fx: ['flash-gold'], sfx: 'magic', speaker: 'remuz',
    text: 'Thom’s shield is cracking! One more surge of golden light!', next: 't9_3' },
  { id: 't9_3', chapter: 19, music: 'normal', bg: 'assets/bg_hall.jpg', chars: ['alaric', 'minerba'], active: 'alaric', speaker: 'alaric',
    text: 'The next morning in the restored Great Hall, Headmaster Albuz addresses the school beside Professor Minerba. "Rarely have I seen a student match the discipline of our senior faculty. The Academy owes you a great debt, Draconia."', next: 't9_4' },
  { id: 't9_4', chapter: 19, music: 'serious', bg: 'assets/bg_ball.jpg', chars: ['harry'], active: 'harry', speaker: 'harry',
    text: 'That evening at the Winter Ball, Harry raises a goblet toward me. "You fought like a true champion alongside Albuz and Minerba. Even if your heart belongs to duty, I’ll always admire you, Draconia."', ending: 'vanguard' },

  // ==================== TIMELINE 10: WINTER SOLITUDE ====================
  { id: 't10_1', chapter: 20, music: 'serious', bg: 'assets/bg_tower.jpg', chars: ['minerba'], active: 'minerba', speaker: 'minerba',
    text: 'After Harry leaves with a hurt look, I retreat up to the Astronomy Tower. Professor Minerba pauses at the door: "Wait here if you must, Draconia. Keep watch over the upper wards while the rest of us descend into the Vault."', next: 't10_2' },
  { id: 't10_2', chapter: 20, music: 'serious', bg: 'assets/bg_ball.jpg', chars: ['alaric', 'severo'], active: 'alaric', speaker: 'alaric',
    text: 'Three nights later, music rises from the Winter Ball below. In the Great Hall, Headmaster Albuz announces their victory: "Harry, Hermiona, Ronn, Lune, and Nevile sealed the Mirror Vault. The Academy is safe."', next: 't10_3' },
  { id: 't10_3', chapter: 20, music: 'serious', bg: 'assets/bg_ball.jpg', chars: ['harry', 'hermiona'], active: 'harry', speaker: 'harry',
    text: 'Everyone’s cheering... I just wish Draconia had let us reach her.', next: 't10_4' },
  { id: 't10_4', chapter: 20, music: 'serious', bg: 'assets/bg_tower.jpg', chars: [], active: 'narrator', speaker: 'narrator',
    text: 'From the snowy balcony high above the Winter Ball, I watch Harry laughing far below. My aristocratic mask is completely intact—and colder than ever.', ending: 'solitude' },
]);
