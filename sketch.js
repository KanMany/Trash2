
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload() {

}

function setup() {
	createCanvas(1365, 400);
	engine = Engine.create();
	world = engine.world;
	//Create the Bodies Here.
	red1 = new Bin(1100, 400)
	red2 = new Bin(1000, 350)
	red3 = new Bin(1200, 350)
	ground = new Ground(width / 2, height, width, 20);
	paper = new Paper(50, 350);
	Engine.run(engine);

}


function draw() {
	background(255);
	ground.display();
	paper.display();
	red1.display();
	red2.display();
	red3.display();

	

}

functino keyPressed(){}
	if (keyCode === UP_ARROW) {
		Matter.Body.applyForce(paper.body, paper.body.position, { x: 1.9, y: -1.9 })
	}


