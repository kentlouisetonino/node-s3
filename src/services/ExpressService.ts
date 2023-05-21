import express from 'express';

export default class ExpressService {
  /**
   * Used this to initiate the server.
   */
  static app = express();

  /**
   * Used this to initiate the router.
   */
  static router = express.Router();
}
