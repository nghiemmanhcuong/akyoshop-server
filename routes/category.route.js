const express = require('express');
const router = express.Router();
const categoryController = require('../controllers/categoryController');

router.post('/post',categoryController.postCategory);
router.get('/get',categoryController.getCategory);

module.exports = router;