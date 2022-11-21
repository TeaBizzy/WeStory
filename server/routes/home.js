// ___________________________________________________________________________ //
// *----------------------------- Documentation -----------------------------* //
/*
* All routes for Home are defined here
* Since this file is loaded in server.js into /,
* these routes are mounted onto /
* See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
*/


// ___________________________________________________________________________ //
// *----------------------------- Configuration -----------------------------* //

const express = require('express');
const router  = express.Router();


// ___________________________________________________________________________ //
// *-------------------------------- Routing --------------------------------* //

router.get('/', (req, res) => {
  res.send('Home Page');
});

router.post('/', (req, res) => {
  res.send('New Story Created!')
});


// ___________________________________________________________________________ //
// *-------------------------------- Exports --------------------------------* //

module.exports = router;
