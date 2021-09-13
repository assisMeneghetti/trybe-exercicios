const assert = require('assert');

const myList = [1, 2, 3];

const swap = ([one, two, three]) => [three, two, one];

const swappedList = swap(myList);
console.log(swappedList);

assert.strictEqual(swappedList[0], 3);
assert.strictEqual(swappedList[1], 2);
assert.strictEqual(swappedList[2], 1);
