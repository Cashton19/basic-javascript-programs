try {
  const cylinderRadius = Number(prompt("Enter the Radius of the Cylinder:"));
  const cylinderHeight = Number(prompt("Enter the HEight of the Cylinder:"));
  if (
    isNaN(cylinderRadius) ||
    isNaN(cylinderHeight) ||
    cylinderRadius <= 0 ||
    cylinderHeight <= 0
  ) {
    throw new Error("Please enter only valid positive numbers.");
  }
  const cylinderVolume = Math.PI * cylinderRadius ** 2 * cylinderHeight;
  console.log(`Volume of the cylinder is: ${cylinderVolume.toFixed(2)}`);
} catch (error) {
  console.log(error.message);
}
