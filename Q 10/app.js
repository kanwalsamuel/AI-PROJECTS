// Adding Comments: Choose two of the programs you’ve written, and add at least one comment to each. If you don’t have anything specific to write because your programs are too simple at this point, just add your name and the current date at the top of each program file. Then write one sentence describing what the program does.
// Author: [Your Name]
// Date: [Current Date]
// This program greets the user with a personalized message.
// Define a function to generate a personalized greeting
function greet(name) {
    return "Hello, " + name + "! Welcome to TypeScript programming.";
}
// Input the user's name
var userName = window.prompt("Enter your name:");
// Check if a name was provided
if (userName !== null) {
    // Generate and display the personalized greeting
    var greeting = greet(userName);
    console.log(greeting);
}
else {
    console.log("No name provided. Exiting program.");
}
