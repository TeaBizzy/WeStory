const db = require('../connection');

const addStory = (story, user) => {
  const storyInfo = [user.id, story.title, story.content];
  return db.query(`
  INSERT INTO users (creator_id, title, content) VALUES ($1, $2, $3) RETURNING *;
  `, storyInfo);
};

module.exports = { addStory };
