let string = 'oitenta';
function verficaPalindromo(string) {
  for (let index = 0; index < string; index += 1) {
    if (string[index] === string[index].lenght - 1) {
      return true;
    } else {
      return false;
    }
  }
}

console.log(verficaPalindromo(string));
