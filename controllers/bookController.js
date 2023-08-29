const BookModel = require('../models/bookModel');
const secretKey = `mySecretKeyIsMyDogsName`;

async function getBooks(req, res) {
    try {
        const allBooks = await BookModel.getAllBooks();
        res.status(200).json(allBooks);
    } catch (error) {
        // Handle the error appropriately
        res.status(500).json({ error: "An error occurred", message: `${error.message}` });
    }
}



module.exports = {
    getBooks,
    // getBookById,
    // addNewBook,
    // updateExistingBook,
    // removeBook
};