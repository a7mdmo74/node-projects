import { getNextId, today } from "../utils/helpers.js";
import { loadExpenses, saveExpenses } from "../utils/storage.js";

export function addExpense(description: string, amount: number) {
  if (amount <= 0) {
    console.log("❌ Amount must be greater than zero");
    return;
  }

  const expenses = loadExpenses();
  const expense = {
    id: getNextId(expenses),
    date: today(),
    description,
    amount,
  };

  expenses.push(expense);
  saveExpenses(expenses);

  console.log(`✅ Expense added successfully (ID: ${expense.id})`);
}
