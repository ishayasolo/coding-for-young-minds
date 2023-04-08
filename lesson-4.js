const myName = "Ishaya";
const course = "Javascript";

console.log("my name is " + myName + " and I am learning " + course);

// template strings
// backtick strings
console.log(`my name is ${myName} and I am learning ${course}`);

// FUNCTIONS
// A Javascript function is a reusable block of code that performs a particular task

// declare the function
function message(personName) {
	console.log(`Hello ${personName} you're welcome to class today, I hope you enjoy today's lesson`);
	console.log(`we will be treating Javascript functions... so buckle up ${personName}!`);
}

message("Ishaya")
console.log("");
message("Kendra")
console.log("");
message("Samuel")
console.log("");
message("Jane")
console.log("");
message("Adesuwa")






let firstNumber = 20;
let secondNumber = 10;

function sum(a, b) {
	return a + b;
}

console.log(sum(firstNumber, secondNumber));

function diff(x, y) {
	return x - y;
}

console.log(diff(firstNumber, secondNumber));

function division(q, r) {
	return q / r;
}

console.log(division(firstNumber, secondNumber));

function multiple(num1, num2) {
	return num1 * num2
}

console.log(multiple(firstNumber, secondNumber))

function calculator(num1, num2) {
	console.log(`the sum of ${num1} and ${num2} is ${sum(num1, num2)}`);
	console.log(`the difference between ${num1} and ${num2} is ${diff(num1, num2)}`);
	console.log(`the quotient of ${num1} and ${num2} is ${division(num1, num2)}`);
	console.log(`the multiple of ${num1} and ${num2} is ${multiple(num1, num2)}`);
}

calculator(firstNumber, secondNumber);