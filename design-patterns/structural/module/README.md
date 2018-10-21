# Module pattern

A integral piece of evey robust application's architecture and typically help in
keeping the units of code for a project both cleanly separated and organized.

There are several methods of organising code(implementing the module pattern). They include:
- The module pattern
- The AMD module pattern
- The object literal method
- Common JS modules
- ECMAScript Harmony modules

### Object Literal
  This does not require the `new` keyword. There is no privacy

```js
const ConfigModule = {
  config: {},
  setConfig(config) {
    if (typeof config === 'object') {
      this.config = config;
    }
  },
  putConfig(config) {
    if (typeof config === 'object') {
      this.config = {...this.config, ...config};
    }
  },
  reportConfig() {
    console.log('Config:', this.config);
  }
};
```

### Module Pattern
Defines a way to provide private and public variables. It is used to emulate classes in pre-ES6 environment where prevent leaking pieces of code to the global scope. It helps reduce the likelihood of naming conficts. With this, it makes it possible to shield variables and methods and reveal a public API.


```js
const counterModule = (function() {
  let counter = 0;
  return {
    get() {
      return counter;
    },
    increment() {
      counter++
    },
    decrement() {
      counter--
    },
    reset() {
      counter = 0;
    }
  }
}())
```

Module Pattern supports private data - so, in the Module pattern, public parts of our code are able to touch the private parts, however the outside world is unable to touch the class's private parts (no laughing! Oh, and thanks to David Engfer for the joke).

The disadvantage of the module pattern is that methods added to the module at a later part cannot access the private parts, also testing the private methods is usually not possible

### Revealing Module Pattern

Allows functions to be named differently from the publicly available API (different naimg scheme). It helps for better syntax

```js
const MyModule = (function() {
  const privateValue = 12;
  function privateMethod() {}
  function publicMethod1() {}
  function publicMethod2() {}
  function publicMethod3() {}
  return {
    methd: privateMethod,
    meth1: publicMethod1,
    meth2: publicMethod2,
    meth3: publicMethod3,
  }
})()
```