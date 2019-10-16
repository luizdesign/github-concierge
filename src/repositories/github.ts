import Axios from 'axios';
import { GithubOauthApp } from '../config/github';

export interface GithubAccessData {
  accessToken: string;
  scope: string;
  tokenType: string;
}

export interface GithubUserData {
  name: string;
  login: string;
  avatarUrl: string;
  homepage: string;
}

class Github {
  static async getAccessToken(code: string, config: GithubOauthApp): Promise<GithubAccessData> {
    const response = await Axios.request({
      url: 'https://github.com/login/oauth/access_token',
      method: 'post',
      params: {
        client_id: config.clientId,// eslint-disable-line
        client_secret: config.clientSecretId,// eslint-disable-line
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

  static async getUserData(accessToken: string): Promise<GithubUserData> {
    const response = await Axios.request({
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
}

export default Github;
