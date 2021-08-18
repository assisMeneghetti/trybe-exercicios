let stateList = document.getElementById("state-list");
let statesNames = ["Acre", "Alagoas", "Amapá", "Amazonas", "Bahia", "Ceará", "Distrito Federal", "Espírito Santo", "Goiás", "Maranhão", "Mato Grosso", "Mato Grosso do Sul", "Minas Gerais", "Pará", "Paraíba", "Paraná", "Pernambuco", "Piauí", "Rio de Janeiro", "Rio Grande do Norte", "Rio Grande do Sul", "Rondônia", "Roraima", "Santa Catarina", "São Paulo", "Sergipe", "Tocantins"];
let acronyms = ["AC", "AL", "AP", "AM", "BA", "CE", "DF", "ES", "GO", "MA", "MT", "MS", "MG", "PA", "PB", "PR", "PE", "PI", "RJ", "RN", "RS", "RO", "RR", "SC", "SP", "SE", "TO"];

for (let index = 0; index < 10; index += 1) {
  let option = document.createElement("option");
  option.innerText = statesNames[index];
  option.value = acronyms[index];
  stateList.appendChild(option);
}


// let ulContent = ['um', 'dois', 'três', 'quatro', 'cinco', 'seis', 'sete', 'oito', 'nove', 'dez'];
//     for (let index = 0; index < ulContent.length; index += 1) {
//       let ul = document.createElement('ul');
//       ul.innerText = ulContent[index];
//       section3.appendChild(ul);
//     }
// for (let state of statesNames) {
//   console.log(state);
//   stateList.appendChild(option);
//   option.innerText = state;
// }