export interface S3UploadFileProps {
  bucketName: string;
  bucketRegion: string;
  bucketAccessKeyId: string;
  bucketSecretAccessKey: string;
  fileName: string;
  fileBuffer: Buffer;
  fileEncoding: string;
  fileContentType: string;
}

export interface S3DeleteFileProps {
  bucketName: string;
  bucketRegion: string;
  bucketAccessKeyId: string;
  bucketSecretAccessKey: string;
  key: string;
}

export interface S3GetSignedURLProps {
  bucketName: string;
  bucketRegion: string;
  bucketAccessKeyId: string;
  bucketSecretAccessKey: string;
  key: string;
}
