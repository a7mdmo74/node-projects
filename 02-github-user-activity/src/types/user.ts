export interface GitHubEvent {
  id: string;
  type: string;
  actor: {
    id: number;
    login: string;
    display_login: string;
    url: string;
    avatar_url: string;
  };
  repo: {
    id: number;
    name: string;
    url: string;
  };
  payload: {
    commits?: Array<{
      sha: string;
      author: {
        email: string;
        name: string;
      };
      message: string;
      url: string;
    }>;
    action?: string;
    issue?: {
      number: number;
      title: string;
      url: string;
    };
    pull_request?: {
      number: number;
      title: string;
      url: string;
    };
    ref?: string;
    ref_type?: string;
  };
  public: boolean;
  created_at: string;
}

export interface GitHubUserActivity {
  id: string;
  userId: string;
  activityType: "push" | "pull request" | "commit" | "star" | "fork" | "issue";
  activityData: string;
  createdAt: string;
  updatedAt: string;
}

export interface User {
  id: string;
  username: string;
  activities: GitHubUserActivity[];
}
