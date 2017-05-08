/**
 * Created by Nico on 5/7/2017.
 */

/*
* This is a personal documentation of the this tutorial playlist:  https://www.youtube.com/watch?v=EO6OkltgudE
*
* In this file you'll find how to:
* - Set a canvas as a variable
* - Resize the canvas to full screen (Even if the page is resized)
* - Draw Rectangles, Lines, and Arcs
*
* //// = Heading
* /// = Sub-heading
* If something is not documented/commented, it is because it has been earlier in the documentation
*/


/////////////////////////////////// Start Documentation ///////////////////////////////////

//// Canvas as variable and resizing ////

    /// Putting the CanvasJS in a variable to be able to manipulate it ///
    var canvas = document.getElementById("homeCanvas");

    /// Re-sizes the CanvasJS once the page loads ///
    canvasResize();

    // Re-sizes the Canvas if the page is re-sized
    window.onresize = function() {
        canvasResize();
    };


    window.onload = animating_arcs();


    /// Canvas Functions ///

    // Function to set the canvas to the full width of the page
    function canvasResize() {
        // Setting the Canvas's height and width to that of the window's, (can be done is CSS but whatever)
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }


//// Drawing Things  ////

    /// Draws a rectangle ///
    function draw_rect(){

        // The CanvasJS drawing context, 2d, 3d, etc...
        var c = canvas.getContext('2d');

        // Gives a color to the upcoming rectangle
        c.fillStyle = "blue";
        // Creates a rectangle with the give arguments: X position, y position, width, height
        c.fillRect(window.innerWidth/2, window.innerHeight/2, 300, 300);

        // More rectangles
        c.fillStyle = "red";
        c.fillRect(100, 200, 300, 300);

        c.fillStyle = "pink";
        c.fillRect(100, 200, 300, 300);

    }

    /// Draws a line ///
    function draw_line() {

        var c = canvas.getContext('2d');

        // Creates the line and also separates it from any other lines
        c.beginPath();

        // Tells the line to start at 50, 300 (x, y)
        c.moveTo(50, 300);
        // Extends the line to coordinates
        c.lineTo(300, 100);
        c.lineTo(405, 104);

        // Gives color to the upcoming stroke
        c.strokeStyle = "lightblue";

        // Gives the line color (black by default)
        c.stroke();
    }

    /// Draws an Arc ///
    function draw_arc(){

        var c = canvas.getContext('2d');

        c.strokeStyle = "yellow";

        c.beginPath();
        // Creates an arc with the given arguments: x position (int), y position (int), radius (int), startAngle (float),
        // endAngle (float), drawCounterClockWise (bool)
        c.arc(300, 300, 30, 0, 1, true);
        c.strokeStyle = "yellow";
        c.stroke();
    }

    /// Animating ///
    function animating_arcs(){

        var c = canvas.getContext("2d");

        var circleArray = [];
        for(var i = 0; i < 5; i++) {
            var radius = 30;
            var newArcX = Math.random() * (innerWidth - radius * 2) + radius;
            var newArcY = Math.random() * (innerHeight - radius * 2) + radius;

            circleArray.push(new Circle(newArcX, newArcY, radius));
        }

        // Function that holds the animation, essentially animation is just refreshing the page a bunch of times
        function animate(){
            requestAnimationFrame(animate);
            //Clears the entire CanvasJS so circles don't stay when re-drawn
            c.clearRect(0, 0, innerWidth, innerHeight);

            // Updates every circle in the circleArray
            circleArray.forEach(function(circle){
                    circle.update();
            });

        }

        animate();

    }