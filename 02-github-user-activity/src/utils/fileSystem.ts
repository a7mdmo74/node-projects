import fs from "fs";
import path from "path";
import { GitHubEvent, GitHubUserActivity, User } from "../types/user.js";

const DATA_DIR = path.join(process.cwd(), "data");
const USERS_FILE = path.join(DATA_DIR, "users.json");

// Ensure data directory exists
if (!fs.existsSync(DATA_DIR)) {
  fs.mkdirSync(DATA_DIR, { recursive: true });
}

// Initialize users file if it doesn't exist
if (!fs.existsSync(USERS_FILE)) {
  fs.writeFileSync(USERS_FILE, JSON.stringify([], null, 2));
}

export const readUsers = (): User[] => {
  try {
    const data = fs.readFileSync(USERS_FILE, "utf-8");
    return JSON.parse(data);
  } catch (error) {
    return [];
  }
};

export const writeUsers = (users: User[]): void => {
  fs.writeFileSync(USERS_FILE, JSON.stringify(users, null, 2));
};

export const saveUserActivity = (
  username: string,
  event: GitHubEvent,
): void => {
  const users = readUsers();
  let user = users.find((u) => u.username === username);

  if (!user) {
    user = {
      id: Date.now().toString(),
      username,
      activities: [],
    };
    users.push(user);
  }

  // Map event type to activity type
  let activityType: GitHubUserActivity["activityType"];
  switch (event.type) {
    case "PushEvent":
      activityType = "push";
      break;
    case "PullRequestEvent":
      activityType = "pull request";
      break;
    case "IssuesEvent":
      activityType = "issue";
      break;
    case "WatchEvent":
      activityType = "star";
      break;
    case "ForkEvent":
      activityType = "fork";
      break;
    default:
      activityType = "commit";
  }

  const activity: GitHubUserActivity = {
    id: event.id,
    userId: user.id,
    activityType,
    activityData: event.repo.name,
    createdAt: event.created_at,
    updatedAt: new Date().toISOString(),
  };

  // Avoid duplicates
  const exists = user.activities.some((a) => a.id === activity.id);
  if (!exists) {
    user.activities.push(activity);
  }

  writeUsers(users);
};
