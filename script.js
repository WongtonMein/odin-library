// LIBRARY CONSTANTS
const myLibrary = [];

// BOOK CONSTRUCTOR
function Book(title, author, pages, readStatus) {
  // the constructor...
  this.uniqueId = crypto.randomUUID();
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.readStatus = readStatus;

  this.toggleReadStatus = function() {
    if (this.readStatus === true) {
      this.readStatus = false;
    } else if (this.readStatus === false) {
      this.readStatus = true;
    };
  };
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

// #region MODAL DIALOG FUNCTIONS
const newBookModal = document.getElementById("new-book-modal");
const newBookDialog = document.getElementById("new-book-dialog");
const submitNewBook = document.getElementById("form-submit-button");

newBookModal.addEventListener("click", (event) => {
  newBookDialog.showModal();
});

submitNewBook.addEventListener("click", (event) => {
  newBookDialog.close();
})

// #endregion

// #region LIBRARY FUNCTIONS

function createBook(title, author, pages, readStatus) {
  return new Book(title, author, pages, readStatus);
};

function addBookToLibrary() {
  // take params, create a book then store it in the array
  let newBook = processNewBookInputs()
  console.log(newBook)
  if (newBook === undefined) {
    return
  } else {
    myLibrary.push(newBook);
    console.log("New book added");
  } 
};

function processNewBookInputs() {
  // store inputs in variables
  let title = document.getElementById("book-title").value;
  let author = document.getElementById("book-author").value;
  let pages = document.getElementById("book-page-count").valueAsNumber;
  let readStatus

  console.log(title);
  console.log(author);
  console.log(pages);

  if (document.getElementById("book-read-status").checked) {
    readStatus = true;
  } else {
    readStatus = false;
  }

  if (title == "" || author == "" || pages == NaN) {
    title = ""
    author = ""
    pages = ""
    return
  } else {
    return createBook(title, author, pages, readStatus);
  }
};

// #endregion

// #region LIBRARY DISPLAY FUNCTIONS

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

function formatCell(cell) {
  cell.style.border = "1px solid black";
  cell.style.padding = "5px";
  cell.style.maxWidth = "150px";
  cell.style.textOverflow = "ellipsis";
  cell.style.overflow = "hidden";
  cell.style.whiteSpace = "no-wrap";
};

function formatBtnImg(cell) {
  cell.style.textAlign = "center";
  cell.style.verticalAlign = "middle";
};

function populateTable() {
  const library = document.getElementById("library-table-rows");

  myLibrary.forEach(book => {
    const row = library.insertRow();

    // Data Attribute - Book Unique ID
    row.dataset.uniqueId = book.uniqueId;

    // Book Title
    const titleCell = row.insertCell();
    titleCell.textContent = book.title;
    formatCell(titleCell);

    // Book Author
    const authorCell = row.insertCell();
    authorCell.textContent = book.author;
    formatCell(authorCell);

    // Book Pages
    const pageCountCell = row.insertCell();
    pageCountCell.textContent = book.pages;
    formatCell(pageCountCell);

    // Book Read Status
    const checkImg = document.createElement("img");
    checkImg.src = "./images/check.svg"; // CHECK ICON SVG
    
    const xImg = document.createElement("img");
    xImg.src = "./images/x.svg"; // X ICON SVG

    const readStatusCell = row.insertCell();
    if (book.readStatus === true) {
      readStatusCell.appendChild(checkImg)
    } else if (book.readStatus === false) {
      readStatusCell.appendChild(xImg)
    };
    formatCell(readStatusCell);
    formatBtnImg(readStatusCell);

    // Mark Read/Unread Button
    const markReadBtn = document.createElement("button");
    if (book.readStatus === true) {
      markReadBtn.textContent = "Mark Unread";
    } else {
      markReadBtn.textContent = "Mark Read";
    };
    markReadBtn.style.minWidth = "100px";
    markReadBtn.style.padding = "5px";
    markReadBtn.style.borderRadius = "5px";
    markReadBtn.className = "mark-read-unread-button";
    markReadBtn.addEventListener("click", function() {
      book.toggleReadStatus();
      displayCurrentLibrary();
    })
    
    const markReadStatusCell = row.insertCell();
    markReadStatusCell.appendChild(markReadBtn);
    formatCell(markReadStatusCell);
    formatBtnImg(markReadStatusCell);

    // Delete Button
    const delImg = document.createElement("img");
    delImg.src = "./images/trash-2.svg"; // TRASH ICON SVG
    delImg.classList.add("del-img");

    const delImgBtn = document.createElement("button");
    delImgBtn.dataset.uniqueId = book.uniqueId;
    delImgBtn.classList.add("del-img-btn");
    delImgBtn.appendChild(delImg)

    delImgBtn.addEventListener("click", function(e) {
      deleteEntry(delImgBtn.dataset.uniqueId);
      displayCurrentLibrary();
    });

    const delBtnCell = row.insertCell();
    delBtnCell.appendChild(delImgBtn);
    formatCell(delBtnCell);
    formatBtnImg(delBtnCell);
  });
  console.log("Current library displayed")
};

function clearLibrary() {
  myLibrary.length = 0;
  console.log("myLibrary deleted")
};

function deleteEntry(bookId) {
  for (let book of myLibrary) {
    if (book.uniqueId === bookId) {
      console.log(`${book.title} deleted`)
      myLibrary.splice(myLibrary.indexOf(book), 1);
    };
  };
};

// #endregion

// #region DEFAULTS
displayCurrentLibrary();

// #endregion