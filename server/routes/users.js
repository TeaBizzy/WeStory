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


// ___________________________________________________________________________ //
// *-------------------------------- Routing --------------------------------* //

router.get('/:id', (req, res) => {
  const isLoggedIn = false;

  if (!isLoggedIn) {
    res.redirect('/login');
    return;
  }

  res.send(`User: ${req.params.id} Stories`);
});


// ___________________________________________________________________________ //
// *-------------------------------- Exports --------------------------------* //

module.exports = router;
