try {
  const operatorInput = prompt("Enter a Operator(+,-,*,/):").trim();
  if (!["+", "-", "*", "/"].includes(operatorInput)) {
    throw new Error("Please Enter a Valid Input that includes (+,-,*,/) Only!");
  }
  const firstNumber = Number(prompt("Enter the First Number:"));
  if (isNaN(firstNumber)) {
    throw new Error("Invalid Input! Only enter numbers");
  }
  const secondNumber = Number(prompt("Enter the second Number:"));
  if (isNaN(secondNumber)) {
    throw new Error("Invalid Input! Only enter numbers");
  }

  let result;

  if (operatorInput === "+") {
    result = firstNumber + secondNumber;
  } else if (operatorInput === "-") {
    result = firstNumber - secondNumber;
  } else if (operatorInput === "*") {
    result = firstNumber * secondNumber;
  } else {
    if (secondNumber !== 0) {
      result = firstNumber / secondNumber;
    } else {
      throw new Error("Divison can't be done by Zero");
    }
  }
  console.log(`${firstNumber}${operatorInput}${secondNumber} = ${result}`);
} catch (error) {
  console.log(error.message);
}
