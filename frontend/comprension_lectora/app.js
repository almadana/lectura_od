const query = new URLSearchParams(window.location.search);
const sid = query.get('sid')||0;
const gid = query.get('gid');

function goodbye() {
  const _excercise = document.querySelector(".excercise");
  const _exit = document.querySelector(".exit");
  _excercise.classList.add('hidden');
  _exit.classList.remove('hidden');
}

function next_excercise() {
  const _excercise = document.querySelector(".excercise");

  if (_excercise.dataset.excercise_id) {
    var next_excercise_id = parseInt(_excercise.dataset.excercise_id) + 1;
  } else {
    var next_excercise_id = 0;
  }

  const trial = conditions[environment][next_excercise_id];

  if (!trial) {
    goodbye();
    return
  }

  _excercise.dataset.excercise_id = next_excercise_id;
  delete _excercise.dataset.question_id;

  const _title = document.querySelector(".excercise .title");
  _title.innerHTML = trial.title;

  const _text = document.querySelector(".excercise .text");
  _text.innerHTML = trial.text;

  next_question()
}

function next_question() {
  const _question = document.querySelector(".excercise .question");
  const _question_body = document.querySelector(".excercise .question .body");
  const _answer = document.querySelector(".excercise .answer");
  const data = {sid: sid, gid: gid, question: _answer.name, answer: _answer.value}

  log_data('comprension', data);

  const _excercise = document.querySelector(".excercise");
  let excercise_id = _excercise.dataset.excercise_id;
  let question_id = _excercise.dataset.question_id;

  const trial = conditions[environment][excercise_id];
  //  const question = trial.questions[question_id]

  if (question_id) {
    var next_question_id = parseInt(question_id) + 1;
  } else {
    var next_question_id = 0;
  }

  if (trial.questions[next_question_id]) {
    const question = trial.questions[next_question_id];
    _answer.name = question.name;
    _answer.innerHTML = '';
    _question_body.innerHTML = question.text;

    let _option = document.createElement("option");
    _option.value = "";
    _option.textContent = "";
    _answer.appendChild(_option);

    for (let option of question.options) {
      let _option = document.createElement("option");
      _option.value = option.value;
      _option.textContent = option.text;
      _answer.appendChild(_option);
    }
    _excercise.dataset.question_id = next_question_id;
  } else {
    next_excercise()
  }
}

function welcome() {
  const _welcome = document.querySelector(".welcome");
  const _excercise = document.querySelector(".excercise");
  const _start_task = document.querySelector(".welcome .start_task");
  _start_task.addEventListener('click', evt=> {
    _welcome.classList.add("hidden");
    _excercise.classList.remove("hidden");
    next_excercise();
  });
}

document.addEventListener('DOMContentLoaded', (event) => {
  const _next_question = document.querySelector("#next_question");
  _next_question.addEventListener('click', next_question);

//  const _prev_question = document.querySelector("#prev_question");
//  _prev_question.addEventListener('click', prev_question);

  welcome();
});
