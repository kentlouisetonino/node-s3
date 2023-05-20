import S3Controller from '../controllers/S3Controller';
import ExpressService from '../services/ExpressService';
import MulterService from '../services/MulterService';

// * Get the express router instance.
const expressRouter = ExpressService.router;

// * Get the multer memory storage instance.
const multerMS = MulterService.memoryStorage;

expressRouter.get('/url', S3Controller.getSignedURL);
expressRouter.post('/upload', multerMS.single('file'), S3Controller.uploadFile);
expressRouter.post('/delete', multerMS.fields([]), S3Controller.deleteFile);

export default expressRouter;
