const readline = require("readline-sync");
const {avgSpeed} = require("./avg");
// distância / tempo

const askDistance = () => readline.questionFloat('Qual a distância percorrida? ');

const askTime = () => readline.questionFloat('Qual a distância tempo? ');

const main = () => {
  const distance = askDistance();
  const time = askTime();

  const result = (avgSpeed(distance, time)).toFixed(2);
  console.log(result);
}

main();
