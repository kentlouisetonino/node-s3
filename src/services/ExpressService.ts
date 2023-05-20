import express from 'express';

export default class ExpressService {
  static app = express();
  static router = express.Router();
}
