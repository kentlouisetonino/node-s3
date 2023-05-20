import S3 from 'aws-sdk/clients/s3';
import {
  S3DeleteFileProps,
  S3GetSignedURLProps,
  S3UploadFileProps,
} from './types';

export default class S3Service {
  /**
   * Use this method if to upload a file.
   * @param bucketName string
   * @param bucketRegion string
   * @param bucketAccessKeyId string
   * @param bucketSecretAccessKey string
   * @param fileName string
   * @param fileBuffer Buffer
   * @param fileEncoding string
   * @param fileContentType string
   */
  static uploadFile({
    bucketName,
    bucketRegion,
    bucketAccessKeyId,
    bucketSecretAccessKey,
    fileName,
    fileBuffer,
    fileEncoding,
    fileContentType,
  }: S3UploadFileProps): Promise<S3.ManagedUpload.SendData> {
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

  /**
   *
   * @param bucketName string
   * @param bucketRegion string
   * @param bucketAccessKeyId string
   * @param bucketSecretAccessKey string
   * @param key string
   */
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

  /**
   *
   * @param bucketName string
   * @param bucketRegion string
   * @param bucketAccessKeyId string
   * @param bucketSecretAccessKey string
   * @param key string
   */
  static getSignedURL({
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
}
