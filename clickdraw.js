var c = document.getElementById("slate");
//instantiate a CanvasRenderingContext2D obj
var ctx = c.getContext("2d");

var bigger = true;
var size = 50;
var id = 8;

var anim8 = function(e){
    id = requestAnimationFrame(anim8);
    console.log(id);
    //size constraints
    if ( size > 427 || size < 1) {
	bigger = !bigger
    }
    //it is getting bigger
    if (bigger){
	size++;
    }
    //now it is getting smaller
    if (!bigger){
	size--;
    }
    //clear the canvas before each frame 
    ctx.fillStyle="#ffffff";
    ctx.fillRect(0,0,600,600);    
    //draw the next circle in the animation
    ctx.fillStyle="#ff9999";
    ctx.beginPath();
    ctx.arc(300, 300, size, 0, 2* Math.PI );
    //ctx.stroke();
    ctx.fill();
    ctx.closePath()
    //console.log(requestAnimationFrame(anim8));
}

//stop animating
var stop = function(e){
    cancelAnimationFrame(id);
}

var end = document.getElementById("stop")
end.addEventListener('click', stop);

c.addEventListener('click', stop);

var anim = document.getElementById("start");
anim.addEventListener('click', anim8);
