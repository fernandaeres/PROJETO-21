
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;

function preload()
{
	Matter.Bodies.circle(x,y,radius,[options],[maxSides])	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	var ball_options={
		isStatic:false,
		restitution:0.3,
		friction:0,
		density:1.2,
		matter.Bodies.circle(x,y,radius,[options],[maxSides])
	}
	groundObj.display();
	groundObj=new ground(width/2,670,width,20);
	leftSide = new groud(1100,600,20,120);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 
}



