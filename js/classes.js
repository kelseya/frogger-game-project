// this is the prototype class for both the enemies and the player
class Entity {
  constructor() {
    this.sprite = 'images/';
    this.x = 2;
    this.y = 5;
  }
  render() {
    ctx.drawImage(Resources.get(this.sprite), this.x * 101, this.y * 83);
  }
  //this triggers the update function if the entity is off screen
  update(dt) {
    this.isOutOfBoundsX = this.x > 5;
    this.isOutOfBoundsY = this.y <  1;
  }
}

//player class
class Player extends Entity {
  constructor() {
    super();
    this.sprite += 'char-boy.png';
  }
  handleInput(input) {
    switch(input) {
      case 'left':
        this.x = this.x>0 ? this.x-1 : this.x;
        break;
      case 'up':
        this.y = this.y>0 ? this.y-1 : this.y;
        break;
      case 'right':
        this.x = this.x<4 ? this.x+1 : this.x;
        break;
      case 'down':
        this.y = this.y<5 ? this.y+1 :this.y;
        break;
      default:
        break;
    }
  }
}

//enemy class
class Enemy extends Entity {
  constructor(x, y) {
    super();
    this.sprite += 'enemy-bug.png';
    this.x = x;
    this.y = y;
  }
  //updates the enemy location when the enemy is off-screen
  update(dt) {
    super.update();
    // this sets the off-screen starting position of each enemy on the x axis
    if(this.isOutOfBoundsX) {
        this.x = (-10*Math.random());
    }
    // this sets the pace the enemy moves across the x axis
    else {
      this.x += (Math.random() * dt);
    }
  }
}
