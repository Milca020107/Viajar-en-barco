var ship, ship_moving;
var ground, invisibleGround, groundImage;




var score;


function preload(){
  ship_moving = loadAnimation("ship-1.png","ship-2.png", "ship-3.png", "ship-4.png");
  
  
  groundImage = loadImage("sea.png");

 
  
}

function setup() {

  createCanvas(400, 400)
  
  
  
  //crear sprite de suelo
  ground = createSprite(50, 50);
  ground.addImage("ground",groundImage);
  ground.scale = 0.5;
  ground.x = ground.width /2;
  ground.velocityX = -4;
  
  
  
  ship = createSprite(50,160,20,50);
  ship.addAnimation("moving", ship_moving);
  ship.scale = 0.3;

  

}

function draw() {
  //establecer color de fondo
  background("blue");
  
  
  
  
 
  
  if (ground.x < 0){
    ground.x = ground.width/2;
  }
  
  drawSprites();
  

}


