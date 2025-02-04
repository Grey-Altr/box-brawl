/* ------------------- constants ------------------- */

// canvas size
//canvas.width = 100%
//canvas.height = 100%;

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

const canvas = document.getElementById('gameScreen');
const ctx = canvas.getContext('2d');
window.addEventListener('resize', resizeCanvas);
/* ------------------- functions ------------------- */
function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}

/* ------------------- event listeners ------------------- */