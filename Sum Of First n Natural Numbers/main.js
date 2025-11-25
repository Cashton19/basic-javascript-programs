// Sum Of First n Natural Numbers
// using for loop
try {
  let userInput = Number(prompt("Enter n:"));
  if (isNaN(userInput) || !Number.isInteger(userInput) || userInput < 1) {
    throw new Error("Enter a Natural Number");
  }
  let sum = 0;
  for (let i = 1; i <= userInput; i++) {
    sum += i;
  }
  console.log(sum);
} catch (error) {
  console.log(error.message);
}

// using while loop
try {
  let userInput = Number(prompt("Enter n:"));
  if (isNaN(userInput) || !Number.isInteger(userInput) || userInput < 1) {
    throw new Error("Enter a Natural Number");
  }
  let sum = 0;
  let i = 1;

  while (i <= userInput) {
    sum += i;
    i++;
  }
  console.log(sum);
} catch (error) {
  console.log(error.message);
}
