module.exports = (req, res, next) => {
  try {
    const { first_name } = req.body;
    if (!first_name) return res.status(400).json({ message: "O campo 'firs_name' é obrigatório"});
    return next();
  } catch (e) {
    return next(e);
  }
};