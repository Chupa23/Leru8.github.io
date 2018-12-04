var mat1 = [];
var mat2 = [];

function set(){
    mat1 = [];
    mat2 = [];
    var x = 1;
    var y = 0;
    for(var i = 0;i<18;i++){
      var num = document.getElementById("in" + i).value;
      x++;
      i%3==0?x=1:x;
      i%3==0?y++:y;
      y==4?y=1:y;
      var n = new numCoords(y,x,num);
      if(i<=8){
        mat1.push(n);
      } else{
      mat2.push(n);

      }
    }
console.log(mat1);
console.log(mat2);
console.log(findC(2, mat1));
console.log(findL(1,mat1));
}

function numCoords(line,col,nr){
   this.line =line;
   this.col=col;
   this.nr = nr;


}


function find( x, y ,nms){
   this.nms = nms;
   this.x=x;
   this.y=y;
   this.found = false;
   this.response;
   console.log(this.nms);
   for(var i = 0; i<this.nms.length; i++){

     if(this.nms[i].line == this.y && this.nms[i].col == this.x){
      this.found = true;
      this.response = parseFloat(this.nms[i].nr);
      break;
     }
}
  if (this.found){
    return this.response;
  }
  else{
    console.log('not found');
  }
}

function findC(y , nms){
  this.y = y;
  this.nms = nms;
  this.response = [];
  for (var i= 0; i<this.nms.length; i++){
    if(this.nms[i].col==this.y) {
      this.response.push(this.nms[i]);
      console.log('searching col...');
    }
  }

  return this.response;
}


function findL(x , nms){
  this.x = x;
  this.nms = nms;
  this.response = [];
  for (var i= 0; i<this.nms.length; i++){
    if(this.nms[i].line==this.x) {
      this.response.push(this.nms[i]);
      console.log('searching line...');
    }
  }
  return this.response;
}

