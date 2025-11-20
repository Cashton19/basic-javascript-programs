try {
  const userYear = Number(prompt("Enter a Year:"));
  if (
    isNaN(userYear) ||
    !Number.isInteger(userYear) ||
    userYear < 1000 ||
    userYear > 9999
  ) {
    throw new Error("Enter a Valid Four Digit Positive Year");
  }
  let isLeapYear;
  if ((userYear % 4 === 0 && userYear % 100 !== 0) || userYear % 400 === 0) {
    isLeapYear = true;
  } else {
    isLeapYear = false;
  }

  if (isLeapYear === true) {
    console.log(`The Year ${userYear} is a Leap Year`);
  } else if (isLeapYear === false) {
    console.log(`The Year ${userYear} is not a Leap Year`);
  }
} catch (error) {
  console.log(error.message);
}
