try {
  const userInput = Number(prompt("Enter your Age"));
  if (
    isNaN(userInput) ||
    !Number.isInteger(userInput) ||
    userInput < 0 ||
    userInput > 120
  ) {
    throw new Error("Enter a Valid Positive Age");
  }
  let category;
  if (userInput >= 0 && userInput <= 12) {
    category = "Child";
  } else if (userInput >= 13 && userInput <= 19) {
    category = "Teenager";
  } else if (userInput >= 20 && userInput <= 59) {
    category = "Adult";
  } else {
    category = "Senior";
  }
  console.log(`Age: ${userInput}`);
  console.log(`Category: ${category}`);
} catch (error) {
  console.log(error.message);
}
