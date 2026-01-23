export const validateUserId = (id) => {
    const userId = parseInt(id, 10);
    if (isNaN(userId) || userId <= 0) {
        console.error("Error: Invalid user ID. Must be a positive number.");
        process.exit(1);
    }
    return userId;
};
export const validateUsername = (username) => {
    if (!username || username.trim().length === 0) {
        console.error("Error: Username cannot be empty.");
        process.exit(1);
    }
};
