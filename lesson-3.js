// COMPARISON
// ==
// ===

let num1 = 20;
let num2 = "20";
console.log(typeof num1);
console.log(typeof num2);


console.log(num1 === num2);
console.log(num1 + 20);
console.log(num2 + 20);

// CONDITIONALS

const age = 16;

let isAnAdult = age >= 18;
let isATeenager = age > 12 && age < 18;

// if
// if...else
// if...else if...else

if (isAnAdult) {
	// code to execute if this condition is true
	console.log("Hey Adult...you are welcome");
}

else if (isATeenager) {
	console.log("Hey teen... come this way!")
}

else {
	// code to execute if no other condition is satisfied
	console.log("you are not even a teenager... go home")
}

const dayOfTheWeek = "Monday";

if (dayOfTheWeek === "Sunday") {
	console.log("Yay!... i love going to church");
}

else if (dayOfTheWeek === "Monday") {
	console.log("Noooooo!... not again!!!");
}

else if (dayOfTheWeek === "Tuesday") {
	console.log("Oh well... let's see how it goes");
}

else if (dayOfTheWeek === "Wednesday") {
	console.log("Okay!... the week's almost over");
}

else if (dayOfTheWeek === "Thursday") {
	console.log("I'll work from home today");
}

else if (dayOfTheWeek === "Friday") {
	console.log("TGIF!!!");
}

else if (dayOfTheWeek === "Saturday") {
	console.log("finally... i get to rest!");
}

else {
	console.log("check to be sure that you typed in a correct day");
}