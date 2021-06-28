var fixSprite1, fixSprite2, fixSprite3, fixSprite4;
var movingSprite;
var edges;

function preload(){

}

function setup(){
    
    createCanvas(800,600);

    

    movingSprite=createSprite(random(10,750),300,20,20);
    movingSprite.shapeColor="white";
    movingSprite.velocityX=3;
    movingSprite.velocityY=3;

   
    fixSprite1=createSprite(100,580,180,30);
    fixSprite1.shapeColor="red";

    fixSprite2=createSprite(300,580,180,30);
    fixSprite2.shapeColor="green";

    fixSprite3=createSprite(500,580,180,30);
    fixSprite3.shapeColor="blue";

    fixSprite4=createSprite(700,580,180,30);
    fixSprite4.shapeColor="yellow";

    

}

function draw() {
    background(rgb(10,10,10))
    edges=createEdgeSprites()
    movingSprite.bounceOff(edges)

   
    if(movingSprite.x<0){
        movingSprite.velocityX=3
    }else if(movingSprite.x>800){
        movingSprite.velocityX=-3
    }
   
  if(movingSprite.isTouching(fixSprite4)&&movingSprite.bounceOff(fixSprite4)){
    movingSprite.shapeColor="yellow";
    
  }
  
   if(movingSprite.isTouching(fixSprite3)&&movingSprite.bounceOff(fixSprite3)){
    movingSprite.shapeColor="blue";
   
  }
    
  if(movingSprite.isTouching(fixSprite2)&&movingSprite.bounceOff(fixSprite2)){
    movingSprite.shapeColor="green";
 // movingSprite.velocityX=0;
   // movingSprite.velocityY=0;
  }
  
  if(movingSprite.isTouching(fixSprite1)&& movingSprite.bounceOff(fixSprite1)){
    movingSprite.shapeColor="red";
  }

  if (movingSprite.y<0){
    movingSprite.velocityY=3
  }

  
   
    drawSprites()
}