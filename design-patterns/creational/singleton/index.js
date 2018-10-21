const MySingleton = (function() {
  let instance
  function privateMethod() {
    return 1
  }
  function init() {
    const myNumber = Math.random();
    let publicValue = 0
    function publicFunction() {
      return myNumber;
    }
    function privateFunction() {
      myNumber++;
    }
    return {
      value: publicValue,
      func: publicFunction,
      getOne: privateMethod,
      increment: function() {
        privateFunction();
      }
    }
  }
  return function getInstance() {
    if (!instance) {
      instance = init()
    }
    return instance;
  }
})()