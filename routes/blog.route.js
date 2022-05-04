const express = require('express');
const router = express.Router();
const blogController = require('../controllers/blogController');

router.get('/get', blogController.getBlog);
router.get('/get-detail/:slug', blogController.getBlogBySlug);
router.get('/get-random', blogController.getBlogRandom);

module.exports = router;
