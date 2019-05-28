const express = require('express');
const Routes = require('../routes');

class ExpressFactory {
  static make() {
    const app = express();
    const router = express.Router();

    Routes.make(router);

    app.use('/github-concierge/', router);

    return app;
  }
}

module.exports = ExpressFactory;
