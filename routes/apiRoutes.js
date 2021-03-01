// Dependencies

const path = require('path')
const noteTaker = require('../public/assets/js/index')
const express = require('express')

// Routes

module.exports = (app) => {
    app.get('/api/notes', (req, res) => res.json(noteTaker));
};