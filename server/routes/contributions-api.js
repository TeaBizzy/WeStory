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
const queries = require('../../db/queries/contributions');


// ___________________________________________________________________________ //
// *-------------------------------- Routing --------------------------------* //

router.get('/:story_id', (req, res) => {
  const storyId = req.params.story_id;
  console.log(storyId)

  queries.getContributions(storyId)
    .then((contributions) =>
        res.json({contributions})
      )
    .catch(err => {
      res
        .status(500)
        .json({error: err.message});
    })
});

router.post('/', (req, res) => {
  res.send('Insert a new contribution into the DB & display it');
});


router.put('/:id', (req, res) => {
  res.send(`Modify contribution: ${req.params.id} & display it`);
});

router.delete('/:id', (req, res) => {
  res.send(`Delete contribution: ${req.params.id} & remove it from document`);
});


// ___________________________________________________________________________ //
// *-------------------------------- Exports --------------------------------* //

module.exports = router;
