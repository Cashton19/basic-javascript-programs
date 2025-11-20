try {
  const CircleRadius = Number(prompt("Enter radius:"));
  if (isNaN(CircleRadius)) {
    throw new Error("Invalid Input!");
  }
  if (CircleRadius <= 0) {
    throw new Error("Radius cannot be zero or negative");
  }

  const CircleArea = Math.PI * CircleRadius ** 2;

  console.log(
    `Radius: ${CircleRadius.toFixed(2)}, Area: ${CircleArea.toFixed(2)}`
  );
} catch (error) {
  console.log(error.message);
}
