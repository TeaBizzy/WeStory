const db = require('../connection');

const addStory = (story) => {
  const storyInfo = [story.user_Id, story.title, story.content];
  return db.query(`
  INSERT INTO stories (creator_id, title, content) VALUES ($1, $2, $3) RETURNING *;
  `, storyInfo);
};

module.exports = { addStory };
