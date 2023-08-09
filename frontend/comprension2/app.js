const [font_families, excercices] = get_conditions();

const font_family = [font_families[1]];
const trials = [excercices[1]];

let text_y = 0;
let question_y = 0;
var answers = {};

function goodbye() {
  const _excercise = document.querySelector(".excercise");
  const _exit = document.querySelector(".exit");
  _excercise.classList.add('hidden');
  _exit.classList.remove('hidden');
}

function show_intro() {
  const _excercise = document.querySelector(".excercise");

  if (_excercise.dataset.excercise_id) {
    var next_excercise_id = parseInt(_excercise.dataset.excercise_id) + 1;
  } else {
    var next_excercise_id = 0;
  }

  const trial = trials[next_excercise_id];

  if (!trial) {
    goodbye();
    return
  }

  render_intro(trial);

}

function next_excercise() {
  const _excercise = document.querySelector(".excercise");

  if (_excercise.dataset.excercise_id) {
    var next_excercise_id = parseInt(_excercise.dataset.excercise_id) + 1;
  } else {
    var next_excercise_id = 0;
  }

  const trial = trials[next_excercise_id];

  if (!trial) {
    goodbye();
    return
  }

  _excercise.dataset.excercise_id = next_excercise_id;
  delete _excercise.dataset.question_id;

  _excercise.classList.add(font_family);

  const _title = document.querySelector(".excercise .title");
  _title.innerHTML = trial.title;

  const _text = document.querySelector(".excercise .text");
  _text.innerHTML = trial.text;

  render_question(0);
}

function jump_question(jump) {
  console.log(answers);
  const _answer = document.querySelector(".excercise .answer");
  const _current_answer = _answer.querySelector(":checked");

  if (!_current_answer) {
    const _options = _answer.querySelectorAll("input");
    _options.forEach(_option => _option.setAttribute('required', 'on'))
    return
  }

  const _excercise = document.querySelector(".excercise");
  const excercise_id = _excercise.dataset.excercise_id;
  const question_id = _excercise.dataset.question_id;
  const next_question_id = parseInt(question_id) + jump;
  const _prev_question = document.querySelector("#prev_question");

  const trial = conditions[environment][excercise_id];
  const current_question = trial.questions[question_id];

  const answer_value = _current_answer.value;
  const data = {sid: sid, gid: gid, question: current_question.name, answer: answer_value, correct_answer: _answer.dataset.correct_answer}
  console.log(data);
  answers[current_question.name] = answer_value;
  log_data('comprension', data);


  if (next_question_id<=0) {
    _prev_question.disabled = true;
  } else {
    _prev_question.disabled = false;
  }

  if (next_question_id>=trial.questions.length) {
    next_excercise();
    return
  }

  render_question(next_question_id);
}

function render_intro(trial) {
  const _excercise = document.querySelector(".excercise");
  const _intro = document.querySelector(".intro");
  _intro.innerHTML = trial.intro;

  const _start_task = document.querySelector(".intro .start_task");
  _start_task.addEventListener('click', evt=> {
    _intro.classList.add("hidden");
    _excercise.classList.remove("hidden");
    next_excercise();
  });
}

function render_question(question_id) {
  const _answer = document.querySelector(".excercise .answer");
  const _question_body = document.querySelector(".excercise .question .body");
  const _excercise = document.querySelector(".excercise");
  const excercise_id = _excercise.dataset.excercise_id;
  const trial = conditions[environment][excercise_id];
  const question = trial.questions[question_id];

  _answer.dataset.correct_answer = question.correct_answer;
  _answer.dataset.question = question.name;
  _answer.innerHTML = '';
  _question_body.innerHTML = question.text;

  for (let option of question.options) {
    let _option_container = document.createElement("div");
    let _label = document.createElement("span");
    _label.textContent = option.text;
    let _option = document.createElement("input");
    _option.name = question.name;
    _option.type = "radio";
    _option.value = option.value;
    _option.checked = option.value==answers[question.name];

    _option_container.appendChild(_option);
    _option_container.appendChild(_label);
    _answer.appendChild(_option_container);
  }

  _excercise.dataset.question_id = question_id;
}

function next_question() {
  jump_question(1);
}

function prev_question() {
  jump_question(-1);
}

function welcome() {
  const _welcome = document.querySelector(".welcome");
  const _show_intro = document.querySelector(".welcome .show_intro");
  _show_intro.addEventListener('click', evt=> {
    _welcome.classList.add("hidden");
    show_intro();
  });
}

function toggle_question(evt) {
  const is_short_question = evt.currentTarget.classList.contains("short_question");
  const is_long_question = evt.currentTarget.classList.contains("long_question");
  const y_position = window.scrollY;

  evt.currentTarget.classList.toggle("long_question");
  evt.currentTarget.classList.toggle("short_question");

  if (is_short_question) {
    text_y = y_position;
    window.scroll(0, question_y);
  }
  if (is_long_question) {
    question_y = y_position;
    window.scroll(0, text_y);
  }
}

document.addEventListener('DOMContentLoaded', (evt) => {
  const _excercise = document.querySelector(".excercise");
  _excercise.addEventListener('toggle_question', toggle_question);

  const _next_question = document.querySelector("#next_question");
  _next_question.addEventListener('click', next_question);

  const _prev_question = document.querySelector("#prev_question");
  _prev_question.addEventListener('click', prev_question);

  const _show_question = document.querySelector("#show_question");
  _show_question.addEventListener('click', evt => evt.target.dispatchEvent(new CustomEvent("toggle_question", {bubbles: true})));

  const _hide_question = document.querySelector("#hide_question");
  _hide_question.addEventListener('click', evt => evt.target.dispatchEvent(new CustomEvent("toggle_question", {bubbles: true})));

  const _button_resultados = document.querySelector(".button_resultados");
  _button_resultados.href = `${_button_resultados.href}?sid=${sid}&gid=${gid}`

  welcome();
});
