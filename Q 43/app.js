// Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
function make_great(magicians) {
    var greatMagicians = [];
    for (var _i = 0, magicians_1 = magicians; _i < magicians_1.length; _i++) {
        var magician = magicians_1[_i];
        greatMagicians.push("the Great " + magician);
    }
    return greatMagicians;
}
function show_magicians(magicians) {
    for (var _i = 0, magicians_2 = magicians; _i < magicians_2.length; _i++) {
        var magician = magicians_2[_i];
        console.log(magician);
    }
}
// Array of magician's names
var magicians = ["Harry Houdini", "David Copperfield", "Penn Jillette", "Teller"];
// Call make_great with a copy of the array to create a new array with modified names
var greatMagicians = make_great(__spreadArray([], magicians, true)); // Using spread operator to create a shallow copy
// Call show_magicians to display the original array
console.log("Original Magicians:");
show_magicians(magicians);
// Call show_magicians to display the array with the Great added to each magician's name
console.log("\nGreat Magicians:");
show_magicians(greatMagicians);
