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
const stories = require('../../db/queries/stories');


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

// the parameters passed would be inputed by users and needs to be changed
router.post('/', (req, res) => {
  stories.addStory({user_id: 1, title: 'hello', content: 'world'})
    .then(story => {
      res.json({ story });
    })
    .catch(err => {
      res
        .status(500)
        .json({ error: err.message });
    });
});

// the id would be passed in when clicked on the container (the {id: 1} neeeds to be changed)
router.get('/:id', (req, res) => {
  stories.getStoryById({id: 5})
    .then(story => {
      res.json({ story });
    })
    .catch(err => {
      res
        .status(500)
        .json({ error: err.message });
    });
});

router.put('/:id', (req, res) => {
  res.send(`Modify story: ${req.params.id} & display it`);
});

router.get('/user/:id', (req, res) => {
  stories.getStoryByUserId({id: 1})
    .then(story => {
      res.json({ story });
    })
    .catch(err => {
      res
        .status(500)
        .json({ error: err.message });
    });
});


// ___________________________________________________________________________ //
// *-------------------------------- Exports --------------------------------* //

module.exports = router;
