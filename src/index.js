import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import Player from './pig-dice.js';

player1 = new Player("player1", 0, 0);
player2 = new Player("player2", 0, 0);
// var turnCounter = 1;

$(document).ready(function () {
  $("#player-1").addClass("player-1");
  $("#playerRoll").click(function () {
    console.log("Turn counter: " + turnCounter);
    if (turnCounter === 1) {
      $("#player-1").addClass("player-1");
      $("#player-2").removeClass("player-1");
      player1.rollDice();
    } else if (turnCounter === 2) {
      $("#player-2").addClass("player-1");
$("#player-1").removeClass("player-1");
player2.rollDice();
}
$("#player1Score").html(player1.score);
$("#player1TurnScore").html(player1.turnScore);
$("#player2Score").html(player2.score);
$("#player2TurnScore").html(player2.turnScore);
});

$("#playerHold").click(function () {
console.log("Turn counter: " + turnCounter);
if (turnCounter === 1){
player1.hold();
$("#player-1").addClass("player-1");
$("#player-2").removeClass("player-1");
$("#player1TurnScore").html(0);
if (player1.score >= 20) {
$("#playerHold,#playerRoll").hide();
$("#player1Win").show();
}
console.log("P1 Score: " + player1.score);
} else if (turnCounter === 2) {
player2.hold();
$("#player-2").addClass("player-1");
$("#player-1").removeClass("player-1");
$("#player2TurnScore").html(0);
if (player2.score >= 20) {
$("#playerHold,#playerRoll").hide();
$("#player2Win").show();
}
console.log("P2 Score: " + player2.score);
}
$("#player1Score").html(player1.score);
$("#player2Score").html(player2.score);
$(".btn-warning").click(function () {
location.reload();
});
});
});