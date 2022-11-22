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
const stories = require('../../db/queries/stories');

// ___________________________________________________________________________ //
// *-------------------------------- Routing --------------------------------* //

router.get("/", (req, res) => {
  // Get session cookie
  const sessionCookie = req.session.user_id;
  const isLoggedIn = sessionCookie ? true : false;

  if (!isLoggedIn) {
    return res.redirect("/login");
  }
  stories.getStories()
    .then(story => {
      let storyList = story;
      console.log(storyList);
      res.render('../views/index.ejs', storyList);
      // .json({ story })
    })
    .catch(err => {
      res
        .status(500)
        .json({ error: err.message });
    });
});

router.get("/:id", (req, res) => {
  // Get session cookie
  const sessionCookie = req.session.user_id;
  const isLoggedIn = sessionCookie ? true : false;

  if (!isLoggedIn) {
    return res.redirect("/login");
  }

  res.render('../views/story.ejs');
});

// ___________________________________________________________________________ //
// *-------------------------------- Exports --------------------------------* //

module.exports = router;
