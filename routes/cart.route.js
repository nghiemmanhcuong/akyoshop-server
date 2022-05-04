const express = require('express');
const router = express.Router();
const verifyToken = require('../middleware/verifyToken');
const cartController = require('../controllers/cartController');

router.get('/get',verifyToken,cartController.getCart);
router.post('/add',verifyToken,cartController.addToCart);
router.delete('/delete/:id',verifyToken,cartController.deleteInCart);
router.delete('/delete-many',verifyToken,cartController.deleteManyCart);

module.exports = router;


