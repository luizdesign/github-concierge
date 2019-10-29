import { Response, Request } from 'express';
import { GithubOauthApp } from '../types/github';
import GitHubRepository from '../repositories/github';

class Github {
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
    const { code } = req.query;

    const accessData = await this.githubRepository.getAccessToken(
      code,
      this.githubConfig,
    );

    req.session.accessToken = accessData.accessToken;

    res.redirect('/user/');
  }
}

export default Github;
