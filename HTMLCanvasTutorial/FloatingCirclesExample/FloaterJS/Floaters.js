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
    
    var backgroundCircleList = [];
    for(var i = 0; i < 800; i++){
        backgroundCircleList.push(new BackgroundCircle());
        
    }
    
    // Animate
    function animate(){
        requestAnimationFrame(animate);
        c.clearRect(0, 0, innerWidth, innerHeight);
        
        backgroundCircleList.forEach(function(bCircle){
            bCircle.update();
        });
        
    }
    
    animate();
    
}
