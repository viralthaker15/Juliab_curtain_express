const express = require('express');
const router = express.Router();
router.get('/getToken', (req, res) => {
  res.json({ user: req.user });
}
);
router.get('/create-meta-field', (req, res) => require('../controller/shopify-api').createMetaFields(req, res));

module.exports = router;