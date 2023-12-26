import S3Controller from '../controllers/S3Controller';
import ExpressService from '../services/ExpressService';
import MulterService from '../services/MulterService';

// Get the express router instance.
const router = ExpressService.router;

// Get the multer memory storage instance.
const multer = MulterService.memoryStorage;

// Default endpoints.
router.get('/url', S3Controller.getSignedURL);
router.post('/upload', multer.single('file'), S3Controller.uploadFile);
router.post('/delete', multer.fields([]), S3Controller.deleteFile);

export default router;
