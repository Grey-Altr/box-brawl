/* Notes 
- Make sure screen assets resize with game screen
- Add canvas and ctx citation in README
- Change name of repo to adhere to project criteria
*/

/* Bugs

*/



/* ------------------- cache ------------------- */

const canvas = document.getElementById('gameScreen');
const ctx = canvas.getContext('2d');

/* ------------------- constants ------------------- */

// canvas size
canvas.width = 800;
canvas.height = 500;

// gravity
const gravity = 0;

// platform object
const platform = {
    x: 150,
    y: 400,
    width: 500,
    height: 20
};


/* ------------------- variables ------------------- */

/* -------------------  classes  ------------------- */

class character {
    constructor(x, y, color) {
        this.x = x;
        this.y = y;
        this.width = 50;
        this.height = 50;
        this.color = color;
        this.velocityX = 0;
        this.velocityY = 0;
        this.grounded = false;
        this.isAttacking = false;
    }
    
    draw() {
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }
    
}

const player1 = new character(200, 350, 'white');
const player2 = new character(550, 350, 'red');

/* ------------------- functions ------------------- */
function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}

// draw platform
function drawPlatform() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = 'brown';
    ctx.fillRect(platform.x, platform.y, platform.width, platform.height);

    player1.draw();
    player2.draw();

    requestAnimationFrame(drawPlatform);
};

drawPlatform();

/* ------------------- event listeners ------------------- */

window.addEventListener("resize", resizeCanvas);