let valorCusto = 1;
let valorVenda = 3;
const impostoSobreProduto = 0.2;
let valorCustoTotal = valorCusto + impostoSobreProduto
let lucro = valorVenda - valorCustoTotal;
let valorLucroTotal;


if (valorCusto < 0 || valorVenda < 0) {
  console.log("Entrada invalida!")
}
else {
  valorLucroTotal = lucro * 1000;
  console.log(valorLucroTotal);
}
