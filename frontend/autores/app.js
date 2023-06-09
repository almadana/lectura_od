var timeline = [];
var key_yes = '83';
var key_no = '78';

var key_code_to_label = {'83': 's', '78': 'n'};

var trial_count = 0;

const query = new URLSearchParams(window.location.search);
const sid = query.get('sid')||0;
const gid = query.get('gid')||"";

function simulate_key(target, key) {
  const code = key.charCodeAt(0) - 32;
  document.body.dispatchEvent(new KeyboardEvent('keydown',{'key':key, 'keyCode': code}));
  document.body.dispatchEvent(new KeyboardEvent('keyup',{'key':key, 'keyCode': code}));
}

var welcome = {
  type: 'html-keyboard-response',
  stimulus: `<h1>Prueba de reconocimiento de autores</h1>
  <p class='instructions'>
  A continuación te aparecerá una lista de nombres, y tendrás que decidir si corresponden a autores.<br>
  Se considera autor a aquella persona que publicó al menos 1 libro, aunque no sea conocido principalmente por ello (puede ser periodista, músico, etc).
  <br>Para responder que <b>sí</b>, presiona la tecla <em>'s'</em> del teclado y para responder que <b>no</b>, la tecla <em>'n'</em>.
  </p>
  <p class='instructions'>
    Para comenzar con una prueba presiona la tecla <em>espacio</em>.
  </p>
  <p class='options'>
    <button class='option' type='button' onclick='simulate_key(this, "@");'>Continuar</button>
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

for (word of shuffle(autores[environment])) {
  var stimulus = {
    type: 'html-keyboard-response',
    stimulus: `
      <div class='stimuli_wrapper'>
        <div class='stimuli_word'>${word[0]}</div>
        <div class='options'>
          <button class='option left' type='button' onclick='simulate_key(this, "s");'>Es autor</button>
          <button class='option right' type='button' onclick='simulate_key(this, "n");'>No es autor</button>
        </div>
      </div>
    `,
    data: {sid: sid,gid: gid, target: word[0], es_autor: word[1], word_id: word[2]},
    choices: ['s', 'n'],
    on_finish: function() {
      var datalog = jsPsych.data.get().last(1).values()[0];
      datalog['trial_count'] = trial_count;
      trial_count++;
      datalog['key_label'] = key_code_to_label[datalog['key_press']];
      datalog['trial_type'] = "task";
      var score;
      if (
        (datalog['es_autor']==1 && datalog['key_label']=='s') || 
        (datalog['es_autor']!=1 && datalog['key_label']!='s')
      ) {
        score = 1
      } else {
        score = 0
      }
      datalog['score'] = score
      log_data('autores', datalog);
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
          <button class='option left ${last_trial[0].key_press==key_yes ? 'active' : ''}' type='button' onclick='simulate_key(this, "s");'>Es autor</button>
          <button class='option right ${last_trial[0].key_press==key_no ? 'active' : ''}' type='button' onclick='simulate_key(this, "n");'>No es autor</button>
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
          <button class='option left ${last_trial[0].key_press==key_yes ? 'active' : ''}' type='button' onclick='simulate_key(this, "s");'>Es autor</button>
          <button class='option right ${last_trial[0].key_press==key_no ? 'active' : ''}' type='button' onclick='simulate_key(this, "n");'>No es autor</button>
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
  stimulus: `<h1>¡Gracias!</h1>
  <p class='instructions'>
  </p>
  <p class='instructions next_task_wrapper'>
  <a class='next_task' href='${config[environment].frontend}/resultados/index.html?sid=${sid}&gid=${gid}'>Continuar</a>
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
