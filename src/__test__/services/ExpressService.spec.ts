import ExpressService from '../../services/ExpressService';

describe('[ ExpressService ]', () => {
  test('a. It should test the Express.app method. ', (done) => {
    const app = ExpressService.app;
    expect(typeof app).toBe('function');
    done();
  });

  test('b. It should test the Express.router method. ', (done) => {
    const router = ExpressService.router;
    expect(typeof router).toBe('function');
    done();
  });
});
