/**
 * INTERACTIVE MAGICAL DUEL ENGINE
 * ===============================
 * Turn-based tactical wizarding duels right on the 2-character VN stage.
 * Features: Enemy Intent Telegraphs, Shield Parry/Reflect, Barrier Breaking,
 * Ally Combos, 2-Phase Boss Enrage, Locket Nova Ultimate, Floating Popups,
 * Live Draconia Expressions, and 8-Language Localization.
 */
(function () {
  'use strict';

  const DUEL_I18N = {
    en: {
      startBtn: '⚔️ Enter Magical Duel!',
      phase: 'PHASE',
      resonance: 'Locket Resonance',
      wardUp: '🛡️ WARD',
      spells: {
        attack: { name: '⚡ Emerald Lance', sub: 'High direct damage' },
        shield: { name: '🛡️ Silver Aegis', sub: 'Parry & reflect curses' },
        break: { name: '🌿 Rift Breaker', sub: 'Shatter ward / Ally heal' },
        ult: { name: '✨ Locket Nova', sub: 'Needs 100% Resonance' },
        ultReady: { name: '✨ LOCKET NOVA!', sub: 'UNLEASH ULTIMATE!' },
      },
      intents: {
        bolt: '⚡ Next: Dark Bolt',
        heavy: '🔥 Next: HEAVY CURSE! (Use Shield!)',
        ward: '🛡️ Next: Dark Barrier! (Use Breaker!)',
        ultimate: '💀 Next: RIFT COLLAPSE! (Parry w/ Shield!)',
      },
      enemies: {
        belatrix: {
          name: 'Belatrix',
          title: 'Witch of Chaos',
          intro: 'Belatrix cackles, violet lightning crackling from her wand! Read her next curse above and counter it!',
          phase2: 'Belatrix screams in fury: "Insolent little heiress! I’ll shred your noble shield to ribbons!"',
          defeat: 'Belatrix staggers back, her dark wand smoking as emerald light overwhelms her!',
        },
        barti: {
          name: 'Barti',
          title: 'Shadow Executioner',
          intro: 'Barti snaps into a lethal dueling stance! Break his Dark Barrier and parry his Rift Spears!',
          phase2: 'Barti’s eyes flare violet: "Not bad, Draconia... let’s see you survive my lethal barrage!"',
          defeat: 'Barti drops to one knee, his shadow wards shattered by Draconia’s precision!',
        },
        thom: {
          name: 'Lord Thom',
          title: 'Sovereign of the Dark Rift',
          intro: 'The Mirror Vault trembles as Lord Thom raises his obsidian wand! Use Shield against his heavy curses and Breaker on his Mirror Barrier!',
          phase2: 'PHASE 2! Lord Thom erupts in violet fire: "Enough games! Witness the shattering of two worlds!"',
          defeat: 'With a deafening crack of silver light, Lord Thom’s obsidian barrier shatters and the Rift recoils!',
        },
      },
      allies: {
        harry: 'Harry',
        lucio: 'Lord Lucio',
        severo: 'Prof. Severo',
        albuz: 'Headmaster Albuz',
        alliance: 'Six-Star Allies',
        solo: 'Silver Locket',
      },
      logs: {
        attackHit: 'Draconia fires an Emerald Lance for {dmg} damage!',
        attackBlocked: 'Emerald Lance hits the Dark Barrier for only {dmg} damage! (Use Rift Breaker next time!)',
        breakShatter: 'SHATTERED! Draconia’s Rift Breaker smashes the Dark Barrier for {dmg} damage and STUNS {enemy}!',
        breakAlly: '{ally} joins Draconia’s spell! Deals {dmg} damage and restores +{heal} HP!',
        shieldReady: 'Draconia raises her shimmering Silver Aegis!',
        ultHit: 'LOCKET NOVA! Ancestral emerald light blasts {enemy} for {dmg} massive damage and cancels their curse!',
        enemyBolt: '{enemy} strikes with a Dark Bolt for {dmg} damage!',
        enemyBoltBlocked: 'Silver Aegis absorbs {enemy}’s bolt! Only {dmg} damage taken (+{heal} HP focus)!',
        enemyHeavyHit: '{enemy} unleashes a devastating Heavy Curse for {dmg} damage!',
        enemyUltimateHit: 'DIMENSIONAL COLLAPSE! {enemy} tears the air for {dmg} massive damage!',
        enemyParried: 'PERFECT PARRY! Silver Aegis reflects {enemy}’s curse right back for {dmg} counter damage!',
        enemyWard: '{enemy} weaves a shimmering Dark Barrier! Use Rift Breaker to smash it!',
        enemyWardFocus: '{enemy} raises a Dark Barrier while Draconia steadies her breath (+{heal} HP)!',
        enemyStunned: '{enemy} reels from the shattered barrier and loses their attack!',
        victoryTitle: '⚔️ DUEL VICTORY!',
        victoryBody: 'Draconia prevailed against {enemy}! (+10 ⚔️ Courage)',
        defeatTitle: '💔 OVERWHELMED...',
        defeatBody: '{enemy} broke through Draconia’s guard. Tip: Watch the red warning above {enemy}—use Silver Aegis on 🔥/💀 curses and Rift Breaker on 🛡️ barriers!',
        continueBtn: '✨ Continue Story ▶',
        retryBtn: '🔄 Retry Duel',
      },
      popups: {
        parry: '🛡️ PARRY!',
        shatter: '💥 BROKEN!',
        nova: '✨ NOVA!',
        stun: '⚡ STUNNED',
        ward: '🛡️ BARRIER',
      },
    },

    es: {
      startBtn: '⚔️ ¡Iniciar Duelo Mágico!',
      phase: 'FASE',
      resonance: 'Resonancia del Relicario',
      wardUp: '🛡️ ESCUDO',
      spells: {
        attack: { name: '⚡ Lanza Esmeralda', sub: 'Alto daño directo' },
        shield: { name: '🛡️ Égida Plateada', sub: 'Desvía y refleja maldiciones' },
        break: { name: '🌿 Rompegrietas', sub: 'Rompe escudos / Cura aliada' },
        ult: { name: '✨ Nova del Relicario', sub: 'Requiere 100% Resonancia' },
        ultReady: { name: '✨ ¡NOVA DEL RELICARIO!', sub: '¡ATAQUE DEFINITIVO!' },
      },
      intents: {
        bolt: '⚡ Siguiente: Rayo Oscuro',
        heavy: '🔥 Siguiente: ¡MALDICIÓN FUERTE! (¡Usa Escudo!)',
        ward: '🛡️ Siguiente: ¡Barrera Oscura! (¡Usa Rompegrietas!)',
        ultimate: '💀 Siguiente: ¡COLAPSO DE GRIETA! (¡Refleja con Escudo!)',
      },
      enemies: {
        belatrix: {
          name: 'Belatrix',
          title: 'Bruja del Caos',
          intro: '¡Belatrix ríe con locura mientras rayos violetas brotan de su varita! Mira su próximo ataque arriba y contraataca.',
          phase2: 'Belatrix grita furiosa: "¡Insolente heredera! ¡Haré pedazos tu precioso escudo!"',
          defeat: '¡Belatrix retrocede tambaleándose mientras la luz esmeralda desborda su varita!',
        },
        barti: {
          name: 'Barti',
          title: 'Verdugo de Sombras',
          intro: '¡Barti adopta una postura de duelo letal! Rompe su Barrera Oscura y refleja sus Lanzas de Grieta.',
          phase2: 'Los ojos de Barti brillan en violeta: "Nada mal, Draconia... ¡veamos si sobrevives a mi ataque total!"',
          defeat: '¡Barti cae de rodillas cuando la precisión de Draconia destroza sus defensas!',
        },
        thom: {
          name: 'Lord Thom',
          title: 'Soberano de la Grieta Oscura',
          intro: '¡La Bóveda del Espejo tiembla cuando Lord Thom alza su varita! Usa Égida ante sus maldiciones fuertes y Rompegrietas ante su barrera.',
          phase2: '¡FASE 2! Lord Thom arde en fuego violeta: "¡Basta de juegos! ¡Presencia la fractura de dos mundos!"',
          defeat: '¡Con un estallido ensordecedor de luz plateada, el escudo de Lord Thom se hace añicos!',
        },
      },
      allies: {
        harry: 'Harry',
        lucio: 'Lord Lucio',
        severo: 'Prof. Severo',
        albuz: 'Director Albuz',
        alliance: 'Alianza Seis Estrellas',
        solo: 'Relicario Plateado',
      },
      logs: {
        attackHit: '¡Draconia dispara una Lanza Esmeralda causando {dmg} de daño!',
        attackBlocked: 'La Lanza Esmeralda choca contra la Barrera Oscura y solo hace {dmg} de daño. (¡Usa Rompegrietas!)',
        breakShatter: '¡ESCUDO ROTO! El Rompegrietas destroza la barrera por {dmg} de daño y ATURDE a {enemy}.',
        breakAlly: '¡{ally} combina su magia con Draconia! Causa {dmg} de daño y recupera +{heal} PV.',
        shieldReady: '¡Draconia alza su reluciente Égida Plateada!',
        ultHit: '¡NOVA DEL RELICARIO! La luz ancestral arrasa a {enemy} con {dmg} de daño masivo y anula su hechizo.',
        enemyBolt: '¡{enemy} ataca con un Rayo Oscuro causando {dmg} de daño!',
        enemyBoltBlocked: '¡La Égida Plateada frena el rayo de {enemy}! Solo {dmg} de daño (+{heal} PV de enfoque).',
        enemyHeavyHit: '¡{enemy} desata una Maldición Fuerte devastadora de {dmg} de daño!',
        enemyUltimateHit: '¡COLAPSO DIMENSIONAL! {enemy} rasga el aire causando {dmg} de daño brutal!',
        enemyParried: '¡CONTRAATAQUE PERFECTO! La Égida refleja la maldición de {enemy} devolviéndole {dmg} de daño!',
        enemyWard: '¡{enemy} invoca una Barrera Oscura! Usa Rompegrietas para destruirla.',
        enemyWardFocus: '{enemy} alza una Barrera Oscura mientras Draconia recupera el aliento (+{heal} PV).',
        enemyStunned: '¡{enemy} queda aturdido al romperse su barrera y pierde su turno!',
        victoryTitle: '⚔️ ¡VICTORIA EN EL DUELO!',
        victoryBody: '¡Draconia derrotó a {enemy}! (+10 ⚔️ Coraje)',
        defeatTitle: '💔 SUPERADA EN COMBATE...',
        defeatBody: '{enemy} rompió la guardia de Draconia. Consejo: Mira el aviso rojo arriba de {enemy}: usa Égida Plateada en 🔥/💀 y Rompegrietas en 🛡️.',
        continueBtn: '✨ Continuar Historia ▶',
        retryBtn: '🔄 Reintentar Duelo',
      },
      popups: {
        parry: '🛡️ ¡REFLEJO!',
        shatter: '💥 ¡ROTO!',
        nova: '✨ ¡NOVA!',
        stun: '⚡ ATURDIDO',
        ward: '🛡️ BARRERA',
      },
    },

    pt: {
      startBtn: '⚔️ Iniciar Duelo Mágico!',
      phase: 'FASE',
      resonance: 'Ressonância do Medalhão',
      wardUp: '🛡️ ESCUDO',
      spells: {
        attack: { name: '⚡ Lança Esmeralda', sub: 'Alto dano direto' },
        shield: { name: '🛡️ Égide Prateada', sub: 'Reflete maldições fortes' },
        break: { name: '🌿 Quebra-Fenda', sub: 'Quebra barreira / Cura aliada' },
        ult: { name: '✨ Nova do Medalhão', sub: 'Requer 100% Ressonância' },
        ultReady: { name: '✨ NOVA DO MEDALHÃO!', sub: 'ATAQUE SUPREMO!' },
      },
      intents: {
        bolt: '⚡ Próximo: Raio Sombrio',
        heavy: '🔥 Próximo: MALDIÇÃO FORTE! (Use Escudo!)',
        ward: '🛡️ Próximo: Barreira Sombria! (Use Quebra-Fenda!)',
        ultimate: '💀 Próximo: COLAPSO DA FENDA! (Reflita com Escudo!)',
      },
      enemies: {
        belatrix: {
          name: 'Belatrix',
          title: 'Bruxa do Caos',
          intro: 'Belatrix gargalha enquanto raios violetas saltam de sua varinha! Observe o aviso acima e contra-ataque!',
          phase2: 'Belatrix grita furiosa: "Herdeira insolente! Vou estraçalhar seu escudo!"',
          defeat: 'Belatrix cambaleia para trás, dominada pelo clarão esmeralda!',
        },
        barti: {
          name: 'Barti',
          title: 'Carrasco das Sombras',
          intro: 'Barti assume postura letal de duelo! Quebre sua barreira e reflita suas lanças!',
          phase2: 'Os olhos de Barti brilham em violeta: "Nada mal, Draconia... tente sobreviver agora!"',
          defeat: 'Barti cai de joelhos com suas defesas despedaçadas por Draconia!',
        },
        thom: {
          name: 'Lord Thom',
          title: 'Soberano da Fenda Sombria',
          intro: 'O Cofre do Espelho treme quando Lord Thom ergue sua varinha! Use Égide contra maldições fortes e Quebra-Fenda na barreira!',
          phase2: 'FASE 2! Lord Thom explode em chamas violetas: "Chega de jogos! Testemunhe a ruptura de dois mundos!"',
          defeat: 'Com um estrondo de luz prateada, a barreira de Lord Thom se estilhaça!',
        },
      },
      allies: {
        harry: 'Harry',
        lucio: 'Lord Lucio',
        severo: 'Prof. Severo',
        albuz: 'Diretor Albuz',
        alliance: 'Aliança Seis Estrelas',
        solo: 'Medalhão Prateado',
      },
      logs: {
        attackHit: 'Draconia dispara Lança Esmeralda causando {dmg} de dano!',
        attackBlocked: 'Lança Esmeralda bate na barreira por apenas {dmg} de dano! (Use Quebra-Fenda!)',
        breakShatter: 'QUEBRADO! Quebra-Fenda destrói a barreira por {dmg} de dano e ATORDOA {enemy}!',
        breakAlly: '{ally} une forças com Draconia! {dmg} de dano e +{heal} PV restaurados!',
        shieldReady: 'Draconia ergue sua Égide Prateada!',
        ultHit: 'NOVA DO MEDALHÃO! Luz ancestral atinge {enemy} por {dmg} de dano e cancela o feitiço!',
        enemyBolt: '{enemy} lança um Raio Sombrio de {dmg} de dano!',
        enemyBoltBlocked: 'Égide Prateada absorve o golpe! Apenas {dmg} de dano (+{heal} PV)!',
        enemyHeavyHit: '{enemy} dispara uma Maldição Forte por {dmg} de dano!',
        enemyUltimateHit: 'COLAPSO DIMENSIONAL! {enemy} causa {dmg} de dano massivo!',
        enemyParried: 'REFLEXO PERFEITO! Égide devolve a maldição de {enemy} por {dmg} de dano!',
        enemyWard: '{enemy} cria uma Barreira Sombria! Use Quebra-Fenda para quebrá-la!',
        enemyWardFocus: '{enemy} ergue uma Barreira enquanto Draconia recupera o fôlego (+{heal} PV)!',
        enemyStunned: '{enemy} cambaleia atordoado e perde o turno!',
        victoryTitle: '⚔️ VITÓRIA NO DUELO!',
        victoryBody: 'Draconia venceu {enemy}! (+10 ⚔️ Coragem)',
        defeatTitle: '💔 DERROTADA...',
        defeatBody: '{enemy} quebrou sua guarda. Dica: Use Égide Prateada em 🔥/💀 e Quebra-Fenda em 🛡️!',
        continueBtn: '✨ Continuar História ▶',
        retryBtn: '🔄 Tentar Novamente',
      },
      popups: { parry: '🛡️ REFLEXO!', shatter: '💥 QUEBRADO!', nova: '✨ NOVA!', stun: '⚡ ATORDOADO', ward: '🛡️ BARREIRA' },
    },

    fr: {
      startBtn: '⚔️ Lancer le Duel Magique !',
      phase: 'PHASE',
      resonance: 'Résonance du Médaillon',
      wardUp: '🛡️ BARRIÈRE',
      spells: {
        attack: { name: '⚡ Lance Émeraude', sub: 'Gros dégâts directs' },
        shield: { name: '🛡️ Égide d’Argent', sub: 'Renvoie les malédictions' },
        break: { name: '🌿 Brise-Faille', sub: 'Brise barrière / Soin allié' },
        ult: { name: '✨ Nova du Médaillon', sub: '100% Résonance requis' },
        ultReady: { name: '✨ NOVA DU MÉDAILLON !', sub: 'SORT ULTIME !' },
      },
      intents: {
        bolt: '⚡ Suivant : Éclair Sombre',
        heavy: '🔥 Suivant : MALÉDICTION LOURDE ! (Égide !)',
        ward: '🛡️ Suivant : Barrière Sombre ! (Brise-Faille !)',
        ultimate: '💀 Suivant : EFFONDREMENT ! (Renvoyez avec Égide !)',
      },
      enemies: {
        belatrix: { name: 'Belatrix', title: 'Sorcière du Chaos', intro: 'Belatrix ricane, des éclairs violets jaillissant de sa baguette !', phase2: 'Belatrix hurle : « Je vais pulvériser ton bouclier ! »', defeat: 'Belatrix vacille, submergée par la lumière émeraude !' },
        barti: { name: 'Barti', title: 'Exécuteur des Ombres', intro: 'Barti se met en garde ! Brisez sa barrière et renvoyez ses lances !', phase2: 'Barti sourit froidement : « Voyons si tu survis à ceci ! »', defeat: 'Barti pose un genou à terre, ses défenses brisées !' },
        thom: { name: 'Lord Thom', title: 'Souverain de la Faille', intro: 'Lord Thom lève sa baguette d’obsidienne ! Parez ses malédictions lourdes !', phase2: 'PHASE 2 ! Lord Thom s’embrase : « Assez joué ! Contemplez la fracture des mondes ! »', defeat: 'Dans un éclat argenté, la barrière de Lord Thom vole en éclats !' },
      },
      allies: { harry: 'Harry', lucio: 'Lord Lucio', severo: 'Prof. Severo', albuz: 'Directeur Albuz', alliance: 'Alliance Six-Étoiles', solo: 'Médaillon' },
      logs: {
        attackHit: 'Draconia lance une Lance Émeraude pour {dmg} dégâts !',
        attackBlocked: 'La barrière réduit la Lance à {dmg} dégâts ! (Utilisez Brise-Faille !)',
        breakShatter: 'BRISÉE ! Brise-Faille pulvérise la barrière ({dmg} dégâts) et ÉTOURDIT {enemy} !',
        breakAlly: '{ally} assiste Draconia ! {dmg} dégâts et +{heal} PV !',
        shieldReady: 'Draconia dresse son Égide d’Argent !',
        ultHit: 'NOVA DU MÉDAILLON ! {enemy} subit {dmg} dégâts colossaux et son sort est annulé !',
        enemyBolt: '{enemy} frappe avec un Éclair Sombre ({dmg} dégâts) !',
        enemyBoltBlocked: 'L’Égide absorbe le choc ! Seulement {dmg} dégâts (+{heal} PV) !',
        enemyHeavyHit: '{enemy} déchaîne une Malédiction Lourde ({dmg} dégâts) !',
        enemyUltimateHit: 'EFFONDREMENT DIMENSIONNEL ! {dmg} dégâts massifs !',
        enemyParried: 'PARADE PARFAITE ! L’Égide renvoie le sort de {enemy} pour {dmg} dégâts !',
        enemyWard: '{enemy} dresse une Barrière Sombre ! Utilisez Brise-Faille !',
        enemyWardFocus: '{enemy} se protège tandis que Draconia reprend son souffle (+{heal} PV) !',
        enemyStunned: '{enemy} est étourdi et perd son tour !',
        victoryTitle: '⚔️ VICTOIRE DU DUEL !',
        victoryBody: 'Draconia a vaincu {enemy} ! (+10 ⚔️ Courage)',
        defeatTitle: '💔 SUBMERGÉE...',
        defeatBody: '{enemy} a brisé votre garde. Astuce : Égide sur 🔥/💀 et Brise-Faille sur 🛡️ !',
        continueBtn: '✨ Continuer l’histoire ▶',
        retryBtn: '🔄 Réessayer le duel',
      },
      popups: { parry: '🛡️ PARADE !', shatter: '💥 BRISÉ !', nova: '✨ NOVA !', stun: '⚡ ÉTOURDI', ward: '🛡️ BARRIÈRE' },
    },

    de: {
      startBtn: '⚔️ Magisches Duell starten!',
      phase: 'PHASE',
      resonance: 'Medaillon-Resonanz',
      wardUp: '🛡️ SCHILD',
      spells: {
        attack: { name: '⚡ Smaragdlanze', sub: 'Hoher Direktschaden' },
        shield: { name: '🛡️ Silberschild', sub: 'Reflektiert starke Flüche' },
        break: { name: '🌿 Rissbrecher', sub: 'Bricht Barriere / Heilung' },
        ult: { name: '✨ Medaillon-Nova', sub: 'Braucht 100% Resonanz' },
        ultReady: { name: '✨ MEDAILLON-NOVA!', sub: 'ULTIMATIVER ZAUBER!' },
      },
      intents: {
        bolt: '⚡ Nächster Zug: Schattenblitz',
        heavy: '🔥 Nächster Zug: STARKER FLUCH! (Schild nutzen!)',
        ward: '🛡️ Nächster Zug: Dunkle Barriere! (Rissbrecher!)',
        ultimate: '💀 Nächster Zug: RISS-KOLLAPS! (Mit Schild kontern!)',
      },
      enemies: {
        belatrix: { name: 'Belatrix', title: 'Hexe des Chaos', intro: 'Belatrix lacht irre, violette Blitze zucken aus ihrem Stab!', phase2: 'Belatrix kreischt: „Ich zerfetze deinen Schild!“', defeat: 'Belatrix taumelt zurück, überwältigt vom Smaragdlicht!' },
        barti: { name: 'Barti', title: 'Schattenvollstrecker', intro: 'Barti geht in Kampfstellung! Brich seine Barriere und kontere seine Speere!', phase2: 'Barti grinst finster: „Mal sehen, ob du das überlebst!“', defeat: 'Barti sinkt auf ein Knie, seine Abwehr ist gebrochen!' },
        thom: { name: 'Lord Thom', title: 'Herrscher des Dunklen Risses', intro: 'Das Spiegelgewölbe bebt! Kontere Lord Thoms Flüche mit dem Silberschild!', phase2: 'PHASE 2! Lord Thom lodert violett: „Genug gespielt! Erlebe den Bruch zweier Welten!“', defeat: 'Mit silbernem Donnern zerspringt Lord Thoms Barriere!' },
      },
      allies: { harry: 'Harry', lucio: 'Lord Lucio', severo: 'Prof. Severo', albuz: 'Schulleiter Albuz', alliance: 'Sechs-Sterne-Bund', solo: 'Silbermedaillon' },
      logs: {
        attackHit: 'Draconias Smaragdlanze trifft für {dmg} Schaden!',
        attackBlocked: 'Die Barriere dämpft die Lanze auf {dmg} Schaden! (Rissbrecher nutzen!)',
        breakShatter: 'ZERBROCHEN! Rissbrecher zerschmettert die Barriere ({dmg} Schaden) und BETÄUBT {enemy}!',
        breakAlly: '{ally} unterstützt Draconia! {dmg} Schaden und +{heal} LP!',
        shieldReady: 'Draconia erhebt den schimmernden Silberschild!',
        ultHit: 'MEDAILLON-NOVA! {enemy} erleidet {dmg} massiven Schaden und sein Fluch wird abgebrochen!',
        enemyBolt: '{enemy} trifft mit Schattenblitz ({dmg} Schaden)!',
        enemyBoltBlocked: 'Silberschild fängt den Blitz ab! Nur {dmg} Schaden (+{heal} LP)!',
        enemyHeavyHit: '{enemy} entfesselt einen Starken Fluch ({dmg} Schaden)!',
        enemyUltimateHit: 'DIMENSIONSKOLLAPS! {enemy} verursacht {dmg} enormen Schaden!',
        enemyParried: 'PERFEKTER KONTER! Silberschild wirft {enemy}s Fluch für {dmg} Schaden zurück!',
        enemyWard: '{enemy} wirkt eine Dunkle Barriere! Nutze Rissbrecher!',
        enemyWardFocus: '{enemy} errichtet eine Barriere, während Draconia Kraft sammelt (+{heal} LP)!',
        enemyStunned: '{enemy} taumelt betäubt und verliert den Zug!',
        victoryTitle: '⚔️ DUELL GEWONNEN!',
        victoryBody: 'Draconia hat {enemy} besiegt! (+10 ⚔️ Mut)',
        defeatTitle: '💔 ÜBERWÄLTIGT...',
        defeatBody: '{enemy} durchbrach deine Deckung. Tipp: Silberschild bei 🔥/💀, Rissbrecher bei 🛡️!',
        continueBtn: '✨ Geschichte fortsetzen ▶',
        retryBtn: '🔄 Duell wiederholen',
      },
      popups: { parry: '🛡️ KONTER!', shatter: '💥 GEBROCHEN!', nova: '✨ NOVA!', stun: '⚡ BETÄUBT', ward: '🛡️ BARRIERE' },
    },

    ja: {
      startBtn: '⚔️ 魔法決闘を開始！',
      phase: 'フェーズ',
      resonance: 'ロケット共鳴',
      wardUp: '🛡️ 結界',
      spells: {
        attack: { name: '⚡ エメラルドランス', sub: '高威力の直接攻撃' },
        shield: { name: '🛡️ シルバーイージス', sub: '強呪文を反射カウンター' },
        break: { name: '🌿 リフトブレイカー', sub: '結界破壊 / 仲間連携回復' },
        ult: { name: '✨ ロケット・ノヴァ', sub: '共鳴100%で解放' },
        ultReady: { name: '✨ ロケット・ノヴァ！', sub: '必殺奥義を発動！' },
      },
      intents: {
        bolt: '⚡ 次: ダークボルト',
        heavy: '🔥 次: 強呪文！(シールドで反射！)',
        ward: '🛡️ 次: 闇の結界！(ブレイカーで破壊！)',
        ultimate: '💀 次: 次元崩壊！(シールドで完全反射！)',
      },
      enemies: {
        belatrix: { name: 'ベラトリクス', title: '混沌の魔女', intro: 'ベラトリクスの杖から紫の雷が弾ける！予告を見て反撃せよ！', phase2: 'ベラトリクスが叫ぶ「生意気な小娘！その盾ごと引き裂いてやる！」', defeat: 'エメラルドの光に圧倒され、ベラトリクスはよろめいた！' },
        barti: { name: 'バルティ', title: '影の処刑人', intro: 'バルティが決闘の構えを取る！結界を砕き、槍を反射せよ！', phase2: 'バルティの瞳が紫に燃える「やるな、ドラコニア…本気を見せてやろう！」', defeat: 'ドラコニアの的確な一撃でバルティの防御が砕け散った！' },
        thom: { name: 'トム卿', title: '闇の裂け目の覇者', intro: '鏡の保管庫が震える！トム卿の強呪文はシールドで跳ね返せ！', phase2: 'フェーズ2！トム卿が紫炎を纏う「遊びは終わりだ！二つの世界の崩壊を見よ！」', defeat: '銀色の閃光とともに、トム卿の黒曜石の結界が砕け散った！' },
      },
      allies: { harry: 'ハリー', lucio: 'ルシオ卿', severo: 'セヴェロ教授', albuz: 'アルブズ校長', alliance: '六ツ星の仲間', solo: '銀のロケット' },
      logs: {
        attackHit: 'ドラコニアのエメラルドランス！{dmg}ダメージ！',
        attackBlocked: '闇の結界に阻まれ{dmg}ダメージ！（ブレイカーを使おう！）',
        breakShatter: '結界破壊！{dmg}ダメージを与え、{enemy}をスタンさせた！',
        breakAlly: '{ally}との連携魔法！{dmg}ダメージ＆HP+{heal}回復！',
        shieldReady: 'ドラコニアはシルバーイージスを展開した！',
        ultHit: 'ロケット・ノヴァ発動！{enemy}に{dmg}の絶大ダメージ＆呪文を中断！',
        enemyBolt: '{enemy}のダークボルト！{dmg}ダメージ！',
        enemyBoltBlocked: 'シールドが軽減！{dmg}ダメージ（集中でHP+{heal}）！',
        enemyHeavyHit: '{enemy}の強呪文が炸裂！{dmg}ダメージ！',
        enemyUltimateHit: '次元崩壊！{enemy}が{dmg}の凄まじいダメージ！',
        enemyParried: '完全反射！シルバーイージスが{enemy}の呪文を跳ね返し{dmg}ダメージ！',
        enemyWard: '{enemy}が闇の結界を張った！ブレイカーで砕け！',
        enemyWardFocus: '{enemy}が結界を張る間にドラコニアは息を整えた（HP+{heal}）！',
        enemyStunned: '{enemy}は結界破壊の衝撃で動けない！',
        victoryTitle: '⚔️ 決闘勝利！',
        victoryBody: 'ドラコニアは{enemy}を打ち破った！（+10 ⚔️ 勇気）',
        defeatTitle: '💔 敗北…',
        defeatBody: '{enemy}に押し切られた。ヒント：🔥/💀にはシールド、🛡️にはブレイカー！',
        continueBtn: '✨ 物語を続ける ▶',
        retryBtn: '🔄 決闘をやり直す',
      },
      popups: { parry: '🛡️ 反射！', shatter: '💥 破壊！', nova: '✨ 奥義！', stun: '⚡ スタン', ward: '🛡️ 結界' },
    },

    ko: {
      startBtn: '⚔️ 마법 결투 시작!',
      phase: '페이즈',
      resonance: '로켓 공명',
      wardUp: '🛡️ 결계',
      spells: {
        attack: { name: '⚡ 에메랄드 랜스', sub: '강력한 직접 피해' },
        shield: { name: '🛡️ 실버 이지스', sub: '강한 저주 반사' },
        break: { name: '🌿 균열 파괴', sub: '결계 파괴 / 동료 회복' },
        ult: { name: '✨ 로켓 노바', sub: '공명 100% 필요' },
        ultReady: { name: '✨ 로켓 노바!', sub: '궁극기 발동!' },
      },
      intents: {
        bolt: '⚡ 다음: 어둠의 번개',
        heavy: '🔥 다음: 강력한 저주! (방패 사용!)',
        ward: '🛡️ 다음: 어둠의 결계! (균열 파괴!)',
        ultimate: '💀 다음: 차원 붕괴! (방패로 반사!)',
      },
      enemies: {
        belatrix: { name: '벨라트릭스', title: '혼돈의 마녀', intro: '벨라트릭스가 광기 어리게 웃으며 보랏빛 번개를 모읍니다!', phase2: '벨라트릭스가 외친다: "건방진 계집! 네 방패째로 찢어주마!"', defeat: '에메랄드 빛에 압도되어 벨라트릭스가 비틀거립니다!' },
        barti: { name: '바르티', title: '그림자 처형자', intro: '바르티가 치명적인 결투 자세를 취합니다! 결계를 부수고 창을 반사하세요!', phase2: '바르티의 눈이 보랏빛으로 빛난다: "꽤 하는군… 이번엔 못 막을 거다!"', defeat: '드라코니아의 정밀한 마법에 바르티의 방어가 무너졌습니다!' },
        thom: { name: '로드 톰', title: '어둠의 균열 군주', intro: '거울 보관소가 진동합니다! 로드 톰의 강한 저주는 방패로 반사하세요!', phase2: '페이즈 2! 로드 톰이 보랏빛 화염을 일으킨다: "장난은 끝이다! 두 세계의 붕괴를 보아라!"', defeat: '은빛 폭발과 함께 로드 톰의 흑요석 방벽이 산산조각 났습니다!' },
      },
      allies: { harry: '해리', lucio: '루시오 경', severo: '세베로 교수', albuz: '알부즈 교장', alliance: '육성 동맹', solo: '은빛 로켓' },
      logs: {
        attackHit: '드라코니아의 에메랄드 랜스! {dmg} 피해!',
        attackBlocked: '어둠의 결계에 막혀 {dmg} 피해! (균열 파괴를 사용하세요!)',
        breakShatter: '결계 파괴! {dmg} 피해를 주고 {enemy}을(를) 기절시켰습니다!',
        breakAlly: '{ally}와(과) 합동 마법! {dmg} 피해 및 HP +{heal} 회복!',
        shieldReady: '드라코니아가 실버 이지스를 펼쳤습니다!',
        ultHit: '로켓 노바! {enemy}에게 {dmg}의 막대한 피해를 주고 주문을 취소시켰습니다!',
        enemyBolt: '{enemy}의 어둠의 번개! {dmg} 피해!',
        enemyBoltBlocked: '실버 이지스가 충격을 줄였습니다! {dmg} 피해 (집중 HP +{heal})!',
        enemyHeavyHit: '{enemy}의 강력한 저주! {dmg} 피해!',
        enemyUltimateHit: '차원 붕괴! {enemy}이(가) {dmg}의 엄청난 피해를 입혔습니다!',
        enemyParried: '완벽한 반사! 실버 이지스가 {enemy}의 저주를 되돌려 {dmg} 피해!',
        enemyWard: '{enemy}이(가) 어둠의 결계를 세웠습니다! 균열 파괴로 부수세요!',
        enemyWardFocus: '{enemy}이(가) 결계를 세우는 동안 드라코니아가 숨을 고릅니다 (HP +{heal})!',
        enemyStunned: '{enemy}이(가) 결계 파괴 충격으로 행동하지 못합니다!',
        victoryTitle: '⚔️ 결투 승리!',
        victoryBody: '드라코니아가 {enemy}을(를) 물리쳤습니다! (+10 ⚔️ 용기)',
        defeatTitle: '💔 패배...',
        defeatBody: '{enemy}에게 밀렸습니다. 팁: 🔥/💀에는 방패, 🛡️에는 균열 파괴를 쓰세요!',
        continueBtn: '✨ 이야기 계속 ▶',
        retryBtn: '🔄 결투 재도전',
      },
      popups: { parry: '🛡️ 반사!', shatter: '💥 파괴!', nova: '✨ 궁극기!', stun: '⚡ 기절', ward: '🛡️ 결계' },
    },

    zh: {
      startBtn: '⚔️ 开启魔法决斗！',
      phase: '阶段',
      resonance: '吊坠共鸣',
      wardUp: '🛡️ 护盾',
      spells: {
        attack: { name: '⚡ 翡翠魔枪', sub: '高额直接伤害' },
        shield: { name: '🛡️ 白银圣盾', sub: '弹反强力黑咒' },
        break: { name: '🌿 裂隙破盾', sub: '粉碎护盾 / 同伴治疗' },
        ult: { name: '✨ 吊坠星爆', sub: '需要100%共鸣' },
        ultReady: { name: '✨ 吊坠星爆！', sub: '释放终极奥义！' },
      },
      intents: {
        bolt: '⚡ 下回合：暗影电击',
        heavy: '🔥 下回合：强力黑咒！（快用圣盾！）',
        ward: '🛡️ 下回合：暗影护盾！（快用破盾！）',
        ultimate: '💀 下回合：次元崩塌！（用圣盾弹反！）',
      },
      enemies: {
        belatrix: { name: '贝拉特里克斯', title: '混沌女巫', intro: '贝拉特里克斯狂笑着挥舞魔杖！观察上方预告并反击！', phase2: '贝拉特里克斯怒吼：“狂妄的小丫头！我要撕碎你的护盾！”', defeat: '翡翠光芒压倒了黑暗，贝拉特里克斯踉跄败退！' },
        barti: { name: '巴蒂', title: '暗影处刑者', intro: '巴蒂摆出致命决斗架势！粉碎他的护盾并弹反裂隙之枪！', phase2: '巴蒂双目泛起紫光：“有点本事…看你能不能接下这一轮！”', defeat: '德拉科尼亚精准的魔咒彻底瓦解了巴蒂的防御！' },
        thom: { name: '汤姆勋爵', title: '暗影裂隙之主', intro: '镜之密室剧烈震颤！用白银圣盾弹反汤姆勋爵的强力黑咒！', phase2: '第二阶段！汤姆勋爵燃起紫焰：“游戏结束了！见证两个世界的破碎吧！”', defeat: '伴随银光巨响，汤姆勋爵的黑曜石护盾轰然碎裂！' },
      },
      allies: { harry: '哈利', lucio: '卢修斯勋爵', severo: '塞维罗教授', albuz: '阿布兹校长', alliance: '六星同盟', solo: '银色吊坠' },
      logs: {
        attackHit: '德拉科尼亚射出翡翠魔枪，造成 {dmg} 点伤害！',
        attackBlocked: '暗影护盾挡下了部分伤害，仅造成 {dmg} 点！（快用裂隙破盾！）',
        breakShatter: '护盾粉碎！裂隙破盾造成 {dmg} 点伤害并击晕了{enemy}！',
        breakAlly: '{ally}与德拉科尼亚合击！造成 {dmg} 点伤害并恢复 +{heal} 生命！',
        shieldReady: '德拉科尼亚展开璀璨的白银圣盾！',
        ultHit: '吊坠星爆！先祖翡翠之光对{enemy}造成 {dmg} 点巨额伤害并打断施法！',
        enemyBolt: '{enemy}释放暗影电击，造成 {dmg} 点伤害！',
        enemyBoltBlocked: '白银圣盾吸收了冲击！仅受 {dmg} 点伤害（专注恢复 +{heal} 生命）！',
        enemyHeavyHit: '{enemy}施放强力黑咒，造成 {dmg} 点重创！',
        enemyUltimateHit: '次元崩塌！{enemy}撕裂空间造成 {dmg} 点毁灭伤害！',
        enemyParried: '完美弹反！白银圣盾将{enemy}的黑咒反弹回去，造成 {dmg} 点反伤！',
        enemyWard: '{enemy}张开了暗影护盾！快用裂隙破盾粉碎它！',
        enemyWardFocus: '{enemy}张开护盾，德拉科尼亚趁机调息（+{heal} 生命）！',
        enemyStunned: '{enemy}因护盾破碎陷入眩晕，错失本回合攻击！',
        victoryTitle: '⚔️ 决斗胜利！',
        victoryBody: '德拉科尼亚击败了{enemy}！（+10 ⚔️ 勇气）',
        defeatTitle: '💔 陷入劣势…',
        defeatBody: '防线被{enemy}突破了。提示：看到 🔥/💀 用白银圣盾，看到 🛡️ 用裂隙破盾！',
        continueBtn: '✨ 继续剧情 ▶',
        retryBtn: '🔄 重新挑战',
      },
      popups: { parry: '🛡️ 弹反！', shatter: '💥 破盾！', nova: '✨ 星爆！', stun: '⚡ 眩晕', ward: '🛡️ 护盾' },
    },
  };

  const ENEMY_PATTERNS = {
    belatrix: {
      phase1: ['bolt', 'heavy', 'ward', 'heavy', 'bolt'],
      phase2: ['heavy', 'bolt', 'heavy', 'ward', 'heavy'],
      boltDmg: 15,
      heavyDmg: 28,
      ultDmg: 36,
    },
    barti: {
      phase1: ['ward', 'heavy', 'bolt', 'ward', 'heavy'],
      phase2: ['heavy', 'ward', 'heavy', 'bolt', 'heavy'],
      boltDmg: 16,
      heavyDmg: 30,
      ultDmg: 36,
    },
    thom: {
      phase1: ['bolt', 'ward', 'heavy', 'bolt', 'ward'],
      phase2: ['ultimate', 'ward', 'heavy', 'ultimate', 'bolt'],
      boltDmg: 17,
      heavyDmg: 31,
      ultDmg: 42,
    },
  };

  function fmt(template, vars) {
    return (template || '').replace(/\{(\w+)\}/g, (_, k) => (vars[k] !== undefined ? vars[k] : ''));
  }

  class DuelEngine {
    constructor() {
      this.active = false;
      this.busy = false;
      this.config = null;
      this.callbacks = null;
      this.lang = 'en';
      this.state = null;
      this.el = {};
    }

    bindElements() {
      this.el = {
        screenGame: document.getElementById('screen-game'),
        duelHud: document.getElementById('duel-hud'),
        duelControls: document.getElementById('duel-controls'),
        duelFxLayer: document.getElementById('duel-fx-layer'),
        duelBeam: document.getElementById('duel-beam'),
        duelPopupLeft: document.getElementById('duel-popup-left'),
        duelPopupRight: document.getElementById('duel-popup-right'),

        playerHpFill: document.getElementById('duel-player-hp-fill'),
        playerHpText: document.getElementById('duel-player-hp-text'),
        resFill: document.getElementById('duel-res-fill'),
        resText: document.getElementById('duel-res-text'),
        resLabel: document.getElementById('duel-res-label'),

        enemyName: document.getElementById('duel-enemy-name'),
        enemyPhase: document.getElementById('duel-enemy-phase'),
        enemyWardBadge: document.getElementById('duel-enemy-ward'),
        enemyHpFill: document.getElementById('duel-enemy-hp-fill'),
        enemyHpText: document.getElementById('duel-enemy-hp-text'),
        enemyIntent: document.getElementById('duel-enemy-intent'),

        btnAttack: document.getElementById('duel-btn-attack'),
        btnShield: document.getElementById('duel-btn-shield'),
        btnBreak: document.getElementById('duel-btn-break'),
        btnUlt: document.getElementById('duel-btn-ult'),

        duelEndBox: document.getElementById('duel-end-box'),
        duelEndTitle: document.getElementById('duel-end-title'),
        duelEndBody: document.getElementById('duel-end-body'),
        duelEndBtn: document.getElementById('duel-end-btn'),

        slotDraconia: document.getElementById('char-slot-draconia'),
        slotEnemy: document.getElementById('char-slot-left'),
        dialogueText: document.getElementById('dialogue-text'),
        speakerBadge: document.getElementById('speaker-badge'),
        tapIndicator: document.getElementById('tap-indicator'),
        fxFlash: document.getElementById('fx-flash'),
      };

      if (this.el.btnAttack && !this._wired) {
        this._wired = true;
        this.el.btnAttack.addEventListener('click', (e) => { e.stopPropagation(); this.playerAction('attack'); });
        this.el.btnShield.addEventListener('click', (e) => { e.stopPropagation(); this.playerAction('shield'); });
        this.el.btnBreak.addEventListener('click', (e) => { e.stopPropagation(); this.playerAction('break'); });
        this.el.btnUlt.addEventListener('click', (e) => { e.stopPropagation(); this.playerAction('ult'); });
      }
    }

    t() {
      return DUEL_I18N[this.lang] || DUEL_I18N.en;
    }

    getStartButtonLabel(lang) {
      return (DUEL_I18N[lang] || DUEL_I18N.en).startBtn;
    }

    start(config, callbacks) {
      this.bindElements();
      this.config = config;
      this.callbacks = callbacks;
      this.lang = callbacks.getLang ? callbacks.getLang() : 'en';
      this.active = true;
      this.busy = false;

      const enemyKey = config.enemy || 'belatrix';
      const maxEnemyHp = config.hp || (enemyKey === 'thom' ? 165 : 115);
      const courageBonus = Math.min(25, Math.floor((callbacks.getCourage ? callbacks.getCourage() : 10) / 4));
      const maxPlayerHp = 100 + courageBonus;

      this.state = {
        enemyKey,
        allyKey: config.ally || 'harry',
        playerHp: maxPlayerHp,
        maxPlayerHp,
        enemyHp: maxEnemyHp,
        maxEnemyHp,
        resonance: 25,
        phase: 1,
        turn: 0,
        enemyWard: false,
        enemyIntent: ENEMY_PATTERNS[enemyKey].phase1[0],
        finished: false,
      };

      if (this.el.screenGame) this.el.screenGame.classList.add('in-duel');
      if (this.el.duelHud) this.el.duelHud.hidden = false;
      if (this.el.duelControls) this.el.duelControls.hidden = false;
      if (this.el.duelEndBox) this.el.duelEndBox.hidden = true;
      if (this.el.tapIndicator) this.el.tapIndicator.style.visibility = 'hidden';

      // Set up 2-character stage: Draconia (angry combat stance) vs Enemy
      if (callbacks.setStageForDuel) {
        callbacks.setStageForDuel(enemyKey, 'angry');
      }
      if (window.soundEngine) {
        window.soundEngine.setMood('danger');
        window.soundEngine.playSfx('dark_magic');
      }

      const loc = this.t();
      const enemyLoc = loc.enemies[enemyKey] || loc.enemies.belatrix;
      this.setLog(enemyLoc.name, enemyLoc.intro, enemyKey);
      this.renderUI();
    }

    stop() {
      this.active = false;
      this.busy = false;
      if (this.el.screenGame) this.el.screenGame.classList.remove('in-duel');
      if (this.el.duelHud) this.el.duelHud.hidden = true;
      if (this.el.duelControls) this.el.duelControls.hidden = true;
      if (this.el.duelEndBox) this.el.duelEndBox.hidden = true;
      this.clearSpriteAnim();
    }

    clearSpriteAnim() {
      ['duel-lunge-right', 'duel-lunge-left', 'duel-hit', 'duel-shield-on', 'duel-ward-on'].forEach((cls) => {
        this.el.slotDraconia?.classList.remove(cls);
        this.el.slotEnemy?.classList.remove(cls);
      });
    }

    setLog(speakerName, text, speakerClass = 'draconia') {
      if (this.el.speakerBadge) {
        this.el.speakerBadge.className = `vn-name-tab ${speakerClass}`;
        this.el.speakerBadge.textContent = speakerName;
      }
      if (this.el.dialogueText) {
        this.el.dialogueText.textContent = text;
      }
    }

    renderUI() {
      if (!this.state) return;
      const s = this.state;
      const loc = this.t();
      const enemyLoc = loc.enemies[s.enemyKey] || loc.enemies.belatrix;

      const pPct = Math.max(0, Math.round((s.playerHp / s.maxPlayerHp) * 100));
      const ePct = Math.max(0, Math.round((s.enemyHp / s.maxEnemyHp) * 100));

      this.el.playerHpFill.style.width = `${pPct}%`;
      this.el.playerHpFill.classList.toggle('low', pPct <= 30);
      this.el.playerHpText.textContent = `${s.playerHp} / ${s.maxPlayerHp}`;

      this.el.resFill.style.width = `${s.resonance}%`;
      this.el.resText.textContent = `${s.resonance}%`;
      this.el.resLabel.textContent = loc.resonance;

      this.el.enemyName.textContent = enemyLoc.name;
      this.el.enemyPhase.textContent = `${loc.phase} ${s.phase}`;
      this.el.enemyPhase.classList.toggle('phase2', s.phase === 2);

      this.el.enemyWardBadge.textContent = loc.wardUp;
      this.el.enemyWardBadge.hidden = !s.enemyWard;
      this.el.slotEnemy?.classList.toggle('duel-ward-on', s.enemyWard);

      this.el.enemyHpFill.style.width = `${ePct}%`;
      this.el.enemyHpText.textContent = `${s.enemyHp} / ${s.maxEnemyHp}`;

      const intentKey = s.enemyIntent;
      this.el.enemyIntent.textContent = loc.intents[intentKey] || loc.intents.bolt;
      this.el.enemyIntent.className = `duel-intent intent-${intentKey}`;

      // Button Labels & State
      const setBtn = (btn, info, disabled) => {
        if (!btn) return;
        btn.innerHTML = `<span class="spell-name">${info.name}</span><span class="spell-sub">${info.sub}</span>`;
        btn.disabled = disabled || this.busy || s.finished;
      };

      setBtn(this.el.btnAttack, loc.spells.attack, false);
      setBtn(this.el.btnShield, loc.spells.shield, false);
      setBtn(this.el.btnBreak, loc.spells.break, false);

      const ultReady = s.resonance >= 100;
      setBtn(this.el.btnUlt, ultReady ? loc.spells.ultReady : loc.spells.ult, !ultReady);
      this.el.btnUlt?.classList.toggle('ult-ready', ultReady && !s.finished);

      // Subtle recommended highlight to guide intuitive play
      this.el.btnShield?.classList.toggle('recommended', (intentKey === 'heavy' || intentKey === 'ultimate') && !this.busy && !s.finished);
      this.el.btnBreak?.classList.toggle('recommended', (s.enemyWard || intentKey === 'ward') && !this.busy && !s.finished);
    }

    flashScreen(color) {
      if (!this.el.fxFlash) return;
      this.el.fxFlash.className = 'fx-flash';
      void this.el.fxFlash.offsetWidth;
      this.el.fxFlash.classList.add(color);
    }

    shakeScreen() {
      if (!this.el.screenGame) return;
      this.el.screenGame.classList.remove('fx-shake');
      void this.el.screenGame.offsetWidth;
      this.el.screenGame.classList.add('fx-shake');
    }

    fireBeam(direction, colorClass) {
      if (!this.el.duelBeam) return;
      this.el.duelBeam.className = 'duel-beam';
      void this.el.duelBeam.offsetWidth;
      this.el.duelBeam.classList.add(direction, colorClass);
    }

    showPopup(side, text, kindClass) {
      const target = side === 'left' ? this.el.duelPopupLeft : this.el.duelPopupRight;
      if (!target) return;
      target.textContent = text;
      target.className = `duel-popup ${side}`;
      void target.offsetWidth;
      target.classList.add('show', kindClass);
    }

    triggerAnim(slotEl, animClass) {
      if (!slotEl) return;
      slotEl.classList.remove('duel-lunge-right', 'duel-lunge-left', 'duel-hit');
      void slotEl.offsetWidth;
      slotEl.classList.add(animClass);
    }

    setDraconiaExpr(expr) {
      if (this.callbacks?.setDraconiaDuelExpr) {
        this.callbacks.setDraconiaDuelExpr(expr);
      }
    }

    playerAction(action) {
      if (!this.active || this.busy || this.state.finished) return;
      this.busy = true;
      this.renderUI();

      const s = this.state;
      const loc = this.t();
      const enemyLoc = loc.enemies[s.enemyKey] || loc.enemies.belatrix;
      const allyName = loc.allies[s.allyKey] || loc.allies.harry;
      const courage = this.callbacks?.getCourage ? this.callbacks.getCourage() : 10;
      const atkBonus = Math.min(8, Math.floor(courage / 10));

      let shielding = false;
      let enemyStunned = false;

      // 1. PLAYER TURN
      if (action === 'attack') {
        this.setDraconiaExpr('angry');
        this.triggerAnim(this.el.slotDraconia, 'duel-lunge-right');
        this.fireBeam('left-to-right', 'emerald');
        window.soundEngine?.playSfx('magic');

        const baseDmg = 26 + atkBonus + Math.floor(Math.random() * 5);
        const dmg = s.enemyWard ? Math.round(baseDmg * 0.35) : baseDmg;
        s.enemyHp = Math.max(0, s.enemyHp - dmg);
        s.resonance = Math.min(100, s.resonance + 30);

        this.triggerAnim(this.el.slotEnemy, 'duel-hit');
        this.showPopup('right', `-${dmg} ⚡`, 'dmg-enemy');
        this.flashScreen('emerald');
        this.setLog('Draconia', fmt(s.enemyWard ? loc.logs.attackBlocked : loc.logs.attackHit, { dmg, enemy: enemyLoc.name }), 'draconia');
      } else if (action === 'break') {
        this.setDraconiaExpr(s.enemyWard ? 'angry' : 'happy');
        this.triggerAnim(this.el.slotDraconia, 'duel-lunge-right');
        this.fireBeam('left-to-right', 'gold');

        if (s.enemyWard) {
          s.enemyWard = false;
          enemyStunned = true;
          const dmg = 34 + atkBonus;
          s.enemyHp = Math.max(0, s.enemyHp - dmg);
          s.resonance = Math.min(100, s.resonance + 35);
          window.soundEngine?.playSfx('glass');
          this.shakeScreen();
          this.flashScreen('gold');
          this.triggerAnim(this.el.slotEnemy, 'duel-hit');
          this.showPopup('right', `${loc.popups.shatter} -${dmg}`, 'dmg-crit');
          this.setLog('Draconia', fmt(loc.logs.breakShatter, { dmg, enemy: enemyLoc.name }), 'draconia');
        } else {
          const dmg = 18 + Math.floor(atkBonus / 2);
          const heal = 16;
          s.enemyHp = Math.max(0, s.enemyHp - dmg);
          s.playerHp = Math.min(s.maxPlayerHp, s.playerHp + heal);
          s.resonance = Math.min(100, s.resonance + 25);
          window.soundEngine?.playSfx('sparkle');
          this.flashScreen('emerald');
          this.triggerAnim(this.el.slotEnemy, 'duel-hit');
          this.showPopup('right', `-${dmg} 🌿`, 'dmg-enemy');
          this.showPopup('left', `+${heal} 💚`, 'heal-player');
          this.setLog(allyName, fmt(loc.logs.breakAlly, { ally: allyName, dmg, heal }), 'draconia');
        }
      } else if (action === 'shield') {
        shielding = true;
        this.setDraconiaExpr('normal');
        this.el.slotDraconia?.classList.add('duel-shield-on');
        window.soundEngine?.playSfx('sparkle');
        this.setLog('Draconia', loc.logs.shieldReady, 'draconia');
      } else if (action === 'ult') {
        s.resonance = 0;
        s.enemyWard = false;
        enemyStunned = true;
        const dmg = 54 + atkBonus;
        s.enemyHp = Math.max(0, s.enemyHp - dmg);
        this.setDraconiaExpr('happy');
        this.triggerAnim(this.el.slotDraconia, 'duel-lunge-right');
        this.fireBeam('left-to-right', 'nova');
        window.soundEngine?.playSfx('magic');
        window.soundEngine?.playSfx('sparkle');
        this.shakeScreen();
        this.flashScreen('gold');
        this.triggerAnim(this.el.slotEnemy, 'duel-hit');
        this.showPopup('right', `${loc.popups.nova} -${dmg}`, 'dmg-crit');
        this.setLog('Draconia', fmt(loc.logs.ultHit, { dmg, enemy: enemyLoc.name }), 'draconia');
      }

      this.renderUI();

      // Check immediate victory
      if (s.enemyHp <= 0) {
        setTimeout(() => this.handleVictory(), 750);
        return;
      }

      // Check Phase 2 Trigger (<= 50% HP)
      const enteredPhase2 = s.phase === 1 && s.enemyHp <= Math.ceil(s.maxEnemyHp * 0.5);
      if (enteredPhase2) {
        s.phase = 2;
        s.turn = 0;
        setTimeout(() => {
          this.el.slotDraconia?.classList.remove('duel-shield-on');
          this.flashScreen('violet');
          this.shakeScreen();
          window.soundEngine?.playSfx('dark_magic');
          this.setDraconiaExpr('surprised');
          s.enemyWard = true;
          s.enemyIntent = ENEMY_PATTERNS[s.enemyKey].phase2[0];
          this.showPopup('right', `${loc.phase} 2!`, 'dmg-crit');
          this.setLog(enemyLoc.name, enemyLoc.phase2, s.enemyKey);
          this.busy = false;
          this.renderUI();
        }, 850);
        return;
      }

      // 2. ENEMY TURN (after short dramatic pause)
      setTimeout(() => {
        this.resolveEnemyTurn(shielding, enemyStunned);
      }, 850);
    }

    resolveEnemyTurn(shielding, enemyStunned) {
      const s = this.state;
      const loc = this.t();
      const enemyLoc = loc.enemies[s.enemyKey] || loc.enemies.belatrix;
      const pattern = ENEMY_PATTERNS[s.enemyKey] || ENEMY_PATTERNS.belatrix;
      const intent = s.enemyIntent;

      if (enemyStunned) {
        this.showPopup('right', loc.popups.stun, 'dmg-enemy');
        this.setLog(enemyLoc.name, fmt(loc.logs.enemyStunned, { enemy: enemyLoc.name }), s.enemyKey);
      } else if (intent === 'ward') {
        s.enemyWard = true;
        window.soundEngine?.playSfx('dark_magic');
        this.showPopup('right', loc.popups.ward, 'dmg-crit');
        if (shielding) {
          const heal = 14;
          s.playerHp = Math.min(s.maxPlayerHp, s.playerHp + heal);
          s.resonance = Math.min(100, s.resonance + 20);
          this.showPopup('left', `+${heal} 💚`, 'heal-player');
          this.setLog(enemyLoc.name, fmt(loc.logs.enemyWardFocus, { enemy: enemyLoc.name, heal }), s.enemyKey);
        } else {
          this.setLog(enemyLoc.name, fmt(loc.logs.enemyWard, { enemy: enemyLoc.name }), s.enemyKey);
        }
      } else if (intent === 'heavy' || intent === 'ultimate') {
        this.triggerAnim(this.el.slotEnemy, 'duel-lunge-left');
        this.fireBeam('right-to-left', 'violet');
        window.soundEngine?.playSfx('dark_magic');

        if (shielding) {
          // PERFECT PARRY & REFLECT!
          const reflectDmg = intent === 'ultimate' ? 42 : 34;
          s.enemyHp = Math.max(0, s.enemyHp - reflectDmg);
          s.resonance = Math.min(100, s.resonance + 40);
          this.setDraconiaExpr('happy');
          this.flashScreen('emerald');
          this.shakeScreen();
          window.soundEngine?.playSfx('sparkle');
          setTimeout(() => this.fireBeam('left-to-right', 'emerald'), 120);
          this.triggerAnim(this.el.slotEnemy, 'duel-hit');
          this.showPopup('left', loc.popups.parry, 'heal-player');
          this.showPopup('right', `-${reflectDmg} 🛡️`, 'dmg-crit');
          this.setLog('Draconia', fmt(loc.logs.enemyParried, { enemy: enemyLoc.name, dmg: reflectDmg }), 'draconia');
        } else {
          const dmg = intent === 'ultimate' ? pattern.ultDmg : pattern.heavyDmg;
          s.playerHp = Math.max(0, s.playerHp - dmg);
          s.resonance = Math.min(100, s.resonance + 20);
          this.setDraconiaExpr(s.playerHp <= s.maxPlayerHp * 0.3 ? 'sad' : 'surprised');
          this.flashScreen('violet');
          this.shakeScreen();
          this.triggerAnim(this.el.slotDraconia, 'duel-hit');
          this.showPopup('left', `-${dmg} 🔥`, 'dmg-player');
          this.setLog(
            enemyLoc.name,
            fmt(intent === 'ultimate' ? loc.logs.enemyUltimateHit : loc.logs.enemyHeavyHit, { enemy: enemyLoc.name, dmg }),
            s.enemyKey
          );
        }
      } else {
        // Quick Dark Bolt
        this.triggerAnim(this.el.slotEnemy, 'duel-lunge-left');
        this.fireBeam('right-to-left', 'violet');
        window.soundEngine?.playSfx('dark_magic');

        if (shielding) {
          const dmg = Math.max(3, Math.round(pattern.boltDmg * 0.25));
          const heal = 10;
          s.playerHp = Math.min(s.maxPlayerHp, Math.max(1, s.playerHp - dmg + heal));
          s.resonance = Math.min(100, s.resonance + 25);
          this.setDraconiaExpr('normal');
          this.showPopup('left', `-${dmg} / +${heal} 💚`, 'heal-player');
          this.setLog('Draconia', fmt(loc.logs.enemyBoltBlocked, { enemy: enemyLoc.name, dmg, heal }), 'draconia');
        } else {
          const dmg = pattern.boltDmg;
          s.playerHp = Math.max(0, s.playerHp - dmg);
          s.resonance = Math.min(100, s.resonance + 15);
          this.setDraconiaExpr(s.playerHp <= s.maxPlayerHp * 0.3 ? 'sad' : 'surprised');
          this.shakeScreen();
          this.triggerAnim(this.el.slotDraconia, 'duel-hit');
          this.showPopup('left', `-${dmg} ⚡`, 'dmg-player');
          this.setLog(enemyLoc.name, fmt(loc.logs.enemyBolt, { enemy: enemyLoc.name, dmg }), s.enemyKey);
        }
      }

      setTimeout(() => {
        this.el.slotDraconia?.classList.remove('duel-shield-on');
      }, 450);

      // Advance enemy pattern for next turn
      s.turn += 1;
      const seq = s.phase === 2 ? pattern.phase2 : pattern.phase1;
      let nextIntent = seq[s.turn % seq.length];
      if (nextIntent === 'ward' && s.enemyWard) {
        nextIntent = 'heavy';
      }
      s.enemyIntent = nextIntent;

      this.renderUI();

      // Check victory (from Parry Reflect!) or defeat
      if (s.enemyHp <= 0) {
        setTimeout(() => this.handleVictory(), 750);
        return;
      }
      if (s.playerHp <= 0) {
        setTimeout(() => this.handleDefeat(), 750);
        return;
      }

      // Check Phase 2 trigger from Parry Reflect damage
      if (s.phase === 1 && s.enemyHp <= Math.ceil(s.maxEnemyHp * 0.5)) {
        s.phase = 2;
        s.turn = 0;
        setTimeout(() => {
          this.flashScreen('violet');
          this.shakeScreen();
          window.soundEngine?.playSfx('dark_magic');
          this.setDraconiaExpr('surprised');
          s.enemyWard = true;
          s.enemyIntent = pattern.phase2[0];
          this.showPopup('right', `${loc.phase} 2!`, 'dmg-crit');
          this.setLog(enemyLoc.name, enemyLoc.phase2, s.enemyKey);
          this.busy = false;
          this.renderUI();
        }, 700);
        return;
      }

      setTimeout(() => {
        this.busy = false;
        this.renderUI();
      }, 450);
    }

    handleVictory() {
      const s = this.state;
      const loc = this.t();
      const enemyLoc = loc.enemies[s.enemyKey] || loc.enemies.belatrix;
      s.finished = true;
      this.busy = false;

      this.setDraconiaExpr('happy');
      this.el.slotEnemy?.classList.add('dimmed');
      this.flashScreen('gold');
      window.soundEngine?.playHeartUp();

      this.setLog(enemyLoc.name, enemyLoc.defeat, s.enemyKey);
      this.el.duelControls.hidden = true;
      this.el.duelEndBox.hidden = false;
      this.el.duelEndBox.className = 'duel-end-box glass victory';
      this.el.duelEndTitle.textContent = loc.logs.victoryTitle;
      this.el.duelEndBody.textContent = fmt(loc.logs.victoryBody, { enemy: enemyLoc.name });
      this.el.duelEndBtn.textContent = loc.logs.continueBtn;
      this.el.duelEndBtn.onclick = (e) => {
        e.stopPropagation();
        const cb = this.callbacks?.onVictory;
        this.stop();
        if (cb) cb(s.allyKey);
      };
      this.renderUI();
    }

    handleDefeat() {
      const s = this.state;
      const loc = this.t();
      const enemyLoc = loc.enemies[s.enemyKey] || loc.enemies.belatrix;
      s.finished = true;
      this.busy = false;

      this.setDraconiaExpr('sad');
      window.soundEngine?.playCold();

      this.el.duelControls.hidden = true;
      this.el.duelEndBox.hidden = false;
      this.el.duelEndBox.className = 'duel-end-box glass defeat';
      this.el.duelEndTitle.textContent = loc.logs.defeatTitle;
      this.el.duelEndBody.textContent = fmt(loc.logs.defeatBody, { enemy: enemyLoc.name });
      this.el.duelEndBtn.textContent = loc.logs.retryBtn;
      this.el.duelEndBtn.onclick = (e) => {
        e.stopPropagation();
        this.start(this.config, this.callbacks);
      };
      this.renderUI();
    }
  }

  window.duelEngine = new DuelEngine();
})();
