const RevealingShoppingBagModule = (() => {
  let items = [];
  const getItems = () => {
    return items;
  };
  const addItem = item => {
    items = [...items, item];
  };
  const removeItem = item => {
    items = items.filter(i => i !== item);
  };
  const removeAtIndex = i => {
    items = items.filter((item, index) => i !== index);
  };
  const update = (index, newItem) => {
    items = items.map((item, i) => i === index ? newItem : item);
  };
  const privateCount = () => {
    return items.length;
  };
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
