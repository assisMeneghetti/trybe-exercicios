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
const asterisco = "*";

for (let i = 0; i < lado; i += 1) {
  for (let i = 0; i < lado; i += 1) {
    console.log(asterisco);
  }
}