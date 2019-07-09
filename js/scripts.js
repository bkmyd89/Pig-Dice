//Business Logic
var diceArray = [1, 2, 3, 4, 5, 6];
var currentRoll = [];

//UI Logic

$(document).ready(function() {
  $(".rollbutton").click(function(event) {
    event.preventDefault();
    $('ul').text('');
    var roll = diceArray[Math.floor(Math.random()*diceArray.length)];
    currentRoll.push(roll);
    console.log(currentRoll);

    for (var i =0; i < currentRoll.length; i += 1) {
      $("#list").append("<li>" + currentRoll[i] + "</li>")
    }
  });

});
