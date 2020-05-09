// You could have multiple flags like: start, launch to indicate the state of the game.

const { Engine, World, Bodies, Body, Mouse, MouseConstraint, Constraint, Composite, Detector } = Matter;
// The above line creates different constant variables for Engine, World, Bodies etc.


var ball1,ball2,ball3,ball4;
var canonBall;
var tank;
function setup() {
    // Setup the canvas, the ground the, tanker, the shooting ball and the bubble balls.
 var canvas = createCanvas(1200,400);
 engine = Engine.create();
 world = engine.world
 ball1 = new Ball(900,370,30);
 ball2 = new Ball(600,370,30);
 ball3 = new Ball(700,370,30);
 ball4 = new Ball(800,370,30);
 tank = new Tanker(85,370,100,100);
 ground = new Ground(600,390,1200,30);
 canonBall = new CanonBall(140,300,30);
 
}

function draw() {
    background("white");
    Engine.update(engine);
    ground.display();
    ball1.display();
    ball2.display();
    ball3.display();
    ball4.display();
    //canonBall.display();
    tank.display();
    if(canonBall.body.position.x>160){
        canonBall.display();
    }

}


function keyReleased() {
    // Call the shoot method for the cannon.
     if(keyCode===32){
        Matter.Body.setVelocity(canonBall.body,{x : 100 , y : 0});
     }
    //  if(keyCode===82){
    //     canonBall.body.position.x = 140;
    //     ball1.body.position.x = 900;
    //     ball2.body.position.x = 600;
    //     ball3.body.position.x = 700;
    //     ball4.body.position.x = 800;


        
    // }
}