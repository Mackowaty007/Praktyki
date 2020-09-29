//setup
canv = document.getElementById("gameScreen")
ctx = canv.getContext("2d")
var playerShip = document.getElementById('playerShip')
const fireball = document.getElementById('fireball')
const space = document.getElementById('space')
var enemyShip = document.getElementById('enemyShip')
setInterval(gameLoop,1)
//classes
class EnemyClass{
  constructor(){
    this.x = Math.floor(Math.random()*((canv.width - enemySize)-0+10)+0);
    this.y = 0;
  }
  colision(){
    if(this.x < fireball1.x + fireballSize && this.x + enemySize > fireball1.x && this.y > fireball1.y - enemySize && this.y < fireball1.y + fireballSize/*|| this.x < fireball2.x || this.x < fireball3.x*/){
      points ++;
      fireball1.x = -fireballSize;
      enemyShip = document.getElementById('explosion');
      setTimeout(function(){
        enemyShip = document.getElementById('enemyShip');
        enemy1.y = 0 - enemySize;
        enemy1.x = Math.floor(Math.random()*(canv.width - enemySize)+10);
      },300)
    }
    if(this.x < x + playerSize && this.x + enemySize > x && this.y > y - enemySize && this.y < y + playerSize){
      playerShip = document.getElementById("explosion")
      enemyShip = document.getElementById("explosion")
      setTimeout(function(){alert("you tried to dock to the enemy ship(It doesnt work when you are flying at each other at this speed)")},600)
    }
  }
  move(){
    this.y += enemySpeed;
    if(this.y > canv.height){
      alert("you let the enemy into our teritory")
    }
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
const playerSize = 70;
const fireballSize = 20;
const enemySize = 60;
var enemySpeed = 1
var x = (canv.width / 2) - (playerSize /2);
var y = canv.height - playerSize;
var fireball1;
//var fireball2;
//var fireball3;
var fireballSpeed = 1;
var enemy1;
//var enemy2;
var points;

fireball1 = new FireballClass;
//fireball2 = new FireballClass;
//fireball3 = new FireballClass;
enemy1 = new EnemyClass;
window.addEventListener('mousemove',function(e){
  x = e.x - (playerSize/2) - 10;
  y = e.y - (playerSize/2);
})
window.addEventListener('click',function(e){
  fireball1.x = x + ((playerSize / 2)-(fireballSize/2));
  fireball1.y = y - 10;
})
function gameLoop(){
  fireball1.projectile()
  enemy1.move()
  enemy1.colision()
  draw()
}

function draw(){
  ctx.drawImage(space,0,0,canv.width,canv.height)
  ctx.drawImage(fireball,fireball1.x,fireball1.y,fireballSize,fireballSize)
  //ctx.drawImage(fireball,fireball2.x,fireball2.y,fireballSize,fireballSize)
  //ctx.drawImage(fireball,fireball3.x,fireball3.y,fireballSize,fireballSize)
  ctx.drawImage(playerShip,x,y,playerSize,playerSize)
  ctx.drawImage(enemyShip,enemy1.x,enemy1.y,enemySize,enemySize)
}
