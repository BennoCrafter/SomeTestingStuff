export class GameEngine {
  constructor() {
    this.objects = [];
    this.objects = [];
    this.current_key = null;
    // Canvas element and context
    this.canvas = document.createElement("canvas");
    this.context = this.canvas.getContext("2d");

    // Game objects and settings
    this.interval = null;
  }

  // Initialize the game engine
  init(width, height) {
    this.canvas.width = width;
    this.canvas.height = height;
    document.body.insertBefore(this.canvas, document.body.childNodes[0]);

    window.addEventListener("keydown", (e) => {
      this.current_key = e.key;
    });
    window.addEventListener("keyup", (e) => {
      this.current_key = null;
    });
  }

  // Start the game engine
  start() {
    this.interval = setInterval(() => {
      this.sprite_update();
      this.draw();
      this.update();
    }, 20);
  }

  // Stop the game engine
  stop() {
    clearInterval(this.interval);
  }

  update() {
    // its and empty function, what the user can fill up
  }

  // sprite_update the game state
  sprite_update() {
    for (let i = 0; i < this.objects.length; i++) {
      if (this.objects[i].sprite_update) {
        this.objects[i].sprite_update();
      }
    }
  }

  // Draw the game objects
  draw() {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    for (let i = 0; i < this.objects.length; i++) {
      if (this.objects[i].draw) {
        this.objects[i].draw();
      }
    }
  }

  getKey() {
    return this.current_key;
  }

  pressedKey(key) {
    return key === this.current_key;
  }

  addObject(obj) {
    this.objects.push(obj);
  }

  // Create a new game object
}
