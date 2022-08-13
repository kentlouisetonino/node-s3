import multer from 'multer'

const MulterUploadFile = multer({ storage: multer.memoryStorage() })

export default MulterUploadFile
