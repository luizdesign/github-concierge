import { Response, Request } from 'express';

class Github {
  static mainAction(req: Request, res: Response): void {
    const { code } = req.query;

    res.json({
      status: true,
      code,
    });
  }
}

export default Github;
