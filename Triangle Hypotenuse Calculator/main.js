try {
  const SideA = Number(prompt("Enter Side A:"));
  const SideB = Number(prompt("Enter Side B:"));
  if (isNaN(SideA) || isNaN(SideB) || SideA <= 0 || SideB <= 0) {
    throw new Error("Enter only Valid positive numbers.");
  }
  const TriangleHypotenuse = Math.sqrt(SideA ** 2 + SideB ** 2);
  console.log(
    `Hypotenuse of the triangle is: ${TriangleHypotenuse.toFixed(2)}`
  );
} catch (error) {
  console.log(error.message);
}
