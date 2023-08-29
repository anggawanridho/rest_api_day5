const BookModel = require('../models/bookModel');
const secretKey = `mySecretKeyIsMyDogsName`;

function getBooks(req, res) {
    const allBooks = BookModel.getAllBooks();
    res.status(200).json(allBooks);
}

function getBookById(req, res) {
    const bookId = parseInt(req.query.bookId);
    const book = BookModel.getBookById(bookId);

    if (book) {
        res.status(200).json(book);
    } else {
        res.status(404).json({ message: 'Book not found' });
    }
}

function addNewBook(req, res) {
    const title = req.query.title;
    const author = req.query.author;
    const year = parseInt(req.query.year);
    const genre = req.query.genre;
    const rating = req.query.rating;

    // Check if at least one of the required fields is filled
    if (!title && !author && isNaN(year) && !genre && !rating) {
        return res.status(400).json({ message: 'At least one required field should be provided' });
    }
    
    const newBook = {
        title: title || undefined,
        author: author || undefined,
        year: isNaN(year) ? undefined : year,
        genre: genre || undefined,
        rating: rating || undefined
    };
    
    const addedBook = BookModel.addBook(newBook);
    res.status(200).json(addedBook);
}

function updateExistingBook(req, res) {
    const bookId = parseInt(req.query.bookId);
    const title = req.query.title;
    const author = req.query.author;
    const year = parseInt(req.query.year);
    const genre = req.query.genre;
    const rating = req.query.rating;

    const existingBook = BookModel.getBookById(bookId);

    const updatedBook = {
        id: bookId,
        title: title !== undefined ? title : existingBook.title,
        author: author !== undefined ? author : existingBook.author,
        year: isNaN(year) ? existingBook.year : year,
        publisher: existingBook.publisher,
        genre: genre !== undefined ? genre : existingBook.genre,
        rating: rating !== undefined ? rating : existingBook.rating
    };
    console.log(updatedBook);
    const result = BookModel.updateBook(bookId, updatedBook);
    
    if (result) {
        res.status(200).json(result);
    } else {
        res.status(404).json({ message: 'Book not found' });
    }
}

function removeBook(req, res) {
    const bookId = parseInt(req.query.bookId);
    const deletedBook = BookModel.deleteBook(bookId);

    if (deletedBook) {
        res.status(200).json({ message: 'Book deleted successfully', book: deletedBook });
    } else {
        res.status(404).json({ message: 'Book not found' });
    }
}



module.exports = {
    getBooks,
    getBookById,
    addNewBook,
    updateExistingBook,
    removeBook
};