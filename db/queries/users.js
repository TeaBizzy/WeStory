const db = require('../connection');
const generateRandomAvatar = require('../../public/scripts/storyHelper');

const getUser = (user) => {
  return db.query(`
  SELECT * FROM users
  WHERE username = $1
  AND password = $2
  `, [user.username, user.password])
    .then(data => {
      return data.rows[0];
    });
};

const getUserById = (userid) => {
  return db.query(`
  SELECT * FROM users
  WHERE id = $1
  `, [userid])
    .then(data => {
      return data.rows[0];
    });
};

const addUser = (user) => {
  const userInfo = [user.username, user.password, generateRandomAvatar()];
  return db.query(`
  INSERT INTO users (username, password, avatar_url) VALUES ($1, $2, $3) RETURNING *;
  `, userInfo);
};

const getAvatarById = (id) => {
  return db.query(`
  SELECT avatar_url FROM users
  WHERE id = ${id}
  `)
    .then(data => {
      return data.rows[0];
    });
};

module.exports = { getUser, getUserById, addUser, getAvatarById };
