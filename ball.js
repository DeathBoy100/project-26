class ball{    
    constructor(x,y,r){
      var options = {
          isStatic: false,
          friction: 0.5,
          density: 1.2,
          restitution: 0.1
      }
       this.body = Bodies.circle(x,y,r,options)
       
       this.radius = r;
       this.image = loadImage("paper.png");
       World.add(world,this.body)
    }    
    display(){
        
        //fill("yellow");
        var p = this.body.position;
        var a = this.body.angle;
        rotate(a);
        imageMode(CENTER);
        image(this.image,p.x, p.y, this.radius*2, this.radius*2);
        //ellipseMode(RADIUS);
        //ellipse(this.body.position.x, this.body.position.y,this.radius,this.radius)
        
    }
 }