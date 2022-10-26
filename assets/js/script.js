let chat = new Chat();

let community = {
  perryThePlatypus: new Platypus("Perry The Platypus", 5, "green", chat),
  kyo: new Cat("Kyo", 3, "white", chat),
  peewee: new Cat("Peewee", 3, "white", chat),
  dog: new Dog("Dog", 4, "black", chat),
}
community.perryThePlatypus.speech()
community.perryThePlatypus.speak()
community.perryThePlatypus.fight(community.kyo)
community.kyo.speak()
community.kyo.takeSoul(community.perryThePlatypus)
community.peewee.speak()
community.kyo.takeSoul(community.peewee)
community.perryThePlatypus.speech()
community.dog.speak()

$( "#chatlog" ).on( "mouseover", ".msg", function() {
  let whom = $(this).attr("whom");
  $("#explorer").html( Mustache.render($('#exlporerTemp').html(), community[whom]));
  $(this).addClass("hover")
});

$( "#chatlog" ).on( "mouseleave", ".msg", function() {
  $(this).removeClass("hover")
});