// Sort
// ----
// Reorders the array by comparing items 2 AT A TIME.
// - return a NEGATIVE number if "itemA" & "itemB" have an OKAY ORDER
// - return a POSITIVE number if "itemA" & "itemB" NEED TO SWITCH

var numbers = [9, 1000, 30, 15];

numbers.sort(function(itemA, itemB) {
  if (itemA < itemB) {
    // if "itemA" comes before "itemB" return any NEGATIVE number
    // (the order is good)
    return -999;
  } else {
    // if "itemB" comes before "itemA" return any POSITIVE number
    // (they need to switch)
    return 500;
  }
});

console.log(numbers);

var people = [
  { name: "Candice", age: 25 },
  { name: "Stuart", age: 17 },
  { name: "Alain", age: 49 },
  { name: "Nettie", age: 14 },
  { name: "Bill", age: 38 }
];

people.sort(function(itemA, itemB) {
  if (itemA.name < itemB.name) {
    // if "itemA" comes before "itemB" return NEGATIVE
    // (the order is good)
    return -999;
  } else {
    // if "itemB" comes before "itemA" return POSITIVE
    // (they need to switch)
    return 500;
  }
});

var animals = ["velociraptor", "narwhal", "Unicorns", "sloth", "octopus"];

// for STRINGS ONLY
animals.sort(function(itemA, itemB) {
  if (itemA.toUpperCase() < itemB.toUpperCase()) {
    // if "itemA" comes before "itemB" return NEGATIVE
    // (the order is good)
    return -999;
  } else {
    // if "itemB" comes before "itemA" return POSITIVE
    // (they need to switch)
    return 500;
  }
});
