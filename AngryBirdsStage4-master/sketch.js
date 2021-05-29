const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

function setup()
{
    var canvas = createCanvas(3000,800);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(1500,750,3000,20);

    box1 = new Box(1600,690,100,100);
    box2 = new Box(1600,590,100,100);
    box3 = new Box(1600,490,100,100);
    box4 = new Box(1600,390,100,100);
    box5 = new Box(1600,290,100,100);
    box6 = new Box(1600,190,100,100);

    box7 = new Box(1480,690,100,100);
    box8 = new Box(1480,590,100,100);
    box9 = new Box(1480,490,100,100);
    box10 = new Box(1480,390,100,100);
    box11 = new Box(1480,290,100,100);
    box12 = new Box(1480,190,100,100);

    box13 = new Box(1360,690,100,100);
    box14 = new Box(1360,590,100,100);
    box15 = new Box(1360,490,100,100);
    box16 = new Box(1360,390,100,100);
    box17 = new Box(1360,290,100,100);
    box18 = new Box(1360,190,100,100);

    ball = new Ball(1000,190,90,90);

    rope = new Rope(ball.body,{x:1100,y:10})
}

 function draw()
 {
     background("yellow")
     Engine.update(engine);
    ground.display();

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
    box17.display();
    box18.display();

    ball.display();

    rope.display();

 }

 function mouseDragged()
 {
     Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY});
 }

