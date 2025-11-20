try {
  const userNumber = Number(prompt("Enter Your Number:"));
  if (isNaN(userNumber) || !Number.isInteger(userNumber)) {
    throw new Error("Please Enter only vaild Integers");
  }
  if (userNumber % 2 === 0) {
    console.log(`The Number ${userNumber} is even`);
  } else {
    console.log(`The Number ${userNumber} is odd`);
  }
} catch (error) {
  console.log(error.message);
}
