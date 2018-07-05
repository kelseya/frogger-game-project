//This creates a player object & 3 enemy objects
const player = new Player ();
const allEnemies = [...Array(3)].map((_,i)=> new Enemy(-3*Math.random(),i+1));

// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
