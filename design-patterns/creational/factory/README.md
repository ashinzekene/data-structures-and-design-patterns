# Factory Pattern

This is a factory pattern concerned with object creation. It provides a genereic interface where the type of object to be created is along with other options

It is vey useful when so much code is needed in creation of these object, hence this encloses this complexity making it easier to create objects.

```js
const VehicleFactory = (() => {
  const Car = {
    wheels: 4,
    height: 'low',
    engine: 'C',
    lights: 4,
    feaatures: 'AC'
  }
  const Truck = {
    wheels: 8,
    height: 'A',
    engine: 'big',
    lights: 6,
    feaatures: 'nothing'
  }
  const Bike = {
    wheels: 2,
    height: 'low',
    engine: 'D',
    lights: 2,
    feaatures: 'nothing'
  }
  const defaultClass = Car
  return type => {
    if (type === 'truck') defaultClass = Truck
    if (type === 'bike') defaultClass = Bike
    return new defaultClass();
  }
})()
```