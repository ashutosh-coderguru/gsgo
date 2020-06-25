var wall,deformation ;
var zenia
var speed,weight;


function setup() {
  createCanvas(800,400);
  zenia =createSprite(400, 200, 40, 20);
  wall = createSprite(1500,200,60,height/2);
  wall.shapeColor="green";
  wall.debug= true;
  zenia.shapeColor="green";
  zenia.debug=true;
  speed=random(55,90);
  weight=random(400,1500);
  zenia.velocityX = speed;
}
function draw() {
  background(0,0,0); 
  zenia.x = World.mouseX;
  zenia.y = World.mouseY;
  if(wall.x-zenia.x<(zenia.width+wall.width)/2)
  {
    zenia.velocityX=0;
    var deformation=0.5 * weight * speed* speed/22509;
    if(deformation>180)
    {
      zenia.shapeColor=color(255,0,0);
    }
    if(deformation,180 && deformation>100)
    {
      zenia.shapeColor=color(230,230,0);
    }
    if(deformation<100)
    {
      zenia.shapeColor=color(0,255,0);

    }
  }

  drawSprites();
}