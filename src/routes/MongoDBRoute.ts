import MongoDBController from '../controllers/MongoDBController';
import ExpressService from '../libs/services/ExpressService';
import MulterService from '../libs/services/MulterService';

// * Get the express router instance.
const router = ExpressService.router;

// * Get the multer memory storage instance.
const multerMS = MulterService.memoryStorage;

// * Default S3 endpoints.
router.get('/url', MongoDBController.getSignedURL);
router.post('/upload', multerMS.single('file'), MongoDBController.uploadFile);
router.post('/delete', multerMS.fields([]), MongoDBController.deleteFile);

export default router;
