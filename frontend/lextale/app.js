var timeline = [];
var key_yes = '83';
var key_no = '78';

const query = new URLSearchParams(window.location.search);
const params = query.get('sid');

function simulate_key(target, key) {
  console.log(target);
  console.log("simulating key ", key);
  target.dispatchEvent(new KeyboardEvent('keypress',{'key':key}));
}

var welcome = {
  type: 'html-keyboard-response',
  stimulus: `<h1>Hola</h1>
  <p class='instructions'>
  A continuación te aparecerá una lista de secuencias de letras, y tendrás que decidir si corresponden a palabras del español o no. Para responder que si, presiona la tecla <em>'s'</em> del teclado, y para responder que no la tecla <em>'n'</em>
  </p>
  <p class='instructions'>
  Para comenzar con una prueba presiona la tecla <em>espacio</em>
  </p>
  `,
  choices: ['space'],
  data: {training: true}
}

timeline.push(welcome);

var welcome_blank = {
  type: 'html-keyboard-response',
  stimulus: '',
  choices: jsPsych.NO_KEYS,
  trial_duration: 2000,
}

timeline.push(welcome_blank);

for (word of words_training) {
  var stimulus = {
    type: 'html-keyboard-response',
    stimulus: `
      <div class='stimuli_wrapper'>
        <div class='stimuli_word'>${word[1]}</div>
        <div class='options'>
           <button class='option left' type='button' onclick='simulate_key(this, "s");'>Es palabra</button>
          <button class='option right' type='button' onclick='simulate_key(this, "n");'>No es palabra</button>
        </div>
      </div>
    `,
    data: {correct_response: word[2], string: word[1]},
    choices: ['s', 'n'],
  }

  timeline.push(stimulus);

  var feedback = {
    type: 'html-keyboard-response',
    stimulus: function() {
      var last_trial = jsPsych.data.get().last(1).values();
      return `
      <div class='stimuli_wrapper'>
        <div class='stimuli_word'>${last_trial[0].string}</div>
        <div class='options'>
          <button class='option left ${last_trial[0].key_press==key_yes ? 'active' : ''}' type='button' onclick='simulate_key(this, "s");'>Es palabra</button>
          <button class='option right ${last_trial[0].key_press==key_no ? 'active' : ''}' type='button' onclick='simulate_key(this, "n");'>No es palabra</button>
        </div>
      </div>
      `
    },
    choices: jsPsych.NO_KEYS,
    trial_duration: 300,
  }

  timeline.push(feedback);

  var more_feedback = {
    type: 'html-keyboard-response',
    stimulus: function() {
      var last_trial = jsPsych.data.get().last(2).values();
      return `
      <div class='stimuli_wrapper'>
        <div class='stimuli_word inactive'>${last_trial[0].string}</div>
        <div class='options'>
          <button class='option left ${last_trial[0].key_press==key_yes ? 'active' : ''}' type='button' onclick='simulate_key(this, "s");'>Es palabra</button>
          <button class='option right ${last_trial[0].key_press==key_no ? 'active' : ''}' type='button' onclick='simulate_key(this, "n");'>No es palabra</button>
        </div>
      </div>
      `
    },
    choices: jsPsych.NO_KEYS,
    trial_duration: 1000,
  }

  timeline.push(more_feedback);
}

var after_training = {
  type: 'html-keyboard-response',
  stimulus: `
  <p class='instructions'>
  Para comenzar con la tarea presiona <em>espacio</em>
  </p>
  `,
  choices: ['space']
}

timeline.push(after_training);

var after_training_blank = {
  type: 'html-keyboard-response',
  stimulus: '',
  choices: jsPsych.NO_KEYS,
  trial_duration: 2000,
}

timeline.push(after_training_blank);

for (word of shuffle(words)) {
  var stimulus = {
    type: 'html-keyboard-response',
    stimulus: `
      <div class='stimuli_wrapper'>
        <div class='stimuli_word'>${word[1]}</div>
        <div class='options'>
           <button class='option left' type='button' onclick='simulate_key(this, "s");'>Es palabra</button>
          <button class='option right' type='button' onclick='simulate_key(this, "n");'>No es palabra</button>
        </div>
      </div>
    `,
    data: {correct_response: word[2], string: word[1]},
    choices: ['s', 'n'],
    on_finish: function() {
      log_data(jsPsych.data.get().last(1).values()[0]);
    }
  }

  timeline.push(stimulus);

  var feedback = {
    type: 'html-keyboard-response',
    stimulus: function() {
      var last_trial = jsPsych.data.get().last(1).values();
      return `
      <div class='stimuli_wrapper'>
        <div class='stimuli_word'>${last_trial[0].string}</div>
        <div class='options'>
          <button class='option left ${last_trial[0].key_press==key_yes ? 'active' : ''}' type='button' onclick='simulate_key(this, "s");'>Es palabra</button>
          <button class='option right ${last_trial[0].key_press==key_no ? 'active' : ''}' type='button' onclick='simulate_key(this, "n");'>No es palabra</button>
        </div>
      </div>
      `
    },
    choices: jsPsych.NO_KEYS,
    trial_duration: 300,
  }

  timeline.push(feedback);

  var more_feedback = {
    type: 'html-keyboard-response',
    stimulus: function() {
      var last_trial = jsPsych.data.get().last(2).values();
      return `
      <div class='stimuli_wrapper'>
        <div class='stimuli_word inactive'>${last_trial[0].string}</div>
        <div class='options'>
          <button class='option left ${last_trial[0].key_press==key_yes ? 'active' : ''}' type='button' onclick='simulate_key(this, "s");'>Es palabra</button>
          <button class='option right ${last_trial[0].key_press==key_no ? 'active' : ''}' type='button' onclick='simulate_key(this, "n");'>No es palabra</button>
        </div>
      </div>
      `
    },
    choices: jsPsych.NO_KEYS,
    trial_duration: 1000,
  }

  timeline.push(more_feedback);
}

var goodbye = {
  type: 'html-keyboard-response',
  stimulus: `<h1>Gracias!</h1>
  <p class='instructions'>
  Espera instrucciones del investigador antes de continuar.
  </p>
  <p class='instructions next_task_wrapper'>
  <a class='next_task' href='http://digital.psico.edu.uy/'>Continuar</raven>
  </p>
  `,
  choices: ['space'],
}

timeline.push(goodbye);

jsPsych.init({
  timeline: timeline,
  on_finish: function() {
    var all_data = jsPsych.data.get().ignore('stimulus');
  }
})

