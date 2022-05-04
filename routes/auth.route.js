const express = require('express');
const router = express.Router();
const verifyToken = require('../middleware/verifyToken');
const authController = require('../controllers/authController');

router.post('/register', authController.register);
router.post('/login', authController.login);
router.get('/get',verifyToken, authController.getUser);

module.exports = router;
