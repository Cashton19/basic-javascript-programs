try {
  const signal = prompt("Enter a traffic colour(red,yellow,green):")
    .trim()
    .toLowerCase();
  if (signal === "red") {
    console.log("Stop!");
  } else if (signal === "yellow") {
    console.log("Caution!");
  } else if (signal === "green") {
    console.log("Go!");
  } else {
    throw new Error("Enter a valid traffic colour.");
  }
} catch (error) {
  console.log(error.message);
}
