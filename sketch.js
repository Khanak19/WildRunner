
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var boy;


function preload(){
  bgImg = loadImage("assets/bg.gif")
  Bgmusic = loadSound("assets/bg.mp3");
  obstacle1 = loadImage("assets/gorillia.gif");
  obstacle2 = loadImage("assets/leopard.gif");
  obstacle3 = loadImage("assets/lion.gif");
  obstacle4 = loadImage("assets/panther.gif");
  obstacle5 = loadImage("assets/wolf.gif");
}

function setup() {
  createCanvas(1500,800);

  engine = Engine.create();
  world = engine.world;
  boy = new Boy(70,650,90,120)
  stick = createSprite(70,630,50,50)
}


function draw() 
{
  background(51);
  image(bgImg, 0, 0, width, height);
  if(!Bgmusic.isPlaying()){
    Bgmusic.play();
    Bgmusic.setVolume(0.3);
  }

  Engine.update(engine);
  
  fill("green");
  textAlign("center");
  textSize(40);
  text("WILD RUNNER", width / 2, 100);
  boy.display();
  drawSprites();
}
function spawnObstacles() {
  if(frameCount % 60 === 0) {
    var obstacle = createSprite(600,165,10,40);
    //obstacle.debug = true;
    obstacle.velocityX = -(6 + 3);
    
    //generate random obstacles
    var rand = Math.round(random(1,6));
    switch(rand) {
      case 1: obstacle.addImage(obstacle1);
              break;
      case 2: obstacle.addImage(obstacle2);
              break;
      case 3: obstacle.addImage(obstacle3);
              break;
      case 4: obstacle.addImage(obstacle4);
              break;
      case 5: obstacle.addImage(obstacle5);
              break;
      default: break;
    }
  }
}
    