import request from 'supertest';
import app from '../app';

describe('#1. Test app.tsx', () => {
  test('#1.1. It should response the GET method.', (done) => {
    request(app)
      .get('/')
      .then((response) => {
        expect(response.statusCode).toBe(200);
        done();
      });
  });
});
