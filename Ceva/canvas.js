let canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let c = canvas.getContext('2d');

c.font = '50px Arial';

let mouse = {x:0,y:0}
let score = 0;
let gameOver = false;
let speed = 3;
window.addEventListener('mousemove', function(event){
    mouse.x = event.x;
    mouse.y = event.y;
});

window.addEventListener('click', function(){
    console.log(bullets.length);
    let b = new Bullet(player.x+player.width/2,player.y);
    
    bullets.push(b);
    
});

let size = innerHeight/20;
let bullets = [];
let obstacles = [];

function Player(){
    this.x;
    this.y;
    this.height = size;
    this.width = this.height*3;
    
    this.show = function(){
       c.fillRect(this.x,this.y,this.width,this.height);
       c.fillRect(this.x+this.height,this.y-this.height, this.height, this.height);
    }

    this.update = function(){
        this.x = mouse.x - this.width/2;
        this.y = mouse.y - this.height/2;
        this.show();
    }
}

let player = new Player();

function Bullet(x,y){
    this.x = x;
    this.y = y;
    this.w = size/2;
    this.speed = 10;

    this.show = function(){
        c.fillRect(this.x-this.w/2,this.y,this.w, this.w);
    }
    this.update = function(){
        this.y-=this.speed;
        this.show();
    }
}

function Obstacle(x){
    this.x = x*size;
    this.y = 0;
    this.speed = speed;
    this.hit = false;
    this.show = function(){
        c.fillRect(this.x,this.y,size,size);
    }
    this.update = function(){
        this.y+=this.speed;
        for(let i=0;i<bullets.length;i++){
            let b = bullets[i];
            if(dist(this.x+size/2,this.y,b.x,b.y)<size){
                this.hit = true;
                //console.log(dist(this.x,this.y,b.x,b.y));
            }
        }

        if(this.y>innerHeight){
            gameOver = true;
        }
        this.show();
    }
}

function dist(x1,y1,x2,y2){
    return Math.sqrt(((x1-x2)*(x1-x2))+((y1-y2)*(y1-y2)));
}

function animate(){
    requestAnimationFrame(animate);
    c.clearRect(0,0,innerWidth,innerHeight);
    player.update();

    if(!gameOver){
    for(let i=0;i<bullets.length;i++){
        bullets[i].update();
        if(bullets[i].y<0){
            bullets.splice(i,1);    
        }
    }


    for(let i=0;i<obstacles.length;i++){
        obstacles[i].update();
        if(obstacles[i].hit){
            obstacles.splice(i,1);
        }
    }


    if(Math.random()<0.03){
      obstacles.push(new Obstacle((Math.random()*20)+1));
    }

    
    score+=0.1;
    speed+=0.003;
 }
    c.fillText(Math.floor(score), innerWidth-200,100);
    if(gameOver){
        c.font = '100px Arial';
        c.fillText('GAME OVER', innerWidth/2-300,innerHeight/2);
    }
}

animate();