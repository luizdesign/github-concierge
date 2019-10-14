import express, { Express } from 'express';
// @ts-ignore
import ExpressReactViews from 'express-react-views';
import Routes from '../routes';

class ExpressFactory {
  static make(): Express {
    const app = express();
    const router = express.Router();

    Routes.make(router);
    app.use('/', router);
    app.set('views', 'src/views');
    app.set('view engine', 'tsx');
    app.engine('tsx', ExpressReactViews.createEngine());

    return app;
  }
}

export default ExpressFactory;
