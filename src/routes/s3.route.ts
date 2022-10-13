import Router from '../lib/router.lib'
import MulterUploadFile from '../lib/multer-upload-file.lib'
import {
  S3UploadController,
  S3GetSignedURL,
} from '../controllers/s3.controller'

Router.post('/upload', MulterUploadFile.single('file'), S3UploadController)
Router.get('/get-url', S3GetSignedURL)

export default Router
