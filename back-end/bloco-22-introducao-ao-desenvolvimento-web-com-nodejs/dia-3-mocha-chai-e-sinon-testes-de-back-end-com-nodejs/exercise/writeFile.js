const fs = require('fs').promises;

const writeFile = async (fileName, content) => {
  try {
    await fs.writeFile(fileName, content);
    return "ok";
  } catch (error) {
    console.log(error);
  }
}

module.exports = writeFile;