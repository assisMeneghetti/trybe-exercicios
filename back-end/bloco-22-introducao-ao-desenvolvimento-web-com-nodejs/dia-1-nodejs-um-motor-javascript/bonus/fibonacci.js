const readLine = require('readline-sync');

console.log("Fibonacci");

const num = readLine.questionInt('Digite um número: ');

const fibonacci = (n, res = [], count = 1, last = 0) => {
  if(n){
    return fibonacci(n-1, res.concat(count), count+last, count);
  };
    console.log(res);
};

fibonacci(num);