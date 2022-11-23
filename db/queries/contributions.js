const db = require('../connection');

const getContributions = (storyId) => {
  return db.query(`
  SELECT DISTINCT contributions.id as contribution_id, contributions.story_id, owner_id, users.username as owner_username, count(upvotes.*) as upvotes, contributions.content
  FROM contributions
  JOIN users ON users.id = owner_id
  LEFT JOIN upvotes ON upvotes.contribution_id = contributions.id
  WHERE story_id = $1
  GROUP BY contributions.id, users.id
  ORDER BY contribution_id;
  `, [storyId])
    .then(data => {
      return data.rows;
    });
};

const addContribution = (contribution) => {
  const contributionInfo = [contribution.user_id, contribution.story_id, contribution.content];
  return db.query(`
  INSERT INTO contributions (owner_id, story_id, content)
  VALUES ($1, $2, $3)
  RETURNING *;
  `, contributionInfo)
  .then(data => {
    return data.rows[0];
  });
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
