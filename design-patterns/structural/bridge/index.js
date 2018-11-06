function Shape(coloring, shape = 'shape') {
  this.coloring = coloring;
  this.shape = shape;
}
Shape.prototype = {
  draw() {
    console.log(`Drawing a ${this.shape} with a ${this.coloring.lineColor} line color and a ${this.coloring.fill} color fill`);
  },
  clear() {}
};
Shape.prototype.constructor = Shape;

function Coloring(lineColor = 'black', fill = 'black') {
  this.lineColor = lineColor;
  this.fill = fill;
}
const blueYellowColoring = new Coloring('blue', 'yellow');
const redGreenColoring = new Coloring('red', 'green');
const yellowWhiteColoring = new Coloring('yellow', 'white');

const blueYellowShape = new Shape(blueYellowColoring);
const redGreenShape = new Shape(redGreenColoring);
const yellowWhiteCircle = new Shape(yellowWhiteColoring, 'circle');

blueYellowShape.draw();
redGreenShape.draw();
yellowWhiteCircle.draw();
