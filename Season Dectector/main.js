try {
  const monthNumber = Number(prompt("Enter the Month Number(1-12)"));
  if (
    isNaN(monthNumber) ||
    !Number.isInteger(monthNumber) ||
    monthNumber <= 0 ||
    monthNumber > 12
  ) {
    throw new Error(
      "Invalid Input! Enter a Valid Positive Month Number in the Range of (1-12)"
    );
  }
  if ([12, 1, 2].includes(monthNumber)) {
    console.log("The Season is Winter");
  } else if ([3, 4, 5].includes(monthNumber)) {
    console.log("The Season is Spring");
  } else if ([6, 7, 8].includes(monthNumber)) {
    console.log("The Season is Summer");
  } else {
    console.log("The Season is Fall");
  }
} catch (error) {
  console.log(error.message);
}
