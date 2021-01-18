var bullet,wall
var speed,weight
var deformation
var thickness

function setup() {
  createCanvas(1600,400);

  wall = createSprite(1200,200,thickness,height/2)
  bullet = createSprite(50,200,50,50)
  
  speed = random(55,90)
  weight = random(30,52)
  thickness = random(22,83)

  bullet.velocityX = speed;
}

function draw() {
  background(0);  
  drawSprites();

  if(wall.x-bullet.x<=wall.width/2+bullet.width/2){

    bullet.velocityX = 0

    deformation = 0.5*weight*speed*speed/22500

    if(deformation < 100){
      bullet.shapeColor = 'green'
    }

    if(deformation > 300){
      bullet.shapeColor = 'red'
    }
  }
}