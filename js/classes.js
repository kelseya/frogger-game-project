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

  update(dt) {
    this.isOutOfBoundsX = this.x > 5;
    this.isOutOfBoundsY = this.y <  1;
  }
  checkCollisions(playerOrEnemy) {
    if (this.y===playerOrEnemy.y) {
      if (this.x >= (playerOrEnemy.x-0.5) && this.x <= (playerOrEnemy.x +0.5)) {
        return true;
      }
    }
    else {
      return false;
    }
  }
}

//player class
class Player extends Entity {
  constructor() {
    super();
    this.sprite += 'char-boy.png';
    this.moving = false;
    this.won = false;
  }
//this handles user keystrokes
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
    };
    this.moving = true;
  }
  //this makes the won modal appear when the user reaches the water
  update(dt) {
    super.update(dt);
      if(this.isOutOfBoundsY && !this.moving && !this.won) {
        const modal = document.querySelector(".modal-content");
        modal.style.display="block";
        this.won = true;
        const replayGameModalButton = document.querySelector('#replayGameModal');
        replayGameModalButton.onclick = function(){
          location.reload(true)
        }
        const closeModalButton = document.querySelector('#closeModal');
        closeModalButton.onclick = function(){
           modal.style.display = "none";
        }
      }
  }
  render() {
    super.render();
    this.moving = false;
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
        this.x = (-1*Math.random());
    }
    // this sets the pace the enemy moves across the x axis
    else {
      this.x += (Math.random() * dt * 3);
    }
  }
}
//parts of the Entity, Player, & Enemy classes use material from the @Roderick webinar
//https://zoom.us/recording/play/aulotDlzKFegQFIJTaTzKgWvNkVsYtlwO454vL1UPE1Cm6lOUBQCtfVurPOIAGAS?startTime=1529542978000
