class Buildings {
    constructor(ranch, city, apartments) {
        this.ranch = ranch;
        this.city = city;
        this.apartments = apartments;
        this.gated = [];
        this.pets = true;
    }
    addHouse(house){
        this.gated.push(house);
    }
    hasPets(pet){
        if (this.pets === true){
            return console.log('we allow pets');
        } else {
            return console.Log('we don\'t allow pets');
        }
    }
}

class Rent extends Buildings {
    constructor (ranch, city, apartments, payRent) {
        super(ranch, city, apartments);
        this.payRent = payRent;
    }
    tenant(newRent) {
        this.payRent = newRent;
    }
}

class ForSale extends Buildings {
    constructor(ranch, city, apartments, payRent) {
        super(ranch, city, apartments, payRent);
        this.onSale = [];
    }
    addonSale(sale){
        this.onSale.push(sale);
    }
}
const rent1 = new Rent ('one bedroom', 'two bedroom', 'house with lake view', 'allows pets');

rent1.addHouse();
console.log(rent1)