// DEPENDENCIES
// Series of npm packages that we will use to give our server useful functionality

const express = require('express');
const path = require('path');
const fs = require('fs');
// const noteTaker = require('../public/assets/js/index')

const app = express();

const PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

// ROUTER
// The below points our server to a series of "route" files.
// These routes give our server a "map" of how to respond when users visit or request data from various URLs.

require('./routes/apiRoutes')(app);
require('./routes/htmlRoutes')(app);

// LISTENER
// The below code effectively "starts" our server

app.listen(PORT, () => {
console.log(`App listening on PORT: ${PORT}`);
});
