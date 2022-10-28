const offset = 40;

function setup() {
   createCanvas(windowWidth, windowHeight);
   theta = 0;
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
   aradius = 50;
   bradius = 50;
   amass = 0.1 * aradius;
   bmass = 0.1 * bradius;
   ax = -width/2 + aradius + offset/2;
   ay = height/2  - aradius - offset/2;
   bx = width/2 - bradius - offset/2;
   by = height/2  - bradius - offset/2;
   ellipse(ax, ay, 2*aradius, 2*aradius);
  
   ellipse(bx, by, 2*bradius, 2*bradius);

}



