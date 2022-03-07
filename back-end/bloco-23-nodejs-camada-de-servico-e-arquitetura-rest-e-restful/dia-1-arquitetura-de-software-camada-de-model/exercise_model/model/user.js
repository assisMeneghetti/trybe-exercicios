const connection = require('./connection');

const getAll = async () => {
  const [users] = await connection.execute('SELECT * FROM exercise_23_1.users;');
  return users;
};

const setUser =  async ({first_name, last_name, email, password}) => {
  const [user] = await connection.execute('INSERT INTO users (first_name, last_name, email, password); values (?,?,?,?)', [first_name, last_name, email, password]);
  return { id: user.insertId, first_name, last_name, email, password};
};

module.exports = {
  setUser,
  getAll,
};

