const wrapper = document.getElementById("wrapper");
const display = document.getElementById("display");
const topDisplay = document.getElementById("top");
const bottomDisplay = document.getElementById("bottom");
const content = document.getElementById("content");
const clear = document.querySelector(".clear");
const square = document.querySelector(".square");
const del = document.querySelector(".del");
const modulus = document.querySelector(".modulus");
const point = document.querySelector(".point");
const buttons = document.querySelectorAll(".button");
const nums = document.querySelectorAll(".nums");
const operators = document.querySelectorAll(".operators");
const equal = document.querySelector(".equal");
clear.addEventListener("click", clearText);
equal.addEventListener("click", evaluate);
square.addEventListener("click", squared);
del.addEventListener("click", dele);
function dele() {
  let text = bottomDisplay.innerText;
  let arr = [...text];
  arr.pop();
  let text2 = arr.toString().replace(/,/g, "");
  bottomDisplay.innerText = text2;
}
nums.forEach((num) => {
  num.addEventListener("click", displayText);
});
operators.forEach((operator) => {
  operator.addEventListener("click", displayText);
});
operators.forEach((operator) => {
  operator.addEventListener("click", (e) => {
    let text = bottomDisplay.innerText;
    let arr = Array.from(text);
    let op = e.currentTarget.innerText;
    let sign = arr.pop();
    let str = arr.toString().replace(/,/g, "");
    let splited = arr.map((itm) => {
        if (itm === "+") {
          let ans = str.split(itm);
          let ad = ans.reduce(function (acc, ar) {
            return Number(acc) + Number(ar);
          });
          topDisplay.innerText = text;
          bottomDisplay.innerText = `${ad}${sign}`;
          text =  `${ad}${sign}`
        }
        if (itm === "-") {
          let ans = str.split(itm);
          let min = ans.reduce(function (acc, ar) {
            return Number(acc) - Number(ar);
          });
          topDisplay.innerText = text;
          bottomDisplay.innerText = `${min}${sign}`;
          text =  `${min}${sign}`
        }
      
      if (itm === "×") {
        let ans = str.split(itm);
        let multiply = ans.reduce(function (acc, ar) {
          return Number(acc) * Number(ar);
        });
        topDisplay.innerText = text;
        bottomDisplay.innerText = `${multiply}${sign}`;
        text =  `${multiply}${sign}`
      }
      if (itm === "/") {
        let ans = str.split(itm);
        let divide = ans.reduce(function (acc, ar) {
          return Number(acc) / Number(ar);
        });
        topDisplay.innerText = text;
        bottomDisplay.innerText = `${divide}${sign}`;
        text =  `${divide}${sign}`
      }
    });
  });
});

function displayText(e) {
  bottomDisplay.innerText += `${e.currentTarget.innerText}`;
  if (bottomDisplay.innerText.length > 23) {
    bottomDisplay.innerText = `too many arguements`;
  }
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
  let splited = arr.map((itm) => {
    if (arr.includes("%")) {
      let modArr = str.split("%");
      topDisplay.innerText = text;
      bottomDisplay.innerText = Number(modArr[0]) % Number(modArr[1]);
    }
    if (itm === "+") {
      let ans = str.split(itm);
      let added = ans.reduce(function (acc, ar) {
        return Number(acc) + Number(ar);
      }, 0);
      topDisplay.innerText = text;
      bottomDisplay.innerText = added;
    }
    if (itm === "-") {
      let ans = str.split(itm);
      let sub = ans.reduce(function (acc, ar) {
        return Number(acc) - Number(ar);
      }, 0);
      topDisplay.innerText = text;
      bottomDisplay.innerText = sub;
    }
    if (itm === "×") {
      let ans = str.split(itm);
      let multiply = ans.reduce(function (acc, ar) {
        return Number(acc) * Number(ar);
      });
      topDisplay.innerText = text;
      bottomDisplay.innerText = multiply;
    }
    if (itm === "/") {
      let ans = str.split(itm);
      let divide = ans.reduce(function (acc, ar) {
        return Number(acc) / Number(ar);
      });
      topDisplay.innerText = text;
      bottomDisplay.innerText = divide;
    }
  });

  return splited;
}
// My keyboard event listener
document.addEventListener("keydown", function (event) {
  if (event.key === "0") {
    bottomDisplay.innerText += Number("0");
  }
  if (event.key === "1") {
    bottomDisplay.innerText += Number("1");
  }
  if (event.key === "2") {
    bottomDisplay.innerText += Number("2");
  }
  if (event.key === "3") {
    bottomDisplay.innerText += Number("3");
  }
  if (event.key === "4") {
    bottomDisplay.innerText += Number("4");
  }
  if (event.key === "5") {
    bottomDisplay.innerText += Number("5");
  }
  if (event.key === "6") {
    bottomDisplay.innerText += Number("6");
  }
  if (event.key === "7") {
    bottomDisplay.innerText += Number("7");
  }
  if (event.key === "8") {
    bottomDisplay.innerText += Number("8");
  }
  if (event.key === "9") {
    bottomDisplay.innerText += Number("9");
  }
  if (event.key === "/") {
    bottomDisplay.innerText += "/";
  }
  if (event.key === "*") {
    bottomDisplay.innerText += "×";
  }
  if (event.key === "+") {
    bottomDisplay.innerText += "+";
  }
  if (event.key === "%") {
    bottomDisplay.innerText += "%";
  }
  if (event.key === "-") {
    bottomDisplay.innerText += "-";
  }
  if (event.key == "Backspace") {
    dele();
  }
  if (event.key == "Enter") {
    evaluate();
  }
  if (event.key == "Delete") {
    clearText();
  }
});
function add(arr) {
  return arr.reduce((acc, ar) => {
    Number(acc) + Number(ar);
  }, 0);
}
function minus(arr) {
  return arr.reduce((acc, ar) => {
    Number(acc) - Number(ar);
  }, 0);
}
function divide(arr) {
  return arr.reduce((acc, ar) => {
    Number(acc) / Number(ar);
  });
}
function multiply(arr) {
  return arr.reduce((acc, ar) => {
    Number(acc) * Number(ar);
  });
}
