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
// ___________________________________________________________________________ //
// *-------------------------------- Routing --------------------------------* //

router.get("/", (req, res) => {
  // Get session cookie
  const sessionCookie = req.session.user_id;
  const isLoggedIn = sessionCookie ? true : false;

  if (!isLoggedIn) {
    return res.redirect("/login");
  }

  users.getAvatarById(sessionCookie)
    .then(resolve => {
      const templateVars = {id: sessionCookie, avatarUrl: resolve.avatar_url};
      res.render('../views/index.ejs', templateVars);
    });

});

router.get("/:id", (req, res) => {
  // Get session cookie
  const sessionCookie = req.session.user_id;
  const isLoggedIn = sessionCookie ? true : false;

  if (!isLoggedIn) {
    return res.redirect("/login");
  }

  users.getAvatarById(sessionCookie)
    .then(resolve => {
      const storyId = req.params.id;
      const templateVars = {id: sessionCookie, storyId, avatarUrl: resolve.avatar_url};
      res.render("../views/story.ejs", templateVars);
    });

});

// ___________________________________________________________________________ //
// *-------------------------------- Exports --------------------------------* //

module.exports = router;
