const express = require('express');
const bookController = require('../controllers/bookController');
const loggingMiddleware = require('../middleware/loggingMiddleware');
const roleMiddleware = require('../middleware/roleMiddleware');

const router = express.Router();

router.use(loggingMiddleware);

router.get('/books', roleMiddleware, bookController.getBooks);


module.exports = router;