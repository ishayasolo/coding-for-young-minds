// declaration
let myNumber;	// undefined
console.log(myNumber);

// assignment
myNumber = 4000;
console.log(myNumber);

// reassignment
myNumber = 30;
console.log(myNumber);

// declaration and assignment
let newNumber = 500;
console.log(newNumber);

let newStudentName = "Ishaya 100"
console.log(newStudentName)

let a = 500;
let b = "500";

console.log(typeof myNumber);
console.log(typeof newNumber);
console.log(typeof newStudentName);
console.log(typeof a);
console.log(typeof b);

// ---------------------------------------------------

const SCORE = 98;
const AGE = 88;

// SCORE = 500; - THIS CANNOT WORK

// DATA TYPES IN JAVASCRIPT
// 1. string
// 2. number
// 3. boolean (true or false)
// ----------------------------------
// 4. object
// 5. undefined
// 6. null



// OPERATORS
// mathematical
// addition >>>>>>>> +
// subtraction >>>>> -
// multiplication >> *
// division >>>>>>>> /

let firstNumber = 10;
let secondNumber = 5;

let product = firstNumber * secondNumber;
console.log(product);

let quotient = firstNumber / secondNumber;
console.log(quotient);

// logical
// and >>>>>>>>>>>>> &&
// or >>>>>>>>>>>>>> ||
// not >>>>>>>>>>>>> !

// and operator(&&)
// LHS and RHS MUST be true for your answer to be true

let iAmGoingHome;
let iHaveDoneMyAssignment = true;
let iHaveEaten = false;

console.log(iAmGoingHome);

iAmGoingHome = iHaveDoneMyAssignment && iHaveEaten
console.log(iAmGoingHome)
console.log(!iAmGoingHome)

// or operator (||)
// either the LHS or RHS have to be true for your answer to be true
// if both sides are false... your final answer will be false
iAmGoingHome = iHaveDoneMyAssignment || iHaveEaten
console.log(iAmGoingHome);
console.log(!iAmGoingHome);

console.log(!true)
console.log(!false)
const x = true;
const y = !x;
const z = !y;

console.log(x, y, z);
