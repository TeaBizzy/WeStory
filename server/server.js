// ___________________________________________________________________________ //
// *----------------------------- Configuration -----------------------------* //

// load .env data into process.env
require('dotenv').config();

// Web server config
const sassMiddleware = require('../lib/sass-middleware');
const express = require('express');
const morgan = require('morgan');

const PORT = process.env.PORT || 8080;
const app = express();

app.set('view engine', 'ejs');


// ________________________________________________________________________ //
// *----------------------------- Middleware -----------------------------* //

// Load the logger first so all (static) HTTP requests are logged to STDOUT
// 'dev' = Concise output colored by response status for development use.
// The :status token will be colored red for server error codes, yellow for client error codes, cyan for redirection codes, and uncolored for all other codes.
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(
  '/styles',
  sassMiddleware({
    source: __dirname + '/styles',
    destination: __dirname + '/public/styles',
    isSass: false, // false => scss, true => sass
  })
);
app.use(express.static('public'));



// _____________________________________________________________________ //
// *---------------------------- Resources ----------------------------* //
// Separated Routes for each Resource
// Note: Feel free to replace the example routes below with your own
const userApiRoutes = require('./routes/users-api');
const widgetApiRoutes = require('./routes/widgets-api');
const usersRoutes = require('./routes/users');
const loginRoutes = require('./routes/login');
const logoutRoutes = require('./routes/logout');
const registerRoutes = require('./routes/register');
const storiesRoutes = require('./routes/stories');
const contributionsRoutes = require('./routes/contributions');
const defaultRoutes = require('./routes/default');



// _____________________________________________________________________ //
// *----------------------------- Routing -----------------------------* //
// Mount all resource routes
// Note: Feel free to replace the example routes below with your own
// Note: Endpoints that return data (eg. JSON) usually start with `/api`
app.use('/api/users', userApiRoutes);
app.use('/api/widgets', widgetApiRoutes);
app.use('/users', usersRoutes);
app.use('/login', loginRoutes);
app.use('/logout', logoutRoutes);
app.use('/register', registerRoutes);
app.use('/stories/', storiesRoutes);
app.use('/stories/:story_id/contributions', contributionsRoutes);
app.use('/', defaultRoutes);
// Note: mount other resources here, using the same pattern above


// _______________________________________________________________________ //
// *----------------------------- Listening -----------------------------* //

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
