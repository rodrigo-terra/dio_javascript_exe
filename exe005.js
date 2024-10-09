/*
  Elabore um algorítmo que calcule o que deve ser pago por um produto, considerando o preço normal da etiqueta e a escolha da condição de pagamento.
  Ultilize os códigos da tabela a seguir para ler qual a condição de pagamento escolhida e efetuar o cálculo adequado.

  Código condição de pagamento:
    - À vista débito, receba 10% de desconto;
    - À vista no dinheiro ou PIX, receba 15% de desconto;
    - Em duas vezes, preço normal da etiqueta sem juros;
    - Acima de duas vezes, preço normal da etiqueta mais juros de 10%;
*/

const precoEtiqueta = 100;
const formaDePagamento = 4;

if(formaDePagamento === 1) {
  console.log("");
  console.log("Pagamento no débito!");
  console.log(`O valor fica ${precoEtiqueta - (precoEtiqueta * 0.1)} reias!`);
  console.log("");
} else if(formaDePagamento === 2) {
  console.log("");
  console.log("Pagamento no dinheiro ou PIX!");
  console.log(`O valor fica ${precoEtiqueta - (precoEtiqueta * 0.15)} reias!`);
  console.log("");
} else if(formaDePagamento === 3) {
  console.log("");
  console.log("Pagamento em x2!");
  console.log(`O valor fica ${precoEtiqueta} reias!`);
  console.log("");
} else {
  console.log("");
  console.log("Pagamento acima de x2!");
  console.log(`O valor fica ${(precoEtiqueta * 1.1).toFixed(0)} reias!`);
  console.log("");
}