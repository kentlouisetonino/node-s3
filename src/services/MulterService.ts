import multer from 'multer';

export default class MulterService {
  /**
   * This is a middleware configured to store files in
   * memory as Buffer objects.
   */
  static memoryStorage = multer({ storage: multer.memoryStorage() });
}
