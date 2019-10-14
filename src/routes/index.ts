import { Router } from 'express';
import HomeController from '../controllers/home';

class Routes {
  static make(router: Router): void {
    router.get(
      '/',
      HomeController.mainAction,
    );
  }
}

export default Routes;
