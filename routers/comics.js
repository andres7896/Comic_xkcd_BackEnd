const express = require('express');
const comics = require('../controllers/comicController');
const app = express();

app.post('/create', comics.create)
app.get('/', comics.getComics)

module.exports = app;