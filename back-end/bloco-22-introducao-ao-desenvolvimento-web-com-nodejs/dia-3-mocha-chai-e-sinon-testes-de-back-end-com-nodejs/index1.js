const checkNumber = (number) => {
  if (typeof number !== 'number') return "o valor deve ser um número";
  if (number < 0) {
    return 'negativo'
  } else if (number > 0) {
    return 'positivo'
  } else if (number === 0) {
    return 'neutro';
  }
};

console.log(checkNumber(0));

module.exports = checkNumber;