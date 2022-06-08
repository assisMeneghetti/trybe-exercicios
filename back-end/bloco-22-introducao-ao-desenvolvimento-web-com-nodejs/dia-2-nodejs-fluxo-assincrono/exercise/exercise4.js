const fs = require("fs").promises;

const fileName = 'simpsons.json';

async function findAll() {
  try {
    const fileRead = await fs.readFile(fileName, 'utf8');
    const json = JSON.parse(fileRead);
    json.forEach(element => {
      const {id, name} = element;
      console.log(`${id} - ${name}`);
    });
  } catch (error) {
    return error.message;
  }
};

// findAll();

async function findById(idChar) {
  try {
    const fileRead = await fs.readFile(fileName, 'utf8');
    const json = JSON.parse(fileRead);
    const hasId = json.some(c => +c.id === +idChar);
    if(!hasId) throw new Error("id não encontrado");
    return json.forEach(c => {
      if(+c.id === +idChar) {
        const {id, name} = c;
        console.log(`${id} - ${name}`); 
      } 
    });
  } catch (error) {
    return error.message
  }
};

// findById(1);

async function remove(idChar) {
  try {
    const fileRead = await fs.readFile(fileName, 'utf8');
    const parsedFile = JSON.parse(fileRead);
    const charIndex = parsedFile.findIndex(c => +c.id === idChar);
    console.log("qqr coisa");
    if(charIndex === -1) console.log("id não encontrado");
    parsedFile.splice(charIndex, 1);
    const stringfiedJson = JSON.stringify(parsedFile, null, '  ')
    // console.log(slicedJson);
    fs.writeFile(fileName, stringfiedJson);
  } catch (error) {
    return error.message
  }
};

// remove(12).then(console.log).catch(console.error);

async function simpsonsFamily() {
  try {
    const fileRead = await fs.readFile(fileName, 'utf8');
    const json = JSON.parse(fileRead);
    const filteredFamily = json.filter(c => c.id === '1' || c.id === '2' || c.id === '3' || c.id === '4');
    const stringfiedFamily = JSON.stringify(filteredFamily, null, '  ')
    console.log(filteredFamily);
    fs.writeFile('./simpsonsFamily.json', stringfiedFamily,  { flag: 'w' });
  } catch (error) {
    return error.message
  }
}

// simpsonsFamily()

async function addNelson() {
  try {
    const fileRead = await fs.readFile(fileName, 'utf8');
    const json = JSON.parse(fileRead);
    const simpsonsFamily = await fs.readFile('./simpsonsFamily.json', 'utf8');
    const jsonFamily = JSON.parse(simpsonsFamily);
    const filteredChar = json.filter(c => c.name.includes('Nelson'));
    const charList = [...jsonFamily, ...filteredChar];
    const stringfiedFamily = JSON.stringify(charList, null, '  ')
    // console.log(charList);
    fs.writeFile('./simpsonsFamily.json', stringfiedFamily,  { flag: 'w' });
  } catch (error) {
    return error.message
  }
}

// addNelson();

async function addMaggie() {
  try {
    const fileRead = await fs.readFile(fileName, 'utf8');
    const json = JSON.parse(fileRead);
    const filteredChar = json.filter(c => c.name.includes('Maggie'));
    const simpsonsFamily = await fs.readFile('./simpsonsFamily.json', 'utf8');
    const parsedFamily = JSON.parse(simpsonsFamily);
    const nelsonIndex = parsedFamily.findIndex(c => c.name === 'Nelson Muntz');
    const slicedFamily = parsedFamily.splice(nelsonIndex, 1);
    console.log(slicedFamily);
    const charList = [...parsedFamily, ...filteredChar];
    const stringfiedFamily = JSON.stringify(charList, null, '  ')
    fs.writeFile('./simpsonsFamily.json', stringfiedFamily,  { flag: 'w' });
  } catch (error) {
    return error.message
  }
}

addMaggie();
