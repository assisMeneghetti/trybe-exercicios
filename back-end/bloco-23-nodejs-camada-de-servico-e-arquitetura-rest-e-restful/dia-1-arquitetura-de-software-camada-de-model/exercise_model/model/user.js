const connection = require('./connection');

const serialize = (userData) => ({
  id: userData.id,
  firstName: userData.first_name,
  lastName: userData.last_name,
  email: userData.email,
  password: userData.password,
});

const getAll = async () => {
  const query = 'SELECT id, first_name, last_name, email  FROM db.users;';
  const [users] = await connection.execute(query);
  return users.map(serialize);
};

const setUser = async (userData) => {
  const query = 'INSERT users (first_name, last_name, email, password) VALUES (?,?,?,?)';
  const { firstName, lastName, email, password } = serialize(userData);
  const [user] = await connection.execute(query,
    [
      firstName,
      lastName,
      email,
      password,
    ]);
  return { id: user.insertId, firstName, lastName, email };
};

const getById = async (id) => {
  const query = 'select * from users where id = ?;';
  const [userData] = await connection.execute(query, [id]);
  if (userData.length === 0) return null;
  const { firstName, lastName, email } = userData.map(serialize)[0];
  return { id, firstName, lastName, email };
};

const update = async (userData) => {
  const query = `UPDATE users 
    SET 
        first_name = ?,
        last_name = ?,
        email = ?,
        password = ?
    WHERE
        id = ?;`;
  const { id, firstName, lastName, email, password } = serialize(userData);
  await connection.execute(query, [firstName, lastName, email, password, id]);
  const updatedUser = await getById(id);
  if (!updatedUser) return null;
  return updatedUser;
};

module.exports = {
  serialize,
  setUser,
  getAll,
  getById,
  update,
};
