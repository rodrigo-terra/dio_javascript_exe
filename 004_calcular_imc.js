/* 
  O IMC - Indice de Massa Corporal é um critério da Organização Mundial da Saúde para dar uma indicação sobre a condição de peso de uma pessoa adulta.

  Fórmula do IMC:
  IMC = peso / (altura * altura)

  Elabore um algorítmo que dado o peso e altura de um adulto mostre sua condição de acordo com a tabela abaixo.

  IMC em adultos. Condições:
    - Abaixo de 18.5 abaixo do peso;
    - Entre 18.5 e 25 peso normal;
    - Entre 25 e 30 acima do peso;
    - Entre 30 e 40 obeso;
    - Acima de 40 obesidade grave;
*/

let peso = 75;
let altura = 1.8;

let imc = peso / Math.pow(altura, 2);
console.log("");
console.log(`IMC: ${imc.toFixed(2)}`);
console.log("");

if(imc < 18.5) {
  console.log(`Abaixo do peso!`);
  console.log("");
} else if(imc >= 18.5 && imc < 25) {
  console.log(`Peso normal!`);
  console.log("");
} else if(imc >= 25 && imc <= 30) {
  console.log(`Acima do peso!`);
  console.log("");
} else if(imc >= 30 && imc < 40) {
  console.log(`Obeso!`);
  console.log("");
} else{
  console.log(`Obesidade Grave!`);
  console.log("");
}