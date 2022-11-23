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

// Returns a JSON object containing an array of story objects
router.get('/', (req, res) => {
  // Get session cookie
  const sessionCookie = req.session.user_id;
  const isLoggedIn = sessionCookie ? true : false;

  // Validates requester is authorized
  if (!isLoggedIn) {
    err = new Error('Access Denied')
    return res.status(401).send();
  }

  stories.getStories()
    .then(stories => {
      res.json({ stories });
    })
    .catch(err => {
      res
        .status(500)
        .json({ error: err.message });
    });
});

// the parameters passed would be inputed by users and needs to be changed
router.post('/', (req, res) => {
  // Get session cookie
  const sessionCookie = req.session.user_id;
  const isLoggedIn = sessionCookie ? true : false;

  // Validates requester is authorized
  if (!isLoggedIn) {
    err = new Error('Access Denied')
    return res.status(401).send();
  }

  const newStory = req.body;

  stories.addStory(newStory)
    .then(story => {
      res.json({story});
    })
    .catch(err => {
      res
      .status(500)
      .json({ error: err.message });
    });
});

// the id would be passed in when clicked on the container (the {id: 1} neeeds to be changed)
router.get('/:id', (req, res) => {
  // Get session cookie
  const sessionCookie = req.session.user_id;
  const isLoggedIn = sessionCookie ? true : false;

  // Validates requester is authorized
  if (!isLoggedIn) {
    err = new Error('Access Denied')
    return res.status(401).send();
  }

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
  // Get session cookie
  const sessionCookie = req.session.user_id;
  const isLoggedIn = sessionCookie ? true : false;

  // Validates requester is authorized
  if (!isLoggedIn) {
    err = new Error('Access Denied')
    return res.status(401).send();
  }

  res.send(`Modify story: ${req.params.id} & display it`);
});

router.get('/user/:id', (req, res) => {
  // Get session cookie
  const sessionCookie = req.session.user_id;
  const isLoggedIn = sessionCookie ? true : false;

  // Validates requester is authorized
  if (!isLoggedIn) {
    err = new Error('Access Denied')
    return res.status(401).send();
  }

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
