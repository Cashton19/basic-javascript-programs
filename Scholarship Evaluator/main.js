try {
  const GPA = Number(prompt("Enter your GPA:"));
  if (isNaN(GPA) || GPA > 4.0 || GPA < 0.1) {
    throw new Error("Enter a Valid GPA");
  }
  const familyIncome = Number(prompt("Enter your family Income:"));
  if (isNaN(familyIncome) || familyIncome < 0) {
    throw new Error("Enter a Valid family Income");
  }
  const communityServiceHours = Number(
    prompt("Enter Community Service Hours:")
  );
  if (
    isNaN(communityServiceHours) ||
    communityServiceHours > 100 ||
    communityServiceHours < 0
  ) {
    throw new Error("Enter a Valid Community Service Time Period");
  }

  //   validation logic
  if (GPA >= 3.5) {
    if (familyIncome <= 49999) {
      if (communityServiceHours >= 40) {
        console.log("You ARE eligible for the scholarship!");
      } else {
        throw new Error(
          "Community Service hours is low. Your are not eligible"
        );
      }
    } else {
      throw new Error("Your family income is high. Your are not eligible");
    }
  } else {
    throw new Error("Your GPA is Low. Your are not eligible");
  }
} catch (error) {
  console.log(error.message);
}
