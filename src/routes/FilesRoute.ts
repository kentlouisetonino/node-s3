import FilesController from '../controllers/FilesController';
import ExpressService from '../services/ExpressService';
import MulterService from '../services/MulterService';

// Get the express router instance.
const router = ExpressService.router;

// Get the multer memory storage instance.
const multer = MulterService.memoryStorage;

router.post('/url', multer.fields([]), FilesController.getSignedURL);
router.post('/upload', multer.single('file'), FilesController.uploadFile);
router.post('/delete', multer.fields([]), FilesController.deleteFile);

export default router;
