// 2 - Crie um programa que seja capaz de percorrer uma lista de números e imprima cada número par encontrado.

const numeros2 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let i = 0; i < numeros2.length; i++) {
  const numero = numeros2[i];
  if(numero % 2 === 0 && numero != 0) {
    console.log(numero)
  }
}