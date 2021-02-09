const conditions = {
  'development': [
    {title: 'Texto 2 - La democracia en Atenas',
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
        {text: "<b class='question-title'>Pregunta 7/7</b><br>El fragmento de Historia de la guerra del Peloponeso que se presenta en la parte B permite observar que Tucídides:</p>",
          name: "pb7",
          options: [
            {value: "a", text: "Fue un militar que vivió durante la guerra del Peloponeso."},
            {value: "b", text: "Se centra en la intervención de los dioses para explicar la evolución de la Historia."},
            {value: "c", text: "Tuvo la oportunidad de recoger información bastante completa de los dos bandos en conflicto."},
            {value: "d", text: "Explica los hechos históricos analizando los intereses políticos, económicos y bélicos de los grupos de poder."},
            {value: "NA", text: "No quiero responder a esta pregunta."}
          ],
          correct_answer: "d",
        },
      ]
    }
  ],
  'testing': [
    {title: 'Texto 2 - La democracia en Atenas',
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
            {value: "c", text: "Atenas es el tema del discurso."},                
            {value: "d", text: "Desarrollar las causas de la derrota ateniense."}
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
          ],
          correct_answer: "a",
        },
        {text: "<b class='question-title'>Pregunta 3/7</b><br>¿Quién escribió el discurso de la Parte B?",
          name: "pb3",
          options: [
            {value: "a", text: "Pericles."},
            {value: "b", text: "Tucídides."},
            {value: "c", text: "El historiador espartano."},
            {value: "d", text: "Un guerrero ateniense."},
          ],
          correct_answer: "b",
        },
        {text: "<b class='question-title'>Pregunta 4/7</b><br>Según el texto, ¿qué diferenciaba a Tucídides de los demás historiadores de su época? ",
          name: "pb4",
          options: [
            {value: "a", text: "Escribía sobre personas corrientes, no sobre héroes."},
            {value: "b", text: "Utilizaba anécdotas, más que meros hechos."},
            {value: "c", text: "Explicaba sucesos históricos haciendo referencia a sus causas sobrenaturales."},
            {value: "d", text: "Se centraba en lo que llevaba a las personas a actuar del modo en que lo hacían."},
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
          ],
          correct_answer: "b",
        },
        {text: "<b class='question-title'>Pregunta 7/7</b><br>¿Cuál de las descripciones del estilo de Tucídides corresponde con el siguiente fragmento de <i>Historia de la guerra del Peloponeso?</i> <p>«Obedecemos a quienes ponemos a desempeñar cargos públicos y obedecemos las leyes, en especial las dirigidas a la protección de los oprimidos y las leyes no escritas que supone una verdadera vergüenza infringir.»</p>",
          name: "pb7",
          options: [
            {value: "a", text: "Tucídides fue un historiador y militar que vivió en el siglo V a. C, durante la época de la Grecia clásica."},
            {value: "b", text: "Se centra más en las causas naturales y en la conducta de cada individuo que en el destino o en la intervención de los dioses\n para explicar la evolución de la historia."},
            {value: "c", text: "Esta circunstancia le dio la oportunidad de recoger información bastante completa de los dos bandos en conflicto."},
            {value: "d", text: "En su obra, los hechos no se presentan como meras anécdotas, sino que se explican tratando de descubrir los motivos que llevaron\n  a los protagonistas a actuar del modo en que lo hicieron."},
          ],
          correct_answer: "d",
        },
      ]
    }
  ],
  'production': [
    {title: 'Texto 2 - La democracia en Atenas',
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
            {value: "c", text: "Atenas es el tema del discurso."},                
            {value: "d", text: "Desarrollar las causas de la derrota ateniense."},
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
        {text: "<b class='question-title'>Pregunta 3/7</b><br>¿Quién escribió el discurso de la Parte B?",
          name: "pb3",
          options: [
            {value: "a", text: "Pericles."},
            {value: "b", text: "Tucídides."},
            {value: "c", text: "El historiador espartano."},
            {value: "d", text: "Un guerrero ateniense."},
            {value: "NA", text: "No quiero responder a esta pregunta."}
          ],
          correct_answer: "b",
        },
        {text: "<b class='question-title'>Pregunta 4/7</b><br>Según el texto, ¿qué diferenciaba a Tucídides de los demás historiadores de su época? ",
          name: "pb4",
          options: [
            {value: "a", text: "Escribía sobre personas corrientes, no sobre héroes."},
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
        {text: "<b class='question-title'>Pregunta 7/7</b><br>¿Cuál de las descripciones del estilo de Tucídides corresponde con el siguiente fragmento de <i>Historia de la guerra del Peloponeso?</i> <p>«Obedecemos a quienes ponemos a desempeñar cargos públicos y obedecemos las leyes, en especial las dirigidas a la protección de los oprimidos y las leyes no escritas que supone una verdadera vergüenza infringir.»</p>",
          name: "pb7",
          options: [
            {value: "a", text: "Tucídides fue un historiador y militar que vivió en el siglo V a. C, durante la época de la Grecia clásica."},
            {value: "b", text: "Se centra más en las causas naturales y en la conducta de cada individuo que en el destino o en la intervención de los dioses\n para explicar la evolución de la historia."},
            {value: "c", text: "Esta circunstancia le dio la oportunidad de recoger información bastante completa de los dos bandos en conflicto."},
            {value: "d", text: "En su obra, los hechos no se presentan como meras anécdotas, sino que se explican tratando de descubrir los motivos que llevaron\n  a los protagonistas a actuar del modo en que lo hicieron."},
            {value: "NA", text: "No quiero responder a esta pregunta."}
          ],
          correct_answer: "d",
        },
      ]
    }
  ],
}
