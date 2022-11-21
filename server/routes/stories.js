// ___________________________________________________________________________ //
// *----------------------------- Documentation -----------------------------* //
/*
* All routes for Stories are defined here
* Since this file is loaded in server.js into /stories/:story_id,
* these routes are mounted onto /stories/:story_id.
* See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
*/


// ___________________________________________________________________________ //
// *----------------------------- Configuration -----------------------------* //

const express = require('express');
const router  = express.Router();


// ___________________________________________________________________________ //
// *-------------------------------- Routing --------------------------------* //

router.get('/:story_id', (req, res) => {
  res.send(`Story: ${req.params.story_id} Page`)
});

router.put('/:story_id', (req, res) => {
  res.send(`Story: ${req.params.story_id} has been modified!`)
});


// ___________________________________________________________________________ //
// *-------------------------------- Exports --------------------------------* //

module.exports = router;
