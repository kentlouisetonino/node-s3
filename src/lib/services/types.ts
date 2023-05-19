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
