/**
 * TRADUCCIÓN COMPLETA AL ESPAÑOL (EDICIÓN 5 EPISODIOS + 5 FINALES)
 * ================================================================
 * Cobertura 100%: capítulos, objetivos, finales, los 211 nodos y todas las decisiones.
 */
window.I18N = window.I18N || {};
window.I18N.chapters = window.I18N.chapters || {};
window.I18N.objectives = window.I18N.objectives || {};
window.I18N.endings = window.I18N.endings || {};
window.I18N.nodes = window.I18N.nodes || {};
window.I18N.choices = window.I18N.choices || {};

window.I18N.chapters.es = {
  1: 'Ep. 1: La Máscara y el Choque',
  2: 'Ep. 2: Pociones y el Secreto de la Biblioteca',
  3: 'Ep. 3: El Honor del Padre y la Nevada',
  4: 'Ep. 4: La Víspera del Eclipse',
  5: 'Ep. 5: El Baile de Invierno y el Espejo',
};

window.I18N.objectives.es = {
  ep1_morning: 'Sobrevivir al desayuno sin perder la compostura frente a Harry',
  ep1_locket: 'Descubrir por qué despertó el relicario plateado de tu madre',
  ep2_potions: 'Sobrevivir a Pociones junto a Harry e investigar el robo',
  ep2_library: 'Descifrar la runa de ceniza plateada en la Biblioteca antes del toque de queda',
  ep3_lucio: 'Enfrentar las preguntas de Lord Lucio sobre Harry y el honor familiar',
  ep3_ball: 'Lidiar con las invitaciones al Baile de Invierno y vigilar el Bosque',
  ep3_ambush: '¡Defender el Sello II en el Bosque Encantado y proteger a Harry!',
  ep3_choice: 'Elegir al lado de quién estarás en la Víspera del Eclipse',
  ep4_romance: 'Reunirte con Harry en la Torre de Astronomía y defender el Sello III',
  ep4_alliance: 'Unir al Círculo de Seis Estrellas y defender el Puente de Piedra',
  ep4_shadow: 'Dominar en secreto el Cifrado Plateado de Severo e interceptar a Belatrix',
  ep4_honor: 'Caminar junto a Lord Lucio y decidir qué significa realmente el orgullo',
  ep5_climax: '¡Detener a Lord Thom bajo el Baile de Invierno antes del Eclipse!',
  ep5_epilogue: 'Disfrutar la noche por la que tanto luchaste',
};

window.I18N.endings.es = {
  sovereign: {
    badge: 'Final 1 / 5 • Romance Verdadero',
    title: 'Soberana de Corazones',
    desc: 'Sin más máscaras ni muros nobles. Con la bendición a regañadientes de Lord Lucio y el Espejo sellado para siempre, Draconia reclama el primer vals del Baile de Invierno en brazos de Harry.',
  },
  thorns: {
    badge: 'Final 2 / 5 • Romance Tsundere',
    title: 'Espinas y Rosas',
    desc: 'Incluso después de salvar dos mundos juntos, Draconia insiste en que solo bailó con Harry para corregir sus terribles pasos… hasta que un gesto tierno en el balcón estrellado la deja completamente sonrojada.',
  },
  guardians: {
    badge: 'Final 3 / 5 • Alianza de la Academia',
    title: 'Guardianes de las Seis Estrellas',
    desc: 'Draconia rompe siglos de rivalidad entre casas, uniendo a Harry, Hermiona, Ronn, Lune y Nevile como iguales. Gana verdaderos amigos… y un cálido comienzo junto a Harry.',
  },
  shadow_keeper: {
    badge: 'Final 4 / 5 • Sombras y Devoción',
    title: 'Guardiana de la Sombra Plateada',
    desc: 'Entrenada en contrarrunas prohibidas por el Profesor Severo, Draconia desmantela la grieta de Lord Thom desde las sombras, dejando a Harry una cinta esmeralda y una promesa bajo las estrellas.',
  },
  emerald_heir: {
    badge: 'Final 5 / 5 • Honor Noble',
    title: 'Orgullo de la Casa Esmeralda',
    desc: 'Luchando hombro con hombro junto a Lord Lucio, Draconia defiende la Academia con disciplina y honor ancestral, redefiniendo el orgullo de su linaje para una nueva era.',
  },
};

window.I18N.nodes.es = {
  // ==================== EPISODIO 1 ====================
  intro_1: 'Cada mañana en el Dormitorio Esmeralda comienza con el mismo ritual frente a mi alto espejo plateado. Acomodar recto el broche de la serpiente y el laurel. Alisar el cuello oscuro. Levantar la barbilla exactamente medio centímetro.',
  intro_2: '«Una hija de nuestra casa jamás se encorva, Draconia», resuena en mi memoria la voz serena y aristocrática de mi padre. «La gente confunde la ternura con debilidad; así que entrégales porte y elegancia».',
  intro_3: 'Toco el fresco relicario de plata que descansa bajo mi corbata: el último regalo que mi madre colocó alrededor de mi cuello antes de partir. A veces me pregunto si alguien en todo este castillo sospecha lo pesada que llega a ser esta máscara de porcelana.',
  intro_4: 'En los pasillos, los alumnos menores guardan silencio cuando paso. Ven cabello platino, túnicas esmeralda impecables y una mirada fría, y asumen que estoy hecha de hielo. Mi padre me educó con honor estricto, sí, jamás con crueldad… pero simplemente no sé cómo quitarme la máscara.',
  intro_5: '¡Y mucho menos cerca de Harry! Honestamente, es humillante. Doce años de etiqueta noble, completamente arruinados por un chico de cabello negro imposible de peinar, gafas redondas torcidas y una sonrisa tan cálida que podría derretir medio castillo.',
  intro_6: 'Cada vez que se acerca a menos de tres metros, mi corazón intenta escaparse del pecho. Quiero preguntarle si durmió bien, o avisarle que su bufanda arrastra por el suelo… ¡y en cambio mi boca suelta algún comentario filoso y altivo!',
  intro_7: 'Espera… antes de subir, rompo el sello de cera de la carta que mi padre envió con lechuza al amanecer. Mis dedos se congelan a mitad del pergamino.',
  intro_8: '«Draconia: El Eclipse del Baile de Invierno ocurrirá en tres noches. El Director Albuz me ha invitado mañana a inspeccionar los antiguos escudos del castillo; se han reportado extraños robos de hierbas para rituales oscuros cerca de la Academia. Mantén oculto el relicario de tu madre en todo momento. — Lord Lucio».',
  intro_9: 'Tres días para el Baile de Invierno… y mi padre viene realmente a la Academia. Guardo su carta a salvo en mi bolso, respiro hondo y subo al Gran Salón a desayunar. ¡Hoy mantendré la compostura perfecta!',

  e1_1: 'Las pesadas puertas de roble del Gran Salón se abren revelando el cálido aroma a avena tostada, canela y leña chisporroteante. Bajo el techo estrellado, los estudiantes ya murmuran emocionados sobre vestidos y parejas para el Baile de Invierno.',
  e1_2: 'Cerca de la mesa central, Ronn agita dramáticamente un panecillo con mantequilla. «¡Te lo digo, Harry, el Baile de Invierno es una trampa! ¡Un solo pisotón en el vals y quedas acabado socialmente hasta graduarte!»',
  e1_3: 'Harry ríe —esa risa brillante y espontánea que hace que mis pasos se vuelvan lentos sin mi permiso—. «Relájate, Ronn. Nadie espera que bailemos como aristócratas. Bueno… a menos que planees invitar a alguien aterradoramente elegante».',
  e1_4: 'Hermiona ríe suavemente, inclinándose para enderezar la corbata escarlata torcida de Harry mientras señala una tabla de runas entre ambos. «En serio, Harry, al menos arregla tu cuello antes de primera hora… ¡y mira aquel Reloj de Arena Guardián sobre el arco! ¡La arena plateada dejó de caer!»',
  e1_5: 'Espera… ¡¿por qué me dio un pinchazo en el pecho al ver a Hermiona arreglarle la corbata?! ¡Obviamente solo son mejores amigos! Aun así, frunzo el ceño antes de poder evitarlo.',
  e1_6a: 'Sigo la mirada de Hermiona hacia el enorme reloj de arena de cristal sobre el arco principal. Cada grano de arena plateada encantada flota inmóvil en el aire, temblando levemente… exactamente como advirtió mi padre en su carta.',
  e1_6b: 'Harry parpadea sorprendido y luego esboza una media sonrisa burlona mientras sus orejas se sonrojan un poco. «Buenos días también a ti, Draconia. Siempre es un alivio saber que vigilas mi vestuario». ¡Siento que mis orejas arden al instante!',
  e1_6c: 'Justo cuando giro hacia mi mesa, Harry levanta la vista y atrapa esa pequeña sonrisa desprevenida en mi rostro. Por un latido luce totalmente pasmado y me devuelve la sonrisa antes de que Hermiona le dé un codazo señalando el arco.',

  e1_7: 'Harry se pone de pie de golpe tomando su bolso. «Déjame revisar las runas del arco antes de que suene la campana, Hermiona. Si los escudos del castillo están fallando, Minerba debe saberlo… ¡UY! ¡Paso, cuidado!»',
  e1_8: '¡PUM! Al doblar detrás de la columna de mármol, choco de frente contra el pecho de Harry. Mis libros de cuero salen volando por las losas y, antes de caer al suelo de piedra, el brazo de Harry rodea firmemente mi cintura, sosteniéndome pegada a él.',
  e1_9: 'El tiempo se detiene. Puedo escuchar el latido de su corazón bajo su suéter de lana. Huele a lluvia fría de invierno y madera de cedro. Y entonces… ¡algo tibio se desliza fuera de mi cuello!',
  e1_10: '¡El relicario plateado de mi madre oscila entre los dos y estalla en una cegadora luz blanco-esmeralda! Harry jadea sosteniendo mis hombros. «¡Draconia! ¡¿Estás herida?! Espera… tu relicario acaba de brillar… ¡exactamente del mismo tono plateado que el reloj de arena congelado!»',
  e1_11: 'Medio Gran Salón ha quedado en silencio absoluto mirándonos. Harry está arrodillado a centímetros recogiendo mis pergaminos caídos, con sus ojos verdes llenos de auténtica preocupación —sin burla, sin miedo—. ¡Di algo normal, Draconia! ¡Lo que sea!',
  e1_12a: 'La expresión de Harry se suaviza al instante. Coloca mis libros con cuidado en mis manos, bajando la voz a un susurro cómplice. «Mis labios están sellados, Draconia. Solo… prométeme que me avisarás si vuelve a arder así, ¿de acuerdo?»',
  e1_12b: 'A tres pasos, Ronn suelta una carcajada. «¡Jajaja! ¡Amigo, te gritó, ni siquiera sacó su varita y tiene las orejas más rojas que un estandarte Grifín! ¡¿Estamos en un universo paralelo?!» Harry le da un codazo intentando aguantar la sonrisa.',
  e1_12c: 'Harry parpadea, dejando escapar un breve destello de tristeza antes de que Hermiona se interponga con suavidad. «Draconia, espera… no intentábamos entrometernos. Es que tu relicario pulsó en el instante exacto en que se agrietó la runa del arco…»',

  e1_13: '¡CRAC! Al sonar la campana matutina, el enorme Reloj de Arena Guardián sobre nuestras cabezas se parte de arriba a abajo. Los alumnos gritan, hasta que el Director Albuz se levanta sereno desde la mesa principal y, con un movimiento de varita, disuelve cada fragmento en inofensivo polvo estelar plateado.',
  e1_14: '«No hay motivo para el pánico, estudiantes», dice el Director Albuz, aunque sus antiguos ojos azules se detienen un segundo en el tenue resplandor bajo mi cuello. «Un viejo encantamiento protector simplemente cedió. Diríjanse con calma a su primera clase».',
  e1_15: 'A su lado, los labios de la Profesora Minerba forman una línea tensa mientras susurra a Albuz —lo justo para que yo alcance a oírlo al cruzar las puertas—: «Albuz… ese era el primer Sello del Eclipse. No falló por sí solo».',
  e1_16: '¿Un Sello del Eclipse…? Ya afuera en el frío Patio de piedra rumbo a las escaleras de las mazmorras, presiono la mano sobre el relicario plateado de mi madre. Sigue latiendo como un diminuto segundo corazón. ¿Qué selló mi madre bajo esta escuela… y por qué respondió a mí?',
  e1_17: '«¡Oye, Draconia! ¡Espera un segundo!» Unos pasos corren por los adoquines escarchados detrás de mí. Giro de golpe y encuentro a Harry recuperando el aliento, sosteniendo algo pequeño y brillante en su palma enguantada.',
  e1_18: '«Se te cayó tu broche plateado del cabello cuando choqué contigo hace un rato», dice frotándose la nuca con torpeza encantadora. «Le limpié el polvo. Supuse que Severo te quitaría cincuenta puntos si apareces sin llevar todo impecable».',
  e1_19: 'Miro el pequeño broche de plata y esmeralda en su mano. De verdad corrió hasta afuera en el frío solo para devolvérmelo antes de clase. «Yo… gracias, Harry. No tenías por qué molestarte».',
  e1_20: 'Harry sostiene mi mirada con una sonrisa tranquila y desarmantemente sincera. «Todos actúan como si estuvieras tallada en mármol, Draconia. ¿Sinceramente? Yo no creo que lo estés. Vamos, entremos a Pociones antes de que Severo nos deje castigados a los dos».',

  // ==================== EPISODIO 2 ====================
  e2_1: 'Abajo, en la mazmorra iluminada con velas, un vapor amargo asciende de veinte calderos de bronce. El Profesor Severo recorre las mesas haciendo ondear su túnica negra, posando su oscura mirada directamente sobre nosotros.',
  e2_2: '«Silencio. La evaluación práctica de hoy es una Poción de Claridad: requiere disciplina y cero estupideces. Por ello, yo mismo he reorganizado las parejas. Mesa Cuatro: Draconia y Harry».',
  e2_3: 'Ronn casi se atraganta con el aire mientras Hermiona esconde una sonrisa cómplice tras su libro. Harry se desliza en el taburete de madera a mi lado con una mueca de disculpa. «Parece que te tocó cuidar mi caldero, Draconia».',
  e2_4: '«Si haces explotar mi mesa, Harry, le diré a Minerba que te ofreciste voluntario para pulir todos los trofeos del salón», replico con porte sereno, aunque no logro evitar que una pequeña sonrisa se dibuje en mis labios al pasarle el cuchillo plateado.',
  e2_5: 'Durante diez minutos sorprendentemente tranquilos entramos en un ritmo natural: yo midiendo gotas de rocío lunar mientras Harry pica menta plateada. Cuando me inclino sobre su hombro para revisar su corte, se queda rígido un segundo. «Eh… ¿tan mal corto?»',
  e2_6: '«En realidad… está sorprendentemente parejo», admito en voz baja al notar lo cerca que están nuestros hombros. «Solo que agarras el cuchillo como si fuera una escoba en plena tormenta». Harry suelta una risa suave y cálida, solo entre los dos.',
  e2_7: 'De repente, la puerta de roble se abre de golpe. La Profesora Pamona entra apresurada, aún con tierra en su delantal y genuina alarma en el rostro. «¡Severo, perdona la interrupción, te necesito cinco minutos en el pasillo! ¡Alguien entró a robar al Invernadero Cuatro anoche!»',
  e2_8: 'Los ojos de Severo se estrechan peligrosamente. «¿Qué se llevaron, Pamona?» «¡Tres cajas enteras de Raíz de Eclipse… y hay ceniza plateada brillante quemada sobre el candado!» El rostro de Severo se vuelve de piedra. «Clase, no se muevan de sus calderos hasta mi regreso».',
  e2_9: 'En cuanto la pesada puerta se cierra, Nevile se inclina desde la mesa vecina susurrando nervioso. «¡¿La oyeron?! Ayer al anochecer, cuando volví por mis guantes de riego, vi a un hombre bajito con capa gris escabulléndose del Invernadero Cuatro…»',
  e2_10: 'Harry se gira bruscamente al oír a Nevile ¡y golpea sin querer todo su platillo de semillas estelares directo dentro de nuestro caldero! ¡FUUUSH! ¡Espuma violeta espesa sube hasta el borde! «¡Ah, Draconia! ¡Se puso morada! ¡No te rías, ayúdame!»',
  e2_choice1: '¡Severo volverá en cualquier instante! Chispas violetas bailan entre nosotros mientras Harry me mira en un pánico adorable. ¿Qué hago?',
  e2_11a: 'Mis dedos se cierran sobre sus cálidos nudillos, guiando su muñeca en tres firmes espirales plateadas. ¡La espuma violenta se calma hasta volverse luz estelar líquida! Harry baja la vista a nuestras manos unidas, respirando suave. «Guau… eres increíble, Draconia. Y mucho más amable de lo que jamás dejas ver».',
  e2_11b: 'En tres movimientos furiosos salvo la poción hasta dejarla de un plateado cristalino. Detrás de nosotros, Ronn silba bajito: «¡Amigo, te ves ridículamente feliz dejando que Draconia te mande!» Harry se pone rojo y le lanza una hoja de menta.',
  e2_11c: 'Mi hechizo de escarcha estabiliza el caldero al instante. Harry suelta un suspiro lento y asiente serio. «Tienes razón… perdona. También estás pensando en la ceniza plateada que mencionó Pamona, ¿verdad? El mismo brillo de tu relicario».',
  e2_12: 'Severo entra justo cuando suena la campana, con gesto sombrío. Al inspeccionar nuestra poción perfecta, sus cejas oscuras se alzan apenas. «Impresionante. Ya que parecen tan ansiosos por mantenerse ocupados, preséntense en el Invernadero Cuatro y en la Biblioteca tras la cena para inventariar los escudos restantes».',

  e2_13: 'Al anochecer, la niebla rodea el techo de vidrio del Invernadero Cuatro. Lune tararea dulcemente junto a una bandeja de Helechos Lunares cuando Harry y yo entramos. Ella inclina sus soñadores ojos azules entre nosotros. «¡Oh! Sus latidos suenan como dos búhos nevados intentando construir el mismo nido».',
  e2_14: '¡Tanto Harry como yo nos petrificamos como estatuas! «¡L-Lune! ¡Solo revisamos el candado roto!», tartamudea Harry frotándose el cuello ardiendo mientras yo examino frenéticamente un helecho totalmente inocente. Nevile tose para disimular una risita.',
  e2_15: 'Entonces la voz dulce de Lune se vuelve inesperadamente seria al señalar el candado de hierro chamuscado. «Esa ceniza plateada no pertenece a este mundo, Draconia. Anoche, cerca del borde del bosque, vi a un hombre encapuchado hablando ante un espejo que ardía en fuego violeta».',
  e2_16: 'Nevile me entrega un frasquito de vidrio con la ceniza plateada. «La Profesora Pamona pidió que Hermiona la comparara en los registros antiguos de la Biblioteca. Ella ya los espera arriba; nosotros cerraremos el invernadero por ustedes».',

  e2_17: 'Arriba, en la Biblioteca de techos altísimos, las lámparas doradas iluminan suavemente las estanterías de caoba. Hermiona dejó una pila de crónicas de escudos encuadernadas en cuero sobre la mesa del fondo, junto con una nota avisando que fue a pedir un mapa más a Minerba.',
  e2_18: 'Por una vez, no hay multitudes, ni alumnos murmurando, ni mesas rivales vigilando cada palabra. Solo la lluvia golpeando suavemente los altos vitrales… y Harry sentado frente a mí pasando páginas polvorientas de pergamino.',
  e2_19: 'Tras un minuto de calma, Harry levanta la mirada sobre la luz de la lámpara. «¿Puedo preguntarte algo sincero, Draconia? ¿Sin que me lances un hechizo?» Parpadeo. «Depende de qué tan impertinente sea». Él sonríe con ternura. «¿Por qué siempre actúas como si tuvieras que cargar el mundo entero tú sola?»',
  e2_20: 'Mis dedos se tensan levemente en el borde de la crónica. Nadie me había hecho jamás esa pregunta sin esperar una mueca helada a cambio. «Porque cuando murió mi madre, Harry… mi padre dejó de permitir que nadie lo viera sufrir. Me enseñó que nuestro apellido es una armadura».',
  e2_21: '«La gente cree que Lord Lucio es cruel, o que yo miro a todos por encima del hombro. No es verdad. Él solo tiene pánico de volver a perder a alguien… y yo pasé tanto tiempo intentando ser la heredera esmeralda perfecta que olvidé cómo simplemente hablar con quienes me importan».',
  e2_22: 'Un silencio tibio flota entre ambos. Despacio, Harry estira la mano sobre la madera iluminada por las velas y la apoya suavemente junto a la mía, tan cerca que las yemas de nuestros dedos se rozan. «No necesitas armadura conmigo, Draconia. A mí me gusta la chica que hay debajo».',
  e2_choice2: 'Mi corazón golpea con fuerza contra mis costillas. Sus ojos verdes me miran con absoluta serenidad, esperándome.',
  e2_23a: 'El aliento de Harry se entrecorta; luego una sonrisa lenta y radiante ilumina todo su rostro mientras su pulgar acaricia suavemente mis nudillos. «Me alegra oírlo… porque llevo todo el semestre inventando excusas para chocar contigo, Draconia».',
  e2_23b: 'Harry ríe bajito frotándose la frente con una sonrisa completamente abierta. «Trato hecho. Con una condición: guárdame un baile en el Baile de Invierno para demostrar que mi traje sobrevivió a tu inspección».',
  e2_23c: 'Harry se inclina de inmediato, abriendo mucho los ojos ante el emblema trazado a tinta que brilla tenuemente bajo la lámpara. «Espera un segundo… ¡ese es exactamente el mismo diseño que lleva tu relicario plateado!»',

  e2_24: 'Hermiona regresa apresurada entre los estantes desplegando un plano antiguo de los cimientos del castillo. «¡Draconia! ¡Harry! ¡Lo encontré, escuchen bien! Hace quince años, un hechicero oscuro llamado Lord Thom intentó fusionar una línea temporal en ruinas con la nuestra usando la Bóveda del Espejo bajo la Academia».',
  e2_25: '«¡Tres Guardianes sellaron la Bóveda con Tres Sellos del Eclipse: uno en el reloj de arena del Gran Salón, otro en el Bosque Encantado y el tercero en el Puente de Piedra! Y Draconia… ¡tu madre fue la Guardiana que forjó el Relicario Plateado como la cerradura maestra!»',
  e2_26: '¡ESTRUENDO! Arriba, en la galería superior, una pila de libros se desploma. ¡Una figura encorvada de capa gris —Piter— sisea en pánico mientras una neblina violeta gira en sus talones! «¡Ya saben lo del relicario! ¡Debo avisarle a Lord Thom!»',
  e2_27: '¡Antes de que alcancemos la escalera, Piter se desvanece por una grieta violeta en el muro de piedra! Harry se planta enseguida a mi lado, varita en mano. «Ahora todo encaja: el Sello I cayó esta mañana, ¡y el Eclipse llega a su punto máximo en el Baile de Invierno dentro de dos noches!»',
  e2_28: 'La Profesora Minerba entra deprisa mientras suenan las campanas del toque de queda por las torres. «Estudiantes, vuelvan a sus dormitorios de inmediato; alzaremos los escudos nocturnos. Y Draconia… tu padre, Lord Lucio, acaba de llegar a las puertas principales y pidió verte a primera hora mañana».',

  // ==================== EPISODIO 3 ====================
  e3_1: 'A la mañana siguiente, la nieve cae en silencio tras los altos ventanales góticos de la sala Esmeralda. Lord Lucio aguarda erguido junto a la chimenea, con su bastón de empuñadura plateada reposando con pulcritud en sus manos enguantadas.',
  e3_2: '«Te ves bien, Draconia», dice mi padre, suavizando apenas sus ojos grises antes de ponerse serio. «Albuz me puso al corriente al alba. El Sello I cayó, y los fanáticos de Thom cazan el relicario de tu madre antes del Eclipse del Baile de Invierno de mañana por la noche».',
  e3_3: '«Padre… ¿por qué nunca me dijiste que mamá fue una de las Guardianas que sellaron la Bóveda del Espejo?», pregunto en voz baja, rozando la cadena plateada.',
  e3_4: 'Por primera vez en años, Lord Lucio parece cansado. «Porque ella sacrificó su magia para que pudieras crecer en un mundo en paz, Draconia. Juré que ningún hechicero oscuro volvería a arrastrarte a esa bóveda. Lo cual me lleva a otro asunto…»',
  e3_5: 'La penetrante mirada de mi padre se clava en la mía. «Medio profesorado comentó que te vieron estudiando a solas en la Biblioteca —y riendo en el Patio— con Harry. Dime con franqueza, Draconia: ¿ese muchacho respeta quién eres, o solo te está arrastrando a un peligro imprudente?»',
  e3_choice1: 'Mi corazón retumba. Es la primera vez que me mantengo firme frente a mi padre por alguien a quien quiero.',
  e3_6a: 'Un largo silencio recorre la sala. Entonces —increíblemente— la comisura de los labios de Lord Lucio se curva apenas hacia arriba. «Heredaste la terquedad de tu madre, Draconia. Muy bien. Veamos si el joven Harry demuestra merecer esa confianza antes de que acabe este Eclipse».',
  e3_6b: 'Lord Lucio alza una impecable ceja plateada mirando mis orejas rojas como brasas. «Rivales. Fascinante. No recuerdo que los rivales se sonrojaran con tanta intensidad… aun así, mantén tu varita cerca hoy, hija».',
  e3_6c: 'Lord Lucio asiente solemne, apoyando una mano firme sobre mi hombro. «La disciplina es nuestro escudo, Draconia. Sin embargo… recuerda que el orgullo existe para proteger tu corazón, no para congelarlo por completo».',

  e3_7: 'Al salir al Patio después del almuerzo, copos suaves caen sobre los faroles de piedra decorados con cintas esmeralda y oro para el Baile de Invierno de mañana. Junto a la fuente, Ronn suda a mares mientras Hermiona sostiene un pequeño ramillete plateado.',
  e3_8: '«¡Sí, Ronn, iré al Baile contigo —en serio, tardaste tres semanas en preguntarlo!», ríe Hermiona alegremente antes de verme. «¡Oh, Draconia! ¡Harry lleva veinte minutos caminando en círculos tras aquel arco ensayando algo!»',
  e3_9: '¡Hermiona y Ronn prácticamente salen corriendo entre risas, dejando a Harry en medio de la nieve cayendo totalmente descubierto! Los copos se enredan en su cabello oscuro mientras camina despacio hacia mí, sacando de su abrigo un diminuto broche encantado de copo de nieve plateado y esmeralda.',
  e3_10: '«Vale, tenía todo un discurso súper elegante listo y Hermiona arruinó mi coartada», admite Harry con una sonrisa tímida capaz de detenerme el pulso. «Así que lo diré directo. Draconia… cuando detengamos a Thom y llegue la noche de mañana… ¿vendrías al Baile de Invierno conmigo?»',
  e3_choice2: 'Los copos de nieve se derriten en mis mejillas. Todas las reglas aristocráticas de mi cabeza guardan un dichoso silencio mientras miro al chico frente a mí.',
  e3_11a: '¡Harry luce como si acabara de ganar la Copa de la Academia diez veces seguidas! Con cuidado, prende el copo de nieve encantado en mi bufanda esmeralda, rozando mi mejilla levemente. «Es la mejor respuesta que pude haber soñado, Draconia».',
  e3_11b: 'Harry suelta una risita cálida dejando el broche en mi palma. «Practicaré mis pasos toda la noche solo por usted, Su Alteza». ¡Mi corazón da un vuelco ridículo!',
  e3_11c: 'Harry cierra sus dedos alrededor del broche, asintiendo con serena determinación. «Entonces te prometo que ambos llegaremos a esa pista de baile mañana por la noche, Draconia».',

  e3_12: '¡BUUUM! En el cielo crepuscular, un pilar de relámpagos violetas se alza desde el Bosque Encantado. El Profesor Remuz cruza corriendo las puertas del patio con la varita encendida. «¡El Sello II en los Monolitos del Bosque está bajo ataque! ¡Alumnos, quédense atrás…!»',
  e3_13: '¡El relicario de mi madre arde caliente sobre mi pecho! Harry y yo ni siquiera necesitamos hablar: corremos tras Remuz hacia la neblina helada del Bosque Encantado, donde las viejas piedras rúnicas brillan agrietadas emanando humo violeta.',
  e3_14: '¡Una carcajada demente resuena desde las ramas cubiertas de escarcha! Belatrix salta sobre el monolito fracturado girando una varita dentada mientras Barti y Piter rodean el círculo de piedra. «¡Vaya, vaya! ¡Miren quién cayó directo en nuestra trampa: la pequeña Draconia jugando a la heroína con Harry!»',
  e3_15: '«¡¿Acaso sabes lo patética que te ves ahora mismo?!», chilla Belatrix encantada. «¡En nuestra línea de tiempo, el sello de tu madre falló, Harry cayó antes de cumplir diecisiete inviernos y tú te arrodillaste en silencio a los pies de Lord Thom! ¡Entréganos ese relicario!»',
  e3_16: 'Una furia helada recorre mis venas ahogando hasta la última gota de miedo. Doy un paso justo delante de Harry, alzando mi varita mientras chispas esmeralda encienden mi manga. «¡Esa línea de tiempo JAMÁS existirá! ¡Y no le pondrás un dedo encima a Harry ni al legado de mi madre!»',
  e3_17: 'Belatrix gruñe mientras rayos violetas se enroscan en su varita y se abalanza al ataque: «¡Entonces veamos si tu precioso escudito noble sobrevive al verdadero caos, Draconia!»',

  e3_18: 'Mientras Belatrix retrocede tambaleándose tras mi último rayo esmeralda, un haz afilado de luz plateada cae entre nosotras. Lord Lucio emerge de la neblina junto al Profesor Remuz, alzando su bastón como el florete de un duelista. «¡Basta, Belatrix! ¡Lleva a tu escoria y huye antes de que convoque a todo el profesorado!»',
  e3_19: 'Escupiendo maldiciones, Belatrix agarra la capa de Barti mientras un portal violeta se rasga detrás de ellos. «¡Ríe mientras puedas, Lucio! ¡El Sello II ya está agrietado: mañana por la noche en el Eclipse, Lord Thom cruzará el Espejo!» Con un chasquido, desaparecen en la nieve.',
  e3_20: 'De regreso en la cálida y silenciosa Enfermería, la luz de la luna baña las sábanas blancas. Harry está sentado al borde de la camilla mientras yo vendo cuidadosamente la quemadura en su antebrazo: el maleficio frente al cual se lanzó para proteger mi flanco izquierdo.',
  e3_21: 'Mis manos tiemblan ligeramente al atar el nudo. «En serio, Harry… ¡¿en qué estabas pensando al saltar frente a la maldición de Barti?! ¡¿Y si hubiera sido peor?!»',
  e3_22: 'Harry toma con dulzura mi muñeca temblorosa con su mano sana, mirándome desde abajo con una sonrisa tierna. «Dejaré de lanzarme frente a las maldiciones por ti exactamente el día que tú dejes de hacerlo por mí, Draconia. ¿Trato?»',
  e3_23: 'Desde la puerta, la voz del Profesor Severo rompe la calma. «El Sello II está fracturado. Ahora solo el Sello III del Puente de Piedra contiene la Bóveda del Espejo… y mañana por la noche ocurre el Eclipse del Baile de Invierno. El Director Albuz espera que todos estén listos al alba».',
  ep3_crossroads: 'Solo queda una noche antes de que Lord Thom ataque bajo el Baile de Invierno. Mi corazón, mis amigos, el honor de mi padre y los secretos de Severo tiran de mí. ¿Cómo pasaré la Víspera del Eclipse?',

  // ==================== EPISODIO 4A (ROMANCE / TSUNDERE) ====================
  e4a_1: 'En lo alto de la Torre de Astronomía, la escarcha brilla sobre los telescopios de bronce y el cielo invernal se abre como terciopelo negro salpicado de diamantes. Me ciño la capa respirando el aire puro… hasta que unos pasos apresurados y familiares suben la escalera de caracol.',
  e4a_2: 'Harry aparece en el balcón equilibrando dos tazas humeantes de sidra caliente especiada. «Supuse que te encontraría aquí arriba», dice bajito pasándome una taza. «Con solo ver el techo de la Enfermería supe que necesitabas aire fresco».',
  e4a_3: 'La cerámica tibia descongela mis dedos al instante. «Sidra especiada con canela… ¿cómo diablos supiste que es mi favorita?» Harry sonríe apenado. «Ronn dice que presto demasiada atención cada vez que estás en el Gran Salón».',
  e4a_4: 'Nos apoyamos hombro con hombro en la baranda de piedra mirando los terrenos nevados. Tras un instante, la voz de Harry se suaviza. «En el Bosque… lo que dijo Belatrix sobre otra línea de tiempo donde perdimos. Te afectó mucho, ¿verdad?»',
  e4a_5: 'Miro la canela girar dentro de mi taza. «Sí. No porque le tenga miedo a Lord Thom… Me aterra un mundo donde me quede detrás de mi máscara helada para siempre y tú no estés en él, Harry».',
  e4a_6: 'Harry deja su taza y se gira por completo hacia mí. De su abrigo saca una delicada horquilla nueva de plata y esmeralda con forma de dos hojas de laurel entrelazadas. «Tu broche viejo se rompió cuando desviaste el maleficio de Belatrix. Le pedí a la Profesora Pamona y a Lune que me ayudaran a encantar uno nuevo para ti».',
  e4a_7: 'Despacio, alza su mano y aparta un mechón suelto de mi cabello platino detrás de mi oreja, deslizando con suavidad el pasador esmeralda. Su palma descansa un segundo sin aliento contra mi mejilla. «No me voy a ninguna parte, Draconia. Olvida las rivalidades y los rumores… me enamoré perdidamente de ti».',
  e4a_choice: 'Siento que todo mi pecho brilla más fuerte que el relicario de mi madre. Bajo las estrellas de invierno, el chico al que amé en secreto todo el año espera mi respuesta.',
  e4a_8a: 'Los ojos de Harry resplandecen con una alegría pura y desbordante. Me atrae suavemente contra su pecho, apoyando su barbilla sobre mi cabello plateado mientras las estrellas invernales giran en silencio sobre nosotros. Por primera vez en mi vida, no siento nada de frío.',
  e4a_8b: 'Harry suelta una risa sincera —una risa sin aliento y tiernamente rendida— y me abraza antes de que logre esconder mi cara sonrojada. «Nunca cambies, Draconia. De verdad, no cambiaría ese sonrojo feroz por nada del mundo».',
  e4a_9: '¡CLANG! ¡CLANG! ¡CLANG! ¡La campana de alarma de medianoche rompe la noche tranquila! Muy abajo, al otro lado del barranco nevado, llamas violetas estallan sobre los arcos antiguos del Puente de Piedra: ¡el Sello III!',
  e4a_10: 'Harry y yo corremos hacia el Puente de Piedra azotado por el viento con las varitas ya encendidas. Entre el aguanieve, Barti se alza sobre la piedra clave central tallando runas violetas mientras Piter se agazapa tras una barrera.',
  e4a_11: 'Barti gira hacia nosotros con una sonrisa letal: «¡Qué romántico! ¡La orgullosa heredera y su pequeño héroe llegaron justo a tiempo para ver caer el Sello III! ¡Veamos cuánto dura su precioso vínculo contra mis Lanzas de Grieta!»',
  e4a_12: 'Cuando Barti retrocede tambaleándose y desaparece en una nube de humo negro, unas botas firmes crujen sobre la nieve detrás de nosotros. Lord Lucio avanza junto a la Profesora Minerba… tras haber visto a Harry y a mí luchar espalda con espalda en perfecta armonía.',
  e4a_13: 'Lord Lucio inspecciona el puente chamuscado y luego desliza una mirada serena desde mi nueva horquilla esmeralda hasta la postura protectora de Harry a mi lado. «Tu técnica fue impecable, Draconia. Y Harry… aunque tu cabello siga siendo un crimen contra la etiqueta, posees un valor digno de estar al lado de mi hija».',
  e4a_14: 'Resistimos en el Puente, aunque las runas de Barti ya hirieron la piedra clave. Mañana por la noche, en el pico del Eclipse del Baile de Invierno, Lord Thom forzará la Bóveda del Espejo él mismo. Harry aprieta mi mano con fuerza: «Mañana terminamos con esto juntos… y luego reclamamos nuestro vals».',

  // ==================== EPISODIO 4B (ALIANZA SEIS ESTRELLAS) ====================
  e4b_1: 'Negándome a enfrentar el Eclipse de mañana divididos por viejas rivalidades, envío aviso por el castillo y en veinte minutos el Invernadero Cuatro brilla como un cálido farol contra la nieve. La Profesora Pamona sonríe radiante al vernos reunidos.',
  e4b_2: 'Nevile corta con cuidado seis hojas de Helecho Lunar con vetas plateadas y me entrega la más luminosa directamente a mí. «Jamás imaginé preparar escudos de batalla junto a Draconia… de verdad, gracias por confiar en nosotros. ¡Ya ni siquiera me tiemblan las manos!»',
  e4b_3: 'Ronn se apoya en una mesa masticando un sapo de menta. «Espera un segundo… ¡Draconia acaba de darle las gracias a Nevile sin añadir ni un comentario sarcástico! ¡Hermiona, mira el cielo, creo que la luna se volvió verde!»',
  e4b_4: 'Antes de poder contenerme, una risa clara y verdadera se escapa de mis labios —no una risita aristocrática ensayada, sino una risa genuina—. Hasta Ronn se queda parpadeando, y Hermiona sonríe con calidez. «Sinceramente, Draconia, esa sonrisa te sienta diez veces mejor que tu mirada fría de los pasillos».',
  e4b_5: 'Junto a la puerta de cristal, Harry me observa con una calidez tan suave y abierta que mis mejillas arden al instante. «Les dije que no estaba tallada en mármol», murmura bajito dándome un leve toque en el codo mientras me entrega una taza de té caliente.',
  e4b_6: 'Arriba en la Biblioteca desplegamos el plano del castillo de Hermiona en el suelo. Lune traza seis puntos estelares brillantes alrededor de la Bóveda del Espejo. «El relicario de tu madre no fue creado para cargar el peso solo, Draconia. Cuando seis corazones distintos canalizan un mismo círculo, ni siquiera un Sello fracturado puede ceder».',
  e4b_7: 'Mirando alrededor del círculo iluminado por velas —Harry, Hermiona, Ronn, Lune y Nevile— comprendo algo que las lecciones de etiqueta de mi padre nunca me enseñaron. Por primera vez desde que llegué a esta Academia, tengo amigos de verdad.',
  e4b_choice: 'Todos me miran para sellar nuestro pacto antes de empezar la patrulla. ¿Qué les digo?',
  e4b_8a: '¡Seis varitas chocan en un estallido de chispas esmeralda, escarlata, azul y oro! Harry sonríe ampliamente en el círculo: «¡Por el Pacto de las Seis Estrellas!»',
  e4b_8b: 'Ronn gime teatralmente alzando su varita de todos modos: «¡A sus órdenes, Capitana Draconia! ¡Solo no nos ponga ensayos extra después!» Todos ríen mientras el círculo destella.',
  e4b_9: '¡Suenan las campanas de medianoche! Al correr hacia el Puente de Piedra nevado encontramos al Director Albuz y al Profesor Remuz conteniendo oleadas de niebla sombría… ¡mientras Barti cae directo sobre el arco central para destrozar el Sello III!',
  e4b_10: 'Barti se burla de nuestro anillo de escudos luminosos de Helecho Lunar: «¡¿Un montón de colegiales jugando a ser soldados?! ¡Veamos cuánto dura su preciosa amistad frente a la verdadera magia oscura!»',
  e4b_11: 'Nuestro escudo de Seis Estrellas resiste intacto, lanzando a Barti de vuelta a su neblina en fuga. El Director Albuz baja su varita con profunda emoción brillando en sus ojos. «Extraordinario. Seis corazones de casas rivales latiendo al unísono… Draconia, tu madre lloraría de alegría esta noche».',
  e4b_12: 'Aún recuperando el aliento bajo la nieve, Harry choca suavemente su hombro con el mío. «Aunque la piedra se agrietó un poco, Thom no tiene idea de lo que le espera mañana por la noche. Descansa para el Baile de Invierno, Capitana».',

  // ==================== EPISODIO 4C (SOMBRAS / SEVERO) ====================
  e4c_1: 'Tras el toque de queda, la mazmorra de Pociones queda en silencio salvo por el chisporroteo de brasas verdes. El Profesor Severo cierra la puerta de roble con un movimiento de varita y desenrolla un pergamino de tinta plateada sobre el escritorio de piedra.',
  e4c_2: '«¿Estás segura de querer recorrer este camino, Draconia?», pregunta Severo con una voz inusualmente suave. «Tu madre y yo estudiamos estas contrarrunas juntos hace quince años. Pueden invertir el espejo dimensional de Lord Thom hacia adentro, convirtiéndolo en su prisión eterna».',
  e4c_3: '«Pero la magia de sombras exige absoluta soledad y autocontrol», advierte Severo con gravedad. «Si inviertes el cifrado sola, corres el riesgo de cargar tú sola el retroceso del Espejo… manteniendo a Harry y a los demás alumnos fuera de peligro, aunque jamás sepan lo que sacrificaste».',
  e4c_4: 'Trazo las runas plateadas brillantes con la punta de mi varita mientras el relicario de mi madre responde con un zumbido profundo y firme. «Si caminar en las sombras significa que Harry, mi padre y toda esta escuela puedan bailar a salvo mañana por la noche… enséñeme todo, Profesor».',
  e4c_5: 'Durante dos horas agotadoras, Severo me entrena sin tregua en contracifrados, inversión de escudos sin varita y defensa mental, hasta que el fuego plateado gira sin esfuerzo en mis dedos. Por un fugaz segundo, un destello de auténtico orgullo cruza su severo rostro.',
  e4c_6: 'Al escabullirme al Patio de medianoche para rastrear el rastro de ceniza plateada antes de que los agentes de Thom ataquen el Sello III, casi me congelo cuando una voz conocida me llama desde las sombras del arco. «¿Draconia? ¿Adónde vas tan tarde… sola?»',
  e4c_7: 'Harry avanza bajo la luz de la nieve buscando mi mirada con silenciosa preocupación. «Tienes esa expresión otra vez… la de creer que tienes que cargar el cielo entero tú sola. Sea lo que sea que Severo te enseñó abajo, no me dejes fuera. Déjame ir contigo».',
  e4c_choice: 'El corazón me duele tanto que cuesta respirar. Mantenerlo a salvo significa alejarlo del cifrado de sombras… pero mirarlo a los ojos hace casi imposible mentir.',
  e4c_8a: 'Los dedos de Harry se cierran con fuerza sobre mi tibia cinta esmeralda. «Más te vale cumplir esa promesa, Draconia», susurra con intensidad. «Porque si no regresas antes de que el Eclipse alcance su punto máximo, derribaré esa puerta de la Bóveda yo mismo».',
  e4c_8b: 'La tristeza cruza el rostro de Harry, aunque no se aparta hasta que me deslizo junto a él hacia la niebla. «Eres una pésima mentirosa, Draconia», me grita suave entre la nieve. «Sé que solo haces esto para protegernos».',
  e4c_9: 'Siguiendo la ceniza plateada en lo profundo del Bosque a medianoche, camino directo a la trampa de Belatrix… exactamente como predijo Severo. Ella surge de las sombras con una carcajada extasiada. «¡Completamente sola, sin tu noviecito ni papito! ¡Oh, Lord Thom me recompensará generosamente!»',
  e4c_10: '¡Runas plateadas arden como fuego frío en mi manga! Belatrix chilla repentinamente aterrada: «¡¿Contracifrados?! ¡¿Quién le enseñó a una niña magia prohibida de la Bóveda?!»',
  e4c_11: 'Belatrix huye sangrando chispas sombrías en la noche mientras Severo aparece en silencio entre los árboles. «Control impecable, Draconia», dice en voz baja. «Mañana por la noche, mientras el Baile de Invierno distrae al castillo, bajaremos a la Bóveda del Espejo y acabaremos con Lord Thom desde la oscuridad».',

  // ==================== EPISODIO 4D (LORD LUCIO Y HONOR) ====================
  e4d_1: 'Ya entrada la noche, la sala Esmeralda resplandece con el fuego de la chimenea mientras Lord Lucio y yo desplegamos los antiguos pergaminos familiares de escudos sobre la mesa de caoba: los mismos pergaminos que mi madre estudiaba.',
  e4d_2: 'Durante un largo rato, ninguno habla. Luego mi padre deja su pluma y mira en silencio el relicario plateado de mi madre descansando sobre mi corazón. «Fui demasiado duro contigo estos últimos años, Draconia».',
  e4d_3: 'Parpadeo con auténtica incredulidad: jamás en mi vida había escuchado a Lord Lucio admitir una falta. «¿Padre…?»',
  e4d_4: '«Cuando tu madre entregó su fuerza para sellar aquel Espejo, creí que si te forjaba en acero impenetrable, nada en este mundo podría herirte jamás», confiesa mi padre con voz serena. «Nunca quise que te sintieras sola, Draconia. La verdadera nobleza no es frialdad: es mantenerse erguida para que otros estén a salvo».',
  e4d_5: 'Un calor reconfortante sube a mis ojos; por primera vez en años, el enorme peso entre ambos simplemente se disuelve. «Estoy orgullosa de ser tu hija, Padre. Mañana por la noche le mostraremos a Lord Thom lo que significa el verdadero honor».',
  e4d_6: 'Al patrullar el Puente de Piedra nevado antes de medianoche, encontramos a Harry y Hermiona reforzando los faroles exteriores. Harry da un paso entre la nieve con sus ojos verdes firmes. «Lord Lucio. Draconia. Pasara lo que pasara entre nuestras casas antes… mañana por la noche nos necesita a todos».',
  e4d_7: 'Lord Lucio observa a Harry con serenidad y luego vuelve su mirada hacia mí. «La decisión es tuya, Draconia. ¿Aceptamos a Harry como un aliado igual junto a nuestra casa, o resistimos exclusivamente por cuenta propia?»',
  e4d_choice: 'Los copos giran entre mi padre y Harry. ¿Qué clase de heredera noble elegiré ser?',
  e4d_8a: 'Harry estrecha mi mano firmemente con una sonrisa cálida y aliviada. «Un honor pelear a tu flanco, Draconia». A mi lado, Lord Lucio inclina la cabeza en serena aprobación.',
  e4d_8b: 'El rostro de Harry se nubla con discreta tristeza, aunque asiente con respeto. «No te dejaré enfrentar a Thom sola mañana, Draconia… le guste o no a tu orgullo».',
  e4d_9: '¡Un chillido rasga la ventisca! ¡Belatrix desciende sobre el arco del Puente de Piedra haciendo llover chispas furiosas de su varita! «¡Lucio traidor! ¡¿Alzando tu emblema noble contra la nueva era de Lord Thom?!»',
  e4d_10: 'Lord Lucio planta su bastón plateado a mi lado: «¡Muéstrale la verdadera disciplina de nuestra familia, Draconia!» ¡Belatrix se lanza en una tormenta de fuego violeta!',
  e4d_11: '¡Nuestros escudos gemelos esmeralda destrozan la embestida de Belatrix, arrojándola aullando de vuelta a la ventisca! Lord Lucio acomoda su capa plateada con indudable orgullo. «Bien luchado, Draconia. Mañana por la noche acabaremos con Lord Thom de una vez por todas».',

  // ==================== EPISODIO 5A (CLÍMAX ROMANCE -> FINALES 1 Y 2) ====================
  e5_rom_1: 'Llega la noche del Baile de Invierno. Nieve encantada flota perezosa bajo mil velas doradas suspendidas en el Gran Salón. Al descender la gran escalinata de mármol con mi vestido de gala esmeralda y plata, Harry se queda congelado a medio paso junto al arco… completamente sin palabras.',
  e5_rom_2: '¡Incluso su cabello rebelde luce sospechosamente peinado esta noche, y de verdad siguió mi consejo con su abrigo oscuro a medida! Harry exhala suavemente tomando mi mano enguantada. «Draconia… estás deslumbrante. En serio, olvidé cada palabra que ensayé».',
  e5_rom_3: 'Justo cuando la orquesta alza sus arcos para el vals inicial… ¡CRAC! ¡Cada alto espejo del Gran Salón se resquebraja en luz violeta giratoria! Afuera, la luna invernal se tiñe de violeta sangre: ¡ha comenzado el Eclipse! El Director Albuz levanta una barrera dorada para resguardar a los estudiantes.',
  e5_rom_4: '¡Harry y yo bajamos corriendo bajo el salón hacia la Bóveda del Espejo de obsidiana mientras Albuz, Severo y Lord Lucio contienen a los secuaces de Belatrix arriba! En el centro del cristal plateado aguarda Lord Thom: alto, pálido e irradiando un escalofriante poder de otro mundo.',
  e5_rom_5: '«Mírate, Draconia», se burla Lord Thom señalando el espejo giratorio donde aparece un reflejo helado y solitario de mí arrodillada en túnicas oscuras. «¡Tomada de la mano de mi mayor rival! ¡Entrega el relicario de tu madre y reclama el trono para el que naciste… antes de que borre a Harry de ambos mundos!»',
  e5_rom_6: 'Me planto con firmeza junto a Harry, empuñando mi varita mientras el relicario plateado de mi madre arde en radiante fuego esmeralda. «¡Ese fantasma solitario de tu espejo no soy yo, Thom, y jamás lo será! ¡No vas a tocar a Harry y no vas a tocar nuestro mundo!»',
  e5_rom_boss: 'Lord Thom alza su varita de obsidiana con furia helada mientras toda la Bóveda tiembla: «¡Chica necia! ¡Entonces que el Eclipse los devore a ti y a Harry juntos!»',
  e5_rom_after: '¡Nuestras varitas se unen! La luz esmeralda del relicario de mi madre fluye a través del hechizo de Harry, lanzando a Lord Thom de regreso a la grieta en colapso y sellando el Espejo de obsidiana en cristal plateado silencioso para siempre. Harry me atrapa sin aliento en sus brazos. «Lo logramos, Draconia… ¡por fin terminó!»',
  e5_rom_choice: 'Una hora después, el Gran Salón brilla más espléndido que nunca, restaurado por el Director Albuz mientras el Baile de Invierno estalla en una fiesta de victoria. La orquesta inicia un lento vals dorado y Harry se inclina ante mí con una sonrisa radiante. ¿Cómo reclamo esta noche?',

  // --- FINAL 1: SOBERANA DE CORAZONES ---
  end_sov_1: 'Al otro lado de la mesa de ponche, a Ronn literalmente se le cae la mandíbula al vernos entrar tomados de la mano al centro de la pista de cristal. «¡Hermiona, pellízcame: Draconia sonríe como el sol y sostiene la mano de Harry frente a toda la escuela!» Hermiona ríe extendiendo la palma: «Me debes cinco monedas de plata, Ronn».',
  end_sov_2: 'Junto a las columnas esmeralda, Lord Lucio nos observa deslizarnos por la pista alzando apenas su copa hacia mí. Al pausarse la música, se acerca con sereno porte aristocrático. «Honraste el legado de tu madre esta noche, Draconia… y defendiste a quien eligió tu corazón sin vacilar».',
  end_sov_3: 'Mi padre lanza una mirada seca a Harry, cuyo cuello misteriosamente volvió a torcerse un poco. «Cuídala bien, joven Harry. Y por el cielo, déjala arreglarte la corbata antes de las fotografías». Harry sonríe con absoluta sinceridad: «Se lo prometo, Lord Lucio… todos los días».',
  end_sov_4: 'Más tarde nos escapamos del bullicio hacia la terraza estrellada sobre el salón, donde copos suaves bailan bajo la luz cálida de los faroles. El relicario plateado de mi madre reposa fresco y en paz sobre mi pecho, con su larga vigilia al fin cumplida.',
  end_sov_5: 'Harry aparta con dulzura un copo derretido de mi mejilla, con sus ojos verdes rebosantes de pura ternura. «¿Sabes? Todos solían llamarte la Heredera de Hielo, Draconia… jamás tuvieron idea de lo cálido que es realmente tu corazón».',
  end_sov_6: '«Solo porque fuiste lo bastante terco para quedarte hasta que me quitara la máscara», susurro con una sonrisa luminosa mientras se inclina bajo las estrellas invernales. Orgullo y esmeralda, corazón con corazón: nuestra verdadera historia apenas comienza.',

  // --- FINAL 2: ESPINAS Y ROSAS ---
  end_tho_1: 'Mientras Harry me guía por la pista y yo le susurro instrucciones urgentes sobre su postura, Hermiona cruza mi mirada con una sonrisa cómplice. «¿Sigues insistiendo en que solo son estrictamente rivales, Draconia?»',
  end_tho_2: '«¡O-Obviamente! ¡Alguien tiene que evitar que tropiece con su propia túnica frente al Director Albuz!», protesto indignada… aunque mi mano se niega a soltar el cálido hombro de Harry ni por un segundo.',
  end_tho_3: 'Harry me hace girar con inesperada elegancia y se inclina junto a mi oreja ardiendo. «Para que conste, practiqué el vals dos horas con Ronn ayer solo para que no tuvieras nada que regañarme esta noche».',
  end_tho_4: 'Al terminar la melodía, Harry me guía suavemente hacia el silencioso balcón nevado con vistas al lago. Antes de que pueda pronunciar otro orgulloso sermón, levanta mi mano enguantada con ternura y deposita un beso tibio y pausado sobre mis nudillos.',
  end_tho_5: '¡Todo mi cerebro sufre un cortocircuito instantáneo! «¡H-Harry! ¡No puedes hacer eso sin avisar a una dama de mi alcurnia!» Harry ríe bajito con chispa en los ojos. «¿Ah sí? ¿Debo pedir permiso también antes de tomarte la mano mañana en el desayuno?»',
  end_tho_6: 'Incapaz de contener mi sonrisa un segundo más, suelto una risita suave y entrelazo mis dedos tercamente con los suyos. «Tonto… ya no necesitas permiso». Incluso las rosas conservan algunas espinas… y Harry no cambiaría las mías por nada del mundo.',

  // ==================== EPISODIO 5B (ALIANZA -> FINAL 3) ====================
  e5_all_1: '¡El Baile de Invierno resplandece bajo nieve encantada! Por primera vez en la historia de la Academia, los seis —Harry, Hermiona, Ronn, Lune, Nevile y yo— llegamos juntos con nuestros trajes de gala, riendo como si hubiéramos sido mejores amigos toda la vida.',
  e5_all_2: '¡De pronto los altos espejos se agrietan con fuego violeta al oscurecerse el cielo por el Eclipse! El Director Albuz asiente serio hacia nuestro círculo: «Los profesores protegeremos el Gran Salón; ¡Círculo de Seis Estrellas, bajen a la Bóveda del Espejo y detengan a Lord Thom!»',
  e5_all_3: 'Abajo en la Bóveda de obsidiana, Lord Thom hace una mueca de desprecio al ver cómo nuestros seis escudos de Helecho Lunar forman una estrella resplandeciente alrededor del Espejo. «¡¿Una orgullosa heredera esmeralda luchando codo a codo con rivales comunes?! ¡La sangre noble de tu madre se desperdició en ti!»',
  e5_all_4: 'Nevile fortalece nuestro escudo, Lune lee las corrientes de la grieta, Hermiona entona el sello, Ronn cubre el flanco izquierdo y Harry cruza su mirada conmigo a mi derecha. «¡No sabes nada del orgullo de mi madre, Thom: nuestra fuerza es la unión!»',
  e5_all_boss: 'Lord Thom estalla en relámpagos oscuros intentando quebrar nuestro círculo de seis puntas: «¡Entonces miren cómo su frágil alianza se deshace en cenizas!»',
  end_grd_1: '¡Seis haces de magia convergen a través del relicario plateado de mi madre en un pilar cegador de luz estelar! Lord Thom es arrojado de regreso a la grieta en colapso y el Espejo se sella con un tañido cristalino.',
  end_grd_2: 'De vuelta arriba en el Baile de Invierno restaurado, toda la Academia estalla en una ovación ensordecedora al vernos entrar cubiertos de polvo estelar plateado. Ronn levanta un brazo triunfal: «¡Seis varitas, cero señores oscuros! ¡Que alguien traiga triple ponche!»',
  end_grd_3: 'Lune coloca una diminuta flor estelar plateada junto a mi oído con una sonrisa serena. «Mira alrededor del salón, Draconia. Ya nadie susurra por miedo… todos te sonríen».',
  end_grd_4: 'Hasta Lord Lucio se acerca a nuestra mesa y deja atónitos a Hermiona y Nevile dedicándoles una reverencia cortés y genuina. «Ver a casas rivales resistir invictas bajo la guía de mi hija… quizá los viejos muros realmente debían caer. Bien liderado, Draconia».',
  end_grd_5: 'Cuando empieza la última melodía lenta, Harry se acerca con una sonrisa cálida y algo tímida mientras Ronn y Hermiona arrastran a Nevile y Lune hacia la pista. «Oye, Capitana… antes de que acabe la noche, ¿puedo robarte el último baile, solo nosotros dos?»',
  end_grd_6: 'Deslizo mi mano felizmente en la suya, rodeada de amigos reales y del chico que me ayudó a escapar de mi jaula. «Pensé que nunca lo preguntarías, Harry». Juntos somos los Guardianes de las Seis Estrellas… y el mañana brilla más que nunca.',

  // ==================== EPISODIO 5C (SOMBRAS -> FINAL 4) ====================
  e5_shd_1: 'Sobre nosotros, la música de violines flota desde el reluciente Baile de Invierno: alumnos riendo a salvo sin saber que la luna del Eclipse se alza. Envuelta en una capa esmeralda oscura, me deslizo en silencio junto al Profesor Severo hacia el pasaje secreto de la Bóveda.',
  e5_shd_2: 'Dentro de la helada Bóveda del Espejo de obsidiana, una bruma plateada brota del cristal. Severo empuña su varita a mi lado con voz serena y grave. «Recuerda el contracifrado, Draconia. Cuando Lord Thom cruce, convertiremos su propio vínculo dimensional en una jaula antes de que un solo alumno arriba sufra daño».',
  e5_shd_3: '¡Fuego violeta estalla en la Bóveda! Lord Thom emerge del cristal roto y se detiene furioso al ver las runas plateadas brillantes que Severo y yo ya tejimos a sus pies. «¡¿Severo?! ¡¿Traicionaste las artes oscuras para enseñarle el contracifrado prohibido a una colegiala?!»',
  e5_shd_4: 'El relicario plateado de mi madre arde como luz estelar sobre mi pecho mientras mis runas de sombra atrapan la varita de Thom. «¿Querías una hija de la oscuridad, Thom? ¡Entonces contempla cómo luce la sombra cuando protege a quienes amo!»',
  e5_shd_boss: 'Lord Thom ruge mientras fragmentos de obsidiana giran por la caverna: «¡¿Te atreves a enjaularme?! ¡Quiébrate ante el Espejo!»',
  end_shd_1: 'Con una última contrarruna susurrada, el cifrado plateado se cierra de golpe. El grito de Lord Thom se extingue mientras el Espejo colapsa en un sello silencioso de obsidiana… ¡sin que se rompiera ni un solo cristal en el Baile de Invierno arriba!',
  end_shd_2: 'Minutos después en el tranquilo pasillo de la mazmorra, Severo me devuelve mi relicario ya frío, con sus ojos severos llenos de un respeto raro e inconfundible. «Disciplina extraordinaria, Draconia. Tu madre poseía exactamente ese valor silencioso. Puede que la escuela nunca sepa quién los salvó esta noche… pero yo no lo olvidaré».',
  end_shd_3: 'Demasiado agotada para unirme al bullicio abajo, subo a la nevada Torre de Astronomía a recuperar el aliento, escuchando el lejano vals que asciende desde el Gran Salón. Todos están a salvo. Harry está a salvo. Eso es todo lo que importa.',
  end_shd_4: 'La puerta de la escalera chirría detrás de mí. Giro de golpe… ¡y encuentro a Harry sin aliento en su abrigo de gala sosteniendo firmemente mi cinta esmeralda! «Te dije que te encontraría, Draconia. A Severo se le escapó dónde estabas».',
  end_shd_5: 'Harry se acerca bajo la nieve atando suavemente mi cinta esmeralda de vuelta alrededor de mi muñeca. «Salvaste a cada persona ahí abajo sin pedir ni un aplauso. Ya no tienes que caminar sola por las sombras, Draconia… porque yo estoy aquí».',
  end_shd_6: 'Lágrimas de alivio entibian mis mejillas mientras apoyo la cabeza tranquilamente contra su hombro con la música del vals resonando bajo las estrellas. La guardiana silenciosa de la Academia… ya nunca más sola en la oscuridad.',

  // ==================== EPISODIO 5D (HONOR NOBLE -> FINAL 5) ====================
  e5_hon_1: 'Al comenzar el Baile de Invierno, Lord Lucio me escolta descendiendo la gran escalinata, con seda esmeralda y filigrana plateada reluciendo bajo las velas flotantes. Los murmullos se apagan en auténtica admiración al ocupar nuestra guardia junto al Director Albuz.',
  e5_hon_2: '¡Entonces golpea el Eclipse! ¡Ondas violetas fracturan el suelo de piedra y el sello secreto bajo el salón se abre de golpe! Sin dudar un segundo, Lord Lucio alza su bastón plateado a mi lado: «¡Conmigo, Draconia! ¡Demuéstremosle a este impostor oscuro cómo luce el honor ancestral!»',
  e5_hon_3: 'Dentro de la Bóveda del Espejo, Lord Thom nos mira con veneno en los ojos. «¡Lord Lucio! ¡En mi línea de tiempo las casas nobles se arrodillaban ante mi trono! ¡¿Por qué desperdicias el poder supremo por una escuela llena de débiles?!»',
  e5_hon_4: 'De pie con orgullo a la derecha de mi padre mientras los escudos esmeralda familiares arden sobre el suelo, respondo antes incluso que él: «¡Porque la verdadera nobleza protege el reino y jamás se arrodilla ante tiranos como tú, Thom! ¡Ahora enfrenta a la Casa Esmeralda!»',
  e5_hon_boss: 'Lord Thom gruñe lanzando fuego oscuro entre los pilares de obsidiana: «¡Entonces que su precioso linaje noble arda junto con esta Bóveda!»',
  end_hon_1: '¡La barrera ancestral de mi padre y el relicario plateado de mi madre resuenan en una cegadora armonía esmeralda! La oleada hace añicos la varita de obsidiana de Thom y sella el Espejo dimensional para siempre.',
  end_hon_2: 'Cuando regresamos al Gran Salón restaurado, el mismísimo Director Albuz encabeza una ovación de pie de toda la Academia. «Esta noche, la Casa Esmeralda demostró que el verdadero orgullo se mide por el valor y el sacrificio. ¡La Academia tiene una deuda imperecedera contigo, Draconia!»',
  end_hon_3: 'Lord Lucio apoya su mano cálidamente sobre mi hombro, con los ojos brillando de emoción contenida. «Has superado todo lo que jamás soñé para ti, hija mía. Tu madre sonríe sobre nosotros esta noche».',
  end_hon_4: 'Al reanudarse el vals de la victoria, Harry cruza sereno el reluciente suelo y me ofrece una reverencia sorprendentemente formal y llena de respeto. «Tú y Lord Lucio estuvieron extraordinarios allá abajo, Draconia. ¿Me concedería la campeona de la Casa Esmeralda un baile… como iguales?»',
  end_hon_5: 'Miro un instante a mi padre —quien asiente con dignidad— y deposito mi mano graciosamente en la de Harry con una sonrisa genuina y radiante. «Solo si puedes seguirme el ritmo, Harry». Mi orgullo ya no es un muro: es una corona de luz esmeralda.',
};

window.I18N.choices.es = {
  e1_5: [
    'Mantener la calma y mirar hacia arriba al Reloj de Arena Guardián congelado que mencionó Hermiona.',
    'Pasar con la barbilla alta y murmurar: «En serio, Harry, ¿necesitas niñera hasta para anudarte la corbata?»',
    'Sonreír discretamente para mí —al menos Harry se ve feliz esta mañana— y tomar asiento cerca.',
  ],
  e1_11: [
    'Bajar la voz apretando el relicario tibio: «Estoy bien, Harry… gracias por atraparme. Por favor, no le digas a nadie que brilló».',
    'Apartarme sonrojada hasta las orejas: «¡Fíjate por dónde corres, Harry! ¡¿Esas gafas son solo de adorno?! ¡Dame mis libros!»',
    'Retroceder detrás de un muro helado: «Quita tus manos de mis cosas, Harry. La reliquia de mi familia no es asunto tuyo».',
  ],
  e2_choice1: [
    'Acercarme a su lado y cubrir su mano sobre el cucharón: «Respira, Harry. En sentido antihorario, despacio… sigue mi ritmo».',
    'Sonrojarme furiosa y quitarle el cucharón: «¡¿Cómo sigues vivo sin mí?! ¡Quítate, tonto, pásame la hoja plateada!»',
    'Lanzar un preciso hechizo de escarcha a distancia: «Atrás. Concéntrate en las Raíces de Eclipse robadas, no en tonterías».',
  ],
  e2_choice2: [
    'Girar mi mano suavemente para entrelazar mis dedos con los suyos: «Sinceramente, Harry… verte cada mañana es mi parte favorita de este castillo».',
    'Sonrojarme de golpe y darle un golpecito suave en la frente: «¡D-Deja de decir cosas sinvergüenzas! ¡Y déjame arreglar tu horrible traje para el Baile!»',
    'Respirar hondo y señalar un emblema brillante en la crónica: «Gracias, Harry… de verdad. ¡Ahora mira esta página: aparece el relicario de mi madre!»',
  ],
  e3_choice1: [
    'Sostener su mirada con firmeza: «Él ve a mi verdadero yo, Padre, no solo nuestro escudo. Me hace más valiente y confío en él».',
    'Sonrojarme muchísimo acomodándome el cuello: «¡S-Solo somos rivales investigando la misma amenaza, Padre! ¡De verdad!»',
    'Bajar la mirada con obediencia: «El honor de nuestra casa va primero, Padre. No dejaré que los sentimientos nublen mi juicio».',
  ],
  e3_choice2: [
    'Sonreír radiante tomando el broche de copo plateado: «Sí, Harry. Guárdame el primer vals; no iría con nadie más».',
    'Esconder mis mejillas ardiendo con un puchero altivo: «¡E-Está bien! ¡Solo porque nadie más sobreviviría a tus pisotones, tonto!»',
    'Tocar el broche suavemente con una sonrisa nostálgica: «Guárdalo a salvo hasta que sellemos la Grieta, Harry… y vuelve a preguntármelo entonces».',
  ],
  ep3_crossroads: [
    '💚 Reunirme a solas con Harry en la Torre de Astronomía esta noche: sin más máscaras ni miedo a mostrar cuánto lo quiero.',
    '⭐ Reunir a Harry, Hermiona, Ronn, Lune y Nevile para forjar una defensa de Seis Estrellas y unir a la Academia.',
    '🌑 Bajar a la mazmorra de Severo para dominar el Contracifrado prohibido y proteger a Harry desde las sombras.',
    '👑 Caminar junto a Lord Lucio esta noche para preparar los escudos ancestrales de nuestra familia con orgullo noble.',
  ],
  e4a_choice: [
    'Acercarme a su calor apoyando mi mano sobre la suya: «Sin más muros, Harry. Yo también te amo… y mañana quiero que toda la Academia nos vea juntos».',
    'Ponerme roja como un tomate sujetando suavemente su cuello: «¡T-Tonto! ¡Claro que estoy enamorada de ti, por quién más arriesgaría que me maldigan?! ¡Solo no te creas demasiado!»',
  ],
  e4b_choice: [
    'Alzar mi varita sobre el plano: «Seis varitas, sin casas rivales: ¡esta noche y mañana protegemos esta Academia como iguales!»',
    'Sonreír burlona a Ronn y Harry: «Ya que ninguno sigue un plan sin mi liderazgo, ¡tomo el mando oficialmente!»',
  ],
  e4c_choice: [
    'Desatar mi cinta esmeralda y ponerla en su mano: «Confía en mí esta noche, Harry. Espérame en el Baile de Invierno; prometo que volveré».',
    'Volver a ponerme mi máscara fría para protegerlo: «Quédate en el castillo, Harry. La magia de sombras no es un juego para héroes; déjanos esto a Severo y a mí».',
  ],
  e4d_choice: [
    'Extenderle mi mano enguantada con serena dignidad: «Lucha con nosotros como un igual, Harry. El honor crece cuando se comparte».',
    'Levantar la barbilla con frialdad: «Mantén a tus amigos a salvo adentro, Harry. Mi familia terminará lo que mi madre comenzó».',
  ],
  e5_rom_choice: [
    '💚 Sonreír abiertamente y tomar su mano frente a toda la Academia: «Sin más secretos, Harry… este vals es nuestro». (Final 1: Soberana de Corazones)',
    '🌹 Sonrojarme intensamente alzando la barbilla traviesa: «E-Está bien, un vals… ¡solo intenta no pisarme el vestido, tonto!» (Final 2: Espinas y Rosas)',
  ],
};
