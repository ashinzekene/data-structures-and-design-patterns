const ShoppingBagModule = (function () {
  let items = [];
  return {
    getItems() {
      return items;
    },
    addItem(item) {
      items = [...items, item];
    },
    removeItem(item) {
      items = items.filter(i => i !== item);
    },
    removeAtIndex(i) {
      items = items.filter((item, index) => i !== index);
    },
    updateAt(index, newItem) {
      items = items.map((item, i) => i === index ? newItem : item);
    }
  };
})();

const myBags = ShoppingBagModule;
myBags.addItem('books');
myBags.addItem('towel');
myBags.addItem('bags');
myBags.addItem('shirt');
console.log(myBags.getItems());
myBags.removeItem('bags');
console.log(myBags.getItems());
