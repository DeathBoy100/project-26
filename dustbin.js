class dustbin{    
    constructor(x,y,w,h){
      var options = {
          isStatic: true
      }
       this.bodyl = Bodies.rectangle(x-(w/2),y-(h*2),h,w,options);
       World.add(world,this.bodyl)
       this.bodyb = Bodies.rectangle(x,y,w,h,options);
       World.add(world,this.bodyb)
       this.bodyr = Bodies.rectangle(x+(w/2),y-(h*2),h,w,options);
       World.add(world,this.bodyr)
       this.width = w 
       this.height = h
       this.image = loadImage("dustbingreen.png");
    }    
    display(){
        var p = this.bodyb.position
        
        imageMode(CENTER)
        fill("white")
        image(this.image,0,0,this.width,this.height)
        rect(p.x,p.y,this.bodyb.width, this.bodyb.height);
        rect(p.x -(this.bodyb.width/2),p.y,this.bodyb.width, this.bodyb.height);
        rect(p.x +(this.bodyb.width/2),p.y,this.bodyb.width, this.bodyb.height);
    }
   }