

    var canvas = document.getElementById('canvas')
    canvas.width = innerWidth-2;
    canvas.height = innerHeight-2;
    var ctx= canvas.getContext('2d')

    window.addEventListener('click' , jump);

    var carW = 50;
    var carH = 50; 
    var x= 20;
    var y = 200;
    var dy = -20;
    var oxp = innerWidth -20;
    var oyp = 0;
    var ow = 50;
    var obsGap= 250;
    var oh ;
    var animation=false;
    var scr=0;
    var cImg= document.getElementById("charImg");
    


    //draw character
    function draw () {
      
      ctx.drawImage(cImg, x , y, carW, carH);
     if (y>0 && y+carH<canvas.height ) {
      y+=dy;
      dy+=1.5;
     }
     else if (y+carH>=canvas.height || y<=0)
     { animation=false;}
    
    }
     
    //draw Obstacles
    function obstacle(ox,oy){
     this.ox=ox;
     this.oy=oy;
     this.oh = oh;
     this.drawObs = function(){
      ctx.fillStyle='black'
      ctx.fillRect(this.ox, this.oy, ow , this.oh);
      ctx.fillRect(this.ox,this.oy+this.oh + obsGap, ow, innerHeight )
     }
    
     this.update = function(){
       this.ox-=2;
       if (this.ox+ow<=x&&this.ox+ow>=x-1){
         scr++   
       }
       if(((x>=this.ox&&x<this.ox + ow) || (x+carW>=this.ox&&x+carH<this.ox+ow) ) && 
       (y<=this.oh || y+carH>=this.oh+obsGap))
        { animation=false;}
      
       this.drawObs();
     }
    }
     
    //Score
    function score(){
      this.scre = scr.toString();
      ctx.fillStyle='red'
      ctx.font= '100px Arial'
      ctx.fillText (this.scre, 40, 80)
    }


    // Create Obstacles
    var obsArray = [];
    var obsNum=69;
    function pushObs(){
      obsArray=[];
      oxp = innerWidth -ow;
      oyp = 0;
      
    for (var i = 0; i< obsNum ;i++) {
       var ox= oxp;
       var oy= oyp;
       oh= Math.random()*200+100;
       obsArray.push(new obstacle(ox,oy))
      
       oxp+=250;
      
    }}
    
    //Start Game
    function start(){
      if(animation==false){
      animation = true;
      x=20; y=200+1;dy=-20;scr=0;
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
        
         score();
      }
      console.log(scr)
    }