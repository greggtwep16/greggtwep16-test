var deviceInfo = function () {
};

//global vars
var canvas;
var ctx;
var x;
var y;
var width;
var height;
var directionx;
var directiony;
var xmultiplier;
var ymultiplier;
var curTime = 0;
var prevTime = 0;
var delta;
var accelerationWatch = null;

//game page



function draw_Scene() {
    //update the visuals in the canvas
    //assume canvas is supported

       // This draws a square with the parameters from the variables set above
	   if (directionx == true)
	   {

	   x += xmultiplier;
	   }
	   else {
	   x-= xmultiplier;
	   }
	   if (directiony == true)
	   {
	   y+= ymultiplier;
	   }
	   else {
	   y-= ymultiplier;
	   }

	   if (x>canvas.width) {
		   directionx=false;
	   }
		  if (x<0) {
		   directionx=true;
	   }

	   if (y>canvas.height) {
		   directiony=false;
	   }
	   if (y<0) {
		   directiony=true;
	   }

	   //clear screen
	   ctx.clearRect(0,0,canvas.width,canvas.height);

	   //draw square
	   ctx.fillRect(x, y, width, height);

    
    
    
}

function game_Loop() {
    //call to timer
    

    //right now only calls draw_scene but might want to do other items
	setInterval(draw_Scene, 13);

	//call to timer

	//function figure out framerate

	  // delta = curTime-prevTime;

	  //  curTime= Date.now();

	    //navigator.notification.alert("curTime= " + curTime + " prevTime= " + prevTime);
	    //navigator.notification.alert("canvas width= " + canvas.width);

    
}

function update_Controls() {
    //get updated controls (accelerometer)
    
}

//main page 

function roundNumber(num) {
    var dec = 3;
    var result = Math.round(num * Math.pow(10, dec)) / Math.pow(10, dec);
    return result;
}



function updateAcceleration(a) {
    document.getElementById('x').innerHTML = roundNumber(a.x);
    document.getElementById('y').innerHTML = roundNumber(a.y);
    document.getElementById('z').innerHTML = roundNumber(a.z);
}

var toggleAccel = function () {
    if (accelerationWatch !== null) {
        navigator.accelerometer.clearWatch(accelerationWatch);
        updateAcceleration({
            x : "",
            y : "",
            z : ""
        });
        accelerationWatch = null;
    } else {
        var options = {};
        options.frequency = 1000;
        accelerationWatch = navigator.accelerometer.watchAcceleration(
                updateAcceleration, function(ex) {
                    alert("accel fail (" + ex.name + ": " + ex.message + ")");
                }, options);
    }
};


function quit() {
    //code below to quit application from javascript
    navigator.app.exitApp();
}


function Play_Game() {
    alert("This is where I would play the game");
}



function init() {
    document.addEventListener("deviceready", deviceInfo, true);
    
        canvas = document.getElementById('canvas');
    canvas.height = window.innerHeight;
    canvas.width = window.innerWidth;
    ctx = canvas.getContext('2d');
    // This sets the fill color to red
    ctx.fillStyle = "rgb(200,0,0)";
    // This sets starting point for some variables for demonstration purposes
    x = 50;
    y = 50;
    width = 10;
    height = 10;
    directionx = true;
    directiony = true;
    
    //assuming normal horizontal is 480
    xmultiplier = canvas.width / 480;
    
    //assuming normal vertical is 800
    
    ymultiplier = canvas.height / 800;
}