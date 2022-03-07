module.exports = (req, res, next) => {
  try {
    const { last_name } = req.body;
    if (!last_name) return res.status(400).json({ message: "O campo 'last_name' é obrigatório"});
    return next();
  } catch (e) {
    return next(e);
  }
};