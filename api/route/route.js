const express = require('express');
const router = express.Router();

const apiRoute = require('./apiRoute');
const { route } = require('./apiRoute');

//Without middleware (For shopify store)
router.use('/api', apiRoute); 

//Ask for middleware 
router.get('/', (req, res) => res.render('login'));
router.post('/', (req, res) => require('../controller/install').getInstall(req,res));


// After middleware Middleware  
router.use('/layout',(req, res) =>  res.render('react',{layout: "react-layout"})); 
router.get('/create-meta-field', (req, res) => require('../controller/shopify-api').createMetaFields(req,res));

router.get('/callback', (req, res) => require('../controller/install').getCallback(req,res));

module.exports = router;