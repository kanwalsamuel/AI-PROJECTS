// // 
// Alien Colors #1: Imagine an alien was just shot down in a game. Create a variable called alien_color and assign it a value of 'green', 'yellow', or 'red'.
// • Write an if statement to test whether the alien’s color is green. If it is, print a message that the player just earned 5 points.

// • Write one version of this program that passes the if test and another that fails. (The version that fails will have no output.)


// Version passing the if test (alien's color is green):
let alien_color_pass: string = 'green';

if (alien_color_pass === 'green') {
    console.log("Congratulations! You just earned 5 points.");
}

// Version failing the if test (alien's color is not green):
let alien_color_fail: string = 'red'; // Assuming alien's color is red

if (alien_color_fail === 'green') {
    console.log("Congratulations! You just earned 5 points."); // This line won't execute
}
