/*
  Faça um algoritimo que dada as 3 notas tiradas por um aluno em um semestre da faculdade calcule e imprima a sua média e a sua classificação conforme a tabela abaixo.

  Média = (nota 1 + nota 2 + nota 3) / 3

  Classificação:
    - Média menor que 5: REPROVAÇÃO;
    - Média de 5 a 6: RECUPERACÃO;
    - Média maior que 7: APROVAÇÃO;
*/

let nota1 = 5
let nota2 = 7
let nota3 = 9

let media = (nota1 + nota2 + nota3) / 3
console.log(media)
console.log("")

if(media < 5) {
  console.log(`REPROVADO!`);
  console.log(`Infelismente sua média é ${media.toFixed(1)} pontos.`);
  console.log("");
} else if(media >= 5 && media <= 6) {
  console.log(`RECUPERAÇÃO!`);
  console.log(`Você precisa se dedicar mais, sua média é ${media.toFixed(1)} pontos.`);
  console.log("");
} else {
  console.log(`APROVADO!`);
  console.log(`Parabéns, Sua média é ${media.toFixed(1)} pontos.`);
  console.log("");
}