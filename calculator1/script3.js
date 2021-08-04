
var buttons = document.querySelectorAll(".button");
var result = document.querySelector(".result");
let resultvalue = "";
for (item of buttons) {
  item.addEventListener('click', (e) => { 
    let buttonText=e.target.value;
  
    if (buttonText == "=") {
      result.value = eval(resultvalue);
    }
    else if (buttonText == "C") {
      resultvalue = "";
      result.value = resultvalue;
    }
    else {
      resultvalue += buttonText;
      result.value = resultvalue;
    }
  })
}
