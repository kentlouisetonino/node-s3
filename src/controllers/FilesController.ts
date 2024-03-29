import { Request, Response } from 'express';
import S3Service from '../services/S3Service';

export default class FilesController {
  static async upload(req: Request, res: Response) {
    const bucketName = req.body?.bucketName;
    const bucketRegion = req.body?.bucketRegion;
    const bucketAccessKeyId = req.body?.bucketAccessKeyId;
    const bucketSecretAccessKey = req.body?.bucketSecretAccessKey;
    const file: any = req?.file;

    if (!bucketName) {
      return res.send({
        error: 'Bucket name is required.',
      });
    } else if (!bucketRegion) {
      return res.send({
        error: 'Bucket region is required.',
      });
    } else if (!bucketAccessKeyId) {
      return res.send({
        error: 'Bucket access key ID is required.',
      });
    } else if (!bucketSecretAccessKey) {
      return res.send({
        error: 'Bucket secret access key is required.',
      });
    } else if (!file) {
      return res.send({
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

        const s3ObjectURL = S3Service.getSignedURL({
          bucketName: bucketName,
          bucketRegion: bucketRegion,
          bucketAccessKeyId: bucketAccessKeyId,
          bucketSecretAccessKey: bucketSecretAccessKey,
          key: s3Object.Key,
        });

        return res.send({
          statusCode: 200,
          key: s3Object.Key,
          url: s3ObjectURL,
        });
      } catch (error) {
        return res.send({
          statusCode: 500,
          error: `${error}`,
        });
      }
    }
  }

  static async delete(req: Request, res: Response) {
    const bucketName = req.body?.bucketName;
    const bucketRegion = req.body?.bucketRegion;
    const bucketAccessKeyId = req.body?.bucketAccessKeyId;
    const bucketSecretAccessKey = req.body?.bucketSecretAccessKey;
    const key = req.body?.key;

    if (!bucketName) {
      return res.send({
        error: 'Bucket name is required.',
      });
    } else if (!bucketRegion) {
      return res.send({
        error: 'Bucket region is required.',
      });
    } else if (!bucketAccessKeyId) {
      return res.send({
        error: 'Bucket access key ID is required.',
      });
    } else if (!bucketSecretAccessKey) {
      return res.send({
        error: 'Bucket secret access key is required.',
      });
    } else if (!key) {
      return res.send({
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

        return res.send({
          statusCode: 200,
          key: key,
          message: `Successfully deleted the object.`,
        });
      } catch (error) {
        return res.send({
          statusCode: 500,
          error: `${error}`,
        });
      }
    }
  }

  static async url(req: Request, res: Response) {
    const bucketName = req.body?.bucketName;
    const bucketRegion = req.body?.bucketRegion;
    const bucketAccessKeyId = req.body?.bucketAccessKeyId;
    const bucketSecretAccessKey = req.body?.bucketSecretAccessKey;
    const key = req.body?.key;

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
        const s3ObjectURL = S3Service.getSignedURL({
          bucketName: bucketName,
          bucketRegion: bucketRegion,
          bucketAccessKeyId: bucketAccessKeyId,
          bucketSecretAccessKey: bucketSecretAccessKey,
          key: key,
        });

        res.send({
          statusCode: 200,
          url: s3ObjectURL,
        });
      } catch (error) {
        res.send({
          statusCode: 500,
          error: `${error}`,
        });
      }
    }
  }
}
