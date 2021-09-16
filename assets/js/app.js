class Person {
    constructor(first, last, age, hobbies) {
        this.first = first;
        this.last = last;
        this.age = age;
        this.hobbies = [];
    }
    greet() {
        console.log("Hello I am " + this.first + " " + this.last + "!")
    }
    birthday() {
        this.age++
    }
    addHobbies(hobbies) {
        this.hobbies.push(hobbies);
    }
};

class Student extends Person {
    constructor(first, last, age, hobbies, school) {
        super(first, last, age, hobbies)
        this.school = school;
    }
    changeSchool(newSchool) {
        this.school = newSchool;
    }
};

class Athlete extends Student {
    constructor(first, last, age, hobbies, school) {
        super(first, last, age, hobbies, school);
        this.sports = [];
    }
    addSport(sport) {
        this.sports.push(sport);
    }
};

const person1 = new Athlete('Perom', 'Pen', 25);

person1.greet();
person1.birthday();
person1.addHobbies('hiking');
person1.changeSchool('UW')
person1.addSport('football');

console.log(person1);