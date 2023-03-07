import { GameEngine } from './game-engine.js';

export class GameObject
{
  constructor(width, height, x, y, color){
this.width = width,
  this.height = height, 
  this.x = x,
  this.y = y,
  this.color = color
  };
  draw() {
    GameEngine.context.fillStyle = this.color;
    GameEngine.context.fillRect(this.x, this.y, this.width, this.height);
  };
  move(x = 0, y = 0) {
    this.x += x;
    this.y += y;
  };
  sprite_update(){

  }

}
