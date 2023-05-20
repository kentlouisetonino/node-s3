import {
  S3DeleteFile,
  S3GetSignedURL,
  S3Upload,
} from '../controllers/S3Controller';
import ExpressService from '../services/ExpressService';
import MulterService from '../services/MulterService';

// * Get the express router instance.
const expressRouter = ExpressService.router;

// * Get the multer memory storage instance.
const multerMemoryStorage = MulterService.memoryStorage;

expressRouter.get('/url', S3GetSignedURL);
expressRouter.post('/upload', multerMemoryStorage.single('file'), S3Upload);
expressRouter.post('/delete', multerMemoryStorage.fields([]), S3DeleteFile);

export default expressRouter;
