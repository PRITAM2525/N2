const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var pendullum, sling;
var pendullum1,pendullum2,pendullum3,pendullum4,pendullum5;
var sling1,sling2,sling3,sling4,sling5;
var ground;

function setup(){
    var canvas = createCanvas(3000,800);
    engine = Engine.create();
    world = engine.world;

	pendullum1 = new pendullum(360,300,20);
    pendullum2 = new pendullum(380,300,20);
    pendullum3 = new pendullum(400,300,20);
    pendullum4 = new pendullum(420,300,20);
    pendullum5 = new pendullum(440,300,20);

    sling1 = new sling(pendullum1.body,roof.body,-80,0);
	sling2 = new sling(pendullum2.body,roof.body,-40,0);
	sling3 = new sling(pendullum3.body,roof.body,0,0);
	sling4 = new sling(pendullum4.body,roof.body,40,0);
	sling5 = new sling(pendullum5.body,roof.body,80,0);
}

function draw(){
    background("grey");

    Engine.update(engine);
    strokeWeight(4);
    pendullum1.display();
    pendullum2.display();
    pendullum3.display();
    pendullum4.display();
    pendullum5.display();
 
    roof.display();
    ground.display();

    sling1.display();
    sling2.display();
    sling3.display();
    sling4.display();
    sling5.display();
}

function mouseDragged(){
    matter.body.setPosition(pendullum1.body,{x: mouseX , y:mouseY});
}

	
