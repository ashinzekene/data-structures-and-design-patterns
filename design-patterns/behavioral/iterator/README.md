# Iterator Pattern

This is a behavioural pattern that gives the ability to loop through a properties of a class or a method. It provides an easy interface for accessing the 
elements of a collection in a sequential manner without knowing about the inner working of the data or its underlying implementation

```js
function NamesBook(name = 'book') {
  this.name = name;
  this.names = [];
}
NamesBook.prototype.add = function (name) {
  this.names.push(name);
};
NamesBook.prototype.remove = function (name) {
  this.names = this.names.filter(n => n !== name);
};
NamesBook.prototype[Symbol.iterator] = function () {
  let i = this.names.length;
  return {
    next: () => ({
      value: this.names[--i],
      done: i < 0
    })
  };
};

const names = new NamesBook();
names.add('Tunde');
names.add('Femi');
names.add('Chika');
names.add('Namso');
names.add('Favour');
names.add('Grace');

const arrayLikeBooks = [...names];
console.log(arrayLikeBooks);
```