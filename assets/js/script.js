class Animals{
  constructor(nickname, age, color){
    this.nickname = nickname;
    this.species = "";
    this.age = age;
    this.color = color;
    this.health = 100;
    this.soul = 1;  
    this.sound;
  }
}

Animals.prototype.speech = function(){
  return `Hi, my nickname is ${this.nickname}! I'm a ${this.color} ${this.species}. I'm ${this.age} years old.`
}

Animals.prototype.speak = function(){
  return `${this.nickname} says: ${this.sound}`
}

class Cat extends Animals{
  constructor(nickname, age, color){
    super(nickname, age, color)
    this.soul = 0;
    this.sound = "Meow!"
  }
}
Cat.prototype.takeSoul = function(soul){
  soul.soul = "taken";
  return `${this.nickname} took away ${soul.nickname}'s soul`
}

class Dog extends Animals{
  constructor(nickname, species, age, color){
    super(nickname, species, age, color)
    this.sound - "Arf!"
  }
  
}
class Platypus extends Animals{
  constructor(nickname, age, color){
    super(nickname, age, color)
    this.species = "Platypus"
    this.hat = "Fedora"
    this.damage = 4;
    this.sound = "rrggrhrgrhrgh"
  }
  

}
Animals.prototype.takeDamage = function(dmg){
  this.health -= dmg;
  //this.health = this.health - dmg
}

Animals.prototype.fight = function(thing){
  thing.takeDamage(this.damage)
  return `${this.nickname} fought ${thing.nickname} for ${this.damage}hp. It was super effective!`
}