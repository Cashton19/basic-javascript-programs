try {
  const userWeight = Number(prompt("Enter your Weight(in kgs):"));
  if (isNaN(userWeight) || userWeight <= 0) {
    throw new Error("Invalid Input! Enter Valid Positive Weight in Kgs");
  }
  const userheight = Number(prompt("Enter your Height(in meters):"));
  if (isNaN(userheight) || userheight <= 0) {
    throw new Error("Invalid Input! Enter Valid Positive Height in meters");
  }
  const BMI = userWeight / userheight ** 2;
  if (BMI < 18.5) {
    console.log("You are Underweight!");
  } else if (BMI >= 18.5 && BMI <= 24.9) {
    console.log("You are Normal weight!");
  } else if (BMI >= 25 && BMI <= 29.9) {
    console.log("You are Overweight!");
  } else {
    console.log("You are Obese!");
  }
} catch (error) {
  console.log(error.message);
}
