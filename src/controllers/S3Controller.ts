import { Request, Response } from 'express';
import S3Service from '../services/S3Service';

export const S3GetSignedURL = async (req: Request, res: Response) => {
  const bucketName: any = req.query?.bucketName;
  const bucketRegion: any = req.query?.bucketRegion;
  const bucketAccessKeyId: any = req.query?.bucketAccessKeyId;
  const bucketSecretAccessKey: any = req.query?.bucketSecretAccessKey;
  const key: any = req.query?.key;

  if (!bucketName) {
    res.send({
      error: 'Bucket name is required.',
    });
  } else if (!bucketRegion) {
    res.send({
      error: 'Bucket region is required.',
    });
  } else if (!bucketAccessKeyId) {
    res.send({
      error: 'Bucket access key ID is required.',
    });
  } else if (!bucketSecretAccessKey) {
    res.send({
      error: 'Bucket secret access key is required.',
    });
  } else if (!key) {
    res.send({
      error: 'Key is required.',
    });
  } else {
    try {
      const s3ObjectURL = await S3Service.getSignedURL({
        bucketName: bucketName,
        bucketRegion: bucketRegion,
        bucketAccessKeyId: bucketAccessKeyId,
        bucketSecretAccessKey: bucketSecretAccessKey,
        key: key,
      });

      res.send({
        statusCode: 200,
        key: s3ObjectURL,
      });
    } catch (error) {
      res.send({
        statusCode: 500,
        error: `${error}`,
      });
    }
  }
};

export const S3Upload = async (req: Request, res: Response) => {
  const bucketName = req.body?.bucketName;
  const bucketRegion = req.body?.bucketRegion;
  const bucketAccessKeyId = req.body?.bucketAccessKeyId;
  const bucketSecretAccessKey = req.body?.bucketSecretAccessKey;
  const file: any = req?.file;

  if (!bucketName) {
    res.send({
      error: 'Bucket name is required.',
    });
  } else if (!bucketRegion) {
    res.send({
      error: 'Bucket region is required.',
    });
  } else if (!bucketAccessKeyId) {
    res.send({
      error: 'Bucket access key ID is required.',
    });
  } else if (!bucketSecretAccessKey) {
    res.send({
      error: 'Bucket secret access key is required.',
    });
  } else if (!file) {
    res.send({
      error: 'File is required.',
    });
  } else {
    try {
      const s3Object = await S3Service.uploadFile({
        bucketName: bucketName,
        bucketRegion: bucketRegion,
        bucketAccessKeyId: bucketAccessKeyId,
        bucketSecretAccessKey: bucketSecretAccessKey,
        fileName: file.originalname,
        fileBuffer: file.buffer,
        fileEncoding: file.encoding,
        fileContentType: file.mimetype!,
      });

      const s3ObjectURL = await S3Service.getSignedURL({
        bucketName: bucketName,
        bucketRegion: bucketRegion,
        bucketAccessKeyId: bucketAccessKeyId,
        bucketSecretAccessKey: bucketSecretAccessKey,
        key: s3Object.Key,
      });

      res.send({
        statusCode: 200,
        key: s3Object.Key,
        url: s3ObjectURL,
      });
    } catch (error) {
      res.send({
        statusCode: 500,
        error: `${error}`,
      });
    }
  }
};

export const S3DeleteFile = async (req: Request, res: Response) => {
  const bucketName: any = req.body?.bucketName;
  const bucketRegion: any = req.body?.bucketRegion;
  const bucketAccessKeyId: any = req.body?.bucketAccessKeyId;
  const bucketSecretAccessKey: any = req.body?.bucketSecretAccessKey;
  const key: any = req.body?.key;

  if (!bucketName) {
    res.send({
      error: 'Bucket name is required.',
    });
  } else if (!bucketRegion) {
    res.send({
      error: 'Bucket region is required.',
    });
  } else if (!bucketAccessKeyId) {
    res.send({
      error: 'Bucket access key ID is required.',
    });
  } else if (!bucketSecretAccessKey) {
    res.send({
      error: 'Bucket secret access key is required.',
    });
  } else if (!key) {
    res.send({
      error: 'Key is required.',
    });
  } else {
    try {
      await S3Service.deleteFile({
        bucketName: bucketName,
        bucketRegion: bucketRegion,
        bucketAccessKeyId: bucketAccessKeyId,
        bucketSecretAccessKey: bucketSecretAccessKey,
        key: key,
      });

      res.send({
        statusCode: 200,
        key: key,
        message: `Successfully deleted the object.`,
      });
    } catch (error) {
      res.send({
        statusCode: 500,
        error: `${error}`,
      });
    }
  }
};
