var canvas = document.querySelector('canvas');
canvas.width = 800; 
canvas.height = 600;
var ctx = canvas.getContext("2d");

var x = 100;
var y = 100;
var dx = 0 ;
var dy = 0 ;
var rectW = 50;
var rectH = 50;

function draw() {
  requestAnimationFrame(draw);
  ctx.clearRect(0, 0 , canvas.width , canvas.height)
  ctx.strokeRect(x , y , 50, 50 );

  if (x + 50< canvas.width && x > 0 && y > 0 && y+50<canvas.height) {
    x += dx;
    y+=dy;  }
  else if ( (x<=0 && y >0 && y +50 < canvas.height) ||
   ( x+50==canvas.width && y >0 && y +50 < canvas.height ) ){
    y+=dy;  }
  else if ((y<=0 && x> 0 && x+50<canvas.width) ||
   (y+50==canvas.height && x> 0 && x+50<canvas.width) ) {
    x+= dx;  }

    dx>0?dx+=0.1:dx<0?dx-=0.1:dy>0?dy+=0.1:dy<0?dy-=0.1 :dx , dy ;
 }
  

function Right () {
  if (dx > -5 || x <= 0){
    dy= 0;
    dx= 5 ;
    if (x+50 < canvas.width){
      x += dx*2; }}}

function Left () {
  if (dx<5 || x+50>=canvas.width){
  dy= 0;
  dx = -5  ;
  if (x +50 >=canvas.width){
    x+= dx*2; }}}

function Up() {
  if (dy<5 || y+50==canvas.height){
  dx=0;
  dy= -5;
  if (y+50==canvas.height){
    y+= dy; }}}

function Down() {
  if (dy> -5 || y==0){
  dx = 0;
  dy = 5;
  if(y==0){
    y += dy; }}}

draw();