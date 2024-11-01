/*
  1 - Crie uma classe para representar carros.
    - Os carros possuem uma marca, uma cor e um gasto médio de combustível por Kilometro rodado.
    - Crie um método que dado a quantidade de quilômetros e o preço do combustível nos dê o valor gasto em reais para realizar este percurso.
*/

class Carros{
  marca;
  cor;
  gastoMedioPorKm;

  constructor(marca, cor, gastoMedioPorKm) {
    this.marca = marca;
    this.cor = cor;
    this.gastoMedioPorKm = gastoMedioPorKm;
  }

  calculoGastoDoPercurso(distanciaEmKm, precoDoCombustivel) {
    return distanciaEmKm * this.gastoMedioPorKm * precoDoCombustivel;
  }
}

const corsa = new Carros('Fiat', 'Dourado', 1/14);
const palio = new Carros('Fiat', 'Preto', 1/11)
console.log(corsa.calculoGastoDoPercurso(100, 5));
console.log(palio.calculoGastoDoPercurso(100, 5));