import UploadController from '../controllers/uploadController'
import Router from '../lib/router'
import MulterUploadFile from '../lib/multerUploadFile'

Router.post('/', MulterUploadFile.single('file'), UploadController)

export default Router
