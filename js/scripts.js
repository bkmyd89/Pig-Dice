//Business Logic
var diceArray = [1, 2, 3, 4, 5, 6];
var currentRoll = [];
var scoreTotal = 0;
var rollTotal = 0;

//Player 2
var currentRoll2 = [];
var scoreTotal2 = 0;
var rollTotal2 = 0;

//UI Logic

$(document).ready(function() {
  $(".rollbutton1").click(function(event) {
    event.preventDefault();
    $('ul').text('');
    var roll = diceArray[Math.floor(Math.random()*diceArray.length)];

    rollTotal += roll;
    $("#roll-total1").text(rollTotal);

    if (roll === 1) {
      currentRoll = [];
      $('ul').text();
      rollTotal = 0;
      $("#roll-total1").empty();
      alert("Your turn has ended!")
    } else {
      currentRoll.push(roll);
    }
    if (scoreTotal >= 100) {
      currentRoll = [];
      rollTotal = 0;
      $("#roll-total1").empty();
      scoreTotal = 0;
      $("#score-total1").empty();
      $('ul').empty();
    }
    console.log(currentRoll);

    for (var i =0; i < currentRoll.length; i += 1) {
      $("#list1").append("<li>" + currentRoll[i] + "</li>")
    }
  });

  $(".holdbutton1").click(function(event) {
    event.preventDefault();

    $("#roll-total1").empty();

    currentRoll = [];

    scoreTotal += rollTotal;
    $("#score-total1").text(scoreTotal);
    rollTotal = 0;

    if (scoreTotal >= 100) {
      alert("Congratulations! You win the game!")
      currentRoll = [];
      rollTotal = 0;
      $("#roll-total1").empty();
      scoreTotal = 0;
      $("#score-total1").empty();
      rollTotal2 = 0;
      $("#roll-total2").empty();
      scoreTotal2 = 0;
      $("#score-total2").empty();
      $('ul').empty();
    }

  console.log(rollTotal);
});
});

//Player 2

$(document).ready(function() {
  $(".rollbutton2").click(function(event) {
    event.preventDefault();
    $('ul').text('');
    var roll = diceArray[Math.floor(Math.random()*diceArray.length)];

    rollTotal2 += roll;
    $("#roll-total2").text(rollTotal2);

    if (roll === 1) {
      currentRoll2 = [];
      $('ul').text();
      rollTotal2 = 0;
      $("#roll-total2").empty();
      alert("Your turn has ended!")
    } else {
      currentRoll2.push(roll);
    }
    if (scoreTotal2 >= 100) {
      currentRoll2 = [];
      $('ul').text();
      rollTotal2 = 0;
      $("#roll-total2").empty();
      scoreTotal2 = 0;
      $("#score-total2").empty();
    }
    console.log(currentRoll2);

    for (var i =0; i < currentRoll2.length; i += 1) {
      $("#list2").append("<li>" + currentRoll2[i] + "</li>")
    }
  });

  $(".holdbutton2").click(function(event) {
    event.preventDefault();

    $("#roll-total2").empty();

    currentRoll2 = [];

    scoreTotal2 += rollTotal2;
    $("#score-total2").text(scoreTotal2);
    rollTotal2 = 0;

    if (scoreTotal2 >= 100) {
      alert("Congratulations! You win the game!")
      currentRoll2 = [];
      rollTotal2 = 0;
      $("#roll-total2").empty();
      scoreTotal2 = 0;
      $("#score-total2").empty();
      rollTotal = 0;
      $("#roll-total1").empty();
      scoreTotal = 0;
      $("#score-total1").empty();
      $('ul').empty();
    }

  console.log(rollTotal2);
});
});
