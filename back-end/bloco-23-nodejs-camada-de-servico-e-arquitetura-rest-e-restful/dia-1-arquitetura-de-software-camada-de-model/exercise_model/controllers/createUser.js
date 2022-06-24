const model = require('../model/user');

module.exports = async (req, res, next) => {
  try {
    const newUser = await model.setUser(req.body);
    return res.status(200).json(newUser);
  } catch (e) {
    next(e);
  }
};