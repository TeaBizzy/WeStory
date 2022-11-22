const db = require('../connection');

const getUser = (user) => {
  return db.query(`
  SELECT * FROM users
  WHERE username = $1
  AND password = $2
  `, [user.username, user.password])
    .then(data => {
      return data.rows;
    });
};

const getUserById = (user) => {
  return db.query(`
  SELECT * FROM users
  WHERE id = $1
  `, [user.id])
    .then(data => {
      return data.rows;
    });
};

const addUser = (user) => {
  const userInfo = [user.username, user.password];
  return db.query(`
  INSERT INTO users (username, password) VALUES ($1, $2) RETURNING *;
  `, userInfo);
};

module.exports = { getUser, getUserById, addUser };
