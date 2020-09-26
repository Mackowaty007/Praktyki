//setup
canv = document.getElementById("gameScreen")
ctx = canv.getContext("2d")
const playerShip = document.getElementById('source')
const fireball = document.getElementById('fireball')
setInterval(gameLoop,1)
//classes
class EnemyClass{
  constructor(){
    this.x = Math.floor(Math.round()*(canv.width-0+1)+0);
    this.y = 0;
  }
}

class FireballClass{
   constructor(){
     this.x = x + ((playerSize / 2)-(fireballSize/2));
     this.y = y - 10;
     this.isFlying = false;
   }
   projectile(){
     this.y -= fireballSpeed;
   }
}
//variables
const playerSize = 100;
const fireballSize = 40;
const enemySize = 90;
var x = (canv.width / 2) - (playerSize /2);
var y = canv.height - playerSize;
var fireball1;
var fireball2;
var fireball3;
var fireballSpeed = 1;
var enemy1;
var enemy2;

fireball1 = new FireballClass;
fireball2 = new FireballClass;
fireball3 = new FireballClass;
enemy1 = new EnemyClass;
window.addEventListener('mousemove',function(e){
  x = e.x - (playerSize/2) - 10;
  y = e.y - (playerSize/2);
})
window.addEventListener('click',function(e){
  fireball1.x = x + ((playerSize / 2)-(fireballSize/2));
  fireball1.y = y - 10;
  fireball1.isFlying = true;
})
function gameLoop(){
  draw()
  fireball1.projectile()
}

function draw(){
  ctx.fillStyle = "#00a3cc"
  ctx.fillRect(0,0,canv.width,canv.height)
  ctx.drawImage(fireball,fireball1.x,fireball1.y,fireballSize,fireballSize)
  //ctx.drawImage(fireball,fireball2.x,fireball2.y,fireballSize,fireballSize)
  //ctx.drawImage(fireball,fireball3.x,fireball3.y,fireballSize,fireballSize)
  ctx.drawImage(playerShip,x,y,playerSize,playerSize)
  ctx.fillStyle = "#cc0000"
  ctx.fillRect(enemy1.x,enemy1.y,enemySize,enemySize)
  console.log(fireball1.x)
}
