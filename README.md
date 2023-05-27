## Descriptio
> - A backend application that allows to test your AWS S3 bucket with NodeJS.
    The following features below are implemented are: upload, delete, and get
    the signed URL of the file.

<br />
<br />
<br />



## Setup
> - Run the following commands.

```bash
docker compose up --build -d
yarn install
yarn build
```

<br />

> - Create a `.env` file with the following variables.

```bash
MONGODB_URI=

MYSQL_HOST=localhost
MYSQL_PORT=3310
MYSQL_DATABASE=backend-nodejs
MYSQL_USER=root
MYSQL_PASSWORD=root
```

<br />
<br />
<br />



## API Endpoints for AWS S3

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

<br />

> - Testing for endpoints.

https://user-images.githubusercontent.com/69438999/217460437-453a250e-9770-42de-8eb6-0f015c378e65.mp4

