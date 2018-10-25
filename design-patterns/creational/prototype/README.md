# Prototype Pattern

Based on prototypal inheritance. A new object  inherots the properties and methods of its prototype

```js
const vehicle = {
  wheels: 3,
  horn() {
    console.log('pohhhh...')
  },
  drive() {
    console.log('vuuummmm...')
  }
}

const car = Object.create(vehicle)

car.horn()
```

### pre-ES6
```js
Object.create = (function (obj) {
  if (typeof Object.create === 'func') return Object.create
  return function(obj) {
    function F() {}
    F.prototype = obj
    return new F();
  }
})()
```