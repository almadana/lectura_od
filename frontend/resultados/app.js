const query = new URLSearchParams(window.location.search);
const sid = query.get('sid')||0;
const gid = query.get('gid')||"";
const bars_height = 20;
const bars_width = 300;

const words_thresholds               = [0.6, 0.8];
const autores_thresholds             = [0.6, 0.8];
const comprension_lectora_thresholds = [0.25, 0.6];

const messages = {
  words: [
    "Tu desempeño fue bajo en la prueba de <span class='emphasize'>vocabulario</span>.",
    "Te fue bien en la prueba de <span class='emphasize'>vocabulario</span>!",
    "Te fue muy bien en la prueba de <span class='emphasize'>vocabulario</span>!",
  ],
  autores: [
    "Tu desempeño fue bajo en la prueba de <span class='emphasize'>autores</span>.",
    "Te fue bien en la prueba de <span class='emphasize'>autores</span>!",
    "Te fue muy bien en la prueba de <span class='emphasize'>autores</span>!",
  ],
  comprension_lectora: [
    "Tu desempeño fue bajo en la prueba de <span class='emphasize'>comprensión lectora</span>.",
    "Te fue bien en la prueba de <span class='emphasize'>comprensión lectora</span>!",
    "Te fue muy bien en la prueba de <span class='emphasize'>comprensión lectora</span>!",
  ],
}

function label(size=1, color='red') {
  const max_size = bars_height;
  const width = bars_width;
  const height = max_size*size;

  const group = document.createElementNS('http://www.w3.org/2000/svg', 'g');
  group.setAttribute('width', width);
  group.setAttribute('height', height);

  const rect = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
  rect.setAttribute('x', '0');
  rect.setAttribute('y', '0');
  rect.setAttribute('width', width);
  rect.setAttribute('height', height);
  rect.setAttribute('strock', 'none');
  rect.setAttribute('fill', color);

  const label = document.createElementNS('http://www.w3.org/2000/svg', 'text');
  label.textContent = `${Math.round(size*100)}%`;
  label.setAttribute('x', width/2.0);
  label.setAttribute('y', height/2.0);
  label.setAttribute('text-anchor', 'middle');
  label.classList.add('label');

  group.appendChild(rect);
  group.appendChild(label);

  return group
}

function bar(size=1, color='red') {
  const max_size = bars_height;
  const width = size*bars_width;
//  const height = max_size*size;
  const height = bars_height;

  const group = document.createElementNS('http://www.w3.org/2000/svg', 'g');
  group.setAttribute('width', width);
  group.setAttribute('height', height);

  const rect = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
  rect.setAttribute('x', '0');
  rect.setAttribute('y', '0');
  rect.setAttribute('width', width);
  rect.setAttribute('height', height);
  rect.setAttribute('strock', 'none');
  rect.setAttribute('fill', color);

  const label = document.createElementNS('http://www.w3.org/2000/svg', 'text');
  label.textContent = `${Math.round(size*100)}%`;
  label.setAttribute('x', width/2.0);
  label.setAttribute('y', height/2.0+4);
  label.setAttribute('text-anchor', 'middle');
  label.classList.add('label');

  group.appendChild(rect);
  group.appendChild(label);

  return group
}

function bars(performance, thresholds) {
  const max_size = bars_height;
  const width = bars_width;
//  const width = bars_width*performance;
  const height = bars_height;

  const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  svg.setAttribute('viewBox', `0 0 ${width} ${bars_height}`);
  svg.setAttribute('version', '1.1');

  const group = document.createElementNS('http://www.w3.org/2000/svg', 'g');
  group.setAttribute('width', width);
  group.setAttribute('height', height);

  let color1;

  if (performance<=thresholds[0]) {
    color1 = `hsl(0, 50%, 70%)`;
  } else if (performance<=thresholds[1]) {
    color1 = `hsl(60, 50%, 70%)`;
  } else {
    color1 = `hsl(120, 50%, 70%)`;
  }

  const bar1 = bar(performance, color1);
  const height1 = bar1.getAttribute('height');
  const y1 = bars_height-height1;
//  bar1.setAttribute('transform', `translate(0,${y1})`);

  svg.appendChild(bar1);

  return svg
}

document.addEventListener('DOMContentLoaded', (evt) => {
  const _words = document.querySelector(".words .content");
  const _performance_words = document.querySelector(".performance_words");
  const _autores = document.querySelector(".autores .content");
  const _performance_autores = document.querySelector(".performance_autores");
  const _comprension_lectora = document.querySelector(".comprension_lectora .content");
  const _performance_comprension_lectora = document.querySelector(".performance_comprension_lectora");

  get_data(`datos_resultados?sid=${sid}`).then(response => {
    response.text().then(content=> {
      const data = JSON.parse(content);
      console.log(data);

      const words_performance = data['words_performance'];
      const words_bar = bars(words_performance, words_thresholds);
      words_thresholds.push(1);
      const words_level = words_thresholds.findIndex(x=>words_performance<=x)
      const words_message = messages['words'][words_level]

      _words.appendChild(words_bar);
      _performance_words.innerHTML= words_message;

      const autores_performance = data['autores_performance'];
      const autores_bar = bars(autores_performance, autores_thresholds);
      autores_thresholds.push(1);
      const autores_level = autores_thresholds.findIndex(x=>autores_performance<x)
      const autores_message = messages['autores'][autores_level]

      _autores.appendChild(autores_bar);
      _performance_autores.innerHTML = autores_message;

      const comprension_lectora_performance = data['lectura_performance'];
      const comprension_lectora_bar = bars(comprension_lectora_performance, comprension_lectora_thresholds);
      comprension_lectora_thresholds.push(1);
      const comprension_lectora_level = comprension_lectora_thresholds.findIndex(x=>comprension_lectora_performance<x)
      const comprension_lectora_message = messages['comprension_lectora'][comprension_lectora_level]

      _performance_comprension_lectora.innerHTML = comprension_lectora_message;
      _comprension_lectora.appendChild(comprension_lectora_bar);

      const global_performance = (comprension_lectora_performance + autores_performance + words_performance)/3;
      const _global_score = document.querySelector(".puntaje_global");
      _global_score.textContent = `${Math.round(global_performance*100)}%`;
    })
  })
})
