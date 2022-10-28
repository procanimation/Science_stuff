const offset = 40;
let ball_1;
let ball_2;
function setup() {
   createCanvas(windowWidth, windowHeight);
   theta = 0;
   let size = 50;
   let ax = -width/2 + size + offset/2;
   let ay = height/2  - size - offset/2;
   let bx = width/2 - size - offset/2;
   let by = height/2  - size - offset/2;
   ball_1 = new Ball(ax, ay, size);
   ball_2 = new Ball(bx, by, size);
}
function draw(){
   background(51);
   push();
   ellipseMode(CENTER);
   rectMode(CENTER,CENTER);
   translate(width/2, height/2);
   strokeWeight(2);
   fill(11);
   rect(-width/2, 0, offset, height);
   rect(width/2, 0, offset, height);
   rect(0, height/2, width, offset);
   noStroke();
   fill(221);
   ball_1.show();
   ball_2.show();
   pop();
}




function mousePressed() {
   ball_1.fire();
   ball_2.fire();
}