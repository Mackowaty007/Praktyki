canv = document.getElementById("canvas")
ctx = canv.getContext("2d")
setInterval(main,10)

x = 0
y = 0
ix = 10
iy = 0
verteceX = 0
verteceY = 0
offset = 450
squareSize = 5
vectorNumber = 50 / 2 // the number  of vectors in a line. The total number of vectors drawn will be vectorNumber * vectorNumver

ctx.lineWidth = 2

window.addEventListener("mousemove",function(e){
    x = (e.x - offset - 10)
    y = (e.y - offset - 10) 
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

    ctx.strokeStyle = "blue"
    ctx.beginPath()
    ctx.moveTo(offset,offset)
    ctx.lineTo(x + offset,y + offset)
    ctx.stroke()
    ctx.strokeStyle = "red"
    ctx.beginPath()
    ctx.moveTo(offset,offset)
    ctx.lineTo(ix + offset,iy + offset)
    ctx.stroke()


    ctx.fillStyle = "green"
    for(i=-vectorNumber;i<vectorNumber;i++){
        for(u=-vectorNumber;u<vectorNumber;u++){
            verteceX = (x*i + ix * u) + offset
            verteceY = (y*i + iy * u) + offset

            ctx.fillRect (verteceX-squareSize/2,verteceY-squareSize/2,squareSize,squareSize)
        }
    }
}