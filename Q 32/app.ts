// Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.
// • Make a list of five or more usernames called current_users.

// • Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.

// • Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person will need to enter a new username. If a username has not been used, print a message saying that the username is available.

// • Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.

// List of current users
let current_users: string[] = ['john', 'emma', 'alex', 'sarah', 'daniel'];

// List of new users
let new_users: string[] = ['Emma', 'mike', 'jessica', 'sarah', 'steve'];

// Convert all current usernames to lowercase for case-insensitive comparison
let current_users_lower: string[] = current_users.map(user => user.toLowerCase());

// Check new usernames against current usernames
for (let user of new_users) {
    // Convert the new username to lowercase for case-insensitive comparison
    let user_lower: string = user.toLowerCase();
    if (current_users_lower.includes(user_lower)) {
        console.log(`Sorry, the username '${user}' is not available. Please enter a new username.`);
    } else {
        console.log(`The username '${user}' is available.`);
    }
}
