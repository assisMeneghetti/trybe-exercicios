module.exports = (req, res, next) => {
  try {
    const { email } = req.body;
    if (!email) {
      return res.status(400).json({ 
        error: true, 
        message: 'O campo \'email\' é obrigatório',
      }); 
}
    return next();
  } catch (e) {
    return next(e);
  }
};