canv = document.getElementById("canvas")
ctx = canv.getContext("2d")
setInterval(main,10)
/*
class vectorPosClass{
    constructor(){
        this.originX = offset
        this.originY = offset
    }
    position(){
        this.originX * (xMultiplyer/100)
    }
}
*/
//variables
numberOfParralelLines = 10 * 100;
offset = 450
vecorPointSize = 5
xMultiplyer = 1;
yMultiplyer = 1;
//vectorPos = new vectorPosClass


ctx.lineWidth = 4

window.addEventListener('mousemove',function(e){
    xMultiplyer = e.x - 10 - offset
    yMultiplyer = e.y - 10 - offset
})

function draw(){
    ctx.fillStyle = "green"
    ctx.fillRect(0,0,canv.width,canv.height)
    ctx.beginPath()


    //vertical lines
    ctx.strokeStyle = 'blue'
    ctx.moveTo(offset,offset)
    ctx.lineTo(xMultiplyer+offset,yMultiplyer+offset)
    ctx.stroke()
    ctx.strokeStyle = 'red'
    ctx.beginPath()
    //horizontal lines
    ctx.moveTo(offset,offset)
    ctx.lineTo(50 + offset,offset)
    ctx.stroke()

    ctx.fillStyle = "yellow"
    y = 0
    for (i=-offset;i < numberOfParralelLines;i+=100){
        for(y=-offset;y<numberOfParralelLines;y+=100){
            ctx.fillRect(i * xMultiplyer / 100 -vecorPointSize/2,y * yMultiplyer / 100 - vecorPointSize/2,vecorPointSize,vecorPointSize)
        }
    } 
}
function main(){
    draw()
}
