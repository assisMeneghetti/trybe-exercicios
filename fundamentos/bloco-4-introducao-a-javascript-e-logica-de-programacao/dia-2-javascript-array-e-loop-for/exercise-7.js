/**
 * Consultei o repositório do Maurício Viegas Rodrigues para resolver esse exercício.
 * Link: https://github.com/mvrdgs/trybe-exercises/blob/main/mod4/dia_2/exercicio7.js
 */
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let smallerNumber = numbers[0];
for (i = 0; i < numbers.length; i += 1) {
  if (smallerNumber > numbers[i]) {
    smallerNumber = numbers[i];
  }
  console.log(smallerNumber);
}