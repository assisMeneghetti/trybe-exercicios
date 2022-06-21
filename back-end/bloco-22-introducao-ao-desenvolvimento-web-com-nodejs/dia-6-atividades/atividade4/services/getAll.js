const { readContentFile } = require('../utils/readWriteFile');
const PATH_FILE = 'teams.json';
module.exports = async (req, res, next) => {
  try {
    const teams = await readContentFile(PATH_FILE);
    return res.status(200).json(teams);
  } catch (error) {
    next(error);
  }
}
