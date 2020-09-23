//setup
canv = document.getElementById("gameScreen");
ctx = canv.getContext('2d');
setInterval(game,0)
var color;
var size = 10
function brushColor(whatColor){
  color = whatColor
}
function fill(whatColor){
  ctx.fillStyle = whatColor
  ctx.fillRect(0,0,canv.width,canv.height)
}
var x;
var y;
var button;

window.addEventListener('mousemove',function(e){
  x = e.x
  y = e.y
  button = e.buttons
});
function game(){
  if (button== true){
    ctx.fillStyle = color
    ctx.fillRect(x,y,size,size)
  }
}
