# Command Pattern

This pattern aims at encapsulting method invocation into a single object.
It enables method calls and parameters to be passed unto a single function call.
It provides overall flexiblity, so that when the signature or name of the invocating method changes,
all references to the method do not necessariy have to change.

```js
const CarMananger = (() => {
  const privateCarManger = {
    buyCar(name) {
      return 'You just bought a ' + name;
    }
  }
  return {
    execute(method, arg) {
      if (privateCarManager[method]) {
        privateCarManager[method](arg)
      }
    }
  }
})()
CarManger.execute('buyCar', 'Ferrari Enzo');
```