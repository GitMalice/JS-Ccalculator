let display_value = "";
let screen = document.querySelector(".screen");
let numbers = [];
let operationsList = [];
let result;

let key_1 = document.querySelector(".numbers ul li:nth-of-type(1)");
let key_2 = document.querySelector(".numbers ul li:nth-of-type(2)");
let key_3 = document.querySelector(".numbers ul li:nth-of-type(3)");
let key_4 = document.querySelector(".numbers ul li:nth-of-type(4)");
let key_5 = document.querySelector(".numbers ul li:nth-of-type(5)");
let key_6 = document.querySelector(".numbers ul li:nth-of-type(6)");
let key_7 = document.querySelector(".numbers ul li:nth-of-type(7)");
let key_8 = document.querySelector(".numbers ul li:nth-of-type(8)");
let key_9 = document.querySelector(".numbers ul li:nth-of-type(9)");

let plus = document.querySelector(".operators ul li:nth-of-type(1)");
let minus = document.querySelector(".operators ul li:nth-of-type(2)");
let per = document.querySelector(".operators ul li:nth-of-type(3)");
let divided = document.querySelector(".operators ul li:nth-of-type(4)");

let clear = document.querySelector(".clear");
let equals = document.querySelector(".equals");

// function createNumbersVariables() {
//   let key_number = [];
//   for (let i = 0; i < 9; i++) {
//     key_number[i] = i;
//   }
//   return key_number;
// }

function add(operandA, operandB) {
  console.log(operandA + operandB);
  return operandA + operandB;
}

function substract(operandA, operandB) {
  console.log(operandA - operandB);
  return operandA - operandB;
}

function multiply(operandA, operandB) {
  console.log(operandA * operandB);
  return operandA * operandB;
}

function divide(operandA, operandB) {
  console.log(operandA / operandB);
  return operandA / operandB;
}

function operate(operandA, operandB, operation) {
  switch (operation) {
    case "add":
      return operandA + operandB;
      break;
    case "substract":
      return operandA - operandB;
      break;
    case "multiply":
      return operandA * operandB;
      break;
    case "divide":
      return operandA / operandB;
      break;
    default:
      console.log("error with the operation entered");
  }
}

key_1.addEventListener("click", () => {
  display_value += "1";
  screen.innerText = display_value;
});
key_2.addEventListener("click", () => {
  display_value += "2";
  screen.innerText = display_value;
});
key_3.addEventListener("click", () => {
  display_value += "3";
  screen.innerText = display_value;
});
key_4.addEventListener("click", () => {
  display_value += "4";
  screen.innerText = display_value;
});
key_5.addEventListener("click", () => {
  display_value += "5";
  screen.innerText = display_value;
});
key_6.addEventListener("click", () => {
  display_value += "6";
  screen.innerText = display_value;
});
key_7.addEventListener("click", () => {
  display_value += "7";
  screen.innerText = display_value;
});
key_8.addEventListener("click", () => {
  display_value += "8";
  screen.innerText = display_value;
});
key_9.addEventListener("click", () => {
  display_value += "9";
  screen.innerText = display_value;
});

clear.addEventListener("click", () => {
  display_value = "";
  screen.innerText = display_value;
  numbers = [];
  operationsList = [];
});

function store(value) {
  numbers.push(value);
  display_value = "";
  screen.innerText = display_value;
  // console.log(numbers);
}

plus.addEventListener("click", () => {
  if (display_value !== "") {
    store(display_value);
    operationsList.push("add");
  }
});

minus.addEventListener("click", () => {
  if (display_value !== "") {
    store(display_value);
    operationsList.push("substract");
  }
});

per.addEventListener("click", () => {
  if (display_value !== "") {
    store(display_value);
    operationsList.push("multiply");
  }
});

divided.addEventListener("click", () => {
  if (display_value !== "") {
    store(display_value);
    operationsList.push("divide");
  }
});

equals.addEventListener("click", () => {
  store(display_value);
  console.log("result:");
  console.log(numbers);
  console.log(operationsList);

  result = parseInt(numbers[0]);

  for (let a = 0; a < operationsList.length; a++) {
    result = operate(result, parseInt(numbers[a + 1]), operationsList[a]);
    console.log(result);
  }

  numbers = [];
  operationsList = [];

  // tempResult = numbers[0];
  // for (let a = 0; a < operationsList.length; a++) {
  //   tempResult = operate(tempResult, numbers[a + 1], operationsList[a]);
  //   return tempResult;
  // }
  // display_value = tempResult;
  // screen.innerText = display_value;
  // console.log(tempResult);
});

// screen.innerText = display_value;
