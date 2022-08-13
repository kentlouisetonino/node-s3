import { Request, Response } from 'express'

import UnlinkFile from '../lib/unlinkFile'

const UploadController = async (req: Request, res: Response) => {
  const bucketName = req.body.bucketName
  const bucketRegion = req.body.bucketRegion
  const bucketKeyId = req.body.bucketKeyId
  const bucketSecretAccessKey = req.body.bucketSecretAccessKey
  const file: any = req.file
  await UnlinkFile(file.path)

  res.send({
    bucketName: bucketName,
    bucketRegion: bucketRegion,
    bucketKeyId: bucketKeyId,
    bucketSecretAccessKey: bucketSecretAccessKey,
    file: file,
  })
}

export default UploadController
