import fs from "fs";
import path from "path";
const DATA_PATH = path.join(process.cwd(), "data", "expenses.json");
export function loadExpenses() {
    if (!fs.existsSync(DATA_PATH))
        return [];
    return JSON.parse(fs.readFileSync(DATA_PATH, "utf-8"));
}
export function saveExpenses(expenses) {
    fs.writeFileSync(DATA_PATH, JSON.stringify(expenses, null, 2));
}
