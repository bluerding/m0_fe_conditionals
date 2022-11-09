// In the exercises below, write your own code where indicated
// to achieve the desired result.

// One example is already completed. Your task is to complete
// any remaining prompt.

// Make sure to run the file in your command line using `node <filename>.js`


// -------------------
// PART 1: Comparing variables
// -------------------

var numberTeachers = 4
var numberStudents = 20
var stringTeachers = "4"
var numberDogs = 0

// EXAMPLE: log the result of the comparison: is numberTeachers greater than numberStudents?
console.log("Is numberTeachers greater than numberStudents?", numberTeachers > numberStudents);
// this should log: "Is numberTeachers greater than numberStudents?" false

// YOU DO: log the result of the comparison: is numberTeachers less than numberStudents?
// this should log: true
console.log("Is numberTeachers less then numberStudents?", numberTeachers < numberStudents)

// YOU DO: log the result of the comparison: is numberTeachers strictly equal to stringTeachers?
// this should log: false
console.log("Is numberTeachers strictly equal to stringTeachers?", numberTeachers === stringTeachers)

// YOU DO: log the result of the comparison: is numberTeachers not equal to numberStudents?
// this should log: true
console.log("IS the numberTeachers not equal to numberStudents?", numberTeachers !== numberStudents)

// YOU DO: log the result of the comparison: is numberStudents greater than or equal to 20?
// this should log: true
console.log("Is the number students greater than or equal to 20?", numberStudents >= 20)

// YOU DO: log the result of the comparison: is numberStudents greater than or equal to 21?
// this should log: false
console.log("Is the numberStudents greater than or equal to 21?", numberStudents >= 21)

// YOU DO: log the result of the comparison: is numberStudents less than or equal to 20?
// this should log: true
console.log("Is the numberStudents less than or equal to 20", numberStudents <= 20)

// YOU DO: log the result of the comparison: is numberStudents less than or equal to 21?
// this should log: true
console.log("Is the numberStudents less than or equal to 21?", numberStudents <= 21)

// #-------------------
// PART 2: Articulating what you are doing
// #-------------------

// For the following prompts, you will be given a line of code and your task is to type out a Comment,
// in English, explaining what that line of code is doing, including what the comparison will evaluate to.
// Be as technically precise as possible, but don't just copy and paste a definition from the readings.
// Make sure YOU can explain it that way!

console.log(4 < 9);
// YOU DO: Explain. The code is asking if the number 4 is less than the number 9. This is true

var books = 3;
console.log(4 < books);
// YOU DO: Explain. The code is asking if the variable set to books is greater than 4. The variable is 3, so it is false

var friends = 6;
var siblings = 2;
console.log(friends > siblings);
// YOU DO: Explain. The code is asking if the variable set to friends is greater than the variable that is set to siblings. Friends is 6, siblings is 2, so this is true

var attendees = 9;
var meals = 8;
console.log(attendees !== meals);
// YOU DO: Explain. The code is asking if the number set to var attendees is different than the number set to var meals. They are different, so this is true


// #-------------------
// PART 3: Logical Operators
// #-------------------

var isHungry = true;
var finishedHomework = false;

// EXAMPLE:
// Determine if the user is hungry and has completed their homework
console.log(isHungry && finishedHomework);
// Determine if the user is hungry or has completed their homework
console.log(isHungry || finishedHomework);

var lovesToPlay = true;
var lovesDogPark = false;
var lovesTreats = true;
var age = 1;

// YOU DO:
// Determine if the dog loves to play and loves treats
console.log("The dog loves to play and loves treats", lovesToPlay && lovesTreats)

// Determine if the dog loves to play and loves the dog park
console.log("The dog loves to play and loves the dog park", lovesToPlay && lovesDogPark)

// Determine if the dog loves to play or loves the dog park
console.log("The dog loves to play or loves the dog park", lovesToPlay || lovesDogPark)

// Determine if the dog loves to play and is a puppy
console.log("The dog loves to play and is a puppy", lovesToPlay && age)
// What did your final line of code evaluate to? Why do you think that is? Explain.
// ANSWER:The final line gave me the age, 1. I believe this is because that is a number value and not a boolean. If the variable was var puppy = true, then it would be true.