import { Request, Response } from 'express'

import S3UploadFile from '../lib/s3-upload-file.lib'

const UploadController = async (req: Request, res: Response) => {
  const bucketName = req.body.bucketName
  const bucketRegion = req.body.bucketRegion
  const bucketAccessKeyId = req.body.bucketAccessKeyId
  const bucketSecretAccessKey = req.body.bucketSecretAccessKey
  const file: any = req.file

  const aws = await S3UploadFile({
    bucketName: bucketName,
    bucketRegion: bucketRegion,
    bucketAccessKeyId: bucketAccessKeyId,
    bucketSecretAccessKey: bucketSecretAccessKey,
    fileBuffer: file.buffer,
    fileEncoding: file.encoding,
    fileName: file.originalname,
    fileContentType: file.mimetype!,
  })

  res.send({
    file: aws,
  })
}

export default UploadController
