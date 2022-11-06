## Description
> A Server-Side Application that will allow you to test your AWS S3 Bucket connection and do some CRUD operations. The following features below are implemented.
> - Upload a file.
> - Delete a file.
> - Get the signed URL of the file.

<br />

## Technology Stack
> [AWS SDK](https://www.npmjs.com/package/aws-sdk) • [ExpressJS](https://www.npmjs.com/package/express) • [Multer](https://www.npmjs.com/package/multer) • [Nodemon](https://www.npmjs.com/package/nodemon) • [TS Node](https://www.npmjs.com/package/ts-node) • [TypeScript](https://www.npmjs.com/package/ts-node) • [REST APIs](https://restfulapi.net/) • [Prettier](https://www.npmjs.com/package/prettier) • [NodeJS](https://nodejs.org/docs/latest-v16.x/api/) 

<br />

## Setup
> - Run the following commands.
```bash
npm run build
npm run dev
```
> - Upload a file.
```bash
HTTP Method: POST
URL: http://localhost:11000/api/s3/upload
Body (form-data):
    bucketName: string
    bucketRegion: string
    bucketAccessKeyId: string
    bucketSecretAccessKey: string
    file: File
```
> - Delete a file.
```bash
HTTP Method: POST
URL: http://localhost:11000/api/s3/delete
Body (form-data):
    bucketName: string
    bucketRegion: string
    bucketAccessKeyId: string
    bucketSecretAccessKey: string
    key: string
```
> - Get the signed URL of the file.
```bash
HTTP Method: GET
URL: http://localhost:11000/api/s3/url
Params:
    bucketName: string
    bucketRegion: string
    bucketAccessKeyId: string
    bucketSecretAccessKey: string
    key: string
```
