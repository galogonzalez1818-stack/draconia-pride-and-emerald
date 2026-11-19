/**
 * COMPLETE SPANISH TRANSLATION (chapters, 10 endings, all 138 nodes, all choices)
 */
(function () {
  window.I18N.chapters = window.I18N.chapters || {};
  window.I18N.endings = window.I18N.endings || {};
  window.I18N.choices = window.I18N.choices || {};

  window.I18N.chapters.es = {
    0: 'Prólogo: La Chica de Esmeralda',
    1: 'Cap. 1: El Choque de la Mañana',
    2: 'Cap. 2: Cinco Minutos en Pociones',
    3: 'Cap. 3: Susurros en el Patio',
    4: 'Acto II: Corazón y Sombra',
    5: 'Acto II: Espinas y Rivalidad',
    6: 'Acto II: El Pacto de Seis Estrellas',
    7: 'Acto II: Secretos del Cristal',
    8: 'Acto II: El Deber Aristocrático',
    11: 'Línea I: Soberana de Corazones',
    12: 'Línea II: Espinas y Rosas',
    13: 'Línea III: Esmeralda y Oro',
    14: 'Línea IV: Alianza de Seis Estrellas',
    15: 'Línea V: Orgullo del Aristócrata',
    16: 'Línea VI: Aprendiz de las Sombras',
    17: 'Línea VII: Ecos de Otro Mundo',
    18: 'Línea VIII: Reina del Espejo',
    19: 'Línea IX: Amanecer Inquebrantable',
    20: 'Línea X: Soledad Invernal',
  };

  window.I18N.endings.es = {
    sovereign: { title: 'Línea 1: Soberana de Corazones', badge: 'Romance Verdadero y Victoria', desc: 'Draconia soltó su armadura y luchó junto a Harry en la Bóveda del Espejo. Bajo las arañas de cristal del Baile de Invierno, Lord Lucio asintió con orgullo mientras Harry le besaba la mano.' },
    thorns: { title: 'Línea 2: Espinas y Rosas', badge: 'Romance Tsundere', desc: 'Thom fue derrotado y todos saben que Harry y Draconia están juntos… excepto Draconia, que sigue sonrojándose e insistiendo en que solo le toma la mano "para evitar que se meta en líos".' },
    secret_devotion: { title: 'Línea 3: Esmeralda y Oro', badge: 'Devoción Secreta', desc: 'Para proteger a Harry de los rumores y las expectativas, Draconia y Harry eligieron un romance discreto y secreto, reuniéndose bajo las estrellas de la Torre de Astronomía.' },
    guardians: { title: 'Línea 4: La Alianza de Seis Estrellas', badge: 'Aventura y Lealtad', desc: 'Draconia, Harry, Hermiona, Ronn, Lune y Nevile unieron sus varitas como iguales para sellar la Bóveda del Espejo, forjando una amistad legendaria entre todas las casas.' },
    house_honor: { title: 'Línea 5: Orgullo del Aristócrata', badge: 'Honor Familiar', desc: 'De pie junto a Lord Lucio, Draconia defendió las antiguas barreras de la Academia y se ganó una tregua noble y respetuosa con Harry.' },
    shadow_apprentice: { title: 'Línea 6: Aprendiz de las Sombras', badge: 'Aprendiz de Severo', desc: 'Guiada por el Profesor Severo, Draconia desmanteló las barreras oscuras de Thom desde las mazmorras, convirtiéndose en maestra de las artes arcanas protectoras.' },
    echoes: { title: 'Línea 7: Ecos de Otro Mundo', badge: 'Sacrificio Multiverso', desc: 'Draconia cruzó sola la luz plateada del Espejo para encerrar la línea temporal de Thom desde adentro, dejando a Harry una sola cinta esmeralda sobre la piedra.' },
    mirror_queen: { title: 'Línea 8: Reina del Espejo Roto', badge: 'Tentación Oscura', desc: 'Fingiendo aceptar la oferta de Thom, Draconia volvió su propia corona del multiverso en su contra y reclamó el poder de la Bóveda para moldear ambos mundos.' },
    vanguard: { title: 'Línea 9: Amanecer Inquebrantable', badge: 'Vanguardia Docente', desc: 'Luchando junto al Director Albuz, Minerba, Remuz y Pamona, Draconia se convirtió en la guardiana más joven de la Academia, poniendo el deber por encima del romance.' },
    solitude: { title: 'Línea 10: Soledad Invernal', badge: 'Corona de Hielo', desc: 'Harry y sus amigos sellaron la Bóveda sin ella. Draconia mantuvo intacta su máscara aristocrática, observando la nevada del Baile de Invierno sola desde el balcón.' },
  };

  Object.assign(window.I18N.nodes.es, {
    // Cap 1 (desde los ojos de Draconia, tono elegante y natural)
    c1_1: 'Al empujar las puertas de roble del Gran Comedor, el bullicio habitual del desayuno se siente extrañamente apagado. Junto a la entrada, Hermiona observa con el ceño fruncido los altos relojes de arena mientras Ronn intenta llamar su atención.',
    c1_2: 'Mira bien, Ronn: la arena encantada dejó de caer por completo. Eso solo ocurre cuando las barreras protectoras del castillo están bajo una presión enorme.',
    c1_3: 'Harry se levanta de su banco con gesto serio. "Déjame revisar las runas junto al arco antes de que empiecen las clases."',
    c1_4: 'Intento pasar junto a ellos con mi compostura habitual, comprobando que la carta sellada de mi padre siga en mi bolso... y me cruzo directo en el camino de Harry.',
    c1_5: 'Perdón—permiso—¡UY, cuidado!',
    c1_6: '¡Pum! Chocamos justo debajo del arco. Mis libros salen volando por las losas y, al sujetarme Harry del codo para que no caiga, mi relicario plateado se desliza fuera del cuello dando un breve destello pálido.',
    c1_7: '¡Draconia! ¡Lo siento muchísimo, no miraba por dónde iba! ¿Estás herida? Ten, te recojo los libros... espera, ¿tu relicario acaba de lanzar una chispa?',
    c1_8: 'Está arrodillado a centímetros de mí, sujetándome todavía la muñeca, con los ojos verdes llenos de preocupación genuina. Hermiona y Ronn dejaron de comer para mirarnos... ¡y siento las orejas ardiendo!',
    c1_choice1: '¡Di algo normal, Draconia! ¡Lo que sea!',
    c1_9a: 'Ah... claro, no diré una palabra. Solo... prométeme que me avisarás si vuelve a pasar, ¿sí? Nos vemos en Pociones, Draconia.',
    c1_9b: '¡Jajaja! ¡Amigo, te gritó y ni siquiera te lanzó un maleficio—y mira qué rojas tiene las orejas! ¡Vámonos antes de llegar tarde!',
    c1_9c: 'Draconia, espera—¡no queríamos entrometernos! Es solo que tu relicario reaccionó al mismo temblor que vi en el reloj de arena...',
    c1_10: 'Justo entonces suena la campana y, al mismo instante, el reloj de arena agrietado estalla en lo alto con un chasquido seco. El Director Albuz agita su varita con calma, convirtiendo el vidrio en polvo inofensivo.',
    c1_11: 'No hay motivo de alarma, alumnos. Un encantamiento antiguo simplemente cedió. La profesora Minerba reparará el arco; bajen a sus primeras clases.',
    c1_12: 'La voz de Albuz suena serena, casi amable, pero distingo la tensión en la mandíbula de la profesora Minerba al alzar su varita hacia el cristal roto. Ese reloj de arena no estalló por accidente.',
    c1_13: 'Mientras los alumnos salen del Gran Comedor murmurando inquietos, deslizo los dedos bajo el cuello de mi túnica para tocar el relicario de mi madre. La plata sigue ligeramente tibia... como si hubiera respondido al mismo hechizo que rompió el cristal.',
    c1_14: 'Al bajar por las frías escaleras de piedra hacia las mazmorras, el aire se vuelve húmedo y huele a piedra antigua. Dos tramos más abajo, Harry y Ronn comentan en voz baja lo que Hermiona vio en el arco.',
    c1_15: 'Durante medio segundo, Harry gira la cabeza por encima del hombro y cruza su mirada con la mía. El estómago me da un vuelco; agacho la vista enseguida hacia mi libro de Pociones fingiendo leer el capítulo cuatro mientras me arde la cara.',
    c1_16: 'Entramos en la mazmorra de Pociones iluminada por velas. El aroma familiar de hierbas amargas, raíces molidas y calderos de bronce llena el aula. Detrás del último alumno, la pesada puerta de roble se cierra de golpe.',

    // Cap 2 (coherente: Severo sale 5 min con Pamona)
    c2_1: 'Tomen asiento y dejen de murmurar. El examen práctico de hoy es un Filtro de Claridad y, para evitar que algunos se apoyen en sus amigos, yo mismo asigné las parejas.',
    c2_2: 'El corazón casi se me sale del pecho cuando el Profesor Severo lee en voz alta la tercera pareja: "Draconia y Harry, mesa cuatro". Harry me dedica una media sonrisa incómoda al acercar su taburete al mío.',
    c2_3: 'Severo, perdona que interrumpa tu clase... ¿puedo robarte cinco minutos en el pasillo? Anoche desaparecieron tres cajas de Raíz de Eclipse del Invernadero Cuatro y hay ceniza plateada en la cerradura.',
    c2_4: '...¿Raíz de Eclipse? Eso no es ninguna broma estudiantil. Clase, sigan calentando su base hasta que vuelva; si alguien derrite un caldero en mi ausencia, lo lamentará.',
    c2_5: 'Apenas se cierra la puerta, Nevile se inclina desde la mesa de al lado susurrando: "¿Oyeron a la profesora Pamona? Ayer al anochecer vi a alguien con capa gris merodeando el Invernadero Cuatro..."',
    c2_6: 'Harry frunce el ceño al oír a Nevile, y de pronto da un respingo cuando su caldero sisea fuerte. "Eh... ¿Draconia? No te rías, pero me distraje y molí demasiado las semillas estelares. ¡Se está poniendo violeta!"',
    c2_choice: 'Con Severo fuera cinco minutos, Harry me mira pidiendo auxilio. Huele a lluvia y cedro, y tiene los ojos fijos en mí.',
    c2_7a: '¡Guau—el humo se volvió plata pura en dos segundos! Gracias, Draconia. En serio... eres mucho más amable de lo que dejas ver.',
    c2_7b: 'Desde la mesa de atrás, Ronn suelta una risita: "¡Amigo, te ves demasiado feliz cuando Draconia te manda!" Harry lo hace callar rápido al oír pasos afuera.',
    c2_7c: 'La sonrisa de Harry se apaga mientras vuelve a su caldero humeante. "...Entiendo. Perdón por preguntar, Draconia."',
    c2_8_good: 'Severo regresa aún más sombrío que antes. "Embotellen sus Filtros de Claridad y guárdenlos en el bolsillo; no pregunten por qué. Salgan a almorzar y después preséntense en el Patio para clase de Defensa."',
    c2_9: 'Tapo con cuidado el pequeño frasco de vidrio y lo guardo junto a la carta de mi padre. Al recoger mis pergaminos, las yemas de mis dedos todavía recuerdan el calor de la mano de Harry sobre el cucharón... y la sorpresa genuina en su voz.',
    c2_10: 'El almuerzo transcurre en un silencio tenso. Al otro lado del comedor, Hermiona apenas toca su sopa mientras garabatea notas en los márgenes de un grueso libro. En la mesa principal, la profesora Pamona se inclina para susurrarle con urgencia al Director Albuz.',
    c2_11: 'Cuando la campana de la tarde resuena entre las torres, nos abrochamos bien las capas y salimos al Patio cubierto de niebla. El viento huele a nieve cercana mientras los profesores Remuz y Minerba nos esperan en el centro.',
    c2_8_dark: 'Al sonar la campana, Severo me cierra el paso antes de salir. "Espera, Draconia. Tu padre avisó que llega antes, y tu relicario reaccionó a la misma magia plateada del invernadero. Sígueme a la Torre."',
    c2_dark_1: 'Me apresuro para seguir las zancadas largas y silenciosas de Severo por las escaleras de caracol. Ninguno dice una palabra, pero el peso de la carta de mi padre en mi bolso se vuelve más frío a cada peldaño.',
    c2_dark_2: 'Para cuando llegamos a la Torre de Astronomía, las nubes ya han cubierto el sol. El viento helado silba entre los telescopios de bronce mientras Severo entra y me hace seña de cerrar la puerta de roble.',

    // Cap 3 (coherente: el misterio encaja)
    c3_1: 'Después del almuerzo nos reunimos en el Patio cubierto de niebla. El profesor Remuz avanza junto a Minerba: "Debido al robo de anoche en los invernaderos, hoy practicaremos escudos protectores."',
    c3_2: 'Minerba cruza las manos con severidad. "La Raíz de Eclipse solo se roba con un propósito: alimentar un portal ilegal. Mantengan la guardia alta y avisen de cualquier cosa inusual."',
    c3_3: 'Al terminar la práctica, Lune se acerca a Hermiona, Harry y a mí. "Probablemente debí decirlo antes... anoche junto al borde del bosque vi a un hombre encapuchado hablándole a un espejo que ardía con fuego violeta."',
    c3_4: 'Hermiona jadea y aparta al profesor Remuz. "¡Fuego violeta y Raíces de Eclipse! Es un antiguo ritual de espejo multiverso: ¡alguien de una línea temporal oscura intenta abrir la Bóveda del Espejo bajo el colegio!"',
    c3_5: 'Remuz prepara al instante una patrulla al atardecer hacia el Bosque Encantado, mientras Minerba lleva a Hermiona y Lune a la Biblioteca para rastrear las barreras de la Bóveda. Harry se gira hacia mí: "Draconia... ¿tú a dónde vas?"',
    c3_6: 'La carta de mi padre, el relicario brillante, las raíces robadas... cada pieza por fin encaja. Y ahora mi corazón se debate entre quedarme junto a Harry o ayudar a Hermiona a descifrar el misterio.',
    c3_branch_choice: 'El anochecer cae rápido sobre los arcos de piedra. ¿Qué decido hacer?',
    c3_dark_fork: 'Arriba en la silenciosa Torre de Astronomía, Severo cierra la puerta. "La ceniza plateada del invernadero corresponde a un espejo multiverso sellado bajo el castillo. Un hechicero oscuro llamado Thom intenta cruzar... y cree que tu linaje es su llave."',
    c3_dark_2: 'La puerta de la escalera se abre y entra mi padre, Lord Lucio, tal como prometió en su carta. "Albuz ya me puso al tanto, Draconia. Recuerda quiénes somos: nuestro orgullo es honor, jamás sumisión a locos como Thom. Decide cómo enfrentarás esta noche."',
    c3_dark_choice: 'La mirada firme de mi padre y la advertencia de Severo pesan sobre mí. Dos decisiones solitarias se abren ante mí.',

    // Trunk 1
    tr1_1: 'Mantengan las varitas bajas, ustedes dos. La niebla plateada se espesa... y miren el musgo bajo nuestras botas, está congelado.',
    tr1_2: 'Toma mi bufanda, Draconia, te tiemblan las manos por el frío. Quédate justo detrás de mí si algo se mueve entre los árboles.',
    tr1_3: '¡Jajaja! ¡Miren a Harry haciendo de guardaespaldas de la pequeña Draconia! ¡En nuestra línea temporal te arrodillaste ante Lord Thom sin rechistar!',
    tr1_4: '¡Ya coloqué las Raíces de Eclipse alrededor de los monolitos, Barti! ¿Abrimos el ancla del Espejo ahora mismo?',
    tr1_5: 'Tres contra tres... ¡Harry, Draconia, cuidado con las sombras por los flancos! ¡Los hechizos de Barti son rápidos!',
    tr1_6: 'Baja tu varita de inmediato, Belatrix. Vine a la Academia en cuanto Albuz me llamó, y ningún secuaz de Thom tocará un cabello de mi hija.',
    tr1_7: 'Nuestra casa carga con un orgullo antiguo, jamás con cobardía. Márchense de estas tierras antes de que convoque a todo el profesorado.',
    tr1_8: '¡Huyeron entre la niebla! Gracias, Lord Lucio; si no hubiera llegado a tiempo, Barti nos habría rodeado.',
    tr1_9: 'No logro dormir. Las palmas aún me hormiguean por el combate, y la discreta aprobación de Lord Lucio resuena en mis oídos. Subo a la Torre de Astronomía a tomar aire... y oigo pasos detrás de mí. Es Harry, con dos tazas humeantes de sidra caliente.',
    tr1_10: 'Estuviste increíble allá afuera, Draconia. Cuando te pusiste delante de mí para bloquear el maleficio de Belatrix... casi se me detiene el corazón.',
    tr1_11: 'No me importa lo que digan de nuestras casas ni lo estricto que sea tu padre. Me enamoré de ti, Draconia. Por completo.',
    tr1_split: 'La taza tibia calienta mis dedos helados, pero siento que el pecho me va a estallar. Por primera vez en mi vida, no quiero esconderme detrás del orgullo.',

    // Trunk 2 (tono maduro, tsundere elegante sin chistes tontos)
    tr2_1: 'Recuérdame por qué dejamos que Draconia lidere la entrada al Bosque Encantado. Lleva mirando mal a cada árbol desde que salimos del patio.',
    tr2_2: '"Porque a diferencia de ustedes dos, Ronn, yo sí memoricé las líneas de las barreras antes de entrar a oscuras. Baja la voz: hay movimiento adelante."',
    tr2_3: '¡Deténganlos! Piter ya entregó las Raíces de Eclipse: ¡no dejen que Harry se acerque al portal!',
    tr2_4: 'Sin pensarlo dos veces, doy un paso delante de Harry y desvío la maldición de Barti hacia las sombras. Ronn abre los ojos asombrado: "Por las barbas... ni siquiera parpadeaste antes de protegerlo, Draconia."',
    tr2_5: 'Lord Lucio surge entre los árboles junto a la patrulla del profesor Remuz, obligando a Belatrix y Barti a retirarse. "Buenos reflejos, Draconia. Aunque veo que tu carácter sigue igual de indomable."',
    tr2_6: 'De vuelta en la Enfermería, Hermiona termina de vendar el rasguño en la muñeca de Harry. "La noticia corrió rápido, Draconia. Todos saben que te pusiste delante de una maldición oscura por él."',
    tr2_7: 'Lune sonríe con dulzura desde la puerta. "Finges estar molesta, Draconia, pero no te has movido de su lado desde que regresamos."',
    tr2_8: 'Cuando los demás salen, Harry saca con nerviosismo una pequeña horquilla de plata y esmeralda de su bolsillo. "Noté que la tuya se rompió en el Bosque. No es gran cosa... pero quería que la tuvieras."',
    tr2_split: 'Miro la delicada horquilla esmeralda sobre su palma. Se me hace un nudo en la garganta: realmente notó un detalle tan pequeño en medio de una pelea.',

    // Trunk 3
    tr3_1: 'Excelente puntualidad al llegar a la Biblioteca, Draconia. Con la investigación de Hermiona y la vista estelar de Lune, ubicamos la línea ley que alimenta la brecha de Thom.',
    tr3_2: 'Siguiendo el mapa de Minerba, cruzamos a toda prisa el césped húmedo hasta el Invernadero Cuatro. La profesora Pamona sonríe al vernos entrar: "¡Justo a tiempo! Los Helechos Lunares de Nevile florecieron en escudos de plata pura."',
    tr3_3: 'Nevile nos entrega una hoja plateada brillante a cada uno. "Nunca pensé que prepararía defensas de batalla junto a Draconia... Gracias por confiar en nosotros, en serio."',
    tr3_4: 'Con los escudos listos, corremos hacia el Puente de Piedra donde el Director Albuz y el profesor Remuz vigilan la entrada exterior. "Queda poco tiempo: Belatrix, Barti y Piter ya están forzando la Bóveda del Espejo."',
    tr3_5: 'Ronn y yo acabamos de volver del muro exterior: ¡las defensas tiemblan! Draconia, ¿cuál es el plan?',
    tr3_split: 'El viento frío azota el Puente de Piedra. Hermiona, Ronn, Lune, Nevile y Harry esperan mi señal—no por mi apellido, sino porque de verdad confían en mí.',

    // Trunk 4
    tr4_1: 'Cierra la puerta de la mazmorra, Draconia. Pocos lo saben, pero estudié las contrarrunas de la Bóveda del Espejo. El portal de Thom es inestable y puede volverse en su contra.',
    tr4_2: 'Sin embargo, manipular magia paralela conlleva el riesgo de separarte de quienes amas, incluido Harry. ¿Segura que deseas caminar entre sombras?',
    tr4_3: 'Tras memorizar las contrarrunas de Severo, salgo sola después del toque de queda siguiendo el rastro de ceniza hacia el Bosque Encantado. Adelante, Piter se detiene entre la niebla: "¡Mira, Barti! Draconia viene sola, sin Harry ni Albuz!"',
    tr4_4: 'Belatrix surge de las sombras con una sonrisa helada. "¡No la toquen, idiotas! Su relicario la guía directo al túnel oculto: ¡dejen que baje hasta Lord Thom!"',
    tr4_5: 'Con la varita en alto, desciendo por el pasadizo bajo las raíces hasta que la Bóveda de obsidiana se abre ante mí. Junto al cristal brillante, Thom sonríe: "Por fin, Draconia."',
    tr4_split: 'La luz plateada gira en espiral alrededor de mis tobillos como agua helada. En ese reflejo veo el rostro preocupado de Harry... y sé que lo que elija ahora no tendrá vuelta atrás.',

    // Trunk 5
    tr5_1: 'Aquí en la Sala Común Esmeralda mantienes una compostura admirable, Draconia. Pero recuerda: el orgullo es un escudo contra la deshonra, no un muro para rechazar a todo aliado.',
    tr5_2: 'Más tarde esa noche, cuando mi padre y yo cruzamos el Patio hacia las puertas principales, Hermiona y Nevile nos interceptan sin aliento. "Draconia, Lord Lucio... vamos a bajar a la Bóveda con Albuz. Por favor, necesitamos su ayuda."',
    tr5_3: 'Afuera en el Puente de Piedra nevado, donde se reúne el profesorado, Harry se interpone en mi camino una última vez. "Más allá de nuestras casas, te necesitamos allá abajo. ¿Lucharás con nosotros o te quedarás sola?"',
    tr5_split: 'Los ojos verdes de Harry me suplican entre la nieve mientras mi padre aguarda en silencio a mi lado. Me duele el orgullo... ¿por qué dejar entrar a alguien da tanto miedo?',

    // Timeline 1
    t1_1: 'Espera... ¿lo dices en serio? ¿Sin escondernos más de Ronn, Hermiona o cualquiera? No tienes idea de lo feliz que me haces, Draconia.',
    t1_2: 'Amanece y el ritual de Thom ya empezó en la Bóveda del Espejo. Severo y yo sostendremos los pilares exteriores: ¡Harry y Draconia, avancen al núcleo!',
    t1_3: '¡Patético! ¿Una noble orgullosa tomada de la mano de mi rival?! ¡Tu relicario pertenece a mi mundo, Draconia—entrégamelo!',
    t1_4: '¡Juntos, Draconia, a la de tres! ¡Canaliza toda tu magia hacia el cristal plateado!',
    t1_5: 'Tres noches después, con Thom desterrado y el Espejo sellado para siempre, el Gran Comedor brilla por el Baile de Invierno. Ronn sonríe desde la mesa de ponche: "¡La mejor fiesta de victoria que hemos tenido!"',
    t1_6: 'Defendiste el honor de nuestra familia con valentía, Draconia. Y Harry... para ser un chico con el cabello imposiblemente despeinado, te has ganado mi respeto.',
    t1_7: '¿Me concedes este baile, Draconia? Sin más muros ni orgullo entre nosotros... solo tú y yo.',

    // Timeline 2
    t2_1: 'Todo el rostro de Harry se suaviza cuando me la sujeto en el cabello. "Sabía que el verde esmeralda te quedaba bien, Draconia."',
    t2_2: 'Abajo en la Bóveda del Espejo, los destellos cruzan los pilares de obsidiana. "¡Cuidado a tu izquierda, Draconia! Y cuando salgamos de aquí, por fin vas a admitir que estabas preocupada por mí."',
    t2_3: 'Severo inmoviliza a Piter y refuerza el círculo exterior. "Dejen las discusiones para después: ¡sellen el pilar central ahora que el escudo de Thom cedió!"',
    t2_4: 'Tres noches después en el Baile de Invierno —con la grieta de Thom por fin cerrada—, Hermiona nos mira con una sonrisa cómplice. "¿Sigues insistiendo en que solo son rivales, Draconia?"',
    t2_5: 'Harry me tiende la mano con una sonrisa suave y traviesa. "Vamos, Draconia. Solo un vals... mañana puedes volver a fingir que te molesto."',

    // Timeline 3
    t3_1: '¿Un secreto solo entre nosotros? Sinceramente... me gusta cómo suena. Sin expectativas ajenas, nadie mirando... solo tú y yo.',
    t3_2: 'Al amanecer descendemos a la Bóveda del Espejo junto a Lord Lucio y los profesores. Al ver mi relicario, Thom alza su varita furioso: "¿Te atreves a desafiarme, Draconia?! ¡Ese relicario debía abrir el cielo para mi imperio!"',
    t3_3: '¡Cuidado! ¡Mientras Lord Lucio retiene a Thom, lanza el encantamiento sellador conmigo ahora, Draconia!',
    t3_4: 'Tres noches después de nuestra victoria, el Baile de Invierno está en su apogeo. Al otro lado del salón, Ronn entrecierra los ojos confundido: "Qué raro... Harry y Draconia casi ni hablaron, pero ambos miran hacia la Torre de Astronomía."',
    t3_5: 'Arriba en el balcón silencioso bajo las estrellas, lejos de la música, Harry recupera el aliento con una sonrisa cálida. "Logré subir sin que Ronn lo notara. Feliz Baile de Invierno, mi reina esmeralda secreta."',

    // Timeline 4
    t4_1: '¡Imposible! ¡¿Cómo lograron estos seis mocosos contrarrestar cada trampa que pusimos en la cámara?!',
    t4_2: '¡Profesores Minerba, Severo, Remuz y Pamona, sostengan el anillo exterior! ¡Seis alumnos deben unir sus varitas en el centro del Espejo para desterrar a Thom!',
    t4_3: 'Ver a seis jóvenes magos de casas rivales luchar como uno solo... quizá las viejas costumbres sí debían cambiar. Bien liderado, Draconia.',
    t4_4: 'Tres noches después en el Baile de Invierno, con la brecha de Thom sellada para siempre, Hermiona alza su copa. "¡Seis varitas, un escudo inquebrantable! No solo salvamos la Academia: demostramos que juntos somos imparables."',
    t4_5: '¡Por los Guardianes de la Grieta! El romance puede esperar: esta noche me basta con llamarte mi mejor amiga, Draconia.',

    // Timeline 5
    t5_1: 'Muy bien. Quédate a mi derecha, Draconia. Harry, cubre el flanco izquierdo. Que Thom vea lo que es la verdadera disciplina noble.',
    t5_2: '¡Traidor de Lucio! ¡¿Alzas tu bastón contra los tuyos?!',
    t5_3: 'Nuestro linaje responde al honor, jamás a la locura. Ahora, Draconia... ¡sella el Espejo!',
    t5_4: 'Días después en el Baile de Invierno, tras desterrar a Thom con nuestro hechizo conjunto, Harry se acerca a mi padre y a mí con sinceridad. "Estuvieron increíbles allá abajo, Draconia. Te has ganado mi mayor respeto."',

    // Timeline 6
    t6_1: '¡Ahora, Draconia! ¡Invierte las runas plateadas que te enseñé y convierte el propio lazo de Thom en una jaula!',
    t6_2: '¡¿Severo?! ¡¿Le enseñaste el contracifrado?! ¡No—el Espejo se colapsa hacia adentro!',
    t6_3: 'A la tarde siguiente, en su silencioso despacho de las mazmorras, Severo deja sobre la mesa el relicario sellado. "Control extraordinario. Pocos alumnos dominan barreras sombrías sin ser consumidos. Tienes un don real, Draconia."',
    t6_4: 'Arriba en el Gran Comedor, los alumnos celebran el regreso de la paz. Harry cruza mi mirada y se acerca en voz baja. "Nadie más sabe que fuiste tú con Severo quien desmanteló el ritual de Thom desde la oscuridad. Gracias, Draconia."',

    // Timeline 7
    t7_1: '"Voy a sellar esta grieta desde adentro, Thom—para que Harry, mi padre y esta Academia jamás tengan que sangrar por tu guerra."',
    t7_2: '¡Draconia, NO! ¡No entres al Espejo sola—toma mi mano!',
    t7_3: 'Le sonrío por última vez a través de la luz plateada mientras el cristal se cierra, arrastrando a Thom de vuelta al vacío.',
    t7_4: 'Solo una cinta esmeralda cayó suavemente sobre el suelo de piedra: prueba de que, más allá de las estrellas, Draconia sigue cuidando de él.',

    // Timeline 8
    t8_1: 'Sabia elección, Draconia. Toma la corona plateada del Espejo... ¡juntos gobernaremos ambas realidades!',
    t8_2: '"¿Juntos? Me malinterpretaste, Thom. En esta bóveda solo hay espacio para *una* soberana."',
    t8_3: 'Por las estrellas... desterró a Thom, pero conservó la corona plateada del Espejo para sí misma. ¿En qué te has convertido, Draconia?',
    t8_4: 'Desde las sombras de la Bóveda del Espejo vigilo ambas líneas temporales en secreto: temida por los hechiceros oscuros y por siempre fuera del alcance de Harry.',

    // Timeline 9
    t9_1: '¡Mantente firme junto a nosotros, Draconia! Remuz y Pamona sostienen el arco izquierdo—ahora canaliza tu barrera con el Director.',
    t9_2: '¡El escudo de Thom se agrieta! ¡Un último impulso de luz dorada!',
    t9_3: 'A la mañana siguiente en el Gran Comedor restaurado, el Director Albuz habla ante toda la escuela junto a la profesora Minerba. "Rara vez he visto a un estudiante igualar la disciplina de nuestros profesores veteranos. La Academia tiene una gran deuda contigo, Draconia."',
    t9_4: 'Esa noche en el Baile de Invierno, Harry alza su copa hacia mí. "Luchaste como una verdadera campeona junto a Albuz y Minerba. Aunque tu corazón pertenezca al deber, siempre te admiraré, Draconia."',

    // Timeline 10
    t10_1: 'Cuando Harry se marcha con una expresión herida, me retiro a la Torre de Astronomía. La profesora Minerba se detiene en la puerta: "Quédate aquí si así lo prefieres, Draconia. Vigila las defensas superiores mientras el resto bajamos a la Bóveda."',
    t10_2: 'Tres noches después, la música sube desde el Baile de Invierno. En el Gran Comedor, el Director Albuz anuncia la victoria: "Harry, Hermiona, Ronn, Lune y Nevile sellaron la Bóveda del Espejo. La Academia está a salvo."',
    t10_3: 'Todos están celebrando... Ojalá Draconia nos hubiera dejado acercarnos a ella.',
    t10_4: 'Desde el balcón nevado sobre el Baile de Invierno, veo a Harry reír allá abajo. Mi máscara aristocrática sigue intacta... y más fría que nunca.',
  });

  window.I18N.choices.es = {
    c1_choice1: [
      'Aceptar su mano con suavidad: "Gracias, Harry... por favor, no le digas a nadie lo del relicario."',
      'Arrebatarle el libro sonrojada: "¡Fíjate por dónde corres, Harry! ¿Acaso esas gafas son de adorno?!"',
      'Apartarte con frialdad: "Quita las manos de mis cosas. Un relicario noble no es asunto tuyo."',
    ],
    c2_choice: [
      'Morderme el labio y guiar su muñeca con suavidad: "En sentido contrario, Harry. Despacio... déjame ayudarte a estabilizarlo."',
      'Resoplar quitándole el cucharón, con las orejas ardiendo: "¡¿Cómo sigues vivo sin mí?! ¡Hazte a un lado, tonto!"',
      'Retroceder fría y cruzar los brazos: "Arregla tu propio desastre. No pienso gastar aliento en un caldero sin remedio."',
    ],
    c3_branch_choice: [
      'Caminar en silencio junto a Harry hacia la patrulla del Bosque, decidida a dejar de ocultar cuánto me importa.',
      'Seguir a Harry y Ronn hacia el Bosque, insistiendo en que solo voy para evitar que los hechicen por descuidados.',
      'Ir a la Biblioteca con Hermiona, Lune, Nevile y Minerba para armar un plan que nos proteja a todos.',
    ],
    c3_dark_choice: [
      'Pedirle a Severo que me enseñe las contrarrunas prohibidas para enfrentar el misterio del Espejo por mi cuenta.',
      'Quedarme del lado de Lord Lucio y mantener a Harry y a los demás alumnos fuera de mi vida.',
    ],
    tr1_split: [
      '"Ya no quiero esconderme, Harry. Si esto es real, que toda la Academia nos vea caminar juntos."',
      '"Yo también te quiero, Harry... pero mantengámoslo en secreto hasta que pase la tormenta y podamos hablar con mi padre."',
    ],
    tr2_split: [
      'Tomarla en silencio ocultando el rubor: "Eres imposible, Harry... Está bien, la usaré ya que te tomaste la molestia."',
      'Sonreír con calma: "Guárdala hasta que detengamos a Thom. Esta noche los seis debemos concentrarnos."',
    ],
    tr3_split: [
      '"Reunamos a Harry, Hermiona, Ronn, Lune y Nevile en el núcleo: los seis juntos podemos sellar el Espejo."',
      '"Déjenme avanzar en primera línea junto al Director Albuz y los profesores para contener a Thom."',
    ],
    tr4_split: [
      'Dar la señal pactada con Severo para invertir las runas desde las sombras y atrapar a Thom.',
      'Cruzar sola hacia la luz plateada del Espejo para cerrar la brecha desde adentro y mantener a salvo a Harry.',
      'Fingir que acepto la oferta de Thom para arrebatarle la corona del Espejo en el último segundo.',
    ],
    tr5_split: [
      '"Lucharé hombro a hombro con mi padre para defender la Academia... y ganarme tu respeto de igual a igual, Harry."',
      '"Ve a jugar al héroe con Ronn y Hermiona, Harry. Mi familia no necesita la ayuda de nadie."',
    ],
  };
})();
