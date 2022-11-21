const db = require('../connection');

const addStory = (contribution) => {
  const storyInfo = [contribution.user_id, contribution.story_id, contribution.content];
  return db.query(`
  INSERT INTO contributions (owner_id, story_id, content)
  VALUES ($1, $2, $3);
  `, storyInfo);
};

module.exports = { addStory };
