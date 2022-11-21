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

const express = require('express');
const router  = express.Router();


// ___________________________________________________________________________ //
// *-------------------------------- Routing --------------------------------* //

router.get('/', (req, res) => {
  const isLoggedIn = false;

  if (!isLoggedIn) {
    res.redirect('/login');
    return;
  }

  res.send('Home Page');
});

router.get('/:story_id', (req, res) => {
  const isLoggedIn = false;

  if (!isLoggedIn) {
    res.redirect('/login');
    return;
  }

  res.send(`Story: ${req.params.story_id} Page`);
});


// ___________________________________________________________________________ //
// *-------------------------------- Exports --------------------------------* //

module.exports = router;
