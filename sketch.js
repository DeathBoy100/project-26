
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var box1,box2,box3,ball1,ground;
var dustbin_img

function preload()
{
 dustbin_img = loadImage("dustbingreen.png")	
}

function setup() {
	createCanvas(800, 700);
	
	//groundSprite=createSprite(width/2, height-35, width,10);
	//groundSprite.shapeColor=color(255)
	
	

	
	engine = Engine.create();
	world = engine.world;
   // dustbin1 = new dustbin(400,700,50,50)
	box1 = new box(750,600,20,100)
	box2 = new box(600,600,20,100)
	box3 = new box(675,640,170,20)
	ball1 = new ball(100,630,10)
	ground = new Ground (width/2, 650, width, 10);
    box3.addImage(dustbin_img)
    //ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	//World.add(world, ground);
	//Create the Bodies Here.
	
	
	Engine.run(engine);
  
}

function draw() {
  rectMode(CENTER);
  //keyPressed();
  background(0);
  box1.display()
  box2.display()
  box3.display()
  ball1.display();
  //dustbin1.display();
  ground.display();
  //drawSprites();
 
}

function keyPressed() {
	if (keyCode === UP_ARROW){
		Matter.Body.applyForce (ball1.body,ball1.body.position,{x:14,y:-15});
				
	}
}
