// Printing Numbers 1 to 5
// Using While Loop
let numbers = 1;
while (numbers < 6) {
  console.log(numbers);
  numbers++;
}

// Printing Numbers 10 to 1
numbers = 10;
while (numbers > 0) {
  console.log(numbers);
  numbers--;
}

for (let i = 10; i >= 1; i--) {
  console.log(i);
}

// Write a program using for loop and range function to do following:
// a) print 0 to 4
// b) print 1 to 5
// c) print even numbers from 2 to 10
// d) print odd numbers from 1 to 20
// e) print numbers from 41 to 50 in descending order

for (let i = 0; i <= 4; i++) {
  console.log(i);
}

for (let i = 1; i < 5; i++) {
  console.log(i);
}

for (let i = 1; i < 10; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}

for (let i = 1; i < 20; i++) {
  if (i % 2 !== 0) {
    console.log(i);
  }
}

for (let i = 50; i >= 41; i--) {
  console.log(i);
}
