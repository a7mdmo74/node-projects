import { loadExpenses } from "../utils/storage.js";

export function summary(month?: number) {
  const expenses = loadExpenses();
  const year = new Date().getFullYear();

  if (month) {
    const total = expenses
      .filter((e) => {
        const d = new Date(e.date);
        return d.getFullYear() === year && d.getMonth() + 1 === month;
      })
      .reduce((sum, e) => sum + e.amount, 0);

    const monthName = new Date(year, month - 1, 1).toLocaleString("en", {
      month: "long",
    });

    console.log(`📊 Total expenses for ${monthName}: $${total}`);
  } else {
    const total = expenses.reduce((sum, e) => sum + e.amount, 0);
    console.log(`📊 Total expenses: $${total}`);
  }
}
