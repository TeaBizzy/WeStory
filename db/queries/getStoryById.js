const db = require('../connection');

const getStoryById = (story) => {
  return db.query(`
  SELECT * FROM stories
  WHERE id = ${story.id};
  `)
    .then(data => {
      return data.rows;
    });
};

module.exports = { getStoryById };
