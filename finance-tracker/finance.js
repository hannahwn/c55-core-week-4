const { transactions } = require("./data.js");

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
  
}

function printAllTransactions() {
  // TODO: Implement this function
}