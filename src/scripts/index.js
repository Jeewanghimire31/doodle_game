

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

let x = 0;

const player = new Character(0, 0, 50, 100);
let platforms=[];
let platformCount = 6;
gap = canvas.height / platformCount;

for (let i = 1; i < platformCount; i++) {
    platforms.push(new Platform(random(canvas.width), canvas.height - i*gap))
  }

function animate(){
ctx.clearRect(0, 0, canvas.width, canvas.height);





//   ctx.translate(0, canvas.width / 2 - player.y);

player.draw(ctx);

player.moveLeft();
player.moveRight();
player.fall();
player.dead();
player.jump();
player.update(platforms);


for (let platform of platforms) {
    platform.draw();
  }
// if (keys.A || keys.D) {
//     player.vx = keys.A ? -SPEED : SPEED;
//   } else {
//     player.vx = 0;
//   }
//   if (keys.SPACE)
//   console.log("inside space.")
//   player.x += player.vx;
//   player.vy += GRAVITY;
//   player.y += player.vy;
//   if (player.y + player.height >= canvas.height) {
//     player.y = canvas.height - player.height;
//     player.vy = 0;
//   }


//   recursive call of animate
  if(!IS_GAME_OVER)
    requestAnimationFrame(animate);
}

animate();