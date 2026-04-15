// Conditional Statements

let age = 18;

// if
if (age >= 18) {
  console.log("Eligible to vote");
}

// if-else
if (age >= 18) {
  console.log("Adult");
} else {
  console.log("Minor");
}

// else-if ladder
let marks = 85;

if (marks >= 90) {
  console.log("Grade A");
} else if (marks >= 75) {
  console.log("Grade B");
} else {
  console.log("Grade C");
}

// switch
let day = 2;

switch (day) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  default:
    console.log("Other day");
}