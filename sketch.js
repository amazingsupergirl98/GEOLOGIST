
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const cirlce = Matter.Bodies.circle;
var hammer;
var stone;
var rubber;
var sand1,sand2,sand3,sand4,sand5;
var iron;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
    engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
   
	hammer = new Hammer(100,100);
	stone = new Stone(500,200,70,70);
	ground = new Ground(600,height,1200,20);
	rubber = new Rubber(300,600);
	sand1 = new Sand(150,310);
	sand2 = new Sand(300,310);
	sand3 = new Sand(150,610);
	sand4 = new Sand(500,100);
	sand5 = new Sand(710,300);
	iron = new Iron(400,620,100,50);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  ellipseMode(CENTER);
  background(100);
  
  drawSprites();
  hammer.display();
  stone.display();
  ground.display();
  rubber.display();
  sand1.display();
  sand2.display();
  sand3.display();
  sand4.display();
  sand5.display();
  iron.display();
 
}



