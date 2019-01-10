// Reduce
// ------
// Combines the items into one final result.
// - Think adding together the items together for an average.

var ingredients = [
  { name: "Mushrooms", price: 5 },
  { name: "Pepperoni", price: 2 },
  { name: "Parmesan", price: 3 }
];

var total = 10;

ingredients.forEach(function(oneIngredient) {
  // directly COMBINE current item's value with the variable
  total += oneIngredient.price;
});

console.log(total);

// ---------------------------------------------

var total = ingredients.reduce(function(sum, oneIngredient) {
  // RETURN the accumulator plus the current item's value
  return sum + oneIngredient.price;
}, 10);
// 10 is the accumulator's starting value

console.log(total);

// ----------------------------------------------

var menu = [
  { name: "Carrots", calories: 150 },
  { name: "Steak", calories: 350 },
  { name: "Broccoli", calories: 120 },
  { name: "Chicken", calories: 250 },
  { name: "Pizza", calories: 520 }
];

var totalCalories = menu.reduce(function(sum, oneItem) {
  // RETURN the accumulator plus the current item's value
  return sum + oneItem.calories;
}, 0);

var averageCalories = totalCalories / menu.length;

console.log(averageCalories);
// 278
