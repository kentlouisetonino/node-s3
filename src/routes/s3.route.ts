import Router from '../lib/router.lib'
import MulterUploadFile from '../lib/multer-upload-file.lib'
import {
  S3UploadController,
  S3GetSignedURL,
  S3DeleteFile,
} from '../controllers/s3.controller'

Router.post('/upload', MulterUploadFile.single('file'), S3UploadController)
Router.get('/url', S3GetSignedURL)
Router.post('/delete', S3DeleteFile)

export default Router
