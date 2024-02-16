// Seeing the World: Think of at least five places in the world you’d like to visit.
// • Store the locations in a array. Make sure the array is not in alphabetical order.

// • Print your array in its original order.

// • Print your array in alphabetical order without modifying the actual list.

// • Show that your array is still in its original order by printing it.

// • Print your array in reverse alphabetical order without changing the order of the original list.

// • Show that your array is still in its original order by printing it again.

// • Reverse the order of your list. Print the array to show that its order has changed.

// • Reverse the order of your list again. Print the list to show it’s back to its original order.

// • Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.

// • Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.




// // List of places to visit


// List of places to visit
let placesToVisit: string[] = ['Singapore', 'Canada', 'Australia', 'Brazil', 'Egypt'];

// Print original order
console.log("Original order:", placesToVisit);

// Print alphabetical order without modifying original list
console.log("Alphabetical order:", [...placesToVisit].sort());

// Confirm original order is unchanged
console.log("Original order:", placesToVisit);

// Print reverse alphabetical order without modifying original list
console.log("Reverse alphabetical order:", [...placesToVisit].sort().reverse());

// Confirm original order is still unchanged
console.log("Original order:", placesToVisit);

// Reverse the order of the list
placesToVisit.reverse();
console.log("Reversed order:", placesToVisit);

// Reverse the order again to get back to the original order
placesToVisit.reverse();
console.log("Back to original order:", placesToVisit);

// Sort the list in alphabetical order
placesToVisit.sort();
console.log("Sorted in alphabetical order:", placesToVisit);

// Sort the list in reverse alphabetical order
placesToVisit.sort((a, b) => b.localeCompare(a));
console.log("Sorted in reverse alphabetical order:", placesToVisit);

