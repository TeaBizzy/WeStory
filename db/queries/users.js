const db = require('../connection');

const getUsers = (user) => {
  return db.query(`
  SELECT * FROM users
  WHERE username = $1
  AND password = $2
  `, [user.username, user.password])
    .then(data => {
      return data.rows;
    });
};

module.exports = { getUsers };
