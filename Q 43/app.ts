// Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.


function make_great(magicians: string[]): string[] {
    let greatMagicians: string[] = [];
    for (let magician of magicians) {
        greatMagicians.push("the Great " + magician);
    }
    return greatMagicians;
}

function show_magicians(magicians: string[]): void {
    for (let magician of magicians) {
        console.log(magician);
    }
}

// Array of magician's names
let magicians: string[] = ["Harry Houdini", "David Copperfield", "Penn Jillette", "Teller"];

// Call make_great with a copy of the array to create a new array with modified names
let greatMagicians: string[] = make_great([...magicians]); // Using spread operator to create a shallow copy

// Call show_magicians to display the original array
console.log("Original Magicians:");
show_magicians(magicians);

// Call show_magicians to display the array with the Great added to each magician's name
console.log("\nGreat Magicians:");
show_magicians(greatMagicians);
