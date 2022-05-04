const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

router.get('/get-trouser', productController.getTrouserProduct);
router.get('/get-shirst', productController.getShirstProduct);
router.get('/popular-product', productController.getPopularProduct);
router.get('/new-product', productController.getNewProduct);
router.get('/get/:slug', productController.getProductBySlug);
router.get('/get-random', productController.getProductRandom);

module.exports = router;
