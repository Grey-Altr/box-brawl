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

// gravity and movement
const gravity = 1;
const playerSpeed = 5;
const jumpSpeed = -15;

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
    
    update() {
        // gravity
        this.velocityY += gravity;
        this.y += this.velocityY;
        this.x += this.velocityX;

        //platform collision
        if (this.y + this.height >= platform.y && this.y + this.height <= platform.y + 10 && this.x + this.width > platform.x && this.x < platform.x + platform.width) {
            this.y = platform.y - this.height;
            this.velocityY = 0;
            this.grounded = true;
        }
    }
}

const player1 = new character(200, 350, 'white');
const player2 = new character(550, 350, 'red');

const keys = {
    a: false,
    d: false,
    w: false,
    ArrowLeft: false,
    ArrowRight: false,
    ArrowUp: false
};

/* ------------------- functions ------------------- */

// resize canvas
function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}

// draw platform
function drawScreen() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = 'brown';
    ctx.fillRect(platform.x, platform.y, platform.width, platform.height);

    player1.update();
    player2.update();
    player1.draw();
    player2.draw();

    requestAnimationFrame(drawScreen);
};

drawScreen();

/* ------------------- event listeners ------------------- */

// resize screen
window.addEventListener('resize', resizeCanvas);

// movement controls
window.addEventListener('keydown', (event) => {
    switch (event.key) {
        case 'a':
            player1.velocityX = -playerSpeed;
            break;
        case 'd':
            player1.velocityX = 
            playerSpeed;
            break;
        case 'w':
            player1.velocityY = jumpSpeed;
            break;
        case 'ArrowLeft':
            player2.velocityX = -playerSpeed;
            break;
        case 'ArrowRight':
            player2.velocityX = playerSpeed;
            break;
        case 'ArrowUp':
            player2.velocityY = jumpSpeed;
            break;
    }
});

window.addEventListener('keyup', (event) => {
    if (event.key === 'a' || event.key === 'd') player1.velocityX = 0;
    if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') player2.velocityX = 0;
});