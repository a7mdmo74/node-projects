import { readTasks, writeTasks, findTaskById } from "../utils/fileSystem.js";
import { validateTaskId, validateDescription } from "../utils/validation.js";

export const updateTask = (id: string, description: string): void => {
  const taskId = validateTaskId(id);
  validateDescription(description);

  const storage = readTasks();
  const task = findTaskById(taskId);

  if (!task) {
    console.error(`Error: Task with ID ${taskId} not found.`);
    process.exit(1);
  }

  task.description = description.trim();
  task.updatedAt = new Date().toISOString();

  writeTasks(storage);

  console.log(`Task ${taskId} updated successfully.`);
};
