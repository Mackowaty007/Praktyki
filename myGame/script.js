canv = document.getElementById("myCanvas")
ctx = canv.getContext('2d')
setInterval(gameLoop,1)
canv.width = window.innerWidth - 10;
canv.height = window.innerHeight - 10;
//variable declaration
var points = 0;
var x
var y
var size = 100
var speed = 1
var enemyX = Math.round(Math.random()*canv.width)
var enemyY = 0 - size
var pointsX = Math.round(Math.random()*canv.width)
var pointsY = 0 - size
window.addEventListener("mousemove",function(e){
  x = e.x
  y = e.y
});
function gameLoop(){
  draw()
  colisionCheck()
  entities()
}
function colisionCheck(){
  if (x + size > enemyX && x < enemyX + size && y + size > enemyY && y < enemyY + size){
    alert("you lose, press f5 to reset")
    points = 0
  }
  if (x + size > pointsX && x < pointsX + size && y + size > pointsY && y < pointsY + size){
    points ++
    if (points > 100){
      alert("you win, but how did you do it?!?!?!?!?!?")
    }
    pointsY = 0 - size
    pointsX = Math.round(Math.random()*canv.width)
  }
  if (enemyY > canv.height){
    enemyY = 0 - size;
    enemyX = Math.round(Math.random()*canv.width)
  }
  if (pointsY > canv.height){
    alert("you lose, press f5 to reset")
    points = 0
  }
}
function entities(){
  //entity movement
  enemyY += speed
  pointsY += speed
}
function draw(){
  ctx.fillStyle = "blue"
  ctx.fillRect(0,0,canv.width,canv.height)
  ctx.fillStyle = "black"
  ctx.fillRect(x,y,size,size)
  ctx.fillStyle = "red"
  ctx.fillRect(enemyX,enemyY,size,size)
  ctx.fillStyle = "green"
  ctx.fillRect(pointsX,pointsY,size,size)
  ctx.fillStyle = "black"
  ctx.font = "30px Arial"
  ctx.fillText(points,canv.width - 40,canv.height - 20)
}
