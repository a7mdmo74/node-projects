import { TaskStatus } from "../types/task.js";
import { readTasks } from "../utils/fileSystem.js";
export const listTasks = (filter) => {
    const storage = readTasks();
    let tasks = storage.tasks;
    // Apply filter if provided
    if (filter) {
        const statusFilter = filter;
        if (!Object.values(TaskStatus).includes(statusFilter)) {
            console.error(`Error: Invalid status filter. Use: todo, in-progress, or done.`);
            process.exit(1);
        }
        tasks = tasks.filter((task) => task.status === statusFilter);
    }
    if (tasks.length === 0) {
        console.log("No tasks found.");
        return;
    }
    console.log("\nTasks:");
    console.log("─".repeat(80));
    tasks.forEach((task) => {
        console.log(`ID: ${task.id}`);
        console.log(`Description: ${task.description}`);
        console.log(`Status: ${task.status}`);
        console.log(`Created: ${new Date(task.createdAt).toLocaleString()}`);
        console.log(`Updated: ${new Date(task.updatedAt).toLocaleString()}`);
        console.log("─".repeat(80));
    });
    console.log(`Total: ${tasks.length} task(s)\n`);
};
