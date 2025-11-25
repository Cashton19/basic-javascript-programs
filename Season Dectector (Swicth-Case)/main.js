try {
  const monthNumber = Number(prompt("Enter month number (1-12):"));
  if (
    isNaN(monthNumber) ||
    !Number.isInteger(monthNumber) ||
    monthNumber > 12 ||
    monthNumber < 1
  ) {
    throw new Error("Enter a Valid Positive Number Between 1 and 12.");
  }
  let season;
  switch (monthNumber) {
    case 12:
    case 1:
    case 2:
      season = "Winter";
      break;
    case 5:
    case 4:
    case 3:
      season = "Spring";
      break;
    case 6:
    case 7:
    case 8:
      season = "Summer";
      break;
    default:
      season = "Fall";
  }
  console.log(`The ${monthNumber} corresponds to: ${season}`);
} catch (error) {
  console.log(error.message);
}
