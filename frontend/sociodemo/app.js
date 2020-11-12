const query = new URLSearchParams(window.location.search);
const sid = query.get('sid')||0;
const gid = query.get('gid');

function append_ids(target) {
  const _sid = document.createElement("input");
  _sid.type = "hidden";
  _sid.name = "sid";
  _sid.value = sid;
  target.appendChild(_sid);

  const _gid = document.createElement("input");
  _gid.type = "hidden";
  _gid.name = "gid";
  _gid.value = gid;
  target.appendChild(_gid);
};

document.addEventListener('DOMContentLoaded', evt => {
  const _form = document.querySelector('form');

  append_ids(_form);

  _form.addEventListener('submit', evt => {
    evt.preventDefault();
    const target = event.target;
    const data = Object.fromEntries(new FormData(_form).entries());
    data['fecha_nacimiento'] = `${data['nacimiento_anio']}-${data['nacimiento_mes']}-${data['nacimiento_dia']}`;

    log_data('sociodemo', data);
    _form.innerHTML="";
    append_ids(_form);
    target.submit()
  })
})
