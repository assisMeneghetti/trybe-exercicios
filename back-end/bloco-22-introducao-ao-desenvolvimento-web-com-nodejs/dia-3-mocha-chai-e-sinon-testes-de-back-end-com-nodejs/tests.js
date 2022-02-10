const { expect } = require('chai');
const checkNumber = require('./index');

describe("Verifica se 'checkNumber' existe e se é uma função", () => {
  it("Testa se 'checkNumber' existe e se é uma função", () => {
    expect(checkNumber).to.be.a('function');
  });
});

describe("Verifica quando 'checkNumber' recebe number > 0 retorna 'positivo'", () => {
  it("Testa se 'checkNumber' retorna 'positivo'", () => {
    const answer = checkNumber(1);
    expect(answer).to.be.equal('positivo');
  });
  it("Testa se o retorno é uma string", () => {
    const answer = checkNumber(1);
    expect(answer).to.be.a('string');
  });
});

describe("Verifica quando 'checkNumber' recebe number < 0 retorna 'negativo'", () => {
  it("Testa se 'checkNumber' retorna 'negativo'", () => {
    const answer = checkNumber(-1);
    expect(answer).to.be.equal('negativo');
  });
  it("Testa se o retorno é uma string", () => {
    const answer = checkNumber(-1);
    expect(answer).to.be.a('string');
  });
});
describe("Verifica quando 'checkNumber' recebe 0 retorna 'neutro'", () => {
  it("Testa se 'checkNumber' retorna 'neutro'", () => {
    const answer = checkNumber(0);
    expect(answer).to.be.equal('neutro');
  });
  it("Testa se o retorno é uma string", () => {
    const answer = checkNumber(0);
    expect(answer).to.be.a('string');
  });
});

describe("Verifica quando 'checkNumber' recebe valor not number", () => {
  it("Testa se 'checkNumber' retorna mensagem de erro", () => {
    const answer = checkNumber('a');
    expect(answer).equals("o valor deve ser um número");
  });
});

describe("Verifica se 'writeFile' existe e se é uma função", () => {
  it("Testa se 'checkNumber' existe e se é uma função", () => {
    expect(checkNumber).to.be.a('function');
  });
});

