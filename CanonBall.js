class CanonBall {
  constructor(x,y,radius) {
    var options = {
      density :   0.5,
      friction : 1.0,
      restitution : 0.8,
      frictionAir:0.06
    }
    this.body = Bodies.circle(x,y,radius,options);
    this.canonBall = loadImage("canonBall.png");
    World.add(world,this.body);
    this.radius = radius;
  };

  display(){
    var pos = this.body.position;
    push();
    translate(pos.x,pos.y);
    rotate(this.body.angle);
    imageMode(CENTER);
    fill("blue");
    //ellipse(0,0,this.radius);
   image(this.canonBall,0,0,55,60);

    pop();


  };
};
