document.addEventListener('DOMContentLoaded', evt => {
  const url = new URL(window.location);
  const params = new URLSearchParams(url.search);

  const uid = params.get("uid") || rid();

  const _with_uid = document.querySelectorAll(".with_uid");
  for (let _link of _with_uid) {
    _link.href = _link.href + "?uid=" + uid;
  }
});
