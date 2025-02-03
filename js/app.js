/* ------------------- constants ------------------- */

// canvas size
arena.width = 800;
arena.height = 500;

// gravity
const gravity = 0;

/* ------------------- variables ------------------- */

/* -------------------  classes  ------------------- */ 
class character {
    constructor(x, y, color) {
        this.x = x;
        this.y = y;
        this.width = 0;
        this.height = 0;
        this.color = color;
        this.velocityX = 0;
        this.velocityY = 0;
        this.grounded = false;
        this.isAttacking = false;
    }
}

/* ------------------- cache ------------------- */

const arena = document.getElementById('gameScreen');
const context = canvas.getContext('2d');

/* ------------------- functions ------------------- */


/* ------------------- event listeners ------------------- */