const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 200);

	engine = Engine.create();
	world = engine.world;
ground= new Ground(400,195,800,15)
	body1= new Dustbin(600,160,10,90)
  body2= new Dustbin(700,160,10,90)

circul=new Circul(100,10,10)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  body1.display();
  body2.display();
  ground.display();
  
  circul.display();
  drawSprites();
 }

 function keyPressed(){
 
  if(keyCode===38){

    Matter.Body.applyForce(circul.body,circul.body.position,{x:25,y:-25})
  }
 }



