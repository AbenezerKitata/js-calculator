const wrapper = document.getElementById("wrapper");
const display = document.getElementById("display");
const topDisplay = document.getElementById("top");
const bottomDisplay = document.getElementById("bottom");
const content = document.getElementById("content");
const clear = document.querySelector(".clear");
const square = document.querySelector(".square");
const del = document.querySelector(".del");
const percent = document.querySelector(".percent");
const point = document.querySelector(".point");
const buttons = document.querySelectorAll(".button");
const nums = document.querySelectorAll(".nums");
const operators = document.querySelectorAll(".operators");
const equal = document.querySelector(".equal");
point.addEventListener("click", () => {
  bottomDisplay.innerText += ".";
});
clear.addEventListener("click", clearText);
equal.addEventListener("click", evaluate);
square.addEventListener("click", squared);
del.addEventListener("click", () => {
  let text = bottomDisplay.innerText;
  let arr = [...text];
  arr.pop();
  let text2 = arr.toString().replace(/,/g, "");
  bottomDisplay.innerText = text2;
});
nums.forEach((num) => {
  num.addEventListener("click", displayText);
});
operators.forEach((operator) => {
  operator.addEventListener("click", displayText);
});
function displayText(e) {
  bottomDisplay.innerText += `${e.currentTarget.innerText}`;
}
function clearText() {
  let text = bottomDisplay.innerText;
  topDisplay.innerText = text;
  bottomDisplay.innerText = ``;
}

function squared() {
  let text = bottomDisplay.innerText;
  topDisplay.innerText = text;
  bottomDisplay.innerText = text ** 2;
}
function evaluate() {
  let text = bottomDisplay.innerText;
  let str = text.toString();
  let arr = [...str];
  console.log(arr);
  console.log(str);
  let splited = arr.map((itm) => {
    if (arr.includes("%")) {
      let modArr = str.split("%");
      topDisplay.innerText = text;
      if (Number(modArr[0]) % Number(modArr[1] === NaN)) {
        bottomDisplay.innerText = `Syntax Error!`;
      }
      bottomDisplay.innerText = Number(modArr[0]) % Number(modArr[1]);
    }
    if (itm === "+") {
      let ans = str.split(itm);
      let added = ans.reduce(function (acc, ar) {
        return Number(acc) + Number(ar);
      }, 0);
      topDisplay.innerText = text;
      if (added === NaN) {
        bottomDisplay.innerText = `Syntax Error!`;
      }
      bottomDisplay.innerText = added;
    }
    if (itm === "-") {
      let ans = str.split(itm);
      let sub = ans.reduce(function (acc, ar) {
        return Number(acc) - Number(ar);
      }, 0);
      topDisplay.innerText = text;
      if (sub === NaN) {
        bottomDisplay.innerText = `Syntax Error!`;
      }
      bottomDisplay.innerText = sub;
    }
    if (itm === "X") {
      let ans = str.split(itm);
      let multiply = ans.reduce(function (acc, ar) {
        return Number(acc) * Number(ar);
      });
      console.log(multiply);
      topDisplay.innerText = text;
      if (multiply === NaN) {
        bottomDisplay.innerText = `Syntax Error!`;
      }
      bottomDisplay.innerText = multiply;
    }
    if (itm === "/") {
      let ans = str.split(itm);
      let divide = ans.reduce(function (acc, ar) {
        return Number(acc) / Number(ar);
      });
      topDisplay.innerText = text;
      if (divide === NaN) {
        bottomDisplay.innerText = `Syntax Error!`;
      }
      bottomDisplay.innerText = divide;
    }
  });

  return splited;
};
bottomDisplay.addEventListener('keydown', (e)=>{
    if (e.key === 1) {
        
    }
})
