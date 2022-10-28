
const offset = 40;
const roofheight = 400;

let ball;
function setup() {
   createCanvas(windowWidth, windowHeight);
   theta = 0;
   let size = random(30, 50);
   
   let ax = -width/2 + size + offset/2;
   let ay = random(-height/4, height/4);
   ball = new Ball(ax, ay, size);
}

function draw(){
   background(51);
   push();
   ellipseMode(CENTER);
   rectMode(CENTER,CENTER);
   translate(width/2, height/2);
   strokeWeight(2);
   noStroke();
   fill(221);
   ball.show();
   fill(11);
   rect(-width/2, 0, 2*offset, roofheight);
   rect(width/2, 0, 2*offset, roofheight);
   rect(0, height/2, width, offset);
   pop()
//    noLoop();
}


function mousePressed() {
   ball.fire();
}
// function fireBall() {
//     aradius = random(30, 50);
//     ax = -width/2 + aradius + offset/2;
//     ay = random(-height/4, height/4);
   
//     ellipse(ax, ay, 2*aradius, 2*aradius);
// }



