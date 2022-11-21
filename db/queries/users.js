const db = require('../connection');

const getUsers = (username) => {
  return db.query(`
  SELECT password FROM users
  WHERE username = $1
  `, [username])
    .then(data => {
      return data.rows;
    });
};

module.exports = { getUsers };
