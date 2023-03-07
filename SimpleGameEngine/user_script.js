import { GameEngine } from './game-engine.js';
import { GameObject } from './GameObject.js';
// Create a new game engine
const gameEngine = new GameEngine();
// Initialize and start the game engine
gameEngine.init(480, 270);
gameEngine.start();

// Create a new game object
var player = new GameObject(30, 30, 10, 120, "red", "text");
gameEngine.addObject(player);
gameEngine.update = function(){
  if (gameEngine.pressedKey("w")){
    player.move(0,-1);
    }
  if (gameEngine.pressedKey("s")){
      player.move(0,1);
      }
  if (gameEngine.pressedKey("a")){
        player.move(-1,0);
        }
  if (gameEngine.pressedKey("d")){
          player.move(1,0);
          }
}
