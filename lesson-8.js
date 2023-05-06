// ASSIGNMENT REVIEW
// ARRAYS & ARRAY METHODS
// (1.) Imagine you have an array of ice cream flavors
// 			like "chocolate", "vanilla", and "strawberry" in JavaScript.
// 			If you use the .pop() method on this array, which flavor will be removed?
// 			What will the updated array look like?

const iceCreamFlavors = ["chocolate", "vanilla", "strawberry"];
console.log(iceCreamFlavors);
iceCreamFlavors.pop();
console.log(iceCreamFlavors);

// (2.) Suppose you have an array of video game characters
// 			such as "Mario", "Luigi", and "Princess Peach" in JavaScript.
// 			If you want to add a new character "Yoshi" to the end of the array using the .push() method,
// 			how would you do it? Can you also display the updated array on the screen?
const characters = ["Mario", "Luigi", "Princess Peach"];
characters.push("Yoshi");
console.log(characters);

// (3.) Let's say you have an array of your favorite songs in JavaScript
// 			and you want to remove the first song from the array using the .shift() method.
// 			After removing the song, how would you display the updated array of songs
// 			and the removed song's title on a webpage using JavaScript?
const favoriteSongs = ['song_A', 'song_B', 'song_C'];
const removedSong = favoriteSongs.shift();
console.log(favoriteSongs);			// updated song list
console.log(removedSong);				// removed song

// (4.) Imagine you have an array of ingredients for a pizza recipe
// 			like "dough", "sauce", and "cheese" in JavaScript.
// 			If you want to add a new ingredient "pepperoni" to the beginning of the array
// 			using the .unshift() method, how would you do it?
// 			Can you also alert a message with the updated array to show on the screen?
const ingredients = ["dough", "sauce", "cheese"];
ingredients.unshift("pepperoni");
console.log(ingredients);
// alert(`your ingredients are ${ingredients}`);

// (5.) Suppose you have an array of animals in a zoo
// 			like "elephant", "tiger", and "monkey" in JavaScript.
// 			If you want to extract a portion of the array
// 			that includes only the first two animals using the .slice() method,
// 			how would you do it?
// 			Can you also display the extracted portion of the array
// 			and the original array on a webpage using JavaScript?
const animals = ["elephant", "tiger", "monkey", "ostrich", "snake", "alligator"];
const newAnimals = animals.slice(2);
console.log(newAnimals);
console.log(animals);

// (6.) Let's say you have two arrays of fruits,
// 			one with "apple", "banana", and "orange",
// 			and another with "grape", "kiwi", and "mango" in JavaScript.
// 			If you want to concatenate these two arrays together
// 			using the .concat() method to create a new array with all the fruits,
// 			how would you do it? 
// 			Can you also display the concatenated array on the screen?
const firstFruits = ["apple", "banana", "orange"];
const secondFruits = ["grape", "kiwi", "mango"];
const allFruits = firstFruits.concat(secondFruits);
console.log(allFruits);

// (7.) Imagine you have an array of words in JavaScript,
// 			and you want to remove the last word from the array and use it to create a new sentence.
// 			If you use the .pop() method to remove the word from the array,
// 			how would you create the new sentence with the removed word,
// 			and display both the updated array and the new sentence using JavaScript?
const myWords = ["school", "gate", "code", "JavaScript"];
const wordToUse = myWords.pop();
const mySentence = `I love ${wordToUse}`;
console.log(mySentence);
console.log(myWords)

// OBJECTS
// (14.) Create an object called person with the properties name, age, and city.
const person = {
	name: "Ishaya",
	age: "100",
	city: "Lagos"
}
console.log(person);

// (15.) Add a method to the person object called greeting
// 			that prints a message to the console, such as
// 			"Hello, my name is [name] and I am [age] years old. I live in [city]."
console.log(`Hello, my name is ${person.name} and I am ${person.age} years old. I live in ${person.city}.`)

// (16.) Create a function called changeCity that takes a person object and a new city as parameters
// 			and updates the person's city property to the new value.
function changeCity(object, newCity) {
	// object.city = newCity
	object["city"] = newCity
}
changeCity(person, "Atlanta");
console.log(person);
changeCity(person, "Sokoto");
console.log(person);

// (17.) Create an array of objects representing different books,
// 			with each object containing properties for title, author, and year.
const books = [
	{
		title: "Things Fall Apart",
		author: "Chinua Achebe",
		year: "2022"
	},
	{
		title: "The mosquito and the human",
		author: "Ishaya Solomon",
		year: "2054"
	},
	{
		title: "Computing for Professionals",
		author: "Daniel Aasa",
		year: "2012"
	},
]

// (18.) Write a function called findBook that takes the book array and a title as parameters
// 			and returns the book object with that title, or null if the book is not found.
function findBook(books, title) {
	function finder(book) {
		return book.title === title
	}
	const foundBook = books.find(finder)
	if (foundBook === undefined) {
		return null
	} else {
		return foundBook
	}
}

const myBook = findBook(books, "The mosquito and the human")
console.log(myBook);

