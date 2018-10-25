const MySingleton = (function () {
  let instance;
  function privateMethod() {
    return 1;
  }
  function init() {
    let myNumber = Math.random();
    const publicValue = 0;
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
      increment() {
        privateFunction();
      }
    };
  }
  return {
    getInstance() {
      if (!instance) {
        instance = init();
      }
      return instance;
    }
  };
})();

const x = MySingleton.getInstance();
const y = MySingleton.getInstance();
console.log(x === y);
