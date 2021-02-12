var dragon, dragonGif;
var cake, cakeGif;

function preload() {

  dragonGif = loadAnimation("DragonPics/Dragon1.png", "DragonPics/Dragon2.png");
  cakeGif = loadAnimation("CakePics/Cake1.png", "CakePics/Cake2.png");

}

function setup() {
  createCanvas(1600,800);
  
  cake = createSprite(800,500);
  cake.addAnimation("cakeGif", cakeGif);
  cake.scale = 0.5;
  
  dragon = createSprite(-2000,700);
  dragon.addAnimation("dragonGif", dragonGif);
  dragon.scale = 1.5;
}

function draw() {
  background("#b9ebe9");  

  //console.log(dragon.x);

  if (dragon.x === 0) {
    cake.velocityX = 20;
  }

  textAlign(CENTER);
  fill("blue");
  textSize(100);
  textFont("Georgia")
  text("Happy Birthday!", 820,200);

  if (dragon.x === 2400) {
    dragon.destroy();
    cake.destroy();
    text("and", 820, 420);
    text("Happy Lunar New Year!", 820,640);
  }

  drawSprites();
}

function keyPressed() {

  if (keyDown("space")) {
    dragon.velocityX = 20;
  }
}