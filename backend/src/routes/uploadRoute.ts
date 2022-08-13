import UploadController from '../controllers/uploadController'
import Router from '../lib/router'
import Upload from '../lib/upload'

Router.post('/', Upload.single('file'), UploadController)

export default Router
