
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;

var roof1;
var rope1,rope2;
var bob1,bob2;

var canvas;

function preload()
{
	
}

function setup() {
	canvas=createCanvas(800, 800);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	bob1=new bob(400,500,45);
	roof1=new roof(400,200);
	rope1=new rope(bob1.body,{x:400,y:200});

	bob2=new bob(310,500,45);
	rope2=new rope(bob2.body,{x:310,y:200});

	bob3=new bob(490,500,45);
	rope3=new rope(bob3.body,{x:490,y:200});

	bob4=new bob(580,500,45);
	rope4=new rope(bob4.body,{x:580,y:200});

	bob5=new bob(220,500,45,"main");
	rope5=new rope(bob5.body,{x:220,y:200});

	Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background(rgb(40, 131, 235));
  drawSprites();

  rope1.display();
  
  bob1.display();


  rope2.display();
  bob2.display();

  rope3.display();
  bob3.display();

  rope4.display();
  bob4.display();

  rope5.display();
  bob5.display();
	
  if(keyWentDown("up_arrow")){
       Matter.Body.applyForce(bob5.body,bob1.pos,{x:-400,y:0})
  }


  roof1.display();
}



