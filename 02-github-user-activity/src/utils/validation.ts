export const validateUserId = (id: string): number => {
  const userId = parseInt(id, 10);

  if (isNaN(userId) || userId <= 0) {
    console.error("Error: Invalid user ID. Must be a positive number.");
    process.exit(1);
  }

  return userId;
};

export const validateUsername = (username: string): void => {
  if (!username || username.trim().length === 0) {
    console.error("Error: Username cannot be empty.");
    process.exit(1);
  }
};
