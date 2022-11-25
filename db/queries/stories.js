const db = require('../connection');
const { generateRandomCover } = require('../../public/scripts/storyHelper');

const getStories = () => {
  return db.query(`
  SELECT stories.id, creator_id, users.username, title, cover_url, is_completed, content FROM stories
  JOIN users ON users.id = creator_id
  ORDER BY stories.id;
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

const getStoryById = (id) => {
  return db.query(`
  SELECT * FROM stories
  WHERE id = ${id};
  `)
    .then(data => {
      return data.rows[0];
    });
};

const getStoryByUserId = (user) => {
  return db.query(`
  SELECT stories.id, creator_id, users.username, title, cover_url, is_completed, content FROM stories
  JOIN users ON users.id = creator_id
  WHERE users.id = ${user.id}
  GROUP BY users.username, stories.id;
  `)
    .then(data => {
      return data.rows;
    });
};

const updateStory = function(storyId, content, completed) {
  const queryParams = [storyId, content, completed]
  return db.query(`
    UPDATE stories
    SET content = $2, is_completed = $3
    WHERE id = $1
    RETURNING *;
  `, queryParams).then(data => {
    return data.rows[0];
  })
};

module.exports = { getStories, addStory, getStoryById, getStoryByUserId, updateStory };
