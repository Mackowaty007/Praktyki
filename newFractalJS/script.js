canv = document.getElementById("canvas")
ctx = canv.getContext("2d")
setInterval(main,1000)

//var declaration
//my brush position
var x
var y
//height and width of my arena
var width = canv.width
var height = canv.height
//how accurate is the number- is it part of the mandelbrot set or not
var accuracy = 1
//modified var's - X and Y position but modiefied to get a bigger result
var mx
var my
//z
var zet

//main()

//main function
function main(){
  //this loop changes the drawn line
  for(y=0;y<=height;y++){
    //and this loop changes the drawn column
    for(x=0;x<=width;x++){
      //scaling the object to get bigger and centerd
      mx = (x-width/2)/300
      my = (y-height/2-160)/300
      mx = count(mx)
      my = count(my)
      zet = mx+my
      if (zet<2){
        ctx.fillStyle = 'rgb(0,0,0)'
        if (mx == 0 && my == 0){
        }
      }
      else{
        ctx.fillStyle = 'rgb(30,90,200)'
      }
      ctx.fillRect(x,y,1,1)
    }
  }
  accuracy ++
}

//counting function - tells us if its part of the mandelbrot set
function count(C){
  var Z = 0
  for(i=0;i<=accuracy;i++){
    Z = Math.pow(Z,2)+C
  }
  return(Z)
  accuracy++
}
