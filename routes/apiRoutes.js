// Dependencies

const path = require('path');
const fs = require('fs');
const { v4: uuidv4 } = require('uuid');
const db = require('../db/db.json')

// Routes

module.exports = (app) => {
    app.get('/api/notes', (req, res) => {
    res.sendFile(path.join(__dirname, "../db/db.json"))
});

app.post('/api/notes', (req, res) => {
    const newNote = req.body;
    id = uuidv4();
    // req.body.it = uuidv4();
    db.push(newNote);
    console.log(db);

    fs.writeFile(path.join(__dirname, '../db/db.json'), JSON.stringify(db), function(err) {
        if (err) throw err;
        res.json('response')
    })
});

app.delete('/api/notes/:id', (req, res) => {
    
})

};
