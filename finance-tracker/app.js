// This is the entrypoint for your application.
// node app.js
const {
  addTransaction,
  getTotalIncome,
  getTotalExpenses,
  getBalance,
  getTransactionsByCategory,
  getLargestExpense,
  printAllTransactions,
} = require('./finance.js');


console.log("Starting application...");
printAllTransactions();

console.log("Total income:    €" + getTotalIncome().toFixed(2));
console.log("Total expenses:  €" + getTotalExpenses().toFixed(2));
console.log("Current balance: €" + getBalance().toFixed(2));

addTransaction({
  type: "expense",
  category: "Food",
  amount: 9.50,
  description: "Lunch sandwich"
});

addTransaction({
  type: "income",
  category: "Sale",
  amount: 40,
  description: "Sold old headphones"
});

console.log("\nAfter adding transactions:");
printAllTransactions();

console.log("New total income:    €" + getTotalIncome().toFixed(2));
console.log("New total expenses:  €" + getTotalExpenses().toFixed(2));
console.log("New balance:         €" + getBalance().toFixed(2));

console.log("All 'Food' transactions:");
console.log(getTransactionsByCategory("Food"));

console.log("\nLargest expense:");
const biggest = getLargestExpense();
if (biggest) {
  console.log("#" + biggest.id + " " + biggest.category + " €" + biggest.amount + " – " + biggest.description);
} else {
  console.log("No expenses found.");
}