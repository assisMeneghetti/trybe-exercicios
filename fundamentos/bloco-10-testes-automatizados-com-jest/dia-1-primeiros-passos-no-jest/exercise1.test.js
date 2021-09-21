const sum = require('./exercise1');

test('A função recebe 4 e 5 e retorna 9', () => {
  expect(sum(4, 5)).toBe(9);//toBe é para tipos primitivos
});

it('A função recebe 0 e 0 e retorna 0', () => { //pode ser it ou test
  expect(sum(0, 0)).toBe(0);
});

test('Testa se um erro é lançado quando passamos uma string como parâmetro', () => {
  expect(() => { sum(4, '5') }).toThrow(); //para capturar um erro deve-se chamar a função dentro de uma arrow fun
});

it('Testa se a mensagem de erro é "parameters must be numbers"', () => {
  expect(() => { sum(4, '5') }).toThrowError(new Error('parameters must be numbers'));
});

//utilizando o describe e it
// describe('Sum test 1', () => {
//   it('A função recebe 4 e 5 e retorna 9', () => {
//     // expect(9).toEqual(sum(4, 5)); //outra forma de fazer
//     expect(sum(4, 5)).toBe(9);
//   });
// });

// describe('Sum test 2', () => {
//   it('A função recebe 0 e 0 e retorna 0', () => {
//     // expect(0).toEqual(sum(0, 0)); //outra forma de fazer
//     expect(sum(0, 0)).toBe(0);
//   });
// });

// describe('Sum test 3', () => {
//   it('Testa se um erro é lançado quando passamos uma string como parâmetro', () => {
//     expect(() => { sum(4, '5') }).toThrow()
//   });
// });

// describe('Sum test 4', () => {
//   it('Testa se a mensagem de erro é "parameters must be numbers"', () => {
//     expect(() => { sum(4, '5') }).toThrowError(new Error('parameters must be numbers'));
//   });
// });
