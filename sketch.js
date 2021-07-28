var square
var edge;
function setup() {
  createCanvas(800,800);
  square = createSprite (400,400,50,50)
  edge = createEdgeSprites()
}

function draw() 
{
  background(30);
  if (keyDown(RIGHT_ARROW))
  {
    square.position.x = square.position.x + 5
  }
  if (keyDown(LEFT_ARROW))
  {
    square.position.x = square.position.x - 5
  }
  if (keyDown(UP_ARROW))
  {
    square.position.y = square.position.y - 5
  }
  if (keyDown(DOWN_ARROW))
  {
    square.position.y = square.position.y + 5
  }
  square.collide(edge[1])
  drawSprites();
}




