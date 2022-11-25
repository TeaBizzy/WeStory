// ___________________________________________________________________________ //
// *----------------------------- Documentation -----------------------------* //
/*
* All routes for Login are defined here
* Since this file is loaded in server.js into /login,
*   these routes are mounted onto /login
* See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
*/


// ___________________________________________________________________________ //
// *----------------------------- Configuration -----------------------------* //

const express = require('express');
const { use } = require('./users-api');
const router  = express.Router();
const userQueries = require('../../db/queries/users');


// ___________________________________________________________________________ //
// *-------------------------------- Routing --------------------------------* //

// Renders the login page.
router.get('/', (req, res) => {
  // Get session cookie
  const sessionCookie = req.session.user_id;
  const isLoggedIn = sessionCookie ? true : false;

  // Redirect if logged in
  if (isLoggedIn) {
    res.redirect('/stories');
    return;
  }

  res.render('../views/login.ejs');
});


router.post('/', (req, res) => {
  // Get session cookie
  const sessionCookie = req.session.user_id;
  const isLoggedIn = sessionCookie ? true : false;

  // Redirect if logged in
  if (isLoggedIn) {
    return res.redirect('/stories');
  }

  const username = req.body.username;
  const password = req.body.password

  userQueries.getUser({username, password})
  .then((user) => {
    // Create session cookie
    req.session.user_id = user.id;
    res.redirect('/stories');
  })
});

// Logs the user in
router.get('/:id', (req, res) => {

  // Get session cookie
  const sessionCookie = req.session.user_id;
  const isLoggedIn = sessionCookie ? true : false;

  // Redirect if logged in
  if (isLoggedIn) {
    return res.redirect('/stories');
  }

  // Get Constants
  const id = req.params.id;
  const user = getUserByID(id, TEST_USERS_DB);
  const isValidUser = user ? true : false;

  // Handle invalid logins
  if (!isValidUser) {
    res.status(403);
    return res.send(`Error: User ${id} doesn't exist!`);
  }

  // Create session cookie
  req.session.user_id = user.id;
  res.redirect('/stories');
});


// ___________________________________________________________________________ //
// *-------------------------------- Exports --------------------------------* //

module.exports = router;


// ___________________________________________________________________________ //
// *-------------------------- TEST HELPERS DELETE --------------------------* //

// TODO: Remove this, once query is implemented.
const getUserByID = function(id, usersDB) {
  for (const user of usersDB) {
    if (user.id === Number(id)) {
      return user;
    }
  }
};


// ___________________________________________________________________________ //
// *------------------------- TEST CONSTANTS DELETE -------------------------* //
// NOTE: Delete these once queries are properly implemented.
const TEST_USERS_DB = [
  {
    id: 1,
    email: 'foo@bar.com',
    password: 'password'
  },
  {
    id: 2,
    email: 'steve@o.com',
    password: 'password'
  },
  {
    id: 3,
    email: 'shrek@swamp.com',
    password: 'password'
  },
];
