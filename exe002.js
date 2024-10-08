/* 
  Faça um programa para calcular o valor de uma viagem.

  Você terá 5 variáveis. Sendo elas: 
    1 - Preço do etanol;
    2 - Preço da gasolina;
    3 - O tipo de combustível que está no seu carro;
    4 - Gasto médio de combustível do carro por KM;
    5 - Distância em KM da viagem;

  Imprima no console.log o valor que será gasto para realizar esta viagem.
  */

let precoEtanol = 4.9;
let precoGasolina = 6.15;
let tipoCombustivel = 'etanol';
let mediaKmPorLitro = 12.5;
let kmViagem = 4000;

let litrosConsumidos = kmViagem / mediaKmPorLitro;

if(tipoCombustivel === 'etanol') {
  const valorGasto = litrosConsumidos * precoEtanol
  console.log(`O preço do combustível está R$ ${precoEtanol}, então para seu carro que faz ${mediaKmPorLitro} Km/litro, uma viagem de ${kmViagem} Km gastára em torno de R$ ${valorGasto.toFixed(2)}!`);
} else {
  const valorGasto = litrosConsumidos * precoGasolina;
  console.log(`O preço do combustível está R$ ${precoGasolina}, então para seu carro que faz ${mediaKmPorLitro} Km/litro, uma viagem de ${kmViagem} Km gastára em torno de R$ ${valorGasto.toFixed(2)}!`)
}
