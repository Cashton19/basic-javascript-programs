try {
  const userInput = Number(prompt("Enter a Number:"));
  if (isNaN(userInput) || !Number.isInteger(userInput)) {
    throw new Error("Invalid input! Only input Integers");
  } else if (userInput > 0) {
    console.log("Your Number is Positive");
  } else if (userInput < 0) {
    console.log("Your Number is Negative");
  } else {
    console.log("Your Number is Zero");
  }
} catch (error) {
  console.log(error.message);
}
