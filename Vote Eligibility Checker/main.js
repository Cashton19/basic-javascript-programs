try {
  const userAge = Number(prompt("Enter your Age:"));
  if (
    isNaN(userAge) ||
    !Number.isInteger(userAge) ||
    userAge <= 0 ||
    userAge > 120
  ) {
    throw new Error("Please enter a valid Age.");
  }
  if (userAge >= 18) {
    console.log("Your are eligible to Vote");
  } else {
    console.log("You are not eligible to vote");
  }
} catch (error) {
  console.log(error.message);
}
