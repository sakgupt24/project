
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	paper=new Paper(50,500,30)
	ground=new Ground(400,680,800,20)
	dustbinL = new Dustbin(550,630,20,100)
	dustbinR = new Dustbin(750,630,20,100)
	dustbinB = new Dustbin(650,670,180,20)


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  text (mouseX + "," + mouseY, mouseX,mouseY)

  paper.display()
  ground.display()
  dustbinL.display()
  dustbinR.display()
  dustbinB.display()
  
  drawSprites();
 
}
function keyPressed(){
	if (keyCode == UP_ARROW) {
		Matter.Body.applyForce(paper.body,paper.body.position,{x:500,y:500})
	}
}



