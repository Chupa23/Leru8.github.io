
function animateTest(id ,c1 , c2 ){
  var el = document.getElementById(id).style;
  var cls1 = document.getElementById(c1).style;
  var cls2 = document.getElementById(c2).style;

  cls1.left = "-100%";
  cls1.height = "200px";
  cls1.top = "50%";

  cls2.left = "-100%";
  cls2.height = "200px";
  cls2.top = "50%";

  el.left ="-100%";
  el.animationName = "contAn ";
  el.animationDuration = "0.7s";
  el.transition = "all 0.7s";
  el.height= "calc(100% - 40px)";
  el.left ="20px";
  el.top = "20px";
}


function changeText(id){
  var el = document.getElementById(id);
  var str = el.innerHTML;
  str = str.substring(0, str.length-3);
  el.innerHTML = str;
  console.log(document.getElementById("ul_o").getElementsByTagName("li").length);

}

function defaultText(id){
  var el = document.getElementById(id);
  var str = el.innerHTML;
  var num = id.toString();
  num = num.substring(1,2)
  str += "  " + num;
  el.innerHTML = str;

}

function cls(){
   var lenght = document.getElementById("ul_o").getElementsByTagName("li").length;
   var id = "mainCont";
   console.log("!!!!!!!!!!");
   for (var i =1 ; i< lenght+1 ; i++){
      id = "mainCont";
      id += i.toString();
      var el = document.getElementById(id).style;

      el.left = "-100%";
      el.height = "200px";
      el.top = "50%";
   }
   
  }
