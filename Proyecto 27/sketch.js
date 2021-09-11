const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world;

var canvas;

var platform1, platform2, platform3, platform4, platform5, platform6;
var ball1, ball2, ball3, ball4, ball5, ball6;
var chain1, chain2, chain3, chain4, chain5, chain6;
function setup() {
    engine = Engine.create();
    world = engine.world;
    
    canvas = createCanvas(800, 400);

    platform = new Platform(330, 100, 50, 40);
    platform2 = new Platform(365, 100, 50, 40);
    platform3 = new Platform(400, 100, 50, 40);
    platform4 = new Platform(435, 100, 50, 40);
    platform5 = new Platform(470, 100, 50, 40);
    platform6 = new Platform(505, 100, 50, 40);
    ball1 = new Ball(330, 170, 30);
    chain1 = new Chain(platform.body, ball1.body, 0, 160);
    ball2 = new Ball(365, 170, 30);
    chain2 = new Chain(ball2.body, platform2.body, 0, 160);
    ball3 = new Ball(400, 170, 30);
    chain3 = new Chain(ball3.body, platform3.body, 0, 160);
    ball4 = new Ball(435, 170, 30);
    chain4 = new Chain(ball4.body, platform4.body, 0, 160);
    ball5 = new Ball(470, 170, 30);
    chain5 = new Chain(ball5.body, platform5.body, 0, 160);
    ball6 = new Ball(505, 170, 30);
    chain6 = new Chain(ball6.body, platform6.body, 0, 160);
}
function draw() {
    Engine.update(engine);
    background("yellow");
    if (keyWentDown("6")) {
        Matter.Body.applyForce(ball6.body, ball6.body.position, {x: 40, y: 0});
    }
    if (keyWentDown("5")) {
        Matter.Body.applyForce(ball5.body, ball5.body.position, {x: 40, y: 0});
    }
    if (keyWentDown("4")) {
        Matter.Body.applyForce(ball4.body, ball4.body.position, {x: 40, y: 0});
    }
    if (keyWentDown("3")) {
        Matter.Body.applyForce(ball3.body, ball3.body.position, {x: -40, y: 0})
    }
    if (keyWentDown("2")) {
        Matter.Body.applyForce(ball2.body, ball2.body.position, {x: -40, y: 0})
    }
    if (keyWentDown("1")) {
        Matter.Body.applyForce(ball1.body, ball1.body.position, {x: -40, y:0});
    }
    fill("red");
    noStroke();
    platform.display();
    platform2.display();
    platform3.display();
    platform4.display();
    platform5.display();
    platform6.display();
    fill("blue");
    ball1.display();
    chain1.display();
    ball2.display();
    chain2.display();
    ball3.display();
    chain3.display();
    ball4.display();
    chain4.display();
    ball5.display();
    chain5.display();
    ball6.display();
    chain6.display();
    textAlign(CENTER)
    textSize(30);
    strokeWeight(1);
    text("Haz click en 1, 2, 3, 4, 5 o 6 y mira lo que pasa", 400, 50);
}
