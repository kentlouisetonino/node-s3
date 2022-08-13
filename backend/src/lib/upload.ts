import multer from 'multer'

const Upload = multer({ dest: 'src/uploads/' })

export default Upload
