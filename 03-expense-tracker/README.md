```md
# Expense Tracker CLI

A simple **Command Line Expense Tracker** built with **Node.js + TypeScript**.
This project allows you to manage your daily expenses directly from the terminal.

It is part of my **Node.js backend roadmap projects** and follows the requirements from
👉 https://roadmap.sh/projects/expense-tracker

---

## ✨ Features

- Add a new expense with description and amount
- Update an existing expense
- Delete an expense
- List all expenses
- View total expense summary
- View monthly expense summary (current year)
- Data persistence using a local JSON file

---

## 🛠 Tech Stack

- **Node.js**
- **TypeScript**
- **Commander.js** (CLI argument parsing)
- **File System (fs)** for data storage

---

## 📂 Project Structure
```

03-expense-tracker/
├── src/
│ ├── commands/
│ │ ├── add.ts
│ │ ├── update.ts
│ │ ├── delete.ts
│ │ ├── list.ts
│ │ └── summary.ts
│ ├── utils/
│ │ ├── storage.ts
│ │ └── helpers.ts
│ ├── index.ts
│ └── types.ts
├── data/
│ └── expenses.json
├── package.json
├── tsconfig.json
└── README.md

````

---

## 🚀 Installation

```bash
git clone https://github.com/a7mdmo74/node-projects.git
cd node-projects/03-expense-tracker
npm install
````

---

## ▶️ Usage

### Build the project

```bash
npm run build
```

### Run commands

```bash
node dist/index.js <command>
```

---

## 📌 Commands

### ➕ Add an expense

```bash
node dist/index.js add --description "Lunch" --amount 20
```

Output:

```
Expense added successfully (ID: 1)
```

---

### ✏️ Update an expense

```bash
node dist/index.js update --id 1 --amount 25
```

---

### 🗑 Delete an expense

```bash
node dist/index.js delete --id 1
```

---

### 📋 List all expenses

```bash
node dist/index.js list
```

Output:

```
ID  Date        Description       Amount
1   2024-08-06  Lunch             $20
```

---

### 📊 Summary (all expenses)

```bash
node dist/index.js summary
```

Output:

```
Total expenses: $20
```

---

### 📅 Monthly summary

```bash
node dist/index.js summary --month 8
```

Output:

```
Total expenses for August: $20
```

---

## 💾 Data Storage

Expenses are stored locally in:

```
data/expenses.json
```

Example:

```json
[
  {
    "id": 1,
    "date": "2024-08-06",
    "description": "Lunch",
    "amount": 20
  }
]
```

---

## ⚠️ Validation & Error Handling

- Prevents negative or zero amounts
- Handles non-existing expense IDs
- Safely handles empty or missing data file

---

## 🔮 Future Improvements

- Expense categories
- Monthly budget limits
- CSV export
- SQLite database
- Unit tests

---

## 📄 License

MIT License

---

## 🙌 Acknowledgment

Inspired by the **Expense Tracker CLI** project from
[https://roadmap.sh](https://roadmap.sh)

```

```
