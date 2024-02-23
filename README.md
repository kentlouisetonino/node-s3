## Description

https://github.com/kentlouisetonino/node-s3/assets/69438999/9217014e-e91b-444f-b8c4-cb294d082274

<br />

> - A backend application that integrates Node.js and Amazon S3.

> - The main technology stack used in this project are AWS SDK,
    REST APIs, TypeScript, ExpressJS, Jest (Unit Testing) and NodeJS.

> - Amazon S3 Page: https://aws.amazon.com/s3/

> - AWS SDK Page: https://www.npmjs.com/package/aws-sdk

<br />
<br />
<br />



## Local Development
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
URL: http://localhost:11000/api/files/upload
Body (form-data):
    bucketName: string
    bucketRegion: string
    bucketAccessKeyId: string
    bucketSecretAccessKey: string
    file: File
```

> - Delete a file.

```plaintext
HTTP Method: POST
URL: http://localhost:11000/api/files/delete
Body (form-data):
    bucketName: string
    bucketRegion: string
    bucketAccessKeyId: string
    bucketSecretAccessKey: string
    key: string
```

> - Get the signed URL of the file.

```plaintext
HTTP Method: POST
URL: http://localhost:11000/api/files/url
Params (form-data):
    bucketName: string
    bucketRegion: string
    bucketAccessKeyId: string
    bucketSecretAccessKey: string
    key: string
```
