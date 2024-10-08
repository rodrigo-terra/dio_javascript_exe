/* 
  Faça um programa para calcular o valor de uma viagem.

  Você terá 5 variáveis. Sendo elas: 
    1 - Preço do combustível;
    2 - Gasto médio de combustível do carro por KM;
    5 - Distância em KM da viagem;

  Imprima no console.log o valor que será gasto para realizar esta viagem.
*/

let valorCombustivel = 6.09;
let mediaKmPorLitro = 12.5;
let kmViagem = 4000;

let valorGasto = (kmViagem / mediaKmPorLitro) * valorCombustivel

console.log(`O preço do combustível está R$ ${valorCombustivel}, então para seu carro que faz ${mediaKmPorLitro} Km/litro, uma viagem de ${kmViagem} Km gastára em torno de R$ ${valorGasto.toFixed(2)}!`)