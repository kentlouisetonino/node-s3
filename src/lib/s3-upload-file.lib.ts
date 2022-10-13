import S3 from 'aws-sdk/clients/s3'

type Params = {
  bucketName: string
  bucketRegion: string
  bucketAccessKeyId: string
  bucketSecretAccessKey: string
  fileBuffer: any
  fileEncoding: string
  fileName: string
  fileContentType: string
}

/**
 * A function that will allow you to upload a file in your
 * S3 bucket.
 */
const s3UploadFile = async ({
  bucketName,
  bucketRegion,
  bucketAccessKeyId,
  bucketSecretAccessKey,
  fileBuffer,
  fileEncoding,
  fileName,
  fileContentType,
}: Params) => {
  const s3 = new S3({
    region: bucketRegion,
    accessKeyId: bucketAccessKeyId,
    secretAccessKey: bucketSecretAccessKey,
  })

  const params = {
    Bucket: bucketName,
    Body: fileBuffer,
    ContentEncoding: fileEncoding,
    ContentType: fileContentType,
    Key: fileName,
    ACL: 'public-read',
  }

  return s3.upload(params).promise()
}

export default s3UploadFile
