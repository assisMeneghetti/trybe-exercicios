function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
};

createDaysOfTheWeek();

//#1
function criaDiaDoMes() {
  const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
  const listaDiasDoMes = document.querySelector('#days');

  for (let index = 0; index < dezDaysList.length; index += 1) {
    const dia = dezDaysList[index];
    const listaCadaDiasDoMes = document.createElement('li');
    listaCadaDiasDoMes.innerHTML = dia;
    if (dia === 24 || dia === 31) {
      listaCadaDiasDoMes.className = 'day holiday';
    } else if (dia === 4 || dia === 11 || dia === 18) {
      listaCadaDiasDoMes.className = 'day friday';
    } else if (dia === 25) {
      listaCadaDiasDoMes.className = 'day holiday friday';
    } else {
      listaCadaDiasDoMes.className = 'day';
    }

    listaDiasDoMes.appendChild(listaCadaDiasDoMes);
  };
};

criaDiaDoMes();

//#2

function criaBotaoFeriado(feriado) {
  let localDoBotaoFeriado = document.querySelector('.buttons-container');
  let botaoFeriado = document.createElement('button');
  botaoFeriado.innerText = feriado;
  botaoFeriado.id = 'btn-holiday'
  localDoBotaoFeriado.appendChild(botaoFeriado);
}

criaBotaoFeriado('Feriados');

//#3
//*Refiz a partir da resolução do gabarito ao menos umas 5x até funcionar e até eu entender toda a loógica.*/
function destacaFeriados() {
  let cor1 = 'rgb(238,238,238)';
  let cor2 = 'white';
  let botao = document.getElementById('btn-holiday');
  let feriados = document.querySelectorAll('.holiday');


  botao.addEventListener('click', function () {
    for (index = 0; index < feriados.length; index += 1) {
      if (feriados[index].style.backgroundColor === cor2) {
        feriados[index].style.backgroundColor = cor1;
      } else {
        feriados[index].style.backgroundColor = cor2;
      }
    }
  })
};

destacaFeriados();

//#4
function criaBotaoSextaFeira(sexta) {
  let localDoBotao = document.querySelector('.buttons-container');
  let botaoSextaFeira = document.createElement('button');
  botaoSextaFeira.innerText = sexta;
  botaoSextaFeira.id = 'btn-friday'
  localDoBotao.appendChild(botaoSextaFeira);
}

criaBotaoSextaFeira('Sexta-feira');

//#5
function modificaSextaFeira() {
  let novoTexto = 'Sexta-feira';
  let botaoSextaFeira = document.querySelector('#btn-friday');
  let textoAtualGeral = document.getElementsByClassName('friday');

  for (let textoAtualUnico of textoAtualGeral) {
    textoAtualUnico = textoAtualUnico.innerText;
  }
  //console.log(textoAtualGeral);

  //criar dentro do for uma variavel para coletar texto dentro de cada uma das sextas
  //console.log(textoAtual);
  botaoSextaFeira.addEventListener('click', function () {
    for (let indexSextas = 0; indexSextas < textoAtualGeral.length; indexSextas += 1) {
      if (textoAtualUnico[indexSextas] === novoTexto) {
        let textoAtualUnico = textoAtualGeral[indexSextas];
        textoAtualUnico[indexSextas] = ;
      } else {
        textoAtualUnico[indexSextas] = 
      }
    }
  })
}

modificaSextaFeira();