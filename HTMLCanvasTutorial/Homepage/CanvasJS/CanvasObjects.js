/**
 * Created by Nico on 5/8/2017.
 */


// Circle Object
function Circle(arcX, arcY, arcRadius){
    var c = canvas.getContext('2d');
    
    // Setting the X and Y positions to that passed by the constructor
    this.x = arcX;
    this.y = arcY;
    
    // Sets radius 
    this.radius = arcRadius;
    // Sets velocity and gravity to a random value
    this.velocity = (Math.random() -0.5) * 10;
    this.gravity = (Math.random() -0.5) * 10;

    // Draw function (This creates the circle)
    this.draw = function(){
        c.fillStyle = "blue";
        c.beginPath();
        c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true);
        c.fill();

    };

    // Update function (Used for animating, re-draws the circle with updated values)
    this.update = function() {
        
        // Reverses velocity if x is greater than the screen width or ( || )is less than 0
        // This is so that the arc bounces off the sides of the screen
        if (this.x + this.radius > innerWidth || this.x - this.radius < 0) {
            this.velocity = -this.velocity;
        }

        // Does the same as above but for gravity
        if (this.y + this.radius > innerHeight || this.y - this.radius < 0) {
            this.gravity = -this.gravity;
        }

        // Increments the X position by velocity so that the circle can move horizontally
        this.x += this.velocity;
        // Increments the Y position by gravity so that the circle can move vertically
        this.y += this.gravity;
        
        // Calls the draw function with the updated values 
        this.draw();

    }


}
