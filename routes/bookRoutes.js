const express = require('express');
const bookController = require('../controllers/bookController');
const loggingMiddleware = require('../middleware/loggingMiddleware');
const roleMiddleware = require('../middleware/roleMiddleware');

const router = express.Router();

router.use(loggingMiddleware);

router.get('/books', bookController.getBooks);

router.get('/book', bookController.getBookById);

router.post('/books', roleMiddleware('admin'), bookController.addNewBook);

router.put('/books', roleMiddleware('admin'), bookController.updateExistingBook);

router.delete('/books', roleMiddleware('admin'), bookController.removeBook);


module.exports = router;