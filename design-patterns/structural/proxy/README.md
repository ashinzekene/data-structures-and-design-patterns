# Proxy

In this pattern, a `proxy` object controls access to another object and impements the same Interfacae as the original object. It functions to pass method invocation to the object.  

The other object is usually known as the `real subject`. A proxy may be instantiated in place of a real subject and helps to gain access to the real subject remotely. I may also serve to delay instantiation of the real subject until when it is needed. This usually occurs when the real subject is resource intensive.  

A real world example is a credit card or cheque, which serves as a proxy to a bank account (the real subject)  
A proxy is different from a decorator as it does not add properties or modifies the real subject. It just passes method invocation to the real subject

The participants classes in the proxy pattern are:
- Subject: Interface implemented by the RealSubject and representing its services. The interface must be implemented ny the interface and the Real Subject as well
- Proxy: Maintains a reference that allows the Proxy to access the RealSubject. Implements the same interface implemented by the RealSubject and Controls access to the RealSubject and may be responsible for its creation and deletion.
- RealSubject - the real object that the proxy represents.


The most basic type of proxy is:
```js
function ImageAlbum(id) {
  this.id = id;
  this.images = [];
  this.visible = false;
}
ImageAlbum.prototype.addImage = function (image) {
  this.images.push(image);
}
ImageAlbum.prototype.removeImage = function (img) {
  this.images = this.images.filter(image => image !== img);
}
ImageAlbum.prototype.toggle = function () {
  this.visible = !this.visible;
}

function ImageAlbumProxy(src) {
  this.image = new Image(src)
}
ImageAlbumProxy.prototype.addImage = function (image) {
  this.image.addImage(image);
}
ImageAlbumProxy.prototype.removeImage = function (img) {
  this.image.removeImage(img);
}
ImageAlbumProxy.prototype.toggle = function () {
  this.image.toggle();
}

```

## Types of proxy

There are three main types of proxy
- Virtual Proxy
- Remote Proxy
- Protection Proxy

### Virtual Proxy
...
### Remote Proxy
...
### Protection Proxy
... 