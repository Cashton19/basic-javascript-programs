try {
  const dayName = prompt("Enter a name of a day(eg. 'saturday,sunday'):")
    .trim()
    .toLowerCase();
  if (
    ![
      "sunday",
      "monday",
      "tuesday",
      "wednesday",
      "thursday",
      "friday",
      "saturday",
    ].includes(dayName)
  ) {
    throw new Error("Invalid Name!");
  }
  if (dayName === "saturday" || dayName === "sunday") {
    console.log("The entered day is a weekend!");
  } else {
    console.log("The entered day is a weekday.");
  }
} catch (error) {
  console.log(error.message);
}
