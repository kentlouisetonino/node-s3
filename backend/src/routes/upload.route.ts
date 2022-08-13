import UploadController from '../controllers/upload.controller'
import Router from '../lib/router.lib'
import MulterUploadFile from '../lib/multer-upload-file.lib'

Router.post('/', MulterUploadFile.single('file'), UploadController)

export default Router
