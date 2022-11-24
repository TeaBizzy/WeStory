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
  // Get session cookie
  const sessionCookie = req.session.user_id;
  const isLoggedIn = sessionCookie ? true : false;

  // Validates requester is authorized
  if (!isLoggedIn) {
    err = new Error('Access Denied')
    return res.status(401).send();
  }

  const storyId = req.params.story_id;

  queries.getContributions(storyId)
    .then((contributions) => {
      queries.getUpvotesByUser(sessionCookie)
        .then((upvotedUser) => {
          res.json({contributions, upvotedUser});
        });
    })
    .catch(err => {
      res
        .status(500)
        .json({error: err.message});
    })
});

router.post('/', (req, res) => {
  // Get session cookie
  const sessionCookie = req.session.user_id;
  const isLoggedIn = sessionCookie ? true : false;

  // Validates requester is authorized
  if (!isLoggedIn) {
    err = new Error('Access Denied')
    return res.status(401).send();
  }

  const newContribution = req.body;

  queries.addContribution(newContribution)
    .then(contribution => {
      res.json({contribution});
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
  res.send(`Modify contribution: ${req.params.id} & display it`);
});

router.delete('/:id', (req, res) => {
  // Get session cookie
  const sessionCookie = req.session.user_id;
  const isLoggedIn = sessionCookie ? true : false;

  // Validates requester is authorized
  if (!isLoggedIn) {
    err = new Error('Access Denied')
    return res.status(401).send();
  }
  res.send(`Delete contribution: ${req.params.id} & remove it from document`);
});


// ___________________________________________________________________________ //
// *-------------------------------- Exports --------------------------------* //

module.exports = router;
