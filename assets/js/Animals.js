
class Animals{
  constructor(nickname, age, color, chat){
    this.nickname = nickname;
    this.age = age;
    this.color = color;
    this.health = 100;
    this.soul = 1;  
    this.chat = chat;
    this.sound;
    this.species;
  }
} 
Animals.prototype.speech = function(){
  console.log(camelize(this.nickname))
  if(this.soul === 1) return this.chat.message(this.nickname, `${this.nickname}: Hi, my nickname is ${this.nickname}! I'm a ${this.color} ${this.species}. I'm ${this.age} years old. I have a soul!`)
  else return this.chat.message(this.nickname, `${this.nickname}: Hi, my nickname is ${this.nickname}! I was a ${this.color} ${this.species}. I was ${this.age} years old. I don't have a soul anymore. :(`)
}

Animals.prototype.speak = function(){
  return this.chat.message(this.nickname, `${this.nickname}: ${this.sound}`)
}

class Cat extends Animals{
  constructor(nickname, age, color, chat){
    super(nickname, age, color, chat)
    //cats have no soul
    this.soul = 0;
    this.species = "Cat"
    this.sound = "Meow!"
  }
}
Cat.prototype.takeSoul = function(soul){
  soul.soul = "taken by "+this.nickname;
  return this.chat.message(this.nickname, `${this.nickname} took away ${soul.nickname}'s soul`, "action") 
}

class Dog extends Animals{
  constructor(nickname, age, color){
    super(nickname, age, color, chat)
    this.sound = "Arf!"
    this.species = "Dog"
  }
}
class Platypus extends Animals{
  constructor(nickname, age, color, chat){
    super(nickname, age, color, chat)
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
Animals.prototype.say = function(msg){
  return this.chat.message(this.nickname, `${this.nickname}: ${msg}`)
}
Animals.prototype.fight = function(thing){
  thing.takeDamage(this.damage)
  return this.chat.message(this.nickname, `${this.nickname} fought ${thing.nickname} for ${this.damage}hp. It was super effective!`, "action")
}