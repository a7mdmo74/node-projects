import { readTasks, writeTasks } from "../utils/fileSystem.js";
import { validateTaskId } from "../utils/validation.js";

export const deleteTask = (id: string): void => {
  const taskId = validateTaskId(id);

  const storage = readTasks();
  const initialLength = storage.tasks.length;

  storage.tasks = storage.tasks.filter((task) => task.id !== taskId);

  if (storage.tasks.length === initialLength) {
    console.error(`Error: Task with ID ${taskId} not found.`);
    process.exit(1);
  }

  writeTasks(storage);

  console.log(`Task ${taskId} deleted successfully.`);
};
