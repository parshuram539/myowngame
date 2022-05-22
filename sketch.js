var  asteroid,spaceship;
var asteroidImg,spaceshipImg;
var asteroidsGroup;
var gameState=1;

function preload(){
  spaceshipImg=loadImage("spaceship.png");
  asteroidImg=loadImage("asteroids.png");
}

function setup() {
  createCanvas(800,800);

  spaceship= createSprite(400,700,50,50);
  spaceship.addImage(spaceshipImg)
  spaceship.scale=0.2

  asteroidsGroup = createGroup();   
}

function draw() {
  background("#BDA297");  

  if(gameState===1){
    spaceship.x=mouseX  

if (frameCount % 80 === 0) {
      drawasteroids();
    }

    if(asteroidsGroup.collide(spaceship)){
      handleGameover(asteroidsGroup);
    }


  }

  drawSprites();
}

function drawasteroids(){
  asteroid = createSprite(20,random(20,780),40,40);
  asteroid.addImage(asteroidImg);
  asteroid.scale = 0.5;
  asteroid.velocityY = 8;
  asteroid.lifetime = 400;
  asteroidsGroup.add(asteroid);
}

function handleGameover(asteroidsGroup){
  asteroidsGroup.destroyEach();
}