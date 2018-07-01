

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
     if (y+carH<canvas.height ) {
      y+=dy;
      dy+=1.2;
     }
     else if (y+carH>=canvas.height)
     { GameOver();}
    
    }
     
    //draw Obstacles
    function obstacle(ox,oy){
     this.ox=ox;
     this.oy=oy;
     this.oh = oh;
     this.drawObs = function(){
      ctx.beginPath();
      ctx.globalCompositeOperation='destination-over';
      ctx.fillStyle='black'
      ctx.fillRect(this.ox, this.oy, ow , this.oh);
      ctx.fillRect(this.ox,this.oy+this.oh + obsGap, ow, innerHeight )
      ctx.closePath();
     }
    
     this.update = function(){
       this.ox-=2;
       if (this.ox+ow<=x&&this.ox+ow>=x-1){
         scr++  ;
         if (scr==30){
           alert('Ai castigat o chestie!');
           animation=false;
           
           jump();
         }

       }
       if(((x>=this.ox&&x<this.ox + ow) || (x+carW>=this.ox&&x+carH<this.ox+ow) ) && 
       (y<=this.oh || y+carH>=this.oh+obsGap))
        {GameOver()}
      
       this.drawObs();
     }
    }
    
    var lostTextArray = [
      "Ai pierdut",
      "Esti praf!",
      "Atat poti?",
      "Te credeam in stare de mai mult",
      "Trist, pur si simplu trist"
    ]
    //GameOver
     function GameOver(){
      this.lostText=lostTextArray[Math.floor(Math.random() * lostTextArray.length)];
      ctx.beginPath();
      ctx.fillStyle='maroon';
      ctx.font = '35px Arial';


      this.printAt = function( context , text, x, y, lineHeight, fitWidth)
  {
    fitWidth = fitWidth || 0;
    
    if (fitWidth <= 0)
    {
         context.fillText( text, x, y );
        return;
    }
    
    for (var idx = 1; idx <= text.length; idx++)
    {
        var str = text.substr(0, idx);
        if (context.measureText(str).width > fitWidth)
        {
            context.fillText( text.substr(0, idx-1), x, y );
            printAt(context, text.substr(idx-1), x, y + lineHeight, lineHeight,  fitWidth);
            return;
        }    context.fillText( text, x, y );
      }
    }
    ctx.closePath();
    this.printAt(ctx,this.lostText, 20,150 , 50, innerWidth-50 );
       animation=false;
      
   
     
     }


    //Score
    function score(){
      ctx.globalCompositeOperation='source-over';
      this.scre = scr.toString();
      ctx.fillStyle='red'
      ctx.font= '100px Arial'
      ctx.fillText (this.scre, 40, 80)
    }


    // Create Obstacles
    var obsArray = [];
    var obsNum=30;
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

    function jump(){
      if (animation==true){
      dy=-17;}
      this.restart = function(){
        animation=true;}
      if(animation==false){
        this.restart()
        x=20; y=200+1;dy=-20;scr=0;
        animate();
        pushObs();
        
        
    
    }
    }
    
    
    function animate(){
      if (animation){
      requestAnimationFrame(animate);}
      ctx.clearRect(0,0, innerWidth, innerHeight);
      draw();
      for (var i = 0; i<obsArray.length;i++){
         obsArray[i].update();
        
         score();
      }
      console.log(animation)
    }
  