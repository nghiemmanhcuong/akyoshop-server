const express = require('express');
const router = express.Router();
const verifuToken = require('../middleware/verifyToken');
const orderController = require('../controllers/orderController');

router.post('/add',verifuToken,orderController.addOrder);

module.exports = router;