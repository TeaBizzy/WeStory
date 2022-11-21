const db = require('../connection');

const getContributions = (contribution) => {
  return db.query(`
  SELECT * FROM contributions
  WHERE id = $1
  `, [contribution.id])
    .then(data => {
      return data.rows;
    });
};

module.exports = { getContributions };
