// Complete the js code
// Car Constructor
function Car(make, model) {
  this.make = make;
  this.model = model;
}

// Adding method to Car prototype
Car.prototype.getMakeModel = function () {
  return `${this.make} ${this.model}`;
};

// SportsCar Constructor (Inheriting from Car)
function SportsCar(make, model, topSpeed) {
  Car.call(this, make, model); // Inherit Car properties
  this.topSpeed = topSpeed;
}

// Inherit Car prototype methods
SportsCar.prototype = Object.create(Car.prototype);
SportsCar.prototype.constructor = SportsCar;

// Adding method to SportsCar prototype
SportsCar.prototype.getTopSpeed = function () {
  return this.topSpeed;
};


// Do not change the code below
window.Car = Car;
window.SportsCar = SportsCar;
