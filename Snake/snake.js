cvs=document.getElementById('canvas');
ctx=cvs.getContext('2d');

document.addEventListener('keypress' ,setDirectionK)
var fps=45;
var score=0;
var box=17;
var snake=[];
var game=true;
var d ;
var dr;
var j=0;
var grow=false;
var growFct=0;
var food = {
    x:Math.floor((Math.random()*20))*box,
    y:Math.floor((Math.random()*20))*box
 }
 var foodImg = new Image;
 foodImg.src=('food.png')
snake[0]= {
    x:2*box,y:2*box
}


 var verDir = setInterval(dirVer, 1000/fps)
function dirVer(){if(snake[0].x%box==0&&snake[0].y%box==0)
    {
        d=dr;
    }}
function setDirectionK(event){
var key=event.keyCode;   
  if (key==37&&d!='right'){dr='left'}
  else if (key==38&&d!='down'){dr='up'}
  else if (key==39&&d!='left'){dr='right'}
  else if (key==40&&d!='up'){dr='down'}
  else if (event.which==82){console.log('restart')}  
}

function setDirectionB(dir){
    if (dir=='left'&&d!='right'){dr='left'}
    if (dir=='up'&&d!='down'){dr='up'}
    if (dir=='right'&&d!='left'){dr='right'}
    if (dir=='down'&&d!='up'){dr='down'}
}

function restart(){
    if (!game){
    score=0;
    document.getElementById('scr').innerHTML= '0';
    snake=[];
    d='';
    dr='';
    game = true
    food = {
        x:Math.floor((Math.random()*20))*box,
        y:Math.floor((Math.random()*20))*box
     }
     snake[0]= {
        x:2*box,y:2*box
    }
     animate = setInterval(draw,1000/fps);
} 
}


//draw snake---------------------------------------------------
function draw(){
    ctx.fillStyle='#631723';
    ctx.fillRect(0,0,innerWidth,innerHeight);

//draw test grid_____________________________________________
//___________________________________________________
// for(var i=0;i<innerWidth;i+=box){ 
//     for(var j=0;j<innerHeight;j+=box){
//      ctx.strokeRect(i,j,box,box)
//}}
//____________________________________________________

   for(var i=0; i<snake.length;i++){
       ctx.fillStyle=(i<=2)?'#053138':'#0C2733';
       ctx.fillRect(snake[i].x,snake[i].y,box,box)
   }

ctx.drawImage(foodImg,food.x,food.y,box,box);
   
   var snakeX=snake[0].x;
   var snakeY=snake[0].y;
  
   this.drVer = function(){
   if (d=='left'){snakeX-=box/4;}
   if (d=='up'){snakeY-=box/4;}
   if (d=='right'){snakeX+=box/4;}
   if (d=='down'){snakeY+=box/4;}
   }
 
this.drVer();
 if (snakeX==-box/4||snakeX==20*box-(box/4)||snakeY==-box/4||snakeY==20*box-(box/4))
 {game=false;}

 for (var i = 1;i<snake.length;i++) {
     if (snakeX==snake[i].x&&snakeY==snake[i].y){game=false;}
 }

 var newHead = {x:snakeX,y:snakeY};
 snake.unshift(newHead);
//Food colision-----------------------------------------------
if (snakeX==food.x&&snakeY==food.y){
  
    score++;
    sc=score.toString()
    document.getElementById('scr').innerHTML= sc;
 food = {
    x:Math.floor((Math.random()*18+1))*box,
    y:Math.floor((Math.random()*18+1))*box
}
grow=true;  }

else if(!grow) {
 snake.pop();growFct=0;
}

if (grow){
    growFct++
    if(growFct==4){grow=false;}
}
}
//------------------------------------------------------------
function animation(){
   requestAnimationFrame(animation)
   if(game){
  dirVer();
   draw();
   //gameOver();
   
}
}
//animation()
 var animate = setInterval(draw,1000/fps);
 function gameOver(){
    
     if (!game){clearInterval(animate)}
 }
 var anm = setInterval(gameOver, 1000/fps);