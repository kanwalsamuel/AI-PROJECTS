// Conditional Tests: Write a series of conditional tests. Print a statement describing each test and your prediction for the results of each test. Your code should look something like this:
// let car = 'subaru';
// console.log("Is car == 'subaru'? I predict True.")
// console.log(car == 'subaru')
// • Look closely at your results, and make sure you understand why each line evaluates to True or False.
// • Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False.
var car = 'subaru';
// Test 1: Is car equal to 'subaru'? I predict True.
console.log("Is car == 'subaru'? I predict True.");
console.log(car == 'subaru');
// Test 2: Is car equal to 'honda'? I predict False.
console.log("Is car == 'honda'? I predict False.");
console.log(car == 'honda');
// Test 3: Is car not equal to 'toyota'? I predict True.
console.log("Is car != 'toyota'? I predict True.");
console.log(car != 'toyota');
// Test 4: Is car not equal to 'subaru'? I predict False.
console.log("Is car != 'subaru'? I predict False.");
console.log(car != 'subaru');
// Test 5: Is car length greater than 5? I predict False.
console.log("Is car.length > 5? I predict False.");
console.log(car.length > 5);
// Test 6: Is car length less than or equal to 6? I predict True.
console.log("Is car.length <= 6? I predict True.");
console.log(car.length <= 6);
// Test 7: Is car starts with 's'? I predict True.
console.log("Does car start with 's'? I predict True.");
console.log(car.startsWith('s'));
// Test 8: Is car ends with 'ru'? I predict True.
console.log("Does car end with 'ru'? I predict True.");
console.log(car.endsWith('ru'));
// Test 9: Is car includes 'baru'? I predict False.
console.log("Does car include 'baru'? I predict False.");
console.log(car.includes('baru'));
// Test 10: Is car not undefined? I predict True.
console.log("Is car not undefined? I predict True.");
console.log(car !== undefined);
