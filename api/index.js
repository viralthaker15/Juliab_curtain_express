const dotenv = require('dotenv').config();
const express = require('express');
const expressLayout = require('express-ejs-layouts');
const app = express();
const mongoose = require('mongoose');
var flash = require('connect-flash-plus');
var session = require('express-session');
global.cn = function (o) { return "undefined" == typeof o || null == o || "" == o.toString().trim() };


// Connect flash
app.use(
  session({
    secret: 'secret',
    resave: true,
    saveUninitialized: true
  })
);
app.use(flash());

// Global variables
app.use(function (req, res, next) {
  res.locals.success_msg = req.flash('success_msg');
  res.locals.error_msg = req.flash('error_msg');
  res.locals.warning_msg = req.flash('warning_msg');
  next();
});

//Ejs
app.use(expressLayout);
app.set('view engine', 'ejs');

// Express body parser
app.use(express.urlencoded({
  extended: true
}));

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});


//Router
app.use('/', require('./route/route'));
app.use('/public', express.static('public'));
app.listen(3001, () => {
  console.log('Example app listening on port 3001!');
});