import { existsSync, readFileSync, writeFileSync } from "fs";
import { Task, TaskStorage } from "../types/task.js";

const TASKS_FILE = "./tasks.json";

export const initializeTasksFile = (): void => {
  if (!existsSync(TASKS_FILE)) {
    const initialData: TaskStorage = {
      tasks: [],
      nextId: 1,
    };
    writeFileSync(TASKS_FILE, JSON.stringify(initialData, null, 2));
  }
};

export const readTasks = (): TaskStorage => {
  try {
    initializeTasksFile();
    const data = readFileSync(TASKS_FILE, "utf-8");
    return JSON.parse(data);
  } catch (error) {
    console.error("Error reading tasks file:", error);
    process.exit(1);
  }
};

export const writeTasks = (storage: TaskStorage): void => {
  try {
    writeFileSync(TASKS_FILE, JSON.stringify(storage, null, 2));
  } catch (error) {
    console.error("Error writing tasks file:", error);
    process.exit(1);
  }
};

export const findTaskById = (id: number): Task | undefined => {
  const storage = readTasks();
  return storage.tasks.find((task) => task.id === id);
};
