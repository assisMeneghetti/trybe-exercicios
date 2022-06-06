const readLine = require('readline-sync');

console.log("IMC");

const w = readLine.questionFloat('Digite seu pego em kg: ');
const h = readLine.questionFloat('Digite sua altura em m: ');

const bmi = (weight, height) => {
  const bmi = (weight / height**2).toFixed(2);

  if (bmi < 18.5) {
    console.log(`Seu imc é ${bmi} Abaixo do peso (magreza)`);
  } else if (bmi < 25) {
    console.log(`Seu imc é ${bmi} Peso normal`);
  } else if (bmi < 30) {
    console.log(`Seu imc é ${bmi} Acima do peso (sobrepeso)`);
  } else if (bmi < 35) {
    console.log(`Seu imc é ${bmi} Obesidade grau I`);
  } else if (bmi < 40) {
    console.log(`Seu imc é ${bmi} Obesidade grau II`);
  } else {
    console.log(`Seu imc é ${bmi} Obesidade grau III e IV`);
  }
};

bmi(w, h);

module.exports = bmi;