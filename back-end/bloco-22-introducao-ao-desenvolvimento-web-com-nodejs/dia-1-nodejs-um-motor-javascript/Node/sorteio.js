const readline = require("readline-sync");
const {getRandomInt} = require("./getRandomInt");


const main = () => {
  const askNumber = readline.questionInt("Escolha um número de 0 à 10: ");
  const randomNum = getRandomInt();
  if (askNumber === randomNum) {
    console.log("Parabéns, número correto!");
  } else {
    console.log(`Opa, não foi dessa vez. O número era ${randomNum}`);
  }
  const askPlayAgain = readline.keyInYN("Jogar novamente?");
  if (askPlayAgain) main();
}

main();



