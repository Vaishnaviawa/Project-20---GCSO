//creating variables for car, wall, speed and weight
var car, wall; 
var speed, weight;

function setup() {
  //creating a canvas
  createCanvas(1600,400);

  //creating a car sprite
  car=createSprite(50, 200, 50, 50);

  //creating a wall sprite
  wall=createSprite(1500,200,60,height/2);
  //adding colour
  wall.shapeColor=color(80,80,80);

  //random values to speed and weight
  speed=random(55,90);
  weight=random(400,150);
}
function draw() {
  //background colour
  background(255,255,255);

  //speed = x velocity of car
  car.velocityX=speed;

  //detecting collision between wall and car and changing the colour of the car depending upon the deformation
  if(wall.x-car.x<(car.width+wall.width)/2)
  {
    car.velocityX=0;
    //formula for deformation
    var deformation=0.5*weight*speed*speed/22509;

    if(deformation>180)
    {
      car.shapeColor=color(0,255,0);
    }
    if(deformation<180 && deformation>100)
    {
      car.shapeColor=color(230,230,0);
    }
    if(deformation<100)
    {
      car.shapeColor=color(255,0,0);
    }
 }
  //drawing the sprites
  drawSprites();
}