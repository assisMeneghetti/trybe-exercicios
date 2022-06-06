const readLine = require('readline-sync');

console.log("Sorteio");

const n = readLine.questionInt('Digite um número: ');

const randomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const lottery = (n) => {
  const randomNumber = randomInt(1, 10);
  if (n === randomNumber) {   
    console.log(`Parabéns, número correto! ${randomNumber} é o número sorteado! Sua escolha foi ${n}`);
  } else {
    console.log(`Que pena, número errado! ${randomNumber} é o número sorteado! Sua escolha foi ${n}`);
  }
}

lottery(n);

module.exports = lottery;