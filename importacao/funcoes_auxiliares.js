
const entradas = [30, 50, 10, 45, 23, 67, 28, 84, 92, 19, 55, 33];
let i = 0;

function gets() {
  const valor = entradas[i];
  i++
  return valor;
}

function print(texto) {
  console.log(texto);
}

module.exports = {gets, print};