import S3Controller from '../controllers/S3Controller';
import ExpressService from '../libs/services/ExpressService';
import MulterService from '../libs/services/MulterService';

// * Get the express router instance.
const router = ExpressService.router;

// * Get the multer memory storage instance.
const multer = MulterService.memoryStorage;

// * Default endpoints.
router.get('/default/url', S3Controller.getSignedURL);
router.post('/default/upload', multer.single('file'), S3Controller.uploadFile);
router.post('/default/delete', multer.fields([]), S3Controller.deleteFile);

// * PostgreSQL endpoints
router.get('/mongodb/url', S3Controller.getSignedURL);
router.post('/mongodb/upload', multer.single('file'), S3Controller.uploadFile);
router.post('/mongodb/delete', multer.fields([]), S3Controller.deleteFile);

export default router;
