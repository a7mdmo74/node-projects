# Task Tracker CLI

A simple command-line task management application built with TypeScript.

## Installation

```bash
npm install
npm run build
npm link
```

## Usage

```bash
# Add tasks
task-cli add "Buy groceries"

# Update tasks
task-cli update 1 "Buy groceries and cook dinner"

# Mark tasks
task-cli mark-in-progress 1
task-cli mark-done 1

# List tasks
task-cli list
task-cli list todo
task-cli list in-progress
task-cli list done

# Delete tasks
task-cli delete 1
```

## Development

```bash
# Build
npm run build

# Build and run
npm run dev
```

## Features

- ✅ Add, update, and delete tasks
- ✅ Mark tasks as todo, in-progress, or done
- ✅ List and filter tasks by status
- ✅ Persistent JSON storage
- ✅ Timestamps for created and updated dates
- ✅ Error handling and validation
