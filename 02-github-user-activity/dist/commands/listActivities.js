import { readUsers } from "../utils/fileSystem.js";
export const listUserActivities = (filter) => {
    const users = readUsers();
    let activities = [];
    // Validate filter if provided
    if (filter) {
        const validFilters = ["push", "pull request", "commit"];
        if (!validFilters.includes(filter.toLowerCase())) {
            console.error(`Error: Invalid activity type filter. Valid options: ${validFilters.join(", ")}`);
            process.exit(1);
        }
    }
    // Extract all activities from all users
    users.forEach((user) => {
        if (user.activities && user.activities.length > 0) {
            activities.push(...user.activities);
        }
    });
    // Apply filter if provided
    if (filter) {
        activities = activities.filter((activity) => activity.activityType.toLowerCase() === filter.toLowerCase());
    }
    // Sort by date (most recent first)
    activities.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
    // Display results
    if (activities.length === 0) {
        console.log("\nNo activities found.");
        return;
    }
    console.log(`\nUser Activities${filter ? ` (filtered by: ${filter})` : ""}:`);
    console.log("─".repeat(80));
    activities.forEach((activity) => {
        console.log(`ID: ${activity.id}`);
        console.log(`User ID: ${activity.userId}`);
        console.log(`Activity Type: ${activity.activityType}`);
        console.log(`Activity Data: ${activity.activityData}`);
        console.log(`Created: ${new Date(activity.createdAt).toLocaleString()}`);
        console.log(`Updated: ${new Date(activity.updatedAt).toLocaleString()}`);
        console.log("─".repeat(80));
    });
    console.log(`\nTotal: ${activities.length} activities\n`);
};
