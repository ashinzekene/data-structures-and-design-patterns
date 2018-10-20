const RevealingShoppingBagModule = (function () {
  let items = [];
  function getItems() {
    return items;
  }
  function addItem(item) {
    items = [...items, item];
  }
  function removeItem(item) {
    items = items.filter(i => i !== item);
  }
  function removeAtIndex(i) {
    items = items.filter((item, index) => i !== index);
  }
  function update(index, newItem) {
    items = items.map((item, i) => i === index ? newItem : item);
  }
  function privateCount() {
    return items.length;
  }
  return {
    addShoppingItem: addItem,
    getShoppingItems: getItems,
    removeShoppingItem: removeItem,
    removeShoppingItemAtIndex: removeAtIndex,
    updateShoppingItem: update,
    getShoppingItemsCount() {
      return privateCount;
    }
  };
})();

const myBags = RevealingShoppingBagModule;
myBags.addShoppingItem('books');
myBags.addShoppingItem('towel');
myBags.addShoppingItem('bags');
myBags.addShoppingItem('shirt');
console.log(myBags.getShoppingItems());
myBags.removeShoppingItem('bags');
console.log(myBags.getShoppingItems());
