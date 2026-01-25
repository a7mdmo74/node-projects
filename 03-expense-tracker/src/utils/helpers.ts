import { Expense } from "../types.js";

export function getNextId(expenses: Expense[]): number {
  return expenses.length ? Math.max(...expenses.map((e) => e.id)) + 1 : 1;
}

export function today(): string {
  return new Date().toISOString().split("T")[0];
}
