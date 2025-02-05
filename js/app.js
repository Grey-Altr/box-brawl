/* Notes 
- Make sure screen assets resize with game screen
- Add canvas and ctx citation in README
- Change name of repo to adhere to project criteria

*/

/*  Current bugs (XX--XX = squashed)
- XXplayers fall through platform if double-jump not timed properlyXX (now a feature not a bug)
- hit detection only works on right side of each character
- XXhit causes opponent to slide off platformXX
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

const p1HealthBar = document.createElement('div');
const p2HealthBar = document.createElement('div');

const healthContainer = document.createElement('div');
healthContainer.classList.add('health-container');

p1HealthBar.classList.add('health-bar');
p2HealthBar.classList.add('health-bar');

healthContainer.appendChild(p1HealthBar);
healthContainer.appendChild(p2HealthBar);
document.body.insertBefore(healthContainer, canvas);

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
        this.health = 100;
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
        this.grounded = false;

        //platform collision
        if (this.y + this.height >= platform.y && this.y + this.height <= platform.y + 10 && this.x + this.width > platform.x && this.x < platform.x + platform.width) {
            this.y = platform.y - this.height;
            this.velocityY = 0;
            this.grounded = true;
        } else {
            this.grounded = false;
        }
    }

    attack(opponent) {
        if (!this.isAttacking) {
            this.isAttacking = true;
        setTimeout(() => (this.isAttacking = false), 200);
        
        const attackRange = 1;
        const attackX = this.velocityX >= 0 ? this.x + this.width : this.x - attackRange;

        if (
            attackX < opponent.x + opponent.width &&
            attackX + attackRange > opponent.x &&
            this.y < opponent.y + opponent.height &&
            this.y + this.height > opponent.y
            ) {
                opponent.takeDamage();
            }
        }
    }

    takeDamage() {
        this.health -= 10;
        if (this.health <= 0) {
            this.health = 0;
        }
        this.knockback();
        updateHealthBars();
    }

    knockback() {
        this.velocityX = this.x < platform.x + platform.width / 0 ? -8 : 8;
        this.velocityY = -7;
    }
}

function updateHealthBars() {
  p1HealthBar.style.width = `${player1.health * 3}px`;
  p2HealthBar.style.width = `${player2.health * 3}px`;
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
function gameLoop() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = 'brown';
    ctx.fillRect(platform.x, platform.y, platform.width, platform.height);

    player1.update();
    player2.update();
    player1.draw();
    player2.draw();

    requestAnimationFrame(drawScreen);
};


gameLoop();

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
        case ' ':
            player1.attack(player2);
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
        case 'Enter':
            player2.attack(player1);
            break;
    }
});

window.addEventListener('keyup', (event) => {
    if (event.key === 'a' || event.key === 'd') player1.velocityX = 0;
    if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') player2.velocityX = 0;
});