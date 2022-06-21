const { writeContentFile } = require("../utils/readWriteFile");
const PATH_FILE = "teams.json";

module.exports = async (req, res, next) => {
  try {
    const newTeam = {
      ...req.body,
      initials: req.body.initials.toUpperCase(),
    };

    const team = await writeContentFile(PATH_FILE, newTeam);

    return res.status(200).json(team);
    
  } catch (error) {
    next(error);
  }
}