function setup() {
  createCanvas(800,400);
  var movingRect=createSprite(200,200,100,10);
  var fixedRect=createSprite(100,100,10,100)
  fixedRect.shapeColor="red";
 
  
}

function draw() {
  background(255,255,255);  
  drawSprites();
}