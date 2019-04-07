let body, pins;
let s = innerWidth/1100;
let sx =0 ;
let sy = 0;
let sz = 15; 
let sa = 0;
let rotBx = 75;
let rotBy = -35;
let rotBz = 35;
let openAngle = 0.15;
let closedAngle = 15;
let rotSpeed = 0.3;
let zoom = 0;

let countX=0,countY=0,countZ = 0;
let jkX = 0, jkY = 0,jkZ = -11;
let gateX = 0, gateY = 0; gateZ = -12;

let y = 0;
let x = 0;
let jk, glip,gate,trns;


let count = 0;
let rotate = true;
let slide = 0;

let flips = [];
function preload(){
 body = loadModel('body.obj');
 pins = loadModel('pins.obj');
 jk = loadImage('jk.png');
 flip = loadImage('flip.png');
 gate = loadImage('gate.png');
 trns = loadImage('transistor.png');
}

function setup(){
    createCanvas(innerWidth, innerHeight, WEBGL);
    for( var i=0; i<4;i++){
        flips.push(new JK(i));
    }
}

function draw(){
    
 
    if(sa<openAngle){
        //sx-=0.2; 15
        sy -= 0.2;
        sz +=0.5;
        sa+=0.2;
    }
    else if(sa>closedAngle){
        sy += 0.2;
        sz -=0.5;
        sa-=0.2;
    }
   
    background(51);
    noStroke();
    directionalLight(255,255,255,1,1,-1);
    pointLight(255,255,255,200*s,200*s,700*s);

    push();
    rotateX(rotBx*0.01);
   rotateY(rotBy*0.01);
   rotateZ(rotBz*0.01);


   if(rotate){
    rotateX(frameCount*0.01);
     rotateY(frameCount*0.01);
    rotateZ(frameCount*0.01);
   }


    for(var i = 0;i<flips.length;i++){
        flips[i].update();
        if(!rotate&&(slide==2||slide==3)){
        flips[i].show();
    }
    }

       
    ambientMaterial(40);
    translate(x,y,zoom);
    model(body);
    push();
    translate(45,0,40);
    texture(trns);
    plane(150,60);
    pop();
 

    //if(slide == 3) {
        push();
       // ambientMaterial(40);
            translate(45,0,45);
            push()
            translate(countX,countY,countZ);
            
            texture(jk);
            plane(150,60);

            ambientMaterial(40);
            translate(0,0,-10);
            box(150,60,15);
            pop();

            push();
            translate(jkX,jkY,jkZ);
            texture(flip);
            box(150,60,15);
            pop();

            translate(gateX,gateY,gateZ);
            texture(gate);
            box(150,60,15);
        pop();
   // }

    ambientMaterial(40);
    push();
    translate(sx,sy,sz);
    rotateX(sa*0.1);
    model(body);
    pop();

    ambientMaterial(255);
    model(pins);
    pop();

    switch (slide) {
        case 0:
             rotate = true;
            break;
        case 1:
            rotate = false;
            break;
        case 2 :
            closedAngle = 0.1;
            openAngle = 0.15;
            if(rotBy>-25){
                rotBx+=rotSpeed;
                rotBy-=rotSpeed;
                rotBz+=rotSpeed;
                zoom-=3.0;  
                y-=1.5;    
                x+=0.5;
               }
            break;
        case 3:
            openAngle = 15;
            if(rotBy<0){
                rotBx-=rotSpeed;
                rotBy+=rotSpeed;
                rotBz-=rotSpeed;
                zoom+=3.0;
                y+=1.5;
                x-=0.5;
            }
                if(countX>0){
                countX -= 1;
                countY -= 1;
                }
                binarZ = 450;
                binarY = 160;
                binarX = -50;
            break;
        case 4 :
            countX+=1;
            countY+=1;
            
            //zoom+=0.5;
            break;
        
        case 5: 
                if(jkX<0){
                    jkX++;
                    jkY--;
                }
        break;
        case 6: 
                jkX--;
                jkY++;
        break;

        case 7 :
                if(gateY>0){
                    gateY--;
                }
        break;

        case 8:
                gateY++;
        break;
            // case 4:
        //     closedAngle = 0.1;
        //     openAngle = 0.15;
        //     break;
        default:
            break;
    }
}

function mouseClicked(){
    for(var i = 0;i<flips.length;i++){
        flips[i].changed = false;
    }
    count++;
}

function keyPressed(){
    if(keyCode == 87){
        slide++;
    }
    if(keyCode == 83){
        if(slide>0){
        slide--;
        }
    }
}