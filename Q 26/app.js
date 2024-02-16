// Alien Colors #2: Choose a color for an alien as you did in Exercise 25, and write an if-else chain.
// • If the alien’s color is green, print a statement that the player just earned 5 points for shooting the alien.
// • If the alien’s color isn’t green, print a statement that the player just earned 10 points.
// • Write one version of this program that runs the if block and another that runs the else block.
// Version running the if block (alien's color is green):
var alien_color_if = 'green';
if (alien_color_if === 'green') {
    console.log("Congratulations! You just earned 5 points for shooting the green alien.");
}
else {
    console.log("Congratulations! You just earned 10 points for shooting the alien.");
}
// Version running the else block (alien's color is not green):
var alien_color_else = 'red'; // Assuming alien's color is red
if (alien_color_else === 'green') {
    console.log("Congratulations! You just earned 5 points for shooting the green alien.");
}
else {
    console.log("Congratulations! You just earned 10 points for shooting the alien.");
}
