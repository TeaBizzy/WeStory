// ___________________________________________________________________________ //
// *----------------------------- Documentation -----------------------------* //
/*
* All routes for Contributions API are defined here
* Since this file is loaded in server.js into /api/contributions,
* these routes are mounted onto /api/contributions.
* See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
*/


// ___________________________________________________________________________ //
// *----------------------------- Configuration -----------------------------* //

const express = require('express');
const router  = express.Router();


// ___________________________________________________________________________ //
// *-------------------------------- Routing --------------------------------* //

router.get('/:story_id', (req, res) => {
  res.send('Query for contributions by story_id');
});

router.post('/', (req, res) => {
  res.send('Insert a new contribution into the DB & display it');
});


router.put('/:id', (req, res) => {
  res.send(`Modify contribution: ${req.params.id} & display it`);
});


// ___________________________________________________________________________ //
// *-------------------------------- Exports --------------------------------* //

module.exports = router;
