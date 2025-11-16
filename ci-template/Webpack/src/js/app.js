// TODO: write your code here
import sum from './basic';
import Game, { 
  GameSavingData, 
  readGameSaving as loadGame, 
  writeGameSaving as saveGame 
} from './game.js';

export function logWorked() {
    console.log('app worked');
};

console.log(sum([1, 2]));

const game = new Game();
export { game };

const savingData = new GameSavingData();
loadGame();
saveGame();