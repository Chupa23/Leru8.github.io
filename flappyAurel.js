

    var canvas = document.getElementById('canvas')
    canvas.width = innerWidth-2;
    canvas.height = innerHeight-2;
    var ctx= canvas.getContext('2d')

    window.addEventListener('click' , jump);
    window.addEventListener('resize' , function(){
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight; init();})

    var game = false;
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
    
   function init(){
     GameOver();
     rsGame();
   }

    //draw character
    function draw () {
      var cImg= new Image();
      cImg.src='Aurel.png'
      ctx.drawImage(cImg, x , y, carW, carH);
     if (y+carH<canvas.height ) {
      y+=dy;
      dy+=1.2;
     }
     else if (y+carH>=canvas.height)
     { GameOver();}
    }
     
    //draw Obstacles
    var ObsImage= new Image();
    ObsImage.src= 'obs.png'
    var ObsBImage= new Image();
    ObsBImage.src= 'obsB.png'
    function obstacle(ox,oy){
     this.ox=ox;
     this.oy=oy;
     this.oh = oh;
     this.drawObs = function(){
      ctx.beginPath();
      ctx.globalCompositeOperation='destination-over';
      ctx.fillStyle='black'
      ctx.drawImage(ObsImage,this.ox, this.oy, ow , this.oh);
      ctx.drawImage(ObsBImage,this.ox,this.oy+this.oh + obsGap, ow, innerHeight )
      ctx.closePath();
     }
    
     this.update = function(){
       this.ox-=2;
       if (this.ox+ow<=x&&this.ox+ow>=x-1){
         scr++  ;
         if (scr==30){
           alert('Ai castigat ceva!');
           animation=false;
           jump();
         }}
       if(((x>=this.ox&&x<this.ox + ow) || (x+carW>=this.ox&&x+carH<this.ox+ow) ) && 
       (y<=this.oh || y+carH>=this.oh+obsGap))
        {GameOver()}

       if (this.ox== innerWidth-250){
          pushNewObs();
       }
       this.drawObs();
     }
    }
    
    var lostTextArray = [
      "Ai pierdut?",
      "Esti praf!",
      "Atat poti?",
      "Pur si simplu trist.."
    ]
    //GameOver
     function GameOver(){
      this.lostText=lostTextArray[Math.floor(Math.random() * lostTextArray.length)];
      ctx.beginPath();
      ctx.fillStyle='maroon';
      ctx.font = '35px Arial';
        ctx.fillText(this.lostText , 10,200)
     ctx.closePath();
       animation=false;
       game=false;
       }


    //Score
    function score(){
      ctx.globalCompositeOperation='source-over';
      this.scre = scr.toString();
      ctx.fillStyle='maroon'
      ctx.font= '100px Arial'
      ctx.fillText (this.scre, 40, 80)
    }

    // Create Obstacles
    var obsArray = [];
    
    function pushObs(){
      obsArray=[];
      pushNewObs();
      }

      function pushNewObs(){
        oxp = innerWidth;
        oyp = 0;
     
        var ox= oxp;
        var oy= oyp;
        oh= Math.random()*200+100;
         obsArray.push(new obstacle(ox,oy))
         
        oxp+=250;
        }
    

    //Start Game
   
    function jump(){
      if (game){
        if (!animation){
          animation=true;
          animate();
        }
        if (animation) {
          dy=-17
        }
      }
    }
    
    function hideButtons(){
      if (game){
      document.getElementById('rsButton').style.opacity= "0";
    }
     if (!game){
      document.getElementById('rsButton').style.opacity= "1";
     }
   }

    function rsGame(){
      setTimeout(ResetGame, 100);
    }

    function ResetGame(){
      if (!game){
      if (!animation) {
        x=20; y=200+1;dy=-20;scr=0;
        animation=true;
        animate()
        pushObs();
        animation=false;
        game=true;}
    }}
    
    function animate(){
      if (animation){
      requestAnimationFrame(animate);}
      ctx.clearRect(0,0, innerWidth, innerHeight);
      draw();
      for (var i = 0; i<obsArray.length;i++){
        if (obsArray[i].ox>-ow){
         obsArray[i].update();}
        
         score();
      }
      hideButtons();
      console.log(animation)
    }
  