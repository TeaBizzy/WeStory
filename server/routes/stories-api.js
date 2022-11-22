// ___________________________________________________________________________ //
// *----------------------------- Documentation -----------------------------* //
/*
* All routes for Stories API are defined here
* Since this file is loaded in server.js into /api/stories
* these routes are mounted onto /api/stories
* See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
*/


// ___________________________________________________________________________ //
// *----------------------------- Configuration -----------------------------* //

const express = require('express');
const router  = express.Router();
const stories =require('../../db/queries/stories');


// ___________________________________________________________________________ //
// *-------------------------------- Routing --------------------------------* //

router.get('/', (req, res) => {
  stories.getStories()
    .then(story => {
      res.json({ story });
    })
    .catch(err => {
      res
        .status(500)
        .json({ error: err.message });
    });
});

router.post('/', (req, res) => {
  res.send('Insert a new story to the stories table');
});

router.get('/:id', (req, res) => {
  res.send('Query stories table for specified id');
});

router.put('/:id', (req, res) => {
  res.send(`Modify story: ${req.params.id} & display it`);
});

router.get('/user/:id', (req, res) => {
  res.send('Query stories table for stories by specified user');
});


// ___________________________________________________________________________ //
// *-------------------------------- Exports --------------------------------* //

module.exports = router;
