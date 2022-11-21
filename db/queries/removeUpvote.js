const db = require('../connection');

const removeUpvote = (upvote) => {
  const upvoteInfo = [upvote.contribution_id, upvote.user_id];
  return db.query(`
  DELETE FROM upvotes
  JOIN contributions ON contributions.id = contribution_id
  JOIN users ON users.id = owner_id
  WHERE users.id = $2
  AND contributions.id = $1;
  `, upvoteInfo);
};

module.exports = { removeUpvote };
