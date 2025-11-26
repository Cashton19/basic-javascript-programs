let userInput;
while (true) {
  try {
    userInput = Number(prompt("Enter a Positive Integer:"));
    if (isNaN(userInput) || !Number.isInteger(userInput) || userInput <= 0) {
      throw new Error("Enter a Valid Positive Integer");
    }
    break;
  } catch (error) {
    console.log(error.message);
  }
}
