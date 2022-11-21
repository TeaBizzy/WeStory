// ___________________________________________________________________________ //
// *----------------------------- Documentation -----------------------------* //
/*
* All routes for Contributions are defined here
* Since this file is loaded in server.js into stories/:story_id/contributions/,
* these routes are mounted onto /stories/:story_id/contributions/.
* See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
*/


// ___________________________________________________________________________ //
// *----------------------------- Configuration -----------------------------* //

const express = require('express');
const router  = express.Router();


// ___________________________________________________________________________ //
// *-------------------------------- Routing --------------------------------* //

router.get('/', (req, res) => {
  res.send('Contributions Loaded')
});

router.post('/', (req, res) => {
  res.send('Contribution Created!')
});


router.put('/:id', (req, res) => {
  res.send(`Contribution: ${req.params.id} has been modified!`)
});


// ___________________________________________________________________________ //
// *-------------------------------- Exports --------------------------------* //

module.exports = router;
