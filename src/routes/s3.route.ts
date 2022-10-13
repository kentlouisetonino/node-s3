import Router from '../lib/router.lib'
import MulterUploadFile from '../lib/multer-upload-file.lib'
import { S3UploadController } from '../controllers/s3.controller'

Router.post('/upload', MulterUploadFile.single('file'), S3UploadController)

export default Router
