export function getNextId(expenses) {
    return expenses.length ? Math.max(...expenses.map((e) => e.id)) + 1 : 1;
}
export function today() {
    return new Date().toISOString().split("T")[0];
}
