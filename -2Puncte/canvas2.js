let canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let c = canvas.getContext('2d');
let x = 200;
let y = 200;
let wall = false;
let walls= false;
let way = 5;
let wax = 5;
let x2;
let loser = false;
let y2 = 800;
let score= 0;
function animate(){
    requestAnimationFrame(animate);
    c.clearRect(0,0,innerWidth,innerHeight);
    c.fillRect(x,y,20,20);
    c.fillRect(x2,y2,200,24);



    x = x+wax;
    y = y+way;
 if(x>innerWidth){
     walls = true;
 }
 if(x<0){
     walls = true;
 }
 if(y<0){
     wall = true;
 }
 if(y>y2&&x>x2&&x<x2+200&&loser==false){
     wall = true;
     score= score+10;
     wax= wax + 2;
     way = way + 2;

 }

if(wall){
 
way = -way;
wall=false;
}
if(walls){
    wax = -wax;
    walls=false;

}

if(y>y2+20){
    loser= true;
}
if(loser==true){
    c.font='450px Arial';
    c.fillText('-2 puncte',0,innerHeight/2);
}


c.font='50px Arial';
c.fillText(score,1700,100);
}
window.addEventListener('mousemove',function(event){
x2 = event.x;
})
animate();
// Eu Radu Bogdan imi rezerv drepturile de autor petru jocul -2 Puncte