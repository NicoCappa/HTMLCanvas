// These variables below are most likely required by the all classes we make
// For example, all classs will need canvas and context to be able to draw

var canvas = document.getElementById("floaterCanvas");
var c = canvas.getContext('2d');

// Varable that holds the mouse pointer (It's positions)
var mouse = {
    
    x:undefined,
    y:undefined
}


// Event listener for mouse movement. Arguments: EventType, function (what happens when it moves)
window.addEventListener('mousemove', function(event){
    
    // Set the mouse object we made above's x and y coordinates based on the event's X and Y
    mouse.x = event.x;
    mouse.y = event.y;
    
})
//////////// Classes ////////////

// Background Circle
function BackgroundCircle(){
    
    // Basic Attributes
    this.movementSpeed = 3;
    // Random number 1-10
    this.radius = Math.random() * 15 + 1;
    
    // Max and Min radius the circle can grow or shrink to
    this.maxRadius = 50;
    this.minRadius = Math.random() * 3 + 1;
    // Speed at which the radius increases 
    this.sizeIncreaseSpeed = 5;
    
    this.x = Math.random() * (innerWidth - this.radius * 2) + this.radius;
    this.y = Math.random() * (innerHeight - this.radius * 2) + this.radius;
    this.velocity = (Math.random() -0.5) * this.movementSpeed;
    this.gravity = (Math.random() -0.5) * this.movementSpeed;
    
    
    // Array that holds all the colors the BackgroundCirlce can be
    this.colorArray = ["#FFA103", "#E80044", "#2610FF", "#00E8AA", "#D3FF0B"];
    
    // Picks a random color from the color array upon instantiation
    this.color = this.colorArray[Math.floor(Math.random() * this.colorArray.length)];
    
    this.draw = function(){
        c.fillStyle = this.color;
        c.beginPath();
        c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true);
        c.fill();
        
    }
    
    this.update = function(){
        
        // Statements to change velocity based on position of the circle (allows the circle to bounce)
        if (this.x + this.radius > innerWidth || this.x - this.radius < 0) {
            this.velocity = -this.velocity;
        }
        if (this.y + this.radius > innerHeight || this.y - this.radius < 0) {
            this.gravity = -this.gravity;
        }
        
        /// Interactivity ///
        
        // Range of pixels the circle must be close to the mouse for it to increase
        var mouse_range = 70;
        
        
        // If the distance from our cursor to the circle is less than 50, increase the circle size
        if (mouse.x - this.x < mouse_range && mouse.x - this.x > -mouse_range && mouse.y - this.y < mouse_range && mouse.y - this.y > -mouse_range){
            if(this.radius < this.maxRadius){
                this.radius += 1;
            }
                
        } else if(this.radius > this.minRadius){
           this.radius -= 1;
            
        }
        
        
        this.x += this.velocity;
        this.y += this.gravity;
        
        this.draw();
        
        
    }
    
    
    
    
    
}