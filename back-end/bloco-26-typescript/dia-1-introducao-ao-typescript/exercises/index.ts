// ./index.ts

import * as Exercise from './exercises';

console.log(Exercise.greeter('Maria'));
console.log(Exercise.personAge('Maria', 40));
console.log(`A soma do array é igual a ${Exercise.sumArray([3, 6, 9])}`);

console.log(`Triângulo de base 10cm e altura 25cm: ${Exercise.triangle(10, 25)}cm²`);
console.log(`Triângulo de base 5cm e altura 30cm: ${Exercise.triangle(5, 30)}cm²`);
console.log(`Triângulo de base 100cm e altura 200cm: ${Exercise.triangle(10, 25)}cm²`);

console.log(`Quadrado de lado 10cm: ${Exercise.square(10)}cm²`);
console.log(`Quadrado de lado 5cm: ${Exercise.square(5)}cm²`);
console.log(`Quadrado de lado 100cm: ${Exercise.square(10)}cm²`);

console.log(`Retângulo de base 10cm e altura 25cm: ${Exercise.rectangle(10, 25)}cm²`);
console.log(`Retângulo de base 5cm e altura 30cm: ${Exercise.rectangle(5, 30)}cm²`);
console.log(`Retângulo de base 100cm e altura 200cm: ${Exercise.rectangle(10, 25)}cm²`);

console.log(`Losango de diagonal maior 32cm e diagonal menor 18cm: ${Exercise.diamond(32, 18)}cm²`);
console.log(`Losango de diagonal maior 200cm e diagonal menor 50m: ${Exercise.diamond(200, 50)}cm²`);
console.log(`Losango de diagonal maior 75cm e diagonal menor 25cm: ${Exercise.diamond(75, 25)}cm²`);

console.log(`Trapézio de altura 50cm, base maior 100cm e base menor 70cm: ${Exercise.trapeze(50, 100, 70)}cm²`);
console.log(`Trapézio de altura 35cm, base maior 70cm e base menor 50cm: ${Exercise.trapeze(35, 75, 50)}cm²`);
console.log(`Trapézio de altura 80cm, base maior 150cm e base menor 120cm: ${Exercise.trapeze(80, 150, 120)}cm²`);

console.log(`Círculo com raio de 25cm: ${Exercise.circle(25)}cm²`);
console.log(`Círculo com raio de 100cm: ${Exercise.circle(100)}cm²`);
console.log(`Círculo com raio de 12,5cm: ${Exercise.circle(12.5)}cm²`);