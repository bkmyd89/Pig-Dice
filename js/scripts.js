//Business Logic
var diceArray = [1, 2, 3, 4, 5, 6];
var currentRoll = [];
var rollTotal = 0;
//UI Logic

$(document).ready(function() {
  $(".rollbutton").click(function(event) {
    event.preventDefault();
    $('ul').text('');
    var roll = diceArray[Math.floor(Math.random()*diceArray.length)];


    if (roll === 1) {
      currentRoll = [];
      $('ul').text('');
      rollTotal = 0;
    } else {
      currentRoll.push(roll);
    }
    console.log(currentRoll);

    for (var i =0; i < currentRoll.length; i += 1) {
      $("#list").append("<li>" + currentRoll[i] + "</li>")
    }
  });

  $(".holdbutton").click(function(event) {
    event.preventDefault();
    $("#roll-total").empty()
    currentRoll.forEach(function(summand) {
      rollTotal += summand;
      $("#roll-total").text(rollTotal);
    });


  console.log(rollTotal);
});
});
