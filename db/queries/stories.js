const db = require('../connection');

const getStories = () => {
  return db.query('SELECT * FROM stories;')
    .then(data => {
      return data.rows;
    });
};

module.exports = { getStories };
