const db = require('../connection');

const addUpvote = (upvote) => {
  const upvoteInfo = [upvote.contribution_id, upvote.user_id];
  return db.query(`
  INSERT INTO upvotes (contribution_id, user_id) VALUES ($1, $2);
  `, upvoteInfo);
};

module.exports = { addUpvote };
