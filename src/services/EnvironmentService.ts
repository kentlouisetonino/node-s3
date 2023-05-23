export default class EnvironmentService {
  /**
   * Default PORT of the server.
   */
  static PORT = 11000;

  /**
   * URI to connect in monngoDB
   */
  static MONGODB_URI = process.env.MONGODB_URI;
}
