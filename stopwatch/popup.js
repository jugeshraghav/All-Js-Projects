var hours = document.querySelector(".hours");
var minutes = document.querySelector(".minutes");
var seconds = document.querySelector(".seconds");
var start = document.querySelector(".start");
var resume = document.querySelector(".resume");
var restart = document.querySelector(".restart");
var stop = document.querySelector(".stop");

let hoursCount=0;
let minutesCount=0;
let secondsCount=0;




start.addEventListener("click",function(){
  var a= setInterval (function (){
    if(secondsCount<=59){
    secondsCount++;
    seconds.innerText = secondsCount;
  } 
  if(secondsCount==60){
    secondsCount=0;
    minutesCount++;
    minutes.innerText = minutesCount;
  }
  if(minutesCount==60){
    secondsCount=0;
    minutesCount=0;
    hoursCount++;
    hours.innerText = hoursCount;
  }
  },100);
  stop.addEventListener("click",function(){
    clearInterval(a);
  });

  restart.addEventListener("click",function(){
    if(secondsCount.value!=0){ 
      hoursCount=0;
      minutesCount=0;
      secondsCount=0;
      seconds.innerText=0;
    minutes.innerText=0;
    hours.innerText=0;
    }
    });
 });





