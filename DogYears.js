// Initialize a variable to store your age in human years
let myAge = 24;

// Initialize a variable for the early years of a dog's life
let earlyYears = 2;

// The first two years of a dog's life count as 10.5 dog years each
earlyYears *= 10.5;

// Initialize a variable for the later years (after the first two years)
let laterYears = myAge - 2;

// Each subsequent year counts as 4 dog years
laterYears *= 4;

// Print the early years and later years in dog years
console.log(earlyYears + " " + laterYears);

// Calculate your age in dog years by adding the early and later years
let myAgeInDogYears = earlyYears + laterYears;

// Convert your name to lowercase
let myName = "Eve".toLowerCase();

// Print a message with your name, age in human years, and age in dog years
console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`);
