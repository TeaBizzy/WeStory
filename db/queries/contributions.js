const db = require('../connection');

const getContributions = (storyId) => {
  return db.query(`
  SELECT * FROM contributions
  WHERE story_id = $1
  `, [storyId])
    .then(data => {
      return data.rows;
    });
};

const addContribution = (contribution) => {
  const storyInfo = [contribution.user_id, contribution.story_id, contribution.content];
  return db.query(`
  INSERT INTO contributions (owner_id, story_id, content)
  VALUES ($1, $2, $3);
  `, storyInfo);
};

const getContributionById = (contribution) => {
  return db.query(`
  SELECT * FROM contributions
  WHERE id = $1
  `, [contribution.id])
    .then(data => {
      return data.rows;
    });
};

const addUpvote = (upvote) => {
  const upvoteInfo = [upvote.contribution_id, upvote.user_id];
  return db.query(`
  INSERT INTO upvotes (contribution_id, user_id) VALUES ($1, $2);
  `, upvoteInfo);
};

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

module.exports = { getContributions, addContribution, getContributionById, addUpvote, removeUpvote };
