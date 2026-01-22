import { TaskStatus } from "../types/task.js";
import { findTaskById, readTasks, writeTasks } from "../utils/fileSystem.js";
import { validateTaskId } from "../utils/validation.js";

export const markTask = (id: string, status: TaskStatus): void => {
  const taskId = validateTaskId(id);

  const storage = readTasks();
  const task = findTaskById(taskId);

  if (!task) {
    console.error(`Error: Task with ID ${taskId} not found.`);
    process.exit(1);
  }

  task.status = status;
  task.updatedAt = new Date().toISOString();

  writeTasks(storage);

  console.log(`Task ${taskId} marked as ${status}.`);
};
