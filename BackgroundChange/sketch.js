var colors = ["white","lightgray","lightblue", "lightgreen", "lightyellow", "lightpink"];
var currentColor;

function setup() {
    createCanvas(innerWidth,innerHeight); 
    background("white");
}

function draw()
{
  if (mouseIsPressed)
   {
    if (mouseX < 51) {
      backgroundChange();
    }
  }
  var  y = 0;
  for (i = 0; i < colors.length; i++){
      var currentColor = new ColorBox(0, y, 50, 50, colors[i] );  
      currentColor.appear();
      y = y + 50;
  }
}

function backgroundChange() {
  
    if(mouseY > 0 && mouseY < 50) {
      background("white");
    }  
    else if (mouseY > 50 && mouseY < 100) {
      background("lightgray");
    } 
    
}

    

