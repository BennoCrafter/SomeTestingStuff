const gameEngine = require('script.js');

// Create a new game engine

// Initialize and start the game engine
gameEngine.init(480, 270);
gameEngine.start();

// Create a new game object
var myGamePiece = gameEngine.createGameObject(30, 30, "red", 10, 120);

// Add keyboard controls to the game object
window.addEventListener("keydown", function(e) {
  if (e.keyCode == 37) {
    myGamePiece.speedX = -1;
  } else if (e.keyCode == 39) {
    myGamePiece.speedX = 1;
  } else if (e.keyCode == 38) {
    myGamePiece.speedY = -1;
  } else if (e.keyCode == 40) {
    myGamePiece.speedY = 1;
  }
});
window.addEventListener("keyup", function(e) {
  if (e.keyCode == 37 || e.keyCode == 39) {
    myGamePiece.speedX = 0;
  } else if (e.keyCode == 38 || e.keyCode == 40) {
    myGamePiece.speedY = 0;
  }
});
