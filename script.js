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

// #region SAMPLE BOOKS

addSampleBooksToLibrary("book 1", "author 1", 123, true, myLibrary);
addSampleBooksToLibrary("book 2", "author 2", 234, false, myLibrary);
addSampleBooksToLibrary("book 3", "author 3", 345, false, myLibrary);
addSampleBooksToLibrary("book 4", "author 4", 456, true, myLibrary);

function addSampleBooksToLibrary(title, author, pages, readStatus) {
  // take params, create a book then store it in the array
  myLibrary.push(createBook(title, author, pages, readStatus));
};

// #endregion

// LIBRARY FUNCTIONS

function createBook(title, author, pages, readStatus) {
  return new Book(title, author, pages, readStatus);
};

function addBookToLibrary(title, author, pages, readStatus) {
  // take params, create a book then store it in the array
  myLibrary.push(processNewBookInputs());
};

function printLibrary() {
  for (let i = 0; i < myLibrary.length; i++) {
    let listDetails = true;

    if (listDetails === true) {
      console.log(myLibrary[i]);
    } else {
      console.log(myLibrary[i].uniqueID);
      console.log(myLibrary[i].title);
      console.log(myLibrary[i].author);
      console.log(myLibrary[i].pages);
      console.log(myLibrary[i].readStatus);
      console.log("-------")
    };
  };
};

function processNewBookInputs() {
  // store inputs in variables
  let title = document.getElementById("book-title").value;
  let author = document.getElementById("book-author").value;
  let pages = document.getElementById("book-page-count").valueAsNumber;

  let readStatus

  if (document.getElementById("book-read-status-yes").checked) {
    readStatus = true
  } else if (document.getElementById("book-read-status-no").checked) {
    readStatus = false
  };

  // createBook
  return createBook(title, author, pages, readStatus);
};