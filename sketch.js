
function preload(){
imagemdomar=loadImage("sea.png")
imagemdonavio=loadAnimation("ship-1.png","ship-1.png", "ship-2.png")
}

function setup(){
  createCanvas(400,400);
  mar=createSprite(400,200)
mar.addImage(imagemdomar)
mar.velocityX=-5
mar.scale=0.3
navio=createSprite(130,200,30,30)
navio.addAnimation("movimentodonavio",imagemdonavio)
navio.scale=0.25
}

function draw() {
  background("blue");
 

if(mar.x<0){
  mar.x=mar.width/8
}



  

drawSprites()
}