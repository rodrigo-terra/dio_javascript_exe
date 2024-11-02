/*
  2 - Crie uma classe para representar pessoas.
    - Para cada pessoa teremos os atributos nome, peso e altura;
    - As pessoas devem ter a capacidade de dizer o valor de seu IMC (IMC = peso / (altura * altura));
    Instancie uma pessoa chamada José que tenha 70kg de peso e 1,75 de altura e peça para José dizer seu IMC;
*/

class Pessoa {
  nome;
  peso;
  altura;

  constructor(nome, peso, altura) {
    this.nome = nome;
    this.peso = peso;
    this.altura = altura;
  }

  calcularImc() {
    return this.peso / (this.altura * this.altura);
  }

  classificarImc() {
    const imc = this.calcularImc();
    if(imc < 18.5) {
      return `Abaixo do peso!`;
      console.log("");
    } else if(imc >= 18.5 && imc < 25) {
      return `No peso normal!`;
      console.log("");
    } else if(imc >= 25 && imc <= 30) {
      return `Acima do peso!`;
      console.log("");
    } else if(imc >= 30 && imc < 40) {
      return `Obeso!`;
      console.log("");
    } else{
      return `Obesidade Grave!`;
      console.log("");
    }
  }
}

const jose = new Pessoa('José', 50, 1.75);
console.log(`Meu IMC é: ${jose.calcularImc()} estou ${jose.classificarImc()}`)
const rodrigo = new Pessoa('Rodrigo', 75, 1.80);
console.log(`Meu IMC é: ${rodrigo.calcularImc()} estou ${rodrigo.classificarImc()}`);

