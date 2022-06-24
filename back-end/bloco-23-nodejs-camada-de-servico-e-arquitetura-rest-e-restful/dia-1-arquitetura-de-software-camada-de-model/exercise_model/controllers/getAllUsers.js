const model = require('../model/user');

module.exports = async (req, res, next) => {
  try {
    const users = await model.getAll();
    return res.status(200).json(users);
  } catch (error) {
    next(error);
  }
};
