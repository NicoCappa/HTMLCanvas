/**
 * Created by Nico on 5/8/2017.
 */



// Circle Object
function Circle(arcX, arcY, arcRadius){
    var c = canvas.getContext('2d');

    this.x = arcX;
    this.y = arcY;
    this.radius = arcRadius;
    this.velocity = (Math.random() -0.5) * 100;
    this.gravity = (Math.random() -0.5) * 100;

    // Draw function
    this.draw = function(){
        console.log("TEST");

        c.strokeStyle = "blue";
        c.beginPath();
        c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true);
        c.stroke();

    };

    // Update function (Used for animating)
    this.update = function() {
        // Reverses velocity if x is greater than the screen width or ( || )is less than 0
        // This is so that the arc bounces off the sides of the screen
        if (this.x + this.radius > innerWidth || this.x - this.radius < 0) {
            this.velocity = -this.velocity;
        }

        if (this.y + this.radius > innerHeight || this.y - this.radius < 0) {
            this.gravity = -this.gravity;
        }

        this.x += this.velocity;
        this.y += this.gravity;

        this.draw();

    }


}
