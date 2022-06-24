const model = require('../model/user');

module.exports = async (req, res, next) => {
  try {
    const { id } = req.params;
    const user = await model.getById(id);
    if (!user) {
      return res.status(404).json({
        error: true,
        message: 'Usuário não encontrado',
      }); 
    }
    return res.status(200).json(user);
  } catch (error) {
    next(error);
  }
};
