class Instruments {
    constructor(name, size, type) {
        this.name = name;
        this.size = size;
        this.type =type;
        
    }
    specs(){
        console.log(`Hello! I'm ${this.name}. I'm ${this.size}. I'm a ${this.type}!`);
    }
    
}

class Ukulele extends Instruments {
    constructor(name, size, type, awesomeness) {
        super(name, size, type, awesomeness);
        this.awesomeness = awesomeness;
    }
    awesome(){
        console.log(`I'm ${this.awesomeness}!`)
    }
}

class Theremin extends Instruments {
    constructor(name, size, type, sound) {
        super(name, size, type, sound);
        this.sound = sound;
    }
    noise(){
        console.log(`I make ${this.sound}.`)
    }
}

const jacksUkelele = new Ukulele('Jacks Ukulele','small', 'chordophone', 'extremely awesome');
jacksUkelele.specs();
jacksUkelele.awesome();

const sheldonsTheremin = new Theremin('Sheldons Theremin','medium-sized', 'electrophone', 'alien noises like akljdnhfoglahsugdr');
sheldonsTheremin.specs();
sheldonsTheremin.noise();