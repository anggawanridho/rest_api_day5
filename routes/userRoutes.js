const express = require('express');
const userController = require('../controllers/userController');
const loggingMiddleware = require('../middleware/loggingMiddleware');
const roleMiddleware = require('../middleware/roleMiddleware');

const router = express.Router();

router.use(loggingMiddleware);

router.post('/login', userController.loginUser);
router.post('/register', userController.registerUser);


module.exports = router;