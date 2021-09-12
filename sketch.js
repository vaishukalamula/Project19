var sonic, sonicImg
var bomb, bombImg
var ring, ringImg
var score = 0
var hill, hillImg


function preload(){
sonicImg = loadImage("sonic.gif");
bombImg = loadImage("bomb.png")
ringImg = loadImage("ring.png")
hillImg = loadImage("background.png")

bombGroup = new Group();
ringsGroup = new Group();
}

function setup() {
createCanvas(700,250)


hill = createSprite(400,60,800,250)
hill.addImage(hillImg)

 sonic = createSprite(600,180,40,20)
 sonic.addImage(sonicImg)
}



function draw() {
 background(51);
 sonic.y=World.mouseY;
 drawSprites();



if (ringsGroup.isTouching(sonic)) {
  score = score+8
  ringsGroup.destroyEach()
}

//sonic jumping

                                                   
if (bombGroup.isTouching(sonic)) {
  sonic.destroy
  bomb.velocityX = 0
  ring.velocityX = 0
  textSize(70)
  text("GAME OVER",200,125)

  sonic.velocityY = 0
  sonic.x=600;
 sonic.y=180;
}
spawnRings();
spawnBomb();
sonic.scale = 0.2

 textSize(20);
  fill("pink")
  text("Score: "+ score,600,50);

}



function spawnBomb() {
  if (frameCount % 120 === 0) {
    bomb = createSprite(1,200,40,20)
    bomb.addImage(bombImg)
    bomb.scale = 0.07
    bomb.velocityX = 6
   bomb.lifetime = 800
   
   bombGroup.add(bomb)
  }
}

 function spawnRings(){
  if (frameCount % 15 === 0) {
    ring = createSprite(1,200,40,20)
    ring.addImage(ringImg)
    ring.scale = 0.07
    ring.velocityX = 8
    ring.lifetime = 800
    ringsGroup.add(ring)

  }
}