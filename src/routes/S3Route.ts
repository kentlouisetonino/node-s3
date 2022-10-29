import MulterUploadFile from '../lib/multer-upload-file'
import router from '../lib/router'
import {
  S3DeleteFile,
  S3GetSignedURL,
  S3UploadController,
} from '../controllers/S3Controller'

router.post('/upload', MulterUploadFile.single('file'), S3UploadController)
router.get('/url', S3GetSignedURL)
router.post('/delete', S3DeleteFile)

export default router
