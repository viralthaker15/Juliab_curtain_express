const express = require('express');
const router = express.Router();
router.get('/test',(req,res)=>{
  res.json({"hello":"Test"});
})
router.get('/create-product', (req, res) => require('../controller/shopify-api').createProduct(req,res));


module.exports = router;