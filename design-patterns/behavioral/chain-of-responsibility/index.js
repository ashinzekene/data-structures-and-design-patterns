function Library(genre) {
  this.rootCatalog = genre;
}
Library.prototype.addCatalog = function (newCatalog) {
  let catalog = this.rootCatalog;
  if (!catalog) {
    this.rootCatalog = newCatalog;
    return;
  }
  while (catalog.successor) {
    catalog = catalog.successor;
  }
  catalog.successor = newCatalog;
};
Library.prototype.addBook = function (book) {
  if (!this.rootCatalog) {
    return;
  }
  this.rootCatalog.handleFillingRequest(book);
};
Library.prototype.getAllBooks = function () {
  return this.rootCatalog.getAllBooks();
};

function Book(name, genres = []) {
  this.name = name;
  this.genres = genres;
}
Book.prototype.getGenres = function () {
  return this.genres;
};

function Catalog(keywords) {
  this.keywords = keywords;
  this.books = [];
}
Catalog.prototype._bookMatchesCriteria = function (book) {
  const genres = book.getGenres()
    .map(genre => genre.toLowerCase());
  let matches = false;
  for (const x of this.keywords) {
    if (genres.indexOf(x) > -1) {
      matches = true;
    }
  }
  return matches;
};
Catalog.prototype.handleFillingRequest = function (book) {
  if (this._bookMatchesCriteria(book)) {
    this.books.push(book);
  }
  if (this.successor) {
    this.successor.handleFillingRequest(book);
  }
};
Catalog.prototype.getBooks = function () {
  return this.books;
};
Catalog.prototype.getAllBooks = function () {
  if (this.successor) {
    return [...this.getBooks(), ...this.successor.getAllBooks()];
  }
  return this.getBooks();
};

const myLibrary = new Library();
const sciFiCatalog = new Catalog(['scifi', 'sci-fi']);
const dramaCatalog = new Catalog(['drama', 'movie']);
const tragicCatalog = new Catalog(['tragedy', 'tragic', 'sad']);

myLibrary.addCatalog(sciFiCatalog);
myLibrary.addCatalog(dramaCatalog);
myLibrary.addCatalog(tragicCatalog);
console.log(myLibrary.rootCatalog);
console.log(dramaCatalog);

myLibrary.addBook(new Book('Best minds', ['drama', 'movie']));
myLibrary.addBook(new Book('Though minds', ['drama', 'movie']));
myLibrary.addBook(new Book('The night owl', ['tragic', 'horror']));
console.log(tragicCatalog.books);
console.log(dramaCatalog.books);
console.log(myLibrary.getAllBooks());
