#!/usr/bin/env node
import { fetchUserActivity } from "./commands/fetchActivity.js";
import { listUserActivities } from "./commands/listActivities.js";
const args = process.argv.slice(2);
const command = args[0];
const showHelp = () => {
    console.log(`
GitHub User Activity CLI - Usage:

  github-activity <username>              Fetch and display user's recent activity
  github-activity list [filter]           List all stored activities (optional filter: push, pull request, commit)
  github-activity help                    Show this help message

Examples:
  github-activity kamranahmedse
  github-activity list
  github-activity list push
  `);
};
switch (command) {
    case "list":
        listUserActivities(args[1]);
        break;
    case "help":
        showHelp();
        break;
    default:
        // If no command matches, treat first arg as username
        if (!command) {
            console.error("Error: Please provide a GitHub username.");
            showHelp();
            process.exit(1);
        }
        // Fetch user activity (async function needs await)
        fetchUserActivity(command).catch((error) => {
            console.error("Unexpected error:", error);
            process.exit(1);
        });
        break;
}
