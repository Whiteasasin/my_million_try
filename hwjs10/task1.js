

const Book = require('./book');
const EBook = require('./ebook');

const book1 = new Book('1984', 'George Orwell', 1949);
const book2 = new Book('To Kill a Mockingbird', 'Harper Lee', 1960);
const eBook1 = new EBook('JavaScript: The Good Parts', 'Douglas Crockford', 2008, 'PDF');

book1.printInfo();
book2.printInfo();
eBook1.printInfo();

const booksArray = [book1, book2, eBook1];
const oldestBook = Book.getOldestBook(booksArray);
console.log('Oldest Book:');
oldestBook.printInfo();

const newEBook = EBook.createEBook(book1, 'EPUB');
console.log('New EBook:');
newEBook.printInfo();