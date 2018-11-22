function Color() {}
Color.prototype.fill = function () {
  return `Filled with ${this.color}`;
};
function Blue() {
  this.color = 'blue';
}
function Red() {
  this.color = 'red';
}
function Black() {
  this.color = 'white';
}
Blue.prototype = new Color();
Blue.prototype.constuctor = Blue;
Red.prototype = new Color();
Red.prototype.constuctor = Red;
Black.prototype = new Color();
Black.prototype.constuctor = Black;

function ColorFactory() {
  return {
    create(color) {
      const defaultColor = Red;
      const classes = {
        blue: Blue,
        red: Red,
        black: Black
      };
      const ColorSelected = classes[color] || defaultColor;
      return new ColorSelected();
    }
  };
}

function Rectangle(x, y) {
  this.x = x;
  this.y = y;
}
Rectangle.prototype.draw = function () {
  return `Drawing a rectangle of length ${this.x} and width ${this.y}`;
};
function Circle(r) {
  this.r = r;
}
Circle.prototype.draw = function () {
  return `Drawing a circle of radius ${this.r}`;
};

function Square(x) {
  this.x = x;
}
Square.prototype.draw = function () {
  return `Drawing a square of length and width ${this.x}`;
};

function ShapeFactory() {
  return {
    create(shape, ...args) {
      const defaultShape = Circle;
      const classes = {
        rectangle: Rectangle,
        square: Square,
        circle: Circle
      };
      const ColorSelected = classes[shape] || defaultShape;
      return new ColorSelected(...args);
    }
  };
}

function ShapeColorAbstractFactory(type) {
  const defaultType = ShapeFactory;
  const classes = {
    shape: ShapeFactory,
    color: ColorFactory
  };
  const TypeSelected = classes[type] || defaultType;
  return new TypeSelected();
}

const myColorFactory = new ShapeColorAbstractFactory('color');
const myShapeFactory = new ShapeColorAbstractFactory('shape');
const redColor = myColorFactory.create('red');
const rectangle = myShapeFactory.create('rectangle', 4, 5);
redColor.fill();
rectangle.draw();
