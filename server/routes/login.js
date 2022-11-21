// ___________________________________________________________________________ //
// *----------------------------- Documentation -----------------------------* //
/*
* All routes for Login are defined here
* Since this file is loaded in server.js into /login,
*   these routes are mounted onto /login
* See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
*/


// ___________________________________________________________________________ //
// *----------------------------- Configuration -----------------------------* //

const express = require('express');
const router  = express.Router();


// ___________________________________________________________________________ //
// *-------------------------------- Routing --------------------------------* //

router.get('/', (req, res) => {
  // TODO: Implement session cookie
  const isLoggedIn = false;

  if (isLoggedIn) {
    res.redirect('/stories');
    return;
  }

  res.send('Login Page');
});

router.post('/', (req, res) => {
  res.redirect('/stories');
});


// ___________________________________________________________________________ //
// *-------------------------------- Exports --------------------------------* //

module.exports = router;
