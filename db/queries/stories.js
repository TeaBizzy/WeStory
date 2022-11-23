const db = require('../connection');
const { generateRandomCover } = require('../../public/scripts/storyHelper');

const getStories = () => {
  return db.query(`
  SELECT stories.id, creator_id, users.username, title, cover_url, is_completed, content FROM stories
  JOIN users ON users.id = creator_id;
  `)
    .then(data => {
      return data.rows;
    });
};

// TODO: Move generateRandomCover() to another file, and pass its result as an argument
const addStory = (story) => {
  const storyInfo = [story.user_id, story.title, story.content, generateRandomCover()];
  return db.query(`
  INSERT INTO stories (creator_id, title, content, cover_url) VALUES ($1, $2, $3, $4) RETURNING *;
  `, storyInfo)
  .then(data => {
    return data.rows[0];
  })
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
