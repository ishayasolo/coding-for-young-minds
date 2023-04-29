// ARRAYS
// An array is a special variable that holds
// more than a single value

let boy1 = 'John';
let boy2 = 'Timothy';
let boy3 = 'Abel';
let boy4 = 'Solomon';
let year = 2023;

console.log(boy3);

let arrayOfBoys = [
	'John', 		// 0
	'Timothy',	// 1
	'Abel',			// 2
	'Solomon'		// 3
];

console.log(arrayOfBoys[0])
console.log(arrayOfBoys[1])
console.log(arrayOfBoys[2])
console.log(arrayOfBoys[3])

console.log(arrayOfBoys);

let evenNumbers = []; 		// empty array

for (let index = 0; index < 10; index++) {
	evenNumbers[index] = index * 2 				// 0, 2, 4, 6.....
}

console.log(evenNumbers)



let scores = [];

// 65, 78, 95, 100, 83

scores[0] = 65;
scores[1] = 78;
scores[2] = 95;
scores[3] = 100;
scores[4] = 83;

console.log(scores);

console.log(scores[3]);

let testEvenNumbers = [];

testEvenNumbers[0] = 0;
testEvenNumbers[1] = 2;
testEvenNumbers[2] = 4;
testEvenNumbers[3] = 6;
// ...

console.log(typeof testEvenNumbers)

console.log(evenNumbers.toString())

let tutorName = "Ishaya"
console.log(tutorName)

// ARRAY METHODS
let daysOfTheWeek = [];

// .push() - Appends new elements to the end of an array, and returns the new length of the array.
daysOfTheWeek.push("Sunday")						// daysOfTheWeek[0] = "Sunday"
daysOfTheWeek.push("Monday")
daysOfTheWeek.push("Tuesday")
daysOfTheWeek.push("Wednesday")
daysOfTheWeek.push("Thursday")
daysOfTheWeek.push("Friday")
daysOfTheWeek.push("Saturday")

console.log(daysOfTheWeek);

// .pop() - Removes the last element from an array and returns it.
// 					If the array is empty, undefined is returned and the array is not modified.
let sat = daysOfTheWeek.pop();
console.log(sat)

console.log(daysOfTheWeek);

// .shift() - Removes the last element from an array and returns it.
// 						If the array is empty, undefined is returned and the array is not modified.
let sun = daysOfTheWeek.shift();
console.log(sun)
console.log(daysOfTheWeek);

console.log(daysOfTheWeek.length)
// .unshift() - Inserts new elements at the start of an array, and returns the new length of the array.
let newArrayLength = daysOfTheWeek.unshift("Sunday");
console.log(daysOfTheWeek);

console.log(newArrayLength);
console.log(daysOfTheWeek.length);


// .concat() - Combines two or more arrays.
// 						 This method returns a new array without modifying any existing arrays.
let leftRooms = ['a1', 'a2', 'a3'];
let rightRooms = ['b1', 'b2', 'b3'];

let allRooms = leftRooms.concat(rightRooms);

console.log(allRooms);

// .slice() - Returns a copy of a section of an array.
let roomSlice = allRooms.slice(2)
console.log(allRooms);
console.log(roomSlice);

let secondRoomSlice = allRooms.slice(1, 5)
console.log(secondRoomSlice);




let namesFruit = ["apple", "orange", "banana"];

console.log(namesFruit);

console.log(namesFruit[0])
console.log(namesFruit[1])
console.log(namesFruit[2])