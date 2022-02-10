const readline = require("readline-sync");

const scripts = [
  { name: 'Calcular velocidade média', script: './velocidade.js'},
  { name: 'Jogo de advinhação', script: './sorteio'},
];

let mensagem = scripts
  .map((script, index) => `${index + 1} - ${script.name}`);

mensagem.unshift('Escolha um número para executar o script');

mensagem = mensagem.join('\n');

const scriptNumber = readline.questionInt(mensagem) - 1;

const script = script[scriptNumber];

if (!script) return console.log('Número inválido. Saindo');

require(script.script);
