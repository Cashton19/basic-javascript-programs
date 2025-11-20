try {
  const PrincipalAmount = Number(prompt("Enter Principal Amount:"));
  const RateOfInterest = Number(prompt("Enter the Rate of Interest:"));
  const CompondingFrequency = Number(
    prompt("Enter compounding frequency per year")
  );
  const NumberofYears = Number(prompt("Enter number of years:"));
  if (
    isNaN(PrincipalAmount) ||
    isNaN(RateOfInterest) ||
    isNaN(CompondingFrequency) ||
    isNaN(NumberofYears) ||
    !Number.isInteger(CompondingFrequency)
  ) {
    throw new Error("Invalid Input!");
  }

  const FinalAmount =
    PrincipalAmount *
    (1 + RateOfInterest / 100 / CompondingFrequency) **
      (CompondingFrequency * NumberofYears);
  const CompoundInterest = FinalAmount - PrincipalAmount;

  console.log(`Final Amount: Rs.${FinalAmount.toFixed(2)}`);
  console.log(`Compound Interest earned: Rs.${CompoundInterest.toFixed(2)}`);
} catch (error) {
  console.log(error.message);
}
