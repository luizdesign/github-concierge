import { Response, Request } from 'express';

class Github {
  static mainAction(req: Request, res: Response): void {
    const { code } = req.query;

    res.redirect(`/user/${code}/`);
  }
}

export default Github;
