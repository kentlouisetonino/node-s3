require('aws-sdk/lib/maintenance_mode_message').suppress = true;
import S3Service from '../../services/S3Service';

describe('[ S3Service ]', () => {
  test('a. It should call the uploadFile method.', (done) => {
    const uploadFile = S3Service.uploadFile;
    expect(typeof uploadFile).toBe('function');
    done();
  });

  test('b. It should call the deleteFile method.', (done) => {
    const deleteFile = S3Service.deleteFile;
    expect(typeof deleteFile).toBe('function');
    done();
  });

  test('c. It should call the getSignedURL method.', (done) => {
    const getSignedURL = S3Service.getSignedURL;
    expect(typeof getSignedURL).toBe('function');
    done();
  });
});
