function Bungalow() {
  this.properties = {};
}
Bungalow.prototype = {
  createFoundation() {
    this.properties.foundation = 'Pad Foundation';
  },
  createInterior() {
    this.properties.interior = 'wooden interior';
  },
  createBuilding() {
    this.properties.floors = '1 Floor';
  },
  createRoof() {
    this.properties.building = 'Roof';
  }
};

function StoreyBuilding() {
  this.properties = {};
}
StoreyBuilding.prototype = {
  createFoundation() {
    this.properties.foundation = 'Pile Foundation';
  },
  createInterior() {
    this.properties.interior = 'wooden interior';
  },
  createBuilding(x = 2) {
    this.properties.floors = x + ' Floors';
  },
  createRoof() {
    this.properties.building = 'Roof';
  }
};

// Builder SuperClass
function Builder() {}
Builder.prototype = {
  buildFoundation() {
    this.house.createFoundation();
  },
  buildbuilding() {
    this.house.createBuilding();
  },
  buildRoof() {
    this.house.createRoof();
  },
  buildInterior() {
    this.house.createInterior();
  },
  getNewHouse() {
    return this.house;
  }
};

function BungalowBuilder() {
  this.house = new Bungalow();
}
function StoreyBuildingBuilder() {
  this.house = new StoreyBuilding();
}
BungalowBuilder.prototype = Builder.prototype;
BungalowBuilder.prototype.constructHouse = BungalowBuilder;
StoreyBuildingBuilder.prototype = Builder.prototype;
StoreyBuildingBuilder.prototype.constructHouse = StoreyBuildingBuilder;

function CivilEngineer(builder) {
  this.builder = builder;
}
CivilEngineer.prototype = {
  constructHouse() {
    this.builder.buildFoundation();
    this.builder.buildbuilding();
    this.builder.buildRoof();
    this.builder.buildInterior();
  }
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
