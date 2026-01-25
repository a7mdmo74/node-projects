```md
# GitHub User Activity CLI

A command-line tool that fetches and displays GitHub user activity directly from the GitHub API.

This project is part of the **Node.js backend roadmap** and focuses on building a real-world CLI tool with API integration and proper error handling.

---

## ✅ Features

- Fetch recent activity for any GitHub user
- Display activity in a readable format in the terminal
- Store activity locally for offline viewing
- Filter activities by type (PushEvent, PullRequestEvent, Commit, etc.)
- Graceful error handling for invalid usernames and API limits

---

## 🛠 Tech Stack

- **Node.js**
- **TypeScript**
- **Commander.js**
- **Native Fetch**
- **JSON file persistence**

---

## 📂 Project Structure
```

02-github-user-activity/
├── src/
│ ├── commands/
│ │ ├── fetch.ts
│ │ ├── list.ts
│ │ └── filter.ts
│ ├── utils/
│ │ ├── github.ts
│ │ └── storage.ts
│ ├── index.ts
│ └── types.ts
├── data/
│ └── activity.json
├── package.json
├── tsconfig.json
└── README.md

````

---

## 🚀 Installation

```bash
git clone https://github.com/a7mdmo74/node-projects.git
cd node-projects/02-github-user-activity
npm install
````

---

## ▶️ Usage

### Fetch activity for a GitHub user

```bash
npm run dev fetch --username <github_username>
```

Example:

```bash
npm run dev fetch --username octocat
```

---

### List stored activity

```bash
npm run dev list
```

---

### Filter activity by type

```bash
npm run dev filter --type PushEvent
```

---

## 📌 Output Example

```
# GitHub User Activity
- Username: octocat
- Events fetched: 30

1. [PushEvent] pushed to repo octocat/Hello-World
2. [PullRequestEvent] opened PR #42
3. [IssuesEvent] opened issue #17
...
```

---

## 💾 Data Storage

All activity data is stored locally in:

```
data/activity.json
```

This allows offline viewing and repeated listing without calling the API again.

---

## ⚠️ Error Handling

This CLI handles:

- Invalid GitHub usernames
- API rate limits
- Network failures
- Invalid responses

---

## 🔮 Future Improvements

- Add GitHub OAuth token support
- Support pagination
- Display detailed commit info
- Add caching and expiry
- Add unit tests

---

## 📄 License

MIT License

---

## 📧 Contact

**Ahmed Mohamed**
Full-Stack Developer

- 📧 [a7mdmo74@gmail.com](mailto:a7mdmo74@gmail.com)
- 🐙 [https://github.com/a7mdmo74](https://github.com/a7mdmo74)

---

**Last Updated:** January 2026

```

```
