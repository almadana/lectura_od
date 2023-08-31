const url = new URL(window.location);
const params = new URLSearchParams(url.search);

const sid = params.get("sid") || rhex(32);
const gid = params.get("gid") || rint(4);

document.addEventListener('DOMContentLoaded', evt => {
  const _with_uid = document.querySelectorAll(".with_uid");
  for (let _link of _with_uid) {
    _link.href = _link.href + `?sid=${sid}&gid=${gid}`;
  }
});

