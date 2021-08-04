var enterName = document.querySelector(".enterName");
var enterName1 = document.querySelector(".enterName1");
var loveScoreCalc = document.querySelector(".loveScoreCalc");
var LoveValue = document.querySelector(".LoveValue");
var remark = document.querySelector("#remark");



loveScoreCalc.addEventListener("click",function(){
    if(enterName.value!=='' && enterName1.value!==''){
    enterName.value='';
    enterName1.value='';

let randomNo= Math.floor(Math.random()*100+1);
LoveValue.innerText=randomNo;
//setTimeout(function(){
 //   LoveValue.innerText="";
//},5000);
printText(LoveValue.innerText);
}
});





function printText(value){
    if(value>=1 && value<30 ){
     remark.innerText ="Doob ke mar jao🤣🤣";
    }
   else if(value>=30 && value<70 ){
        remark.innerText ="Han thik thak h😊😊";
       }
   else if(value>=70 && value<=99 ){
        remark.innerText ="Aww loveey dubby😍😍";
       }
   else 
        remark.innerText ="That's  a good one like 💕  LAILA and MAJNU 💕";
       
}







 