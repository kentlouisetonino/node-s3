import * as util from 'util'
import * as fs from 'fs'

const UnlinkFile = util.promisify(fs.unlink)

export default UnlinkFile
