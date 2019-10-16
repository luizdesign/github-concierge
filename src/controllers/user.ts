import { Response, Request } from 'express';
import { GithubOauthApp } from '../config/github';

class User {
  githubConfig: GithubOauthApp;

  constructor(githubConfig: GithubOauthApp) {
    this.githubConfig = githubConfig;
    this.mainAction = this.mainAction.bind(this);
  }

  mainAction(_req: Request, res: Response): void {
    const { clientId } = this.githubConfig;

    res.render(
      'user',
      {
        clientId,
      },
    );
  }
}

export default User;
