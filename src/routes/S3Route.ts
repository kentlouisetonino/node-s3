import S3Controller from '../controllers/S3Controller';
import ExpressService from '../services/ExpressService';
import MulterService from '../services/MulterService';

// * Get the express router instance.
const router = ExpressService.router;

// * Get the multer memory storage instance.
const multerMS = MulterService.memoryStorage;

// * Default S3 endpoints.
router.get('/url', S3Controller.getSignedURL);
router.post('/upload', multerMS.single('file'), S3Controller.uploadFile);
router.post('/delete', multerMS.fields([]), S3Controller.deleteFile);

export default router;
