
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let numbersMultiple = [];

for (let index = 0; index < numbers.length; index += 1) {
  if (index < numbers.length - 1) {
    numbersMultiple.push(numbers[index] * numbers[index + 1])
  } else {
    numbersMultiple.push(numbers[index] * 2)
  }
}

console.log(numbersMultiple);