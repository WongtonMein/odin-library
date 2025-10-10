// ACTUAL LIBRARY
const myLibrary = [];

// BOOK CONSTRUCTOR
function Book(title, author, pages, readStatus) {
  // the constructor...
  this.uniqueID = crypto.randomUUID();
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.readStatus = readStatus;
};

// #region SAMPLE LIBRARY

const mySampleLibrary = [];

addBookToLibrary("book 1", "author 1", 123, true, mySampleLibrary);
addBookToLibrary("book 2", "author 2", 234, false, mySampleLibrary);
addBookToLibrary("book 3", "author 3", 345, false, mySampleLibrary);
addBookToLibrary("book 4", "author 4", 456, true, mySampleLibrary);

// #endregion

// LIBRARY FUNCTIONS

function createBook(title, author, pages, readStatus) {
  return new Book(title, author, pages, readStatus);
};

function addBookToLibrary(title, author, pages, readStatus, library) {
  // take params, create a book then store it in the array
  library.push(createBook(title, author, pages, readStatus));
};

function printLibrary(library) {
  for (let i = 0; i < library.length; i++) {
    let listDetails = true;

    if (listDetails === true) {
      console.log(library[i]);
    } else {
      console.log(library[i].uniqueID);
      console.log(library[i].title);
      console.log(library[i].author);
      console.log(library[i].pages);
      console.log(library[i].readStatus);
      console.log("-------")
    };
  };
};