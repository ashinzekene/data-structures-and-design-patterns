const CarManager = (() => {
  const cars = [];
  const privateCarManager = {
    buyCar(brand, model, year = 2018) {
      return `You just purchased a ${brand} ${model} ${year} model`;
    },
    getInfo(brand, model, year = 2018) {
      return `The ${brand} ${model} ${year} model is a really nice car, it runs well`;
    },
    addCar(name, description) {
      cars.push({name, description});
    },
    getCarByName(name) {
      return cars.find(({name: n}) => n === name);
    },
    getAllAvailableCars() {
      return cars;
    }
  };
  return {
    execute(method, ...args) {
      if (typeof privateCarManager[method] === 'function') {
        return privateCarManager[method](...args);
      }
      return 'Method does not exist';
    }
  };
})();

CarManager.execute('buyCar', 'Bugatti', 'Veyron', '2016');
CarManager.execute('getInfo', 'Audi', 'RS7', '2017');
CarManager.execute('addCar', 'Audi RS7', 'Audi RS7 2017 is a really nice sport car');
CarManager.execute('addCar', 'Porshe 919 Hybrid', 'Porshe 919 Hybrid is a really nice electric car with very crazy acceleration');
CarManager.execute('getCarByName', 'Audi RS7');
CarManager.execute('getAllAvailableCars');
CarManager.execute('something');
