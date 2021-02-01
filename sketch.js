
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj,groundObject, paperObject;
var world;
var backImage;

function preload(){
	backImage = loadImage("background.jpg");
}


function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;
	
	groundObject = new Ground(width/2,700,width,20);
	dustbinObj = new Dustbin(1200,680);
	paperObject = new Paper(200, 450, 130);

	Engine.run(engine);
}

function draw() {
  rectMode(CENTER);
  background(backImage);

  paperObject.display();
  groundObject.display();
  dustbinObj.display();
  
}

function keyPressed() {
	if(keyCode === UP_ARROW) {
		Matter.Body.applyForce(paperObject.body, paperObject.position, {x: 385, y:-385});
	}
}