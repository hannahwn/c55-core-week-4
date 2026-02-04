const chalk = require("chalk");

function addTransaction(transaction) {
  // TODO: Implement this function
  let maxId = 0;
  for (let i = 0; i < transactions.length; i++) {
    if (transactions[i].id > maxId) {
      maxId = transactions[i].id;
    }
  }
  transaction.id = maxId + 1;

  transactions.push(transaction);
  console.log("→ Added transaction #" + transaction.id);

}

function getTotalIncome() {
  // TODO: Implement this function
   let total = 0;
  for (let i = 0; i < transactions.length; i++) {
    if (transactions[i].type === "income") {
      total += transactions[i].amount;
    }
  }
  return total;
}

function getTotalExpenses() {
  // TODO: Implement this function
  let total = 0;
  for (let i = 0; i < transactions.length; i++) {
    if (transactions[i].type === "expense") {
      total += transactions[i].amount;
    }
  }
  return total;
}

function getBalance() {
  // TODO: Implement this function
   return getTotalIncome() - getTotalExpenses();
}

function getTransactionsByCategory(category) {
  // TODO: Implement this function
    let found = [];
  for (let i = 0; i < transactions.length; i++) {
    if (transactions[i].category === category) {
      found.push(transactions[i]);
    }
  }
  return found;
}

function getLargestExpense() {
  // TODO: Implement this function
   let largest = null;
  let maxAmount = -1;

  for (let i = 0; i < transactions.length; i++) {
    let t = transactions[i];
    if (t.type === "expense" && t.amount > maxAmount) {
      largest = t;
      maxAmount = t.amount;
    }
  }
  return largest;
}

function printAllTransactions() {
  // TODO: Implement this function
  console.log("\n=== Transactions ===");
  console.log("ID | Type     | Amount | Category   | Description");
  console.log("-----------------------------------------------");
  
  for (let i = 0; i < transactions.length; i++) {
    let t = transactions[i];
    let sign = t.type === "income" ? "+" : "-";
    console.log(
      t.id + "  | " +
      t.type.padEnd(8) + " | " +
      sign + t.amount.toFixed(2).padStart(6) + " | " +
      t.category.padEnd(10) + " | " +
      t.description
    );
  }
  console.log("-----------------------------------------------\n");
}


module.exports = {
  addTransaction,
  getTotalIncome,
  getTotalExpenses,
  getBalance,
  getTransactionsByCategory,
  getLargestExpense,
  printAllTransactions
};