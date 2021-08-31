// var turnCounter = 1;

export function Player(name, score, turnScore, turnCounter) {
  this.name = name;
  this.score = score;
  this.turnScore = turnScore;
  this.turnCounter = turnCounter;
}

Player.prototype.rollDice = function () {
  let tempScore = Math.floor(Math.random() * 6 + 1);
  // Test with forced roll of 1
  // tempScore = 1;
  // ***************************
  console.log("Roll score: " + tempScore);
  if (tempScore === 1) {
    this.turnScore = 0;
    if (this.turnCounter === 1) {
      this.turnCounter = 2;
    } else if (this.turnCounter === 2) {
      this.turnCounter = 1;
    }
  } else {
    this.turnScore += tempScore;
  }
}


Player.prototype.hold = function () {
  this.score += this.turnScore;
  this.turnScore = 0;
  if (this.turnCounter === 1) {
    this.turnCounter = 2;
  } else if (this.turnCounter === 2) {
    this.turnCounter = 1;
  }
}
