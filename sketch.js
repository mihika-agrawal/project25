
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground;
var box1,box2,box3;
var ball;
function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
  ground=new Ground(1600,20);
  box1 = new Dustbin(900,660,250,20);
  box2 =new Box(765,510,20,300);
  box3= new Box(1030,510,20,300);
  ball=new Ball();
}


function draw() {
  rectMode(CENTER);
  background("grey");
  
  drawSprites();
  ground.display();
  ball.display();
  box1.display();
  box2.display();
  box3.display();
  

}

function keyPressed(){

	if(keyCode === UP_ARROW){

		Matter.Body.applyForce(ball.body,ball.body.position,{x:1100,y:-1090});
	}
}

