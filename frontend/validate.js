window.addEventListener('DOMContentLoaded', function(evt) {
  var _form = document.querySelector("form");
  const _subject_id = document.getElementById('subject_id');

  _subject_id.addEventListener('input', function(event) {
    _subject_id.setCustomValidity("");
  });

  _form.addEventListener('submit', function(event) {
    const _subject_id = document.getElementById('subject_id');
    var subject_id = _subject_id.value;

    var pattern = /^[0-9]+[AB][12]$/;
    var result = pattern.exec(subject_id);

    if (!result) {
      event.preventDefault();
      event.stopPropagation();
      _subject_id.setCustomValidity("Formato incorrecto. Debe ser: Numeros-A|B-1|2");
    }
//    _form.classList.add('was-validated');
  }, false);
});
