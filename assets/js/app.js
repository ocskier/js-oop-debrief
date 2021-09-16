class Vehicle {
  constructor(name, model, year) {
    this.name = name;
    this.model = model;
    this.year = year;
    this.features = [];
  }
  feature(sunroof) {
    this.features.push(sunroof);
  }
}

const myCar = new Vehicle("Toyota", "Corolla", 2021);

myCar.Vehicle;
myCar.feature("Blue Transparent Sunroof");

console.log(myCar);
