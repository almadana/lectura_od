const conditions = {
  'development': [
    {title: 'Texto 1  - LA REPRESENTACIÓN SERÁ LA TRAMPA',
     intro: `
       <p>En esta prueba verás un texto corto, un fragmento de la obra "La representación será la trampa" de Férec Molnár.</p>
       <p>Tendrás que responder 8 preguntas sobre el contenido del texto.</p>
       <p>Por favor, lee atentamente el texto y las preguntas, y tómate tu tiempo en responder con la opción que a tu juicio consideres más correcta.</p>
       <div class="actions">
         <button type="button" class="button start_task">Siguiente</button>
       </div>
     `,
     text: `
<p>La acción se desarrolla en un castillo junto a una playa en Italia. </p>
<h4>Acto primero </h4>
<p>
Lujoso salón de invitados de un hermoso castillo al lado de la playa. Puertas a derecha e izquierda. Mobiliario de salón en medio del escenario: un sofá, una mesa y dos sillones. Grandes ventanas al fondo. Noche estrellada. El escenario está a oscuras. Cuando se levanta el telón, se oye a unos hombres que conversan en voz alta tras la puerta de la izquierda. La puerta se abre y entran tres caballeros de esmoquin. Uno de ellos enciende la luz inmediatamente. Se dirigen hacia el centro en silencio y se sitúan alrededor de la mesa. Se sientan a la vez, Gál en el sillón de la izquierda, Turai en el de la derecha y Ádám en el sofá del medio. Silencio muy largo, casi violento. Se estiran cómodamente. Silencio. Después: 
</p>
<dl>
<dt>GÁL</dt>
<dd>¿Por qué estás tan pensativo? </dd>
<dt>TURAI</dt>
<dd>Estoy pensando en lo difícil que es comenzar la representación de una obra de teatro. Presentar a todos los personajes principales al inicio, cuando todo empieza. </dd>
<dt>ÁDÁM</dt>
<dd>Me imagino que debe ser complicado. </dd>
<dt>TURAI</dt>
<dd>Es endiabladamente complicado. La obra de teatro empieza. El público se queda en silencio. Los actores salen al escenario y el tormento comienza. Es una eternidad; a veces pasa hasta un cuarto de hora antes de que el público averigüe quién es quién y qué hace ahí. </dd>
<dt>GÁL</dt>
<dd>¡Sí que tienes una mente peculiar! ¿No puedes olvidarte de tu profesión ni siquiera por un momento? </dd>
<dt>TURAI</dt> 
<dd>Imposible. </dd>
<dt>GÁL</dt>
<dd>No pasa ni media hora sin que te pongas a hablar de teatro, actores u obras. Hay más cosas en el mundo. </dd>
<dt>TURAI</dt>
<dd>No las hay. Soy dramaturgo. Ésa es mi maldición. </dd>
<dt>GÁL</dt>
<dd>No debes ser esclavo de tu profesión. </dd>
<dt>TURAI</dt>
<dd>Si no la dominas, eres su esclavo. No hay término medio. Créeme, no es fácil empezar bien una obra de teatro. Es uno de los problemas más arduos de la puesta en escena. Presentar a los personajes rápidamente. Fijémonos en esta escena de aquí, con nosotros tres. Tres caballeros de esmoquin. Supongamos que no suben al salón de este castillo señorial, sino a un escenario, justo cuando comienza la obra de teatro. Tendrían que hablar sobre toda una serie de temas sin interés hasta que pudiera saberse quiénes somos. ¿No sería mucho más fácil comenzar todo esto poniéndonos de pie y presentándonos a nosotros mismos? <em>Se levanta.</em> Buenas noches. Los tres estamos invitados en este castillo. Acabamos de llegar del comedor, donde hemos tomado una cena excelente y hemos bebido dos botellas de champán. <br>
Mi nombre es Sándor Turai, soy autor teatral, llevo escribiendo obras de teatro desde hace treinta años, ésa es mi profesión. Punto y final. Tu turno. 
<dt>GÁL</dt> 
<dd><i>Se levanta.</i> Mi nombre es Gál, también soy autor teatral. También escribo obras de teatro en colaboración con este caballero aquí presente. Somos una pareja famosa de autores teatrales. En todos los carteles de las buenas comedias y operetas se lee: escrita por Gál y Turai. Naturalmente, ésta es también mi profesión. </dd>
<dt>GÁL y TURAI</dt>
<dd><i>A la vez.</i> Y este joven... </dd>
<dt>ÁDÁM</dt>
<dd><i>Se levanta.</i> Este joven es, si me lo permiten, Albert Ádám, veinticinco años, compositor. Escribí la música de la última opereta de estos dos amables caballeros. Éste es mi primer trabajo para el teatro. Estos dos ángeles veteranos me han descubierto y ahora, con su ayuda, me gustaría hacerme famoso. Gracias a ellos me han invitado a este castillo, gracias a ellos me han hecho el frac y el esmoquin. En otras palabras, por el momento, soy pobre y desconocido. Aparte de eso soy huérfano y me crió mi abuela. Ella ya falleció. Estoy solo en el mundo. No tengo ni nombre, ni fortuna. </dd>
<dt>TURAI</dt>
<dd>Pero eres joven. </dd>
<dt>GÁL</dt>
<dd>E inteligente. </dd>
<dt>ÁDÁM</dt>
<dd>Y estoy enamorado de la solista. </dd>
<dt>TURAI</dt>
<dd>No debiste añadir eso. Los espectadores lo habrían averiguado de todas formas. 
<em>Todos se sientan.</em> </dd>
<dt>TURAI</dt>
<dd>Y bien, ¿no sería ésta la manera más sencilla de empezar una obra de teatro? </dd>
<dt>GÁL</dt>
<dd>Si nos permitiesen hacerlo, sería fácil escribir obras de teatro. </dd>
<dt>TURAI</dt>
<dd>Créeme, no es tan complicado. Piensa en todo ello como en... </dd>
<dt>GÁL</dt>
<dd>De acuerdo, de acuerdo, de acuerdo, no empieces a hablar de teatro otra vez. Estoy harto de ello. Ya hablaremos mañana, si quieres. </dd></dl>
<p>“La representación será la trampa” es el comienzo de una obra de teatro del dramaturgo húngaro Ferenc Molnár.</p>`,
      questions: [
      {text: "<b class='question-title'>Pregunta 1/7</b><br>¿Cuál de los tres personajes es el más joven?",
          name: "pa1",
          options: [
            {value: "a", text: "Molnár."},
            {value: "b", text: "Gál."},
            {value: "c", text: "Turai."},                
            {value: "d", text: "Adám."},
            {value: "NA", text: "No quiero responder a esta pregunta."}
          ],
          correct_answer: "d",
        },
        {text: '<b class="question-title">Pregunta 2/8</b><br>  “Es una eternidad; a veces pasa hasta un cuarto de hora (...)”. <br>Según Turai, ¿por qué un cuarto de hora es “una eternidad”? ',
          name: "pa2",
          options: [
            {value: "a", text: "Es mucho tiempo para esperar a que el público se quede quieto en un teatro abarrotado."},
            {value: "b", text: "Parece que se tarda un siglo en aclarar la situación al comienzo de una obra de teatro."},
            {value: "c", text: "Siempre parece que a un dramaturgo le lleva mucho tiempo escribir el comienzo de una obra de teatro."},                
            {value: "d", text: "Parece que el tiempo avanza lentamente cuando ocurre un suceso importante en una obra de teatro."},
            {value: "NA", text: "No quiero responder a esta pregunta."}
          ],
          correct_answer: "b"
        },
        {text: "<b class='question-title'>Pregunta 3/8</b><br>En general, ¿qué está haciendo el dramaturgo Molnár en este fragmento?",
          name: "pa3",
          options: [
            {value: "a", text: "Está presentando algunas de las principales dificultades de los espectadores."},
            {value: "b", text: "Está haciendo que sus personajes demuestren cómo es una eternidad en una obra de teatro."},
            {value: "c", text: "Está dando un ejemplo de una tradicional escena inicial de una obra de teatro."},                
            {value: "d", text: "Está utilizando a los personajes para representar uno de sus propios problemas de creación."},
            {value: "NA", text: "No quiero responder a esta pregunta."}
          ],
          correct_answer: "d"
        },
        {text: "<b class='question-title'>Pregunta 4/8</b><br>¿Por qué Turai afirma “Soy dramaturgo. Ésa es mi maldición”?",
          name: "pa4",
          options: [
            {value: "a", text: "Le resulta complicado plantear las situaciones en la obra."},
            {value: "b", text: "Le implica un fastidio tener que escribir obras de teatro."},
            {value: "c", text: "Se siente esclavo de la profesión porque aún no la domina."},                
            {value: "d", text: "Considera que los personajes significan siempre un problema."},
            {value: "NA", text: "No quiero responder a esta pregunta."}
          ],
          correct_answer: "c",
        },
        {text: "<b class='question-title'>Pregunta 5/8</b><br>Luigi Pirandello es considerado una de las mayores influencias del autor de “La representación será la trampa”. Pirandello fue una figura fundamental en la renovación del teatro moderno en el siglo XX, caracterizado por centrarse en la reflexión sobre el propio arte y su validez como forma de representación y comunicación.<br>¿Qué aspecto del fragmento de la obra teatral leída muestra claramente esta influencia?",
          name: "pa5",
          options: [
            {value: "a", text: "La historia gira en torno a problemáticas de la clase alta italiana."},
            {value: "b", text: "Los personajes comentan el proceso de escritura de una obra de teatro."},
            {value: "c", text: "Las personalidades de Gál, Turai y Ádám se dan a conocer en sus diálogos."},                
            {value: "d", text: "Los personajes dialogan sobre sus problemas personales de comunicación."},
            {value: "NA", text: "No quiero responder a esta pregunta."}
          ],
          correct_answer: "b",
        },
        {text: `<b class='question-title'>Pregunta 6/8</b><br>¿Qué significa el texto en cursivas en el siguiente parlamento? 
            <dl><dt>GÁL y TURAI</dt> <dd><i>A la vez.</i>Y este joven...</dd></dl>`,
          name: "pa6",
          options: [
            {value: "a", text: "Señala el tipo de relación entre Gál y Turai en su vida profesional."},
            {value: "b", text: "Pone un énfasis en las palabras de los personajes en escena."},
            {value: "c", text: "Es un parlamento que dicen Gál y Turai al hablar con Ádám."},                
            {value: "d", text: "Es una acotación que indica las acciones de los personajes en escena."},
            {value: "NA", text: "No quiero responder a esta pregunta."}
          ],
          correct_answer: "d",
        },
        {text: "<b class='question-title'>Pregunta 7/8</b><br>Según lo que dicen los personajes, ¿qué estaban haciendo justo antes de que comience la obra de teatro?",
          name: "pa7",
          options: [
            {value: "a", text: "Acaban de cenar y de tomar champagne."},
            {value: "b", text: "Conversan en voz alta tras la puerta."},
            {value: "c", text: "Le hicieron a Ádám el frac y el esmoquin."},
            {value: "d", text: "Encienden la luz en el escenario."},
            {value: "NA", text: "No quiero responder a esta pregunta."}
          ],
          correct_answer: "a",
        },
        {text: "<b class='question-title'>Pregunta 8/8</b><br>Esta obra es un ejemplo de metaficción, un tipo de literatura cuyos temas e historias giran en torno a los mecanismos de la ficción y sus características. <br>¿Por qué crees que esta obra de teatro es metaficción?",
          name: "pa8",
          options: [
            {value: "a", text: "Los personajes comentan su condición y la de la dramaturgia."},
            {value: "b", text: "Los actores evalúan al autor de “La representación será la trampa”."},
            {value: "c", text: "Los personajes no son actores en una obra de teatro."},                
            {value: "d", text: "Los actores son asiduos espectadores del teatro de Molnár."},
            {value: "NA", text: "No quiero responder a esta pregunta."}
          ],
          correct_answer: "a",
        }
      ]
    },
    {title: 'Texto 2 - La democracia en Atenas',
      intro: `
        <p>Verás a continuación un fragmento de "Historia de la guerra del Peloponeso" del historiador griego Tucídides.</p>
        <p>En este caso tendrás que responder 7 preguntas sobre el contenido del texto.</p>
        <p>Por favor, lee atentamente el texto y las preguntas, y tómate tu tiempo en responder con la opción que a tu juicio consideres más correcta.</p>
        <div class="actions">
          <button type="button" class="button start_task">Siguiente</button>
        </div>
      `,
      text: `
      <h3>PARTE A</h3>
  <p>
  Tucídides fue un historiador y militar que vivió en el siglo V a. C, durante la época de la Grecia clásica. Nació en Atenas. Durante la guerra del Peloponeso (del 431 a. C. al 404 a. C.), entre Atenas y Esparta, estuvo al mando de una flota cuya misión era proteger la ciudad de Anfípolis, en Tracia. No consiguió llegar a la ciudad a tiempo. Ésta cayó en manos del general espartano, Brásidas, lo que condenó a Tucídides a veinte años de exilio. Esta circunstancia le dio la oportunidad de recoger información bastante completa de los dos bandos en conflicto y la posibilidad de investigar para su obra <i>Historia de la guerra del Peloponeso.</i> 
</p>
<p>
  Tucídides está considerado como uno de los grandes historiadores de la Antigüedad. Se centra más en las causas naturales y en la conducta de cada individuo que en el destino o en la intervención de los dioses para explicar la evolución de la historia. En su obra, los hechos no se presentan como meras anécdotas, sino que se explican tratando de descubrir los motivos que llevaron a los protagonistas a actuar del modo en que lo hicieron. El énfasis que Tucídides pone en la conducta de los individuos le lleva a veces a introducir discursos ficticios: éstos le ayudan a exponer las motivaciones de los personajes históricos. 
</p>
  <h3>PARTE B </h3>
<p>
  Tucídides atribuye al dirigente ateniense Pericles (siglo V a. C.) el siguiente discurso en honor de los soldados caídos en el primer año de la guerra del Peloponeso. 
 </p> 
    "Nuestro sistema de gobierno no copia las leyes de los estados vecinos; nosotros somos más un ejemplo para otros que imitadores de los demás. Nuestro sistema se denomina democracia, ya que el gobierno no depende de unos pocos, sino de una mayoría. Nuestras leyes garantizan iguales derechos para todos en las cuestiones privadas, mientras que el prestigio en la vida pública depende más de los méritos que de la clase social. 
    Tampoco la clase social impide a nadie llegar a ejercer cualquier cargo público (...). Y, al tiempo que no interferimos en las cuestiones privadas, respetamos la ley en los asuntos públicos. Obedecemos a quienes ponemos a desempeñar cargos públicos y obedecemos las leyes, en especial las dirigidas a la protección de los oprimidos y las leyes no escritas que supone una verdadera vergüenza infringir. 
    Además, nos hemos procurado muchos placeres para el espíritu. Los juegos y sacrificios que celebramos durante todo el año y la elegancia de nuestras casas particulares constituyen una fuente diaria de placer que nos ayuda a olvidar cualquier preocupación; mientras que los numerosos habitantes de la ciudad atraen a Atenas productos de todo el mundo, de modo que a los atenienses los frutos de otros pueblos les son tan familiares como los suyos propios. "
    <br><br>
    <i>Tucídides, Historia de la guerra del Peloponeso (adaptación) <i>`,
      questions: [
        {text: "<b class='question-title'>Pregunta 1/7</b><br>  Uno de los objetivos del discurso de la parte B era honrar a los soldados caídos en el primer año de la guerra del Peloponeso. <br>¿Cuál era OTRO de los objetivos de este discurso?",
          name: "pb1",
          options: [
            {value: "a", text: "Explicar las ventajas de la democracia ateniense."},
            {value: "b", text: "Honrar a los soldados muertos"},
            {value: "c", text: "Recoger información sobre el bando en conflicto."},                
            {value: "d", text: "Describir la guerra del Peloponeso."},
            {value: "NA", text: "No quiero responder a esta pregunta."}
          ],
          correct_answer: "a",
        },
        {text: "<b class='question-title'>Pregunta 2/7</b><br>¿Qué condenó a Tucídides al exilio?",
          name: "pb2",
          options: [
            {value: "a", text: "Que no pudiese lograr la victoria de los atenienses en Anfípolis."},
            {value: "b", text: "Que tomase el mando de una flota en Anfípolis."},
            {value: "c", text: "Que recogiese información de los dos bandos en conflicto."},
            {value: "d", text: "Que desertase de los atenienses para luchar con los espartanos."},
            {value: "NA", text: "No quiero responder a esta pregunta."}
          ],
          correct_answer: "a",
        },
        {text: "<b class='question-title'>Pregunta 3/7</b><br>¿Gracias a quién conocemos el discurso en honor a los soldados de la Parte B?",
          name: "pb3",
          options: [
            {value: "a", text: "Pericles."},
            {value: "b", text: "Tucídides."},
            {value: "c", text: "El historiador espartano."},
            {value: "d", text: "El dirigente de los soldados."},
            {value: "NA", text: "No quiero responder a esta pregunta."}
          ],
          correct_answer: "b",
        },
        {text: "<b class='question-title'>Pregunta 4/7</b><br>Según el texto, ¿qué diferenciaba a Tucídides de los demás historiadores de su época? ",
          name: "pb4",
          options: [
            {value: "a", text: "Escribía sobre los héroes de la guerra y la influencia de los dioses."},
            {value: "b", text: "Utilizaba anécdotas, más que meros hechos."},
            {value: "c", text: "Explicaba sucesos históricos haciendo referencia a sus causas sobrenaturales."},
            {value: "d", text: "Se centraba en lo que llevaba a las personas a actuar del modo en que lo hacían."},
            {value: "NA", text: "No quiero responder a esta pregunta."}
          ],
          correct_answer: "d",
        },
        {text: "<b class='question-title'>Pregunta 5/7</b><br>Fíjate en este fragmento del texto, que se encuentra casi al final de la Parte B: <p>«Además, nos hemos procurado muchos placeres para el espíritu. Los juegos y sacrificios que celebramos durante todo el año y la elegancia de nuestras casas particulares constituyen una fuente diaria de placer que nos hace olvidar cualquier preocupación.»</p> ¿Cuál de estas frases resume mejor esta parte del texto? ",
          name: "pb5",
          options: [
            {value: "a", text: "El sistema de gobierno de Atenas permite a cualquier persona elaborar leyes."},
            {value: "b", text: "La diversión y la belleza son parte de la buena vida que se puede tener en Atenas."},
            {value: "c", text: "Los atenienses viven rodeados de un lujo excesivo y no pueden tomarse la vida en serio."},
            {value: "d", text: "La vida pública y privada son consideradas como una misma cosa."},
            {value: "NA", text: "No quiero responder a esta pregunta."}
          ],
          correct_answer: "b",
        },
        {text: "<b class='question-title'>Pregunta 6/7</b><br>La parte A de <i>La democracia en Atenas</i> sirve para:",
          name: "pb6",
          options: [
            {value: "a", text: "Explicar por qué Tucídides se exilió."},
            {value: "b", text: "Brindar información contextual sobre Tucídides."},
            {value: "c", text: "Enumerar las razones por las cuales Tucídides cita a Pericles."},
            {value: "d", text: "Describir la época en la cual Tucídides ejerció su profesión."},
            {value: "NA", text: "No quiero responder a esta pregunta."}
          ],
          correct_answer: "b",
        },
       {text: "<b class='question-title'>Pregunta 7/7</b><br>¿Qué concepto de democracia se describe en el fragmento de Historia de la guerra del Peloponeso que se presenta en la parte B?",
          name: "pb7",
          options: [
            {value: "a", text: "Sistema basado en las leyes que regulan el ámbito privado y que favorecen la autonomía para el comercio exterior, así como para el ámbito público, espiritual y estético."},
            {value: "b", text: "Gobierno legalista que regula ámbitos públicos y privados en beneficio de cargos estatales, méritos sociales, así como usos y costumbres atenienses."},
            {value: "c", text: "Sistema basado en el poder de la mayoría, la igualdad de derechos, la obediencia a la Ley, la protección de los más desfavorecidos, el cuidado del espíritu y el intercambio con otros pueblos."},
            {value: "d", text: "Gobierno legalista y libertario que garantiza el derecho privado y favorece la ley pública que promueve el comercio exterior."},
            {value: "NA", text: "No quiero responder a esta pregunta."}
          ],
          correct_answer: "c",
        },
      ]
    },
  ],
  'testing': [
        {title: 'Texto 1  - LA REPRESENTACIÓN SERÁ LA TRAMPA',
      text: `
<p style="font-style:italic">La acción se desarrolla en un castillo junto a una playa en Italia. </p>
<h4>Acto primero </h4>
<em>
Lujoso salón de invitados de un hermoso castillo al lado de la playa. Puertas a derecha e izquierda. Mobiliario de salón en medio del escenario: un sofá, una mesa y dos sillones. Grandes ventanas al fondo. Noche estrellada. El escenario está a oscuras. Cuando se levanta el telón, se oye a unos hombres que conversan en voz alta tras la puerta de la izquierda. La puerta se abre y entran tres caballeros de esmoquin. Uno de ellos enciende la luz inmediatamente. Se dirigen hacia el centro en silencio y se sitúan alrededor de la mesa. Se sientan a la vez, Gál en el sillón de la izquierda, Turai en el de la derecha y Ádám en el sofá del medio. Silencio muy largo, casi violento. Se estiran cómodamente. Silencio. Después: 
</em>
<dl>
<dt>GÁL</dt>
<dd>¿Por qué estás tan pensativo? </dd>
<dt>TURAI</dt>
<dd>Estoy pensando en lo difícil que es comenzar la representación de una obra de teatro. Presentar a todos los personajes principales al inicio, cuando todo empieza. </dd>
<dt>ÁDÁM</dt>
<dd>Me imagino que debe ser complicado. </dd>
<dt>TURAI</dt>
<dd>Es endiabladamente complicado. La obra de teatro empieza. El público se queda en silencio. Los actores salen al escenario y el tormento comienza. Es una eternidad; a veces pasa hasta un cuarto de hora antes de que el público averigüe quién es quién y qué hace ahí. </dd>
<dt>GÁL</dt>
<dd>¡Sí que tienes una mente peculiar! ¿No puedes olvidarte de tu profesión ni siquiera por un momento? </dd>
<dt>TURAI</dt> 
<dd>Imposible. </dd>
<dt>GÁL</dt>
<dd>No pasa ni media hora sin que te pongas a hablar de teatro, actores u obras. Hay más cosas en el mundo. </dd>
<dt>TURAI</dt>
<dd>No las hay. Soy dramaturgo. Ésa es mi maldición. </dd>
<dt>GÁL</dt>
<dd>No debes ser esclavo de tu profesión. </dd>
<dt>TURAI</dt>
<dd>Si no la dominas, eres su esclavo. No hay término medio. Créeme, no es fácil empezar bien una obra de teatro. Es uno de los problemas más arduos de la puesta en escena. Presentar a los personajes rápidamente. Fijémonos en esta escena de aquí, con nosotros tres. Tres caballeros de esmoquin. Supongamos que no suben al salón de este castillo señorial, sino a un escenario, justo cuando comienza la obra de teatro. Tendrían que hablar sobre toda una serie de temas sin interés hasta que pudiera saberse quiénes somos. ¿No sería mucho más fácil comenzar todo esto poniéndonos de pie y presentándonos a nosotros mismos? <em>Se levanta.</em> Buenas noches. Los tres estamos invitados en este castillo. Acabamos de llegar del comedor, donde hemos tomado una cena excelente y hemos bebido dos botellas de champán. <br>
Mi nombre es Sándor Turai, soy autor teatral, llevo escribiendo obras de teatro desde hace treinta años, ésa es mi profesión. Punto y final. Tu turno. 
<dt>GÁL</dt> 
<dd><i>Se levanta.</i> Mi nombre es Gál, también soy autor teatral. También escribo obras de teatro en colaboración con este caballero aquí presente. Somos una pareja famosa de autores teatrales. En todos los carteles de las buenas comedias y operetas se lee: escrita por Gál y Turai. Naturalmente, ésta es también mi profesión. </dd>
<dt>GÁL y TURAI</dt>
<dd><i>A la vez.</i> Y este joven... </dd>
<dt>ÁDÁM</dt>
<dd><i>Se levanta.</i> Este joven es, si me lo permiten, Albert Ádám, veinticinco años, compositor. Escribí la música de la última opereta de estos dos amables caballeros. Éste es mi primer trabajo para el teatro. Estos dos ángeles veteranos me han descubierto y ahora, con su ayuda, me gustaría hacerme famoso. Gracias a ellos me han invitado a este castillo, gracias a ellos me han hecho el frac y el esmoquin. En otras palabras, por el momento, soy pobre y desconocido. Aparte de eso soy huérfano y me crió mi abuela. Ella ya falleció. Estoy solo en el mundo. No tengo ni nombre, ni fortuna. </dd>
<dt>TURAI</dt>
<dd>Pero eres joven. </dd>
<dt>GÁL</dt>
<dd>E inteligente. </dd>
<dt>ÁDÁM</dt>
<dd>Y estoy enamorado de la solista. </dd>
<dt>TURAI</dt>
<dd>No debiste añadir eso. Los espectadores lo habrían averiguado de todas formas. 
<em>Todos se sientan.</em> </dd>
<dt>TURAI</dt>
<dd>Y bien, ¿no sería ésta la manera más sencilla de empezar una obra de teatro? </dd>
<dt>GÁL</dt>
<dd>Si nos permitiesen hacerlo, sería fácil escribir obras de teatro. </dd>
<dt>TURAI</dt>
<dd>Créeme, no es tan complicado. Piensa en todo ello como en... </dd>
<dt>GÁL</dt>
<dd>De acuerdo, de acuerdo, de acuerdo, no empieces a hablar de teatro otra vez. Estoy harto de ello. Ya hablaremos mañana, si quieres. </dd></dl>
<p>“La representación será la trampa” es el comienzo de una obra de teatro del dramaturgo húngaro Ferenc Molnár.</p>`,
      questions: [
      {text: "<b class='question-title'>Pregunta 1/7</b><br>¿Cuál de los tres personajes es el más joven?",
          name: "pa1",
          options: [
            {value: "a", text: "Molnár."},
            {value: "b", text: "Gál."},
            {value: "c", text: "Turai."},                
            {value: "d", text: "Adám."},
            {value: "NA", text: "No quiero responder a esta pregunta."}
          ],
          correct_answer: "d",
        },
        {text: '<b class="question-title">Pregunta 2/8</b><br>  “Es una eternidad; a veces pasa hasta un cuarto de hora (...)”. <br>Según Turai, ¿por qué un cuarto de hora es “una eternidad”? ',
          name: "pa2",
          options: [
            {value: "a", text: "Es mucho tiempo para esperar a que el público se quede quieto en un teatro abarrotado."},
            {value: "b", text: "Parece que se tarda un siglo en aclarar la situación al comienzo de una obra de teatro."},
            {value: "c", text: "Siempre parece que a un dramaturgo le lleva mucho tiempo escribir el comienzo de una obra de teatro."},                
            {value: "d", text: "Parece que el tiempo avanza lentamente cuando ocurre un suceso importante en una obra de teatro."},
            {value: "NA", text: "No quiero responder a esta pregunta."}
          ],
          correct_answer: "b"
        },
        {text: "<b class='question-title'>Pregunta 3/8</b><br>En general, ¿qué está haciendo el dramaturgo Molnár en este fragmento?",
          name: "pa3",
          options: [
            {value: "a", text: "Está presentando algunas de las principales dificultades de los espectadores."},
            {value: "b", text: "Está haciendo que sus personajes demuestren cómo es una eternidad en una obra de teatro."},
            {value: "c", text: "Está dando un ejemplo de una tradicional escena inicial de una obra de teatro."},                
            {value: "d", text: "Está utilizando a los personajes para representar uno de sus propios problemas de creación."},
            {value: "NA", text: "No quiero responder a esta pregunta."}
          ],
          correct_answer: "d"
        },
        {text: "<b class='question-title'>Pregunta 4/8</b><br>¿Por qué Turai afirma “Soy dramaturgo. Ésa es mi maldición”?",
          name: "pa4",
          options: [
            {value: "a", text: "Le resulta complicado plantear las situaciones en la obra."},
            {value: "b", text: "Le implica un fastidio tener que escribir obras de teatro."},
            {value: "c", text: "Se siente esclavo de la profesión porque aún no la domina."},                
            {value: "d", text: "Considera que los personajes significan siempre un problema."},
            {value: "NA", text: "No quiero responder a esta pregunta."}
          ],
          correct_answer: "c",
        },
        {text: "<b class='question-title'>Pregunta 5/8</b><br>Luigi Pirandello es considerado una de las mayores influencias del autor de “La representación será la trampa”. Pirandello fue una figura fundamental en la renovación del teatro moderno en el siglo XX, caracterizado por centrarse en la reflexión sobre el propio arte y su validez como forma de representación y comunicación.<br>¿Qué aspecto del fragmento de la obra teatral leída muestra claramente esta influencia?",
          name: "pa5",
          options: [
            {value: "a", text: "La historia gira en torno a problemáticas de la clase alta italiana."},
            {value: "b", text: "Los personajes comentan el proceso de escritura de una obra de teatro."},
            {value: "c", text: "Las personalidades de Gál, Turai y Ádám se dan a conocer en sus diálogos."},                
            {value: "d", text: "Los personajes dialogan sobre sus problemas personales de comunicación."},
            {value: "NA", text: "No quiero responder a esta pregunta."}
          ],
          correct_answer: "b",
        },
        {text: `<b class='question-title'>Pregunta 6/8</b><br>¿Qué significa el texto en cursivas en el siguiente parlamento? 
            <dl><dt>GÁL y TURAI</dt> <dd><i>A la vez.</i>Y este joven...</dd></dl>`,
          name: "pa6",
          options: [
            {value: "a", text: "Señala el tipo de relación entre Gál y Turai en su vida profesional."},
            {value: "b", text: "Pone un énfasis en las palabras de los personajes en escena."},
            {value: "c", text: "Es un parlamento que dicen Gál y Turai al hablar con Ádám."},                
            {value: "d", text: "Es una acotación que indica las acciones de los personajes en escena."},
            {value: "NA", text: "No quiero responder a esta pregunta."}
          ],
          correct_answer: "d",
        },
        {text: "<b class='question-title'>Pregunta 7/8</b><br>Según lo que dicen los personajes, ¿qué estaban haciendo justo antes de que comience la obra de teatro?",
          name: "pa7",
          options: [
            {value: "a", text: "Acaban de cenar y de tomar champagne."},
            {value: "b", text: "Conversan en voz alta tras la puerta."},
            {value: "c", text: "Le hicieron a Ádám el frac y el esmoquin."},
            {value: "d", text: "Encienden la luz en el escenario."},
            {value: "NA", text: "No quiero responder a esta pregunta."}
          ],
          correct_answer: "a",
        },
        {text: "<b class='question-title'>Pregunta 8/8</b><br>Esta obra es un ejemplo de metaficción, un tipo de literatura cuyos temas e historias giran en torno a los mecanismos de la ficción y sus características. <br>¿Por qué crees que esta obra de teatro es metaficción?",
          name: "pa8",
          options: [
            {value: "a", text: "Los personajes comentan su condición y la de la dramaturgia."},
            {value: "b", text: "Los actores evalúan al autor de “La representación será la trampa”."},
            {value: "c", text: "Los personajes no son actores en una obra de teatro."},                
            {value: "d", text: "Los actores son asiduos espectadores del teatro de Molnár."},
            {value: "NA", text: "No quiero responder a esta pregunta."}
          ],
          correct_answer: "a",
        }
      ]
    },
  ],
  'production': [
    {title: 'Texto 1  - LA REPRESENTACIÓN SERÁ LA TRAMPA',
     intro: `
       <p>En esta prueba verás un texto corto, un fragmento de la obra "La representación será la trampa" de Férec Molnár.</p>
       <p>Tendrás que responder 8 preguntas sobre el contenido del texto.</p>
       <p>Por favor, lee atentamente el texto y las preguntas, y tómate tu tiempo en responder con la opción que a tu juicio consideres más correcta.</p>
       <div class="actions">
         <button type="button" class="button start_task">Siguiente</button>
       </div>
     `,
     text: `
<p>La acción se desarrolla en un castillo junto a una playa en Italia. </p>
<h4>Acto primero </h4>
<p>
Lujoso salón de invitados de un hermoso castillo al lado de la playa. Puertas a derecha e izquierda. Mobiliario de salón en medio del escenario: un sofá, una mesa y dos sillones. Grandes ventanas al fondo. Noche estrellada. El escenario está a oscuras. Cuando se levanta el telón, se oye a unos hombres que conversan en voz alta tras la puerta de la izquierda. La puerta se abre y entran tres caballeros de esmoquin. Uno de ellos enciende la luz inmediatamente. Se dirigen hacia el centro en silencio y se sitúan alrededor de la mesa. Se sientan a la vez, Gál en el sillón de la izquierda, Turai en el de la derecha y Ádám en el sofá del medio. Silencio muy largo, casi violento. Se estiran cómodamente. Silencio. Después: 
</p>
<dl>
<dt>GÁL</dt>
<dd>¿Por qué estás tan pensativo? </dd>
<dt>TURAI</dt>
<dd>Estoy pensando en lo difícil que es comenzar la representación de una obra de teatro. Presentar a todos los personajes principales al inicio, cuando todo empieza. </dd>
<dt>ÁDÁM</dt>
<dd>Me imagino que debe ser complicado. </dd>
<dt>TURAI</dt>
<dd>Es endiabladamente complicado. La obra de teatro empieza. El público se queda en silencio. Los actores salen al escenario y el tormento comienza. Es una eternidad; a veces pasa hasta un cuarto de hora antes de que el público averigüe quién es quién y qué hace ahí. </dd>
<dt>GÁL</dt>
<dd>¡Sí que tienes una mente peculiar! ¿No puedes olvidarte de tu profesión ni siquiera por un momento? </dd>
<dt>TURAI</dt> 
<dd>Imposible. </dd>
<dt>GÁL</dt>
<dd>No pasa ni media hora sin que te pongas a hablar de teatro, actores u obras. Hay más cosas en el mundo. </dd>
<dt>TURAI</dt>
<dd>No las hay. Soy dramaturgo. Ésa es mi maldición. </dd>
<dt>GÁL</dt>
<dd>No debes ser esclavo de tu profesión. </dd>
<dt>TURAI</dt>
<dd>Si no la dominas, eres su esclavo. No hay término medio. Créeme, no es fácil empezar bien una obra de teatro. Es uno de los problemas más arduos de la puesta en escena. Presentar a los personajes rápidamente. Fijémonos en esta escena de aquí, con nosotros tres. Tres caballeros de esmoquin. Supongamos que no suben al salón de este castillo señorial, sino a un escenario, justo cuando comienza la obra de teatro. Tendrían que hablar sobre toda una serie de temas sin interés hasta que pudiera saberse quiénes somos. ¿No sería mucho más fácil comenzar todo esto poniéndonos de pie y presentándonos a nosotros mismos? <em>Se levanta.</em> Buenas noches. Los tres estamos invitados en este castillo. Acabamos de llegar del comedor, donde hemos tomado una cena excelente y hemos bebido dos botellas de champán. <br>
Mi nombre es Sándor Turai, soy autor teatral, llevo escribiendo obras de teatro desde hace treinta años, ésa es mi profesión. Punto y final. Tu turno. 
<dt>GÁL</dt> 
<dd><i>Se levanta.</i> Mi nombre es Gál, también soy autor teatral. También escribo obras de teatro en colaboración con este caballero aquí presente. Somos una pareja famosa de autores teatrales. En todos los carteles de las buenas comedias y operetas se lee: escrita por Gál y Turai. Naturalmente, ésta es también mi profesión. </dd>
<dt>GÁL y TURAI</dt>
<dd><i>A la vez.</i> Y este joven... </dd>
<dt>ÁDÁM</dt>
<dd><i>Se levanta.</i> Este joven es, si me lo permiten, Albert Ádám, veinticinco años, compositor. Escribí la música de la última opereta de estos dos amables caballeros. Éste es mi primer trabajo para el teatro. Estos dos ángeles veteranos me han descubierto y ahora, con su ayuda, me gustaría hacerme famoso. Gracias a ellos me han invitado a este castillo, gracias a ellos me han hecho el frac y el esmoquin. En otras palabras, por el momento, soy pobre y desconocido. Aparte de eso soy huérfano y me crió mi abuela. Ella ya falleció. Estoy solo en el mundo. No tengo ni nombre, ni fortuna. </dd>
<dt>TURAI</dt>
<dd>Pero eres joven. </dd>
<dt>GÁL</dt>
<dd>E inteligente. </dd>
<dt>ÁDÁM</dt>
<dd>Y estoy enamorado de la solista. </dd>
<dt>TURAI</dt>
<dd>No debiste añadir eso. Los espectadores lo habrían averiguado de todas formas. 
<em>Todos se sientan.</em> </dd>
<dt>TURAI</dt>
<dd>Y bien, ¿no sería ésta la manera más sencilla de empezar una obra de teatro? </dd>
<dt>GÁL</dt>
<dd>Si nos permitiesen hacerlo, sería fácil escribir obras de teatro. </dd>
<dt>TURAI</dt>
<dd>Créeme, no es tan complicado. Piensa en todo ello como en... </dd>
<dt>GÁL</dt>
<dd>De acuerdo, de acuerdo, de acuerdo, no empieces a hablar de teatro otra vez. Estoy harto de ello. Ya hablaremos mañana, si quieres. </dd></dl>
<p>“La representación será la trampa” es el comienzo de una obra de teatro del dramaturgo húngaro Ferenc Molnár.</p>`,
      questions: [
      {text: "<b class='question-title'>Pregunta 1/7</b><br>¿Cuál de los tres personajes es el más joven?",
          name: "pa1",
          options: [
            {value: "a", text: "Molnár."},
            {value: "b", text: "Gál."},
            {value: "c", text: "Turai."},                
            {value: "d", text: "Adám."},
            {value: "NA", text: "No quiero responder a esta pregunta."}
          ],
          correct_answer: "d",
        },
        {text: '<b class="question-title">Pregunta 2/8</b><br>  “Es una eternidad; a veces pasa hasta un cuarto de hora (...)”. <br>Según Turai, ¿por qué un cuarto de hora es “una eternidad”? ',
          name: "pa2",
          options: [
            {value: "a", text: "Es mucho tiempo para esperar a que el público se quede quieto en un teatro abarrotado."},
            {value: "b", text: "Parece que se tarda un siglo en aclarar la situación al comienzo de una obra de teatro."},
            {value: "c", text: "Siempre parece que a un dramaturgo le lleva mucho tiempo escribir el comienzo de una obra de teatro."},                
            {value: "d", text: "Parece que el tiempo avanza lentamente cuando ocurre un suceso importante en una obra de teatro."},
            {value: "NA", text: "No quiero responder a esta pregunta."}
          ],
          correct_answer: "b"
        },
        {text: "<b class='question-title'>Pregunta 3/8</b><br>En general, ¿qué está haciendo el dramaturgo Molnár en este fragmento?",
          name: "pa3",
          options: [
            {value: "a", text: "Está presentando algunas de las principales dificultades de los espectadores."},
            {value: "b", text: "Está haciendo que sus personajes demuestren cómo es una eternidad en una obra de teatro."},
            {value: "c", text: "Está dando un ejemplo de una tradicional escena inicial de una obra de teatro."},                
            {value: "d", text: "Está utilizando a los personajes para representar uno de sus propios problemas de creación."},
            {value: "NA", text: "No quiero responder a esta pregunta."}
          ],
          correct_answer: "d"
        },
        {text: "<b class='question-title'>Pregunta 4/8</b><br>¿Por qué Turai afirma “Soy dramaturgo. Ésa es mi maldición”?",
          name: "pa4",
          options: [
            {value: "a", text: "Le resulta complicado plantear las situaciones en la obra."},
            {value: "b", text: "Le implica un fastidio tener que escribir obras de teatro."},
            {value: "c", text: "Se siente esclavo de la profesión porque aún no la domina."},                
            {value: "d", text: "Considera que los personajes significan siempre un problema."},
            {value: "NA", text: "No quiero responder a esta pregunta."}
          ],
          correct_answer: "c",
        },
        {text: "<b class='question-title'>Pregunta 5/8</b><br>Luigi Pirandello es considerado una de las mayores influencias del autor de “La representación será la trampa”. Pirandello fue una figura fundamental en la renovación del teatro moderno en el siglo XX, caracterizado por centrarse en la reflexión sobre el propio arte y su validez como forma de representación y comunicación.<br>¿Qué aspecto del fragmento de la obra teatral leída muestra claramente esta influencia?",
          name: "pa5",
          options: [
            {value: "a", text: "La historia gira en torno a problemáticas de la clase alta italiana."},
            {value: "b", text: "Los personajes comentan el proceso de escritura de una obra de teatro."},
            {value: "c", text: "Las personalidades de Gál, Turai y Ádám se dan a conocer en sus diálogos."},                
            {value: "d", text: "Los personajes dialogan sobre sus problemas personales de comunicación."},
            {value: "NA", text: "No quiero responder a esta pregunta."}
          ],
          correct_answer: "b",
        },
        {text: `<b class='question-title'>Pregunta 6/8</b><br>¿Qué significa el texto en cursivas en el siguiente parlamento? 
            <dl><dt>GÁL y TURAI</dt> <dd><i>A la vez.</i>Y este joven...</dd></dl>`,
          name: "pa6",
          options: [
            {value: "a", text: "Señala el tipo de relación entre Gál y Turai en su vida profesional."},
            {value: "b", text: "Pone un énfasis en las palabras de los personajes en escena."},
            {value: "c", text: "Es un parlamento que dicen Gál y Turai al hablar con Ádám."},                
            {value: "d", text: "Es una acotación que indica las acciones de los personajes en escena."},
            {value: "NA", text: "No quiero responder a esta pregunta."}
          ],
          correct_answer: "d",
        },
        {text: "<b class='question-title'>Pregunta 7/8</b><br>Según lo que dicen los personajes, ¿qué estaban haciendo justo antes de que comience la obra de teatro?",
          name: "pa7",
          options: [
            {value: "a", text: "Acaban de cenar y de tomar champagne."},
            {value: "b", text: "Conversan en voz alta tras la puerta."},
            {value: "c", text: "Le hicieron a Ádám el frac y el esmoquin."},
            {value: "d", text: "Encienden la luz en el escenario."},
            {value: "NA", text: "No quiero responder a esta pregunta."}
          ],
          correct_answer: "a",
        },
        {text: "<b class='question-title'>Pregunta 8/8</b><br>Esta obra es un ejemplo de metaficción, un tipo de literatura cuyos temas e historias giran en torno a los mecanismos de la ficción y sus características. <br>¿Por qué crees que esta obra de teatro es metaficción?",
          name: "pa8",
          options: [
            {value: "a", text: "Los personajes comentan su condición y la de la dramaturgia."},
            {value: "b", text: "Los actores evalúan al autor de “La representación será la trampa”."},
            {value: "c", text: "Los personajes no son actores en una obra de teatro."},                
            {value: "d", text: "Los actores son asiduos espectadores del teatro de Molnár."},
            {value: "NA", text: "No quiero responder a esta pregunta."}
          ],
          correct_answer: "a",
        }
      ]
    },
    {title: 'Texto 2 - La democracia en Atenas',
      intro: `
        <p>Verás a continuación un fragmento de "Historia de la guerra del Peloponeso" del historiador griego Tucídides.</p>
        <p>En este caso tendrás que responder 7 preguntas sobre el contenido del texto.</p>
        <p>Por favor, lee atentamente el texto y las preguntas, y tómate tu tiempo en responder con la opción que a tu juicio consideres más correcta.</p>
        <div class="actions">
          <button type="button" class="button start_task">Siguiente</button>
        </div>
      `,
      text: `
      <h3>PARTE A</h3>
  <p>
  Tucídides fue un historiador y militar que vivió en el siglo V a. C, durante la época de la Grecia clásica. Nació en Atenas. Durante la guerra del Peloponeso (del 431 a. C. al 404 a. C.), entre Atenas y Esparta, estuvo al mando de una flota cuya misión era proteger la ciudad de Anfípolis, en Tracia. No consiguió llegar a la ciudad a tiempo. Ésta cayó en manos del general espartano, Brásidas, lo que condenó a Tucídides a veinte años de exilio. Esta circunstancia le dio la oportunidad de recoger información bastante completa de los dos bandos en conflicto y la posibilidad de investigar para su obra <i>Historia de la guerra del Peloponeso.</i> 
</p>
<p>
  Tucídides está considerado como uno de los grandes historiadores de la Antigüedad. Se centra más en las causas naturales y en la conducta de cada individuo que en el destino o en la intervención de los dioses para explicar la evolución de la historia. En su obra, los hechos no se presentan como meras anécdotas, sino que se explican tratando de descubrir los motivos que llevaron a los protagonistas a actuar del modo en que lo hicieron. El énfasis que Tucídides pone en la conducta de los individuos le lleva a veces a introducir discursos ficticios: éstos le ayudan a exponer las motivaciones de los personajes históricos. 
</p>
  <h3>PARTE B </h3>
<p>
  Tucídides atribuye al dirigente ateniense Pericles (siglo V a. C.) el siguiente discurso en honor de los soldados caídos en el primer año de la guerra del Peloponeso. 
 </p> 
    "Nuestro sistema de gobierno no copia las leyes de los estados vecinos; nosotros somos más un ejemplo para otros que imitadores de los demás. Nuestro sistema se denomina democracia, ya que el gobierno no depende de unos pocos, sino de una mayoría. Nuestras leyes garantizan iguales derechos para todos en las cuestiones privadas, mientras que el prestigio en la vida pública depende más de los méritos que de la clase social. 
    Tampoco la clase social impide a nadie llegar a ejercer cualquier cargo público (...). Y, al tiempo que no interferimos en las cuestiones privadas, respetamos la ley en los asuntos públicos. Obedecemos a quienes ponemos a desempeñar cargos públicos y obedecemos las leyes, en especial las dirigidas a la protección de los oprimidos y las leyes no escritas que supone una verdadera vergüenza infringir. 
    Además, nos hemos procurado muchos placeres para el espíritu. Los juegos y sacrificios que celebramos durante todo el año y la elegancia de nuestras casas particulares constituyen una fuente diaria de placer que nos ayuda a olvidar cualquier preocupación; mientras que los numerosos habitantes de la ciudad atraen a Atenas productos de todo el mundo, de modo que a los atenienses los frutos de otros pueblos les son tan familiares como los suyos propios. "
    <br><br>
    <i>Tucídides, Historia de la guerra del Peloponeso (adaptación) <i>`,
      questions: [
        {text: "<b class='question-title'>Pregunta 1/7</b><br>  Uno de los objetivos del discurso de la parte B era honrar a los soldados caídos en el primer año de la guerra del Peloponeso. <br>¿Cuál era OTRO de los objetivos de este discurso?",
          name: "pb1",
          options: [
            {value: "a", text: "Explicar las ventajas de la democracia ateniense."},
            {value: "b", text: "Honrar a los soldados muertos"},
            {value: "c", text: "Recoger información sobre el bando en conflicto."},                
            {value: "d", text: "Describir la guerra del Peloponeso."},
            {value: "NA", text: "No quiero responder a esta pregunta."}
          ],
          correct_answer: "a",
        },
        {text: "<b class='question-title'>Pregunta 2/7</b><br>¿Qué condenó a Tucídides al exilio?",
          name: "pb2",
          options: [
            {value: "a", text: "Que no pudiese lograr la victoria de los atenienses en Anfípolis."},
            {value: "b", text: "Que tomase el mando de una flota en Anfípolis."},
            {value: "c", text: "Que recogiese información de los dos bandos en conflicto."},
            {value: "d", text: "Que desertase de los atenienses para luchar con los espartanos."},
            {value: "NA", text: "No quiero responder a esta pregunta."}
          ],
          correct_answer: "a",
        },
        {text: "<b class='question-title'>Pregunta 3/7</b><br>¿Gracias a quién conocemos el discurso en honor a los soldados de la Parte B?",
          name: "pb3",
          options: [
            {value: "a", text: "Pericles."},
            {value: "b", text: "Tucídides."},
            {value: "c", text: "El historiador espartano."},
            {value: "d", text: "El dirigente de los soldados."},
            {value: "NA", text: "No quiero responder a esta pregunta."}
          ],
          correct_answer: "b",
        },
        {text: "<b class='question-title'>Pregunta 4/7</b><br>Según el texto, ¿qué diferenciaba a Tucídides de los demás historiadores de su época? ",
          name: "pb4",
          options: [
            {value: "a", text: "Escribía sobre los héroes de la guerra y la influencia de los dioses."},
            {value: "b", text: "Utilizaba anécdotas, más que meros hechos."},
            {value: "c", text: "Explicaba sucesos históricos haciendo referencia a sus causas sobrenaturales."},
            {value: "d", text: "Se centraba en lo que llevaba a las personas a actuar del modo en que lo hacían."},
            {value: "NA", text: "No quiero responder a esta pregunta."}
          ],
          correct_answer: "d",
        },
        {text: "<b class='question-title'>Pregunta 5/7</b><br>Fíjate en este fragmento del texto, que se encuentra casi al final de la Parte B: <p>«Además, nos hemos procurado muchos placeres para el espíritu. Los juegos y sacrificios que celebramos durante todo el año y la elegancia de nuestras casas particulares constituyen una fuente diaria de placer que nos hace olvidar cualquier preocupación.»</p> ¿Cuál de estas frases resume mejor esta parte del texto? ",
          name: "pb5",
          options: [
            {value: "a", text: "El sistema de gobierno de Atenas permite a cualquier persona elaborar leyes."},
            {value: "b", text: "La diversión y la belleza son parte de la buena vida que se puede tener en Atenas."},
            {value: "c", text: "Los atenienses viven rodeados de un lujo excesivo y no pueden tomarse la vida en serio."},
            {value: "d", text: "La vida pública y privada son consideradas como una misma cosa."},
            {value: "NA", text: "No quiero responder a esta pregunta."}
          ],
          correct_answer: "b",
        },
        {text: "<b class='question-title'>Pregunta 6/7</b><br>La parte A de <i>La democracia en Atenas</i> sirve para:",
          name: "pb6",
          options: [
            {value: "a", text: "Explicar por qué Tucídides se exilió."},
            {value: "b", text: "Brindar información contextual sobre Tucídides."},
            {value: "c", text: "Enumerar las razones por las cuales Tucídides cita a Pericles."},
            {value: "d", text: "Describir la época en la cual Tucídides ejerció su profesión."},
            {value: "NA", text: "No quiero responder a esta pregunta."}
          ],
          correct_answer: "b",
        },
       {text: "<b class='question-title'>Pregunta 7/7</b><br>¿Qué concepto de democracia se describe en el fragmento de Historia de la guerra del Peloponeso que se presenta en la parte B?",
          name: "pb7",
          options: [
            {value: "a", text: "Sistema basado en las leyes que regulan el ámbito privado y que favorecen la autonomía para el comercio exterior, así como para el ámbito público, espiritual y estético."},
            {value: "b", text: "Gobierno legalista que regula ámbitos públicos y privados en beneficio de cargos estatales, méritos sociales, así como usos y costumbres atenienses."},
            {value: "c", text: "Sistema basado en el poder de la mayoría, la igualdad de derechos, la obediencia a la Ley, la protección de los más desfavorecidos, el cuidado del espíritu y el intercambio con otros pueblos."},
            {value: "d", text: "Gobierno legalista y libertario que garantiza el derecho privado y favorece la ley pública que promueve el comercio exterior."},
            {value: "NA", text: "No quiero responder a esta pregunta."}
          ],
          correct_answer: "c",
        },
      ]
    },
  ],
}
