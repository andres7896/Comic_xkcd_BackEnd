const express = require('express');
const bodyParser = require('body-parser');
const comicRouters = require('./routers/comics');
const cors = require('cors');
const app = express();

app.use(bodyParser.json());
app.use(cors({origin: '*'}));

app.use('/api/comics', comicRouters);

module.exports = app;