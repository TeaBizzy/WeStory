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


// ___________________________________________________________________________ //
// *-------------------------------- Routing --------------------------------* //

router.get('/', (req, res) => {
  // TODO: Implement session cookie
  const isLoggedIn = false;

  if (isLoggedIn) {
    res.redirect('/stories');
    return;
  }

  res.send('Login Page');
});

router.post('/', (req, res) => {
  res.redirect('/stories');
});


// ___________________________________________________________________________ //
// *-------------------------------- Exports --------------------------------* //

module.exports = router;


// ___________________________________________________________________________ //
// *-------------------------- TEST HELPERS DELETE --------------------------* //

// TODO: Remove this, once query is implemented.
const getUserByEmail = function(email, usersDB) {
  for (const user in usersDB) {
    if(user.email === email) {
      return user;
    }
  }
}


// ___________________________________________________________________________ //
// *------------------------- TEST CONSTANTS DELETE -------------------------* //
// NOTE: Delete these once queries are properly implemented.
const TEST_USERS_DB = [
  {
    email: 'foo@bar.com',
    password: 'password'
  },
  {
    email: 'steve@o.com',
    password: 'password'
  },
  {
    email: 'shrek@swamp.com',
    password: 'password'
  },
]
