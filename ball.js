class Ball {
    constructor(x, y, r) {
      var options = {
          'restitution':0.8,
          'friction':0.3,
          'density':1.5
      }
      this.body = Bodies.circle(x, y,r, options);
      this.width = r;
      this.height = r;
      this.image=loadImage("polygon.png")
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle=this.body.angle;
      push ();
      translate(pos.x,pos.y);
      rotate (angle);
      imageMode(CENTER);
      image(this.image,this.body.position.x, this.body.position.y, this.width,this.height);
      pop();
    }
  };