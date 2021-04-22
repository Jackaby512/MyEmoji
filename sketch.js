var x;
var y;

function setup() {
  createCanvas(600, 400);
  x = random(100, 500);
  y = random(100, 390);
  noStroke();
}

function draw() {
  background(200, 2, 10);
  
  //Face
  fill(x-65, 255, 0);
  ellipse(x, y, 120, 120);
  
  //Left Eye
  fill('#FFFFF2');
  ellipse(x-20, y-10, 30, 30);
  fill(0);
  ellipse(x-20, y-20, 10, 10);
  
  //Right Eye
  fill('#FFFFF2');
  ellipse(x+20, y-10, 30, 30);
  fill(0);
  ellipse(x+20, y-20, 10, 10);
  
  //Mouth
  fill(0);
  rect(x-15, y+20, 30, 10, 20);
  
  
}