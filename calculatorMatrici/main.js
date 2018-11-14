var nums = [];


function set(){
    nums = [];
    var x = 1;
    var y = 0;
    for(var i = 0;i<9;i++){
      var num = document.getElementById("in" + i).value;
      x++;
      i%3==0?x=1:x;
      i%3==0?y++:y;
      var n = new numCoords(y,x,num);
      nums.push(n);

    }
    console.log(nums);
}

function numCoords(line,col,nr){
   this.line =line;
   this.col=col;
   this.nr = nr;
}

