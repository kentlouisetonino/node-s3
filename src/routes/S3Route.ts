import {
  S3DeleteFile,
  S3GetSignedURL,
  S3Upload,
} from '../controllers/S3Controller';
import ExpressService from '../libs/services/ExpressService';
import MulterService from '../libs/services/MulterService';

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
