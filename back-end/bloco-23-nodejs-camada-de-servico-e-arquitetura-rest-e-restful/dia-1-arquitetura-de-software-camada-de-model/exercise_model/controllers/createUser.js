const model = require('../model/user');

module.exports = async (req, res, next) => {
  try {
    const {first_name, last_name, email, password } = req.body; 
    const userBody = {first_name, last_name, email, password };
    const newUser = await model.setUser(userBody);
    return res.status(200).json(newUser);
  } catch (e) {
    next(e);
  }
}