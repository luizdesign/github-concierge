import { Router } from 'express';
import HomeController from '../controllers/factories/home';
import UserController from '../controllers/factories/user';
import GithubOauthController from '../controllers/github';

class Routes {
  static make(router: Router): void {
    router.get(
      '/',
      (HomeController.make()).mainAction,
    );

    router.get(
      '/github/oauth/redirect',
      GithubOauthController.mainAction,
    );

    router.get(
      '/user/:oauth/',
      (UserController.make()).mainAction,
    );
  }
}

export default Routes;
