import { Player } from '../src/pig-dice.js';



describe('Player', () => {
  
  // let reusableTriangle;
  // test('should show how beforeEach() works', () => {
  //   console.log(reusableTriangle);
  // });

  
  test('Should create an instance of the player, with scores of 0 and turnscore of 0', () => {
    const player = new Player("player1", 0, 10);
    expect(player.name).toEqual("player1");
    expect(player.score).toEqual(0);
    expect(player.turnScore).toEqual(10);
  });

  test('Player rolling dice should be between 1 & 6', () => {
    const player = new Player("player1", 0, 0);
    player.rollDice();
    expect(player.turnScore).toBeLessThanOrEqual(6);
    expect(player.turnScore).toBeGreaterThanOrEqual(1);
  });

});



