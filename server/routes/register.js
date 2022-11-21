// ___________________________________________________________________________ //
// *----------------------------- Documentation -----------------------------* //
/*
* All routes for Register are defined here
* Since this file is loaded in server.js into /register,
* these routes are mounted onto /register
* See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
*/


// ___________________________________________________________________________ //
// *----------------------------- Configuration -----------------------------* //

const express = require('express');
const router  = express.Router();


// ___________________________________________________________________________ //
// *-------------------------------- Routing --------------------------------* //

router.get('/', (req, res) => {
  res.send('Register Page')
});

router.post('/', (req, res) => {
  res.send('You are now registered!')
});


// ___________________________________________________________________________ //
// *-------------------------------- Exports --------------------------------* //

module.exports = router;
