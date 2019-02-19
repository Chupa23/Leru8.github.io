
var back , relay;
var w,h,x,y,x2,y2;
var camSpeed;
var openSpeed;
var move ,open =false;
var font ;
var stage = 0;
var targetPos = 0;
 
function setup(){

  createCanvas(innerWidth,innerHeight);
back =loadImage("placaReleu.png");
relay = loadImage("placaReleu1.png");
w = 960;
h= 540;
x=-w/2;
y=-h/2;
x2=x;
y2=y;
camSpeed= 10;
openSpeed= 2; 

font = loadFont("AvenirNextLTPro-Demi.otf" );
textFont(font);
fill(245);
strokeWeight(10);
stroke(10);
}

function draw(){
  background(51);
  
  switch(stage){
    case 0 :
      targetPos = -300;
      break;
    case 1: 
      targetPos = -800;
      x2=x;
      y2=y;
      open = false;
      break;
    case 2 :
      open = true;
      x2+=openSpeed;
      y2-=openSpeed;
      break;
    case 4 :
      if(x2>x){
        x2-=openSpeed;
        y2+=openSpeed;
      }
      break;
  }
  setPos(targetPos);
 applyMatrix();
translate(width/2,height/2);
image(back , x,y,w,h);
if(!open){
  x2=x;
  y2=y;
}
  
 image(relay , x2 ,y2 ,w ,h, ) ;


textSize(80);
text("Relee Electronice", -width/2+10,-height/2+100);
resetMatrix();

textSize(40);
text(x , 10 ,200);
text(stage, width-100, 200);
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
   case 32: open = !open;
   break;
   case 87 : move = !move;
   break;
   
   }
}
