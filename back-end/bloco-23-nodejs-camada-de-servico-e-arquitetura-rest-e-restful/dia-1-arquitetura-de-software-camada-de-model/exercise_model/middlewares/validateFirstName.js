const { serialize } = require('../model/user');

module.exports = (req, res, next) => {
  try {
    const { firstName } = serialize(req.body);
    if (!firstName) {
  return res.status(400).json({
      error: true,
      message: 'O campo \'first_name\' é obrigatório',
    }); 
}
    return next();
  } catch (e) {
    return next(e);
  }
};