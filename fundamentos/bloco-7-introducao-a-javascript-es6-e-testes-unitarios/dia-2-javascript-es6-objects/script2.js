const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};


const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

function addTurn(object, key, value) {
  return object[key] = value
}

addTurn(lesson2, 'turno', 'manhã');

function listKeys(object) {
  return Object.keys(object);
}

listKeys(lesson1);

function lengthObject(object) {
  return Object.keys(object).length;
}

lengthObject(lesson2);

function getValuesObject(object) {
  return Object.values(object);
}

getValuesObject(lesson2);

const newLesson1 = { lesson1: lesson1 };
const newLesson2 = { lesson2: lesson2 };
const newLesson3 = { lesson3: lesson3 };
const allLessons = Object.assign(newLesson1, newLesson2, newLesson3);
console.log(allLessons);

function getTotalStudents(object) {
  const students1 = lesson1.numeroEstudantes;
  const students2 = lesson2.numeroEstudantes;
  const students3 = lesson3.numeroEstudantes;
  return students1 + students2 + students3;
}
getTotalStudents(allLessons);

function getValueByNumber(object, position) {
  return Object.values(object)[position];
}

console.log(getValueByNumber(lesson1, 3));

function verifyPair(object, key, value) {
  const pair = Object.entries(object);
  for (let index = 0; index < pair.length; index += 1) {
    const test = pair[index];
    if (test.includes(key) && test.includes(value)) {
      return true;
    }
  }
  return false;
}

// console.log(verifyPair(lesson3, 'turno', 'noite'));
// Output: true,
console.log(verifyPair(lesson3, 'materia', 'Maria Clara'));
// Output: false