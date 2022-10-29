import multer from 'multer'

/**
 * This will handle the upload of file from client and
 * store it in memory as buffer objects.
 */
const multerUploadFile = multer({ storage: multer.memoryStorage() })

export default multerUploadFile
