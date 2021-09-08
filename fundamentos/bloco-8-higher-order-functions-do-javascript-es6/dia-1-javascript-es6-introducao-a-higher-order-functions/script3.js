const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];
// function hof(gabarito, respostas, param3) {
// }
let sum = 0;
for (let index = 0; index < RIGHT_ANSWERS.length; index += 1) {
  const element = RIGHT_ANSWERS[index];
  if (RIGHT_ANSWERS[index] === 'C') {
    sum += 1;
  }
}
console.log(sum);
// function verifica() {
// param3 = (gabarito) => {
//   for (let index = 0; index < gabarito.length; index += 1) {
//     const sum = 0;
//     const element = gabarito[index];
//   }
// }
// }

// console.log(param3(RIGHT_ANSWERS));
