const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var red, blue, green, yellow, orange, ground;

function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(600,height,1200,20);

    red = new Red(random(200,380), random(200,380));
    blue = new Blue(random(120,320), random(120,320));
    green = new Green(random(2,390), random(2,390));
    yellow = new Yellow(random(100,1000), random(380,100));
    orange = new Orange(random(20,380), random(20,380));
}

function draw(){
    background(0);

    Engine.update(engine);

    red.display();
    blue.display();
    green.display();
    yellow.display();
    orange.display();
    
}