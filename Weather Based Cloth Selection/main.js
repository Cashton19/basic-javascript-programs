try {
  const weatherCondition = prompt(
    "Enter weather conditions(sunny, rainy, snowy, cloudy, windy):"
  )
    .trim()
    .toLowerCase();
  if (weatherCondition === "") {
    throw new Error("Enter something!");
  }
  let suggestion;
  if (
    !["sunny", "rainy", "snowy", "cloudy", "windy"].includes(weatherCondition)
  ) {
    suggestion = "Unknown weather conditions.";
  } else if (weatherCondition === "sunny") {
    suggestion = "Wear light clothing and sunglasses!";
  } else if (weatherCondition === "rainy") {
    suggestion = "Take an umbrella and wear a raincoat!";
  } else if (weatherCondition === "snowy") {
    suggestion = "Wear warm clothes and boots!";
  } else if (weatherCondition === "cloudy") {
    suggestion = "A light jacket might be useful!";
  } else {
    suggestion = "Wear a windbreaker or jacket!";
  }
  console.log(`Weather: ${weatherCondition.toUpperCase()}`);
  console.log(`Suggestion: ${suggestion}`);
} catch (error) {
  console.log(error.message);
}
