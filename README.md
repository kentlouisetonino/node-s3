## Description

> A server-side application that will allow you to test your Amazon S3 Bucket with NodeJS and do some CRUD operations. The following features below are implemented are: `upload a file`, `delete a file`, and `get the signed URL of the file`.

> Amazon S3: https://aws.amazon.com/s3/

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

<br />

## Recording


https://user-images.githubusercontent.com/69438999/217460437-453a250e-9770-42de-8eb6-0f015c378e65.mp4


