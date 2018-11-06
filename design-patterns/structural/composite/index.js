function ImageGallery(className, id) {
  // eslint-disable-next-line no-undef
  this.element = window.document.createElement('div');
  this.element.className = className;
  this.element.id = id;
  this.children = [];
}
ImageGallery.prototype.add = function (img) {
  this.children.push(img);
  this.element.appendChild(img.getElement());
};
ImageGallery.prototype.remove = function (img) {
  this.children = this.children.splice(this.children.indexOf(img), 1);
};
ImageGallery.prototype.getChild = function (index) {
  return this.children[index];
};
ImageGallery.prototype.hide = function () {
  this.children.forEach(child => child.hide());
  this.element.style.display = 'none';
};
ImageGallery.prototype.show = function () {
  this.element.style.display = 'block';
  return this.children.forEach(child => child.show());
};
ImageGallery.prototype.toggle = function () {
  // eslint-disable-next-line no-negated-condition
  if (this.element.style.display !== 'none') {
    this.hide();
  } else {
    this.show();
  }
};
ImageGallery.prototype.getChildren = function () {
  return this.children;
};
ImageGallery.prototype.getElement = function () {
  return this.element;
};

function GalleryImage(src, className) {
  // eslint-disable-next-line no-undef
  this.element = window.document.createElement('img');
  this.element.src = src;
  this.element.style.height = '60px';
  this.element.style.width = '60px';
  this.element.className = className;
}
GalleryImage.prototype.hide = function () {
  this.element.style.display = 'none';
};
GalleryImage.prototype.show = function () {
  this.element.style.display = 'inline-block';
};
GalleryImage.prototype.toggle = function () {
  // eslint-disable-next-line no-negated-condition
  if (this.element.style.display !== 'none') {
    this.hide();
  } else {
    this.show();
  }
};
GalleryImage.prototype.getElement = function () {
  return this.element;
};
