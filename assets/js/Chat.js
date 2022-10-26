class Chat{
  constructor(){
    this.$ = $('#chatlog')
  }
}
Chat.prototype.message = function(whom, str, action){
  let $chat = $(document.createElement("div"))
  $chat.addClass('msg')
  $chat.attr("whom", camelize(whom))
  if(action==="action") {
    $chat.addClass('action')
    $chat.text(str)
  }
  else $chat.html(`<b>${whom}</b>: `+str)
  this.$.append($chat);
}
function camelize(str) {
  return str.replace(/(?:^\w|[A-Z]|\b\w|\s+)/g, function(match, index) {
    if (+match === 0) return ""; 
    return index === 0 ? match.toLowerCase() : match.toUpperCase();
  });
}