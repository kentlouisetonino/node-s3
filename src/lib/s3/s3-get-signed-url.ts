import S3 from 'aws-sdk/clients/s3';

interface S3GetSignedURLProps {
  bucketName: string;
  bucketRegion: string;
  bucketAccessKeyId: string;
  bucketSecretAccessKey: string;
  key: string;
}

/**
 * This function will get the signed URL from S3
 * in order to be viewable in the browser.
 */
export default async function s3GetSignedURL({
  bucketName,
  bucketRegion,
  bucketAccessKeyId,
  bucketSecretAccessKey,
  key,
}: S3GetSignedURLProps) {
  const s3 = new S3({
    region: bucketRegion,
    accessKeyId: bucketAccessKeyId,
    secretAccessKey: bucketSecretAccessKey,
  });

  return s3.getSignedUrl('getObject', {
    Bucket: bucketName,
    Key: key,
    Expires: 60 * 5,
  });
}
