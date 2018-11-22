function Book(name, author, genres) {
  this.author = author;
  this.name = name;
  this.genres = genres;
}

function Library(name = 'library') {
  this.name = name;
  this._books = {};
}
Library.prototype.addBook = function (id, {name, author, genres}) {
  this._books[id] = new Book(name, author, genres);
};
Library.prototype.removeBook = function (id) {
  Reflect.deleteProperty(this._books, id);
};
Library.prototype[Symbol.iterator] = function () {
  let i = Object.keys(this._books).length;
  return {
    next: () => ({
      value: this._books[Object.keys(this._books)[--i]],
      done: i < 0
    })
  };
};

const myLibrary = new Library('new-library');

myLibrary.addBook(0, {
  author: 'Kyle Simpson',
  name: 'You Don\'t know JS',
  genres: ['code', 'js', 'learning', 'javascript']
});
myLibrary.addBook(1, {
  author: 'Erich Gamma, John Vlissides, Ralph Johnson, and Richard Helm',
  name: 'Design Patterns: Elements of Reusable Object-Oriented Software',
  genres: ['code', 'patterns', 'javascript']
});
myLibrary.addBook(2, {
  author: 'Robert Greene',
  name: '48 Laws of power',
  genres: ['laws', 'power', 'lifetyle']
});
myLibrary.addBook(3, {
  author: 'Larry King',
  name: 'how to talk to anyone, anytime, anywhere: the secrets of good communication',
  genres: ['conversation', 'communcation', 'lifetyle']
});

console.log([...myLibrary]);
