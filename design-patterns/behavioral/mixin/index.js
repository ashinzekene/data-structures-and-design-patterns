const extendClass = (() => {
  return (ReceivingClass, GivingClass, ...methods) => {
    if (methods.length > 0) {
      for (const method of methods) {
        ReceivingClass.prototype[method] = GivingClass.prototype[method];
      }
    } else {
      const giving = new GivingClass();
      const receiving = new ReceivingClass();
      for (const method in giving) {
        if (!receiving[method]) {
          ReceivingClass.prototype[method] = giving[method];
        }
      }
    }
  };
})();

function PhoneMixin() {
  this.hasAccelerometer = true;
  this.networkType = '2G,3G,4G';
  this.bluetooth = true;
  this.wifi = true;
}

function PhoneClass(manufacturer, model, features) {
  this.manufacturer = manufacturer;
  this.model = model;
  this.features = features;
}
extendClass(PhoneClass, PhoneMixin);
const gionee = new PhoneClass('Gionee', 'A1 Lite', 'Gyroscope, 4000mah, fast charge');
console.log(gionee.networkType);
