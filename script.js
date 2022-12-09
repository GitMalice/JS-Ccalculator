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

console.log(operate(3, 6, "divide"));
