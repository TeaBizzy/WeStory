/*
 * All routes for User Data are defined here
 * Since this file is loaded in server.js into /api/users,
 *   these routes are mounted onto /api/users
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */

const express = require('express');
const router  = express.Router();
const users = require('../../db/queries/users');
// const userQueries = require('../../db/queries/users');

// router.get('/', (req, res) => {
//   // userQueries.getUsers()
//   //   .then(users => {
//   //     res.json({ users });
//   //   })
//   //   .catch(err => {
//   //     res
//   //       .status(500)
//   //       .json({ error: err.message });
//   //   });
// });

router.get('/:id', (req, res) => {

});

router.post('/', (req, res) => {
  res.send('Insert a new user to the users table');
});

module.exports = router;
