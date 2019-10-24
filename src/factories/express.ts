import express, { Express } from 'express';
// @ts-ignore
import ExpressReactViews from 'express-react-views';
// @ts-ignore
import ExpressSession from 'express-session';
// @ts-ignore
import redis from 'redis';
// @ts-ignore
import RedisConnect from 'connect-redis';
import Routes from '../routes';

class ExpressFactory {
  static make(): Express {
    const app = express();
    const router = express.Router();
    const RedisStore = RedisConnect(ExpressSession);
    const redisClient = redis.createClient({
      host: process.env.SESSION_HOST,
      port: process.env.SESSION_PORT,
      db: 6,
    });

    app.use(ExpressSession({
      store: new RedisStore({
        client: redisClient,
        ttl: Number(process.env.SESSION_MAX_AGE),
        prefix: process.env.SESSION_COOKIE_PREFIX,
      }),
      secret: process.env.SESSION_SECRET,
      resave: false,
      saveUninitialized: true,
      cookie: {
        secure: false,
        httpOnly: true,
        maxAge: Number(process.env.SESSION_MAX_AGE),
        sameSite: true,
        path: '/',
      },
    }));

    Routes.make(router);
    app.use('/', router);
    app.set('views', 'src/views');
    app.set('view engine', 'tsx');
    app.engine('tsx', ExpressReactViews.createEngine());

    return app;
  }
}

export default ExpressFactory;
