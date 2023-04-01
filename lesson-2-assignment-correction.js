// ASSIGNMENT REVIEW
// 1. Create a variable called myString and assign it a string value. Then, use
// 		console.log() to print the value of myString.
const myString = "Ishaya";
console.log(myString);


// 2. Create a variable called myNumber and assign it a number value. Then, use
// 		console.log() to print the value of myNumber.
const myNumber = 13;
console.log(myNumber);


// 5. Create two variables called myFirstString and mySecondString and assign
// 		them string values. Then, use the concatenation operator (+) to join them
// 		together and store the result in a new variable called myCombinedString.
// 		Finally, use console.log() to print the value of myCombinedString.
const myFirstString = "Ishaya";
const mySecondString = "Solomon";
const myCombinedString = myFirstString + " " + mySecondString;
console.log(myCombinedString)


// 6. Create a variable called myAge and assign it your age. Then, use a comparison
// 		operator to check if your age is greater than or equal to 18. Finally, use
// 		console.log() to print the result of the comparison.
const myAge = 100;
const ageComparison = myAge >= 18;
console.log(ageComparison)


// 10. Create a variable called myShoeSize and assign it a number value. Then, use a
// 		comparison operator to check if myShoeSize is between 5 and 10. Finally, use
// 		console.log() to print the result of the comparison.
const myShoeSize = 43;
const shoeComparison = myShoeSize >= 5 && myShoeSize <= 10;
console.log(shoeComparison);


// 13. Create a variable called myPhoneNumber and assign it a string value. Then,
// 		use a string method to remove all dashes and parentheses from
// 		myPhoneNumber. Finally, use console.log() to print the updated value of
// 		myPhoneNumber.
const myPhoneNumber = "(+234)-814-790-7809";
const numberWithoutOpeningBracket = myPhoneNumber.replace("(", "");
const numberWithoutClosingBracket = numberWithoutOpeningBracket.replace(")", "");
const numberWithoutFirstHyphen = numberWithoutClosingBracket.replace("-", "");
const numberWithoutSecondHyphen = numberWithoutFirstHyphen.replace("-", "");
const numberWithoutThirdHyphen = numberWithoutSecondHyphen.replace("-", "");
console.log(numberWithoutThirdHyphen);


// 15. Create two variables called isRaining and hasUmbrella and assign them
// 		boolean values. Then, use logical operators to check if it's raining and if you
// 		have an umbrella, and print a message to the console based on the outcome.
const isRaining = true;
const hasUmbrella = true;

const iCanGoOut1 = isRaining && hasUmbrella;
console.log(iCanGoOut1);

const iCanGoOut2 = !isRaining || hasUmbrella;
console.log(iCanGoOut2);


// 19. Create a variable called myAge and assign it a number value. Then, use a
// 		logical operator to check if myAge is less than 13 or greater than or equal to
// 		65. Finally, use console.log() to print the result of the logical operator.
const myAge2 = 50;
const myAge2Comparison = myAge2 < 13 || myAge2 >= 65;
console.log(myAge2Comparison);


// 20. Create two variables called myFavoriteFood and hasToppings and assign them
// 		string and boolean values, respectively. Then, use logical operators to check if
// 		myFavoriteFood is "pizza" and if it has toppings, and print a message to the
// 		console based on the outcome.
const myFavoriteFood = "pizza";
const hasToppings = false;
const favComparison = myFavoriteFood === "pizza" && hasToppings
console.log(favComparison)


// "' - bad
// '" - bad
// "" - good
// '' - good