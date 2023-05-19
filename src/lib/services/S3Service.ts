import S3 from 'aws-sdk/clients/s3';
import { S3DeleteFileProps, S3UploadFileProps } from './types';

export default class S3Service {
  static uploadFile({
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

  static deleteFile({
    bucketName,
    bucketRegion,
    bucketAccessKeyId,
    bucketSecretAccessKey,
    key,
  }: S3DeleteFileProps) {
    const s3 = new S3({
      region: bucketRegion,
      accessKeyId: bucketAccessKeyId,
      secretAccessKey: bucketSecretAccessKey,
      signatureVersion: 'v4',
    });

    return s3
      .deleteObject({
        Bucket: bucketName,
        Key: key,
      })
      .promise();
  }
}
