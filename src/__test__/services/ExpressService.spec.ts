import ExpressService from '../../services/ExpressService';

describe('[ ExpressService ]', () => {
  test('a. It should test the Express.app method. ', (done) => {
    const app = ExpressService.app;
    expect(typeof app).toBe('function');
    done();
  });
});
