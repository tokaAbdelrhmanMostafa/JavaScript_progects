var ELementInput = document.getElementById("input");
var ELementBtn = document.getElementById("btn");
var ELementP = document.getElementById("msg");
ELementBtn.onclick=function(){
   var InputVal = ELementInput.value;
   
    ELementP.innerHTML=InputVal;
   InputVal.value="";
   
   
}