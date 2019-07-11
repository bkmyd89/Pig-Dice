//Business Logic
var diceArray = [1, 2, 3, 4, 5, 6];
var currentRoll = [];
var scoreTotal = 0;
var rollTotal = 0;
//UI Logic

$(document).ready(function() {
  $(".rollbutton").click(function(event) {
    event.preventDefault();
    $('ul').text('');
    var roll = diceArray[Math.floor(Math.random()*diceArray.length)];

    rollTotal += roll;
    $("#roll-total").text(rollTotal);

    if (roll === 1) {
      currentRoll = [];
      $('ul').text();
      rollTotal = 0;
      $("#roll-total").empty();
      alert("Your turn has ended!")
    } else {
      currentRoll.push(roll);
    }
    if (scoreTotal >= 100) {
      currentRoll = [];
      $('ul').text();
      rollTotal = 0;
      $("#roll-total").empty();
      scoreTotal = 0;
      $("#score-total").empty();
    }
    console.log(currentRoll);

    for (var i =0; i < currentRoll.length; i += 1) {
      $("#list").append("<li>" + currentRoll[i] + "</li>")
    }
  });

  $(".holdbutton").click(function(event) {
    event.preventDefault();

    $("#roll-total").empty();

    currentRoll = [];

    scoreTotal += rollTotal;
    $("#score-total").text(scoreTotal);
    rollTotal = 0;

    if (scoreTotal >= 100) {
      alert("Congratulations! You win the game!")
      currentRoll = [];
      $('ul').text();
      rollTotal = 0;
      $("#roll-total").empty();
      scoreTotal = 0;
      $("#score-total").empty();
    }

  console.log(rollTotal);
});
});
