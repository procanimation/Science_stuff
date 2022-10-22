const a = 600;
const b = 400; 
let theta;
function setup() {
   createCanvas(windowWidth, windowHeight);
   theta = 0;
}
function draw(){
   background(51);
   push();
   ellipseMode(CENTER);
   translate(width/2, height/2);
   stroke(221);
   noFill();
   ellipse(0, 0, 2*a, 2*b);
   fill(231);
   let c = int(sqrt(a*a - b*b)) 

   ellipse(-c, 0, 100, 100);
   ellipse(a*cos(theta), b*sin(theta), 50, 50);
   pop();
   if(theta <= -360){
      theta = 0;
   }
   theta -= 0.01;

}
