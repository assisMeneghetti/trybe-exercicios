/**
 * Consultei o repositório do Caio R. Vieira para resolver esse exercício.
 * Link: https://github.com/CaioRobs/trybe_exercises/blob/master/01-fundamentos/04bloco-javascript-intro/02dia-array-loop-for/9.js
 */

let numbers = [];

for (let i = 1; i <= 25; i += 1) {
  numbers.push(i);
}

for (const number of numbers) {
  console.log(number / 2);
}

