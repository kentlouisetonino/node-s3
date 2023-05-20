import S3 from 'aws-sdk/clients/s3';
import {
  S3DeleteFileProps,
  S3GetSignedURLProps,
  S3UploadFileProps,
} from './types';

export default class S3Service {
  /**
   * Use this method if to upload a file.
   * @param bucketName The name of the bucket used in S3.
   * @param bucketRegion The specific region where a specific S3 is located (e.g. ap-southeast-1).
   * @param bucketAccessKeyId The unique identifier that is used to authenticate the role when making API calls to S3.
   * @param bucketSecretAccessKey Used in conjunction with the access key ID to sign API requests and prove the identity of the requester.
   * @param fileBuffer This represents the temporary storage location or data structure that holds the contents of the file until it can be saved to a desired destination, such as storage service or a location file system.
   * @param fileEncoding Refers to the character encoding used for the file part of the request.
   * @param fileName The name of the file.
   * @param fileContentType Provides information about the type and format of the data being transmitted.
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
