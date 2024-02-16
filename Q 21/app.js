// They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.
// Object representing information about countries
var countries = [
    {
        name: 'United States',
        capital: 'Washington, D.C.',
        population: 331000000,
        language: 'English'
    },
    {
        name: 'China',
        capital: 'Beijing',
        population: 1441000000,
        language: 'Mandarin'
    },
    {
        name: 'India',
        capital: 'New Delhi',
        population: 1380000000,
        language: 'Hindi, English'
    },
    {
        name: 'Brazil',
        capital: 'Brasília',
        population: 213000000,
        language: 'Portuguese'
    },
    {
        name: 'Russia',
        capital: 'Moscow',
        population: 146000000,
        language: 'Russian'
    }
];
// Print information about each country
console.log("Information about countries:");
countries.forEach(function (country) {
    console.log("Name: ".concat(country.name));
    console.log("Capital: ".concat(country.capital));
    console.log("Population: ".concat(country.population));
    console.log("Language: ".concat(country.language));
    console.log("--------------");
});
