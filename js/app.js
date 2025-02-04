/* Notes 
- Make sure screen assets resize with game screen
- Add canvas and ctx citation in README
*/

/* Bugs

*/



/* ------------------- cache ------------------- */

const canvas = document.getElementById('gameScreen');
const ctx = canvas.getContext('2d');
window.addEventListener('resize', resizeCanvas);

/* ------------------- constants ------------------- */

// canvas size
//canvas.width = 100%
//canvas.height = 100%;

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

// class character {
//     constructor(x, y, color) {
//         this.x = x;
//         this.y = y;
//         this.width = 0;
//         this.height = 0;
//         this.color = color;
//         this.velocityX = 0;
//         this.velocityY = 0;
//         this.grounded = false;
//         this.isAttacking = false;
//     }
//}






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

    requestAnimationFrame(drawPlatform);
};

drawPlatform();

/* ------------------- event listeners ------------------- */