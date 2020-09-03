require('dotenv').config();
const express = require('express');
const app = express();
const jwt = require('jsonwebtoken');

// JSON
app.use(express.json());

// Express body parser
app.use(express.urlencoded({
  extended: true
}));

// Header requests access
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

//Router
app.use('/', require('./route/route'));
app.use('/public', express.static('public'));
app.listen(3001, () => {
  console.log('App listening on port 3001!');
});