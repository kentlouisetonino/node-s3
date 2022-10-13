import { Request, Response } from 'express'

import s3UploadFile from '../lib/s3-upload-file.lib'
import s3GetSignedURL from '../lib/s3-get-signed-url.lib'

export const S3UploadController = async (req: Request, res: Response) => {
  const bucketName = req.body.bucketName
  const bucketRegion = req.body.bucketRegion
  const bucketAccessKeyId = req.body.bucketAccessKeyId
  const bucketSecretAccessKey = req.body.bucketSecretAccessKey
  const file: any = req.file

  if (!bucketName) {
    res.send({
      error: 'Bucket name is required.',
    })
  } else if (!bucketRegion) {
    res.send({
      error: 'Bucket region is required.',
    })
  } else if (!bucketAccessKeyId) {
    res.send({
      error: 'Bucket access key ID is required.',
    })
  } else if (!bucketSecretAccessKey) {
    res.send({
      error: 'Bucket secret access key is required.',
    })
  } else if (!file) {
    res.send({
      error: 'File is required.',
    })
  } else {
    try {
      const s3Object = await s3UploadFile({
        bucketName: bucketName,
        bucketRegion: bucketRegion,
        bucketAccessKeyId: bucketAccessKeyId,
        bucketSecretAccessKey: bucketSecretAccessKey,
        fileBuffer: file.buffer,
        fileEncoding: file.encoding,
        fileName: file.originalname,
        fileContentType: file.mimetype!,
      })

      const s3ObjectURL = await s3GetSignedURL({
        bucketName: bucketName,
        bucketRegion: bucketRegion,
        bucketAccessKeyId: bucketAccessKeyId,
        bucketSecretAccessKey: bucketSecretAccessKey,
        key: s3Object.Key,
      })

      res.send({
        key: s3Object.Key,
        url: s3ObjectURL,
      })
    } catch (error) {
      res.send({
        error: `${error}`,
      })
    }
  }
}
