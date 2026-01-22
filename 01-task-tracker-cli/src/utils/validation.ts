export const validateTaskId = (id: string): number => {
  const taskId = parseInt(id, 10);

  if (isNaN(taskId) || taskId <= 0) {
    console.error("Error: Invalid task ID. Must be a positive number.");
    process.exit(1);
  }

  return taskId;
};

export const validateDescription = (description: string): void => {
  if (!description || description.trim().length === 0) {
    console.error("Error: Task description cannot be empty.");
    process.exit(1);
  }
};
