import { Player } from '../src/pig-dice.js';



describe('Player', () => {

  
  test('Should create an instance of the player, with scores of 0 and turnscore of 0', () => {
    const player = new Player("player1", 0, 10, 1);
    expect(player.name).toEqual("player1");
    expect(player.score).toEqual(0);
    expect(player.turnScore).toEqual(10);
  });
  
  test('Player rolling dice should be between 1 & 6', () => {
    const player = new Player("player1", 0, 0, 1);
    player.rollDice();
    expect(player.turnScore).toBeLessThanOrEqual(6);
    expect(player.turnScore).toBeGreaterThanOrEqual(0);
    if (player.turnScore === 0) {
      expect(player.turnCounter).toEqual(2);
    }
    // expect(player.turnCounter).toBeLessThanOrEqual(2);
    // expect(player.turnCounter).toBeGreaterThanOrEqual(1);
  });


  test('on roll of 1 player turn counter should change', () => {
    const player = new Player("player2", 0, 0, 2);
    player.rollDice();
    if (player.turnScore === 0) {
      expect(player.turnCounter).toEqual(1);
    }
  });


  test('Player hold should change turn and save the score', () => {
    const player = new Player("player1", 0, 0, 1);
    player.hold();
    expect(player.turnScore).toEqual(0);
    expect(player.score).toEqual(player.turnScore);
    expect(player.turnCounter).toEqual(2);
  });

  test('Player2 hold should change turn and save the score', () => {
    const player = new Player("player2", 0, 0, 2);
    player.hold();
    expect(player.turnCounter).toEqual(1);
  });

});



