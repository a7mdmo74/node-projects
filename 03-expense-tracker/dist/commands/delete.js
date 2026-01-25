import { loadExpenses, saveExpenses } from "../utils/storage.js";
export function deleteExpense(id) {
    const expenses = loadExpenses();
    const filtered = expenses.filter((e) => e.id !== id);
    if (filtered.length === expenses.length) {
        console.log("❌ Expense ID not found");
        return;
    }
    saveExpenses(filtered);
    console.log("✅ Expense deleted successfully");
}
