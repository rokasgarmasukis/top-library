let myLibrary = [
  {
    author: 'God',
    title: 'Bible',
    pages: 1500,
    read: true
  },
  {
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

function Book(author, title, pages, read) {
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

  const book = new Book(author, title, pages, read);

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
  for(const [idx, book] of myLibrary.entries()) {
    createCard(idx, book)
  }
}

function removeAllCards() {
  
}

function createCard(idx, book) {
  const card = document.createElement('div');
  card.classList.add('card');
  card.classList.add(`book-${idx}`)


  const author = document.createElement('p')
  author.innerText = book.author;

  const title = document.createElement('p')
  title.innerText = book.title

  const pages = document.createElement('p')
  pages.innerText = book.pages

  const read = document.createElement('p')
  read.innerText = book.read ? 'read' : 'not read';

  card.appendChild(author)
  card.appendChild(title)
  card.appendChild(pages)
  card.appendChild(read)
  bookList.appendChild(card);
}


displayCards();