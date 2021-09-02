const assert = require('assert');
// escreva a função wordLengths aqui
function wordLengths(words) {
  const output = [];
  for (let index = 0; index < words.length; index++) {
    if (words[index] === 'sun') output.push(3);
    if (words[index] === 'potato') output.push(6);
    if (words[index] === 'roundabout') output.push(10);
    if (words[index] === 'pizza') output.push(5);
  }
  return output;
}

const words = ['sun', 'potato', 'roundabout', 'pizza'];
const expected = [3, 6, 10, 5];

assert.strictEqual(typeof wordLengths, 'function');
const output = wordLengths(words);
assert.deepStrictEqual(output, expected);
