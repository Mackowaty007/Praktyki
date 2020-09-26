canv = document.getElementById("canvas")
ctx = canv.getContext('2d');
setInterval(loop,1)

//var
var bubble1;
var bubble2;
class Bubble{
  constructor(){
    this.x = 200;
    this.y = 200;
  }
  move(){
    this.x += Math.floor(Math.random()*(5 - (-5) + 1)+(-5));
    this.y += Math.floor(Math.random()*(5 - (-5) + 1)+(-5));
  }
  draw(){
    ctx.clearRect(0,0,canv.width,canv.height)
    ctx.fillRect(bubble1.x,bubble1.y,20,20)
    ctx.fillRect(bubble2.x,bubble2.y,20,20)
  }
}

bubble1 = new Bubble;
bubble2 = new Bubble;

function loop(){
  bubble1.move()
  bubble2.move()
  bubble1.draw()
  bubble2.draw()
}
function draw(){
  ctx.clearRect(0,0,canv.width,canv.height)
  ctx.fillRect(bubble1.x,bubble1.y,20,20)
  ctx.fillRect(bubble2.x,bubble2.y,20,20)
}
