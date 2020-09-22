window.addEventListener('DOMContentLoaded', function(evt) {
  const query = new URLSearchParams(window.location.search);
  const subject_id = query.get('subject_id')||0;

  const _subject_id = document.getElementById('subject_id');
  _subject_id.value = subject_id;
});
