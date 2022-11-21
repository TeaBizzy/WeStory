// ___________________________________________________________________________ //
// *----------------------------- Documentation -----------------------------* //
/*
* All invalid routes are defined here
* Since this file is loaded in server.js into /,
* these routes are mounted onto /
* See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
*/


// ___________________________________________________________________________ //
// *----------------------------- Configuration -----------------------------* //

const express = require('express');
const router  = express.Router();


// ___________________________________________________________________________ //
// *-------------------------------- Routing --------------------------------* //

router.get('/*', (req, res) => {
  res.redirect('/stories');
});


// ___________________________________________________________________________ //
// *-------------------------------- Exports --------------------------------* //

module.exports = router;
