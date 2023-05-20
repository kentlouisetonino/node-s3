import {
  S3DeleteFile,
  S3GetSignedURL,
  S3Upload,
} from '../controllers/S3Controller';
import ExpressService from '../services/ExpressService';
import MulterService from '../services/MulterService';

ExpressService.router.get('/url', S3GetSignedURL);

ExpressService.router.post(
  '/upload',
  MulterService.memoryStorage.single('file'),
  S3Upload
);

ExpressService.router.post(
  '/delete',
  MulterService.memoryStorage.fields([]),
  S3DeleteFile
);

export default ExpressService.router;
