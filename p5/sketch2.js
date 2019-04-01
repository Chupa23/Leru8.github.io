let s = innerWidth/1100;
let x = 250;
let y = 150;
let w = 300;
let h = 75;
let d = h*2;
//let tx;
let slide = 0;
let r1State=false;
let r2State= false;
let sw1 = -130;
let sw2 = 80;
let dir = 1;
let spin = false;

let b1 = new Button(60,90,100,100,2);
let b2 = new Button(-150,90,100,100,1);

let o,p,t;
function preload(){
    o = loadModel('body.obj');
    p = loadModel('pin.obj');
    t = loadModel('t.obj');
   // tx = loadImage('texture.png');

}
function setup(){
    createCanvas(innerWidth,innerHeight, WEBGL);
    stroke(0);
   // nostrokoe();

}

function draw(){
    background(51);
    if(!r1State&&r2State){
        spin = true;
        dir = 1;
    }
    else if(r1State&&!r2State){
        spin = true;
        dir = -1;
    }
    else {
        spin = false;
    }
    b1.display();
    b2.display();
    
    push();
    noStroke();
    directionalLight(255,255,255,1,1,-1);
    pointLight(255,255,255,200*s,200*s,700*s)
    //stroke(0);
 
    translate(0*s,-30*s,250*s);
    pointLight(255,255,255,200*s,200*s,0*s)
    rotateY(-80*0.01);
    rotateX(50*0.01);
    
   ambientMaterial(91);
    model(o);
   

    ambientMaterial(255);
    if(spin){
        rotateZ(frameCount*0.1*dir);
    }

    model(p);
     
    
    ambientMaterial(255,0,0);
    model(t);
    pop();

    push();
     strokeWeight(10);
    // stroke(210,0,0);
     translate(0,-100);
     if(r1State){
         stroke(255,0,0);
     }
     else if(!r1State){
         stroke(0)
     }
     line(-10,10,-10,135);
     line(-10,130,-105,130)
     line(-100,130,-100,165);
     line(-100,160,sw1,205);


     if(r2State){
        stroke(255,0,0);
    }
    else if(!r2State){
        stroke(0);
    }
     line(20,-10,20,135);
     line(20,130,115,130);
     line(110,130,110,165);
     line(110,160,sw2,205);

     stroke(255,0,0);
     line(140,200,140,innerHeight);
     line(-70,200,-70,innerHeight);

     stroke(0);
     line(-130,200,-130,innerHeight)
     line(80,200,80,innerHeight);
    pop();
  
}

function mousePressed(){
     b1.click();
     b2.click();

print(r2State);
}