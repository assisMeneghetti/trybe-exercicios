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

// Escreva seu código abaixo.
//#1
// const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
// let ul = document.querySelector('#days');
// function creatDays(array, tag) {
//   for (let index = 0; index < dezDaysList.length; index += 1) {
//     let li = document.createElement('li');
//     li.innerText = dezDaysList[index];
//     li.className = 'day';
//     ul.appendChild(li);
//   }
// }
const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
let ul = document.querySelector('#days');

function creatDays(array, tag, pai) {
  for (let index = 0; index < array.length; index += 1) {
    document.createElement(tag);
    pai.appendChild(tag);
  }
}

creatDays(dezDaysList, 'li', ul);

function setClass(array, classe) {
  for (let index = 0; index < array.length; index += 1) {
    tag.className = classe;
  }
}

let classe = 'day';

setClass(dezDaysList, classe)



creatDays(dezDaysList, ul)
//#2
