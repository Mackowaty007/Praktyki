canv = document.getElementById("canvas")
ctx = canv.getContext("2d")
setInterval(main,10)

x = 0
y = 0
ix = 10
iy = 0
verteceX = 0
verteceY = 0

window.addEventListener("mousemove",function(e){
    x = e.x / 100
    y = e.y / 100
})
document.addEventListener("keydown",function(e){
    switch(e.keyCode){
        case 37:
            ix -= 1//left
          break
        case 38:
            iy -= 1//up
          break
        case 39:
            ix += 1//right
          break
        case 40:
          iy += 1//down
          break
      }
})
function main(){
    ctx.fillStyle = "white"
    ctx.fillRect(0,0,canv.width,canv.height)

    ctx.fillStyle = "green"
    for(i=0;i<10;i++){
        for(u=0;u<10;u++){
            verteceX = x*i + ix * u
            verteceY = y*i + iy * u

            ctx.fillRect (verteceX,verteceY,10,10)
        }
    }
    

}