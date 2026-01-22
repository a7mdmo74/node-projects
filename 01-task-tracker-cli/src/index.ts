#!/usr/bin/env node

import { addTask } from "./commands/add.js";
import { deleteTask } from "./commands/delete.js";
import { listTasks } from "./commands/list.js";
import { markTask } from "./commands/mark.js";
import { updateTask } from "./commands/update.js";
import { TaskStatus } from "./types/task.js";

const args = process.argv.slice(2);
const command = args[0];

const showHelp = (): void => {
  console.log(`
Task Tracker CLI - Usage:

  task-cli add <description>              Add a new task
  task-cli update <id> <description>      Update a task
  task-cli delete <id>                    Delete a task
  task-cli mark-in-progress <id>          Mark task as in progress
  task-cli mark-done <id>                 Mark task as done
  task-cli list                           List all tasks
  task-cli list todo                      List todo tasks
  task-cli list in-progress               List in-progress tasks
  task-cli list done                      List completed tasks
  task-cli help                           Show this help message
  `);
};

switch (command) {
  case "add":
    if (!args[1]) {
      console.error("Error: Please provide a task description.");
      process.exit(1);
    }
    addTask(args.slice(1).join(" "));
    break;

  case "update":
    if (!args[1] || !args[2]) {
      console.error("Error: Please provide task ID and new description.");
      process.exit(1);
    }
    updateTask(args[1], args.slice(2).join(" "));
    break;

  case "delete":
    if (!args[1]) {
      console.error("Error: Please provide a task ID.");
      process.exit(1);
    }
    deleteTask(args[1]);
    break;

  case "mark-in-progress":
    if (!args[1]) {
      console.error("Error: Please provide a task ID.");
      process.exit(1);
    }
    markTask(args[1], TaskStatus.IN_PROGRESS);
    break;

  case "mark-done":
    if (!args[1]) {
      console.error("Error: Please provide a task ID.");
      process.exit(1);
    }
    markTask(args[1], TaskStatus.DONE);
    break;

  case "list":
    listTasks(args[1]);
    break;

  case "help":
    showHelp();
    break;

  default:
    console.error(`Error: Unknown command "${command}"`);
    showHelp();
    process.exit(1);
}
