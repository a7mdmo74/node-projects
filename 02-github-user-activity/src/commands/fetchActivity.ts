import { GitHubEvent } from "../types/user.js";
import { saveUserActivity } from "../utils/fileSystem.js";

export const fetchUserActivity = async (username: string): Promise<void> => {
  try {
    console.log(`Fetching activity for user: ${username}...`);

    const response = await fetch(
      `https://api.github.com/users/${username}/events`,
    );

    if (!response.ok) {
      if (response.status === 404) {
        console.error(`Error: User "${username}" not found.`);
      } else if (response.status === 403) {
        console.error(
          "Error: GitHub API rate limit exceeded. Try again later.",
        );
      } else {
        console.error(
          `Error: Failed to fetch data from GitHub API (${response.status}).`,
        );
      }
      process.exit(1);
    }

    const events: GitHubEvent[] = await response.json();

    if (events.length === 0) {
      console.log(`No recent activity found for ${username}`);
      return;
    }

    console.log(`\nRecent activity for ${username}:\n`);
    console.log("─".repeat(80));

    events.slice(0, 10).forEach((event) => {
      const output = formatEvent(event);
      if (output) {
        console.log(`- ${output}`);

        // Save to storage
        saveUserActivity(username, event);
      }
    });

    console.log("─".repeat(80));
    console.log(
      `\nTotal events displayed: ${Math.min(events.length, 10)} of ${events.length}`,
    );
  } catch (error) {
    if (error instanceof Error) {
      console.error(`Error: ${error.message}`);
    } else {
      console.error("Error: An unexpected error occurred.");
    }
    process.exit(1);
  }
};

const formatEvent = (event: GitHubEvent): string | null => {
  const { type, repo, payload } = event;

  switch (type) {
    case "PushEvent":
      const commitCount = payload.commits?.length || 0;
      return `Pushed ${commitCount} commit${commitCount !== 1 ? "s" : ""} to ${repo.name}`;

    case "IssuesEvent":
      const issueAction = payload.action === "opened" ? "Opened" : "Closed";
      return `${issueAction} a new issue in ${repo.name}`;

    case "WatchEvent":
      return `Starred ${repo.name}`;

    case "ForkEvent":
      return `Forked ${repo.name}`;

    case "CreateEvent":
      return `Created a new repository ${repo.name}`;

    case "PullRequestEvent":
      const prAction = payload.action === "opened" ? "Opened" : "Closed";
      return `${prAction} a pull request in ${repo.name}`;

    case "DeleteEvent":
      return `Deleted a branch in ${repo.name}`;

    case "PublicEvent":
      return `Made ${repo.name} public`;

    case "MemberEvent":
      return `${payload.action === "added" ? "Added" : "Removed"} a collaborator in ${repo.name}`;

    case "ReleaseEvent":
      return `Published a release in ${repo.name}`;

    default:
      return `${type.replace("Event", "")} in ${repo.name}`;
  }
};
