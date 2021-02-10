const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
var engine,world;

var canvas;
var terrorist1;
var terrorist2;
var terrorist3;
var terrorist4;
var terrorist5;
var terroristImg;
var soldier1;
var soldier2;
var soldier3;
var soldierImg;
var lives=3;
var terroristLeft=5;
var backgroundImg;
var bullet1;
var bulletImage;
var scene;
var bulletGroup;
var bullet2;
var enemyGroup;
var bulletGroup2;
var edges;



function preload(){
backgroundImg=loadImage("bg.jpg");
terroristImg=loadImage("terrorist.jpg");
soldierImg=loadImage("soldier1.jpg");
bulletImage=loadImage("bullet2.png");


}


function setup() {
canvas=createCanvas(displayWidth-100,displayHeight-170);


engine=Engine.create();
world=engine.world;

terrorist1=createSprite(200,500,20,20);
terrorist1.addImage(terroristImg);
terrorist1.scale=0.1;

terrorist2=createSprite(200,200,20,20);
terrorist2.addImage(terroristImg);
terrorist2.scale=0.1;

terrorist3=createSprite(100,350,20,20);
terrorist3.addImage(terroristImg);
terrorist3.scale=0.1;

terrorist4=createSprite(400,150,20,20);
terrorist4.addImage(terroristImg);
terrorist4.scale=0.1;

terrorist5=createSprite(400,350,20,20);
terrorist5.addImage(terroristImg);
terrorist5.scale=0.1;

soldier1=createSprite(1100,300,20,20);
soldier1.addImage(soldierImg);
soldier1.scale=0.15;

soldier2=createSprite(1100,600,20,20);
soldier2.addImage(soldierImg);
soldier2.scale=0.15;
soldier2.visible=false;

soldier3=createSprite(1100,600,20,20);
soldier3.addImage(soldierImg);
soldier3.scale=0.15;
soldier3.visible=false;

bulletGroup=new Group();
bulletGroup2=new Group();

}

function draw() {

background(backgroundImg); 


Engine.update(engine);

if(keyDown("space")){
createBullet();
}

if(keyDown("W")){
createBullet2();
}

if(keyDown("UP_ARROW")){
soldier1.velocityY=-3;
soldier1.velocityX=0;

}

if(keyDown("DOWN_ARROW")){
soldier1.velocityY=3;
soldier1.velocityX=0;
}

fill("red");
textSize(15);
text("Terrorists Left ="+terroristLeft,100,50);

fill("red");
textSize(15);
text("Lives left ="+lives,1000,55);

fill("green");
textSize(35);
text("Army Escape",500,100);



if(bulletGroup.isTouching(terrorist1)){
terrorist1.destroy();
}

if(bulletGroup.isTouching(terrorist2)){
terrorist2.destroy();
}

if(bulletGroup.isTouching(terrorist3)){
terrorist3.destroy();
}

if(bulletGroup.isTouching(terrorist4)){
terrorist4.destroy();
}

if(bulletGroup.isTouching(terrorist5)){
terrorist5.destroy();
}

edges=createEdgeSprites();
soldier1.bounceOff(edges);
drawSprites();
}

function createBullet(){
bullet1=createSprite(10,200,40,20);
bullet1.addImage(bulletImage);
bullet1.scale=0.02;
bullet1.x=displayWidth-350;
bullet1.y=soldier1.y;
bullet1.velocityX=-10;
bullet1.lifetime=100;
bulletGroup.add(bullet1);

}

function createBullet2(){
bullet2=createSprite(10,200,40,20);
bullet2.addImage(bulletImage);
bullet2.scale=0.02;
bullet2.x=terrorist1.x;
bullet2.y=terrorist1.y;
bullet2.velocityX=10;
bullet2.lifetime=100;
bulletGroup2.add(bullet2);
    
}

function createEnemies(){
enemyGroup.add(terrorist1);
enemyGroup.add(terrorist2);
enemyGroup.add(terrorist3);
enemyGroup.add(terrorist4);
enemyGroup.add(terrorist5);

}

