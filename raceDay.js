// Race numbers are assigned randomly
let raceNumber = Math.floor(Math.random() * 1000);

// Variable to indicate whether the runner registered early or not
let isRegisteredEarly = true; // Change this to test different conditions

// Variable for the runner’s age
let runnerAge = 25; // Change this to test different conditions

// Check if the runner is an adult and registered early
if (runnerAge > 18 && isRegisteredEarly) {
  raceNumber += 1000;
}

// Control flow statements to determine race time based on age and registration
if (runnerAge > 18 && isRegisteredEarly) {
  console.log(`Runner ${raceNumber}, you will race at 9:30 am.`);
} else if (runnerAge > 18 && !isRegisteredEarly) {
  console.log(`Runner ${raceNumber}, you will race at 11:00 am.`);
} else if (runnerAge < 18) {
  console.log(`Runner ${raceNumber}, you will race at 12:30 pm.`);
} else {
  // For runners exactly 18 years old
  console.log(`Runner ${raceNumber}, please see the registration desk.`);
}
