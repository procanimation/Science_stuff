class Ball {
    constructor(x, y, size) { 
        this.x = x;
        this.y = y;
        this.size = size;
        this.theta = (-180, 0);
        this.vx = 0; 
        this.vy = 0; 
        this.offset = 40;
     }

     show() {

        if(this.x > width/2 - this.offset || this.x < -(width/2) + this.offset ){
            this.vx *= -1;
        }
    
        ellipse(this.x, this.y, this.size, this.size);
        // print(this.vx, this.vy);
        this.x += this.vx;
        this.y += this.vy;
     }

     fire() {
        this.vx = 5 * cos(this.theta);
        this.vy = 5 * sin(this.theta);
     }
  }