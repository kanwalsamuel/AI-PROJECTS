// Think of something you could store in a array. For example, you could make a list of mountains, rivers, countries, cities, languages, or anything else you’d like. Write a program that creates a list containing these items.
// Array containing names of famous mountains
var mountains = [
    'Mount Everest',
    'K2',
    'Kangchenjunga',
    'Lhotse',
    'Makalu',
    'Cho Oyu',
    'Dhaulagiri',
    'Manaslu',
    'Nanga Parbat',
    'Annapurna'
];
// Print the list of mountains
console.log("List of famous mountains:");
mountains.forEach(function (mountain) { return console.log(mountain); });
