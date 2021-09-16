class Vehicle {
    constructor(make, year, price) {
        this.make = make;
        this.year = year;
        this.price = price;
    }
    yourCar() {
        console.log('This is a(n) ' + this.make + ' it came out ' + this.year + ' and it cost ' + this.price)
    }
}

class Truck extends Vehicle {
    constructor(make, year, price) {
        super(make, year, price);
        this.driveType = driveType;
    }
    newTruck(yourTruck) {
        this.driveType = yourTruck
    }
}

class SUV extends Truck {
    constructor(make, year, price) {
        super(make, year, price);
        this.pc = passengerCapacity
    }
     PC(yourPC) {
         this.pc = yourPC
     }
}

class Car extends Truck {
    constructor(make, year, price) {
        super(make, year, price);
        this.doors = doors
    }
    NumDoors(yourDoors) {
        this.doors = yourDoors
    }
}

const newCar = new Car('Audi', 2007, 21,500);
console.log(newCar)