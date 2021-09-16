class Dog {
    constructor(name, breed, hairColor) {
        this._name = name;
        this._breed = breed;
        this._hairColor = hairColor;
    }

    greet() {
        console.log("Bark bark!!");

    };
};

class Puppy extends Dog {
    constructor(name, breed, hairColor, collarColor) {
        super(name, breed, hairColor);
        this._collarColor= collarColor;
    }
};

class Senior extends Dog {
    constructor(name, breed, age, hairColor, collarColor) {
        super(name, breed, hairColor, collarColor);
        this._age= age;
    }

    hasBirthday() {
        this._age++;
        return this._age;
    }
};

const remy = new Puppy('Remy', 'Corgi', 'Red and white', 'Red');
console.log(remy);


const lulu = new Senior('Lulu', 'Cavalier King Charles Spaniel', '11', 'Black and tan', 'Pink');
console.log(lulu);
console.log(lulu.hasBirthday());