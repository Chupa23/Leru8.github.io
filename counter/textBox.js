var moveSpeed = 10;

function txt(x,y,t){
    this.x = x;
    this.y = y;
    this.t = t;
    this.targetX=x;
    this.targetY=y;
    this.in= true;
    this.show = function(){
        text(this.t, this.x,this.y);
    }

    this.move = function(){
        console.log(this.x+"target:"+this.targetX);
        
        if(this.x < this.targetX){
            this.x+=moveSpeed;
        }
         if(this.x > this.targetX){
            this.x-=moveSpeed;
        }
        if(this.y < this.targetY){
            this.y+=moveSpeed;
        }
        else if(this.y > this.targetY){
            this.y-=moveSpeed;
        }
    }



}

function rsStyle(){
    strokeWeight(2);
    fill(255,60);
    stroke(255);
}