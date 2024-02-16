// Intentional Error: If you haven’t received an array index error in one of your programs yet, try to make one happen. Change an index in one of your programs to produce an index error. Make sure you correct the error before closing the program.
// Define an array of numbers
var numbers = [1, 2, 3, 4, 5];
// Try to access an index that doesn't exist (intentional error)
try {
    console.log(numbers[10]); // This index doesn't exist
}
catch (error) {
    console.log("Index error occurred! The index is out of range.");
    // Perform error handling or correction here
}
// Correcting the error by accessing an existing index
console.log(numbers[2]); // Accessing an existing index to avoid error
