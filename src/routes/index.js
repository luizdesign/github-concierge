const HomeController = require('../controllers/home');

class Routes {
  static make(router) {
    router.get(
      '/',
      HomeController.mainAction,
    );
  }
}

module.exports = Routes;
