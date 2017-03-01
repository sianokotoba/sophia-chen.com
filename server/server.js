'use strict';

const express = require('express');
const app = express();
const PORT = 3000;
const morgan = require('morgan');
const bodyParser = require('body-parser');
const resolve = require('path').resolve;

app.use(morgan('dev'));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Serve static files from ../public
app.use(express.static(resolve(__dirname, '..', 'public')));

app.listen(PORT, function () {
  console.log('Server listening on port', PORT);
});

