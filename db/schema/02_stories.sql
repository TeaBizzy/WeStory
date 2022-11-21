DROP TABLE IF EXISTS stories CASCADE;
CREATE TABLE stories (
  id SERIAL PRIMARY KEY NOT NULL,
  creator_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
  title VARCHAR(255) NOT NULL,
  content VARCHAR(160) NOT NULL,
  is_completed BOOLEAN DEFAULT FALSE
);
