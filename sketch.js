var  asteroid,spaceship;
var asteroidImg,spaceshipImg;
var asteroidsGroup;
var gameState=1;
var life=1;
var savethespaceship=0 ;

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
  
  heading= createElement("h1");
  heading= createElement("h1");

}

function draw() {
  background("#BDA297");  

  heading.html("Life: "+life)
  heading.style('color:red'); 
  heading.position(150,20)

  heading.html("Savethespaceship:"+savethespaceship)
  heading.style('color:red'); 
  heading.position(150,100)

  if(gameState===1){
    spaceship.x=mouseX  

if (frameCount % 80 === 0) {
      drawasteroids();
    }

    if(asteroidsGroup.collide(spaceship)){
      handleGameover(asteroidsGroup);
      text("GAME OVER",400,400,250,250);

    }


  }

  drawSprites();
}

function drawasteroids(){
  asteroid = createSprite(random(20,780),40,40,40);
  asteroid.addImage(asteroidImg);
  asteroid.scale = 0.5;
  asteroid.velocityY = 8;
  asteroid.lifetime = 400;
  asteroidsGroup.add(asteroid);
}

function handleGameover(asteroidsGroup){
  life=life-1
  asteroidsGroup.destroyEach();
  

  if (life === 0) {
    gameState=2
  
    
  }
  
  }