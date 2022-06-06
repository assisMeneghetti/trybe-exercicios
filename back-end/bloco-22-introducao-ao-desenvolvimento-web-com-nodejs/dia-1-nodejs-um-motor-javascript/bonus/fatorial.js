const readLine = require('readline-sync');

console.log("Fatorial");

const num = readLine.questionInt('Digite um número: ');

function factorial(n) {
  var ans = 1;
    
  for (var i = 2; i <= n; i++) {
    ans = ans * i;
  }

  console.log(ans);
}

factorial(num);
