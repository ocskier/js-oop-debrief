class teacher {
    constructor (name, age, sex) {
        this.name = name;
        this.age = age;
        this.sex = sex;
    }
        newTeacher() {
        console.log(`My name is ${this.name}. I am ${this.sex} and ${this.age} years old. Nice to meet you!`);
    }
}

class mathTeacher extends teacher {
    constructor (name, age, sex, subject){
    super(name, age, sex);
    this.subject = subject;
    }
    
    mathSubject(){
        console.log(`I am ${this.name}. I am ${this.age} years old. I am ${this.sex} and I teach ${this.subject}.`);
    }
}

class chemistryTeacher extends teacher {
    constructor (name, age, sex, hobby) {
        super (name, age, sex);
        this.hobby = hobby;
    }

    favHobby() {
        console.log(`My name is ${this.name}. I just turned ${this.age} years old a few days ago. I am a ${this.sex} teacher. I like ${this.hobby}.`);
    }
}



let teacher1 = new teacher('Sarah', 29, 'female');
let teacher2 = new mathTeacher('Kori',39 ,'male', 'Mathemathic');
let teacher3 = new chemistryTeacher('Jack', 30, 'male', 'listening to music');
teacher1.newTeacher();
teacher2.mathSubject();
teacher3.favHobby();

