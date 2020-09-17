let canvas = document.getElementById("gameScreen");
let ctx = canvas.getContext("2d");


ctx.clearRect(0,0,800,800);
var x = 0
var y = 0

function draw(){
  ctx.fillRect(x,y,100,100);
  x += 200;

}
while (y<800){
  while (x<800){
    draw()
  }
  y += 100
  if (y % 200 == 0){
    x=0
  }
  else{
    x = 100
  }
}
