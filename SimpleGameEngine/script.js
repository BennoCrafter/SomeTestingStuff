module.export = function GameEngine() {
  var self = this;

  // Canvas element and context
  this.canvas = document.createElement("canvas");
  this.context = this.canvas.getContext("2d");

  // Game objects and settings
  this.objects = [];
  this.interval = null;
  this.keys = {};

  // Initialize the game engine
  this.init = function(width, height) {
    self.canvas.width = width;
    self.canvas.height = height;
    document.body.insertBefore(self.canvas, document.body.childNodes[0]);
    window.addEventListener("keydown", function(e) {
      self.keys[e.keyCode] = true;
    });
    window.addEventListener("keyup", function(e) {
      self.keys[e.keyCode] = false;
    });
  };

  // Start the game engine
  this.start = function() {
    self.interval = setInterval(function() {
      self.update();
      self.draw();
    }, 20);
  };

  // Stop the game engine
  this.stop = function() {
    clearInterval(self.interval);
  };

  // Update the game state
  this.update = function() {
    for (var i = 0; i < self.objects.length; i++) {
      if (self.objects[i].update) {
        self.objects[i].update();
      }
    }
  };

  // Draw the game objects
  this.draw = function() {
    self.context.clearRect(0, 0, self.canvas.width, self.canvas.height);
    for (var i = 0; i < self.objects.length; i++) {
      if (self.objects[i].draw) {
        self.objects[i].draw();
      }
    }
  };

  // Create a new game object
  this.createGameObject = function(width, height, color, x, y) {
    var obj = {
      width: width,
      height: height,
      color: color,
      x: x,
      y: y,
      speedX: 0,
      speedY: 0,
      update: function() {
        this.x += this.speedX;
        this.y += this.speedY;
      },
      draw: function() {
        self.context.fillStyle = this.color;
        self.context.fillRect(this.x, this.y, this.width, this.height);
      }
    };
    self.objects.push(obj);
    return obj;
  };
}
