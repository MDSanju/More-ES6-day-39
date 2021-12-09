// an array to practice map
const numbers = [4, 7, 3, 5, 12, 9, 11];

// arrow function
const getElement = x => x * x;

// apply map js
const squareIt = numbers.map(x => x * x);

console.log(squareIt);




// make double using map
const num = [6, 4, 12, 19];

const getDouble = i => i * 2;

const doubleIt = num.map(getDouble);
console.log(doubleIt);


// note: we can use function name only or full function inside map bracket to apply map. Two rules above this file