const Engine = Matter.Engine;
const World = Matter.World;
const Events = Matter.Events;
const Bodies = Matter.Bodies;

var umbrella, umbrellaImage;
var thunder, thunderImage1, thunderImage2, thunderImage3, thunderImage4, rand;
var thunderFrame = 0;
var drops = [];
var maxDrops = 100;

function preload(){
    //umbrellaImage = loadImage("images/Walking Frame/walking_1.png");
    thunderImage1 = loadImage("images/thunderbolt/1.png");
    thunderImage2 = loadImage("images/thunderbolt/2.png");
    thunderImage3 = loadImage("images/thunderbolt/3.png");
    thunderImage4 = loadImage("images/thunderbolt/4.png");
}

function setup(){
   createCanvas(400,600);

   engine = Engine.create();
	 world = engine.world;

   umbrella = new Umbrella(40,200);

   if(frameCount%100 === 0){
     for(var i = 0; i<maxDrops; i++){
       drops.push(new Drop(random(100,400), random(100,400)));
     }
   }

   /*var options = {
     isStatic: true
   }

   umbrella = Bodies.circle(800,400,20,options)
   umbrella.addImage(umbrellaImage);
   World.add(world, umbrella);*/

   Engine.run(engine);
    
}

function draw(){
    background("black");
    
    Engine.update(engine);

    for(var i=0; i<maxDrops; i++){
      drops[i].display();
      drops[i].update();
    }

    rand = Math.round(random(1,4));

    if(frameCount%100 === 0){
      thunderFrame = frameCount;
      thunder = createSprite(random(100,200), random(10,30), 10, 10);

      switch(rand){
        case 1: thunder.addImage(thunderImage1);
        break;
        case 2: thunder.addImage(thunderImage2);
        break;
        case 3: thunder.addImage(thunderImage3);
        break;
        case 4: thunder.addImage(thunderImage4);
        break;
      }

      thunder.scale = random(0.3,0.6);
    }

    if(thunderFrame+10 === frameCount && thunder){
      thunder.destroy();
    }

    //ellipse(umbrellaImage, umbrella.position.x, umbrella.position.y,20, 20);
    umbrella.display();
    
    drawSprites();
}   

