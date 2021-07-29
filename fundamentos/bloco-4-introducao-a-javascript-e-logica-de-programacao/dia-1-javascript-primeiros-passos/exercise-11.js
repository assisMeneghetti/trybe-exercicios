// desconta do salario inss e ir
let grossSalary = 2000;
let baseSalary;
let netSalary;
// aliquotas inss
const inssOne = 0.08;
const inssTwo = 0.09;
const inssThree = 0.11;
const inssMax = 570.88;
// aliquotas ir
const irOne = 0.075;
const irTwo = 0.15;
const irThree = 0.225;
const irMax = 0.275;
// parcela ir
const irParcelOne = 142.8;
const irParcelTwo = 354.8;
const irParcelThree = 636.13;
const irParcelMax = 869.36;
// calculo dedução inss
if (grossSalary >= 0 && grossSalary <= 1556.94) {
  baseSalary = grossSalary - (grossSalary * inssOne);
} else if (grossSalary >= 1556.95 && grossSalary <= 2594.92) {
  baseSalary = grossSalary - (grossSalary * inssTwo);
} else if (grossSalary >= 2594.93 && grossSalary <= 5189.82) {
  baseSalary = grossSalary - (grossSalary * inssThree);
} else {
  baseSalary = grossSalary - inssMax;
}
//calculando dedução ir
if (baseSalary >= 1903.99 && baseSalary <= 2826.65) {
  netSalary = baseSalary - (baseSalary * irOne);
  console.log(netSalary);
}
//tenho que pegar a saída do primeiro grupo para ser entrada do segundo
