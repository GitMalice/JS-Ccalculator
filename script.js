let display_value = "";
let screen = document.querySelector(".screen");
let numbers = [];
let operationsList = [];
let result;
let tempResult;

let key_1 = document.querySelector(".numbers ul li:nth-of-type(1)");
let key_2 = document.querySelector(".numbers ul li:nth-of-type(2)");
let key_3 = document.querySelector(".numbers ul li:nth-of-type(3)");
let key_4 = document.querySelector(".numbers ul li:nth-of-type(4)");
let key_5 = document.querySelector(".numbers ul li:nth-of-type(5)");
let key_6 = document.querySelector(".numbers ul li:nth-of-type(6)");
let key_7 = document.querySelector(".numbers ul li:nth-of-type(7)");
let key_8 = document.querySelector(".numbers ul li:nth-of-type(8)");
let key_9 = document.querySelector(".numbers ul li:nth-of-type(9)");
let key_0 = document.querySelector(".numbers ul li:nth-of-type(10)");

let plus = document.querySelector(".operators ul li:nth-of-type(1)");
let minus = document.querySelector(".operators ul li:nth-of-type(2)");
let per = document.querySelector(".operators ul li:nth-of-type(3)");
let divided = document.querySelector(".operators ul li:nth-of-type(4)");
let point = document.querySelector(".operators ul li:nth-of-type(5)");
let backspace = document.querySelector(".operators ul li:nth-of-type(6)");

let clear = document.querySelector(".clear");
let equals = document.querySelector(".equals");

let numbersSelect = document.querySelector(".numbers");

let resultDisplayed;

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

function store(value) {
  numbers.push(value);
  calculate();
}

function check() {
  if (resultDisplayed) {
    resultDisplayed = false;
    display_value = "";
    screen.innerText = display_value;
  }
}

function calculate() {
  result = parseFloat(numbers[0]);
  if (numbers[numbers.length - 1] == "") {
    for (let a = 0; a < operationsList.length - 1; a++) {
      result = operate(result, parseFloat(numbers[a + 1]), operationsList[a]);
    }
  } else {
    for (let a = 0; a < operationsList.length; a++) {
      result = operate(result, parseFloat(numbers[a + 1]), operationsList[a]);
    }
  }

  console.log(result.toString().length);
  if (result.toString().length > 12) {
    result = result.toPrecision(12);
  }

  resultDisplayed = true;
  display_value = result;
  screen.innerText = display_value;
}

function event1() {
  check();
  display_value += "1";
  screen.innerText = display_value;
}

function event2() {
  check();
  display_value += "2";
  screen.innerText = display_value;
}

function event3() {
  check();
  display_value += "3";
  screen.innerText = display_value;
}

function event4() {
  check();
  display_value += "4";
  screen.innerText = display_value;
}

function event5() {
  check();
  display_value += "5";
  screen.innerText = display_value;
}

function event6() {
  check();
  display_value += "6";
  screen.innerText = display_value;
}

function event7() {
  check();
  display_value += "7";
  screen.innerText = display_value;
}

function event8() {
  check();
  display_value += "8";
  screen.innerText = display_value;
}

function event9() {
  check();
  display_value += "9";
  screen.innerText = display_value;
}

function event0() {
  check();
  display_value += "0";
  screen.innerText = display_value;
}

function eventClear() {
  display_value = "";
  screen.innerText = display_value;
  numbers = [];
  operationsList = [];
}

function eventAdd() {
  if (display_value !== "") {
    store(display_value);
    operationsList.push("add");
  }
}

function eventSubstract() {
  if (display_value !== "") {
    store(display_value);
    operationsList.push("substract");
  }
}

function eventMultiply() {
  if (display_value !== "") {
    store(display_value);
    operationsList.push("multiply");
  }
}

function eventDivide() {
  if (display_value !== "") {
    store(display_value);
    operationsList.push("divide");
  }
}

function eventPoint() {
  if (display_value != "" && !resultDisplayed) {
    if (!display_value.includes(".")) {
      display_value += ".";
      screen.innerText = display_value;
    }
  }
}

function eventBackspace() {
  display_value = display_value.toString().slice(0, -1);
  console.log(display_value);
  screen.innerText = display_value;
}

function eventEquals() {
  store(display_value);
  calculate();

  numbers = [];
  operationsList = [];
  resultDisplayed = true;
}

key_1.addEventListener("click", event1);
key_2.addEventListener("click", event2);
key_3.addEventListener("click", event3);
key_4.addEventListener("click", event4);
key_5.addEventListener("click", event5);
key_6.addEventListener("click", event6);
key_7.addEventListener("click", event7);
key_8.addEventListener("click", event8);
key_9.addEventListener("click", event9);
key_0.addEventListener("click", event0);

clear.addEventListener("click", eventClear);
plus.addEventListener("click", eventAdd);
minus.addEventListener("click", eventSubstract);
per.addEventListener("click", eventMultiply);
divided.addEventListener("click", eventDivide);
point.addEventListener("click", eventPoint);
backspace.addEventListener("click", eventBackspace);
equals.addEventListener("click", eventEquals);

document.body.addEventListener("keypress", updateKey);

function updateKey(e) {
  //console.log(e);
  if (e.key == "Enter") {
    eventEquals();
  }
  if (e.key == "+") {
    eventAdd();
  }
  if (e.key == "-") {
    eventSubstract();
  }
  if (e.key == "*") {
    eventMultiply();
  }
  if (e.key == "/") {
    eventDivide();
  }
  if (e.key == "d") {
    eventBackspace();
  }
  if (e.key == "a") {
    eventClear();
  }
  if (e.key == ".") {
    eventPoint();
  }
  if (e.key == "0") {
    event0();
  }
  if (e.key == "1") {
    event1();
  }
  if (e.key == "2") {
    event2();
  }
  if (e.key == "3") {
    event3();
  }
  if (e.key == "4") {
    event4();
  }
  if (e.key == "5") {
    event5();
  }
  if (e.key == "6") {
    event6();
  }
  if (e.key == "7") {
    event7();
  }
  if (e.key == "8") {
    event8();
  }
  if (e.key == "9") {
    event9();
  }
}
