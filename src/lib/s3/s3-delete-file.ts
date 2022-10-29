import S3 from 'aws-sdk/clients/s3'

interface Props {
  bucketName: string
  bucketRegion: string
  bucketAccessKeyId: string
  bucketSecretAccessKey: string
  key: string
}

/**
 * This function will allow you to delete an
 * object in your S3 bucket.
 */
export default async function s3DeleteFile({
  bucketName,
  bucketRegion,
  bucketAccessKeyId,
  bucketSecretAccessKey,
  key,
}: Props) {
  const s3 = new S3({
    region: bucketRegion,
    accessKeyId: bucketAccessKeyId,
    secretAccessKey: bucketSecretAccessKey,
    signatureVersion: 'v4',
  })

  return s3
    .deleteObject({
      Bucket: bucketName,
      Key: key,
    })
    .promise()
}
