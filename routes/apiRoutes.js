// Dependencies

const path = require('path');
const fs = require('fs');
const { v4: uuidv4 } = require('uuid');
const db = require('../db/db.json');
// const { title } = require('process');

// Routes

module.exports = (app) => {
    app.get('/api/notes', (req, res) => {
    res.sendFile(path.join(__dirname, "../db/db.json"))
});

app.post('/api/notes', (req, res) => {
    id = uuidv4();
    console.log(id);
    const newNote = {
        id: id,
        title: req.body.title,
        text: req.body.text
    }
    fs.readFile(path.join(__dirname, '../db/db.json'), (err, data) => {
        if (err) throw err;
        let testNotes = JSON.parse(data);
        db.push(newNote);
        console.log(db);

    fs.writeFile(path.join(__dirname, '../db/db.json'), JSON.stringify(db), function(err) {
        if (err) throw err;
        res.send(newNote)
    })
})
});

app.delete('/api/notes/:id', (req, res) => {
    const { id } = req.params;
    fs.readFile(path.join(__dirname, '../db/db.json'), (err, data) => {
        if (err) throw err;
        let allNotes = JSON.parse(data);
        let filteredNotes = allNotes.filter(note => note.id != id)

        fs.writeFile(path.join(__dirname, '../db/db.json'), JSON.stringify(filteredNotes), function(err) {
            if (err) throw err;
            res.send(filteredNotes)
        })
    })
})

};
