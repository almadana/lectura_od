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
  const _excercise = document.querySelector(".excercise");
  let excercise_id = _excercise.dataset.excercise_id;
  let question_id = _excercise.dataset.question_id;

  const trial = conditions[environment][excercise_id];
  const question = trial.questions[question_id]

  const _question = document.querySelector(".excercise .question");
  if (question_id) {
    var next_question_id = parseInt(question_id) + 1;
  } else {
    var next_question_id = 0;
  }

  if (trial.questions[next_question_id]) {
    _question.innerHTML = trial.questions[next_question_id];
    _excercise.dataset.question_id = next_question_id;
  } else {
    next_excercise()
  }
}

document.addEventListener('DOMContentLoaded', (event) => {
  const _next_question = document.querySelector("#next_question");
  _next_question.addEventListener('click', next_question);

  next_excercise();
});
