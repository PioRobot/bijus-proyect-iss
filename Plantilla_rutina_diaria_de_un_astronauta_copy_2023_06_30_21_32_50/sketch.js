var scott
function preload() {
  bg = loadImage("images/iss.png");
  sleep = loadImage("images/sleep.png");
  brush = loadImage("images/brush.png");
  eat=loadAnimation("images/eat1.png","images/eat2.png")
  ex=loadAnimation("images/gym11.png","images/gym12.png")
  showering = loadAnimation("images/bath1.png", "images/bath2.png");
  move = loadAnimation("images/move.png", "images/move1.png");
}

function setup() {
  createCanvas(400, 400);
  scott=createSprite(300,230);
  scott.addAnimation("sleep",sleep);
  scott.scale=0.1;
}

function draw() {
  background(bg);
  
    if(keyDown("DOWN_ARROW")){
    scott.addAnimation("ex",ex);
    scott.changeAnimation("ex",ex);
  }
  
  if(keyDown("LEFT_ARROW")){
    scott.addAnimation("eat",eat);
    scott.changeAnimation("eat",eat);
  }
  
      if(keyDown("UP_ARROW")){
    scott.addAnimation("brush",brush);
    scott.changeAnimation("brush");
  }
  
  if(keyDown("RIGHT_ARROW")){
    scott.addAnimation("showering",showering);
    scott.changeAnimation("showering");
  }
  
    if(keyDown("M")){
    scott.addAnimation("moving",move);
    scott.changeAnimation("moving");
  }
  textSize(18);
  fill(255,255,355);
  text("instructions:", 10, 30);
  text("up for brushing", 10, 50);
  text("down for exercise", 10, 70);
  text("left for eating", 10, 90);
  text("right for bathing", 10, 110);
  text("M for moving", 10, 130);
  drawSprites()
}