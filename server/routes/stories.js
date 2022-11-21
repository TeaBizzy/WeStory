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

// ___________________________________________________________________________ //
// *-------------------------------- Routing --------------------------------* //

router.get("/", (req, res) => {
  // Get session cookie
  const sessionCookie = req.session.user_id;
  const isLoggedIn = sessionCookie ? true : false;

  if (!isLoggedIn) {
    return res.redirect("/login");
  }

  res.render('../views/index.ejs');
  // res.send('Home Page');
});

router.get("/:id", (req, res) => {
  // Get session cookie
  const sessionCookie = req.session.user_id;
  const isLoggedIn = sessionCookie ? true : false;

  if (!isLoggedIn) {
    return res.redirect("/login");
  }

  res.send(`Story: ${req.params.story_id} Page`);
});

// ___________________________________________________________________________ //
// *-------------------------------- Exports --------------------------------* //

module.exports = router;
