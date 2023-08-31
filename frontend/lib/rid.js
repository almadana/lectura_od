function rid(size=32) {
  const buffer = new Uint8Array(size)
  window.crypto.getRandomValues(buffer)
  const rands = Array.from(buffer);

  //buffer is 8-bit array, so we get 2 hex numbers for each element,
  //so we need to slice it to the required size
  const hex = rands
    .map(num => num.toString(16))
    .join("")
    .slice(0,size)
  ;

  return hex
}

function random_int(min=0, max=9) {
  let interval = (max + 1) - min;
  return Math.floor(Math.random() * interval) + min;
}
