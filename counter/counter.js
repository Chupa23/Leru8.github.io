var binarZ = 48, binarY = 0, binarX=-10;

function JK(n){
    this.nr = n;
    this.state = false;
    this.changed = true;

    this.update = function(){
        if(count%pow(2,this.nr) == 0&&!this.changed){
            this.state = !this.state;
            this.changed = true;
        }
    }

    this.show = function(){
        push();
        translate(binarX+(35*this.nr),binarY,binarZ);
        if(!this.state){
            torus(10,2,10,10);
        }
        else if(this.state){
            cylinder(2,20);
        }
        pop();
        //console.log(this.changed);
    }
}