
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;


var mango1,mango2,mango3,mango4,mango5;
var engine,world;
var ground1;
var boy;

function preload()
{
	boy=loadImage("boy.png");
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
  world = engine.world;

  ground1=new Ground(400,690,800,20);
  mango1 = new Mango(200,200,50);

  
}


function draw() {
  Engine.update(engine);	
  background(0);

  ground1.display();
  mango1.display();
  imageMode(CENTER);
  image(boy,150,610,100,300);
}



