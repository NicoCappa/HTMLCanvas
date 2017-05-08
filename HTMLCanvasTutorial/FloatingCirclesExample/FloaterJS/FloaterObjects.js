var c = canvas.getContext('2d');

// Background Circle
function BackgroundCircle(){
    
    
    
    // Basic Attributes
    this.x = Math.random() * innerWidth;
    this.y = Math.random() * innerHeight;
    this.velocity = (Math.random() -0.5) * 10;
    this.gravity = (Math.random() -0.5) * 10;
    this.radius = 10;
    
    // Array that holds all the colors the BackgroundCirlce can be
    this.colorArray = ["red", "green", "blue", "black"];
    
    // Picks a random color from the color array upon instantiation
    this.color = colorArray[Math.floor(Math.random() * myArray.length)];
    
    this.draw = function(){
        
        c.beginPath();
        c.
    }
    
    
    
    
    
}