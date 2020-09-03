const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const apiRoute = require('./apiRoute');
const autRoute = require('./authRoute');

//Middleware
function authToken(req, res, next) {
  const token = req.headers['token'];
  if (!token) return res.json({ error: "Token is empty" });
  jwt.verify(token, "test@123", (err, user) => {
    if (err) {
      console.log(err);
      res.json({ err: err });
    }
    req.user = user;
    next();
  })
}

//Without Middlware
router.use('/api', apiRoute);

//Middleware process
router.get('/callback', (req, res) => require('../controller/install').getCallback(req, res));
router.get('/', (req, res) => require('../controller/install').getInstall(req, res));

//With middleare
router.use('/a',authToken, autRoute);


module.exports = router;