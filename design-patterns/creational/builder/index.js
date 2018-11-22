function Bungalow() {
  this.properties = {};
}
Bungalow.prototype.createFoundation = function () {
  this.properties.foundation = 'Pad Foundation';
};
Bungalow.prototype.createInterior = function () {
  this.properties.interior = 'wooden interior';
};
Bungalow.prototype.createBuilding = function () {
  this.properties.floors = '1 Floor';
};
Bungalow.prototype.createRoof = function () {
  this.properties.building = 'Roof';
};

function StoreyBuilding() {
  this.properties = {};
}
StoreyBuilding.prototype.createFoundation = function () {
  this.properties.foundation = 'Pile Foundation';
};
StoreyBuilding.prototype.createInterior = function () {
  this.properties.interior = 'wooden interior';
};
StoreyBuilding.prototype.createBuilding = function (x = 2) {
  this.properties.floors = x + ' Floors';
};
StoreyBuilding.prototype.createRoof = function () {
  this.properties.building = 'Roof';
};

// Builder SuperClass
function Builder() {}
Builder.prototype.buildFoundation = function () {
  this.house.createFoundation();
};
Builder.prototype.buildbuilding = function () {
  this.house.createBuilding();
};
Builder.prototype.buildRoof = function () {
  this.house.createRoof();
};
Builder.prototype.buildInterior = function () {
  this.house.createInterior();
};
Builder.prototype.getNewHouse = function () {
  return this.house;
};

function BungalowBuilder() {
  this.house = new Bungalow();
}

function StoreyBuildingBuilder() {
  this.house = new StoreyBuilding();
}
BungalowBuilder.prototype = new Builder();
BungalowBuilder.prototype.constructHouse = BungalowBuilder;
StoreyBuildingBuilder.prototype = new Builder();
StoreyBuildingBuilder.prototype.constructHouse = StoreyBuildingBuilder;

function CivilEngineer(builder) {
  this.builder = builder;
}
CivilEngineer.prototype.constructHouse = function () {
  this.builder.buildFoundation();
  this.builder.buildbuilding();
  this.builder.buildRoof();
  this.builder.buildInterior();
};

const bungalowBuilder = new BungalowBuilder();
const storeyBuilder = new StoreyBuildingBuilder();
console.log(bungalowBuilder.getNewHouse());
console.log(storeyBuilder.getNewHouse());
const bungalowCivilEnginner = new CivilEngineer(bungalowBuilder);
const storeyCivilEnginner = new CivilEngineer(storeyBuilder);
bungalowCivilEnginner.constructHouse();
storeyCivilEnginner.constructHouse();
console.log(bungalowBuilder.getNewHouse());
console.log(storeyBuilder.getNewHouse());
