import { Response, Request } from 'express';
import { GithubOauthApp } from '../config/github';

class Home {
  githubConfig: GithubOauthApp;

  constructor(githubConfig: GithubOauthApp) {
    this.githubConfig = githubConfig;
    this.mainAction = this.mainAction.bind(this);
  }

  mainAction(_req: Request, res: Response): void {
    const { clientId, redirectUrl } = this.githubConfig;

    res.render(
      'home',
      {
        clientId,
        redirectUrl,
      },
    );
  }
}

export default Home;
