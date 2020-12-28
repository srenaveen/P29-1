const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var g1,g2;
var hex;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

    g1 = new Ground(300,600,200,20);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(225);
  g1.display();
  
 
}
function mouseDragged() {
    Matter.Body.setPosition(hex.body,{x:mouseX,y:mouseY})    
}
function mouseReleased() {
   launch.fly();
  }



