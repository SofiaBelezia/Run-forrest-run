var muleke,mulekeCorrendo,edges
var soloImage
var solo
var paredeInvisivel
var paredeInvisivel2


function preload(){
  //imagens pré-carregadas
  mulekeCorrendo = loadAnimation("Runner-1.png", "Runner-2.png")
  soloImage = loadImage("path.png")

}

function setup(){
  createCanvas(400,400);
  //crie sprite aqui
  
  solo=createSprite(200,10,400,20)
  solo.addAnimation("solo",soloImage)
  
  muleke=createSprite(200,290,20,40)
  muleke.addAnimation("running", mulekeCorrendo)
  edges = createEdgeSprites();

  muleke.scale=0.1
  muleke.x=200

  paredeInvisivel=createSprite(40,200,20,500)
  paredeInvisivel2=createSprite(370,200,20,500)
}

function draw() {
  background(0);

  if(keyDown(LEFT_ARROW)){
    muleke.x=muleke.x-5
  }
if(keyDown(RIGHT_ARROW)){
  muleke.x=muleke.x+5
}

//velocidade do solo

solo.velocityY=5

if(solo.y>400){
  solo.y=height/2
}

paredeInvisivel.visible=false
paredeInvisivel2.visible=false

muleke.collide(paredeInvisivel)
muleke.collide(paredeInvisivel2)

drawSprites();
}
