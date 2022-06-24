const { serialize } = require('../model/user');

module.exports = (req, res, next) => {
  try {
    const { lastName } = serialize(req.body);
    if (!lastName) {
      return res.status(400).json({
        error: true,
        message: 'O campo \'last_name\' é obrigatório',
      }); 
}
    return next();
  } catch (e) {
    return next(e);
  }
};