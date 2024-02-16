// More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
// • Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.
// • Add one new guest to the beginning of your array.
// • Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.
var guestlist = ["Methun", "Charli", "Daniyal"];
guestlist.forEach(function (guest) {
    console.log("Dear ".concat(guest, ", please join us for dinner !"));
});
var guestCantMakeIt = "Charli";
console.log("unfortunately , ".concat(guestCantMakeIt, " can't make it to dinner .\n"));
var newGuest = "Sam";
guestlist[guestlist.indexOf(guestCantMakeIt)] = newGuest;
guestlist.forEach(function (guest) {
    console.log("Dear ".concat(guest, ", please join us for dinner !"));
});
console.log("\nGreat news ! we found a bigger dinner table. /n");
guestlist.unshift("Frank");
guestlist.splice(Math.ceil(guestlist.length / 2), 0, "Grace");
guestlist.push("Hannag");
guestlist.forEach(function (guest) {
    console.log("Dear ".concat(guest, ", please join us for dinner !"));
});
