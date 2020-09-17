let canvas = document.getElementById("gameScreen");
let ctx = canvas.getContext("2d");

//rozmiar siatki jest do ustawienia
var gridSizeX = 5;
var gridSizeY = 5;

ctx.clearRect(0,0,800,800);
var x = 0
var y = 0
//funkcja do rysowania prostokątów czarnych
function draw(){
  ctx.fillRect(x,y,gridSizeX,gridSizeY);
  x += gridSizeX * 2;
}
//to wyznacza gdzie mają pojawiać się prostokąty
while (y<800){
  while (x<800){
    draw()
  }
  y += gridSizeY
  if (y % (2*gridSizeY) == 0){
    x=0
  }
  else{
    x = gridSizeX
  }
}
