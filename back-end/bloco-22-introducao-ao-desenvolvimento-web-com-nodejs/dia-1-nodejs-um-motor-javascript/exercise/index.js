const readLine = require('readline-sync');

const script = readLine.question('Digite o número do script que deseja executar: 1 - imc.js, 2 - velocidade.js, 3 - sorteio.js, 4 - fatorial, 5 - fibonacci ');

switch (script) {
  case "1":
    require('./imc');
    break;
  case "2":
    require('./velocidade');
    break;
  case "3":
    require('./sorteio');
    break;
  case "4":
    require('../bonus/fatorial');
    break;
  case "5":
    require('../bonus/fibonacci');
    break;
  default:
    break;
}
