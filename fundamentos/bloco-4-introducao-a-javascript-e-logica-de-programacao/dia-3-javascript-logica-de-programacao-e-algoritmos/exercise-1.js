// 1- Para o primeiro exercício de hoje, faça um programa que, 
// dado um valor n qualquer, seja n > 1 , imprima na tela um quadrado 
// feito de asteriscos de lado de tamanho n . Por exemplo:

// n = 5

// *****
// *****
// *****
// *****
// *****

let lado = 5;
const asterisco = '*';

for (let qtdLinha = 0; qtdLinha < lado; qtdLinha += 1) {
  let quadrado = '';
  for (let qtdColuna = 0; qtdColuna < lado; qtdColuna += 1) {
    quadrado += asterisco;
  }
  console.log(quadrado);
}