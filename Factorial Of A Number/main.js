const { use } = require("react");

//  Using for loop 
let userInput;
while (true) {
  try {
    userInput = Number(prompt("Enter an Integer:"));
    if (isNaN(userInput) || !Number.isInteger(userInput)) {
      throw new Error("Enter A Valid Integer.");
    }
    let factorial = 1;
    for (let i = userInput; i > 0; i--) {
      factorial *= i;
    }
    console.log(`Factorial = ${factorial}`);
    break;
  } catch (error) {
    console.log(error.message);
  }
}
// Using while loop
while (true) {
  try {
    userInput = Number(prompt("Enter an Integer:"));
    if (isNaN(userInput) || !Number.isInteger(userInput)) {
      throw new Error("Enter A Valid Integer.");
    }
    let factorial = 1;
    while(userInput > 0){
      factorial *= userInput;
      userInput--;
    }
    console.log(`Factorial = ${factorial}`);
    break;
  } catch (error) {
    console.log(error.message);