import { Response, Request } from 'express';

class Home {
  static mainAction(_req: Request, res: Response): void {
    res.render('home', { name: 'John', status: true });
  }
}

export default Home;
