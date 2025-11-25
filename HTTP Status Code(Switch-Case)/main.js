try {
  const userInput = Number(prompt("Status Code:"));
  if (
    isNaN(userInput) ||
    !Number.isInteger(userInput) ||
    userInput < 200 ||
    userInput > 599
  ) {
    throw new Error("Please Enter A Valid Positive Code Between 200 and 599.");
  }
  let response;
  switch (true) {
    case userInput === 200:
      response = "OK - Request successful";
      break;
    case userInput === 404:
      response = "Not Found - Resource doesn't exist";
      break;
    case userInput === 500:
      response = "Internal Server Error";
      break;
    case userInput >= 400 && userInput <= 499:
      response = `Client Error: ${userInput}`;
      break;
    case userInput >= 500 && userInput <= 599:
      response = `Server Error: ${userInput}`;
      break;
    default:
      response = ` Unknown status code: ${userInput}`;
  }
  console.log(`Response: ${response}`);
} catch (error) {
  console.log(error.message);
}
