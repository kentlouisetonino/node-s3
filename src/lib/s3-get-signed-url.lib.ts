import S3 from 'aws-sdk/clients/s3'

type Params = {
  bucketName: string
  bucketRegion: string
  bucketAccessKeyId: string
  bucketSecretAccessKey: string
  key: string
}

const s3GetSignedURL = async ({
  bucketName,
  bucketRegion,
  bucketAccessKeyId,
  bucketSecretAccessKey,
  key,
}: Params) => {
  const s3 = new S3({
    region: bucketRegion,
    accessKeyId: bucketAccessKeyId,
    secretAccessKey: bucketSecretAccessKey,
  })

  return s3.getSignedUrl('getObject', {
    Bucket: bucketName,
    Key: key,
    Expires: 60 * 5,
  })
}

export default s3GetSignedURL
