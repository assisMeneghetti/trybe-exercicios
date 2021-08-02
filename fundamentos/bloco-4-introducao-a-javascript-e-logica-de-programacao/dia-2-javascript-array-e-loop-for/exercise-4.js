let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let sum = 0;
let media = 0;
for (let i = 0; i < numbers.length; i += 1) {
  sum += numbers[i];
  media = sum / numbers.length - 1;
  console.log(media);
}
if (media > 20) {
  console.log("valor maior que 20");
} else {
  console.log("valor menor ou igual a 20")
}