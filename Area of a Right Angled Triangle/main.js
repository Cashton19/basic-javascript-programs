try {
  const TriangleHeight = Number(prompt("Enter the height of triangle:"));
  const TriangleBase = Number(prompt("Enter the Base of the triangle:"));
  if (isNaN(TriangleHeight) || isNaN(TriangleBase)) {
    throw new Error("Invalid Input");
  }
  if (TriangleBase <= 0 || TriangleHeight <= 0) {
    throw new Error("Height or Base can't be zero or negative.");
  }

  const TriangleArea = 0.5 * TriangleBase * TriangleHeight;
  console.log(`Area of the triangle is: ${TriangleArea.toFixed(2)}`);
} catch (error) {
  console.log(error.message);
}
