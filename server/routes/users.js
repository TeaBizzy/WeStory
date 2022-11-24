// ___________________________________________________________________________ //
// *----------------------------- Documentation -----------------------------* //
/*
* All routes for Users are defined here
* Since this file is loaded in server.js into /users,
* these routes are mounted onto /users
* See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
*/


// ___________________________________________________________________________ //
// *----------------------------- Configuration -----------------------------* //

const express = require('express');
const router  = express.Router();
const users = require('../../db/queries/users');

// ___________________________________________________________________________ //
// *-------------------------------- Routing --------------------------------* //

router.get('/:id', (req, res) => {
  // Get session cookie
  const sessionCookie = req.session.user_id;
  const isLoggedIn = sessionCookie ? true : false;
  const userId = sessionCookie;
  if (!isLoggedIn) {
    return res.redirect('/login');
  }

  Promise.all([users.getUserById(req.params.id), users.getAvatarById(sessionCookie)])
  .then((values) => {
    const avatarUrl = values[1].avatar_url;
    const username = values[0].username;
    const templateVars = {profileId: req.params.id, id: sessionCookie, avatarUrl, username};
    res.render('../views/profile.ejs', templateVars);
  });
});


// ___________________________________________________________________________ //
// *-------------------------------- Exports --------------------------------* //

module.exports = router;
