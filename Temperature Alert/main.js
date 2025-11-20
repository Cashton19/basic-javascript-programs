try {
  const Temperature = Number(prompt("Enter the current temperature(\u00B0C)"));
  if (isNaN(Temperature)) {
    throw new Error("Enter a Valid Temperature");
  }
  if (Temperature < 30) {
    console.log("The Temperature is Pleasant.");
  } else {
    console.log("It's hot Outside.");
  }
} catch (error) {
  console.log(error.message);
}
