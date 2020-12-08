var monkey , monkey_running;
var ground,groundImage;
var banana ,bananaImage;
var obstacle, obstacleImage;
var FoodGroup, obstacleGroup,bananaGroup;
var score;
var survivalTime = 0;

function preload(){
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}

function setup() {
  createCanvas(500,500);
  
   monkey = createSprite(80,315,20,20)
   monkey.addAnimation("running", monkey_running);
   monkey.scale = 0.1;
  
   ground = createSprite(400,359,900,10);
   ground.velocityX = -6;
   ground.x = ground.width /2;
   console.log(ground.x);
  
   FoodGroup = createGroup();
   obstacleGroup = createGroup();
   bananaGroup = createGroup();
  
  
  score = 0;
}


function draw() {
  background(225);
  
  stroke("white");
  textSize(20);
  fill("white");
  text("score: "+ score,500,500);
  
  stroke("black");
  textSize(20);
  fill("black");
  survivalTime = Math.ceil(frameCount/frameRate())
  text("survival Time: " + survivalTime,100,50);
  
  
  if (ground.x < 0){
      ground.x = ground.width/2;
    }
    
  //jump when the space key is pressed
    if(keyDown("space")&& monkey.y >= 100) {
        monkey.velocityY = -12;
        }
    
  //add gravity
  monkey.velocityY = monkey.velocityY + 0.8;
  
  monkey.collide(ground);
  
  food();
  obstacles();
  
  drawSprites();
}

function food(){
  if(frameCount === 80){
    banana = createSprite(600,120,40,10);
    banana.y = Math.round(random(120,200));
    banana.addImage(bananaImage);
    banana.scale = 0.1;
    banana.velocityX = -3;
    
    //lifetime
    banana.lifetime = 200;
    
    bananaGroup.add(banana);
  }
}

function obstacles(){
  if(frameCount === 300){
    obstacle = createSprite(500,335,10,40);
    obstacle.velocityX = -6 ;
    obstacle.addImage(obstacleImage);
    obstacle.scale = 0.1;
    obstacle.lifetime = 300;
    
    obstacleGroup.add(obstacle);
  }
}


