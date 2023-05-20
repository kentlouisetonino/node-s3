import {
  S3DeleteFile,
  S3GetSignedURL,
  S3Upload,
} from '../controllers/S3Controller';
import router from '../libs/router';
import MulterService from '../libs/services/MulterService';

router.get('/url', S3GetSignedURL);
router.post('/upload', MulterService.memoryStorage.single('file'), S3Upload);
router.post('/delete', MulterService.memoryStorage.fields([]), S3DeleteFile);

export default router;
