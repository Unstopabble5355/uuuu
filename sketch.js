
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball;
var groundObj,leftside;

function setup() {
	createCanvas(1600,700);


	engine = Engine.create();
	world = engine.world;
ball_options={
	isStatic:false,
	restitution:0.3,
	friction:0,
	denstity:0.2

}
	//Create the Bodies Here.

	ball=Bodies.circle(100,10,20,ball_options);
	World.add(world,ball);
	groundObj=new Ground (width/2,670,width,20);
	
    leftside=new Ground(1100,600,20,120);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("black");

  ellipse(ball.position.x,ball.position.y,20) 
leftside.display();
  groundObj.display();

 
  drawSprites();
 
}

function keyPressed(){
	if(keyDown(UP_ARROW)){
	//	Matter.Body.applyForce(ball,{x:0,y:0},{x:0.05,y:0.05})
		Matter.Body.applyForce(ball,ball.position,{x:85,y:-85});

	}
}