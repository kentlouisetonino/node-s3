import DefaultController from '../controllers/DefaultController';
import ExpressService from '../services/ExpressService';
import MulterService from '../services/MulterService';

// * Get the express router instance.
const router = ExpressService.router;

// * Get the multer memory storage instance.
const multerMS = MulterService.memoryStorage;

// * Default S3 endpoints.
router.get('/url', DefaultController.getSignedURL);
router.post('/upload', multerMS.single('file'), DefaultController.uploadFile);
router.post('/delete', multerMS.fields([]), DefaultController.deleteFile);

export default router;
