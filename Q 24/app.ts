// More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
// • Tests for equality and inequality with strings

// • Tests using the lower case function

// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to

// • Tests using "and" and "or" operators

// • Test whether an item is in a array

// • Test whether an item is not in a array


// Tests for equality and inequality with strings:
const string1: string = "apple";
const string2: string = "apple";

console.log(string1 === string2);  // true
console.log(string1 !== string2);  // false

// Tests using the lower case function:
const string3: string = "HELLO";
console.log(string3.toLowerCase() === "hello");  // true
console.log(string3.toLowerCase() === "HELLO");  // false

// Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to:
const num1: number = 10;
const num2: number = 5;

console.log(num1 === num2);  // false
console.log(num1 !== num2);  // true
console.log(num1 > num2);   // true
console.log(num1 < num2);   // false
console.log(num1 >= num2);  // true
console.log(num1 <= num2);  // false

// Tests using "and" and "or" operators:
const num3: number = 10;
const num4: number = 5;

console.log(num1 > num2 && num3 > num4);  // true
console.log(num1 > num2 || num3 < num4);  // true

// Test whether an item is in an array:
const arr: number[] = [1, 2, 3, 4, 5];
const item1: number = 3;

console.log(arr.includes(item1));  // true
console.log(arr.includes(6));       // false

// Test whether an item is not in an array:
console.log(!arr.includes(6));  // true
console.log(!arr.includes(item1));  // false
