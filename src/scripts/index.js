const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

let x = 0;
let speed = 5;

const player = new Character(0, 0, 100, 50);

function animate(){
ctx.clearRect(0, 0, canvas.width, canvas.height);


// draw shape and move
// ctx.fillStyle = '#000';
// ctx.fillRect(x, 100, 100, 100);
//  x +=speed;

player.draw(ctx);

if (keys.A || keys.D) {
    player.vx = keys.A ? -SPEED : SPEED;
  } else {
    player.vx = 0;
  }
  if (keys.SPACE)
  player.x += player.vx;
  player.vy += GRAVITY;
  player.y += player.vy;
  if (player.y + player.height >= canvas.height) {
    player.y = canvas.height - player.height;
    player.vy = 0;
  }

    requestAnimationFrame(animate);
}

animate();