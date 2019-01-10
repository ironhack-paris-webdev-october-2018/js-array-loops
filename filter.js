// Filter
// ------
// Creates a new array with some of the items removed.
// - The LENGTH DOES change
// - Does NOT modify the original

var people = [
  { name: "Candice", age: 25 },
  { name: "Stuart", age: 17 },
  { name: "Alain", age: 49 },
  { name: "Nettie", age: 14 },
  { name: "Bill", age: 38 }
];

var drinkers = people.filter(function(onePerson) {
  // RETURN the CONDITION that should test each item
  return onePerson.age >= 18;
});

console.log(people.length);
// 5

console.log(drinkers.length);
// 3

// ---------------------------------------------

var drinkers = [];

people.forEach(function(onePerson) {
  if (onePerson.age >= 18) {
    drinkers.push(onePerson);
  }
});

console.log(drinkers.length);
// 3

// -----------------------------------------------------

var numbers = [1, 60, 112, 123, 100, 99, 73];

var filteredNumbers = numbers.filter(function(oneNumber) {
  // Keep ONLY EVEN numbers that are GREATER than 42
  return oneNumber % 2 === 0 && oneNumber > 42;
});

console.log(filteredNumbers);
// [ 60, 112, 100 ]
