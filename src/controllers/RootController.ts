import { Request, Response } from 'express';

export default class RootController {
  static home(_: Request, res: Response) {
    return res.sendFile('index.html', { root: 'public' });
  }
}
