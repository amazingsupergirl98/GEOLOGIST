class Sand {
    constructor(x, y) {
      var options = {
          'restitution':1.3,
          'friction':5,
          'density':1
      }
      this.body = Matter.Bodies.circle(x, y,30,30);
      this.width = 15;
      this.height = 15;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      ellipseMode(CENTER);
      strokeWeight(4);
      stroke("black");
      fill("red");
      ellipse(0, 0, this.width, this.height);
      pop();
    }
  };
  