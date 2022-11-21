const db = require('../connection');

const register = (user) => {
  const userInfo = [user.username, user.password];
  return db.query(`
  INSERT INTO users (username, password) VALUES ($1, $2) RETURNING *;
  `, userInfo);
};

module.exports = { register };
