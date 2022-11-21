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

module.exports = { getUser };
