// ___________________________________________________________________________ //
// *----------------------------- Documentation -----------------------------* //
/*
* All routes for Register are defined here
* Since this file is loaded in server.js into /register,
* these routes are mounted onto /register
* See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
*/


// ___________________________________________________________________________ //
// *----------------------------- Configuration -----------------------------* //

const express = require('express');
const router  = express.Router();


// ___________________________________________________________________________ //
// *-------------------------------- Routing --------------------------------* //

router.get('/', (req, res) => {
  const isLoggedIn = false;

  if(isLoggedIn) {
    res.redirect('/stories');
    return;
  }

  res.send('Register Page')
});

router.post('/', (req, res) => {
  res.redirect('/stories')
});


// ___________________________________________________________________________ //
// *-------------------------------- Exports --------------------------------* //

module.exports = router;
