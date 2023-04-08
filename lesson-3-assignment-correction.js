// Question 11
// Write a program that checks whether a given string is a valid URL.
// If it is, output "Valid URL", otherwise output "Invalid URL".

const url = "https://docs.google.com";

if (url.startsWith("https://") && url.endsWith(".com")) {
	console.log("Valid URL");
} else {
	console.log("Invalid URL");
}


// Question 13
// Write a program that checks whether a given string is all lowercase.
// If it is, output "All lowercase", otherwise output "Not all lowercase".

const givenString = "Ishaya Solomon";

if (givenString === givenString.toLowerCase()) {
	console.log("All lowercase");
}
else {
	console.log("Not all lowercase");
}

// Question 14
// Write a program that checks whether a given number is less than, equal to, or greater than 10.
// If it is less than 10, output "Less than 10",
// if it is equal to 10, output "Equal to 10",
// and if it is greater than 10, output "Greater than 10".

const number = 8;

if (number < 10) {
	console.log("Less than 10");
}
else if (number === 10) {
	console.log("Equal to 1");
}
else {
	console.log("Greater than 10");
}

// Question 5
// Write a program that checks whether a given number is positive or negative.
// If it is positive, output "Positive", otherwise output "Negative".

const anotherNumber = -0;

if (anotherNumber > 0) {
	console.log("Positive");
}
else if (anotherNumber === 0) {
	console.log("Zero")
}
else {
	console.log("Negative");
}

// Question 7
// Write a program that checks whether a given number is a multiple of 3.
// If it is, output "Multiple of 3", otherwise output "Not a multiple of 3".

const testNumber = 17;

if (testNumber % 3 === 0) {
	console.log("Multiple of 3");
}
else {
	console.log("Not a multiple of 3");
}

// Question 20
// Write a program that checks whether a given number is divisible by 5 and 7.
// If it is, output "Divisible by 5 and 7", otherwise output "Not divisible by 5 and 7

const examNumber = 70;

if (examNumber % 5 === 0 && examNumber % 7 === 0) {
	console.log("Divisible by 5 and 7");
}
else {
	console.log("Not divisible by 5 and 7");
}

// Question 18
// Write a program that checks whether a given number is between 1 and 10.
// If it is, output "Between 1 and 10", otherwise output "Not between 1 and 10".

const janesNumber = 22;

if (janesNumber >= 1 && janesNumber <= 10) {
	console.log("Between 1 and 10")
}
else {
	console.log("Not between 1 and 10");
}

// Question 12
// Write a program that checks whether a given number is a multiple of both 2 and 3.
// If it is, output "Multiple of 2 and 3", otherwise output "Not a multiple of 2 and 3".

const ezekielsNumber = 6;
if (ezekielsNumber % 2 === 0 && ezekielsNumber % 3 === 0) {
	console.log("Multiple of 2 and 3");
}
else {
	console.log("Not a multiple of 2 and 3");
}
