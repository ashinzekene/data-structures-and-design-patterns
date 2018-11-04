# Adapter

An adapter is a structural design pattern that makes two incompatible classes/objects work together. This can occur when a new version of a class having a new API possesses some new features. Clients which already implemented the old API can still be able to use the new API features without changing their implementation.  
This is the same way a keyboard with a PS2 adapter (old API) can be a USB port (new API), by the use of a PS2 - USB adapter

```js
// Old API
function Cart() {}
Cart.prototype.addToCart() {},
Cart.prototype.addToCart() {},
Cart.prototype.getTotal() {}

// New API
function NewCart() {}
NewCart.prototype.addToCart() {},
NewCart.prototype.addToCart() {},
NewCart.prototype.getTotalWithCoupons() {}

// Adapter
function Cart() {
  this.cart = new NewCart()
}
Cart.prototype.getTotal() {
  this.cart.getTotalWithCoupons()
}
```

**Another example**

```js
// Old API
function Shipping() {
  this.request = function(zipStart, zipEnd, weight) {
    // ...
    return '$49.75';
  };
}

// New API
function AdvancedShipping() {
  this.login = function(credentials) {
    /* ... */
  };
  this.setStart = function(start) {
    /* ... */
  };
  this.setDestination = function(destination) {
    /* ... */
  };
  this.calculate = function(weight) {
    return '$39.50';
  };
}

// Adapter
function ShippingAdapter(credentials) {
  var shipping = new AdvancedShipping();

  shipping.login(credentials);

  return {
    request: function(zipStart, zipEnd, weight) {
      shipping.setStart(zipStart);
      shipping.setDestination(zipEnd);
      return shipping.calculate(weight);
    }
  };
}
```
