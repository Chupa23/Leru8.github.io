
var back , relay , light1 ,light2, Ropen;
var rop = false;

var w,h,x,y,x2,y2;
var camSpeed;
var openSpeed;
var move ,open =false, showInfo = false;;
var font ;
var stage = 0;
var targetPos = 0;

var info = new txt(1100,1000,"TextTextTextTextText");
var title = new txt(350, 300, "Relee Electronice");
 
function setup(){

  createCanvas(1360,710);
back =loadImage("placaReleu.png");
relay = loadImage("placaReleu1.png");
light1 = loadImage("light1.png");
light2 = loadImage("light2.png");
Ropen = loadImage("open.png");
w = 960;
h= 540;
x=-w/2;
y=-h/2;
x2=x;
y2=y;
camSpeed= 20;
openSpeed= 2; 

font = loadFont("AvenirNextLTPro-Demi.otf" );
textFont(font);
fill(245, 50);
strokeWeight(2);
stroke(255);
}



function draw(){
  background(51);
  strokeWeight(2);
  applyMatrix();
translate(width/2,height/2);
image(back , x,y,w,h);
image(Ropen , 100, 100);
if(!open){
  x2=x;
  y2=y;
}
if(rop){
  image(Ropen , x ,y ,w ,h, );
}
 
 image(relay , x2 ,y2 ,w ,h, ) ;
textSize(80);
fill(10,95);
resetMatrix(); 

title.show();
title.move();
  switch(stage){
    case 0 :
      targetPos = -400;
      title.targetX = 350;
      title.targetY = 300;
      break;
    case 1: 
      targetPos = -1000;
      x2=x;
      y2=y;
      open = false;
      showInfo = false;
        if(targetPos == x){
      applyMatrix();
      noFill();
      stroke(250);
      ellipse(600,420,400,300);
      rsStyle();
      resetMatrix();
    }
      title.targetX = 10;
      title.targetY= 100;
      break;
    case 2 :
      open = true;
        x2+=openSpeed;
        y2-=openSpeed;
      break;
      case 3 : break;
      case 4  :
      strokeWeight(20);
        point(657,527);
        point(572,535);
      rsStyle();
      break;

      case 5: 
      strokeWeight(20);
      point(657,527);
      point(572,535);
      rsStyle();

      stroke(255,0,0);
      fill(255,0,0,90);
      text("+" , 677, 547);
      stroke(0,0,255);
      fill(0,0,255,90);
      text("-" , 522, 547);
      rsStyle();
      break;

      case 6 :
      strokeWeight(20);
      point(690,504);
      point(554,413);
      rsStyle();
      break;

    case 7:
    targetPos = -1000;
    applyMatrix();
    stroke(255,0,0);
    strokeWeight(10);
      line(556,412,790,572);
      line(790,572,1353,205);
      rsStyle();
      image(light1 , 279,173 ,200,200 );     
      resetMatrix();
      break;
      case 8:
      targetPos = -1300;
      break;
      case 9:
        ellipse(551, 502, 120,120);
      break;
      case 10:rop = false;break;
      case 11 : 
        rop = true;
        targetPos = -1300;
      break;
      case 12:
      targetPos = -1000;
      break;
      case 13:
      applyMatrix();
      stroke(255,0,0);
      strokeWeight(10);
        line(603,446,790,572);
        line(790,572,1353,205);
        line(603,446,566,442);
        line(566,442,528,470);
        line(494,446,528,470);
        rsStyle();
        image(light2 , 202,204 ,200,200 );     
        resetMatrix();
        rop = true;
      break;
      case 14 :
      targetPos = -1000;
      rop = false;
      title.targetX = 10;
      title.targetY= 100;
      applyMatrix();
      stroke(255,0,0);
      strokeWeight(10);
        line(556,412,790,572);
        line(790,572,1353,205);
        rsStyle();
        image(light1 , 279,173 ,200,200 );     
        resetMatrix(); 
      break;
      case 15:
       targetPos = -400;
     title.targetX = 350;
     title.targetY = 300;
     info.targetX = 1000;
      info.targetY = 1000;
  
      break;

      case 16:
      title.targetX = 10;
      title.targetY= 100;
      showInfo = true;
      info.targetX = 300;
      info.targetY = 200;
      info.t = "Alte exemple de relee sunt cele termice si cele de timp";
      break;

  }
  setPos(targetPos);
 

textSize(40);
//text(x , 10 ,200);
//text("X:" + mouseX + "\n" + "Y:"+mouseY, 10,400);
text(stage, width-100, 100);

if(showInfo){
  info.show();
  info.move();
}

}
  	
function setPos(trg){
  var target = trg;
 
  if(x > target ){
    w+=camSpeed;
    h+=camSpeed;
    x-=camSpeed/2;
    y-=camSpeed/2;
  }
  else if(x < target){
    w-=camSpeed;
    h-=camSpeed;
    x+=camSpeed/2;
    y+=camSpeed/2;
  }

}

function mousePressed(){
 
 if(mouseButton == LEFT){

   stage++;
 }
 else if(mouseButton == RIGHT){
   stage--;
 }
 
}

function keyPressed(){
   switch(keyCode){
   case 83:
  // case 37:
   stage--;
   break;
   case 87 :
 //  case 39:
    stage++;
   break;

   
   }
}
