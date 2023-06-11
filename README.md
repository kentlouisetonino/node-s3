## Description

> - A backend application that integrates Amazon S3 with NodeJS.

<br />
<br />
<br />

## Setup

> - Run the following commands.

```bash
yarn install
yarn build
```

<br />
<br />
<br />

## API Endpoints

> - Upload a file.

```plaintext
HTTP Method: POST
URL: http://localhost:11000/api/s3/upload
Body (form-data):
    bucketName: string
    bucketRegion: string
    bucketAccessKeyId: string
    bucketSecretAccessKey: string
    file: File
```

<br />

> - Delete a file.

```plaintext
HTTP Method: POST
URL: http://localhost:11000/api/s3/delete
Body (form-data):
    bucketName: string
    bucketRegion: string
    bucketAccessKeyId: string
    bucketSecretAccessKey: string
    key: string
```

<br />

> - Get the signed URL of the file.

```plaintext
HTTP Method: GET
URL: http://localhost:11000/api/s3/url
Params:
    bucketName: string
    bucketRegion: string
    bucketAccessKeyId: string
    bucketSecretAccessKey: string
    key: string
```
