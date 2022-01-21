const wrapper = document.getElementById("wrapper");
const display = document.getElementById("display");
const topDisplay = document.getElementById("top")
const bottomDisplay = document.getElementById("bottom")
const content = document.getElementById("content");
const clear = document.querySelector(".clear");
const btn0 = document.querySelector(".num0");
const btn1 = document.querySelector(".num1");
const btn2 = document.querySelector(".num2");
const btn3 = document.querySelector(".num3");
const btn4 = document.querySelector(".num4");
const btn5 = document.querySelector(".num5");
const btn6 = document.querySelector(".num6");
const btn7 = document.querySelector(".num7");
const btn8 = document.querySelector(".num8");
const btn9 = document.querySelector(".num9");
const equal = document.querySelector("equal");
const par = document.querySelector(".par");
const plus = document.querySelector(".plus");
const minus = document.querySelector(".minus");
const multiply = document.querySelector(".multiply");
const divide = document.querySelector(".divide");
const overX = document.querySelector(".overX");
const percent = document.querySelector(".percent");
const point = document.querySelector(".point");
const buttons = document.querySelectorAll(".button");
buttons.forEach(btn => {
    btn.addEventListener("click",(e)=>{
        topDisplay.style.color = "white";
    if(btn.textContent === "1/X"){
        bottomDisplay.textContent = "1/"
    } if(btn.textContent === "C"||btn.textContent === "="){
        bottomDisplay.textContent = ""
    }else
    bottomDisplay.textContent = e.currentTarget.textContent; 
    })
      
});