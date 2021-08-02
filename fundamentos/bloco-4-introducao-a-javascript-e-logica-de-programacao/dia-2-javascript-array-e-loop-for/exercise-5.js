/**
 * Consultei o repositório do Layo Kaminski para resolver esse exercício.
 * Link: https://github.com/layokaminski/trybe-exercises-layo/blob/master/bloco_4/dia_2/exercise5.js
 */
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let largerNumber = 0
for (i = 0; i < numbers.length; i += 1) {
  if (numbers[i] > largerNumber) {
    largerNumber = numbers[i];
  }
  console.log(largerNumber);
}
