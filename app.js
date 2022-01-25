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
const square = document.querySelector(".square");
const plus = document.querySelector(".plus");
const minus = document.querySelector(".minus");
const multiply = document.querySelector(".multiply");
const divide = document.querySelector(".divide");
const del = document.querySelector(".del");
const percent = document.querySelector(".percent");
const point = document.querySelector(".point");
const buttons = document.querySelectorAll(".button");
const nums = document.querySelectorAll(".nums");
const operators = document.querySelectorAll(".operators");
const equal = document.querySelector(".equal");
point.addEventListener("click",()=>{
    bottomDisplay.innerText += "."
})

clear.addEventListener("click", clearText);
equal.addEventListener("click", evaluate);
square.addEventListener("click", squared);
let operatorsArray = [...operators].map((operator)=>{
    return operator.textContent
});


del.addEventListener("click", ()=>{
    let text = bottomDisplay.innerText
    let arr = [...text];
    arr.pop();
    let text2 = arr.toString().replace(/,/g, "")
    bottomDisplay.innerText = text2;
});
nums.forEach(num => {
    num.addEventListener("click",displayText)
});
operators.forEach(operator=>{
    operator.addEventListener("click",displayText)
});
function displayText(e) {
    bottomDisplay.innerText += `${e.currentTarget.innerText}`;
};
function clearText(){
    let text = bottomDisplay.innerText;
    topDisplay.innerText = text;
    bottomDisplay.innerText = null;
}
function evaluate(){
    let text = bottomDisplay.innerText;
    let str = text.toString();
    let arr = [...str];
        if (arr.includes("+")){
            let modArr = str.split("+");
            if (modArr[0] === "") {
                modArr.shift() 
            }
            topDisplay.innerText = text;
            bottomDisplay.innerText = Number(modArr[0]) + Number(modArr[1]);
        }
        if (arr.includes("-")){
            let modArr = str.split("-");
            if (modArr[0] === "") {
                modArr.shift() 
            }
            topDisplay.innerText = text;
            bottomDisplay.innerText = Number(modArr[0]) - Number(modArr[1]);
        }
        if (arr.includes("X")){
            let modArr = str.split("X");
            if (modArr[0] === "") {
                modArr.shift() 
            }
            topDisplay.innerText = text;
            bottomDisplay.innerText = Number(modArr[0]) * Number(modArr[1])
        }
        if (arr.includes("/")){
            let modArr = str.split("/");
            if (modArr[0] === "") {
                modArr.shift() 
            }
            topDisplay.innerText = text;
            bottomDisplay.innerText = Number(modArr[0]) / Number(modArr[1])
        }
        if (arr.includes("%")){
            let modArr = str.split("%");
            if (modArr[0] === "") {
                modArr.shift() 
            }
            topDisplay.innerText = text;
            bottomDisplay.innerText = Number(modArr[0]) % Number(modArr[1])
        }
};
function squared(){
    let text = bottomDisplay.innerText;
    topDisplay.innerText = text;
    bottomDisplay.innerText = text**2;
}
// function fraction(){
//     let text = bottomDisplay.innerText;
//     topDisplay.innerText = text;
//     bottomDisplay.innerText = Number(`1/${text}`);
// }

