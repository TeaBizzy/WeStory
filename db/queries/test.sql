SELECT stories.id, creator_id, users.username, title, cover_url, content FROM stories
JOIN users ON users.id = creator_id
WHERE users.id = 1
GROUP BY users.username, stories.id;
