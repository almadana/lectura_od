const conditions = {
  'development': [
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
            {value: "a", text: "Está mostrando el modo en que cada personaje va a resolver sus propios problemas."},
            {value: "b", text: "Está haciendo que sus personajes demuestren cómo es una eternidad en una obra de teatro."},
            {value: "c", text: "Está dando un ejemplo de una típica y tradicional escena inicial de una obra de teatro."},                
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
        {text: "<b class='question-title'>Pregunta 5/8</b><br>¿Qué frase describe mejor una de las principales dificultades al leer esta obra teatral? ",
          name: "pa5",
          options: [
            {value: "a", text: "Identificar las acciones que se insertan en los parlamentos de cada uno de los personajes."},
            {value: "b", text: "Entender las referencias al proceso de escritura de una obra de teatro."},
            {value: "c", text: "Diferenciar las ocupaciones y las personalidades de Gál, Turai y Ádám."},                
            {value: "d", text: "Distinguir entre los personajes y los personajes que éstos interpretan en la obra de Turai."},
            {value: "NA", text: "No quiero responder a esta pregunta."}
          ],
          correct_answer: "d",
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
        {text: "<b class='question-title'>Pregunta 7/8</b><br>¿Qué estaban haciendo los personajes de la obra de teatro justo antes de que se levantase el telón? ",
          name: "pa7",
          options: [
            {value: "a", text: "Acaban de cenar y de tomar champagne."},
            {value: "b", text: "Conversan en voz alta tras la puerta."},
            {value: "c", text: "Le hicieron a Ádám el frac y el esmoquin."},
            {value: "d", text: "Se preparan para salir al escenario."},
            {value: "NA", text: "No quiero responder a esta pregunta."}
          ],
          correct_answer: "a",
        },
        {text: "<b class='question-title'>Pregunta 8/8</b><br>La metanarrativa es un tipo de literatura en el que un personaje o grupo de personajes son autoconscientes de su naturaleza. El narrador o los personajes sistemáticamente llaman la atención sobre su condición con el fin de plantear preguntas acerca de la relación entre la ficción y la realidad. <br>¿Crees que esta obra de teatro es un ejemplo de este tipo de ficción?",
          name: "pa8",
          options: [
            {value: "a", text: "No, los personajes están vinculados con el teatro pero no tienen conciencia de su condición."},
            {value: "b", text: "Sí, los actores reconocen su naturaleza en cada intervención."},
            {value: "c", text: "No, los personajes no son actores en una obra de teatro."},                
            {value: "d", text: "Sí, los actores son personajes en una obra de teatro y se dedican al teatro."},
            {value: "NA", text: "No quiero responder a esta pregunta."}
          ],
          correct_answer: "a",
        }
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
            {value: "d", text: "Adám."}
          ],
          correct_answer: "d",
        },
        {text: '<b class="question-title">Pregunta 2/8</b><br>  “Es una eternidad; a veces pasa hasta un cuarto de hora (...)”. <br>Según Turai, ¿por qué un cuarto de hora es “una eternidad”? ',
          name: "pa2",
          options: [
            {value: "a", text: "Es mucho tiempo para esperar a que el público se quede quieto en un teatro abarrotado."},
            {value: "b", text: "Parece que se tarda un siglo en aclarar la situación al comienzo de una obra de teatro."},
            {value: "c", text: "Siempre parece que a un dramaturgo le lleva mucho tiempo escribir el comienzo de una obra de teatro."},                
            {value: "d", text: "Parece que el tiempo avanza lentamente cuando ocurre un suceso importante en una obra de teatro."}
          ],
          correct_answer: "b"
        },
        {text: "<b class='question-title'>Pregunta 3/8</b><br>En general, ¿qué está haciendo el dramaturgo Molnár en este fragmento?",
          name: "pa3",
          options: [
            {value: "a", text: "Está mostrando el modo en que cada personaje va a resolver sus propios problemas."},
            {value: "b", text: "Está haciendo que sus personajes demuestren cómo es una eternidad en una obra de teatro."},
            {value: "c", text: "Está dando un ejemplo de una típica y tradicional escena inicial de una obra de teatro."},                
            {value: "d", text: "Está utilizando a los personajes para representar uno de sus propios problemas de creación."}
          ],
          correct_answer: "d"
        },
        {text: "<b class='question-title'>Pregunta 4/8</b><br>¿Por qué Turai afirma “Soy dramaturgo. Ésa es mi maldición”?",
          name: "pa4",
          options: [
            {value: "a", text: "Le resulta complicado plantear las situaciones en la obra."},
            {value: "b", text: "Le implica un fastidio tener que escribir obras de teatro."},
            {value: "c", text: "Se siente esclavo de la profesión porque aún no la domina."},                
            {value: "d", text: "Considera que los personajes significan siempre un problema."}
          ],
          correct_answer: "c",
        },
        {text: "<b class='question-title'>Pregunta 5/8</b><br>¿Qué frase describe mejor una de las principales dificultades al leer esta obra teatral? ",
          name: "pa5",
          options: [
            {value: "a", text: "Identificar las acciones que se insertan en los parlamentos de cada uno de los personajes."},
            {value: "b", text: "Entender las referencias al proceso de escritura de una obra de teatro."},
            {value: "c", text: "Diferenciar las ocupaciones y las personalidades de Gál, Turai y Ádám."},                
            {value: "d", text: "Distinguir entre los personajes y los personajes que éstos interpretan en la obra de Turai."}
          ],
          correct_answer: "d",
        },
        {text: `<b class='question-title'>Pregunta 6/8</b><br>¿Qué significa el texto en cursivas en el siguiente parlamento? 
            <dl><dt>GÁL y TURAI</dt> <dd><i>A la vez.</i>Y este joven...</dd></dl>`,
          name: "pa6",
          options: [
            {value: "a", text: "Señala el tipo de relación entre Gál y Turai en su vida profesional."},
            {value: "b", text: "Pone un énfasis en las palabras de los personajes en escena."},
            {value: "c", text: "Es un parlamento que dicen Gál y Turai al hablar con Ádám."},                
            {value: "d", text: "Es una acotación que indica las acciones de los personajes en escena."}
          ],
          correct_answer: "d",
        },
        {text: "<b class='question-title'>Pregunta 7/8</b><br>¿Qué estaban haciendo los personajes de la obra de teatro justo antes de que se levantase el telón? ",
          name: "pa7",
          options: [
            {value: "a", text: "Acaban de cenar y de tomar champagne."},
            {value: "b", text: "Conversan en voz alta tras la puerta."},
            {value: "c", text: "Le hicieron a Ádám el frac y el esmoquin."},
            {value: "d", text: "Se preparan para salir al escenario."}
          ],
          correct_answer: "a",
        },
        {text: "<b class='question-title'>Pregunta 8/8</b><br>La metanarrativa es un tipo de literatura en el que un personaje o grupo de personajes son autoconscientes de su naturaleza. El narrador o los personajes sistemáticamente llaman la atención sobre su condición con el fin de plantear preguntas acerca de la relación entre la ficción y la realidad. <br>¿Crees que esta obra de teatro es un ejemplo de este tipo de ficción?",
          name: "pa8",
          options: [
            {value: "a", text: "No, los personajes están vinculados con el teatro pero no tienen conciencia de su condición."},
            {value: "b", text: "Sí, los actores reconocen su naturaleza en cada intervención."},
            {value: "c", text: "No, los personajes no son actores en una obra de teatro."},                
            {value: "d", text: "Sí, los actores son personajes en una obra de teatro y se dedican al teatro."}
          ],
          correct_answer: "a",
        }
      ]
    },
  ],
  'production': [
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
            {value: "a", text: "Está mostrando el modo en que cada personaje va a resolver sus propios problemas."},
            {value: "b", text: "Está haciendo que sus personajes demuestren cómo es una eternidad en una obra de teatro."},
            {value: "c", text: "Está dando un ejemplo de una típica y tradicional escena inicial de una obra de teatro."},                
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
        {text: "<b class='question-title'>Pregunta 5/8</b><br>¿Qué frase describe mejor una de las principales dificultades al leer esta obra teatral? ",
          name: "pa5",
          options: [
            {value: "a", text: "Identificar las acciones que se insertan en los parlamentos de cada uno de los personajes."},
            {value: "b", text: "Entender las referencias al proceso de escritura de una obra de teatro."},
            {value: "c", text: "Diferenciar las ocupaciones y las personalidades de Gál, Turai y Ádám."},                
            {value: "d", text: "Distinguir entre los personajes y los personajes que éstos interpretan en la obra de Turai."},
            {value: "NA", text: "No quiero responder a esta pregunta."}
          ],
          correct_answer: "d",
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
        {text: "<b class='question-title'>Pregunta 7/8</b><br>¿Qué estaban haciendo los personajes de la obra de teatro justo antes de que se levantase el telón? ",
          name: "pa7",
          options: [
            {value: "a", text: "Acaban de cenar y de tomar champagne."},
            {value: "b", text: "Conversan en voz alta tras la puerta."},
            {value: "c", text: "Le hicieron a Ádám el frac y el esmoquin."},
            {value: "d", text: "Se preparan para salir al escenario."},
            {value: "NA", text: "No quiero responder a esta pregunta."}
          ],
          correct_answer: "a",
        },
        {text: "<b class='question-title'>Pregunta 8/8</b><br>La metanarrativa es un tipo de literatura en el que un personaje o grupo de personajes son autoconscientes de su naturaleza. El narrador o los personajes sistemáticamente llaman la atención sobre su condición con el fin de plantear preguntas acerca de la relación entre la ficción y la realidad. <br>¿Crees que esta obra de teatro es un ejemplo de este tipo de ficción?",
          name: "pa8",
          options: [
            {value: "a", text: "No, los personajes están vinculados con el teatro pero no tienen conciencia de su condición."},
            {value: "b", text: "Sí, los actores reconocen su naturaleza en cada intervención."},
            {value: "c", text: "No, los personajes no son actores en una obra de teatro."},                
            {value: "d", text: "Sí, los actores son personajes en una obra de teatro y se dedican al teatro."},
            {value: "NA", text: "No quiero responder a esta pregunta."}
          ],
          correct_answer: "a",
        }
      ]
    },
  ],
}
