import { Response, Request } from 'express';
import { GithubOauthApp } from '../types/github';
import GitHubRepository from '../repositories/github';

class User {
  githubConfig: GithubOauthApp;

  githubRepository: GitHubRepository;

  constructor(
    githubConfig: GithubOauthApp,
    githubRepository: GitHubRepository,
  ) {
    this.githubConfig = githubConfig;
    this.githubRepository = githubRepository;

    this.mainAction = this.mainAction.bind(this);
  }

  async mainAction(req: Request, res: Response): Promise<void> {
    const user = await this.githubRepository.getUserData(
      req.session.accessToken,
    );
    const orgs = await this.githubRepository.getOrgs(
      req.session.accessToken,
    );

    res.render(
      'user',
      {
        user,
        orgs,
      },
    );
  }
}

export default User;
