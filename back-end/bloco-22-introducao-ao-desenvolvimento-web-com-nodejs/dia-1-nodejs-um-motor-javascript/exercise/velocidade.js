const readLine = require('readline-sync');

console.log("Velocidade");

const s = readLine.questionInt("Digite uma distância em metros: ");
const t = readLine.questionInt("Digite um tempo em segundos: ");

const avgSpeed = (speed, time) => {
  const avg = (speed / time).toFixed(2);
  console.log(`A velocidade média é ${avg} m/s`);
}

avgSpeed(s, t);

module.exports = avgSpeed;