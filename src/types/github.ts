export interface GithubOauthApp {
  name: string;
  clientId?: string;
  redirectUrl: string;
  clientSecretId?: string;
  scope?: string;
}

export interface GithubAccessData {
  accessToken: string;
  scope: string;
  tokenType: string;
}
