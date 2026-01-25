import { loadExpenses, saveExpenses } from "../utils/storage.js";
export function updateExpense(id, description, amount) {
    const expenses = loadExpenses();
    const expense = expenses.find((e) => e.id === id);
    if (!expense) {
        console.log("❌ Expense ID not found");
        return;
    }
    if (description)
        expense.description = description;
    if (amount !== undefined) {
        if (amount <= 0) {
            console.log("❌ Amount must be greater than zero");
            return;
        }
        expense.amount = amount;
    }
    saveExpenses(expenses);
    console.log("✅ Expense updated successfully");
}
