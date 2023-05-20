import multer from 'multer';

export default class MulterService {
  static memoryStorage = multer({ storage: multer.memoryStorage() });
}
