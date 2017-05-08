/*
This is a canvas example, anything not doucumented here is 
likely documented in the BasicFunctions Folder
*/


/// Setting up the canvas /// 

var canvas = document.getElementById("floaterCanvas");
var c = canvas.getContext("2d");

resize();
window.onresize = function() {
        resize();
};

function resize(){
    
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
}

window.onload = draw();


/// Draw function /// 


function draw(){
    
    
    
}
