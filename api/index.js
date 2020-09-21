require('dotenv').config();
import express from 'express'
const app = express();

// JSON


// Express body parser
app.use(express.json());


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