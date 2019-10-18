import { AxiosInstance } from 'axios';
import { GithubOauthApp, GithubAccessData } from '../types/github';
import { User } from '../types/user';
import { Org, OrgsList } from '../types/org';

class Github {
  axios: AxiosInstance;

  constructor(axios: AxiosInstance) {
    this.axios = axios;
  }

  async getAccessToken(code: string, config: GithubOauthApp): Promise<GithubAccessData> {
    const response = await this.axios.request({
      url: 'https://github.com/login/oauth/access_token',
      method: 'post',
      params: {
        /* eslint-disable @typescript-eslint/camelcase */
        client_id: config.clientId,
        client_secret: config.clientSecretId,
        /* eslint-enable @typescript-eslint/camelcase */
        code,
      },
      headers: {
        Accept: 'application/json',
      },
    });

    return {
      accessToken: response.data.access_token,
      scope: response.data.scope,
      tokenType: response.data.token_type,
    };
  }

  async getUserData(accessToken: string): Promise<User> {
    const response = await this.axios.request({
      url: 'https://api.github.com/user',
      method: 'get',
      headers: {
        Accept: 'application/json',
        Authorization: `token ${accessToken}`,
      },
    });

    return {
      name: response.data.name,
      login: response.data.login,
      avatarUrl: response.data.avatar_url,
      homepage: response.data.html_url,
    };
  }

  async getOrgs(accessToken: string): Promise<OrgsList> {
    const response = await this.axios.request({
      url: 'https://api.github.com/user/orgs',
      method: 'get',
      headers: {
        Accept: 'application/json',
        Authorization: `token ${accessToken}`,
      },
    });

    return response.data.map(
      (org: Record<string, string>): Org => ({
        name: org.login,
        description: org.description,
        avatarUrl: org.avatar_url,
      }),
    );
  }
}

export default Github;
