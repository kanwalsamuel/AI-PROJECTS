// Cars: Write a function that stores information about a car in a Object. The function should always receive a manufacturer and a model name. It should then accept an arbitrary number of keyword arguments. Call the function with the required information and two other name-value pairs, such as a color or an optional feature. Print the Object that’s returned to make sure all the information was stored correctly.

interface Car {
    manufacturer: string;
    model: string;
    [key: string]: any;
}

function storeCarInfo(manufacturer: string, model: string, ...options: { [key: string]: any }[]): Car {
    const car: Car = { manufacturer, model };
    for (const option of options) {
        Object.assign(car, option);
    }
    return car;
}

// Call the function with required information and additional name-value pairs
const carInfo = storeCarInfo("Toyota", "Camry", { color: "blue" }, { year: 2022 });

// Print the object returned to verify the information stored correctly
console.log(carInfo);
