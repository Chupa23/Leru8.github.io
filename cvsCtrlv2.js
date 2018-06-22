var canvas = document.getElementById('canvas')
canvas.width = innerWidth;
canvas.height = innerHeight;
var ctx= canvas.getContext('2d')

var carW = 30;
var carH = 30; 
var x= 200;
var y = 200;
var dy = -20;
var oxp = innerWidth -20;
var oyp = -500;
var animation=false;


//draw character
function draw () {
  ctx.fillRect(x , y, carW, carH);
 if (y>0 && y+carH<canvas.height || y<0) {
  y+=dy
  dy+=1.5;
 }
 else if (y+carH>=canvas.height)
 { y=canvas.height-carW*2}

}
 
//draw Obstacles
function obstacle(ox,oy){
 this.ox=ox;
 this.oy=oy;

 this.drawObs = function(){
  ctx.fillRect(ox, oy, 20 , innerHeight);
  ctx.fillRect(ox,oy+innerHeight + 200, 20, innerHeight )
 }
  
 this.update = function(){
   ox-=2;
   if((ox== x+carW || ox== x) && 
   (y<innerHeight-500 || y>-500+innerHeight+200 || y+carH>-500+innerHeight+200))
    { animation=false;}
   this.drawObs();
 }

}

// Create Obstacles
var obsArray = [];
function pushObs(){
  obsArray=[];
  oxp = innerWidth -20;
  oyp = -500;
for (var i = 0; i<10;i++) {
   var ox= oxp;
   var oy= oyp;
   obsArray.push(new obstacle(ox,oy))
   
   oxp+=250;
   oyp+=10
}}

//Start Game
function start(){
  if(animation==false){
  x=200; y=200;dy=-20;
  animation = true;
  animate();
  pushObs();}
}


function jump(){dy=-15;}



function animate(){
  if (animation){
  requestAnimationFrame(animate);}
  ctx.clearRect(0,0, innerWidth, innerHeight);
  draw();
  for (var i = 0; i<obsArray.length;i++){
     obsArray[i].update();
  }
}

