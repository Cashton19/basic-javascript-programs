try {
  const userAge = Number(prompt("Enter your age:"));
  if (
    isNaN(userAge) ||
    !Number.isInteger(userAge) ||
    userAge < 0 ||
    userAge > 120
  ) {
    throw new Error("Enter a Valid positive age.");
  }
  const userIncome = Number(prompt("Enter your Income:"));
  if (isNaN(userIncome) || !Number.isInteger(userIncome) || userIncome < 0) {
    throw new Error("Enter a Valid Positive Income");
  }
  if (userAge >= 18 && userIncome >= 30000) {
    console.log("Eligible for loan");
  } else {
    throw new Error("Not eligible for loan");
  }
} catch (error) {
  console.log(error.message);
}
