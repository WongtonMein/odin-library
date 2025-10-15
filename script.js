// LIBRARY ARRAY
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

addSampleBooksToLibrary("sample book 1", "author 1", 123, true, myLibrary);
addSampleBooksToLibrary("sample book 2", "author 2", 234, false, myLibrary);
addSampleBooksToLibrary("sample book 3", "author 3", 345, false, myLibrary);
addSampleBooksToLibrary("sample book 4", "author 4", 456, true, myLibrary);

function addSampleBooksToLibrary(title, author, pages, readStatus) {
  // take params, create a book then store it in the array
  myLibrary.push(createBook(title, author, pages, readStatus));
};

// #endregion

// LIBRARY FUNCTIONS

function createBook(title, author, pages, readStatus) {
  return new Book(title, author, pages, readStatus);
};

function addBookToLibrary() {
  // take params, create a book then store it in the array
  myLibrary.push(processNewBookInputs());
  console.log("New book added")
};

// OLD FUNCTION USED FOR EARLY TESTING
// function printLibrary() {
//   for (let i = 0; i < myLibrary.length; i++) {
//     let listDetails = true;

//     if (listDetails === true) {
//       console.log(myLibrary[i]);
//     } else {
//       console.log(myLibrary[i].uniqueID);
//       console.log(myLibrary[i].title);
//       console.log(myLibrary[i].author);
//       console.log(myLibrary[i].pages);
//       console.log(myLibrary[i].readStatus);
//       console.log("-------")
//     };
//   };
// };

function processNewBookInputs() {
  // store inputs in variables
  let title = document.getElementById("book-title").value;
  let author = document.getElementById("book-author").value;
  let pages = document.getElementById("book-page-count").valueAsNumber;
  let readStatus

  if (document.getElementById("book-read-status").checked) {
    readStatus = true;
  } else {
    readStatus = false;
  }
  return createBook(title, author, pages, readStatus);
};

// LIBRARY DISPLAY FUNCTIONS

function displayCurrentLibrary() {
  clearTableBody();
  populateTable();
}

function clearTableBody() {
  const library = document.getElementById("library-table");
  if (library) {
    const tbody = library.querySelector("tbody");
    if (tbody) {
      while (tbody.rows.length > 0) {
        tbody.deleteRow(0);
      };
    };
  };
  console.log("Rows deleted")
};

function populateTable() {
  const library = document.getElementById("library-table-rows");

  myLibrary.forEach(book => {
    const row = library.insertRow();

    const titleCell = row.insertCell();
    titleCell.textContent = book.title;
    titleCell.style.border = "1px solid black"

    const authorCell = row.insertCell();
    authorCell.textContent = book.author;
    authorCell.style.border = "1px solid black"

    const pageCountCell = row.insertCell();
    pageCountCell.textContent = book.pages;
    pageCountCell.style.border = "1px solid black"

    const readStatusCell = row.insertCell();
    readStatusCell.textContent = book.readStatus;
    readStatusCell.style.border = "1px solid black"

  });
  console.log("Current library displayed")
};

function clearLibrary() {
  myLibrary.length = 0;
  console.log("myLibrary deleted")
};

// TO IMPLEMENT

function markReadUnread() {
  return
};

function deleteEntry() {
  return
};

// MARK ENTRY AS READ/UNREAD
//// DISPLAY CHECK VS X FOR READ/UNREAD --- CSS
// DELETE SINGLE ENTRY
// ADD "ADD NEW ENTRY" JS FUNCTION
