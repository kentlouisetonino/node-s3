import {
  S3DeleteFile,
  S3GetSignedURL,
  S3Upload,
} from '../controllers/S3Controller';
import multerInstance from '../libs/multer-instance';
import router from '../libs/router';

router.get('/url', S3GetSignedURL);
router.post('/upload', multerInstance.single('file'), S3Upload);
router.post('/delete', multerInstance.fields([]), S3DeleteFile);

export default router;
