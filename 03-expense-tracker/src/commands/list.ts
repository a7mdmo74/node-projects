import { loadExpenses } from "../utils/storage.js";

export function listExpenses() {
  const expenses = loadExpenses();

  if (!expenses.length) {
    console.log("No expenses found.");
    return;
  }

  console.log("ID  Date        Description       Amount");
  expenses.forEach((e) => {
    console.log(
      `${e.id}   ${e.date}  ${e.description.padEnd(15)} $${e.amount}`,
    );
  });
}
