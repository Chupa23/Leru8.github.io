cvs=document.getElementById('canvas');
ctx=cvs.getContext('2d');

document.addEventListener('keydown' , setDirectionK)
var score=0;
var box=17;
var snake=[];
var game=true;
var d ;


function setDirectionK(event){
  var key=event.keyCode;
  if (key==37&&d!='right'){d='left'}
  if (key==38&&d!='down'){d='up'}
  if (key==39&&d!='left'){d='right'}
  if (key==40&&d!='up'){d='down'}
}

function setDirectionB(dir){
    if (dir=='left'&&d!='right'){d='left'}
    if (dir=='up'&&d!='down'){d='up'}
    if (dir=='right'&&d!='left'){d='right'}
    if (dir=='down'&&d!='up'){d='down'}
}

snake[0]= {
    x:2*box,y:2*box
}

var food = {
   x:(Math.floor((Math.random()*20)))*box,
   y:Math.floor((Math.random()*20))*box
}

function restart(){
    if (!game){
    score=0;
    document.getElementById('scr').innerHTML= '0';
    snake=[];
    d='';
    game = true
    animate = setInterval(draw,70);
    snake[0]= {
        x:2*box,y:2*box
    }}
    animation();
}
//draw snake---------------------------------------------------
function draw(){
    ctx.fillStyle='grey'
    ctx.fillRect(0,0,innerWidth,innerHeight)
   for(var i=0; i<snake.length;i++){
       ctx.fillStyle=(i==0)?'black':'white';
       ctx.fillRect(snake[i].x,snake[i].y,box,box)
   }
ctx.fillStyle='maroon'
ctx.fillRect(food.x,food.y,box,box)
   
   var snakeX=snake[0].x;
   var snakeY=snake[0].y;

 if (d=='left'){snakeX-=box;}
 if (d=='up'){snakeY-=box;}
 if (d=='right'){snakeX+=box;}
 if (d=='down'){snakeY+=box;}

 if (snakeX==-box||snakeX==20*box||snakeY==-box||snakeY==20*box)
 {game=false;}

 for (var i = 1;i<snake.length;i++) {
     if (snakeX==snake[i].x&&snakeY==snake[i].y){game=false;}
 }
if (snakeX==food.x&&snakeY==food.y){
    score++;
    sc=score.toString()
    document.getElementById('scr').innerHTML= sc;
 food = {
    x:Math.floor((Math.random()*20))*box,
    y:Math.floor((Math.random()*20))*box
}
}
else {
 snake.pop();
}

 var newHead = {x:snakeX,y:snakeY}
 snake.unshift(newHead)
 console.log(score)

}

//------------------------------------------------------------
function animation(){
    if(game){
    ctx.clearRect(0,0,innerWidth,innerHeight)
 
}}

var animate = setInterval(draw,70);
function gameOver(){
    
    if (!game){clearInterval(animate)}
}
var anm = setInterval(gameOver, 70);
animation()