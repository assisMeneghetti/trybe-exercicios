const fs = require('fs').promises;
const sinon = require('sinon');
const { expect } = require('chai')
const file = require('../file.txt')
const writeFile = require('../writeFile');


describe("Verifica se 'writeFile' existe e se é uma função", () => {
  it("Testa se 'writeFile' existe e se é uma função", () => {
    expect(writeFile).to.be.a('function');
  });
});

describe("Verifica se 'writeFile' retorna uma Promise", () => {
  it("Testa se 'writeFile' retorna uma Promise", () => {
    expect(writeFile('file.txt', 'teste')).to.be.a('Promise');
  });
});

describe("Verifica se 'writeFile' recebe 2 parametros", () => {
  it("Testa se 'writeFile' recebe 2 parametros", () => {
    expect(writeFile.length).to.be.equal(2);
  });
});

describe("Verifica se 'writeFile' escreve no arquivo 'file.txt'", async () => {
  beforeEach(() => {
    sinon.stub(fs, 'writeFile')
      .resolves('teste')
  });

  afterEach(() => {
    fs.writeFile.restore();
  });

  it("Testa se 'writeFile' escreve no arquivo 'file.txt'", async () => {
    const answer = await writeFile('file.txt', 'teste');
    expect(answer).to.be.equal('ok');
  });

  it("Testa se 'writeFile' retorna uma string", async () => {
    const answer = await writeFile('file.txt', 'teste');
    expect(answer).to.be.a('string');
  });

  it("Testa se 'writeFile' retorna 'ok'", async () => {
    const answer = await writeFile('file.txt', 'teste');
    expect(answer).to.be.equal('ok');
  });
});