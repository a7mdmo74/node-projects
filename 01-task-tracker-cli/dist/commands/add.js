import { TaskStatus } from "../types/task.js";
import { readTasks, writeTasks } from "../utils/fileSystem.js";
import { validateDescription } from "../utils/validation.js";
export const addTask = (description) => {
    validateDescription(description);
    const storage = readTasks();
    const now = new Date().toISOString();
    const newTask = {
        id: storage.nextId,
        description: description.trim(),
        status: TaskStatus.TODO,
        createdAt: now,
        updatedAt: now,
    };
    storage.tasks.push(newTask);
    storage.nextId++;
    writeTasks(storage);
    console.log(`Task added successfully (ID: ${newTask.id})`);
};
