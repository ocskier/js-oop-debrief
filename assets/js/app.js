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
        this._collarColor = collarColor;
    }


}

class Kitten2 extends Cats {
    constructor(name, age, hairColor, collarColor) {
        super(name, age, hairColor, collarColor);
        this._collarColor = collarColor;
        this.toys = [];
    }

    
}