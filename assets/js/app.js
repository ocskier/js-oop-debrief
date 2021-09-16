class Cats {
    constructor(name, age, hairColor) {
        this._name = name;
        this._age = age;
        this._hairColor = hairColor;
    }

    greet() {
        console.log("Meow!!");
      }
}

class Kitten1 extends Cats {
    constructor(name, age, hairColor, collarColor) {
        super(name, age, hairColor);
        this.collarColor = collarColor;
    }
    getCollar(kittenCollarColor) {
        this.collarColor = kittenCollarColor;
    }

}

class Kitten2 extends Cats {
    constructor(name, age, hairColor, collarColor) {
        super(name, age, hairColor, collarColor);
        this.toys = [];
    }
    getToys(toy) {
        this.toys.push(toy);
    }
    
}
const kitten1 = new Kitten2("joe",1,"black", "red");
const kitten2 = new Kitten2("bob",2,"brown", "blue");

kitten1.greet();


console.log(kitten1);

kitten2.greet();
kitten2.getToys("Mouse");


console.log(kitten2);