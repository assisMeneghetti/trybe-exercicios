const { throws } = require("assert");

const fs = require("fs").promises;

const fileName = 'simpsons.json';

// async function main() {
//   try {
//     const fileRead = await fs.readFile(fileName, 'utf8');
//     const json = JSON.parse(fileRead);
//     json.forEach(element => {
//       const {id, name} = element;
//       console.log(`${id} - ${name}`);
//     });
//   } catch (error) {
//     return error.message;
//   }
// };

// main();

async function main(idChar) {
  const fileRead = await fs.readFile(fileName, 'utf8');
  const json = JSON.parse(fileRead);
  if(!idChar) throw new Error("id não encontrado");
  return json.filter(element => {
  if(idChar === element.id) console.log("aqui");
  // return `${element.id} - ${element.name}`;
  });
};

const result = async () => {
  const finalResult = await main(1);
  console.log(finalResult);
};

result();