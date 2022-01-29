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
// point.addEventListener("click", () => {
//   bottomDisplay.innerText += ".";
// });


clear.addEventListener("click", clearText);
equal.addEventListener("click", evaluate);
square.addEventListener("click", squared);
del.addEventListener("click", dele);
function dele(){
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
  operator.addEventListener("click", operate);
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
      console.log(multiply);
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
  if (event.key === '/') {
    bottomDisplay.innerText += '/'
  }
  if (event.key === '*') {
    bottomDisplay.innerText += '×'
  }
  if (event.key === '+') {
    bottomDisplay.innerText += '+'
  }
  if (event.key === '%') {
    bottomDisplay.innerText += '%'
  }
  if (event.key === '-') {
    bottomDisplay.innerText += '-'
  }
  if (event.key == 'Backspace') {
    dele()  
  }
  if (event.key == 'Enter') {
    evaluate()
  }
  if (event.key == 'Delete') {
    clearText()
  }
})
// function add(){
//   let text = bottomDisplay.innerText;
//   let spl = /[^a-zA-Z\d\s:]/;
//   let arr = [...text];
//   let str = text.split(spl);
//   let plus = arr.indexOf("+");
//   let minus = arr.indexOf("-");
//   let times = arr.indexOf("×");
//   let divided = arr.indexOf('/');
//   let first = arr.slice(0, divided);
//   let second = arr.slice(0, times);
//   let third = arr.slice(0, plus);
//   let fourth = arr.slice(0, minus);
  

//   console.log(`divide = ${first}`);
//   console.log(`multiply = ${second}`);
//   console.log(`plus = ${third}`);
//   console.log(`minus = ${fourth}`);

// }
// //×
// // let divide = document.querySelector(".divide")
// // divide.addEventListener("click",()=>{

// // });
// // let multiply = document.querySelector(".multiply")
// // multiply.addEventListener("click",()=>{

// // });
// // let minus = document.querySelector(".minus")
// // minus.addEventListener("click",()=>{

// // });
// // let addd = document.querySelector(".add")
// // addd.addEventListener("click",()=>{

// // });
function divide(array) {
  let divide = array.reduce(function (acc, ar) {
    return Number(acc) / Number(ar);
  });
  return divide
}
function operate(e) {
  let sign = e.currentTarget.innerText;
  // console.log(sign);
  let txt =  bottomDisplay.innerText;
  let opArr = ["+","-","/","×"]
  let arr = [...txt];
    let nums = arr.slice(0,arr.length-1);
    for (let i = 0; i < nums.length; i++) {
      if (nums[i] === opArr[i]) {
        let spl = txt.split(opArr[i]);
        console.log(`spl = ${spl}`);
        if(opArr[i] === "/"){
          let arspl = Array.from(spl).slice(0,spl.length-1);
          let ans = divide(arspl);
          console.log(`arspl = ${(ans)}`);
        }
      }
    }
    // console.log(nums);
    // if(sign === "/"){
    //   let quotient = divide(nums)
    //   
    // }

 
  
  
 
}

