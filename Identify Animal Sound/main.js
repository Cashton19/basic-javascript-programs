try {
  const userInput = prompt("Enter the Animal Name:").trim().toLowerCase();
  let animalSound;
  if (userInput === "") {
    throw new Error("Error! Input cannot be empty");
  } else if (userInput === "dog") {
    animalSound = "Woof!";
  } else if (userInput === "cat") {
    animalSound = "Meow!";
  } else if (userInput === "cow") {
    animalSound = "Moo!";
  } else if (userInput === "duck") {
    animalSound = "Quack!";
  } else if (userInput === "lion") {
    animalSound = "Roar!";
  } else {
    animalSound = "Unknown Animal";
  }
  console.log(`Animal : ${userInput.toUpperCase()}`);
  console.log(`Sound: ${animalSound}`);
} catch (error) {
  console.log(error.message);
}
