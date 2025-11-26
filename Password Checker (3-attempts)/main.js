let password = "qwerty";
let userInput;
let attempts = 3;
while (attempts > 0) {
  try {
    userInput = prompt("Enter the Password:").trim();
    if (userInput === "qwerty") {
      console.log("Access Granted.");
      break;
    } else {
        attempts--;
      throw new Error(
        `Wrong Password \nYou have ${attempts} attempts remaining`
      );
    }
  } catch (error) {
    console.log(error.message);
  }
}
if(attempts === 0){
    console.log("Access Denied")
}
