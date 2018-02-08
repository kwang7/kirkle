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

var x = 200;
var y = 200;
var left = true;
var down = true;

var screensaver = function(e){
    id = requestAnimationFrame(screensaver);
    console.log(id);
    //box reached left or right side of the screen
    if(x == 0 || x == 500){
	left = !left;
    }
    //box reached top or bottom of the screen
    if(y == 0 || y == 530){
	down = !down;
    }
    //direction the box is moving in
    if(left){x++;}
    else{x--;}
    if(down){y++;}
    else{y--;}
    //draw the box !
    ctx.clearRect(0,0,600,600);
    ctx.fillStyle="#ff9999";
    ctx.beginPath();
    ctx.fillRect(x,y,100,70);
    ctx.fill();
    ctx.closePath();
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

var screen = document.getElementById("scrn");
screen.addEventListener('click', screensaver);
