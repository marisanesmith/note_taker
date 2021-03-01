// DEPENDENCIES
// Series of npm packages that we will use to give our server useful functionality

const express = require('express');
const path = require('path');
const fs = require('fs');
const noteTaker = require('../public/assets/js/index')



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

// app.get for the html files 

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, 'public/index.html'));
});

app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/notes.html'));
})

// app.get for the api files

app.get('/api/notes', (req, res) => res.json(noteTaker));

// app.post for the api files

app.post('/api/notes', (req, res) => {
    const addNote = req.body;
    // res.json(path.join(__dirname, 'public/notes.html'))
});

// LISTENER
// The below code effectively "starts" our server

app.listen(PORT, () => {
console.log(`App listening on PORT: ${PORT}`);
});
