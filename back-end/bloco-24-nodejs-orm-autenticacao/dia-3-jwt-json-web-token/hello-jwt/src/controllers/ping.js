module.exports = (_req, res, next) => {
  try {
    res.status(200).json({ message: 'Pong!' });
  } catch (error) {
    next(error);
  }
};
