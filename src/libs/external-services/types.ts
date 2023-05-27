export interface S3UploadFileInterface {
  bucketName: string;
  bucketRegion: string;
  bucketAccessKeyId: string;
  bucketSecretAccessKey: string;
  fileName: string;
  fileBuffer: Buffer;
  fileEncoding: string;
  fileContentType: string;
}

export interface S3DeleteFileInterface {
  bucketName: string;
  bucketRegion: string;
  bucketAccessKeyId: string;
  bucketSecretAccessKey: string;
  key: string;
}

export interface S3GetSignedURLInterface {
  bucketName: string;
  bucketRegion: string;
  bucketAccessKeyId: string;
  bucketSecretAccessKey: string;
  key: string;
}
