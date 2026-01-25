import fs from "fs";
import path from "path";
import { Expense } from "../types.js";

const DATA_PATH = path.join(process.cwd(), "data", "expenses.json");

export function loadExpenses(): Expense[] {
  if (!fs.existsSync(DATA_PATH)) return [];

  const content = fs.readFileSync(DATA_PATH, "utf-8").trim();
  if (!content) return [];

  return JSON.parse(content);
}

export function saveExpenses(expenses: Expense[]): void {
  fs.writeFileSync(DATA_PATH, JSON.stringify(expenses, null, 2));
}
