// Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.
// • Make a list of five or more usernames called current_users.
// • Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.
// • Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person will need to enter a new username. If a username has not been used, print a message saying that the username is available.
// • Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.
// List of current users
var current_users = ['john', 'emma', 'alex', 'sarah', 'daniel'];
// List of new users
var new_users = ['Emma', 'mike', 'jessica', 'sarah', 'steve'];
// Convert all current usernames to lowercase for case-insensitive comparison
var current_users_lower = current_users.map(function (user) { return user.toLowerCase(); });
// Check new usernames against current usernames
for (var _i = 0, new_users_1 = new_users; _i < new_users_1.length; _i++) {
    var user = new_users_1[_i];
    // Convert the new username to lowercase for case-insensitive comparison
    var user_lower = user.toLowerCase();
    if (current_users_lower.includes(user_lower)) {
        console.log("Sorry, the username '".concat(user, "' is not available. Please enter a new username."));
    }
    else {
        console.log("The username '".concat(user, "' is available."));
    }
}
