export interface GithubOauthApp {
  name: string;
  clientId?: string;
  redirectUrl: string;
}

class GitHubConfig {
  static get(): GithubOauthApp {
    const { env } = process;

    return {
      name: 'Github Concierge',
      clientId: env.GITHUB_OAUTH_CLIENT_ID,
      redirectUrl: 'http://localhost:3000/github/oauth/redirect',
    };
  }
}

export default GitHubConfig;
