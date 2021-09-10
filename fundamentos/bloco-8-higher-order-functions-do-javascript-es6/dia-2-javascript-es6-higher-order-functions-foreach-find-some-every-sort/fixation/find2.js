const names = ['João', 'Irene', 'Fernando', 'Maria'];
// callback(element, index, array)
const findNameWithFiveLetters = (name) => name.length === 5;

const result = names.find(findNameWithFiveLetters);

console.log(result);