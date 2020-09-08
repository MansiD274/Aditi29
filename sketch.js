const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

function setup() {
  createCanvas(1600,1600);
  engine = Engine.create();
  world = engine.world;
  stone = new Stone(200,50);        

  ground1 = new Ground(600,height,1200,20);
 // ground1.shapeColor("black");

  ground2 = new Ground(800,height,1200,20);
 // ground2.shapeColor("black");

  box1 = new Box (600,height,20,20);
  fill("light blue");
  box2 = new Box (620,height,20,20);
  fill("light blue");
  box3 = new Box (640,height,20,20);
  fill("light blue");
  box4 = new Box (660,height,20,20);
  fill("light blue");

  box5 = new Box (630,height+20,20,20);
  fill("pink");
  box6 = new Box (650,height+20,20,20);
  fill("pink");
  box7 = new Box (670,height+20,20,20);
  fill("pink");

  box8 = new Box (640,height+40,20,20);
  fill("cyan");
  box9 = new Box (660,height+40,20,20);
  fill("cyan");

  box10 = new Box(680,height+60,20,20);
  fill("black");

  box11 = new Box(800,height,20,20);
  fill("light blue");
  box12 = new Box(820,height,20,20);
  fill("light blue"); 
  box13 = new Box(840,height,20,20);
  fill("light blue");

  box14 = new Box(830,height+20,20,20);
  fill("pink");
  box15 = new Box(850,height+20,20,20); 
  fill("pink");

  box16 = new Box(840,height+40,20,20);
  fill("cyan");

  slingshot = new Slingshot (stone.body,{x:150,y:50});
}

function draw() { 
  background(100);  
  
  ground1.display();
  ground2.display();

  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
 
  box8.display();
  box9.display();
  box10.display();

  box11.display();
  box12.display();
  box13.display();

  box14.display();
  box15.display();

  box16.display();

  slingshot.display();


}
function mouseDragged(){
  Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY}); 
}

function mouseReleased(){
slingshot.fly();
}