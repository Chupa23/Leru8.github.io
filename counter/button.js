function Button(x_,y_,w_,h_,r){
    this.x = x_;
    this.y = y_;
    this.w = w_;
    this.h = h_;
    this.r = r;
    this.display = function(){
        push();
        noFill();
        stroke(0);
        strokeWeight(1);
        rect(this.x,this.y,this.w,this.h);
        pop();
    }

    this.click = function(){
        if(mouseX-innerWidth/2>this.x&&mouseX-innerWidth/2<this.x+this.w&&
            mouseY-innerHeight/2>this.y&&mouseY-innerHeight/2<this.h+this.y){
            if(this.r == 1){
                if(r1State){
                    r1State = false;
                    sw1 = -130;
                }
                else if(!r1State){
                    r1State = true;
                    sw1 = -70;
                }
            }
            if(this.r == 2){
                if(r2State){
                    r2State = false;
                    sw2 = 80;
                }
                else if(!r2State){
                    r2State = true;
                    sw2 = 140;
                }
            }
        

        }
     print(mouseX-200+ "  " + this.x);
    }
}