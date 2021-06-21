const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var block1, stand;
var red, blue, green, yellow, orange, bubble, ground;

var particle;
var particles = [];

var count = 0;

function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(600,height,1200,20);

    //if (keyDown(DOWN_ARROW)){
        red = new Red(random(200,380), random(200,380));
        blue = new Blue(random(120,320), random(120,320));
        green = new Green(random(2,390), random(2,390));
        yellow = new Yellow(random(100,800), random(380,100));
        orange = new Orange(random(20,380), random(20,380));

        bubble = new Bubble(100,100);
    //}
    
    stand1 = new Stand(400,300,250,10);
    stand2 = new Stand(700,200,200,10);

    //level one
    block1 = new Block(300,275,30,40);
    block2 = new Block(330,275,30,40);
    block3 = new Block(360,275,30,40);
    block4 = new Block(390,275,30,40);
    block5 = new Block(420,275,30,40);
    block6 = new Block(450,275,30,40);
    block7 = new Block(480,275,30,40);

    block8 = new Block(330,235,30,40);
    block9 = new Block(360,235,30,40);
    block10 = new Block(390,235,30,40);
    block11 = new Block(420,235,30,40);
    block12 = new Block(450,235,30,40);
    //level two
    block13 = new Block(360,195,30,40);
    block14 = new Block(390,195,30,40);
    block15 = new Block(420,195,30,40);
    //top
    block16 = new Block(390,155,30,40);
       
}

function draw(){
    background(0);

    Engine.update(engine);

    createEdgeSprites();
    drawSprites();

    red.display();
    blue.display();
    green.display();
    yellow.display();
    orange.display();
    bubble.display();

    stand1.display();
    stand2.display();
     
    block1.display();
    block2.display();
    block3.display();
    block4.display();
    block5.display();
    block6.display();
    block7.display();
    block8.display();
    block9.display();
    block10.display();
    block11.display();
    block12.display();
    block13.display();
    block14.display();
    block15.display();
    block16.display();
    
}
