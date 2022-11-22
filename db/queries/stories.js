const db = require('../connection');

const getStories = () => {
  return db.query(`
  SELECT * FROM stories;
  `)
    .then(data => {
      return data.rows;
    });
};

const addStory = (story) => {
  const storyInfo = [story.user_id, story.title, story.content];
  return db.query(`
  INSERT INTO stories (creator_id, title, content) VALUES ($1, $2, $3) RETURNING *;
  `, storyInfo);
};

const getStoryById = (story) => {
  return db.query(`
  SELECT * FROM stories
  WHERE id = ${story.id};
  `)
    .then(data => {
      return data.rows;
    });
};

const getStoryByUserId = (user) => {
  return db.query(`
  SELECT * FROM stories
  JOIN users ON users.id = creator_id
  WHERE id = ${user.id}
  GROUP BY creator_id;
  `)
    .then(data => {
      return data.rows;
    });
};

module.exports = { getStories, addStory, getStoryById, getStoryByUserId };
