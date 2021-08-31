var turnCounter = 1;

export function Player(name, score, turnScore) {
  this.name = name;
  this.score = score;
  this.turnScore = turnScore;
}

Player.prototype.rollDice = function () {
  let tempScore = Math.floor(Math.random() * 6 + 1);
  console.log("Roll score: " + tempScore);
  if (tempScore === 1) {
    this.turnScore = 0;
    if (turnCounter === 1) {
      turnCounter = 2;
    } else if (turnCounter === 2) {
      turnCounter = 1;
    }
  } else {
    this.turnScore += tempScore;
  }
}


Player.prototype.hold = function () {
  this.score += this.turnScore;
  this.turnScore = 0;
  if (turnCounter === 1) {
    turnCounter = 2;
  } else if (turnCounter === 2) {
    turnCounter = 1;
  }
}
