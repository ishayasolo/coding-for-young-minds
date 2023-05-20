// Challenge 5: Functions

// Write a function `reverseString(str)` that takes a string as input
// and returns the reversed version of that string.
// For example, if the input is "hello", the function should return "olleh".

// regular function
function reverseString(str) {
	const arrayOfCharacters = str.split('');
	const reversedArrayOfCharacters = arrayOfCharacters.reverse();
	const reversedString = reversedArrayOfCharacters.join('');

	return reversedString;
}

// arrow function
const reverseString2 = str => str.split('').reverse().join('');

console.log(reverseString('Ishaya'))
console.log(reverseString2('Ishaya'))
