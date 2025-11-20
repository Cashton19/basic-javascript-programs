try {
  const userName = "admin";
  const passWord = "password123";
  const nameInput = prompt("Enter your user name.").trim().toLowerCase();
  const passInput = prompt("Enter your password.").trim().toLowerCase();
  if (nameInput === userName) {
    if (passWord === passInput) {
      console.log("Login Successful!");
    } else {
      throw new Error("Incorrect Password");
    }
  } else {
    throw new Error("User not found");
  }
} catch (error) {
  console.log(error.message);
}
