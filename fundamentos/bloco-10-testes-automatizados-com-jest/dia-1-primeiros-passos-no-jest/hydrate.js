function hydrate(drinks) {
  let agua = ' de água';
  let copo = ' copo';
  let plural = 's';
  let aux = [];
  let reg = /\d+/g;

  let result = drinks.match(reg);
  aux = result.map(i => Number(i));

  let qtd = 0;

  for (let index = 0; index < aux.length; index += 1) {
    qtd += aux[index];
  }

  if (qtd > 1) {
    return qtd + copo + plural + agua;
  } else {
    return qtd + copo + agua;
  }
}

// console.log(typeof hydrate);