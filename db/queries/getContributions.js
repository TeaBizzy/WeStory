const db = require('../connection');

const getContributions = (story) => {
  return db.query(`
  SELECT * FROM contributions
  WHERE story_id = $1
  `, [story.id])
    .then(data => {
      return data.rows;
    });
};

module.exports = { getContributions };
