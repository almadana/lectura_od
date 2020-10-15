document.addEventListener('DOMContentLoaded', evt => {
  const url = new URL(window.location);
  const params = new URLSearchParams(url.search);

  const sid = params.get("sid") || rid();
  const gid = params.get("gid") || "";

  const _with_uid = document.querySelectorAll(".with_uid");
  for (let _link of _with_uid) {
    _link.href = _link.href + `?sid=${sid}&gid=${gid}`;
  }
});
