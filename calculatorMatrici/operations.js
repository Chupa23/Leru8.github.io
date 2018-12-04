function Det(nms){
  this.result = 0;
  this.nms = nms;

  this.result=(nms[0].nr*nms[4].nr*nms[8].nr)  +  (nms[3].nr*nms[7].nr*nms[2].nr)  +  (nms[6].nr*nms[1].nr*nms[5].nr) 
 -  ((nms[2].nr*nms[4].nr*nms[6].nr)  +  (nms[5].nr*nms[7].nr*nms[0].nr)  +  (nms[8].nr*nms[1].nr*nms[3].nr))
 console.log('det(A)='+this.result);
 document.getElementById("res").innerHTML="Det(A)=" + result;
}



function mult(){
  this.a = mat1;
  this.b= mat2;


   
}