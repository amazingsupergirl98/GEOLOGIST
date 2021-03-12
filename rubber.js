class Rubber {
    constructor(x, y) {
      var options = {
        'restitution':0.8,
        'friction':0.3,
        'density':1.0
      }
      this.body = Matter.Bodies.circle(x, y, 100,100);
      this.width = 100;
      this.height = 100;
      
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
      fill("blue");
      ellipse(0, 0, this.width, this.height);
      pop();
    }
  };
  