// An array of all the colors used in this code.
let colors = ["white","lightgray","lightblue", "lightgreen", "lightyellow", "lightpink"];
let currentColor;

function setup() {
    //size of the canvas to draw on
    createCanvas(innerWidth,innerHeight); 

    // Set the background to white, and move the line to setup();
    background("white");
}

function draw()
{
  //Calls a function to begin drawing the line on the canvas
  if (mouseIsPressed)
   {
    if (mouseX < 51) {
      backgroundChange();
    }
  }
    var  y = 0;
    for (i = 0; i < colors.length; i++){

       //make an object for each color box:
        var currentColor = new ColorBox(0, y, 50, 50, colors[i] );  
        currentColor.appear();
        y = y + 50;
    }
}

//The function that changes the color of the line being drawn
function backgroundChange() {
  
    if(mouseY > 0 && mouseY < 50) {
      background("white");
    }  
    else if (mouseY > 50 && mouseY < 100) {
      background("lightgray");
    } 
    
}

    

