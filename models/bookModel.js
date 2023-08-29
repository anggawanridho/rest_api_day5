const books = [
    { 
        id: 1,
        title: 'Laskar Pelangi',
        author: 'Andrea Hirata',
        year: 2005,
        publisher: 'Bentang Pustaka',
        genre: 'Novel',
        rating: 4.5
    },
    { 
        id: 2,
        title: 'Tenggelamnya Kapal Van der Wijck',
        author: 'Hamka',
        year: 1938,
        publisher: 'Pustaka Rakjat',
        genre: 'Romance',
        rating: 4.2
    },
    { 
        id: 3,
        title: 'Bumi Manusia',
        author: 'Pramoedya Ananta Toer',
        year: 1980,
        publisher: 'Hasta Mitra',
        genre: 'Historical Fiction',
        rating: 4.8
    },
    { 
        id: 4,
        title: 'Pulang',
        author: 'Leila S. Chudori',
        year: 2012,
        publisher: 'Kepustakaan Populer Gramedia',
        genre: 'Fiction',
        rating: 4.3
    },
    { 
        id: 5,
        title: 'Cantik itu Luka',
        author: 'Eka Kurniawan',
        year: 2002,
        publisher: 'Gramedia Pustaka Utama',
        genre: 'Literary Fiction',
        rating: 4.6
    },
    { 
        id: 6,
        title: 'Perahu Kertas',
        author: 'Dee Lestari',
        year: 2009,
        publisher: 'Bentang Pustaka',
        genre: 'Romance',
        rating: 4.0
    },
    { 
        id: 7,
        title: 'Dilan 1990',
        author: 'Pidi Baiq',
        year: 2014,
        publisher: 'Pastel Books',
        genre: 'Romance',
        rating: 4.5
    },
    { 
        id: 8,
        title: 'Sang Pemimpi',
        author: 'Andrea Hirata',
        year: 2006,
        publisher: 'Bentang Pustaka',
        genre: 'Novel',
        rating: 4.2
    },
    { 
        id: 9,
        title: 'Padang Bulan',
        author: 'Andrea Hirata',
        year: 2005,
        publisher: 'Bentang Pustaka',
        genre: 'Novel',
        rating: 4.1
    },
    { 
        id: 10,
        title: 'Pergi',
        author: 'Tere Liye',
        year: 2018,
        publisher: 'Republika',
        genre: 'Fiction',
        rating: 4.0
    },
    { 
        id: 11,
        title: 'Sepotong Hati Yang Baru',
        author: 'Tere Liye',
        year: 2006,
        publisher: 'Republika',
        genre: 'Romance',
        rating: 4.3
    },
    { 
        id: 12,
        title: 'Aku Ada Karena Kau Ada',
        author: 'Tere Liye',
        year: 2007,
        publisher: 'Republika',
        genre: 'Romance',
        rating: 4.4
    },
    { 
        id: 13,
        title: 'Negeri 5 Menara',
        author: 'Ahmad Fuadi',
        year: 2009,
        publisher: 'Gramedia Pustaka Utama',
        genre: 'Novel',
        rating: 4.6
    },
    { 
        id: 14,
        title: 'Hujan',
        author: 'Tere Liye',
        year: 2014,
        publisher: 'Republika',
        genre: 'Fiction',
        rating: 4.2
    },
    { 
        id: 15,
        title: 'Pulang',
        author: 'Tere Liye',
        year: 2015,
        publisher: 'Republika',
        genre: 'Fiction',
        rating: 4.1
    }
];

function getAllBooks() {
    return books;
}


module.exports = {
    getAllBooks,
    // getBookById,
    // addBook,
    // updateBook,
    // deleteBook
};