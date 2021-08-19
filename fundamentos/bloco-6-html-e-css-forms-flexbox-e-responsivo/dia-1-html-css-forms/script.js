

function createStateLists() {
  let stateList = document.getElementById("state-list");
  let statesNames = ["Acre", "Alagoas", "Amapá", "Amazonas", "Bahia", "Ceará", "Distrito Federal", "Espírito Santo", "Goiás", "Maranhão", "Mato Grosso", "Mato Grosso do Sul", "Minas Gerais", "Pará", "Paraíba", "Paraná", "Pernambuco", "Piauí", "Rio de Janeiro", "Rio Grande do Norte", "Rio Grande do Sul", "Rondônia", "Roraima", "Santa Catarina", "São Paulo", "Sergipe", "Tocantins"];
  let acronyms = ["AC", "AL", "AP", "AM", "BA", "CE", "DF", "ES", "GO", "MA", "MT", "MS", "MG", "PA", "PB", "PR", "PE", "PI", "RJ", "RN", "RS", "RO", "RR", "SC", "SP", "SE", "TO"];

  for (let index = 0; index < statesNames.length; index += 1) {
    let option = document.createElement("option");
    option.innerText = statesNames[index];
    option.value = acronyms[index];
    stateList.appendChild(option);
  }
}

createStateLists();

let button = document.querySelector("#submit-form");

// button.addEventListener('click', function (event) {
//   let date = document.getElementById('date').value;
//   event.preventDefault();
//   let day = [];
//   let month = [];
//   let year = [];
//   for (let index = 0; index < date.length; index += 1) {
//     if (index > 2 && index < 5) {
//       month.push(parseInt(date[index]));
//     } else if (index < 2) {
//       day.push(parseInt(date[index]));
//     } else if (index > 5) {
//       year.push(parseInt(date[index]));
//     }
//   }
//   console.log(day, month, year);
// })


button.addEventListener('click', function (event) {
  event.preventDefault();
  let date = document.getElementById('date').value;
  let year = '';
  let day = '';
  let month = '';

  for (let index = 0; index < date.length; index += 1) {
    if (index > 2 && index < 5) {
      month += (date[index]);
    } else if (index < 2) {
      day += (date[index]);
    } else if (index > 5) {
      year += (date[index]);
    }
  }

  day = parseInt(day);
  year = parseInt(year);
  month = parseInt(month);

  if (date.length < 10) {
    alert('Formato de data errado!');
  } else if (day < 0 || day > 31) {
    alert('Dia formato errado!');
  } else if (month < 0 || month > 12) {
    alert('Mês formato errado!')
  } else if (year < 0) {
    'Ano no formato errado!'
  }
})


// verifica o tamanho
// separa string .split([separator[, limit]]) retorna um array
// parseInt(string)




// let inputDate = document.getElementById('date').innerText;

