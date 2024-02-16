// 
// 
// No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
// • If the list is empty, print the message We need to find some users!
// • Remove all of the usernames from your array, and make sure the correct message is printed.
// List of users
var users = ['user1', 'user2', 'user3'];
// Check if the list of users is not empty
if (users.length > 0) {
    users.forEach(function (user) {
        console.log("Hello, ".concat(user, "!"));
    });
}
else {
    console.log("We need to find some users!");
}
// Remove all usernames
users = [];
// Check if the list of users is not empty after removal
if (users.length > 0) {
    users.forEach(function (user) {
        console.log("Hello, ".concat(user, "!"));
    });
}
else {
    console.log("We need to find some users!");
}
