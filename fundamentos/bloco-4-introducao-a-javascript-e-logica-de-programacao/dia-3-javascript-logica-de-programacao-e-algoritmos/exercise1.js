let lado = 5;
const asterisco = '*';

for (let qtdLinha = 0; qtdLinha < lado; qtdLinha += 1) {
  let quadrado = '';
  for (let qtdColuna = 0; qtdColuna < lado; qtdColuna += 1) {
    quadrado += asterisco;
  }
  console.log(quadrado);
}