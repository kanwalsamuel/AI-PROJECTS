// They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.



// Object representing information about countries
let countries = [
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
countries.forEach(country => {
    console.log(`Name: ${country.name}`);
    console.log(`Capital: ${country.capital}`);
    console.log(`Population: ${country.population}`);
    console.log(`Language: ${country.language}`);
    console.log("--------------");
});

