const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;


var player,manImg,drops,umbrella,ground,rainImg,rain,rain1,rainImg1,rain2,rain3,umbrellaImg;

function preload(){
    backImg=loadImage("images/night city.jpg")
    rainImg=loadAnimation("images/1.png","images/2.png","images/3.png","images/4.png");
    rainImg1=loadAnimation("images/source (1).gif");
    umbrellaImg=loadAnimation("images/walking_1.png","images/walking_2.png","images/walking_3.png","images/walking_4.png","images/walking_5.png","images/walking_6.png","images/walking_7.png","images/walking_8.png")
}

function setup(){
    createCanvas(1000,600);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(600,600,1200,20);
    
  
    umbrella = createSprite(100,470,200,200);
    umbrella.addAnimation("umbrella",umbrellaImg);
    umbrella.scale=0.4
   

    drops= new Drops(300,300,50,50);
    
    rain=createSprite(500,100,50,50);
    rain.addAnimation("rain",rainImg);
    rain.scale=0.5;

    rain1=createSprite(700,300,50,50);
    rain1.addAnimation("rain1",rainImg1);
    rain1.scale=2;

    
    rain2=createSprite(500,300,50,50);
    rain2.addAnimation("rain1",rainImg1);
    rain2.scale=2;
    
    
    rain3=createSprite(150,300,50,50);
    rain3.addAnimation("rain1",rainImg1);
    rain3.scale=2;
    
    
    
  
}

function draw(){
  background("black"); 
  Engine.update(engine);
   
  ground.display();
  rain.display();
  rain1.display();
  rain2.display();
  rain3.display();
  umbrella.display();
    
}   

