try {
  const scores = Number(prompt("Enter your Marks:"));
  if (
    isNaN(scores) ||
    !Number.isInteger(scores) ||
    0 > scores ||
    scores > 100
  ) {
    throw new Error(
      "Please enter valid positive numbers within the range of 0-100."
    );
  }
  if (90 <= scores && scores <= 100) {
    console.log(`Your grade for the mark ${scores} is 'A'`);
  } else if (80 <= scores && scores <= 89) {
    console.log(`Your grade for the mark ${scores} is 'B'`);
  } else if (70 <= scores && scores <= 79) {
    console.log(`Your grade for the mark ${scores} is 'C'`);
  } else if (60 <= scores && scores <= 69) {
    console.log(`Your grade for the mark ${scores} is 'D'`);
  } else {
    console.log(`Your grade for the mark ${scores} is 'F'`);
  }
} catch (error) {
  console.log(error.message);
}
