import { Request, Response } from 'express';

export default class DefaultController {
  static home(_: Request, res: Response) {
    res.sendFile('index.html', { root: 'public' });
  }
}
