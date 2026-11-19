/**
 * VOLLSTÄNDIGE DEUTSCHE ÜBERSETZUNG (5-EPISODEN-EDITION + 5 ENDEN)
 * ==================================================================
 * 100 % Abdeckung: Kapitel, Ziele, Enden, alle 206 Story-Knoten und alle 12 Entscheidungen.
 */
window.I18N = window.I18N || {};
window.I18N.chapters = window.I18N.chapters || {};
window.I18N.objectives = window.I18N.objectives || {};
window.I18N.endings = window.I18N.endings || {};
window.I18N.nodes = window.I18N.nodes || {};
window.I18N.choices = window.I18N.choices || {};

window.I18N.chapters.de = {
  1: 'Ep. 1: Die Maske und der Zusammenstoß',
  2: 'Ep. 2: Zaubertränke und das Geheimnis der Bibliothek',
  3: 'Ep. 3: Die Ehre des Vaters und der Schneefall',
  4: 'Ep. 4: Vorabend der Eklipse',
  5: 'Ep. 5: Der Winterball und der Spiegel',
};

window.I18N.objectives.de = {
  ep1_morning: 'Überstehe das Frühstück, ohne in Harrys Nähe die Fassung zu verlieren',
  ep1_locket: 'Finde heraus, warum das silberne Medaillon deiner Mutter plötzlich erwacht ist',
  ep2_potions: 'Überstehe Zaubertränke an Harrys Seite – und untersuche die gestohlenen Wurzeln',
  ep2_library: 'Entschlüssle die Silberasche-Rune in der Bibliothek vor der Sperrstunde',
  ep3_lucio: 'Stelle dich Lord Lucios Fragen über Harry und die Ehre deines Hauses',
  ep3_ball: 'Meistere die Einladungen zum Winterball – und behalte den Verzauberten Wald im Blick',
  ep3_ambush: 'Verteidige Siegel II im Verzauberten Wald und beschütze Harry!',
  ep3_choice: 'Entscheide, an wessen Seite du am Vorabend der Eklipse stehst',
  ep4_romance: 'Triff Harry oben auf dem Astronomieturm und verteidige Siegel III',
  ep4_alliance: 'Vereine den Sechs-Sterne-Kreis und verteidige die Steinbrücke',
  ep4_shadow: 'Meistere im Geheimen Severos Silber-Chiffre und fange Belatrix ab',
  ep4_honor: 'Stehe an Lord Lucios Seite und entscheide, was Stolz wirklich bedeutet',
  ep5_climax: 'Halte Lord Thom unter dem Winterball auf, bevor die Eklipse ihren Höhepunkt erreicht!',
  ep5_epilogue: 'Genieße die Nacht, für deren Schutz du so hart gekämpft hast',
};

window.I18N.endings.de = {
  sovereign: {
    badge: 'Ende 1 / 5 • Wahre Romantik',
    title: 'Herrscherin der Herzen',
    desc: 'Keine Masken mehr, kein Verstecken mehr hinter adeligen Mauern. Mit Lord Lucios widerstrebendem Segen und dem für immer versiegelten Spiegel beansprucht Draconia den ersten Walzer des Winterballs in Harrys Armen.',
  },
  thorns: {
    badge: 'Ende 2 / 5 • Tsundere-Romantik',
    title: 'Dornen und Rosen',
    desc: 'Selbst nachdem sie gemeinsam zwei Welten gerettet haben, beharrt Draconia darauf, nur mit Harry getanzt zu haben, um seine schreckliche Beinarbeit zu retten – bis ein leiser Augenblick auf dem sternenbeschienenen Balkon sie tief erröten lässt.',
  },
  guardians: {
    badge: 'Ende 3 / 5 • Akademie-Allianz',
    title: 'Wächter des Sechs-Sterne-Risses',
    desc: 'Draconia bricht jahrhundertealte Hausrivalitäten auf und vereint Harry, Hermiona, Ronn, Lune und Nevile als Gleichgestellte. Sie gewinnt wahre Freunde – und einen warmen Neuanfang mit Harry.',
  },
  shadow_keeper: {
    badge: 'Ende 4 / 5 • Schatten und Hingabe',
    title: 'Hüterin des Silberschattens',
    desc: 'Von Professor Severo in verbotenen Gegenrunen geschult, zerschlägt Draconia Lord Thoms Riss aus den Schatten heraus – und hinterlässt Harry ein einziges smaragdgrünes Band und ein Versprechen unter den Sternen.',
  },
  emerald_heir: {
    badge: 'Ende 5 / 5 • Edle Ehre',
    title: 'Stolz des Hauses Smaragd',
    desc: 'Schulter an Schulter mit Lord Lucio verteidigt Draconia die Akademie mit Disziplin und alter Ehre – und definiert neu, was der Stolz ihrer Familie für ein neues Zeitalter bedeutet.',
  },
};

window.I18N.nodes.de = {
  // ==================== EPISODE 1 ====================
  intro_1: 'Jeder Morgen im Smaragd-Schlafsaal beginnt mit demselben Ritual vor meinem hohen Silberspiegel. Die Schlangen-und-Lorbeer-Brosche gerade anstecken. Den dunklen Wollkragen glatt streichen. Das Kinn genau einen Zentimeter heben.',
  intro_2: '„Eine Tochter unseres Hauses lässt niemals die Schultern hängen, Draconia“, hallt die ruhige, aristokratische Stimme meines Vaters in meiner Erinnerung wider. „Die Leute verwechseln Sanftheit mit Schwäche – also gib ihnen stattdessen Haltung.“',
  intro_3: 'Ich berühre das kühle silberne Medaillon, das unter meiner Krawatte ruht – das letzte Geschenk, das meine Mutter mir um den Hals legte, bevor sie von uns ging. Manchmal frage ich mich, ob irgendjemand in diesem ganzen Schloss ahnt, wie schwer diese Porzellanmaske werden kann.',
  intro_4: 'Auf den Korridoren verstummen die jüngeren Schüler, sobald ich vorübergehe. Sie sehen platinblondes Haar, maßgeschneiderte smaragdgrüne Roben und einen kühlen Blick – und glauben, ich sei aus Winterglas gemacht. Vater erzog mich zu strenger Ehre, ja, niemals zu Grausamkeit … doch ich weiß einfach nicht, wie man diese Maske abnimmt.',
  intro_5: 'Erst recht nicht in Harrys Nähe. Ganz ehrlich, es ist demütigend! Zwölf Jahre adelige Etikette, vollständig zunichtegemacht von einem einzigen Jungen mit hoffnungslos zerzaustem schwarzem Haar, schiefer runder Brille und einem Grinsen, das warm genug ist, um das halbe Schloss zum Schmelzen zu bringen.',
  intro_6: 'Jedes einzelne Mal, wenn er sich mir auf drei Schritte nähert, versucht mein Herz, aus meinem Brustkorb zu fliehen. Ich möchte ihn fragen, ob er gut geschlafen hat, oder ihm sagen, dass sein Schal über den Boden schleift … und stattdessen platzt mein Mund mit etwas Spitzem und Hochmütigem heraus!',
  intro_7: 'Moment – bevor ich hinaufgehe, breche ich das Wachssiegel des Eulenbriefs, den Vater im Morgengrauen geschickt hat. Auf halbem Weg über das Pergament erstarren meine Finger.',
  intro_8: '„Draconia: Die Eklipse des Winterballs fällt in drei Nächten. Schulleiter Albuz hat mich für morgen eingeladen, die alten Schutzzauber des Schlosses zu prüfen – in der Nähe wurden seltsame Diebstähle von Kräutern für dunkle Rituale gemeldet. Halte das Medaillon deiner Mutter jederzeit verborgen. — Lord Lucio.“',
  intro_9: 'Drei Tage bis zum Winterball … und Vater kommt tatsächlich an die Akademie. Ich verstaue seinen Brief sicher in meiner Tasche, atme tief durch und gehe zum Frühstück hinauf in die Große Halle. Heute werde ich vollkommen gefasst sein!',

  e1_1: 'Die Eichentüren der Großen Halle schwingen auf und entlassen den warmen Duft von geröstetem Hafer, Zimt und knisterndem Kaminfeuer. Unter der sternenbesäten Decke tuscheln die Schüler bereits aufgeregt über Ballkleider und Verabredungen für den Winterball.',
  e1_2: 'Nahe der mittleren Bank fuchtelt Ronn dramatisch mit einem gebutterten Brötchen herum. „Ich sag’s dir, Harry, der Winterball ist eine Falle! Ein falscher Schritt beim Walzer und du bist bis zum Abschluss gesellschaftlich erledigt!“',
  e1_3: 'Harry lacht – dieses helle, mühelose Lachen, das meine Schritte ohne meine Erlaubnis langsamer werden lässt. „Entspann dich, Ronn. Niemand erwartet, dass wir wie Aristokraten tanzen. Na ja … es sei denn, du planst, jemanden einzuladen, der furchterregend anmutig ist.“',
  e1_4: 'Hermiona kichert, beugt sich herüber, um Harrys schiefe scharlachrote Krawatte zu richten, und deutet dabei auf eine Runenkarte zwischen ihnen. „Ganz ehrlich, Harry, bring wenigstens vor der ersten Stunde deinen Kragen in Ordnung – und sieh dir die Schutz-Sanduhr über dem Torbogen an! Der silberne Sand steht völlig still!“',
  e1_5: 'Moment – warum hat es mir gerade einen Stich in der Brust versetzt, als Hermiona seine Krawatte gerichtet hat?! Sie sind doch offensichtlich bloß beste Freunde! Trotzdem ziehen sich meine Brauen zusammen, ehe ich es verhindern kann.',
  e1_6a: 'Ich folge Hermionas Blick hinauf zur gewaltigen gläsernen Sanduhr über dem Hauptbogen. Jedes einzelne Korn des verzauberten silbernen Sandes schwebt reglos in der Luft – leicht zitternd, genau wie Vater in seinem Brief gewarnt hat.',
  e1_6b: 'Harry blinzelt überrascht und schenkt mir dann ein neckendes Halblächeln, während seine Ohren sich zart rosa färben. „Dir auch einen guten Morgen, Draconia. Immer schön zu wissen, dass du ein Auge auf meine Garderobe hast.“ Meine Ohren fangen augenblicklich Feuer!',
  e1_6c: 'Genau als ich mich zu meinem Tisch wende, hebt Harry zufällig den Blick – und erwischt das winzige, ungeschützte Lächeln auf meinem Gesicht. Einen Herzschlag lang wirkt er vollkommen fassungslos und lächelt zurück, ehe Hermiona ihn an der Schulter anstößt und auf den Torbogen deutet.',

  e1_7: 'Harry springt rasch auf und greift nach seiner Tasche. „Lass mich die Runen unter dem Torbogen prüfen, bevor die Glocke läutet, Hermiona. Wenn die Schutzzauber des Schlosses nachlassen, muss Minerba es erfahren – WHOA! Achtung, aus dem Weg!“',
  e1_8: 'RUMMS! Als ich hinter der Marmorsäule hervortrete, pralle ich direkt gegen Harrys Brust! Meine Lederbücher rutschen über die Steinplatten – und noch ehe ich zu Boden stürzen kann, schlingt sich Harrys Arm fest um meine Taille und zieht mich sicher an sich.',
  e1_9: 'Die Zeit bleibt stehen. Ich höre seinen Herzschlag direkt unter seinem Wollpullover. Er duftet nach klarem Winterregen und Zedernholz. Und dann – gleitet etwas Warmes unter meinem Kragen hervor!',
  e1_10: 'Das silberne Medaillon meiner Mutter schwingt zwischen uns und flammt in blendendem smaragdweißem Licht auf! Harry schnappt nach Luft und hält meine Schultern fest. „Draconia! Bist du verletzt?! Warte … dein Medaillon hat gerade geleuchtet – in genau demselben Silberton wie die erstarrte Sanduhr!“',
  e1_11: 'Die halbe Große Halle ist totenstill und starrt uns an. Harry kniet nur wenige Zentimeter entfernt und sammelt meine heruntergefallenen Pergamente ein, seine grünen Augen weit vor aufrichtiger Sorge – kein Spott, keine Angst. Sag irgendetwas Normales, Draconia! Irgendetwas!',
  e1_12a: 'Harrys Miene wird augenblicklich weich. Behutsam legt er mir meine Bücher in die Hände und senkt die Stimme zu einem verschwörerischen Flüstern. „Meine Lippen sind versiegelt, Draconia. Aber … versprich mir, dass du es mir sagst, wenn es wieder so glüht, okay?“',
  e1_12b: 'Drei Schritte entfernt bricht Ronn in schallendes Gelächter aus. „Hahahaha! Kumpel, sie hat dich angeschrien, nicht mal ihren Zauberstab gezogen, und ihre Ohren glühen leuchtender als ein Gryffin-Banner! Sind wir in einem Paralleluniversum?!“ Harry stößt ihn mit dem Ellbogen an und versucht vergeblich, nicht zu grinsen.',
  e1_12c: 'Harry blinzelt, ein kurzes Aufblitzen von Verletztheit huscht über sein Gesicht, bevor Hermiona sanft zwischen uns tritt. „Draconia, warte – wir wollten nicht schnüffeln. Dein Medaillon hat genau in dem Augenblick pulsiert, als die Rune im Torbogen Risse bekam …“',

  e1_13: 'KRACH! Als die Morgenglocke schlägt, zerspringt die riesige Schutz-Sanduhr über unseren Köpfen von oben bis unten! Schüler kreischen auf – bis Schulleiter Albuz sich ruhig vom Lehrertisch erhebt und mit einem Schwung seines Zauberstabs jeden fallenden Splitter in harmlosen silbernen Sternenstaub auflöst.',
  e1_14: '„Kein Grund zur Panik, meine Schüler“, sagt Schulleiter Albuz, wenngleich sein alter, blauer Blick kurz auf dem schwachen Schimmer unter meinem Kragen verweilt. „Ein alter Grenzschutz ist lediglich müde geworden. Begebt euch in Ruhe in eure erste Stunde.“',
  e1_15: 'Neben ihm presst Professor Minerba die Lippen zu einem schmalen, ernsten Strich zusammen und flüstert Albuz zu – gerade laut genug, dass ich es im Vorübergehen an den Türen aufschnappe: „Albuz … das war das erste Eklipsen-Siegel. Es hat nicht von selbst versagt.“',
  e1_16: 'Ein Eklipsen-Siegel …? Draußen im kühlen, gepflasterten Innenhof auf dem Weg zur Kerkertreppe drücke ich eine Hand auf das silberne Medaillon meiner Mutter. Es pulsiert noch immer wie ein winziger zweiter Herzschlag. Was hat meine Mutter unter dieser Schule versiegelt – und warum hat es mir geantwortet?',
  e1_17: '„Hey – Draconia! Warte mal kurz!“ Schnelle Schritte eilen hinter mir über das frostige Kopfsteinpflaster. Ich wirble herum und sehe Harry außer Atem vor mir stehen, etwas Kleines und Glitzerndes in seiner behandschuhten Hand haltend.',
  e1_18: '„Du hast deine silberne Haarspange verloren, als ich vorhin in dich reingerannt bin“, sagt er und reibt sich verlegen den Nacken. „Ich habe den Staub abgewischt. Ich dachte mir, Severo zieht fünfzig Punkte ab, wenn du nicht absolut makellos erscheinst.“',
  e1_19: 'Ich starre auf die winzige Spange aus Smaragd und Silber in seiner Handfläche. Er ist wirklich extra hinaus in die Kälte gerannt, nur um sie mir noch vor dem Unterricht zurückzubringen. „Ich … danke, Harry. Du hättest dir keine Mühe machen müssen.“',
  e1_20: 'Harry begegnet meinem Blick mit einem ruhigen, entwaffnend ehrlichen Lächeln. „Alle tun so, als wärst du aus Marmor gemeißelt, Draconia. Ganz ehrlich? Ich glaube das nicht. Komm – lass uns zu Zaubertränke gehen, bevor Severo uns beide zum Nachsitzen einfriert.“',

  // ==================== EPISODE 2 ====================
  e2_1: 'Unten im kerzenbeleuchteten Zaubertrank-Kerker steigt bitterer Dampf aus zwanzig Bronzekesseln empor. Professor Severo rauscht mit wehendem schwarzem Umhang an den Werkbänken vorbei, sein dunkler Blick heftet sich geradewegs auf uns.',
  e2_2: '„Ruhe. Die heutige praktische Prüfung ist ein Klarheitstrank – ein Gebräu, das Disziplin und null Torheit verlangt. Daher habe ich eure Partner neu eingeteilt. Werkbank Vier: Draconia und Harry.“',
  e2_3: 'Ronn verschluckt sich beinahe an der eigenen Luft, während Hermiona ein wissendes Lächeln hinter ihrem Lehrbuch verbirgt. Harry gleitet mit einem entschuldigenden Grinsen auf den Holzhocker neben mir. „Sieht aus, als müsstest du auf meinen Kessel aufpassen, Draconia.“',
  e2_4: '„Wenn du meine Werkbank in die Luft jagst, Harry, sage ich Minerba, du hättest dich freiwillig gemeldet, jede einzelne Trophäe in der Halle zu polieren“, erwidere ich glatt – doch ich kann nicht verhindern, dass ein winziges Lächeln an meinem Mundwinkel zupft, als ich ihm das silberne Messer reiche.',
  e2_5: 'Zehn überraschend friedliche Minuten lang finden wir in einen mühelosen Rhythmus – ich messe Silbertau-Tropfen ab, während Harry Mondminze schneidet. Als ich mich über seine Schulter beuge, um seinen Schnitt zu prüfen, erstarrt er leicht. „Äh – schneide ich wirklich so furchtbar?“',
  e2_6: '„Eigentlich … ist es erstaunlich ordentlich“, gebe ich leise zu und merke plötzlich, wie nah unsere Schultern einander sind. „Du hältst das Messer nur fest, als wäre es ein Besenstiel im Gewitter.“ Harry lacht leise – ein warmes, echtes Lachen, ganz allein zwischen uns beiden.',
  e2_7: 'Plötzlich fliegt die Eichentür auf. Professor Pamona eilt herein, noch Erde auf ihrer Schürze und ehrliche Bestürzung im Gesicht. „Severo, entschuldige die Störung – ich brauche dich fünf Minuten auf dem Flur! Jemand ist heute Nacht in Gewächshaus Vier eingebrochen!“',
  e2_8: 'Severos Augen verengen sich scharf. „Was wurde gestohlen, Pamona?“ „Drei ganze Kisten Eklipsenwurzel – und über dem Schloss klebt glühende, eingebrannte Silberasche!“ Severos Miene versteinert sich eisig. „Klasse, niemand rührt sich von seinem Kessel, bis ich zurück bin.“',
  e2_9: 'Kaum fällt die schwere Tür ins Schloss, beugt sich Nevile vom Nachbartisch herüber und flüstert besorgt. „Habt ihr sie gehört?! Gestern Abend, als ich noch einmal meine Gartenhandschuhe holen wollte, habe ich einen kleinen Mann im grauen Umhang aus Gewächshaus Vier schleichen sehen!“',
  e2_10: 'Bei Neviles Worten fährt Harry herum – und stößt versehentlich seine ganze Untertasse mit zerstoßenen Sternensamen direkt in unseren Kessel! WUSCH! Dichter violetter Schaum quillt zum Rand empor! „Ah – Draconia! Er wird lila! Lach nicht, hilf mir!“',
  e2_choice1: 'Severo kann jede Sekunde zurückkommen! Violette Funken tanzen zwischen uns, während Harry mich in hinreißender Panik anstarrt. Was tue ich?',
  e2_11a: 'Meine Finger schließen sich um seine warmen Knöchel und führen sein Handgelenk in drei ruhigen silbernen Spiralen. Der wilde Schaum sinkt in sich zusammen und verwandelt sich in schimmerndes flüssiges Sternenlicht! Harry blickt auf unsere vereinten Hände hinab und atmet leise aus. „Wow … du bist unglaublich, Draconia. Und so viel gütiger, als du die Leute jemals sehen lässt.“',
  e2_11b: 'Mit drei wütenden Handgriffen rette ich den Trank in pures Kristallsilber. Hinter uns pfeift Ronn leise durch die Zähne: „Kumpel, du wirkst absurd glücklich dafür, dass Draconia dich herumkommandiert!“ Harry läuft knallrot an und wirft ihm ein Minzblatt entgegen.',
  e2_11c: 'Mein Frostzauber stabilisiert das Gebräu sofort. Harry atmet langsam aus und nickt ernst. „Stimmt – tut mir leid. Du denkst auch an die Silberasche, die Pamona erwähnt hat, oder? Dasselbe silberne Leuchten wie bei deinem Medaillon.“',
  e2_12: 'Genau mit dem Glockenschlag rauscht Severo wieder herein, die Miene finster. Als er unseren kristallklaren Trank begutachtet, heben sich seine dunklen Brauen um eine Winzigkeit. „Beeindruckend. Da ihr beide offenbar so begierig darauf seid, beschäftigt zu bleiben, meldet euch nach dem Abendessen in Gewächshaus Vier und in der Bibliothek, um die verbliebenen Schutzzauber zu erfassen.“',

  e2_13: 'Bei Einbruch der Dämmerung kräuselt sich Nebel um das Glasdach von Gewächshaus Vier. Lune summt leise neben einer Schale glühender Mondfarne, als Harry und ich eintreten. Sie neigt den Kopf und lässt ihre verträumten blauen Augen zwischen uns wandern. „Oh! Eure Herzschläge klingen wie zwei Schneeeulen, die versuchen, dasselbe Nest zu bauen.“',
  e2_14: 'Harry und ich erstarren beide wie Salzsäulen! „L-Lune! Wir schauen uns bloß das aufgebrochene Schloss an!“, stammelt Harry und reibt sich den glühenden Nacken, während ich hektisch einen völlig unschuldigen Topffarn untersuche. Nevile hustet, um ein Lachen zu verbergen.',
  e2_15: 'Dann wird Lunes sanfte Stimme unerwartet ernst, als sie auf das versengte Vorhängeschloss aus Eisen deutet. „Diese Silberasche stammt nicht aus dieser Welt, Draconia. Letzte Nacht nahe dem Waldrand sah ich einen Mann mit Kapuze, der in einen Spiegel sprach, welcher in violettem Feuer brannte.“',
  e2_16: 'Nevile reicht mir ein kleines Glasfläschchen mit der Silberasche. „Professor Pamona bat darum, dass Hermiona sie mit den alten Schutzregistern in der Bibliothek abgleicht. Sie wartet oben schon auf euch – wir schließen das Gewächshaus für euch ab.“',

  e2_17: 'Oben in der hochgewölbten Bibliothek werfen goldene Laternen warmes Licht zwischen turmhohe Mahagoniregale. Hermiona hat einen Stapel ledergebundener Schutzchroniken auf dem hinteren Tisch hinterlassen, samt einer Notiz, dass sie noch eine weitere Karte bei Minerba holt.',
  e2_18: 'Ein einziges Mal gibt es keine Menschenmenge, keine tuschelnden Schüler, keine rivalisierenden Tische, die jedes Wort belauschen. Nur den Regen, der sanft gegen die hohen Buntglasfenster klopft – und Harry, der mir gegenübersitzt und staubige Pergamentseiten umblättert.',
  e2_19: 'Nach einer stillen Minute blickt Harry über das Laternenlicht hinweg auf. „Darf ich dich etwas Ehrliches fragen, Draconia? Ohne dass du mich verhext?“ Ich blinzle. „Kommt darauf an, wie dreist es ist.“ Er lächelt sanft. „Warum tust du immer so, als müsstest du die ganze Welt allein schultern?“',
  e2_20: 'Meine Finger spannen sich leicht am Rand der Chronik an. Niemand hat mir diese Frage je gestellt, ohne als Antwort ein eisiges Schnauben zu erwarten. „Weil Vater nach dem Tod meiner Mutter niemanden mehr seinen Schmerz sehen ließ, Harry … Er hat mir beigebracht, dass unser Familienname eine Rüstung ist.“',
  e2_21: '„Die Leute halten Lord Lucio für grausam oder glauben, ich sähe auf alle herab. Das stimmt nicht. Er hat einfach furchtbare Angst, noch jemanden zu verlieren – und ich habe so lange versucht, die perfekte Smaragd-Erbin zu sein, dass ich verlernt habe, einfach … mit Menschen zu reden, die mir etwas bedeuten.“',
  e2_22: 'Warme Stille legt sich zwischen uns. Langsam streckt Harry die Hand über das kerzenbeschienene Holz aus und legt sie behutsam neben meine – so nah, dass unsere Fingerspitzen sich streifen. „Bei mir brauchst du keine Rüstung, Draconia. Ich mag nämlich das Mädchen darunter.“',
  e2_choice2: 'Mein Herz hämmert gegen meine Rippen. Seine grünen Augen ruhen vollkommen ruhig auf mir und warten.',
  e2_23a: 'Harrys Atem stockt – dann erhellt ein langsames, strahlendes Lächeln sein ganzes Gesicht, während sein Daumen sanft über meine Knöchel streicht. „Gut … denn ich erfinde schon das ganze Semester lang Ausreden, um in dich hineinzulaufen, Draconia.“',
  e2_23b: 'Harry lacht leise und reibt sich mit einem offenen Grinsen die Stirn. „Abgemacht. Unter einer Bedingung – du hältst mir auf dem Winterball einen Tanz frei, damit ich beweisen kann, dass mein Festumhang deine Inspektion überlebt hat.“',
  e2_23c: 'Harry beugt sich sofort vor, seine Augen weiten sich beim Anblick des mit Tinte gezeichneten Wappens, das schwach im Laternenlicht schimmert. „Warte mal kurz … das ist genau dasselbe Muster wie auf deinem silbernen Medaillon!“',

  e2_24: 'Hermiona eilt zwischen den Regalen zurück und faltet einen uralten Bauplan der Schlossfundamente auseinander. „Draconia! Harry! Ich habe es gefunden – hört gut zu! Vor fünfzehn Jahren versuchte ein dunkler Magier namens Lord Thom, eine zerstörte Parallelzeitlinie mithilfe der Spiegelkammer unter der Akademie mit unserer zu verschmelzen!“',
  e2_25: '„Drei Siegelhüter verschlossen die Kammer mit Drei Eklipsen-Siegeln – eines in der Sanduhr der Großen Halle, eines im Verzauberten Wald und eines auf der Steinbrücke! Und Draconia … deine Mutter war die Hüterin, die das Silberne Medaillon als Hauptschloss geschmiedet hat!“',
  e2_26: 'KRACH! Über uns auf der Galerie stürzt ein Bücherstapel zu Boden! Eine gebeugte Gestalt im grauen Umhang – Piter! – zischt panisch auf, während violetter Nebel um seine Fersen wirbelt. „Sie wissen schon vom Medaillon! Lord Thom muss gewarnt werden!“',
  e2_27: 'Noch ehe wir die Treppe erreichen, verschwindet Piter durch einen flimmernden violetten Spalt in der Steinwand! Harry tritt augenblicklich mit gezogenem Zauberstab neben mich. „Jetzt ergibt alles einen Sinn: Siegel I zerbrach heute Morgen, und die Eklipse erreicht beim Winterball in zwei Nächten ihren Höhepunkt!“',
  e2_28: 'Professor Minerba eilt herein, während die Glocken der Sperrstunde über die Türme hallen. „Schüler, sofort zurück in eure Schlafsäle – wir ziehen die Nachtschutzzauber hoch. Und Draconia … dein Vater, Lord Lucio, ist soeben am Haupttor eingetroffen und wünscht dich morgen früh als Erstes zu sprechen.“',

  // ==================== EPISODE 3 ====================
  e3_1: 'Am nächsten Morgen rieselt der Schnee lautlos an den hohen gotischen Fenstern des Smaragd-Salons vorbei. Lord Lucio steht kerzengerade am Kamin, seinen silberbekrönten Gehstock ordentlich in den behandschuhten Händen haltend.',
  e3_2: '„Du siehst wohlauf aus, Draconia“, sagt Vater, und seine grauen Augen werden um eine Winzigkeit weicher, ehe sie ernst werden. „Albuz hat mich im Morgengrauen unterrichtet. Siegel I ist gefallen, und Thoms Fanatiker jagen das Medaillon deiner Mutter vor der morgigen Winterball-Eklipse.“',
  e3_3: '„Vater … warum hast du mir nie erzählt, dass Mutter eine der Siegelhüter war, die die Spiegelkammer verschlossen haben?“, frage ich leise, meine Finger an der silbernen Kette.',
  e3_4: 'Zum ersten Mal seit Jahren wirkt Lord Lucio müde. „Weil sie ihre Magie geopfert hat, damit du in einer friedlichen Welt aufwachsen kannst, Draconia. Ich schwor, dass kein dunkler Magier dich jemals in jene Kammer ziehen würde. Was mich zu einer weiteren Angelegenheit bringt …“',
  e3_5: 'Vaters durchdringender Blick heftet sich auf mich. „Die halbe Lehrerschaft erwähnte, man habe dich allein in der Bibliothek lernen – und im Innenhof lachen – sehen, zusammen mit Harry. Sag es mir offen, Draconia: Achtet dieser Junge, wer du bist, oder reißt er dich bloß in leichtsinnige Gefahr?“',
  e3_choice1: 'Mein Herz hämmert. Zum allerersten Mal biete ich meinem Vater die Stirn für jemanden, der mir am Herzen liegt.',
  e3_6a: 'Ein langes Schweigen vergeht. Dann – kaum zu glauben – zuckt der Mundwinkel von Lord Lucio leicht nach oben. „Du hast den Starrsinn deiner Mutter, Draconia. Nun gut. Sehen wir, ob der junge Harry sich dieses Vertrauens als würdig erweist, bevor diese Eklipse vorüber ist.“',
  e3_6b: 'Lord Lucio zieht eine tadellose silberne Augenbraue angesichts meiner knallroten Ohren hoch. „Rivalen. Faszinierend. Ich erinnere mich nicht, dass Rivalen ganz so lebhaft erröten – dennoch, halte heute deinen Zauberstab griffbereit, Tochter.“',
  e3_6c: 'Lord Lucio nickt feierlich und legt eine feste Hand auf meine Schulter. „Disziplin ist unser Schild, Draconia. Und dennoch … vergiss nicht, dass Stolz dein Herz schützen soll, nicht es zu Eis erstarren lassen.“',

  e3_7: 'Als ich nach dem Mittagessen in den Innenhof hinaustrete, schweben sanfte Schneeflocken über steinerne Laternen, die für den morgigen Winterball mit smaragdgrünen und goldenen Bändern geschmückt sind. Am Brunnen schwitzt Ronn Blut und Wasser, während Hermiona ein kleines silbernes Anstecksträußchen hält.',
  e3_8: '„Ja, Ronn, ich gehe mit dir zum Ball – ganz ehrlich, du hast drei Wochen gebraucht, um zu fragen!“, lacht Hermiona fröhlich, bevor sie mich entdeckt. „Oh! Draconia! Harry tigert seit zwanzig Minuten hinter jenem Torbogen auf und ab und probt irgendetwas!“',
  e3_9: 'Hermiona und Ronn sprinten kichernd regelrecht davon und lassen Harry im fallenden Schnee völlig ertappt zurück! Schneeflocken verfangen sich in seinem zerzausten dunklen Haar, als er langsam auf mich zukommt und eine winzige verzauberte Schneeflocken-Brosche aus Silber und Smaragd aus seiner Manteltasche zieht.',
  e3_10: '„Okay, ich hatte eine total elegante Rede vorbereitet, und Hermiona hat meine Tarnung komplett ruiniert“, gesteht Harry mit einem verlegenen Grinsen, das mein Herz aussetzen lässt. „Also sage ich es einfach direkt. Draconia … wenn wir Thom aufgehalten haben und der morgige Abend kommt – gehst du mit mir zum Winterball?“',
  e3_choice2: 'Schneeflocken schmelzen auf meinen Wangen. Jede adelige Regel in meinem Kopf wird selig still, während ich den Jungen vor mir ansehe.',
  e3_11a: 'Harry strahlt, als hätte er gerade zehnmal hintereinander den Akademie-Pokal gewonnen! Behutsam steckt er die verzauberte Schneeflocke an meinen smaragdgrünen Schal, seine Finger streifen leicht meine Wange. „Die schönste Antwort, von der ich hätte träumen können, Draconia.“',
  e3_11b: 'Harry lacht leise und warm, während er mir die Schneeflocken-Brosche in die Handfläche legt. „Ich werde die ganze Nacht meine Tanzschritte üben, nur für Euch, Eure Hoheit.“ Mein Herz macht einen lächerlichen Luftsprung!',
  e3_11c: 'Harry schließt seine Finger um die Brosche und nickt mit stiller Entschlossenheit. „Dann verspreche ich dir, dass wir es morgen Abend beide auf diese Tanzfläche schaffen, Draconia.“',

  e3_12: 'BUMM! Am Abendhimmel schießt eine Säule aus violetten Blitzen aus dem Verzauberten Wald empor! Professor Remuz stürmt mit flammendem Zauberstab durch das Hoftor. „Siegel II an den Wald-Monolithen wird angegriffen! Schüler, bleibt zurück –!“',
  e3_13: 'Das Medaillon meiner Mutter brennt heiß auf meiner Brust! Harry und ich müssen kein Wort wechseln – wir rennen Remuz hinterher in den eisigen Nebel des Verzauberten Waldes, wo uralte Runensteine zerrissen glühen und violetten Rauch bluten.',
  e3_14: 'Wahnsinniges Gelächter hallt aus den frostbedeckten Ästen! Belatrix springt auf den zerborstenen Monolithen und wirbelt einen gezackten Zauberstab herum, während Barti und Piter den Steinkreis umstellen. „Na sieh mal an! Wer ist denn da geradewegs in unsere Falle getappt – die kleine Draconia spielt Heldin mit Harry!“',
  e3_15: '„Weißt du überhaupt, wie erbärmlich du gerade aussiehst?!“, kreischt Belatrix vergnügt. „In unserer Zeitlinie zerbrach das Siegel deiner Mutter, Harry fiel vor seinem siebzehnten Winter, und du knietest stumm zu Lord Thoms Füßen! Gib uns dieses Medaillon!“',
  e3_16: 'Eisige Wut strömt durch meine Adern und ertränkt jeden letzten Rest von Angst. Ich trete direkt vor Harry und hebe meinen Zauberstab, während smaragdgrüne Funken an meinem Ärmel aufflammen. „Diese Zeitlinie wird NIEMALS existieren! Und du rührst weder Harry an – noch das Vermächtnis meiner Mutter!“',
  e3_17: 'Belatrix fletscht die Zähne, violette Blitze winden sich um ihren Zauberstab, als sie vorschnellt: „Dann wollen wir doch sehen, ob dein edles kleines Schildchen echtem Chaos standhält, Draconia!“',

  e3_18: 'Als Belatrix von meinem letzten smaragdgrünen Blitz zurücktaumelt, schlägt ein rasiermesserscharfer Strahl silbernen Lichts zwischen uns ein! Lord Lucio tritt neben Professor Remuz aus dem Nebel, den Gehstock erhoben wie das Florett eines Duellanten. „Genug, Belatrix! Nimm dein Gesindel und flieh, ehe ich das gesamte Kollegium rufe!“',
  e3_19: 'Flüche spuckend greift Belatrix nach Bartis Umhang, während hinter ihnen ein violettes Portal aufreißt. „Lach, solange du kannst, Lucio! Siegel II hat bereits Risse – morgen Nacht zur Eklipse schreitet Lord Thom durch den Spiegel!“ Mit einem Knall verschwinden sie im Schnee.',
  e3_20: 'Zurück im warmen, stillen Krankenflügel fällt Mondlicht über die weißen Laken. Harry sitzt auf der Bettkante, während ich behutsam einen frischen Leinenverband um die versengte Schramme an seinem Unterarm wickle – jenen Fluch, in den er gesprungen ist, um meine linke Flanke zu decken.',
  e3_21: 'Meine Hände zittern leicht, als ich den Knoten binde. „Ganz ehrlich, Harry … was hast du dir dabei gedacht, dich in Bartis Flankenfluch zu werfen?! Was, wenn es schlimmer gewesen wäre?!“',
  e3_22: 'Harry fängt mein zitterndes Handgelenk sanft mit seiner unverletzten Hand auf und lächelt leise zu mir hoch. „Ich höre genau an dem Tag auf, mich für dich in Flüche zu werfen, an dem du aufhörst, es für mich zu tun, Draconia. Abgemacht?“',
  e3_23: 'An der Tür durchbricht Professor Severos Stimme die Stille. „Siegel II ist angebrochen. Nur noch Siegel III auf der Steinbrücke hält die Spiegelkammer jetzt zurück – und morgen Nacht ist die Winterball-Eklipse. Schulleiter Albuz erwartet, dass im Morgengrauen alle bereit sind.“',
  ep3_crossroads: 'Nur eine einzige Nacht bleibt, bevor Lord Thom unter dem Winterball zuschlägt. Mein Herz, meine Freunde, die Ehre meines Vaters und Severos Geheimnisse ziehen alle an mir. Wie werde ich den Vorabend der Eklipse verbringen?',

  // ==================== EPISODE 4A (ROMANTIK / TSUNDERE) ====================
  e4a_1: 'Hoch oben auf dem Astronomieturm glitzert Frost auf den Messingteleskopen, und der Winterhimmel öffnet sich wie schwarzer Samt, bestäubt mit Diamanten. Ich ziehe meinen Umhang enger und atme langsam in der klaren Luft – bis vertraute, eilige Schritte die Wendeltreppe heraufhallen.',
  e4a_2: 'Harry tritt auf den Balkon und balanciert zwei dampfende Becher heißen, gewürzten Apfelweins. „Ich dachte mir, ich finde dich hier oben“, sagt er leise und reicht mir einen Becher. „Ein Blick auf die Decke des Krankenflügels und ich wusste, dass du frische Luft brauchst.“',
  e4a_3: 'Die warme Keramik taut meine eisigen Finger sofort auf. „Gewürzter Apfelwein mit Zimt – woher um alles in der Welt wusstest du, dass das mein Lieblingsgetränk ist?“ Harry grinst verlegen. „Ronn meint, ich passe viel zu gut auf, sobald du in der Großen Halle bist.“',
  e4a_4: 'Schulter an Schulter lehnen wir uns an die Steinbrüstung und blicken über die verschneiten Ländereien. Nach einem Moment senkt Harry sanft die Stimme. „Draußen im Wald … was Belatrix über eine andere Zeitlinie sagte, in der wir verloren haben. Das hat dich getroffen, oder?“',
  e4a_5: 'Ich starre auf den wirbelnden Zimt in meinem Becher. „Ja. Nicht weil ich Angst vor Lord Thom hätte … Ich habe entsetzliche Angst vor einer Welt, in der ich für immer hinter meiner kalten Maske bleibe – und du nicht darin bist, Harry.“',
  e4a_6: 'Harry stellt seinen Becher ab und dreht sich vollständig zu mir um. Aus seinem Mantel zieht er eine zarte neue Haarnadel aus Silber und Smaragd, geformt wie zwei ineinander verschlungene Lorbeerblätter. „Deine alte Spange ist zerbrochen, als du Belatrix’ Fluch abgewehrt hast. Ich habe Professor Pamona und Lune gebeten, mir zu helfen, eine neue für dich zu verzaubern.“',
  e4a_7: 'Langsam hebt er die Hand, streicht mir eine lose Strähne meines platinblonden Haares hinter das Ohr und schiebt die Smaragdnadel sanft an ihren Platz. Einen atemlosen Augenblick lang verweilt seine Handfläche an meiner Wange. „Ich gehe nirgendwohin, Draconia. Vergiss Hausrivalitäten, vergiss Gerüchte – ich habe mich vollkommen in dich verliebt.“',
  e4a_choice: 'Meine ganze Brust fühlt sich an, als leuchte sie heller als das Medaillon meiner Mutter. Unter den Wintersternen wartet der Junge, den ich das ganze Jahr über heimlich geliebt habe, auf meine Antwort.',
  e4a_8a: 'Harrys Augen leuchten vor reiner, überwältigender Freude. Er zieht mich sanft an seine Brust, sein Kinn ruht weich auf meinem silbernen Haar, während die warmen Wintersterne stumm über uns ziehen. Zum ersten Mal in meinem Leben friere ich überhaupt nicht mehr.',
  e4a_8b: 'Harry bricht in Lachen aus – ein atemloses, rettungslos zärtliches Lachen – und zieht mich an sich, bevor ich mein glühendes Gesicht verbergen kann. „Ändere dich niemals, Draconia. Ganz ehrlich, dieses feurige Erröten würde ich gegen nichts auf der Welt eintauschen.“',
  e4a_9: 'GONG! GONG! GONG! Die Mitternachts-Alarmglocke zerreißt die stille Nacht! Tief unten über der verschneiten Schlucht schießen violette Flammen an den alten Bögen der Steinbrücke empor – Siegel III!',
  e4a_10: 'Harry und ich sprinten auf die windgepeitschte Steinbrücke, unsere Zauberstäbe glühen bereits! Durch den peitschenden Schneeregen steht Barti oben auf dem zentralen Schlussstein und ritzt violette Runen in den Fels, während Piter hinter einer Barriere kauert.',
  e4a_11: 'Barti wirbelt mit einem tödlichen Grinsen zu uns herum: „Wie romantisch! Die stolze Erbin und ihr kleiner Held kommen gerade rechtzeitig, um Siegel III fallen zu sehen! Mal schauen, wie euer kostbares Band gegen meine Riss-Speere besteht!“',
  e4a_12: 'Als Barti zurücktaumelt und in einer Wolke schwarzen Rauchs verschwindet, knirschen schwere Stiefel hinter uns im Schnee. Lord Lucio tritt neben Professor Minerba vor – nachdem er gesehen hat, wie Harry und ich Rücken an Rücken in nahtlosem Einklang gekämpft haben.',
  e4a_13: 'Lord Lucio mustert die versengte Brücke und lässt seinen Blick dann ruhig von meiner neuen Smaragd-Haarnadel zu Harrys beschützender Haltung an meiner Seite gleiten. „Deine Beinarbeit war makellos, Draconia. Und Harry … obwohl deine Haare ein Verbrechen gegen die Etikette bleiben, besitzt du einen Mut, der würdig ist, an der Seite meiner Tochter zu stehen.“',
  e4a_14: 'Wir haben die Brücke gehalten – doch Bartis Runen haben den Schlussstein bereits gezeichnet. Morgen Nacht, wenn die Winterball-Eklipse ihren Höhepunkt erreicht, wird Lord Thom die Spiegelkammer selbst aufbrechen. Harry drückt fest meine Hand: „Morgen Nacht bringen wir das gemeinsam zu Ende – und dann holen wir uns unseren Walzer.“',

  // ==================== EPISODE 4B (SECHS-STERNE-KREIS) ====================
  e4b_1: 'Da ich mich weigere, der morgigen Eklipse durch alte Hausrivalitäten gespalten entgegenzutreten, schicke ich Botschaften durch das Schloss – und zwanzig Minuten später leuchtet Gewächshaus Vier wie eine warme Laterne im Schnee. Professor Pamona strahlt, als wir uns um die Arbeitstische versammeln.',
  e4b_2: 'Nevile erntet sorgfältig sechs silbergeäderte Mondfarn-Blätter und reicht das hellste direkt mir. „Ich hätte mir nie träumen lassen, an Draconias Seite Kampfschilde vorzubereiten … ehrlich, danke, dass du uns vertraust. Meine Hände zittern nicht einmal mehr!“',
  e4b_3: 'Ronn lehnt an einem Pflanztisch und kaut auf einer Pfefferminzkröte. „Moment mal kurz – Draconia hat sich gerade bei Nevile bedankt, ohne eine einzige sarkastische Fußnote hinzuzufügen! Hermiona, schau zum Himmel, ich glaube, der Mond ist gerade grün geworden!“',
  e4b_4: 'Ehe ich mich zurückhalten kann, entschlüpft mir ein echtes, helles Lachen – kein einstudiertes aristokratisches Lächeln, sondern ein wirkliches Lachen! Selbst Ronn blinzelt verdutzt, und Hermiona lächelt warm. „Ganz ehrlich, Draconia, dieses Lächeln steht dir zehnmal besser als dein Flur-Blick.“',
  e4b_5: 'Neben der Glastür beobachtet mich Harry mit so sanfter, ungeschützter Wärme, dass meine Wangen sofort heiß werden. „Hab ich doch gesagt, sie ist nicht aus Marmor gemeißelt“, murmelt er leise, stößt mich sacht am Ellbogen an und reicht mir eine Tasse heißen Tee.',
  e4b_6: 'Oben in der Bibliothek breiten wir Hermionas Schlossplan auf dem Boden aus. Lune zieht sechs leuchtende Sternpunkte rund um die Spiegelkammer nach. „Das Medaillon deiner Mutter war nie dazu gedacht, die Last allein zu tragen, Draconia. Wenn sechs verschiedene Herzen ihre Kraft durch einen Kreis lenken, kann selbst ein angebrochenes Eklipsen-Siegel nicht brechen.“',
  e4b_7: 'Während ich in dem kerzenbeschienenen Kreis umherblicke – Harry, Hermiona, Ronn, Lune und Nevile –, erkenne ich etwas, das Vaters Etikette-Stunden mir nie gelehrt haben. Zum ersten Mal seit meiner Ankunft an dieser Akademie habe ich echte Freunde.',
  e4b_choice: 'Alle schauen mich an, damit ich unseren Pakt vor Beginn der Patrouille besiegle. Was sage ich ihnen?',
  e4b_8a: 'Sechs Zauberstäbe tippen in einem Feuerwerk aus smaragdgrünen, scharlachroten, blauen und goldenen Funken aneinander! Harry grinst über den Kreis hinweg: „Auf den Sechs-Sterne-Pakt!“',
  e4b_8b: 'Ronn stöhnt theatralisch, hebt seinen Zauberstab aber trotzdem: „Zu Befehl, Kapitän Draconia! Brumm uns hinterher bloß keine Extra-Aufsätze auf!“ Alle lachen, als der Kreis hell aufglüht.',
  e4b_9: 'Die Mitternachtsglocken schlagen! Als wir auf die verschneite Steinbrücke eilen, sehen wir Schulleiter Albuz und Professor Remuz Wellen aus Schattennebel zurückdrängen – während Barti genau auf den Mittelbogen hinabspringt, um Siegel III zu zerschmettern!',
  e4b_10: 'Barti spottet über unseren Ring aus leuchtenden Mondfarn-Schilden: „Ein Haufen Schulkinder, die Soldat spielen?! Sehen wir mal, wie lange eure niedliche Freundschaft gegen echte dunkle Magie hält!“',
  e4b_11: 'Unser Sechs-Sterne-Schild hält ungebrochen stand und schleudert Barti zurück in seinen fliehenden Schattennebel! Schulleiter Albuz senkt seinen Zauberstab, seine Augen funkeln vor tiefem Stolz. „Bemerkenswert. Sechs Herzen aus rivalisierenden Häusern schlagen im Einklang – Draconia, deine Mutter würde heute Nacht vor Freude weinen.“',
  e4b_12: 'Noch nach Luft schnappend im fallenden Schnee stößt Harry sanft seine Schulter an meine. „Auch wenn der Schlussstein einen kleinen Riss bekommen hat – Thom hat keine Ahnung, was ihn morgen Nacht erwartet. Ruh dich für den Winterball aus, Kapitän.“',

  // ==================== EPISODE 4C (SCHATTEN / SEVERO) ====================
  e4c_1: 'Nach der Sperrstunde liegt der Zaubertrank-Kerker still da, abgesehen vom Zischen grüner Glut. Professor Severo verriegelt die Eichentür mit einem Schwung seines Zauberstabs und entrollt ein mit Silbertinte beschriebenes Pergament auf dem Steinpult.',
  e4c_2: '„Bist du sicher, dass du diesen Pfad beschreiten willst, Draconia?“ Severos dunkle Stimme ist ungewöhnlich leise. „Deine Mutter und ich haben diese Gegenrunen vor fünfzehn Jahren gemeinsam studiert. Sie können Lord Thoms Dimensionsspiegel nach innen kehren – und ihn auf ewig einsperren.“',
  e4c_3: '„Doch Schatten-Schutzzauber verlangen absolute Einsamkeit und Kontrolle“, warnt Severo ernst. „Wenn du die Chiffre allein umkehrst, riskierst du, den Rückstoß des Spiegels selbst zu tragen – und hältst Harry und die anderen Schüler völlig aus der Schusslinie, selbst wenn sie nie erfahren, was du geopfert hast.“',
  e4c_4: 'Mit der Spitze meines Zauberstabs fahre ich die schimmernden Silberrunen nach und spüre, wie das Medaillon meiner Mutter mit einem tiefen, ruhigen Summen antwortet. „Wenn der Weg durch die Schatten bedeutet, dass Harry, mein Vater und diese ganze Schule morgen Nacht sicher tanzen können … dann bringen Sie mir alles bei, Professor.“',
  e4c_5: 'Zwei erschöpfende Stunden lang drillt Severo mich gnadenlos in Gegen-Chiffren, stabloser Schutzumkehr und Geistesschilden – bis silbernes Feuer mühelos von meinen Fingerspitzen wirbelt. Für einen flüchtigen Augenblick huscht ein Schatten echten Stolzes über sein strenges Gesicht.',
  e4c_6: 'Als ich um Mitternacht in den Innenhof hinausschlüpfe, um der Silberasche-Spur zu folgen, bevor Thoms Schergen Siegel III angreifen, erstarre ich beinahe, als eine vertraute Stimme leise aus dem Schatten des Torbogens ruft. „Draconia? Wohin gehst du so spät – ganz allein?“',
  e4c_7: 'Harry tritt ins Schneelicht, seine Augen suchen mein Gesicht voller stiller Sorge. „Du hast schon wieder diesen Blick – den, bei dem du glaubst, den ganzen Himmel allein tragen zu müssen. Was auch immer Severo dir da unten beigebracht hat, sperr mich nicht aus. Lass mich mitkommen.“',
  e4c_choice: 'Mein Herz schmerzt so sehr, dass mir das Atmen schwerfällt. Ihn zu schützen bedeutet, ihn von der Schatten-Chiffre fernzuhalten – doch in seine Augen zu blicken macht das Lügen fast unmöglich.',
  e4c_8a: 'Harrys Finger schließen sich fest um mein warmes smaragdgrünes Band. „Du hältst dieses Versprechen besser, Draconia“, flüstert er eindringlich. „Denn wenn du vor dem Höhepunkt der Eklipse nicht zurück bist, reiße ich diese Kammertür eigenhändig ein.“',
  e4c_8b: 'Schmerz flackert über Harrys Gesicht, dennoch weicht er erst zurück, als ich an ihm vorbei in den Nebel gleite. „Du bist eine furchtbare Lügnerin, Draconia“, ruft er mir leise in den Schnee hinterher. „Ich weiß, dass du das nur tust, um uns zu beschützen.“',
  e4c_9: 'Indem ich der Silberasche tief in den mitternächtlichen Wald folge, laufe ich geradewegs in Belatrix’ Falle – genau wie Severo es vorhergesagt hat! Mit einem entzückten Kichern tritt sie aus dem Schatten. „Ganz allein, ohne deinen Liebsten und ohne Papi?! Oh, Lord Thom wird mich reich belohnen!“',
  e4c_10: 'Silberne Runen entflammen wie kaltes Feuer entlang meines Ärmels! Belatrix kreischt plötzlich entsetzt auf: „Gegen-Chiffren?! Wer hat einem Kind verbotene Kammermagie beigebracht?!“',
  e4c_11: 'Schattenfunken verlierend flieht Belatrix in die Nacht, als Severo lautlos aus der Baumlinie hervortritt. „Makellose Kontrolle, Draconia“, sagt er leise. „Morgen Nacht, wenn der Winterball das Schloss ablenkt, steigen wir in die Spiegelkammer hinab und bereiten Lord Thom aus dem Dunkel ein Ende.“',

  // ==================== EPISODE 4D (LORD LUCIO & EHRE) ====================
  e4d_1: 'Bis spät in den Abend glüht der Smaragd-Salon im Kaminfeuer, während Lord Lucio und ich uralte Familienschriftrollen voller Schutzzauber auf dem dunklen Mahagonitisch ausbreiten – genau jene Rollen, die einst meine Mutter studiert hat.',
  e4d_2: 'Lange Zeit spricht keiner von uns. Dann legt Vater seine Feder beiseite und blickt still auf das silberne Medaillon meiner Mutter über meinem Herzen. „Ich war in den letzten Jahren zu streng mit dir, Draconia.“',
  e4d_3: 'Ich blinzle in echtem Unglauben – noch kein einziges Mal habe ich Lord Lucio eine Schwäche eingestehen hören. „Vater …?“',
  e4d_4: '„Als deine Mutter ihre Kraft hingab, um jenen Spiegel zu versiegeln, glaubte ich, wenn ich dich zu undurchdringlichem Stahl schmiede, könnte dich nichts auf dieser Welt je verletzen“, sagt Vater leise. „Ich wollte nie, dass du einsam bist, Draconia. Wahrer Adel ist keine Kälte – er bedeutet, aufrecht zu stehen, damit andere sicher sind.“',
  e4d_5: 'Wärme steigt mir in die Augen – zum ersten Mal seit Jahren löst sich die schwere Last zwischen uns einfach auf. „Ich bin stolz darauf, deine Tochter zu sein, Vater. Morgen Nacht zeigen wir Lord Thom, wie wahre Ehre aussieht.“',
  e4d_6: 'Als wir vor Mitternacht über die verschneite Steinbrücke patrouillieren, treffen wir auf Harry und Hermiona, die die äußeren Laternen verstärken. Harry tritt durch den wirbelnden Schnee vor, seine grünen Augen fest und ruhig. „Lord Lucio. Draconia. Was auch immer in der Vergangenheit zwischen unseren Häusern lag … morgen Nacht braucht es uns alle.“',
  e4d_7: 'Lord Lucio betrachtet Harry gelassen und wendet seinen Blick dann mir zu. „Die Wahl liegt bei dir, Draconia. Heißen wir Harry als gleichberechtigten Verbündeten an der Seite unseres Hauses willkommen – oder stehen wir ganz allein für uns?“',
  e4d_choice: 'Schneeflocken wirbeln zwischen meinem Vater und Harry. Was für eine adelige Erbin will ich sein?',
  e4d_8a: 'Harry ergreift meine Hand fest mit einem warmen, erleichterten Lächeln. „Mir ist es eine Ehre, an deiner Flanke zu kämpfen, Draconia.“ Neben mir neigt Lord Lucio in stiller Zustimmung das Haupt.',
  e4d_8b: 'Harrys Miene trübt sich vor stillem Bedauern, dennoch nickt er respektvoll. „Ich lasse dich morgen nicht allein gegen Thom antreten, Draconia – ob es deinem Stolz gefällt oder nicht.“',
  e4d_9: 'Ein gellender Schrei zerreißt den Schneesturm! Belatrix stürzt auf den Bogen der Steinbrücke hinab, wütende Funken sprühen aus ihrem Zauberstab! „Verräterischer Lucio! Du erhebst dein adeliges Wappen gegen Lord Thoms neues Zeitalter?!“',
  e4d_10: 'Lord Lucio stößt seinen silbernen Gehstock neben mir auf den Stein: „Zeig ihr die wahre Disziplin unserer Familie, Draconia!“ Belatrix stürzt sich in einem Sturm violetten Feuers auf uns!',
  e4d_11: 'Unsere doppelten smaragdgrünen Schilde zerschmettern Belatrix’ Angriff und schleudern sie heulend zurück in den Schneesturm! Lord Lucio streicht mit unverkennbarem Stolz seinen silbernen Umhang glatt. „Gut gekämpft, Draconia. Morgen Nacht setzen wir Lord Thom ein für alle Mal ein Ende.“',

  // ==================== EPISODE 5A (ROMANTIK-FINALE -> ENDEN 1 & 2) ====================
  e5_rom_1: 'Die Nacht des Winterballs bricht an. Verzauberter Schnee schwebt träge unter tausend schwebenden goldenen Kerzen in der Großen Halle. Als ich in meinem maßgeschneiderten Ballkleid aus Smaragd und Silber die große Marmortreppe hinabschreite, erstarrt Harry mitten im Schritt am Torbogen – vollkommen sprachlos.',
  e5_rom_2: 'Sogar sein zerzaustes Haar wirkt heute Abend verdächtig gekämmt – und er hat tatsächlich meinen Rat bei seinem taillierten dunklen Mantel befolgt! Harry atmet leise aus und nimmt meine behandschuhte Hand. „Draconia … du bist atemberaubend. Im Ernst, ich habe jedes einzelne Wort vergessen, das ich geübt habe.“',
  e5_rom_3: 'Gerade als das Orchester die Bögen für den Eröffnungswalzer hebt – KRACH! Jeder hohe Spiegel entlang der Großen Halle zersplittert in wirbelndes violettes Licht! Draußen vor den Fenstern färbt sich der Wintermond blutviolett: Die Eklipse hat begonnen! Schulleiter Albuz zieht eine goldene Barriere hoch, um die Schüler zu schützen.',
  e5_rom_4: 'Harry und ich rasen direkt unter die Halle hinab in die obsidianschwarze Spiegelkammer, während Albuz, Severo und Lord Lucio oben Belatrix’ Schergen in Schach halten! In der Mitte des glühenden silbernen Glases steht Lord Thom – hochgewachsen, blass und von der eisigen Macht einer Parallelwelt umgeben.',
  e5_rom_5: '„Sieh dich nur an, Draconia“, höhnt Lord Thom und deutet auf den wirbelnden Spiegel, in dem ein kaltes, einsames Spiegelbild von mir in dunklen Roben kniet. „Händchenhaltend mit meinem größten Rivalen! Gib das Medaillon deiner Mutter her und besteige den Thron, für den du geboren wurdest – bevor ich Harry aus beiden Welten tilge!“',
  e5_rom_6: 'Ich trete fest an Harrys Seite, meine Finger umklammern meinen Zauberstab, während das silberne Medaillon meiner Mutter in strahlendem Smaragdfeuer auflodert! „Dieses einsame Gespenst in deinem Spiegel bin nicht ich, Thom – und ich werde es niemals sein! Du rührst Harry nicht an, und du rührst unsere Welt nicht an!“',
  e5_rom_boss: 'Lord Thom hebt mit kalter Wut seinen Obsidian-Zauberstab, während die gesamte Kammer bebt: „Törichtes Mädchen! Dann soll die Eklipse dich und Harry gemeinsam verschlingen!“',
  e5_rom_after: 'Unsere Zauberstäbe vereinen sich! Smaragdgrünes Licht aus dem Medaillon meiner Mutter strömt durch Harrys Zauber, schleudert Lord Thom zurück in den einstürzenden Riss und versiegelt den Obsidianspiegel für immer zu stillem, harmlosem Silberkristall! Harry fängt mich atemlos in seinen Armen auf. „Wir haben es geschafft, Draconia … es ist endlich vorbei!“',
  e5_rom_choice: 'Eine Stunde später erstrahlt die Große Halle prachtvoller denn je – von Schulleiter Albuz wiederhergestellt, während der Winterball zu einer ausgelassenen Siegesfeier erwacht! Das Orchester stimmt einen langsamen goldenen Walzer an, und Harry verbeugt sich mit einem schiefen, strahlenden Grinsen vor mir. Wie beanspruche ich diese Nacht?',

  // --- ENDE 1: HERRSCHERIN DER HERZEN ---
  end_sov_1: 'Drüben am Punschtisch fällt Ronn buchstäblich die Kinnlade herunter, als Harry und ich Hand in Hand in die Mitte des Kristallbodens treten. „Hermiona! Kneif mich – Draconia strahlt wie die Sonne und hält vor der ganzen Schule Harrys Hand!“ Hermiona lacht nur und hält ihm die offene Hand hin: „Das macht fünf Silbermünzen, Ronn.“',
  end_sov_2: 'An den Smaragdsäulen beobachtet Lord Lucio, wie wir über das Parkett gleiten, und hebt leicht einen Kristallkelch in meine Richtung. Als die Musik pausiert, tritt er mit ruhiger aristokratischer Würde heran. „Du hast das Vermächtnis deiner Mutter heute Nacht geehrt, Draconia – und ohne zu zögern an der Seite dessen gestanden, den dein Herz gewählt hat.“',
  end_sov_3: 'Vater wirft einen trockenen Blick auf Harry, dessen Kragen irgendwie schon wieder leicht verrutscht ist. „Pass gut auf sie auf, junger Harry. Und um Himmels willen, lass sie dir vor den Fotografien die Krawatte richten.“ Harry grinst aufrichtig: „Ich verspreche es Ihnen, Lord Lucio – jeden einzelnen Tag.“',
  end_sov_4: 'Später stehlen wir uns aus der jubelnden Menge auf die sternenbeschienene Terrasse über der Halle, wo weicher Schnee im warmen Laternenlicht tanzt. Das silberne Medaillon meiner Mutter ruht kühl und friedlich über meinem Herzen – seine lange Wacht ist endlich vollbracht.',
  end_sov_5: 'Harry streicht behutsam eine schmelzende Schneeflocke von meiner Wange, seine smaragdgrünen Augen voller reiner Zärtlichkeit. „Weißt du, alle haben dich immer die Eiserbin genannt, Draconia … sie hatten ja keine Ahnung, wie warm dein Herz wirklich ist.“',
  end_sov_6: '„Nur weil du stur genug warst zu bleiben, bis ich die Maske abgenommen habe“, flüstere ich mit einem strahlenden Lächeln, als er sich unter den Wintersternen zu mir beugt. Stolz und Smaragd, Herz an Herz – unsere wahre Geschichte beginnt gerade erst.',

  // --- ENDE 2: DORNEN UND ROSEN ---
  end_tho_1: 'Während Harry mich auf die Tanzfläche führt und ich ihm hektisch Anweisungen zu seiner Haltung zuflüstere, fängt Hermiona meinen Blick auf und lächelt wissend. „Beharrst du immer noch darauf, dass ihr beiden streng genommen Rivalen seid, Draconia?“',
  end_tho_2: '„N-Natürlich! Irgendjemand muss schließlich verhindern, dass er vor Schulleiter Albuz über seine eigenen Roben stolpert!“, protestiere ich empört – wenngleich meine Hand sich weigert, Harrys warme Schulter auch nur eine Sekunde lang loszulassen.',
  end_tho_3: 'Harry dreht mich mühelos – erstaunlich anmutig! – und beugt sich dicht an mein glühendes Ohr. „Nur fürs Protokoll: Ich habe gestern zwei Stunden lang mit Ronn Walzer geübt, bloß damit du heute Abend nichts an mir auszusetzen hast.“',
  end_tho_4: 'Als das Lied verklingt, zieht Harry mich sanft hinaus auf den stillen, verschneiten Balkon mit Blick über den See. Noch ehe ich einen weiteren stolzen Vortrag halten kann, hebt er behutsam meine behandschuhte Hand und drückt einen warmen, verweilenden Kuss auf meine Knöchel.',
  end_tho_5: 'Mein gesamtes Gehirn bekommt einen vollständigen Kurzschluss! „H-Harry! Du kannst so etwas nicht einfach ohne Vorwarnung bei einer Dame meines Standes tun!“ Harry lacht leise, mit funkelnden Augen. „Oh? Muss ich morgen früh beim Frühstück auch um Erlaubnis bitten, bevor ich deine Hand nehme?“',
  end_tho_6: 'Da ich mein Lächeln nicht länger zurückhalten kann, entkommt mir ein sanftes Lachen, und ich verschränke meine Finger eigensinnig mit seinen. „Dummkopf … du brauchst keine Erlaubnis mehr.“ Selbst Rosen behalten ein paar Dornen – und Harry würde meine gegen nichts auf der Welt eintauschen.',

  // ==================== EPISODE 5B (SECHS-STERNE-ALLIANZ -> ENDE 3) ====================
  e5_all_1: 'Der Winterball glitzert unter verzaubertem Schneefall! Zum allerersten Mal in der Geschichte der Akademie treffen wir alle sechs – Harry, Hermiona, Ronn, Lune, Nevile und ich – gemeinsam in unseren Festroben ein und machen Witze, als wären wir seit Jahren beste Freunde.',
  e5_all_2: 'Plötzlich springen die hohen Spiegel mit violettem Feuer auf, als die Eklipse den Himmel verdunkelt! Schulleiter Albuz nickt unserem Kreis ernst zu: „Die Professoren halten die Große Halle – Sechs-Sterne-Kreis, steigt hinab in die Spiegelkammer und haltet Lord Thom auf!“',
  e5_all_3: 'Unten in der Obsidiankammer verzieht Lord Thom angewidert das Gesicht, als unsere sechs leuchtenden Mondfarn-Schutzzauber einen flammenden sechszackigen Stern um den Spiegel bilden. „Eine stolze Smaragd-Erbin, Schulter an Schulter mit gewöhnlichen Hausrivalen?! Das edle Blut deiner Mutter ist an dich verschwendet!“',
  e5_all_4: 'Nevile stärkt unseren Schild, Lune liest die Strömungen des Risses, Hermiona spricht den Bannspruch, Ronn deckt die linke Flanke, und Harry begegnet meinem Blick zu meiner Rechten! „Du weißt nichts über den Stolz meiner Mutter, Thom – unsere Stärke ist Einigkeit!“',
  e5_all_boss: 'Lord Thom bricht in dunklen Blitzen aus und versucht, unseren Sechs-Punkte-Kreis zu zerschmettern: „Dann seht zu, wie eure zerbrechliche Allianz zu Asche zerfällt!“',
  end_grd_1: 'Sechs Strahlen aus Magie fließen durch das silberne Medaillon meiner Mutter zu einer blendenden Säule aus Sternenlicht zusammen! Lord Thom wird in den einstürzenden Riss zurückgeschleudert, und der Spiegel schließt sich mit einem kristallklaren Klang!',
  end_grd_2: 'Zurück oben auf dem wiederhergestellten Winterball bricht die gesamte Akademie in ohrenbetäubenden Applaus aus, als wir alle sechs, bestäubt mit silbernem Sternenstaub, wieder hereinkommen! Ronn reißt jubelnd einen Arm in die Luft: „Sechs Zauberstäbe, null dunkle Lords! Bringt uns jemand dreifachen Punsch!“',
  end_grd_3: 'Lune steckt mir mit einem friedlichen Lächeln eine winzige silberne Sternenblüte ans Ohr. „Schau dich in der Halle um, Draconia. Niemand flüstert mehr aus Angst – alle lächeln dich an.“',
  end_grd_4: 'Selbst Lord Lucio tritt an unseren Tisch – und versetzt Hermiona und Nevile in Staunen, indem er ihnen eine aufrichtige, höfliche Verbeugung schenkt. „Rivalisierende Häuser ungebrochen unter der Führung meiner Tochter stehen zu sehen … vielleicht mussten die alten Mauern tatsächlich fallen. Gut geführt, Draconia.“',
  end_grd_5: 'Als das letzte langsame Lied beginnt, tritt Harry mit einem warmen, leicht schüchternen Grinsen neben mich, während Ronn und Hermiona Nevile und Lune auf die Tanzfläche ziehen. „Hey, Kapitän … bevor die Nacht endet, darf ich dich für den letzten Tanz entführen – nur uns beide?“',
  end_grd_6: 'Glücklich lege ich meine Hand in seine, umgeben von echten Freunden und dem Jungen, der mir half, aus meinem Käfig auszubrechen. „Ich dachte schon, du fragst nie, Harry.“ Gemeinsam sind wir die Wächter des Sechs-Sterne-Risses – und der morgige Tag leuchtet heller als je zuvor.',

  // ==================== EPISODE 5C (SCHATTEN-CHIFFRE -> ENDE 4) ====================
  e5_shd_1: 'Über uns weht Geigenmusik vom glitzernden Winterball herüber – Schüler lachen in Sicherheit, ahnungslos, dass der Eklipsenmond aufgeht. In einen dunkelgrünen Umhang gehüllt gleite ich lautlos an Professor Severos Seite durch die Steinbögen hinab zum verborgenen Zugang der Kammer.',
  e5_shd_2: 'In der eisigen, obsidianschwarzen Spiegelkammer kräuselt sich silberner Nebel vom Glas. Severo zieht neben mir seinen Zauberstab, seine Stimme tief und gefasst. „Denk an die Gegen-Chiffre, Draconia. Sobald Lord Thom hindurchtritt, verwandeln wir seine eigene Dimensionsbindung in ein Gefängnis – ehe oben auch nur ein einziger Schüler zu Schaden kommt.“',
  e5_shd_3: 'Violettes Feuer explodiert durch die Kammer! Lord Thom tritt aus dem zersprungenen Glas – und erstarrt in fassungsloser Wut beim Anblick der glühenden Silberrunen, die Severo und ich bereits um seine Füße gewoben haben! „Severo?! Du hast die dunklen Künste verraten, um einer Schülerin die verbotene Gegen-Chiffre beizubringen?!“',
  e5_shd_4: 'Das silberne Medaillon meiner Mutter flammt wie Sternenlicht über meiner Brust auf, während meine Schattenrunen sich um Thoms Zauberstab schließen. „Du wolltest eine Tochter der Dunkelheit, Thom? Dann erlebe, wie Schatten aussieht, wenn er jene beschützt, die ich liebe!“',
  e5_shd_boss: 'Lord Thom brüllt auf, während Obsidiansplitter durch die Höhle toben: „Du wagst es, MICH einzusperren?! Zerbrich vor dem Spiegel!“',
  end_shd_1: 'Mit einer letzten geflüsterten Gegenrune schnappt die Silber-Chiffre zu! Lord Thoms Schrei verstummt, als der Spiegel sauber zu einem lautlosen Obsidiansiegel in sich zusammenfällt – ohne dass oben auf dem Winterball auch nur eine einzige Scheibe zerbricht!',
  end_shd_2: 'Minuten später im stillen Kerkerkorridor reicht Severo mir mein abgekühltes silbernes Medaillon zurück; in seinen strengen Augen liegt seltener, unverkennbarer Respekt. „Außergewöhnliche Disziplin, Draconia. Deine Mutter besaß genau diesen stillen Mut. Die Schule erfährt vielleicht nie, wer sie heute Nacht gerettet hat – doch ich werde es nicht vergessen.“',
  end_shd_3: 'Zu erschöpft, um mich unter die jubelnde Menge unten zu mischen, steige ich hinauf auf den verschneiten Astronomieturm, um Luft zu holen, und lausche den fernen Walzerklängen, die aus der Großen Halle heraufwehen. Sie sind alle in Sicherheit. Harry ist in Sicherheit. Nur das zählt.',
  end_shd_4: 'Die Tür zum Treppenhaus knarrt hinter mir. Ich wirble herum – und sehe Harry außer Atem in seinem Winterball-Mantel vor mir stehen, mein smaragdgrünes Band fest in der Hand! „Hab ich dir nicht gesagt, dass ich dich finde, Draconia? Severo hat durchblicken lassen, wohin du gegangen bist.“',
  end_shd_5: 'Harry tritt im fallenden Schnee neben mich und bindet mein smaragdgrünes Band behutsam wieder um mein Handgelenk. „Du hast jeden Einzelnen da unten gerettet, ohne auch nur ein Wort des Applauses zu verlangen. Du musst nicht länger allein durch die Schatten gehen, Draconia – denn ich bin genau hier.“',
  end_shd_6: 'Tränen der Erleichterung wärmen meine Wangen, als ich meinen Kopf ruhig an seine Schulter lehne, während in der Ferne der Walzer unter den Sternen anschwillt. Die stille Hüterin der Akademie – nicht mehr allein im Dunkeln.',

  // ==================== EPISODE 5D (EDLE EHRE -> ENDE 5) ====================
  e5_hon_1: 'Als der Winterball beginnt, geleitet Lord Lucio mich die große Treppe hinab – smaragdgrüne Seide und Silberfiligran schimmern unter den schwebenden Kerzen. Das Tuscheln verstummt in echter Ehrfurcht, als wir neben Schulleiter Albuz am hohen Tisch unsere Wache beziehen.',
  e5_hon_2: 'Dann schlägt die Eklipse zu! Violette Druckwellen sprengen den Steinboden, und das geheime Siegel unter der Halle reißt auf! Ohne einen Augenblick zu zögern hebt Lord Lucio neben mir seinen silbernen Gehstock: „Mit mir, Draconia! Zeigen wir diesem dunklen Emporkömmling, wie alte Ehre aussieht!“',
  e5_hon_3: 'In der Spiegelkammer blickt Lord Thom voller Gift auf uns herab. „Lord Lucio! In meiner Zeitlinie knieten die adeligen Häuser vor meinem Thron! Warum wirfst du höchste Macht für eine Schule voller Schwächlinge weg?!“',
  e5_hon_4: 'Stolz an der Rechten meines Vaters stehend, während smaragdgrüne Familienschutzrunen über den Boden aufflammen, antworte ich noch vor ihm: „Weil wahrer Adel das Reich beschützt – er kniet niemals vor Tyrannen wie dir, Thom! Und jetzt stell dich dem Haus Smaragd!“',
  e5_hon_boss: 'Lord Thom knurrt und schleudert dunkles Feuer zwischen die Obsidiansäulen: „Dann soll eure kostbare adelige Blutlinie zusammen mit dieser Kammer verbrennen!“',
  end_hon_1: 'Die uralte Barriere meines Vaters und das silberne Medaillon meiner Mutter schwingen in blendender smaragdgrüner Harmonie! Die Welle zerschmettert Thoms Obsidian-Zauberstab und schlägt den Dimensionsspiegel für immer versiegelt zu!',
  end_hon_2: 'Als wir wieder in die wiederhergestellte Große Halle hinaufsteigen, führt Schulleiter Albuz persönlich die gesamte Akademie in stehenden Ovationen an. „Heute Nacht hat das Haus Smaragd bewiesen, dass wahrer Stolz an Mut und Opferbereitschaft gemessen wird. Die Akademie steht tief in deiner Schuld, Draconia!“',
  end_hon_3: 'Lord Lucio legt seine Hand warm auf meine Schulter, seine Augen schimmern vor unausgesprochener Rührung. „Du hast alles übertroffen, was ich je für dich zu träumen wagte, meine Tochter. Deine Mutter lächelt heute Nacht auf uns herab.“',
  end_hon_4: 'Als der Siegeswalzer wieder erklingt, schreitet Harry ruhig über das glänzende Parkett und bietet mir eine überraschend formvollendete, zutiefst respektvolle Verbeugung an. „Du und Lord Lucio wart da unten außergewöhnlich, Draconia. Würde die Streiterin des Hauses Smaragd mir die Ehre eines Tanzes erweisen – auf Augenhöhe?“',
  end_hon_5: 'Ich blicke kurz zu Vater – der ein einziges, würdevolles Nicken gibt – und lege dann mit einem aufrichtigen, strahlenden Lächeln anmutig meine Hand in Harrys. „Nur wenn du mithalten kannst, Harry.“ Mein Stolz ist keine Mauer mehr – er ist eine Krone aus smaragdgrünem Licht.',
};

window.I18N.choices.de = {
  e1_5: [
    'Ruhe bewahren und hinauf zur erstarrten Schutz-Sanduhr blicken, die Hermiona erwähnt hat.',
    'Mit erhobenem Kinn vorbeigehen und murmeln: „Ganz ehrlich, Harry, brauchst du etwa eine Anstandsdame, nur um eine Krawatte zu binden?“',
    'Still vor mich hinlächeln – wenigstens sieht Harry heute Morgen glücklich aus – und mich in der Nähe setzen.',
  ],
  e1_11: [
    'Die Stimme senken und das warme Medaillon umklammern: „Mir geht’s gut, Harry … danke, dass du mich aufgefangen hast. Aber bitte – sag niemandem, dass es geleuchtet hat.“',
    'Glühend rot zurückweichen: „Pass auf, wohin du stürmst, Harry! Ist diese Brille bloß Dekoration?! Gib mir meine Bücher!“',
    'Hinter eine eisige Mauer zurücktreten: „Nimm deine Hände von meinen Sachen, Harry. Mein Familienerbstück geht dich nichts an.“',
  ],
  e2_choice1: [
    'Dicht neben ihn treten und meine Hand auf seine am Schöpflöffel legen: „Atme durch, Harry. Gegen den Uhrzeigersinn, langsam … folge meiner Führung.“',
    'Feuerrot anlaufen und ihm den Löffel entreißen: „Wie bist du ohne mich überhaupt noch am Leben?! Geh beiseite, Dummkopf – reich mir das Silberblatt!“',
    'Aus Armeslänge einen scharfen Frostzauber wirken: „Tritt zurück. Konzentrier dich auf die gestohlenen Eklipsenwurzeln, nicht auf Albernheiten.“',
  ],
  e2_choice2: [
    'Meine Hand sanft drehen und meine Finger mit seinen verschränken: „Ganz ehrlich, Harry … dich jeden Morgen zu sehen ist mein liebster Teil dieses Schlosses.“',
    'Tiefrot anlaufen und leicht gegen seine Stirn schnippen: „H-Hör auf, so schamlose Dinge zu sagen! Und wenn du zum Winterball kommst, lass mich erst deine schreckliche Festrobe in Ordnung bringen!“',
    'Ruhig durchatmen und auf ein leuchtendes Wappen in der Chronik deuten: „Danke, Harry … wirklich. Und jetzt sieh dir diese Seite an – da ist das Medaillon meiner Mutter abgebildet!“',
  ],
  e3_choice1: [
    'Seinem Blick fest standhalten: „Er sieht mein wahres Ich, Vater – nicht nur unser Wappen. Er macht mich mutiger, und ich vertraue ihm.“',
    'Tief erröten und meinen Kragen richten: „W-Wir sind bloß Rivalen, die derselben Bedrohung nachgehen, Vater! Wirklich!“',
    'Pflichtbewusst den Blick senken: „Die Ehre unseres Hauses steht an erster Stelle, Vater. Ich werde mein Urteil nicht von Gefühlen trüben lassen.“',
  ],
  e3_choice2: [
    'Strahlend lächeln und die silberne Schneeflocken-Brosche annehmen: „Ja, Harry. Halt mir den ersten Walzer frei – mit niemand anderem würde ich gehen.“',
    'Meine glühenden Wangen hinter einem hochmütigen Schmollen verbergen: „N-Na gut! Aber nur, weil sonst niemand deine Beinarbeit ohne gebrochenen Knöchel überlebt, Dummkopf!“',
    'Die Brosche sanft mit einem wehmütigen Lächeln berühren: „Bewahr sie für mich auf, bis wir den Riss versiegelt haben, Harry … und frag mich dann noch einmal.“',
  ],
  ep3_crossroads: [
    '💚 Harry heute Nacht allein auf dem Astronomieturm treffen – keine Masken mehr, kein Verstecken mehr, wie viel er mir bedeutet.',
    '⭐ Harry, Hermiona, Ronn, Lune und Nevile versammeln, um eine Sechs-Sterne-Verteidigung zu schmieden und die Akademie zu vereinen!',
    '🌑 Hinab in Severos Kerker schleichen, um die verbotene Spiegel-Gegen-Chiffre zu meistern und Harry aus den Schatten zu schützen.',
    '👑 Heute Nacht an Lord Lucios Seite gehen, um die uralten Smaragd-Schutzzauber unserer Familie mit ungebrochenem adeligem Stolz vorzubereiten.',
  ],
  e4a_choice: [
    'In seine Wärme treten und meine Hand auf seine legen: „Keine Mauern mehr, Harry. Ich liebe dich auch – und morgen Nacht soll die ganze Akademie uns zusammen sehen.“',
    'Knallrot anlaufen und leicht nach seinem Kragen greifen: „D-Dummkopf! Natürlich bin ich in dich verliebt – für wen sonst würde ich riskieren, verhext zu werden?! Bild dir bloß nichts darauf ein!“',
  ],
  e4b_choice: [
    'Meinen Zauberstab über dem Bauplan erheben: „Sechs Zauberstäbe, keine rivalisierenden Häuser – heute Nacht und morgen beschützen wir diese Akademie als Gleichgestellte!“',
    'Ronn und Harry liebevoll angrinsen: „Da keiner von euch ohne meine Führung einem Plan folgen kann, übernehme ich hiermit offiziell das Kommando!“',
  ],
  e4c_choice: [
    'Mein smaragdgrünes Band lösen und es ihm in die Hand drücken: „Vertrau mir heute Nacht, Harry. Warte auf dem Winterball auf mich – ich verspreche, ich komme zurück.“',
    'Meine kalte Maske wieder aufsetzen, um ihn zu schützen: „Bleib im Schloss, Harry. Schattenmagie ist kein Spiel für Helden – überlass das Severo und mir.“',
  ],
  e4d_choice: [
    'Harry mit stiller Würde meine behandschuhte Hand reichen: „Steh als Gleichgestellter an unserer Seite, Harry. Ehre wird stärker, wenn man sie teilt.“',
    'Das Kinn kühl heben: „Halte deine Freunde drinnen in Sicherheit, Harry. Meine Familie bringt zu Ende, was meine Mutter begonnen hat.“',
  ],
  e5_rom_choice: [
    '💚 Offen lächeln und vor der gesamten Akademie seine Hand ergreifen: „Kein Verstecken mehr, Harry – dieser Walzer gehört uns.“ (Ende 1: Herrscherin der Herzen)',
    '🌹 Tief erröten und verspielt das Kinn heben: „N-Na gut, ein Walzer – aber versuch bloß, mir nicht aufs Kleid zu treten, Dummkopf!“ (Ende 2: Dornen und Rosen)',
  ],
};
