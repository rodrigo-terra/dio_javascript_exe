
function calcularImc(peso, altura) {
  return peso / Math.pow(altura, 2);
}

function classificarImc(imc) {
  if(imc < 18.5) {
    return `Abaixo do peso!`;
    console.log("");
  } else if(imc >= 18.5 && imc < 25) {
    return `Peso normal!`;
    console.log("");
  } else if(imc >= 25 && imc <= 30) {
    return `Acima do peso!`;
    console.log("");
  } else if(imc >= 30 && imc < 40) {
    return `Obeso!`;
    console.log("");
  } else {
    return `Obesidade Grave!`;
    console.log("");
  }
}

// Main
(function () {
  let peso = 75;
  let altura = 1.75;

  let imc = calcularImc(peso, altura);
  console.log("");
  console.log(`IMC: ${calcularImc(peso, altura).toFixed(2)} - ${classificarImc(imc)}`);
  console.log("");
})();

