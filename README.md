## Description
> - A backend application that integrates with Amazon S3. The main technology stack used in this
    project are AWS SDK, REST APIs, TypeScript, ExpressJS, and NodeJS.

<br />

> - Amazon S3 Page: https://aws.amazon.com/s3/

<br />

> - AWS SDK Page: https://www.npmjs.com/package/aws-sdk



<br />
<br />
<br />



## Setup

> - Run the following commands.

```bash
# Development
yarn install
yarn build
yarn dev

# Unit Test
yarn test:all
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
