export interface S3UploadFileProps {
  bucketName: string;
  bucketRegion: string;
  bucketAccessKeyId: string;
  bucketSecretAccessKey: string;
  fileBuffer: any;
  fileEncoding: string;
  fileName: string;
  fileContentType: string;
}

export interface S3DeleteFileProps {
  bucketName: string;
  bucketRegion: string;
  bucketAccessKeyId: string;
  bucketSecretAccessKey: string;
  key: string;
}
