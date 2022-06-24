const model = require('../model/user');

module.exports = async (req, res, next) => {
  try {
    const updatedUser = await model.update({ ...req.body, ...req.params });
    if (!updatedUser) {
      return res.status(404).json({
        error: true,
        message: 'Usuário não encontrado',
      }); 
    }
    return res.status(200).json(updatedUser);
  } catch (e) {
    next(e);
  }
};