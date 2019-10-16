export interface GithubOauthApp {
  name: string;
  clientId?: string;
  redirectUrl: string;
  clientSecretId?: string;
}

class GitHubConfig {
  static get(): GithubOauthApp {
    const { env } = process;

    return {
      name: 'Github Concierge',
      clientId: env.GITHUB_OAUTH_CLIENT_ID,
      redirectUrl: 'http://localhost:3000/github/oauth/redirect',
      clientSecretId: env.GITHUB_OAUTH_CLIENT_SECRET_ID,
    };
  }
}

export default GitHubConfig;
