let lado = 5;
let asterisco = '*';
let saida = '';
let entrada = lado;

for (let qtdLinha = 0; qtdLinha <= lado; qtdLinha += 1) {
  for (let qtdColuna = 0; qtdColuna <= lado; qtdColuna += 1) {
    if (qtdColuna < entrada) {
      saida += ' ';
    } else {
      saida += asterisco;
    }
  }
  console.log(saida);
  saida = '';
  entrada -= 1;
}