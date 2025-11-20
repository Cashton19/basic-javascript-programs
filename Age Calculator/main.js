try {
  const UserName = prompt("Enter Your Name:");
  const BirthYear = Number(prompt("Enter Your Birth Year:"));
  if (
    isNaN(BirthYear) ||
    !Number.isInteger(BirthYear) ||
    String(BirthYear).length !== 4
  ) {
    throw new Error("Invalid Input");
  }
  const CurrentYear = new Date().getFullYear();
  const UserAge = CurrentYear - BirthYear;
  console.log(
    `Hi ${UserName}! You are ${UserAge} years old as of ${CurrentYear}`
  );
} catch (error) {
  console.log(error.message);
}
