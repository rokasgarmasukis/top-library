let myLibrary = [
  {
    id: 1,
    author: 'God',
    title: 'Bible',
    pages: 1500,
    read: true
  },
  {
    id: 2,
    author: 'rokas',
    title: 'love it',
    pages: 500,
    read: false
  }
];

const bookList = document.getElementById('books');
const authorField = document.getElementById('author');
const titleField = document.getElementById('title');
const pagesField = document.getElementById('pages');
const readField = document.getElementById('read');
const submit = document.getElementById('submit');

function Book(id, author, title, pages, read) {
  this.id = id;
  this.author = author;
  this.title = title;
  this.pages = pages;
  this.read = read;
}

Book.prototype.toggleRead = function () {
  this.read = !this.read;
};

function addBookToLibrary(e) {
  e.preventDefault();

  let author = authorField.value;
  let title = titleField.value;
  let pages = pagesField.value;
  let read = readField.checked;
  let id = myLibrary[myLibrary.length - 1].id + 1

  const book = new Book(id, author, title, pages, read);

  myLibrary.push(book);
  
  displayCards();

  resetFields();

  console.log('added');
}

function resetFields() {
  authorField.value = '';
  titleField.value = '';
  pagesField.value = '';
  readField.checked = false;
}

submit.addEventListener('click', addBookToLibrary);

function displayCards() {
  removeAllCards()
  console.log(myLibrary)
  myLibrary = myLibrary.sort((bk1, bk2) => bk1.id - bk2.id)
  console.log(myLibrary)
  for(const book of myLibrary) {
    createCard(book)
  }
}

function removeAllCards() {
  let child = bookList.lastElementChild;
  while (child){
    bookList.removeChild(child)
    child = bookList.lastElementChild;
  }
}

function createCard(book) {
  const card = document.createElement('div');
  card.classList.add('card');

  const author = document.createElement('p')
  author.innerText = `Author: ${book.author}`;

  const title = document.createElement('p')
  title.innerText = `Title: ${book.title}`

  const pages = document.createElement('p')
  pages.innerText = `Pages: ${book.pages}`

  const read = document.createElement('p')
  read.innerText = `Read: ${book.read ? 'yes' : 'not yet'}`;

  const removeBookButton = document.createElement('button')
  removeBookButton.innerText = 'Remove book'
  removeBookButton.addEventListener('click', () => {
    myLibrary = myLibrary.filter(bk => bk.id !== book.id)
    displayCards()
  })

  const toggleButton = document.createElement('button')
  toggleButton.innerText = book.read ? 'Unread' : 'Read';
  toggleButton.addEventListener('click', () => {
    let bookToModify = myLibrary.find(bk => bk.id === book.id)
    bookToModify.read = !bookToModify.read
    myLibrary = [...myLibrary.filter(bk => bk.id !== book.id), bookToModify]
    displayCards()
  })

  card.appendChild(author)
  card.appendChild(title)
  card.appendChild(pages)
  card.appendChild(read)
  card.appendChild(removeBookButton)
  card.appendChild(toggleButton)
  bookList.appendChild(card);
}


displayCards();