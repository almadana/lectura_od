var timeline = [];
var key_yes = '83';
var key_no = '78';

var key_code_to_label = {'83': 's', '78': 'n'};

var trial_count = 0;

const query = new URLSearchParams(window.location.search);
const sid = query.get('sid')||0;
const gid = query.get('gid');

function simulate_key(target, key) {
  console.log(target);
  console.log("simulating key ", key);
  target.dispatchEvent(new KeyboardEvent('keypress',{'key':key}));
}

var welcome = {
  type: 'html-keyboard-response',
  stimulus: `<h1>Prueba de vocabulario</h1>
  <p class='instructions'>
  A continuación te aparecerá una lista de secuencias de letras, y tendrás que decidir si corresponden a palabras del español o no. Para responder que <b>sí</b>, presiona la tecla <em>'s'</em> del teclado y para responder que <b>no</b>, la tecla <em>'n'</em>.
  </p>
  <p class='instructions'>
  Para comenzar con una prueba, presiona la tecla <em>espacio</em>.
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
for (word of words_training[environment]) {
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
    data: {sid: sid, gid: gid, correct_response: word[2], target: word[1], word_id: word[0]},
    choices: ['s', 'n'],
    on_finish: function() {
      var datalog = jsPsych.data.get().last(1).values()[0];
      datalog['trial_count'] = trial_count;
      trial_count++;
      datalog['key_label'] = key_code_to_label[datalog['key_press']];
      datalog['trial_type'] = "practice";
      var score;
      if (
        (datalog['correct_response']=='NW' && datalog['key_label']=='n') || 
        (datalog['correct_response']!='NW' && datalog['key_label']!='n')
      ) {
        score = 1
      } else {
        score = 0
      }
      datalog['score'] = score
      log_data('words', datalog);
    }
  }

  timeline.push(stimulus);

  var feedback = {
    type: 'html-keyboard-response',
    stimulus: function() {
      var last_trial = jsPsych.data.get().last(1).values();
      return `
      <div class='stimuli_wrapper'>
        <div class='stimuli_word'>${last_trial[0].target}</div>
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
        <div class='stimuli_word inactive'>${last_trial[0].target}</div>
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

//for (word of shuffle(words_training)) {
for (word of shuffle(words[environment])) {
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
    data: {sid: sid, gid: gid, correct_response: word[2], target: word[1], word_id: word[0]},
    choices: ['s', 'n'],
    on_finish: function() {
      var datalog = jsPsych.data.get().last(1).values()[0];
      datalog['trial_count'] = trial_count;
      trial_count++;
      datalog['key_label'] = key_code_to_label[datalog['key_press']];
      datalog['trial_type'] = "task";
      var score;
      if (
        (datalog['correct_response']=='NW' && datalog['key_label']=='n') || 
        (datalog['correct_response']!='NW' && datalog['key_label']!='n')
      ) {
        score = 1
      } else {
        score = 0
      }
      datalog['score'] = score
      log_data('words', datalog);
    }
  }

  timeline.push(stimulus);

  var feedback = {
    type: 'html-keyboard-response',
    stimulus: function() {
      var last_trial = jsPsych.data.get().last(1).values();
      return `
      <div class='stimuli_wrapper'>
        <div class='stimuli_word'>${last_trial[0].target}</div>
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
        <div class='stimuli_word inactive'>${last_trial[0].target}</div>
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
  stimulus: `<h1>Muy bien!</h1>
  <p class='instructions next_task_wrapper'>
  <a class='next_task' href='${config[environment].frontend}/comprension2/index.html?sid=${sid}&gid=${gid}'>Continuar</a>
  </p>
  `,
  choices: jsPsych.NO_KEYS
}

timeline.push(goodbye);

jsPsych.init({
  timeline: timeline,
  on_finish: function() {
    var all_data = jsPsych.data.get().ignore('stimulus');
  }
})

