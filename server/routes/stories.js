// ___________________________________________________________________________ //
// *----------------------------- Documentation -----------------------------* //
/*
 * All routes for Stories are defined here
 * Since this file is loaded in server.js into /stories
 * these routes are mounted onto /stories
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */

// ___________________________________________________________________________ //
// *----------------------------- Configuration -----------------------------* //

const express = require("express");
const router = express.Router();
const users = require('../../db/queries/users');
const storyQueries = require('../../db/queries/stories');
// ___________________________________________________________________________ //
// *-------------------------------- Routing --------------------------------* //

router.get("/", (req, res) => {
  // Get session cookie
  const sessionCookie = req.session.user_id;
  const isLoggedIn = sessionCookie ? true : false;

  if (!isLoggedIn) {
    return res.redirect("/login");
  }
  users.getUserById(sessionCookie)
  .then((data) => {
    const templateVars = {id: sessionCookie, avatarUrl: data.avatar_url, username: data.username};
      res.render('../views/index.ejs', templateVars);
  })
});

router.get("/:id", (req, res) => {
  // Get session cookie
  const sessionCookie = req.session.user_id;
  const isLoggedIn = sessionCookie ? true : false;

  if (!isLoggedIn) {
    return res.redirect("/login");
  }

  const storyId = req.params.id;

  Promise.all([storyQueries.getStoryById(storyId), users.getUserById(sessionCookie)])
  .then((values) => {
    const storyData = values[0];
    const userData = values[1];
    const templateVars = {id: sessionCookie, title: storyData.title, storyId, coverImg: storyData.cover_url, avatarUrl: userData.avatar_url, username: userData.username};
    res.render('../views/story.ejs', templateVars);
  })
});

// ___________________________________________________________________________ //
// *-------------------------------- Exports --------------------------------* //

module.exports = router;
