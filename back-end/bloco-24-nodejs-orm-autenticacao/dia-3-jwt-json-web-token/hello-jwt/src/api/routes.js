const { ping, login, me, topSecret, signup } = require('../controllers');
const { error, auth, admin } = require('../middlewares');

module.exports = {
  ping,
  error,
  login,
  me,
  auth,
  admin,
  topSecret,
  signup,
};