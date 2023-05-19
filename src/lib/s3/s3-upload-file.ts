import S3 from 'aws-sdk/clients/s3';

interface S3UploadFileProps {
  bucketName: string;
  bucketRegion: string;
  bucketAccessKeyId: string;
  bucketSecretAccessKey: string;
  fileBuffer: any;
  fileEncoding: string;
  fileName: string;
  fileContentType: string;
}

/**
 * A function that will allow you to upload a file in your
 * S3 bucket.
 */
export default async function s3UploadFile({
  bucketName,
  bucketRegion,
  bucketAccessKeyId,
  bucketSecretAccessKey,
  fileBuffer,
  fileEncoding,
  fileName,
  fileContentType,
}: S3UploadFileProps) {
  const s3 = new S3({
    region: bucketRegion,
    accessKeyId: bucketAccessKeyId,
    secretAccessKey: bucketSecretAccessKey,
  });

  const params = {
    Bucket: bucketName,
    Body: fileBuffer,
    ContentEncoding: fileEncoding,
    ContentType: fileContentType,
    Key: fileName,
    ACL: 'public-read',
  };

  return s3.upload(params).promise();
}
