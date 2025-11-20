try {
  const numberOfItems = Number(prompt("Enter the total number of items:"));
  if (
    isNaN(numberOfItems) ||
    !Number.isInteger(numberOfItems) ||
    numberOfItems <= 0
  ) {
    throw new Error("Please enter valid positive Integers.");
  }
  const completeDozens = Math.floor(numberOfItems / 12);
  const remainingItems = numberOfItems % 12;
  console.log(`Complete dozens: ${completeDozens.toLocaleString()}`);
  console.log(`Remaining items:${remainingItems}`);
} catch (error) {
  console.log(error.message);
}
