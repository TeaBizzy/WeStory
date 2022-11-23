// ___________________________________________________________________________ //
// *----------------------------- Documentation -----------------------------* //
/*
* All routes for Stories API are defined here
* Since this file is loaded in server.js into /api/upvotes
* these routes are mounted onto /api/upvotes
* See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
*/


// ___________________________________________________________________________ //
// *----------------------------- Configuration -----------------------------* //

const express = require('express');
const router  = express.Router();


// ___________________________________________________________________________ //
// *-------------------------------- Routing --------------------------------* //

router.post('/', (req, res) => {
  // Get session cookie
  const sessionCookie = req.session.user_id;
  const isLoggedIn = sessionCookie ? true : false;

  // Validates requester is authorized
  if (!isLoggedIn) {
    err = new Error('Access Denied')
    return res.status(401).send();
  }
  res.send('Insert a new upvote to the upvotes table');
});

router.delete('/:user_id', (req, res) => {
  // Get session cookie
  const sessionCookie = req.session.user_id;
  const isLoggedIn = sessionCookie ? true : false;

  // Validates requester is authorized
  if (!isLoggedIn) {
    err = new Error('Access Denied')
    return res.status(401).send();
  }
  res.send('Delete from the upvotes table by user_id');
});

router.delete('/:contribution_id', (req, res) => {
  // Get session cookie
  const sessionCookie = req.session.user_id;
  const isLoggedIn = sessionCookie ? true : false;

  // Validates requester is authorized
  if (!isLoggedIn) {
    err = new Error('Access Denied')
    return res.status(401).send();
  }
  res.send('Delete from the upvotes table by contribution_id');
});


// ___________________________________________________________________________ //
// *-------------------------------- Exports --------------------------------* //

module.exports = router;
