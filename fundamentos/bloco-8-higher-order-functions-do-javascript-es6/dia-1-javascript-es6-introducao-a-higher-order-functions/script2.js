const aposta = 1;

const geraNumero = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function resultadoSorteio(numeroApostado, checaNumero) {
  const sorteio = geraNumero(1, 2);
  console.log(sorteio, numeroApostado);
  checaNumero(sorteio, numeroApostado);
}

const checaNumero = (sorteio, aposta) => (sorteio === aposta) ? console.log('Parabéns você ganhou') : console.log('Tente novamente');

resultadoSorteio(aposta, checaNumero);
