import express from 'express';
const router = express.Router();
router.post('/create-product', (req, res) => require('../controller/shopify-api').createProduct(req,res));


module.exports = router;